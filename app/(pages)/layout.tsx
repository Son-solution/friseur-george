import type { ReactNode } from "react";
import "../styles/globals.css";
import SiteShell from "@/components/SiteShell";
import { baseMetadata, viewport } from "@/lib/metadata";

export const metadata = baseMetadata;
export { viewport };

/** Body classes of the original Elementor full-width pages (service pages, Damen, Kontakt, Preisliste). */
const BODY_CLASS =
  "wp-singular page-template-default page wp-custom-logo wp-embed-responsive wp-theme-kadence footer-on-bottom hide-focus-outline link-style-standard content-title-style-hide content-width-fullwidth content-style-unboxed content-vertical-padding-hide non-transparent-header mobile-non-transparent-header kadence-elementor-colors elementor-default elementor-kit-7 elementor-page";

export default function PagesRootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de-DE">
      <body className={BODY_CLASS}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
