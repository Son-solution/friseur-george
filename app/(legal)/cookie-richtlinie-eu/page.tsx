import type { Metadata } from "next";
import type { ReactNode } from "react";
import LegalPage from "@/components/LegalPage";
import ManageConsentButton from "@/components/ManageConsentButton";

export const metadata: Metadata = {
  title: { absolute: "Cookie-Richtlinie (EU) - Friseur & Kosmetik George" },
  alternates: { canonical: "/cookie-richtlinie-eu/" },
  openGraph: { title: "Cookie-Richtlinie (EU) - Friseur & Kosmetik George", url: "/cookie-richtlinie-eu/" },
};

type Cookie = { name: string; expiration?: string; fn?: string; href?: string };

function Service({ name, purpose, slug, usage, readMore, sharing, cookies }: { name: string; purpose: string; slug: string; usage?: ReactNode; readMore?: string; sharing: string; cookies: Cookie[] }) {
  return (
    <details className="cmplz-dropdown cmplz-service-desc cmplz-dropdown-cookiepolicy">
      <summary className="cmplz-service-header">
        <div>
          <h3>{name}</h3>
          <p>{purpose}</p>
          <label>
            <span className="screen-reader-text">Consent to service {slug}</span>
          </label>
        </div>
      </summary>
      <div className="cmplz-service-description">
        <h4>Usage</h4>
        <p>
          {usage}
          {readMore && (
            <>
              {" "}
              <a target="_blank" rel="noopener noreferrer nofollow" href={readMore}>
                Read more about {name}
              </a>
            </>
          )}
        </p>
      </div>
      <div className="cmplz-sharing-data">
        <h4>Sharing data</h4>
        <p>{sharing}</p>
      </div>
      <div className="cookies-per-purpose">
        <div className="purpose">
          <h4>{purpose}</h4>
        </div>
        {cookies.map((c) => (
          <div key={c.name} style={{ display: "contents" }}>
            <div className="name-header">
              <h5>Name</h5>
              {c.href ? (
                <a target="_blank" rel="noopener noreferrer nofollow" href={c.href}>
                  {c.name}
                </a>
              ) : (
                <span>{c.name}</span>
              )}
            </div>
            <div className="retention-header">
              <h5>Expiration</h5>
              <span>{c.expiration ?? ""}</span>
            </div>
            <div className="function-header">
              <h5>Function</h5>
              <span>{c.fn ?? ""}</span>
            </div>
          </div>
        ))}
      </div>
    </details>
  );
}

const DB = "https://cookiedatabase.org/cookie/";
const MISC_365 = ["cmplz_task_filter", "cmplz_functional", "cmplz_statistics", "cmplz_preferences", "cmplz_marketing"];
const MISC = [
  "e_event-tracker", "e_kit-elements-defaults", "mtnc_upsell_shown", "mtnc_upsell_shown_timestamp", "iconify-count", "image-optimizer-not-connected-modal",
  "image-optimization-trial-end-close-time", "iconify-version", "WP_DATA_USER_2", ...MISC_365, "rs_explodinglayers-notice", "revslider-login-addon-notice",
  "rs_transitionpack-notice", "rs_duotonefilters-notice", "rs_paintbrush-notice", "elementor-panel-pos-right", "filebird", "rs_beforeafter-notice", "rs_backup-notice",
  "rs_snow-notice", "loglevel", "rs_mousetrap-notice", "elementor-panel-size-width", "revslider-featured-addon-notice", "revslider-domain-switch-addon-notice",
  "rs_refresh-notice", "elementor-panel-pos-top", "rs_lottie-notice", "elementor-panel-size-height", "rs_particles-notice", "rs_bubblemorph-notice",
  "rs_particlewave-notice", "rs_scrollvideo-notice", "revslider-maintenance-addon-notice", "revslider-rel-posts-addon-notice", "revslider-weather-addon-notice",
  "revslider-sharing-addon-notice", "rs_fluiddynamics-notice", "rs_panorama-notice", "rs_liquideffect-notice", "revslider-prevnext-posts-addon-notice",
  "rs_polyfold-notice", "rs_typewriter-notice", "in-move", "metaslider-vuex-1", "revslider-whiteboard-addon-notice", "rs_charts-notice", "elementor-panel-pos-left",
  "persist:hs-beacon-message-a3b75763-1818-443e-b864-55449580d7c0", "rs_revealer-notice", "rs_thecluster-notice", "rs_filmstrip-notice", "revslider-gallery-addon-notice",
  "persist:hs-beacon-a3b75763-1818-443e-b864-55449580d7c0", "rs_slicey-notice", "cookieyes-consent", "cmplz_consented_services", "cmplz_policy_id", "cmplz_banner-status",
  "fbv_close_buy_pro_dialog", "ti-cdn-url", "perf_dv6Tr4n", "adobeCleanFontAdded",
];
const MISC_365_ALL = new Set([...MISC_365, "cmplz_consented_services", "cmplz_policy_id", "cmplz_banner-status"]);

