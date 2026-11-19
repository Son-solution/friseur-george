# Visual comparison report

## Method
- **Original:** measured live in Chrome on https://friseur-george.de/ with `getBoundingClientRect()` at a 1366×599 window (1351px content width, because of the 15px scrollbar), after the entrance animations had finished.
- **Rebuild:** `next build && next start`, measured in headless Chrome 1351×599 with the same selectors (`puppeteer-core`).
- The real images could not be used in the test environment (see README). Grey placeholders **with the exact original pixel sizes** were used, so the layout boxes are comparable but the pixels inside the images are not.

## Result: desktop home page (35 elements, values rounded to whole px)

| Element | Original x,y w×h | Rebuild x,y w×h | Max Δ px |
|---|---|---|---|
| `#masthead` | 0,0 1351×261 | 0,0 1351×261 | 0 |
| `.site-branding img` | 498,0 356×181 | 498,0 356×181 | 0 |
| `.header-button` | 889,197 148×47 | 889,197 148×47 | 0 |
| `.header-social-inner-wrap a:first-child` | 1079,204 34×34 | 1079,204 34×34 | 0 |
| `.header-social-inner-wrap a:last-child` | 1263,204 34×34 | 1263,204 34×34 | 0 |
| `.elementor-element-e40d818` | 0,261 1351×20 | 0,261 1351×20 | 0 |
| `.elementor-element-c3fff5b` | 0,281 1351×800 | 0,281 1351×800 | 0 |
| `.elementor-element-564cab5 img` | 10,299 656×652 | 1,299 656×652 | 9 |
| `.elementor-element-27f0c03 h2` | 10,971 656×28 | 1,971 656×28 | 9 |
| `.elementor-element-ae1978f img` | 686,297 656×656 | 694,297 655×656 | 8 |
| `.elementor-element-b8ada4a h2` | 686,973 656×28 | 694,973 655×28 | 8 |
| `.elementor-element-6d396b6` | 0,1081 1351×676 | 0,1081 1351×676 | 0 |
| `.elementor-element-e06fc59` | 68,1101 523×636 | 68,1101 523×636 | 0 |
| `.elementor-element-308e9d9 h2` | 681,1279 598×56 | 681,1279 598×56 | 0 |
| `.elementor-element-9fb3747 p` | 681,1369 598×190 | 681,1369 598×190 | 0 |
| `.elementor-element-7c91dd4` | 0,1757 1351×465 | 0,1757 1351×465 | 0 |
| `.elementor-element-ac4097a img` | 253,1777 275×297 | 253,1777 275×297 | 0 |
| `.elementor-element-04e3da6 h2` | 116,2134 550×28 | 116,2134 550×28 | 0 |
| `.elementor-element-c0f5746 h2` | 116,2172 550×20 | 116,2172 550×20 | 0 |
| `.elementor-element-1889524 img` | 823,1777 275×292 | 823,1777 275×292 | 0 |
| `.elementor-element-85dae50 h2` | 686,2130 550×28 | 686,2130 550×28 | 0 |
| `.elementor-element-70fe711` | 0,2222 1351×723 | 0,2222 1351×723 | 0 |
| `.elementor-element-84975f3 h2` | 106,2232 1140×28 | 106,2232 1140×28 | 0 |
| `.elementor-element-6a282ad p` | 106,2294 1140×82 | 106,2294 1140×82 | 0 |
| `.elementor-element-ce1759c h2` | 106,2396 1140×28 | 106,2396 1140×28 | 0 |
| `.elementor-element-d128877 p` | 106,2458 1140×109 | 106,2458 1140×109 | 0 |
| `.elementor-element-bfc1d89 .elementor-icon-list-text` | 132,2587 285×29 | 132,2587 285×29 | 0 |
| `.elementor-element-b16e65b iframe` | 106,2635 1140×300 | 106,2635 1140×300 | 0 |
| `.elementor-element-449c718` | 0,2945 1351×82 | 0,2945 1351×82 | 0 |
| `.elementor-element-0c6903c h2` | 106,2955 1140×28 | 106,2955 1140×28 | 0 |
| `#colophon` | 0,3027 1351×169 | 0,3027 1351×169 | 0 |
| `#block-24 a` | 203,3093 117×22 | 203,3093 117×22 | 0 |
| `#block-26 a` | 639,3093 73×22 | 639,3093 73×22 | 0 |
| `#block-25 a` | 1073,3093 34×22 | 1073,3093 34×22 | 0 |
| `.site-info p` | 55,3152 1242×27 | 55,3152 1242×27 | 0 |
The page height is **3197px in both**. Every measured box matches to the pixel. The two hero images were re-measured 2.5s after load (after fadeInLeft/Right finished): `10,299 656×652` and `686,297 656×656`, both identical to the original.

