# Security report

## Findings on the original WordPress site
1. **Compromised content (SEO spam injection).** About 120 casino and betting posts were published in Sept–Nov 2026, and they are still being added (17 posts on 17 Nov alone). There are also spam categories (`casino`, `обзорник`) and 2 hidden outbound casino links in the home page (`gemslots.de`, `swift-casinos-dk.com`). This usually means a stolen admin login, a vulnerable plugin or a backdoor. **Change all WordPress, hosting, FTP and database passwords, and do not reuse the old installation.**
2. Many plugins (Elementor, Essential Addons, Fluent Forms, Complianz, Site Kit, Trustindex, plus Slider Revolution and other leftovers visible in the cookie list) give a large attack surface.
3. Broken template placeholders in the cookie banner (`{title}`, `Manage {vendor_count} vendors`).

4. **Foreign canonical on `/damen/balayage-friseur/`** (points to deinfriseursalon.de). Treat it as possible tampering and check it.
5. The page stylesheets of 15 Elementor pages are missing on the server (HTTP 404), which is why they look broken. This is a sign of an unfinished migration or cache, or of a damaged installation.

## What this project does differently
- **No code was copied from the original server.** None of the WordPress, jQuery, Elementor, Complianz, gtag or Trustindex scripts are included. Only CSS rules (as text) and image files (fetched by `scripts/fetch-assets.mjs`, which accepts `image/*` responses only) come from the original.
- No database, no admin login, no PHP. The site is statically rendered by Next.js.
- `npm audit`: **0 vulnerabilities**. Swiper was pinned to 14.x because 11.x is affected by GHSA-hmx5-qpq5-p643.
- Security headers (`next.config.ts`): a CSP (self-hosted scripts, fonts and images; frames only from Google Maps), `X-Content-Type-Options`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy` and `Permissions-Policy`. The `X-Powered-By` header is turned off.
- External links use `rel="noopener noreferrer"`.
- The booking links keep Salonkee (`salonkee.de/salon/george/widget/service`). The single-use Google "Reserve" tracking tokens (`gei`, `rwg_token`, `ved`) were dropped.

## Privacy and analytics
- The original loaded **Google Analytics (gtag GT-PZZ2NNJT) before consent**. It is **not** included here. If you want analytics, load it only after the `fg:consent` event reports `statistics: true` (see `components/CookieBanner.tsx`), and add the Google domains to the CSP.
- The cookie banner stores consent in the same `cmplz_*` cookie names, so visitors who already consented are not asked again.

## Legal to-dos for the site owner (not legal advice)
- **There is no Datenschutzerklärung (privacy policy)**: `/datenschutzerklaerung/` returns 404 on the original, but the AGB and the banner refer to it. German websites (DSGVO) normally need one.
- The Cookie-Richtlinie and AGB are Complianz-generated English texts that describe WordPress cookies. After the move to Next.js they no longer match reality and should be updated.
- The Impressum shows no USt-IdNr. (the field is empty) and an e-mail address (`info@…`) that differs from the header (`bashar.george85@gmail.com`).
