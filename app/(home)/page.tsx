import type { Metadata } from "next";
import Image from "@/components/WpImage";
import Link from "next/link";
import type { ReactNode } from "react";
import ElementorAnimations from "@/components/ElementorAnimations";
import SalonCarousel from "@/components/SalonCarousel";
import GoogleReviews from "@/components/GoogleReviews";
import OpeningHours from "@/components/OpeningHours";
import HeroSlider from "@/components/HeroSlider";
import { FabFacebook, FabInstagram, FabTikTok, FasEnvelope, FasMapMarker, FasPhone } from "@/components/icons";
import { ADDRESS, BOOKING_URL, EMAIL, IMAGES, MAPS_EMBED_URL, MAPS_PLACE_URL, PHONE_HREF, SITE_NAME, SITE_URL, SOCIAL } from "@/lib/site";

const TITLE = "Friseur & Kosmetik GeorgeFriseur & Kosmetik George Wiesbaden"; // original <title>, verbatim
const DESCRIPTION =
  "Mit über 25 Jahren Erfahrung, Meisterhandwerk & Leidenschaft sorgt Friseur & Kosmetik George Wiesbaden für professionelle Haarschnitte, Strähnen & Kosmetik. Jetzt Termin buchen!";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    images: [{ url: IMAGES.heroDamen.src, width: IMAGES.heroDamen.width, height: IMAGES.heroDamen.height, type: "image/jpeg" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/`,
      url: `${SITE_URL}/`,
      name: TITLE,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      primaryImageOfPage: { "@id": `${SITE_URL}/#primaryimage` },
      image: { "@id": `${SITE_URL}/#primaryimage` },
      thumbnailUrl: `${SITE_URL}${IMAGES.heroDamen.src}`,
      description: DESCRIPTION,
      breadcrumb: { "@id": `${SITE_URL}/#breadcrumb` },
      inLanguage: "de",
    },
    { "@type": "ImageObject", inLanguage: "de", "@id": `${SITE_URL}/#primaryimage`, url: `${SITE_URL}${IMAGES.heroDamen.src}`, contentUrl: `${SITE_URL}${IMAGES.heroDamen.src}` },
    { "@type": "BreadcrumbList", "@id": `${SITE_URL}/#breadcrumb`, itemListElement: [{ "@type": "ListItem", position: 1, name: "Startseite" }] },
    { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: `${SITE_URL}/`, name: SITE_NAME, description: "", publisher: { "@id": `${SITE_URL}/#organization` }, inLanguage: "de" },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      logo: { "@type": "ImageObject", inLanguage: "de", "@id": `${SITE_URL}/#/schema/logo/image/`, url: `${SITE_URL}${IMAGES.logo.src}`, contentUrl: `${SITE_URL}${IMAGES.logo.src}`, caption: SITE_NAME },
      image: { "@id": `${SITE_URL}/#/schema/logo/image/` },
      // sameAs exactly as in the original Yoast output (note: these handles differ from the header links – see docs/SEO-MIGRATION.md)
      sameAs: ["https://www.facebook.com/salon.avic/", "https://www.instagram.com/aviggeorge/", "https://www.tiktok.com/@aviggeorge"],
    },
  ],
};

/* ---------- tiny Elementor markup helpers (same DOM/classes as Elementor 4.2.4) ---------- */
function Widget({ id, type, extra = "", anim, children }: { id: string; type: string; extra?: string; anim?: string; children: ReactNode }) {
  const cls = `elementor-element elementor-element-${id}${extra ? " " + extra : ""}${anim ? " elementor-invisible" : ""} elementor-widget elementor-widget-${type}`;
  return (
    <div className={cls} data-id={id} data-element_type="widget" data-widget_type={`${type}.default`} data-fg-animation={anim}>
      <div className="elementor-widget-container">{children}</div>
    </div>
  );
}

function Heading({ id, extra, anim, href, children }: { id: string; extra?: string; anim?: string; href?: string; children: ReactNode }) {
  return (
    <Widget id={id} type="heading" extra={extra} anim={anim}>
      <h2 className="elementor-heading-title elementor-size-default">
        {href ? <Link href={href}>{children}</Link> : children}
      </h2>
    </Widget>
  );
}

function BookingButton({ id, pulse = false }: { id: string; pulse?: boolean }) {
  return (
    <Widget id={id} type="button" extra={`heartbeat-button${pulse ? " fg-heartbeat" : ""} elementor-align-center elementor-hidden-desktop elementor-hidden-tablet`}>
      <div className="elementor-button-wrapper">
        <a className="elementor-button elementor-button-link elementor-size-sm" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
          <span className="elementor-button-content-wrapper">
            <span className="elementor-button-text">Termin Buchen</span>
          </span>
        </a>
      </div>
    </Widget>
  );
}

function Boxed({ id, children }: { id: string; children: ReactNode }) {
  return (
    <div className={`elementor-element elementor-element-${id} e-flex e-con-boxed e-con e-parent`} data-id={id} data-element_type="container">
      <div className="e-con-inner">{children}</div>
    </div>
  );
}

