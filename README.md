# Friseur & Kosmetik George – Next.js

A rebuild of https://friseur-george.de/ in Next.js 16 (App Router, React 19, TypeScript, Tailwind v4). It works without WordPress, and the casino and SEO spam injected into the original is removed.

## Status: all legitimate pages are rebuilt (phase 1 + phase 2)

| Route | Template | Status |
|---|---|---|
| `/` | Elementor home | ✅ geometry verified at desktop size |
| `/damen/` | Elementor (9 service tiles) | ✅ verified at desktop size |
| `/damen/damen-schnitt/`, `/damen/faerben/`, `/damen/balayage-friseur/`, `/damen/straehnen/`, `/damen/extentions/`, `/damen/make-up/`, `/damen/braut/`, `/damen/hochstecken/`, `/damen/haar-protin/` | service template | ✅ content byte-identical (hash-checked); Braut, Strähnen and Balayage geometry verified |
| `/herren/schnitt/`, `/herren/faerben/`, `/herren/dauerwelle/`, `/produkte/` | service template | ✅ content hash-checked; Dauerwelle and Produkte geometry verified |
| `/preisliste/`, `/kontakt/` | Elementor | ✅ verified at desktop size |
| `/herren/`, `/salon/`, `/galerie/` | Kadence (title only; these pages are empty on the original) | ✅ |
| `/impressum/`, `/geschaeftsbedingungen/`, `/cookie-richtlinie-eu/`, 404 | Kadence | ✅ |

Pixel-level verification was possible only at desktop size (1351px content width). Mobile and tablet layouts use the original CSS rules, but there was no original to compare them against. See `docs/VISUAL-COMPARISON.md`.

## 1. Get the original images (required, one time)

The build environment could not download files from friseur-george.de, so **none of the 223 original image files are in this ZIP**. All 223 paths were checked against the live server (each returns HTTP 200 with type `image/*`; about 63 MB in total).

```bash
npm install
npm run fetch-assets     # downloads into public/wp-content/uploads/… using the original paths
npm run check-assets     # should print "All original images present."
```

Then commit `public/wp-content/`. The list of files is in `scripts/assets-manifest.json`. The script accepts image responses only and never downloads code.

## 2. Run

```bash
npm install
npm run dev              # http://localhost:3000
npm run build && npm start
```

Requires Node.js 20.9 or newer.

## 3. Deploy to Vercel

1. Push the repo, including `public/wp-content/`, to GitHub.
2. In Vercel, choose **New Project** and import the repo. Next.js is detected automatically, and no environment variables are needed.
3. Add the domains `friseur-george.de` and `www.friseur-george.de`. `proxy.ts` redirects www to the bare domain with a 301.
4. Submit `/sitemap.xml` in Google Search Console and remove the old spam sitemap (`docs/SEO-MIGRATION.md`).

## Project layout

```
app/(home)/        home page (its own root layout)
app/(pages)/       Elementor full-width pages: /damen/, /damen/[slug], /herren/[slug], /produkte, /kontakt, /preisliste
app/(legal)/       Kadence default template: Impressum, AGB, Cookie-Richtlinie, /herren/, /salon/, /galerie/, 404
app/styles/        original CSS, cut down to the rules actually used (Kadence, Elementor, EAEL, Complianz) + pages.css + fixes.css
components/        header, footer, carousels, lightbox, EAEL accordion, animations, cookie banner
lib/services.ts    verbatim content of the 13 service pages (text, FAQs, 200 carousel slides)
lib/spam.ts        410 / 301 rules · proxy.ts
scripts/           fetch-assets.mjs + assets-manifest.json (223 files)
docs/              inventory, SEO, security and visual comparison reports
```

## Important note about the service pages

On the original, the page stylesheets of the 13 service pages and of Kontakt and Preisliste **are missing (HTTP 404)**. The live pages therefore look broken: very large chevron icons in the FAQ boxes, grey bands, and unstyled containers. The rebuild reproduces **exactly that** rendering, as the 1:1 brief requires. `app/styles/pages.css` explains how this happens. If you would rather have the pages styled the way they were presumably designed, that is a deliberate design decision for you to make separately.
