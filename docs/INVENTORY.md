# Inventory of the original site (inspected 18 Nov 2026)

Inspected in a real Chrome browser (DOM, computed styles, stylesheets, data-settings, screenshots, and a HEAD check of every image) at 1366×599 (1351px content width).

Stack: WordPress, the Kadence 1.5.2 theme, Elementor 4.2.4, Essential Addons (EAEL accordion), Complianz, Yoast, Site Kit, Trustindex.

## Pages (all legitimate pages are rebuilt)

| URL | Original template / notes | Rebuild |
|---|---|---|
| `/` | Elementor, page CSS present | ✅ |
| `/damen/` | Elementor, page CSS present (post-132.css): 9 image tiles with buttons | ✅ |
| `/damen/damen-schnitt/` (24 slides), `/damen/faerben/` (15), `/damen/balayage-friseur/` (67), `/damen/straehnen/` (27), `/damen/extentions/` (11), `/damen/make-up/` (5), `/damen/braut/` (3, arrows + dots), `/damen/hochstecken/` (17), `/damen/haar-protin/` (4), `/herren/schnitt/` (7), `/herren/faerben/` (6), `/herren/dauerwelle/` (4), `/produkte/` (10) | Elementor service template: heading → carousel (3 per view, 20px gap, autoplay 5s, arrows, lightbox) → text → EAEL FAQ accordion. **Page CSS returns 404 on the original.** | ✅ |
| `/damen/balayage/` | WordPress redirects to `/damen/balayage-friseur/`; the old slug is still linked from `/damen/` | 301 → `/damen/balayage-friseur/` |
| `/kontakt/` | Elementor: hours table, address, Google Maps. Page CSS 404. **Saturday shows 08:00–17:00 here but 08:00–16:00 on the home page** (kept as on the original). | ✅ |
| `/preisliste/` | Elementor: 1 price-list image (desktop/tablet), 3 images (mobile). Page CSS 404. | ✅ |
| `/herren/`, `/salon/`, `/galerie/` | Kadence page with a title only and no content | ✅ |
| `/impressum/`, `/geschaeftsbedingungen/`, `/cookie-richtlinie-eu/` | Kadence | ✅ |
| `/datenschutzerklaerung/` | **does not exist (404)** but is linked from the AGB | not created (legal content; see SECURITY.md) |

Navigation: the WordPress menu is empty on the original. Pages are reachable through the logo, the footer, `/damen/` and the sitemap. This is reproduced as is.

## Assets: 223 files
`scripts/assets-manifest.json`: 16 on the home page and favicons, 200 carousel slides (194 unique files, because some photos appear on several pages), 9 `/damen/` tile backgrounds and 4 price-list images. All returned HTTP 200 `image/*` on 18 Nov 2026, about 63 MB in total.

## Interactive behaviour
| Element | Original | Rebuild |
|---|---|---|
| Sticky logo row, mobile drawer | Kadence | same classes and heights |
| Home carousel | Swiper: 1 slide, 5s, loop, pause on hover | same |
| Service carousels | Swiper: 3 / 2 / 1 slides (desktop / tablet / mobile), 20px gap, 5s autoplay, loop, arrows; Braut also has dots | same options |
| Lightbox | Elementor: `rgba(0,0,0,.8)`, counter, prev/next | rebuilt from measurements |
| FAQ accordion | EAEL accordion, 300ms slide, first item open after initialisation, one open at a time | same |
| Entrance animations | fadeInLeft/Right/Up/Down, 1.25s, start when the element enters the viewport | same keyframes and classes |
