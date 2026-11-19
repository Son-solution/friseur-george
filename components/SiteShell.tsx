import type { ReactNode } from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import CookieBanner from "./CookieBanner";
import KadenceFocus from "./KadenceFocus";

/** Kadence page frame: skip link, #wrapper, header, #inner-wrap, footer, cookie banner. */
export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <CookieBanner />
      <div id="wrapper" className="site wp-site-blocks">
        <a className="skip-link screen-reader-text scroll-ignore" href="#main">
          Zum Inhalt springen
        </a>
        <SiteHeader />
        <main id="inner-wrap" className="wrap kt-clear" role="main">
          {children}
        </main>
        <SiteFooter />
      </div>
      <KadenceFocus />
    </>
  );
}
