#!/usr/bin/env node
/**
 * Refreshes data/reviews.json from the salon's public Google Maps listing
 * (overall rating, review count, newest reviews). Runs every 10 days in
 * .github/workflows/update-reviews.yml; can also be run by hand:
 *
 *   npm i --no-save playwright@1.49.1 && npx playwright install chromium
 *   node scripts/update-reviews.mjs [path/to/reviews.json]
 *
 * Safety: if anything looks wrong (no rating, too few reviews, layout changed),
 * the script exits WITHOUT touching the file, so the site keeps the last good data.
 * Google Maps has no stable markup; selectors below may need updating some day.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { chromium } from "playwright";

const OUT = resolve(process.argv[2] ?? "data/reviews.json");
const PLACE_URL =
  "https://www.google.com/maps/place/Friseur+George/@50.0785701,8.2310257,17z/data=!4m8!3m7!1s0xc414eb026fc85d9:0xe8340e077ab28bb6!8m2!3d50.0785701!4d8.2310257!9m1!1b1!16s%2Fg%2F11tss2j5wz?hl=de";
const MAX_REVIEWS = 12; // newest reviews kept (5★ with text)
const MIN_NEW = 3; // fewer usable reviews than this = treat the run as failed

/** Reviews never shown on the site (Google review ids). */
const EXCLUDE_IDS = new Set([
  // Armu Ferman: complaint about a missed appointment, later raised to 5★ with an update
  "Ci9DQUlRQUNvZENodHljRjlvT21WTWExbEdhbW96TjFaVlZtZDVVRFZ3YzNKVWMwRRAB",
]);
/** 5★ reviews that still read like a complaint are skipped if they contain one of these. */
// (keep these specific: e.g. "schlecht" also appears in praise like "mit schlechter Laune ankommen")
const COMPLAINT_WORDS = /peinlich|beschwerde|enttäusch|unverschämt|nicht erschienen|absagen|---\s*update/i;

const log = (...a) => console.log("[reviews]", ...a);
// On GitHub Actions, ::notice:: / ::warning:: become annotations on the run, readable
// via the public check-runs API without logging in (job logs need auth).
const CI = !!process.env.GITHUB_ACTIONS;
const annotate = (level, msg) => CI && console.log(`::${level} title=Google reviews::${msg.replace(/\n/g, " ")}`);
const fail = (msg) => {
  console.error("[reviews] SKIPPED, file unchanged:", msg);
  annotate("warning", `SKIPPED, file unchanged: ${msg}`);
  process.exit(0); // not an error for CI: just keep the old data
};

let previous = { reviews: [] };
try {
  previous = JSON.parse(readFileSync(OUT, "utf8"));
} catch {
  /* first run */
}

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({
  locale: "de-DE",
  viewport: { width: 1280, height: 1000 },
  userAgent:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
});
const page = await ctx.newPage();

