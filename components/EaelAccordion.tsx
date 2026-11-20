"use client";

import { useEffect, useRef, useState } from "react";
import type { Faq } from "@/lib/services";

const ANGLE_RIGHT =
  "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z";

/**
 * Essential Addons "Advanced Accordion" (type: accordion, toggle speed 300ms).
 * The first item is open by default ("active-default"); opening an item closes the others,
 * with a 300ms height slide like EAEL's jQuery slideUp/slideDown.
 * Markup is kept identical. The toggle SVG is unsized on the original (very large, because the
 * page stylesheet is missing); app/styles/custom.css gives it a fixed size.
 */
export default function EaelAccordion({ id, faqs }: { id: string; faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(faqs.findIndex((f) => f.active));
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const slide = (el: HTMLDivElement | null, show: boolean) => {
    if (!el || typeof el.animate !== "function") return;
    const h = el.scrollHeight;
    el.animate(show ? [{ height: "0px", overflow: "hidden" }, { height: `${h}px`, overflow: "hidden" }] : [{ height: `${h}px`, overflow: "hidden" }, { height: "0px", overflow: "hidden" }], { duration: 300, easing: "ease" });
  };

  // EAEL opens the "active-default" item with a slideDown right after initialisation.
  useEffect(() => {
    const i = faqs.findIndex((f) => f.active);
    if (i >= 0) slide(contentRefs.current[i], true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggle = (i: number) => {
    const prev = open;
    if (prev === i) {
      slide(contentRefs.current[i], false);
      setTimeout(() => setOpen(null), 300);
      return;
    }
    if (prev !== null && prev >= 0) slide(contentRefs.current[prev], false);
    setOpen(i);
    requestAnimationFrame(() => slide(contentRefs.current[i], true));
  };

  return (
    <div className="eael-adv-accordion" id={`eael-adv-accordion-${id}`} data-scroll-on-click="" data-scroll-speed="300" data-accordion-id={id} data-accordion-type="accordion" data-toogle-speed="300">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div className="eael-accordion-list" key={f.id + i}>
            <div
              id={f.id}
              className={`elementor-tab-title eael-accordion-header${f.active ? " active-default show-this" : ""}${isOpen ? " active show" : ""}`}
              tabIndex={0}
              data-tab={i + 1}
              role="button"
              aria-controls={`elementor-tab-content-${f.tab}`}
              aria-expanded={isOpen}
              onClick={() => toggle(i)}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), toggle(i))}
            >
              <span className="eael-advanced-accordion-icon-closed" />
              <span className="eael-advanced-accordion-icon-opened" />
              <span className="eael-accordion-tab-title" dangerouslySetInnerHTML={{ __html: f.title }} />
              <svg aria-hidden="true" className="fa-toggle e-font-icon-svg e-fas-angle-right" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg">
                <path d={ANGLE_RIGHT} />
              </svg>
            </div>
            <div
              ref={(el) => {
                contentRefs.current[i] = el;
              }}
              id={`elementor-tab-content-${f.tab}`}
              className={`eael-accordion-content clearfix${f.active ? " active-default" : ""}${isOpen ? " fg-open" : ""}`}
              data-tab={i + 1}
              role="region"
              aria-labelledby={f.id}
              dangerouslySetInnerHTML={{ __html: f.html }}
            />
          </div>
        );
      })}
    </div>
  );
}
