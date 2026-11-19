"use client";

import Image from "@/components/WpImage";
import { useEffect, useRef, useState } from "react";
import Swiper from "swiper";
import { Autoplay } from "swiper/modules";
import { SALON_SLIDES } from "@/lib/site";
import Lightbox from "./Lightbox";

/**
 * Elementor "Image Carousel" widget (e06fc59) with the original settings:
 * slides_to_show 1, navigation none, autoplay 5000ms, pause on hover + interaction,
 * infinite loop, effect "slide", speed 500ms. Clicking a slide opens the Elementor-style
 * lightbox slideshow.
 */
export default function SalonCarousel() {
  const root = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<Swiper | null>(null);
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (!root.current) return;
    const s = new Swiper(root.current, {
      modules: [Autoplay],
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      speed: 500,
      effect: "slide",
      autoplay: { delay: 5000, disableOnInteraction: true, pauseOnMouseEnter: true },
    });
    swiperRef.current = s;
    return () => {
      s.destroy(true, true);
      swiperRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (open !== null) swiperRef.current?.autoplay?.stop();
  }, [open]);

  return (
    <>
      <div ref={root} className="elementor-image-carousel-wrapper swiper" role="region" aria-roledescription="carousel" aria-label="Bilder-Karussell" dir="ltr">
        <div className="elementor-image-carousel swiper-wrapper" aria-live="off">
          {SALON_SLIDES.map((s, i) => (
            <div key={s.file} className="swiper-slide" role="group" aria-roledescription="slide" aria-label={`${i + 1} von ${SALON_SLIDES.length}`}>
              <a
                data-elementor-open-lightbox="yes"
                data-elementor-lightbox-slideshow="e06fc59"
                href={s.src}
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(i);
                }}
              >
                <figure className="swiper-slide-inner">
                  <Image className="swiper-slide-image" src={s.src} alt={s.alt} width={s.width} height={s.height} sizes="(max-width: 767px) 100vw, 523px" />
                </figure>
              </a>
            </div>
          ))}
        </div>
      </div>
      {open !== null && <Lightbox slides={SALON_SLIDES} index={open} onIndex={setOpen} onClose={() => setOpen(null)} />}
    </>
  );
}
