"use client";

import Image from "@/components/WpImage";
import Link from "next/link";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { BOOKING_URL, EMAIL, IMAGES, PHONE_HREF, SITE_NAME, SOCIAL } from "@/lib/site";
import { DesktopNav, MobileNav } from "./SiteNav";
import { KadenceEmail, KadenceFacebook, KadenceInstagram, KadenceMenu, KadencePhone, KadenceTikTok } from "./icons";

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

function Logo({ mobile = false }: { mobile?: boolean }) {
  return (
    <div className="site-branding branding-layout-standard site-brand-logo-only">
      <Link className="brand has-logo-image" href="/" rel="home">
        <Image
          src={IMAGES.logo.src}
          width={IMAGES.logo.width}
          height={IMAGES.logo.height}
          className="custom-logo"
          alt={SITE_NAME}
          sizes={mobile ? "200px" : "(max-width: 767px) 200px, 356px"}
          priority={!mobile}
        />
      </Link>
    </div>
  );
}

/**
 * Kadence header: desktop header (logo row + button/social row), mobile header
 * (toggle + logo) and the side-panel drawer. Reproduces Kadence's sticky behaviour:
 * the logo row is position:fixed from the start ("item-at-start"), the wrapper keeps
 * the original height, and once the page scrolls it switches to "item-is-stuck".
 */
