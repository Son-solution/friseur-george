import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

const widgetAreaCls =
  "footer-widget-area widget-area site-footer-focus-item content-align-center content-tablet-align-default content-mobile-align-default content-valign-default content-tablet-valign-default content-mobile-valign-default";

function FooterColumn({ index, widget, blockId, href, label, centerP }: { index: number; widget: string; blockId: string; href: string; label: string; centerP?: boolean }) {
  return (
    <div className={`site-footer-middle-section-${index} site-footer-section footer-section-inner-items-1`}>
      <div className={`${widgetAreaCls} ${widget}`} data-section={`sidebar-widgets-${widget}`}>
        <div className="footer-widget-area-inner site-info-inner">
          <section id={blockId} className="widget widget_block widget_text">
            <p className={centerP ? "has-text-align-center wp-block-paragraph" : "wp-block-paragraph"}>
              <Link href={href}>{label}</Link>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer id="colophon" className="site-footer" role="contentinfo">
      <div className="site-footer-wrap">
        <div className="site-middle-footer-wrap site-footer-row-container site-footer-focus-item site-footer-row-layout-standard site-footer-row-tablet-layout-default site-footer-row-mobile-layout-default" data-section="kadence_customizer_footer_middle">
          <div className="site-footer-row-container-inner">
            <div className="site-container">
              <div className="site-middle-footer-inner-wrap site-footer-row site-footer-row-columns-3 site-footer-row-column-layout-equal site-footer-row-tablet-column-layout-default site-footer-row-mobile-column-layout-row ft-ro-dir-column ft-ro-collapse-normal ft-ro-t-dir-default ft-ro-m-dir-default ft-ro-lstyle-plain">
                <FooterColumn index={1} widget="footer-widget2" blockId="block-24" href="/cookie-richtlinie-eu/" label="Cookie-Richtlinie" centerP />
                <FooterColumn index={2} widget="footer-widget5" blockId="block-26" href="/impressum/" label="Impressum" />
                <FooterColumn index={3} widget="footer-widget4" blockId="block-25" href="/geschaeftsbedingungen/" label="AGB" />
              </div>
            </div>
          </div>
        </div>
        <div className="site-bottom-footer-wrap site-footer-row-container site-footer-focus-item site-footer-row-layout-standard site-footer-row-tablet-layout-default site-footer-row-mobile-layout-default" data-section="kadence_customizer_footer_bottom">
          <div className="site-footer-row-container-inner">
            <div className="site-container">
              <div className="site-bottom-footer-inner-wrap site-footer-row site-footer-row-columns-1 site-footer-row-column-layout-row site-footer-row-tablet-column-layout-default site-footer-row-mobile-column-layout-row ft-ro-dir-row ft-ro-collapse-normal ft-ro-t-dir-default ft-ro-m-dir-default ft-ro-lstyle-plain">
                <div className="site-footer-bottom-section-1 site-footer-section footer-section-inner-items-1">
                  <div className="footer-widget-area site-info site-footer-focus-item content-align-default content-tablet-align-default content-mobile-align-default content-valign-default content-tablet-valign-default content-mobile-valign-default" data-section="kadence_customizer_footer_html">
                    <div className="footer-widget-area-inner site-info-inner">
                      <div className="footer-html inner-link-style-normal">
                        <div className="footer-html-inner">
                          <p>
                            © {year} {SITE_NAME}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
