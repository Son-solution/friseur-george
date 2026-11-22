import type { Metadata } from "next";
import ElementorPage, { Boxed, Full, Heading, Widget } from "@/components/ElementorPage";
import ServiceSplit from "@/components/ServiceSplit";
import { IMAGES } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Herren - Friseur & Kosmetik George" },
  alternates: { canonical: "/herren/" },
  openGraph: { title: "Herren - Friseur & Kosmetik George", url: "/herren/" },
};

/*
 * On the original this page has a title only. It is built here with the same layout as /damen/
 * (black tiles with a background photo and a button), one tile per Herren service page.
 * [card class, label, href] – backgrounds are in app/styles/custom.css.
 */
const CARDS: [string, string, string][] = [
  ["fg-herren-schnitt", "Schnitt", "/herren/schnitt/"],
  ["fg-herren-faerben", "Färben", "/herren/faerben/"],
  ["fg-herren-dauerwelle", "Dauerwelle", "/herren/dauerwelle/"],
];

/**
 * LAYOUT SWITCH – "list": service names stacked on the left, the hero Herren photo on the right.
 * "cards": the previous layout (one background-photo tile per service), kept unchanged
 * in the cards branch below. Change this one value to switch back.
 */
const HERREN_STYLE: "list" | "cards" = "list";

export default function HerrenPage() {
  if (HERREN_STYLE === "list") {
    return (
      <ElementorPage pageId={237} extraClass="fg-elementor-page fg-herren">
        <Boxed id="fg-herren-title" className="fg-herren-section">
          <Heading id="fg-herren-heading">Herren</Heading>
        </Boxed>
        <ServiceSplit
          label="Leistungen Herren"
          image={IMAGES.heroHerren}
          alt="Herren – Friseur George Wiesbaden"
          items={CARDS.map(([, label, href]) => ({ label, href }))}
        />
      </ElementorPage>
    );
  }

  // Previous layout (saved 2026-11-22)
  return (
    <ElementorPage pageId={237} extraClass="fg-elementor-page fg-herren">
      <Boxed id="fg-herren-title" className="fg-herren-section">
        <Heading id="fg-herren-heading">Herren</Heading>
      </Boxed>
      <Boxed id="fg-herren-row" className="fg-herren-section fg-herren-row">
        {CARDS.map(([cls, label, href]) => (
          <Full key={href} id={cls} className={`fg-herren-card ${cls}`}>
            <Widget id={`${cls}-btn`} type="button" extra="elementor-align-center">
              <div className="elementor-button-wrapper">
                <a className="elementor-button elementor-button-link elementor-size-sm" href={href}>
                  <span className="elementor-button-content-wrapper">
                    <span className="elementor-button-text">{label}</span>
                  </span>
                </a>
              </div>
            </Widget>
          </Full>
        ))}
      </Boxed>
    </ElementorPage>
  );
}
