"use client";

import Image from "@/components/WpImage";
import { useEffect, useRef, useState } from "react";
import Swiper from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Lightbox, { type LightboxSlide } from "./Lightbox";

/**
 * Elementor Image Carousel as configured on the service pages:
 * slides_to_show 3 (Elementor defaults: tablet 2, mobile 1), image spacing 20px,
 * autoplay 5000ms, pause on hover + interaction, infinite, slide 500ms,
 * navigation "arrows" ("both" = arrows + dots on /damen/braut/), lightbox on click.
 */
export default function ServiceCarousel({ id, slides, dots = false }: { id: string; slides: LightboxSlide[]; dots?: boolean }) {
  const root = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<Swiper | null>(null);
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const s = new Swiper(el, {
      modules: [Autoplay, Navigation, Pagination],
      slidesPerView: 3,
      spaceBetween: 20,
      loop: slides.length > 3,
      speed: 500,
      autoplay: { delay: 5000, disableOnInteraction: true, pauseOnMouseEnter: true },
      navigation: { prevEl: el.querySelector<HTMLElement>(".elementor-swiper-button-prev"), nextEl: el.querySelector<HTMLElement>(".elementor-swiper-button-next") },
      pagination: dots ? { el: el.querySelector<HTMLElement>(".swiper-pagination"), clickable: true, type: "bullets" } : false,
      breakpoints: {
        0: { slidesPerView: 1, spaceBetween: 20 },
        768: { slidesPerView: 2, spaceBetween: 20 },
        1025: { slidesPerView: 3, spaceBetween: 20 },
      },
    });
    swiperRef.current = s;
    return () => {
      s.destroy(true, true);
      swiperRef.current = null;
    };
  }, [slides.length, dots]);

  useEffect(() => {
    if (open !== null) swiperRef.current?.autoplay?.stop();
  }, [open]);

  return (
    <>
      <div ref={root} className="elementor-image-carousel-wrapper swiper" role="region" aria-roledescription="carousel" aria-label="Bilder-Karussell" dir="ltr">
        <div className="elementor-image-carousel swiper-wrapper swiper-image-stretch" aria-live="off">
          {slides.map((s, i) => (
            <div key={s.src + i} className="swiper-slide" role="group" aria-roledescription="slide" aria-label={`${i + 1} von ${slides.length}`}>
              <a
                data-elementor-open-lightbox="yes"
                data-elementor-lightbox-slideshow={id}
                href={s.src}
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(i);
                }}
              >
                <figure className="swiper-slide-inner">
                  <Image className="swiper-slide-image" src={s.src} alt={s.alt} width={s.width} height={s.height} sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 33vw" loading="lazy" />
                </figure>
              </a>
            </div>
          ))}
        </div>
        <div className="elementor-swiper-button elementor-swiper-button-prev" role="button" tabIndex={0} aria-label="Previous slide">
          <svg aria-hidden="true" className="e-font-icon-svg e-eicon-chevron-left" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z" />
          </svg>
        </div>
        <div className="elementor-swiper-button elementor-swiper-button-next" role="button" tabIndex={0} aria-label="Next slide">
          <svg aria-hidden="true" className="e-font-icon-svg e-eicon-chevron-right" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z" />
          </svg>
        </div>
        {dots && <div className="swiper-pagination" />}
      </div>
      {open !== null && <Lightbox slides={slides} index={open} onIndex={setOpen} onClose={() => setOpen(null)} />}
    </>
  );
}

