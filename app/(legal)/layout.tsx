import type { ReactNode } from "react";
import "../styles/globals.css";
import SiteShell from "@/components/SiteShell";
import { baseMetadata, viewport } from "@/lib/metadata";

export const metadata = baseMetadata;
export { viewport };

/**
 * Body classes of the original legal pages (Kadence default page template, boxed content,
 * title above). "elementor-kit-7" is deliberately omitted: on the original these pages do not
 * load the Elementor kit stylesheet, so the kit's black background / EB Garamond body font
 * never applied to them.
 */
const BODY_CLASS =
  "wp-singular page-template-default page wp-custom-logo wp-embed-responsive wp-theme-kadence footer-on-bottom hide-focus-outline link-style-standard content-title-style-above content-width-normal content-style-boxed content-vertical-padding-show non-transparent-header mobile-non-transparent-header kadence-elementor-colors elementor-default";

export default function LegalRootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de-DE">
      <body className={BODY_CLASS}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
