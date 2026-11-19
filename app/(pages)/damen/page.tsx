import type { Metadata } from "next";
import ElementorPage, { Boxed, Full, Heading, Widget } from "@/components/ElementorPage";

export const metadata: Metadata = {
  title: { absolute: "Damen - Friseur & Kosmetik George" },
  alternates: { canonical: "/damen/" },
  openGraph: { title: "Damen - Friseur & Kosmetik George", url: "/damen/" },
};

/* [card container id, button id, label, href] – order and labels exactly as on the original /damen/ page */
const ROW1: [string, string, string, string][] = [
  ["ed9d0be", "e3a25b3", "Schnitt", "/damen/damen-schnitt/"],
  ["3a72dd9", "bc7a618", "Färben", "/damen/faerben/"],
  ["baddf96", "dec33c2", "Balayage", "/damen/balayage/"],
  ["a7ce109", "3aa6d71", "Strähnen", "/damen/straehnen/"],
  ["c5f976d", "e768d96", "Extentions", "/damen/extentions/"],
];
const ROW2: [string, string, string, string][] = [
  ["39f94ff", "d6f7d69", "Make-up", "/damen/make-up/"],
  ["689e3f0", "ecf736a", "Braut", "/damen/braut/"],
  ["69d015d", "e58e00c", "Hochstecken", "/damen/hochstecken/"],
  ["2f26af4", "ed1eb44", "Haar Protin", "/damen/haar-protin/"],
];

function Card([cid, bid, label, href]: [string, string, string, string]) {
  return (
    <Full key={cid} id={cid} className="fg-damen-card">
      <Widget id={bid} type="button" extra="elementor-align-center">
        <div className="elementor-button-wrapper">
          <a className="elementor-button elementor-button-link elementor-size-sm" href={href}>
            <span className="elementor-button-content-wrapper">
              <span className="elementor-button-text">{label}</span>
            </span>
          </a>
        </div>
      </Widget>
    </Full>
  );
}

export default function DamenPage() {
  return (
    <ElementorPage pageId={132} extraClass="fg-elementor-page fg-damen">
      <Boxed id="7cf6a59">
        <Heading id="a68059b">Damen</Heading>
      </Boxed>
      <Boxed id="bf14c2d">{ROW1.map(Card)}</Boxed>
      <Boxed id="a5b66c4">{ROW2.map(Card)}</Boxed>
    </ElementorPage>
  );
}
