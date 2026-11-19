import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: { absolute: "Impressum - Friseur & Kosmetik George" },
  alternates: { canonical: "/impressum/" },
  openGraph: { title: "Impressum - Friseur & Kosmetik George", url: "/impressum/" },
};

const arial = { fontSize: "12pt", fontFamily: "arial, helvetica, sans-serif" } as const;

/* Content verbatim from https://friseur-george.de/impressum/ (empty map widget and stray empty <div>s omitted – they rendered 0px high). */
export default function ImpressumPage() {
  return (
    <LegalPage title="Impressum" postId={469}>
      <p>Angaben gemäß § 5 TMG</p>
      <p>
        <strong>Friseur &amp; Kosmetik George</strong>
      </p>
      <div className="elementor-element elementor-element-818b052 elementor-widget elementor-widget-text-editor" data-id="818b052" data-element_type="widget">
        <div className="elementor-widget-container">
          <p>
            <span style={arial}>Dotzheimer Straße 39,</span>
          </p>
          <p>
            <span style={arial}>65185 Wiesbaden</span>
          </p>
        </div>
      </div>
      <p>
        <strong>Inhaber:</strong>
      </p>
      <p>Betriebsleiter &amp; Meister George</p>
      <p>
        <strong>Umsatzsteuer-Identifikationsnummer:</strong>
      </p>
      <p>
        <strong>Kontakt:</strong>
        <br />
        Telefon: <span style={{ fontFamily: "var(--global-body-font-family)" }}>0611 51017717</span>
      </p>
      <p>E-Mail: info@friseur-george.de</p>
      <p>
        <strong>Aufsichtsbehörde:</strong>
        <br />
        Handwerkskammer
      </p>
    </LegalPage>
  );
}
