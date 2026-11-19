# SEO migration report

## Kept
| Item | Value |
|---|---|
| URLs | identical, including the trailing slash (`trailingSlash: true`); `/impressum` → 308 → `/impressum/` |
| Home `<title>` | `Friseur & Kosmetik GeorgeFriseur & Kosmetik George Wiesbaden` (verbatim, including the duplicated name from the original Yoast setup; worth fixing later) |
| Home meta description | verbatim |
| Legal page titles | `Impressum - …`, `Geschäftsbedingungen - …`, `Cookie-Richtlinie (EU) - …` |
| Canonicals | `https://friseur-george.de/…` |
| Robots | `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1` |
| Open Graph / Twitter | `de_DE`, website, hero image, `summary_large_image` |
| Structured data | Yoast graph (WebPage, ImageObject, BreadcrumbList, WebSite, Organization) |
| Headings | same h2 structure as the original. The home page has no h1 on the original either. |
| Image URLs and alt text | original paths and original alt values (most of them were empty on the original) |
| Theme colour, favicons | `#000000`, `cropped-symbul-schwarz-*` |

**Check:** the Organization `sameAs` in the original Yoast data points to `facebook.com/salon.avic`, `instagram.com/aviggeorge` and `tiktok.com/@aviggeorge`. The header links point to `…/friseurgeorge`. It is kept verbatim. Update it in `app/(home)/page.tsx` if the old handles are outdated.

## Spam removed: HTTP 410 Gone (not redirected)
Rules are in `lib/spam.ts`, applied by `proxy.ts`:
- `/YYYY/MM/DD/*`: **every** post on the original (about 120 in `post-sitemap.xml`, 19 Sep – 17 Nov 2026) is casino, betting or slot spam in many languages. Examples: `/2026/09/24/piper-casino/`, `/2026/11/17/mostbet-registrace-klic-k-rychlemu-startu-v-online-kasinu/`.
- Date archives, `/category/casino/`, `/category/обзорник/`, `/category/damen/` (a post archive with 8 casino links), `/author/*`, `/tag/*`, feeds, `?s=` / `?p=` / `?cat=` / `?author=`.
- `post-sitemap.xml`, `category-sitemap.xml`, `author-sitemap.xml`.
- Dead WordPress endpoints (`/wp-admin`, `/wp-login.php`, `/xmlrpc.php`, `/wp-json`).

Injected links removed from the page content: `gemslots.de` and `swift-casinos-dk.com`, both hidden inside the home page's booking-button widget.

## Redirects (301)
`/sitemap_index.xml`, `/page-sitemap.xml` and `/wp-sitemap.xml` go to `/sitemap.xml`. `/cookie-richtlinie/` goes to `/cookie-richtlinie-eu/`. www goes to the bare domain.

## New sitemap and robots
`/sitemap.xml` lists only the 4 rebuilt pages. `/robots.txt` allows everything except `/wp-admin/` and search, and points to the sitemap.

## Phase 2 pages
All pages from the original `page-sitemap.xml` are rebuilt, with the same URLs and `<title>`s (verbatim, for example "Schnitt - Friseur & Kosmetik George" on both `/damen/damen-schnitt/` and `/herren/schnitt/`, as on the original). They are listed in the new `/sitemap.xml` (23 URLs).

- **`/damen/balayage-friseur/`:** the original page carried `<link rel="canonical" href="https://www.deinfriseursalon.de/balayage-friseur/">`, which points to **another company's domain**. This tells Google that the page is a copy of that site and should not rank. It was either injected or copied in by mistake. The rebuild uses its own URL as the canonical. Check that the text is your own (copyright).
- `/damen/balayage/` → 301 → `/damen/balayage-friseur/` (the slug change made by WordPress on the original).
- The service pages had no meta descriptions on the original (only Balayage had one). Writing descriptions would improve snippets, but that would be new content, so none were added.
- Duplicate titles ("Schnitt" ×2, "Färben" ×2) are kept from the original. Consider making them distinct.

## After go-live
1. Search Console: submit the new sitemap and remove the old `post-sitemap.xml`.
2. Search Console → Removals: add the `/2026/` prefix (temporary removal) to speed things up. 410 responses are dropped faster than 404s.
3. Watch the Coverage report for spam URLs that come back.
