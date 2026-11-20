import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { parseSlide, SERVICES, type ServicePage } from "@/lib/services";
import EaelAccordion from "./EaelAccordion";
import ElementorPage, { Boxed, Heading, Widget } from "./ElementorPage";
import ServiceCarousel from "./ServiceCarousel";

export function getService(path: string): ServicePage {
  const s = SERVICES.find((x) => x.path === path);
  if (!s) notFound();
  return s;
}

export function serviceMetadata(path: string): Metadata {
  const s = SERVICES.find((x) => x.path === path);
  if (!s) return {};
  return { title: { absolute: s.metaTitle }, description: s.description, alternates: { canonical: s.path }, openGraph: { title: s.metaTitle, description: s.description, url: s.path } };
}

/** Shared template of the 13 service pages: heading → carousel → text → FAQ accordion. */
export default function ServicePageView({ page }: { page: ServicePage }) {
  const [c1, heading, c2, carousel, c3, text, accordion] = page.ids;
  const slides = page.slides.map(parseSlide);
  const dots = page.navigation === "both";
  return (
    <ElementorPage pageId={page.pageId}>
      <Boxed id={c1} className="fg-service-title">
        <Heading id={heading} anim={page.headingAnim}>
          {page.title}
        </Heading>
      </Boxed>
      <Boxed id={c2}>
        <Widget id={carousel} type="image-carousel" extra={`${dots ? "elementor-pagination-position-inside " : ""}elementor-arrows-position-inside`} anim="fadeInUp">
          <ServiceCarousel id={carousel} slides={slides} dots={dots} />
        </Widget>
      </Boxed>
      <Boxed id={c3}>
        <Widget id={text} type="text-editor" anim="fadeInUp" html={page.text} />
        <Widget id={accordion} type="eael-adv-accordion" anim="fadeInUp">
          <EaelAccordion id={accordion} faqs={page.faqs} />
        </Widget>
      </Boxed>
    </ElementorPage>
  );
}
