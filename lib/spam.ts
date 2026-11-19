/**
 * URL rules for the SEO-spam cleanup (see docs/SEO-MIGRATION.md).
 *
 * Every dated WordPress post on friseur-george.de (/YYYY/MM/DD/slug/) was injected
 * casino / betting / gambling spam (≈120 posts in post-sitemap.xml, Sept–Nov 2026).
 * The salon itself never published blog posts, so the whole dated-post namespace is gone.
 */
export const GONE_PATTERNS: RegExp[] = [
  /^\/\d{4}\/\d{2}\/\d{2}\/.+/, // spam posts
  /^\/\d{4}(\/\d{2}){0,2}\/?$/, // date archives of the spam posts
  /^\/category\/casino(\/|$)/i,
  /^\/category\/%d0%be%d0%b1%d0%b7%d0%be%d1%80%d0%bd%d0%b8%d0%ba(\/|$)/i, // "обзорник" (Russian spam category)
  /^\/category\/обзорник(\/|$)/i,
  /^\/category\/damen(\/|$)/i, // post archive that only listed spam posts (8 casino links)
  /^\/author(\/|$)/i,
  /^\/tag(\/|$)/i,
  /^\/page\/\d+\/?$/,
  /^\/(comments\/)?feed(\/|$)/i,
  /\/feed\/?$/i,
  /^\/(post|category|author|tag)-sitemap\d*\.xml$/i,
  // WordPress system endpoints – gone together with WordPress
  /^\/wp-(admin|login\.php|json|cron\.php|includes|content\/plugins|content\/themes)(\/|$)/i,
  /^\/xmlrpc\.php$/i,
];

/** Old URLs that map to a new location. */
export const REDIRECTS: Record<string, string> = {
  "/sitemap_index.xml": "/sitemap.xml",
  "/page-sitemap.xml": "/sitemap.xml",
  "/wp-sitemap.xml": "/sitemap.xml",
  "/cookie-richtlinie": "/cookie-richtlinie-eu/",
  // WordPress slug change on the original (old slug still linked from /damen/)
  "/damen/balayage": "/damen/balayage-friseur/",
  "/damen/balayage/": "/damen/balayage-friseur/",
  "/cookie-richtlinie/": "/cookie-richtlinie-eu/",
};

/** Known spam domains that were injected into the original pages (used by the security report and tests). */
export const SPAM_DOMAINS = ["gemslots.de", "swift-casinos-dk.com"];

export function isGone(pathname: string, search: URLSearchParams): boolean {
  if (search.has("s") || search.has("p") || search.has("cat") || search.has("author")) return true; // WP search / ?p= / archives
  return GONE_PATTERNS.some((re) => re.test(pathname));
}
