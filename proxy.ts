import { NextResponse, type NextRequest } from "next/server";
import { isGone, REDIRECTS } from "./lib/spam";

/**
 * Next.js 16 proxy (formerly "middleware").
 * - www → apex redirect (the original canonical host is https://friseur-george.de)
 * - 410 Gone for confirmed spam URLs and dead WordPress endpoints (never redirected to the home page)
 * - 301 for the few legitimate legacy URLs that moved
 */
export function proxy(req: NextRequest) {
  const url = req.nextUrl;
  const host = req.headers.get("host") || "";

  if (host.startsWith("www.")) {
    const target = new URL(url.pathname + url.search, `https://${host.slice(4)}`);
    return NextResponse.redirect(target, 301);
  }

  const redirect = REDIRECTS[url.pathname];
  if (redirect) return NextResponse.redirect(new URL(redirect, url), 301);

  if (isGone(url.pathname, url.searchParams)) {
    return new NextResponse(
      '<!doctype html><html lang="de"><head><meta charset="utf-8"><meta name="robots" content="noindex"><title>410 – Inhalt entfernt</title></head><body style="font-family:sans-serif;padding:2rem"><h1>410 – Diese Seite wurde dauerhaft entfernt.</h1><p><a href="/">Zur Startseite von Friseur &amp; Kosmetik George</a></p></body></html>',
      { status: 410, headers: { "content-type": "text/html; charset=utf-8", "x-robots-tag": "noindex", "cache-control": "public, max-age=3600" } }
    );
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/|favicon\\.ico|robots\\.txt|sitemap\\.xml|wp-content/uploads/).*)"],
};
