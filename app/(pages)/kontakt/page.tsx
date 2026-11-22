import type { Metadata } from "next";
import ElementorPage, { Boxed, Heading, Widget } from "@/components/ElementorPage";
import OpeningHours from "@/components/OpeningHours";
import { MAPS_EMBED_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Kontakt - Friseur & Kosmetik George" },
  alternates: { canonical: "/kontakt/" },
  openGraph: { title: "Kontakt - Friseur & Kosmetik George", url: "/kontakt/" },
};

/* Opening hours: same component and data as the home page (OPENING_HOURS in lib/site.ts). */

export default function KontaktPage() {
  return (
    <ElementorPage pageId={29}>
      <Boxed id="e38d527">
        <Heading id="85a6014">Öffnungszeiten </Heading>
        <Widget id="f5198f2" type="text-editor">
          <OpeningHours light />
        </Widget>
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
