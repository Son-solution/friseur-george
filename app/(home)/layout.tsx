import type { ReactNode } from "react";
import "../styles/globals.css";
import SiteShell from "@/components/SiteShell";
import { baseMetadata, viewport } from "@/lib/metadata";

export const metadata = baseMetadata;
export { viewport };

/** Body classes exactly as WordPress/Kadence/Elementor printed them on the home page (page-id 9). */
const BODY_CLASS =
  "home wp-singular page-template-default page page-id-9 wp-custom-logo wp-embed-responsive wp-theme-kadence footer-on-bottom hide-focus-outline link-style-standard content-title-style-hide content-width-fullwidth content-style-unboxed content-vertical-padding-hide non-transparent-header mobile-non-transparent-header kadence-elementor-colors elementor-default elementor-kit-7 elementor-page elementor-page-9";

export default function HomeRootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de-DE">
      <body className={BODY_CLASS}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
