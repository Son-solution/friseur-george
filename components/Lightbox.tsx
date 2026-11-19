"use client";

import { useCallback, useEffect } from "react";
import Image from "./WpImage";
import { LightboxChevronLeft, LightboxChevronRight, LightboxClose } from "./icons";

export type LightboxSlide = { src: string; alt: string; width: number; height: number };

/** Elementor-style lightbox slideshow (counter "n / total", prev/next, close, Esc / arrow keys). */
export default function Lightbox({ slides, index, onIndex, onClose }: { slides: LightboxSlide[]; index: number; onIndex: (i: number) => void; onClose: () => void }) {
  const step = useCallback((d: number) => onIndex((index + d + slides.length) % slides.length), [index, slides.length, onIndex]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose, step]);

  const s = slides[index];
  return (
    <div className="dialog-widget dialog-lightbox-widget dialog-type-buttons dialog-type-lightbox elementor-lightbox" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="dialog-widget-content dialog-lightbox-widget-content">
        <div className="elementor-slideshow__header elementor-lightbox-prevent-close" onClick={(e) => e.stopPropagation()}>
          <div className="elementor-slideshow__counter">
            {index + 1} / {slides.length}
          </div>
        </div>
        <button type="button" className="dialog-close-button dialog-lightbox-close-button" aria-label="Schließen" onClick={onClose}>
          <LightboxClose />
        </button>
        <div className="elementor-lightbox-stage">
          <Image key={s.src} className="elementor-lightbox-image elementor-lightbox-prevent-close" src={s.src} alt={s.alt} width={s.width} height={s.height} sizes="100vw" onClick={(e) => e.stopPropagation()} />
        </div>
        {slides.length > 1 && (
          <>
            <button type="button" className="elementor-swiper-button elementor-swiper-button-prev elementor-lightbox-prevent-close" aria-label="Vorherige" onClick={(e) => { e.stopPropagation(); step(-1); }}>
              <LightboxChevronLeft />
            </button>
            <button type="button" className="elementor-swiper-button elementor-swiper-button-next elementor-lightbox-prevent-close" aria-label="Nächste" onClick={(e) => { e.stopPropagation(); step(1); }}>
              <LightboxChevronRight />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
