"use client";

import { useEffect, useRef, useState } from "react";
import { MAPS_PLACE_URL } from "@/lib/site";
import reviewsData from "@/data/reviews.json";

/**
 * Google reviews: a summary card (rating, stars, link to the Google listing) followed by
 * one card per review (quote, initial avatar, name, stars). Long reviews are clamped with
 * "Weiterlesen"; REVIEWS_PER_PAGE are shown at first, then "Mehr laden".
 * Styles: .fg-reviews in app/styles/custom.css.
 */

/**
 * Data: data/reviews.json – refreshed every 10 days from the public Google Maps listing by
 * scripts/update-reviews.mjs (GitHub Actions: .github/workflows/update-reviews.yml).
 */
type Review = { id?: string; name: string; text: string };
const DATA = reviewsData as { updatedAt: string; rating: string; count: number | null; reviews: Review[] };
const RATING = DATA.rating;
const REVIEW_COUNT = DATA.count;
const REVIEWS = DATA.reviews;

const REVIEWS_PER_PAGE = 4;

function Stars({ size = 18 }: { size?: number }) {
  return (
    <span className="fg-stars" role="img" aria-label="5 von 5 Sternen">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.5l2.94 6.1 6.56.9-4.78 4.6 1.17 6.6L12 17.6l-5.89 3.1 1.17-6.6L2.5 9.5l6.56-.9z" />
        </svg>
      ))}
    </span>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [overflowing, setOverflowing] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    const check = () => {
      if (!open) setOverflowing(el.scrollHeight > el.clientHeight + 1);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [open]);

  return (
    <figure className="fg-review-card">
      <span className="fg-review-quote" aria-hidden="true">&rdquo;</span>
      <blockquote className="fg-review-text">
        <p ref={textRef} className={open ? "is-open" : undefined}>
          {review.text.split("\n").map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </p>
        {(overflowing || open) && (
          <button type="button" className="fg-review-more" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
            {open ? "Ausblenden" : "Weiterlesen"}
          </button>
        )}
      </blockquote>
      <figcaption className="fg-review-author">
        <span className="fg-review-avatar" aria-hidden="true">
          {review.name.trim().charAt(0).toUpperCase()}
        </span>
        <span className="fg-review-meta">
          <span className="fg-review-name">{review.name}</span>
          <span className="fg-review-source">
            <Stars size={15} />
            <span>Google-Rezension</span>
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

export default function GoogleReviews() {
  const [visible, setVisible] = useState(REVIEWS_PER_PAGE);

  return (
    <div className="fg-reviews">
      <div className="fg-review-summary">
        <div className="fg-review-score">{RATING}</div>
        <Stars size={26} />
        <p className="fg-review-count">{REVIEW_COUNT ? `aus ${REVIEW_COUNT} Bewertungen auf Google` : "Bewertungen auf Google"}</p>
        <a className="fg-review-all" href={MAPS_PLACE_URL} target="_blank" rel="noopener noreferrer">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/trustindex/assets/platform/Google/icon.svg" alt="" width={18} height={18} />
          <span>Alle Bewertungen ansehen</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      {REVIEWS.slice(0, visible).map((r) => (
        <ReviewCard key={r.id || r.name} review={r} />
      ))}

      {visible < REVIEWS.length && (
        <button type="button" className="fg-review-load" onClick={() => setVisible((v) => v + REVIEWS_PER_PAGE)}>
          Mehr laden
        </button>
      )}
    </div>
  );
}
