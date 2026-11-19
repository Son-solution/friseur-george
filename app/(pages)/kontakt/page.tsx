import type { Metadata } from "next";
import ElementorPage, { Boxed, Heading, Widget } from "@/components/ElementorPage";
import { MAPS_EMBED_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Kontakt - Friseur & Kosmetik George" },
  alternates: { canonical: "/kontakt/" },
  openGraph: { title: "Kontakt - Friseur & Kosmetik George", url: "/kontakt/" },
};

/* Verbatim table from the original. Note: Saturday says 08:00 – 17:00 here, but 08:00 – 16:00 on the home page (as on the original). */
const HOURS = [
  ["31", "Montag", "Geschlossen"],
  ["58", "Dienstag – Freitag", "09:00 – 19:00"],
  ["58", "Samstag", "08:00 – 17:00"],
  ["31", "Sonntag", "Geschlossen"],
];
const TABLE =
  '<div><table style="width: 100%; height: 178px;"><tbody>' +
  HOURS.map(([h, d, t]) => `<tr style="height: ${h}px;"><td style="height: ${h}px;"><div>${d}</div></td><td style="height: ${h}px;"><div>${t}</div></td></tr>`).join("") +
  "</tbody></table></div>";

export default function KontaktPage() {
  return (
    <ElementorPage pageId={29}>
      <Boxed id="e38d527">
        <Heading id="85a6014">Öffnungszeiten </Heading>
        <Widget id="f5198f2" type="text-editor" html={TABLE} />
        <Widget id="801acbe" type="text-editor" html="<p>Dotzheimer Straße 39, 65185 Wiesbaden</p>" />
        <Widget id="4ddfec7" type="google_maps">
          <div className="elementor-custom-embed">
            <iframe loading="lazy" src={MAPS_EMBED_URL} title="Friseur George Dotzheimer Straße 39, 65185 Wiesbaden" aria-label="Friseur George Dotzheimer Straße 39, 65185 Wiesbaden" />
          </div>
        </Widget>
      </Boxed>
    </ElementorPage>
  );
}
