"use client";

import Image from "@/components/WpImage";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { IMAGES } from "@/lib/site";

const SLIDES = [
  { label: "Damen", href: "/damen/", image: IMAGES.heroDamen, alt: "Damen – Friseur George Wiesbaden" },
  { label: "Herren", href: "/herren/", image: IMAGES.heroHerren, alt: "Herren – Friseur George Wiesbaden" },
];

/**
 * Home hero: Damen → Herren as an auto-playing, looping fade slider.
 * The word sits in the middle of each image and links to its page.
 * The previous side-by-side hero is kept as HeroSplit in app/(home)/page.tsx (HERO_STYLE switch).
 * Styles: .fg-hero in app/styles/custom.css.
 */
export default function HeroSlider() {
  const root = useRef<HTMLDivElement>(null);
  const dots = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const s = new Swiper(root.current, {
      modules: [Autoplay, EffectFade, Pagination],
      slidesPerView: 1,
      loop: true,
      speed: 900,
      effect: "fade",
      fadeEffect: { crossFade: true },
      autoplay: reduced ? false : { delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true },
      pagination: { el: dots.current, clickable: true, bulletClass: "fg-hero-dot", bulletActiveClass: "is-active" },
    });
    return () => {
      s.destroy(true, true);
    };
  }, []);

  return (
    <section className="fg-hero" aria-label="Damen und Herren">
      <div ref={root} className="swiper fg-hero-swiper">
        <div className="swiper-wrapper">
          {SLIDES.map((s, i) => (
            <div key={s.label} className="swiper-slide fg-hero-slide">
              <Image
                src={s.image.src}
                width={s.image.width}
                height={s.image.height}
                alt={s.alt}
                sizes="(max-width: 820px) 100vw, 820px"
                priority={i === 0}
                className="fg-hero-img"
              />
              <Link href={s.href} className="fg-hero-link fg-heartbeat">
                {s.label}
              </Link>
            </div>
          ))}
        </div>
        <div ref={dots} className="fg-hero-dots" />
      </div>
    </section>
  );
}