function Column({ id, anim, children }: { id: string; anim?: string; children: ReactNode }) {
  return (
    <div className={`elementor-element elementor-element-${id} e-con-full e-flex${anim ? " elementor-invisible" : ""} e-con e-child`} data-id={id} data-element_type="container" data-fg-animation={anim}>
      {children}
    </div>
  );
}

/**
 * HERO SWITCH – "slider": Damen/Herren as one auto-playing slider (components/HeroSlider.tsx).
 * "split": the previous layout (two images side by side, word under each image), kept
 * unchanged in HeroSplit below. Change this one value to switch back.
 */
const HERO_STYLE: "slider" | "split" = "slider";

/** Previous hero: Damen | Herren side by side (saved 2026-11-22). */
function HeroSplit() {
  return (
      <Boxed id="c3fff5b">
        <Column id="64ae671" anim="fadeInLeft">
          <Widget id="564cab5" type="image">
            <Image
              src={IMAGES.heroDamen.src}
              width={IMAGES.heroDamen.width}
              height={IMAGES.heroDamen.height}
              className="attachment-large size-large wp-image-1074"
              alt=""
              sizes="(max-width: 1024px) 100vw, 656px"
              priority
            />
          </Widget>
          <Heading id="27f0c03" extra="heartbeat-button fg-heartbeat" href="/damen/">Damen</Heading>
        </Column>
        <Column id="193235a" anim="fadeInRight">
          <Widget id="ae1978f" type="image">
            <Image
              src={IMAGES.heroHerren.src}
              width={IMAGES.heroHerren.width}
              height={IMAGES.heroHerren.height}
              title={IMAGES.heroHerren.alt}
              alt={IMAGES.heroHerren.alt}
              sizes="(max-width: 1024px) 100vw, 656px"
              priority
            />
          </Widget>
          <Heading id="b8ada4a" extra="heartbeat-button fg-heartbeat" href="/herren/">Herren</Heading>
        </Column>
      </Boxed>
  );
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div id="primary" className="content-area">
        <div className="content-container site-container">
          <div id="main" className="site-main">
            <div className="content-wrap">
              <article id="post-9" className="entry content-bg single-entry post-9 page type-page status-publish hentry">
                <div className="entry-content-wrap">
                  <div className="entry-content single-content">
                    <div data-elementor-type="wp-page" data-elementor-id="9" className="elementor elementor-9">
                      {/* Mobile-only booking button (the injected casino links that followed it on the original are removed) */}
                      <Boxed id="e40d818">
                        <BookingButton id="24ec449" pulse />
                      </Boxed>

                      {HERO_STYLE === "slider" ? <HeroSlider /> : <HeroSplit />}

                      {/* Salon carousel + intro text */}
                      <Boxed id="6d396b6">
                        <Column id="d36f063" anim="fadeInLeft">
                          <Widget id="e06fc59" type="image-carousel" extra="e-widget-swiper">
                            <SalonCarousel />
                          </Widget>
                        </Column>
                        <Column id="3c38e70" anim="fadeInRight">
                          <Heading id="308e9d9">Ihr Friseur in Wiesbaden – Stil, Qualität &amp; Erfahrung bei Friseur George</Heading>
                          <Widget id="9fb3747" type="text-editor">
                            <p>
                              Willkommen bei Friseur George, Ihrem erfahrenen Friseur in Wiesbaden mit Meisterbrief und einem echten Gespür für Stil und Präzision. Seit vielen Jahren stehen wir für hochwertige Friseurleistungen, persönliche Beratung und absolute Kundenzufriedenheit. in unserem stilvollen Salon in Wiesbaden erwarten Sie perfekte Haarschnitte, moderne Stylings und ein Höchstmaß an Sauberkeit und Professionalität. Ob Damen, Herren oder Kinder – wir nehmen uns Zeit für Ihre Wünsche und sorgen dafür, dass Sie sich rundum wohlfühlen. Friseur Wiesbaden steht für Qualität – erleben Sie den Unterschied bei Friseur George!
                            </p>
                          </Widget>
                        </Column>
                      </Boxed>

                      {/* Team */}
                      <Boxed id="7c91dd4">
                        <Column id="a766730">
                          <BookingButton id="fef5848" />
                          <Widget id="ac4097a" type="image" anim="fadeInUp">
                            <Image src={IMAGES.george.src} width={IMAGES.george.width} height={IMAGES.george.height} className="attachment-full size-full wp-image-753" alt="" sizes="(max-width: 767px) 50vw, 275px" />
                          </Widget>
                          <Heading id="04e3da6" extra="heartbeat-button fg-heartbeat" anim="fadeInUp">George</Heading>
                          <Heading id="c0f5746" anim="fadeInUp">Friseurmeister &amp; Geschäftsführer</Heading>
                        </Column>
                        <Column id="af390ce">
                          <Widget id="1889524" type="image" anim="fadeInUp">
                            <Image src={IMAGES.maria.src} width={IMAGES.maria.width} height={IMAGES.maria.height} className="attachment-large size-large wp-image-1584" alt="" sizes="(max-width: 767px) 50vw, 275px" />
                          </Widget>
                          <Heading id="85dae50" extra="heartbeat-button fg-heartbeat" anim="fadeInUp">Maria</Heading>
                          <Heading id="4023dde" anim="fadeInUp">Friseurin &amp; Make-up Artistin</Heading>
                        </Column>
                      </Boxed>

                      {/* Unser Team / Öffnungszeiten / Adresse / Karte */}
                      <Boxed id="70fe711">
                        <Heading id="84975f3">Unser Team</Heading>
                        <Widget id="6a282ad" type="text-editor">
                          <p>
                            Hinter Friseur George steht ein engagiertes und erfahrenes Team von Friseuren, das mit Leidenschaft, Präzision und einem feinen Gespür für Trends arbeitet. Jeder einzelne unserer Mitarbeiter bringt Fachkompetenz, Kreativität und Herzlichkeit mit – für ein Friseurerlebnis auf höchstem Niveau in Wiesbaden. Lernen Sie unser Team kennen und lassen Sie sich begeistern!
                          </p>
                        </Widget>
                        <Widget id="47977a1" type="social-icons" extra="elementor-hidden-desktop elementor-shape-rounded elementor-grid-0 e-grid-align-center">
                          <div className="elementor-social-icons-wrapper elementor-grid" role="list">
                            <span className="elementor-grid-item" role="listitem">
                              <a className="elementor-icon elementor-social-icon elementor-social-icon-facebook elementor-repeater-item-3c4e22b" href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer">
                                <span className="elementor-screen-only">Facebook</span>
                                <FabFacebook />
                              </a>
                            </span>
                            <span className="elementor-grid-item" role="listitem">
                              <a className="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-repeater-item-17066c3" href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer">
                                <span className="elementor-screen-only">Instagram</span>
                                <FabInstagram />
                              </a>
                            </span>
                            <span className="elementor-grid-item" role="listitem">
                              <a className="elementor-icon elementor-social-icon elementor-social-icon-tiktok elementor-repeater-item-488a144" href={SOCIAL.tiktok} target="_blank" rel="noopener noreferrer">
                                <span className="elementor-screen-only">Tiktok</span>
                                <FabTikTok />
                              </a>
                            </span>
                            <span className="elementor-grid-item" role="listitem">
                              {/* original href was empty – pointed to the e-mail address here */}
                              <a className="elementor-icon elementor-social-icon elementor-social-icon-envelope elementor-repeater-item-d2111b4" href={`mailto:${EMAIL}`}>
                                <span className="elementor-screen-only">Envelope</span>
                                <FasEnvelope />
                              </a>
                            </span>
                            <span className="elementor-grid-item" role="listitem">
                              {/* original href was empty and its icon font never loaded – now an inline SVG phone icon */}
                              <a className="elementor-icon elementor-social-icon elementor-social-icon-icon-phone-handset elementor-repeater-item-938aa4e" href={PHONE_HREF}>
                                <span className="elementor-screen-only">Icon-phone-handset</span>
                                <FasPhone />
                              </a>
                            </span>
                          </div>
                        </Widget>
                        <Heading id="ce1759c">Öffnungszeiten</Heading>
                        <Widget id="d128877" type="text-editor">
                          <OpeningHours />
                        </Widget>
                        <Widget id="bfc1d89" type="icon-list" extra="elementor-icon-list--layout-traditional elementor-list-item-link-full_width">
                          <ul className="elementor-icon-list-items">
                            <li className="elementor-icon-list-item">
                              <a href={MAPS_PLACE_URL} target="_blank" rel="noopener noreferrer">
                                <span className="elementor-icon-list-icon">
                                  <FasMapMarker />
                                </span>
                                <span className="elementor-icon-list-text">{ADDRESS}</span>
                              </a>
                            </li>
                          </ul>
                        </Widget>
                        <Widget id="b16e65b" type="google_maps">
                          <div className="elementor-custom-embed">
                            <iframe
                              loading="lazy"
                              src={MAPS_EMBED_URL}
                              title="Friseur George Dotzheimer Straße 39, 65185 Wiesbaden"
                              aria-label="Friseur George Dotzheimer Straße 39, 65185 Wiesbaden"
                              referrerPolicy="no-referrer-when-downgrade"
                            />
                          </div>
                        </Widget>
                      </Boxed>

                      {/* Reviews: summary card + review cards (components/GoogleReviews.tsx), 7 reviews from the original widget. */}
                      <Boxed id="449c718">
                        <Heading id="0c6903c">Unsere Bewertungen</Heading>
                        <Widget id="7b9f478" type="shortcode" anim="fadeInUp">
                          <div className="elementor-shortcode">
                            <GoogleReviews />
                          </div>
                        </Widget>
                      </Boxed>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <ElementorAnimations />
    </>
  );
}