try {
  await page.goto(PLACE_URL, { waitUntil: "domcontentloaded", timeout: 60_000 });

  // EU cookie consent (consent.google.com) – accept if shown
  if (page.url().includes("consent.")) {
    log("consent page");
    await page.locator('button:has-text("Alle akzeptieren"), button:has-text("Accept all")').first().click({ timeout: 15_000 });
    await page.waitForURL(/google\.[a-z.]+\/maps/, { timeout: 30_000 });
  }

  // The URL's !9m1!1b1 opens the reviews tab directly; click it if it isn't open yet
  const loaded = await page.waitForSelector("div[data-review-id]", { timeout: 20_000 }).catch(() => null);
  if (!loaded) {
    const tab = page.locator('button[role="tab"]:has-text("Rezensionen"), button[role="tab"]:has-text("Reviews")').first();
    await tab.click({ timeout: 15_000 });
    await page.waitForSelector("div[data-review-id]", { timeout: 30_000 });
  }

  // Overall rating + count from the reviews summary ("5,0" … "72 Berichte"),
  // falling back to the place header ("4,9" "(123)").
  const panelText = await page.locator('div[role="main"]').first().innerText().catch(() => "");
  let m = panelText.match(/(\d[.,]\d)\s*\n(?:[^\n]*\n)?\s*([\d.]+)\s*(?:Berichte|Rezensionen|Bewertungen|reviews)/i);
  if (!m) {
    const header = await page.locator("div.F7nice").first().innerText({ timeout: 5_000 }).catch(() => "");
    const h = header.match(/(\d[.,]\d)[\s\S]*?\(([\d.]+)\)/);
    if (h) m = h;
  }
  if (!m) fail("no rating/count found");
  const rating = m[1].replace(".", ",");
  const count = Number(m[2].replace(/\./g, "")) || null;
  log("rating", rating, "count", count);

  // Sort by newest
  const sortBtn = page.locator('button[aria-label*="sortieren" i], button[aria-label*="Sort" i], button[data-value="Sortieren"]').first();
  if (await sortBtn.count()) {
    await sortBtn.click().catch(() => {});
    const newest = page.locator('[role="menuitemradio"]:has-text("Neueste"), [role="menuitemradio"]:has-text("Newest")').first();
    if (await newest.count()) {
      await newest.click().catch(() => {});
      await page.waitForTimeout(2500);
    }
  }

  // Scroll the review pane to load more
  for (let i = 0; i < 8; i++) {
    await page.evaluate(() => {
      const el = document.querySelector("div[data-review-id]")?.closest("div.m6QErb[tabindex], div.m6QErb.DxyBCb, div[role='main'] div.m6QErb");
      el?.scrollBy(0, 3000);
    });
    await page.waitForTimeout(1200);
  }

  // Expand truncated texts ("Mehr anzeigen"); a DOM click works where Playwright clicks don't
  await page.evaluate(() => {
    document.querySelectorAll('button[aria-label="Mehr anzeigen"], button[aria-label="See more"], button.w8nwRe').forEach((b) => b.click());
  });
  await page.waitForTimeout(1500);

  const scraped = await page.evaluate(() => {
    const seen = new Set();
    const out = [];
    for (const el of document.querySelectorAll("div[data-review-id]")) {
      const id = el.getAttribute("data-review-id");
      if (seen.has(id)) continue;
      const name = el.querySelector(".d4r55")?.textContent?.trim();
      if (!name) continue; // nested duplicates carry the id without content
      seen.add(id);
      const starsLabel = el.querySelector('[role="img"][aria-label*="Stern"], [role="img"][aria-label*="star"]')?.getAttribute("aria-label") ?? "";
      const stars = Number((starsLabel.match(/(\d)/) ?? [])[1] ?? 0);
      const text = el.querySelector(".wiI7pd")?.innerText?.trim() ?? "";
      out.push({ id, name, stars, text });
    }
    return out;
  });
  log("scraped", scraped.length, "reviews");

  const fresh = scraped
    .filter((r) => r.stars === 5 && r.text.length >= 15 && !EXCLUDE_IDS.has(r.id) && !COMPLAINT_WORDS.test(r.text))
    .map(({ id, name, text }) => ({ id, name, text }));
  if (fresh.length < MIN_NEW) fail(`only ${fresh.length} usable reviews`);

  // newest first; top up with older saved ones so the list never shrinks
  const merged = [...fresh];
  for (const r of previous.reviews ?? []) {
    if (merged.length >= MAX_REVIEWS) break;
    if (r.id && EXCLUDE_IDS.has(r.id)) continue;
    if (!merged.some((m) => (m.id && m.id === r.id) || (m.name === r.name && m.text === r.text))) merged.push(r);
  }
  const data = {
    updatedAt: new Date().toISOString().slice(0, 10),
    rating,
    count: count ?? previous.count ?? null,
    reviews: merged.slice(0, MAX_REVIEWS),
  };

  const before = JSON.stringify({ ...previous, updatedAt: undefined });
  const after = JSON.stringify({ ...data, updatedAt: undefined });
  const summary = `OK: rating ${rating}, ${count} reviews on Google, ${scraped.length} scraped, ${fresh.length} usable`;
  if (before === after) {
    log("no changes");
    annotate("notice", `${summary}; no changes`);
  } else {
    writeFileSync(OUT, JSON.stringify(data, null, 2) + "\n");
    log("written", OUT, `(${data.reviews.length} reviews)`);
    annotate("notice", `${summary}; updated (${data.reviews.length} reviews saved)`);
  }
} catch (e) {
  fail(e instanceof Error ? e.message : String(e));
} finally {
  await browser.close();
}