/* Text verbatim from https://friseur-george.de/cookie-richtlinie-eu/ (Complianz cookie statement, English as on the original). */
export default function CookiePolicyPage() {
  return (
    <LegalPage title="Cookie-Richtlinie (EU)" postId={0}>
      <div id="cmplz-document" className="cmplz-document cookie-statement cmplz-document-eu">
        <p>
          <i>This Cookie Policy was last updated on 19. June 2025 and applies to citizens and legal permanent residents of the European Economic Area and Switzerland.</i>
          <br />
        </p>
        <h2>1. Introduction</h2>
        <p>
          Our website, <a href="https://friseur-george.de">https://friseur-george.de</a> (hereinafter: &quot;the website&quot;) uses cookies and other related technologies (for convenience all technologies are referred to as &quot;cookies&quot;). Cookies are also placed by third parties we have engaged. In the document below we inform you about the use of cookies on our website.
        </p>
        <h2>2. What are cookies?</h2>
        <p>A cookie is a small simple file that is sent along with pages of this website and stored by your browser on the hard drive of your computer or another device. The information stored therein may be returned to our servers or to the servers of the relevant third parties during a subsequent visit.</p>
        <h2>3. What are scripts?</h2>
        <p>A script is a piece of program code that is used to make our website function properly and interactively. This code is executed on our server or on your device.</p>
        <h2>4. What is a web beacon?</h2>
        <p>A web beacon (or a pixel tag) is a small, invisible piece of text or image on a website that is used to monitor traffic on a website. In order to do this, various data about you is stored using web beacons.</p>
        <h2>5. Cookies</h2>
        <h3>5.1 Technical or functional cookies</h3>
        <p>Some cookies ensure that certain parts of the website work properly and that your user preferences remain known. By placing functional cookies, we make it easier for you to visit our website. This way, you do not need to repeatedly enter the same information when visiting our website and, for example, the items remain in your shopping cart until you have paid. We may place these cookies without your consent.</p>
        <h3>5.2 Statistics cookies</h3>
        <p>We use statistics cookies to optimize the website experience for our users. With these statistics cookies we get insights in the usage of our website. We ask your permission to place statistics cookies.</p>
        <h2>6. Placed cookies</h2>
        <div id="cmplz-cookies-overview">
          <Service
            name="Elementor"
            purpose="Statistics (anonymous)"
            slug="elementor"
            usage="We use Elementor for Inhaltserstellung."
            readMore="https://cookiedatabase.org/service/elementor/"
            sharing="This data is not shared with third parties."
            cookies={[{ name: "elementor", expiration: "persistent", fn: "Store performed actions on the website", href: `${DB}elementor/elementor/` }]}
          />
          <Service
            name="WordPress"
            purpose="Funktional"
            slug="wordpress"
            usage="We use WordPress for Website-Entwicklung."
            readMore="https://cookiedatabase.org/service/wordpress/"
            sharing="This data is not shared with third parties."
            cookies={[
              { name: "wpEmojiSettingsSupports", expiration: "session", fn: "Store browser details", href: `${DB}wordpress/wpemojisettingssupports/` },
              { name: "wordpress_test_cookie", expiration: "session", fn: "Read if cookies can be placed", href: `${DB}wordpress/wordpress_test_cookie/` },
              { name: "wp-settings-time-*", expiration: "1 year", fn: "Store user preferences", href: `${DB}wordpress/wp-settings-time/` },
              { name: "wp-settings-*", expiration: "persistent", fn: "Store user preferences", href: `${DB}wordpress/wp-settings/` },
              { name: "wordpress_logged_in_*", expiration: "persistent", fn: "Store logged in users", href: `${DB}wordpress/wordpress_logged_in_/` },
              { name: "WP_PREFERENCES_USER_*", expiration: "beständig", fn: "Speicher die Benutzervorlieben", href: `${DB}wordpress/wp_preferences_user_/` },
              { name: "wp_lang", expiration: "session", fn: "Store language settings", href: `${DB}wordpress/wp_lang/` },
            ]}
          />
          <Service
            name="Google Analytics"
            purpose="Statistics"
            slug="google-analytics"
            sharing="This data is not shared with third parties."
            cookies={[
              { name: "_ga", expiration: "2 years", fn: "Store and count pageviews", href: `${DB}unknown-service/_ga/` },
              { name: "_ga_*", expiration: "1 year", fn: "Store and count pageviews", href: `${DB}unknown-service/_ga_/` },
            ]}
          />
          <Service
            name="Slider Revolution"
            purpose="Purpose pending investigation"
            slug="slider-revolution"
            sharing="This data is not shared with third parties."
            cookies={[
              { name: "rs6_wizard_folder", href: `${DB}unknown-service/rs6_wizard_folder/` },
              { name: "rs6_library_pagination", href: `${DB}unknown-service/rs6_library_pagination/` },
            ]}
          />
          <Service
            name="Miscellaneous"
            purpose="Purpose pending investigation"
            slug="miscellaneous"
            sharing="Sharing of data is pending investigation"
            cookies={MISC.map((name) => ({ name, expiration: MISC_365_ALL.has(name) ? "365 days" : undefined }))}
          />
        </div>
        <h2>7. Consent</h2>
        <p>When you visit our website for the first time, we will show you a pop-up with an explanation about cookies. As soon as you click on &quot;Einstellungen speichern&quot;, you consent to us using the categories of cookies and plug-ins you selected in the pop-up, as described in this Cookie Policy. You can disable the use of cookies via your browser, but please note that our website may no longer work properly.</p>
        <h3>7.1 Manage your consent settings</h3>
        <div id="cmplz-manage-consent-container" className="cmplz-manage-consent-container">
          <ManageConsentButton />
        </div>
        <h2>8. Enabling/disabling and deleting cookies</h2>
        <p>You can use your internet browser to automatically or manually delete cookies. You can also specify that certain cookies may not be placed. Another option is to change the settings of your internet browser so that you receive a message each time a cookie is placed. For more information about these options, please refer to the instructions in the Help section of your browser.</p>
        <p>Please note that our website may not work properly if all cookies are disabled. If you do delete the cookies in your browser, they will be placed again after your consent when you visit our website again.</p>
        <h2>9. Your rights with respect to personal data</h2>
        <p>You have the following rights with respect to your personal data:</p>
        <ul>
          <li>You have the right to know why your personal data is needed, what will happen to it, and how long it will be retained for.</li>
          <li>Right of access: You have the right to access your personal data that is known to us.</li>
          <li>Right to rectification: you have the right to supplement, correct, have deleted or blocked your personal data whenever you wish.</li>
          <li>If you give us your consent to process your data, you have the right to revoke that consent and to have your personal data deleted.</li>
          <li>Right to transfer your data: you have the right to request all your personal data from the controller and transfer it in its entirety to another controller.</li>
          <li>Right to object: you may object to the processing of your data. We comply with this, unless there are justified grounds for processing.</li>
        </ul>
        <p>To exercise these rights, please contact us. Please refer to the contact details at the bottom of this Cookie Policy. If you have a complaint about how we handle your data, we would like to hear from you, but you also have the right to submit a complaint to the supervisory authority (the Data Protection Authority).</p>
        <h2>10. Contact details</h2>
        <p>For questions and/or comments about our Cookie Policy and this statement, please contact us by using the following contact details:</p>
        <p>
          <span className="cmplz-contact-organisation">George Friseur &amp; Kosmetik</span>
          <br />
          <span className="cmplz-contact-address">Dotzheimer Str. 39, 65185 Wiesbaden</span>
          <br />
          <span className="cmplz-contact-country">Germany</span>
          <br />
          <span className="cmplz-contact-domain">
            Website: <a href="https://friseur-george.de">https://friseur-george.de</a>
          </span>
          <br />
          <span className="cmplz-contact-email">
            Email: <span className="cmplz-obfuscate">info@friseur-george.de</span>
          </span>
          <br />
          <span className="cmplz-contact-telephone">Phone number: 0611 51017717</span>
        </p>
        <p>
          This Cookie Policy was synchronized with <a href="https://cookiedatabase.org/" target="_blank" rel="noopener noreferrer">cookiedatabase.org</a> on 7. March 2025.
        </p>
      </div>
    </LegalPage>
  );
}
