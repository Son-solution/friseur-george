import type { Metadata } from "next";
import ElementorPage, { Boxed, Full, Heading, Widget } from "@/components/ElementorPage";
import Image from "@/components/WpImage";

export const metadata: Metadata = {
  title: { absolute: "Preisliste - Friseur & Kosmetik George" },
  alternates: { canonical: "/preisliste/" },
  openGraph: { title: "Preisliste - Friseur & Kosmetik George", url: "/preisliste/" },
};

const U = "/wp-content/uploads/2026/03";

/* Desktop/tablet: one combined price-list image. Mobile: three tall images (Damen, Damen 2, Herren). */
export default function PreislistePage() {
  return (
    <ElementorPage pageId={1809}>
      <Boxed id="7cf6a59">
        <Heading id="a68059b">Preisliste</Heading>
        <Widget id="fbf9631" type="image" extra="elementor-hidden-mobile">
          <Image src={`${U}/Neu-1.png`} width={1024} height={1003} className="attachment-large size-large wp-image-1816" alt="" sizes="(max-width: 1024px) 100vw, 1024px" priority />
        </Widget>
        <Full id="3e850e8" className="elementor-hidden-desktop elementor-hidden-tablet">
          <Widget id="ae8e20e" type="image">
            <Image src={`${U}/Neudamen-362x1024.png`} width={362} height={1024} className="attachment-large size-large wp-image-1823" alt="" sizes="362px" />
          </Widget>
          <Widget id="0db8ce7" type="image">
            <Image src={`${U}/Neudamen2-362x1024.png`} width={362} height={1024} className="attachment-large size-large wp-image-1822" alt="" sizes="362px" />
          </Widget>
          <Widget id="6d0ba90" type="image">
            <Image src={`${U}/neuherrn-497x1024.png`} width={497} height={1024} className="attachment-large size-large wp-image-1821" alt="" sizes="497px" />
          </Widget>
        </Full>
      </Boxed>
    </ElementorPage>
  );
}