## Legal page (/impressum/)
Hero (0,261 1351×200), content box (55,541 1242×…) and paragraph positions match the original within 1px. Text widths differ by a few pixels (the h1 is 175 vs 166px wide) because these pages use the **system font stack** (`-apple-system, Segoe UI, Roboto, …`). The text therefore renders in whatever system font the visitor's OS provides, exactly as on the original. The test machine (Linux) has different system fonts than the Windows/macOS Chrome used to inspect the original.

## Not verified at pixel level (honest limitations)
- **Tablet and mobile (768 / 390 / 375px):** the original could not be measured at those widths (the browser window used for inspection could not be resized). The rebuild uses the original CSS rules and breakpoints (`max-width:767px`, `max-width:1024px`, `min-width:1025px`) and the same DOM. It was checked in headless Chrome: no horizontal overflow at 390px, mobile header 120px, logo 200px, the mobile booking buttons and social row appear, and the hamburger drawer opens and closes (Esc works). A side-by-side check against the live site on a phone is still recommended.
- **Lightbox and drawer open states, cookie banner:** rebuilt from measurements and source knowledge (marked `[R]` in the CSS). The cookie banner was already dismissed in the inspection browser, so its geometry was not compared live.
- **Image pixels:** this depends on `npm run fetch-assets`.
- **1920×1080 and 1440×900:** not measured on the original. The layout is fluid up to the same max-widths (1140 / 1235 / 1407px containers), so it follows from the same CSS.
- The Google Maps iframe could not load in the offline test (no network). The frame size (1140×300) matches.

---

# Phase 2: additional pages (measured 18 Nov 2026)

Same method: the original was measured live in Chrome at 1351px content width, and the rebuild in headless Chrome at 1351×599, with grey placeholders in the exact original image sizes.

## Page heights and key boxes (desktop)

| Page | Original | Rebuild | Result |
|---|---|---|---|
| `/damen/braut/`: 22 boxes (containers, heading, carousel, slides 437×437, arrows, dots, text, all 4 FAQ items including the oversized toggle SVG 2103×1052) | page 9805px | page 9805px | **all 22 boxes identical (0px)** |
| `/herren/dauerwelle/`: page height, FAQ content open (59px) | 10339px | 10339px | identical |
| `/damen/straehnen/`: heading, carousel 1351×777, text 254px, first FAQ header 2291px | identical boxes | identical boxes | 0px. The original was measured while its FAQ slide-open animation was still running; the steady-state height follows the same rule as Dauerwelle. |
| `/produkte/`: carousel 437px, text 891px, first FAQ header 2017px | identical | identical | 0px |
| `/damen/`: 10 boxes (rows 250px, tiles 220×230 / 278×230) | page 992px | page 992px | 0px, except the button text: 94 vs 95px wide (system sans-serif font) |
| `/kontakt/`: 9 boxes (table, cells 763/582px, map 1351×300) | page 1042px | page 1042px | **all identical** |
| `/preisliste/`: heading, image 1024×1003 | page 1530px | page 1530px | image identical. Footer y is 1361 vs 1360 (1px rounding). |
| `/salon/` (and `/galerie/`, `/herren/`: same template) | page 854px | page 854px | boxes identical. The h1 width differs (83 vs 88px) because of the system font stack, as on the legal pages. |

**Content:** for all 13 service pages, the title, text, FAQ titles, FAQ content and FAQ IDs were hashed (SHA-256) on the original and in the rebuild. **13 of 13 match.** The 200 carousel slides (path and alt text, in order) also match by hash.

## Not verified against the original
- **Mobile (390 / 375px) and tablet (768px):** the original could not be rendered at those widths, because the inspection window could not be resized. The rebuild was checked on its own: no horizontal overflow, 1 slide per view on mobile, 2 on tablet (374px each at 768px), and the Damen tiles stack. Screenshots: `docs/rebuild-damen-mobile-390.png` and `docs/rebuild-braut-mobile-390.png`.
- **Each carousel's starting position and timing** after load: same Swiper settings, but the original's starting slide offset depends on when it was initialised.
- **Image pixels:** verifiable only after `npm run fetch-assets`.
- The other 8 service pages use the same template and data structure. Their content was hash-verified, but their geometry was not measured one by one.