export default function SiteHeader() {
  const desktopWrap = useRef<HTMLDivElement>(null);
  const mobileWrap = useRef<HTMLDivElement>(null);
  const [heights, setHeights] = useState<{ d: number; m: number } | null>(null);
  const [atStart, setAtStart] = useState(true);
  const [drawer, setDrawer] = useState<{ show: boolean; active: boolean }>({ show: false, active: false });
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const measure = useCallback(() => {
    const sum = (el: HTMLDivElement | null) =>
      el ? Array.from(el.children).reduce((h, c) => h + (c as HTMLElement).offsetHeight, 0) : 0;
    setHeights({ d: sum(desktopWrap.current), m: sum(mobileWrap.current) });
  }, []);

  useIsoLayoutEffect(() => {
    measure();
    const onScroll = () => setAtStart(window.scrollY <= 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    window.addEventListener("load", measure);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      window.removeEventListener("load", measure);
    };
  }, [measure]);

  const openDrawer = () => {
    setDrawer({ show: true, active: false });
    document.body.classList.add("showing-popup-drawer-from-left");
    requestAnimationFrame(() => requestAnimationFrame(() => setDrawer({ show: true, active: true })));
    setTimeout(() => closeRef.current?.focus(), 50);
  };
  const closeDrawer = useCallback(() => {
    setDrawer((d) => (d.show ? { show: true, active: false } : d));
    document.body.classList.remove("showing-popup-drawer-from-left");
    setTimeout(() => {
      setDrawer({ show: false, active: false });
      toggleRef.current?.focus();
    }, 250);
  }, []);

  useEffect(() => {
    if (!drawer.show) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeDrawer();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [drawer.show, closeDrawer]);

  const ready = heights !== null;
  const stickyCls = ready ? ` item-is-fixed ${atStart ? "item-at-start" : "item-is-stuck"}` : "";
  const wrapCls = `site-header-upper-inner-wrap${ready ? " child-is-fixed" : ""}`;

  return (
    <>
      <header id="masthead" className="site-header" role="banner">
        <div id="main-header" className="site-header-wrap">
          <div className="site-header-inner-wrap">
            <div className="site-header-upper-wrap">
              <div ref={desktopWrap} className={wrapCls} style={ready && heights.d ? { height: heights.d } : undefined}>
                <div
                  className={`site-top-header-wrap site-header-row-container site-header-focus-item site-header-row-layout-standard kadence-sticky-header${stickyCls}`}
                  data-section="kadence_customizer_header_top"
                  style={ready ? { top: 0 } : undefined}
                >
                  <div className="site-header-row-container-inner">
                    <div className="site-container">
                      <div className="site-top-header-inner-wrap site-header-row site-header-row-only-center-column site-header-row-center-column">
                        <div className="site-header-top-section-center site-header-section site-header-section-center">
                          <div className="site-header-item site-header-focus-item" data-section="title_tagline">
                            <Logo />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="site-main-header-wrap site-header-row-container site-header-focus-item site-header-row-layout-standard" data-section="kadence_customizer_header_main">
                  <div className="site-header-row-container-inner">
                    <div className="site-container">
                      <div className="site-main-header-inner-wrap site-header-row site-header-row-has-sides site-header-row-no-center">
                        <div className="site-header-main-section-left site-header-section site-header-section-left">
                          <div className="site-header-item site-header-focus-item site-header-item-main-navigation header-navigation-layout-stretch-false header-navigation-layout-fill-stretch-false" data-section="kadence_customizer_primary_navigation">
                            <nav id="site-navigation" className="main-navigation header-navigation hover-to-open nav--toggle-sub header-navigation-style-standard header-navigation-dropdown-animation-none" role="navigation" aria-label="Primär">
                              <div className="primary-menu-container header-menu-container">
                                <DesktopNav />
                              </div>
                            </nav>
                          </div>
                        </div>
                        <div className="site-header-main-section-right site-header-section site-header-section-right">
                          <div className="site-header-item site-header-focus-item" data-section="kadence_customizer_header_button">
                            <div className="header-button-wrap">
                              <div className="header-button-inner-wrap">
                                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="button header-button button-size-medium button-style-filled fg-heartbeat">
                                  Termin Buchen
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="site-header-item site-header-focus-item" data-section="kadence_customizer_header_social">
                            <div className="header-social-wrap">
                              <div className="header-social-inner-wrap element-social-inner-wrap social-show-label-false social-style-filled">
                                <a href={SOCIAL.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="social-button header-social-item social-link-facebook">
                                  <span className="kadence-svg-iconset"><KadenceFacebook /></span>
                                </a>
                                <a href={SOCIAL.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="social-button header-social-item social-link-instagram">
                                  <span className="kadence-svg-iconset"><KadenceInstagram /></span>
                                </a>
                                <a href={PHONE_HREF} aria-label="Telefon" className="social-button header-social-item social-link-phone">
                                  <span className="kadence-svg-iconset"><KadencePhone /></span>
                                </a>
                                <a href={`mailto:${EMAIL}`} aria-label="E-Mail" className="social-button header-social-item social-link-email">
                                  <span className="kadence-svg-iconset"><KadenceEmail /></span>
                                </a>
                                <a href={SOCIAL.tiktok} aria-label="TikTok" target="_blank" rel="noopener noreferrer" className="social-button header-social-item social-link-tiktok">
                                  <span className="kadence-svg-iconset"><KadenceTikTok /></span>
                                </a>
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
          </div>
        </div>

        <div id="mobile-header" className="site-mobile-header-wrap">
          <div className="site-header-inner-wrap">
            <div className="site-header-upper-wrap">
              <div ref={mobileWrap} className={wrapCls} style={ready && heights.m ? { height: heights.m } : undefined}>
                <div
                  className={`site-top-header-wrap site-header-focus-item site-header-row-layout-standard site-header-row-tablet-layout-default site-header-row-mobile-layout-default kadence-sticky-header${stickyCls}`}
                  style={ready ? { top: 0 } : undefined}
                >
                  <div className="site-header-row-container-inner">
                    <div className="site-container">
                      <div className="site-top-header-inner-wrap site-header-row site-header-row-has-sides site-header-row-center-column">
                        <div className="site-header-top-section-left site-header-section site-header-section-left">
                          <div className="site-header-item site-header-focus-item site-header-item-navgation-popup-toggle" data-section="kadence_customizer_mobile_trigger">
                            <div className="mobile-toggle-open-container">
                              <button
                                ref={toggleRef}
                                id="mobile-toggle"
                                className="menu-toggle-open drawer-toggle menu-toggle-style-default"
                                aria-label="Menü öffnen"
                                aria-expanded={drawer.active}
                                onClick={openDrawer}
                              >
                                <span className="menu-toggle-icon">
                                  <span className="kadence-svg-iconset"><KadenceMenu /></span>
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="site-header-top-section-center site-header-section site-header-section-center">
                          <div className="site-header-item site-header-focus-item" data-section="title_tagline">
                            <Logo mobile />
                          </div>
                        </div>
                        <div className="site-header-top-section-right site-header-section site-header-section-right" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        id="mobile-drawer"
        className={`popup-drawer popup-drawer-layout-sidepanel popup-drawer-animation-fade popup-drawer-side-left${drawer.show ? " show-drawer" : ""}${drawer.active ? " active" : ""}`}
        data-drawer-target-string="#mobile-drawer"
      >
        <div className="drawer-overlay" onClick={closeDrawer} />
        <div className="drawer-inner">
          <div className="drawer-header">
            <button ref={closeRef} className="menu-toggle-close drawer-toggle" aria-label="Menü schließen" onClick={closeDrawer}>
              <span className="toggle-close-bar" />
              <span className="toggle-close-bar" />
            </button>
          </div>
          <div className="drawer-content mobile-drawer-content content-align-left content-valign-top">
            <div className="site-header-item site-header-focus-item site-header-item-mobile-navigation mobile-navigation-layout-stretch-false" data-section="kadence_customizer_mobile_navigation">
              <nav id="mobile-site-navigation" className="mobile-navigation drawer-navigation drawer-navigation-parent-toggle-true" role="navigation" aria-label="Primary Mobile Navigation">
                <div className="mobile-menu-container drawer-menu-container">
                  <MobileNav onNavigate={closeDrawer} />
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
