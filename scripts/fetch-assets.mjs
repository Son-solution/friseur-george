#!/usr/bin/env node
/**
 * Downloads the ORIGINAL image files from friseur-george.de into /public,
 * keeping the original WordPress upload paths (so every image URL stays identical).
 *
 * Why a script? The reconstruction environment could not reach friseur-george.de
 * directly, so the binary originals could not be bundled. Run this once on any
 * machine with normal internet access, then commit /public/wp-content:
 *
 *   npm run fetch-assets          # download every missing file
 *   npm run check-assets          # only report which files are missing
 *
 * Only plain image files from /wp-content/uploads/ are fetched. No scripts, no
 * HTML, nothing executable is copied from the original server.
 */
import { mkdir, writeFile, access } from "node:fs/promises";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ORIGIN = "https://friseur-george.de";
const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..", "public");

// Full list (home, service pages, Damen backgrounds, Preisliste, favicons) – generated from
// lib/site.ts + lib/services.ts. Keep it in sync when content changes.
export const ASSETS = JSON.parse(readFileSync(join(dirname(fileURLToPath(import.meta.url)), "assets-manifest.json"), "utf8"));

const checkOnly = process.argv.includes("--check");

async function exists(p) {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

let missing = 0;
let failed = 0;
for (const path of ASSETS) {
  const target = join(ROOT, path);
  if (await exists(target)) continue;
  missing++;
  if (checkOnly) {
    console.log(`missing  ${path}`);
    continue;
  }
  try {
    const res = await fetch(ORIGIN + encodeURI(path), { redirect: "follow" });
    const type = res.headers.get("content-type") || "";
    if (!res.ok || !type.startsWith("image/")) throw new Error(`HTTP ${res.status} (${type})`);
    await mkdir(dirname(target), { recursive: true });
    await writeFile(target, Buffer.from(await res.arrayBuffer()));
    console.log(`saved    ${path}`);
  } catch (err) {
    failed++;
    console.warn(`FAILED   ${path}: ${err.message}`);
  }
}

if (checkOnly) {
  console.log(missing ? `\n${missing} of ${ASSETS.length} original images are missing. Run: npm run fetch-assets` : "All original images present.");
} else {
  console.log(failed ? `\n${failed} download(s) failed.` : `\nDone. ${missing} file(s) downloaded.`);
  if (failed) process.exitCode = 1;
}
