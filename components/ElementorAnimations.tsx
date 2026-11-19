"use client";

import { useEffect } from "react";

/**
 * Elementor entrance animations.
 * Elements are server-rendered with `elementor-invisible` and `data-fg-animation`.
 * Like Elementor's waypoint (offset "bottom-in-view", trigger once), the animation starts
 * as soon as the element's top edge enters the viewport: `elementor-invisible` is removed
 * and `animated <name>` is added (duration 1.25s from `.animated`).
 * With prefers-reduced-motion the CSS in elementor.css disables the keyframes, so the
 * elements simply appear – same as on the original.
 */
export default function ElementorAnimations() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-fg-animation]"));
    const run = (el: HTMLElement) => {
      const name = el.dataset.fgAnimation;
      if (!name) return;
      el.classList.remove("elementor-invisible");
      if (name !== "none") el.classList.add("animated", name);
      delete el.dataset.fgAnimation;
    };
    if (!("IntersectionObserver" in window)) {
      els.forEach(run);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            run(entry.target as HTMLElement);
            io.unobserve(entry.target);
          }
        }
      },
      { root: null, rootMargin: "0px", threshold: 0 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
