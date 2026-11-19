"use client";

import { useEffect, useRef, useState } from "react";
import "../app/styles/trustindex.css";

/**
 * Static rebuild of the Trustindex "Google reviews" widget on the original home page
 * (layout 33 "list", set "dark-background", plugin 13.3.2).
 * The markup and CSS are the original's. The CDN assets and avatars are served locally,
 * so cdn.trustindex.io/loader.js is no longer needed.
 * Loader behaviour reproduced here: relative dates, "Weiterlesen"/"Ausblenden", and
 * 5 reviews per page with a "Mehr laden" button.
 */

type Review = { time: number; name: string; avatar: string; text: string };

// Review data as printed in the original <template id="trustindex-google-widget-html"> (all 5 stars).
const REVIEWS: Review[] = [
  {
    time: 1772668800,
    name: "Nina Tratz",
    avatar: "/trustindex/avatars/1.png",
    text: "Noch nie so glücklich aus einem Frisörladen gekommen ! Wunderbares Färben, schneiden und föhnen ! Sehr zu empfehlen! Preis Leitung ist absolut top! Danke !!!",
  },
  {
    time: 1771891200,
    name: "Somayyeh Abolhasani",
    avatar: "/trustindex/avatars/2.png",
    text: "Ich war heute zum ersten Mal in diesem Salon  und bin absolut begeistert! Das gesamte Team ist unglaublich freundlich, herzlich und professionell. Auch ohne Termin hat man sich Zeit für mich genommen und alles möglich gemacht, das ist wirklich nicht selbstverständlich.\nDie Beratung war kompetent und ehrlich, und mit dem Ergebnis bin ich mehr als zufrieden. Genau so habe ich mir meinen Haarschnitt vorgestellt👍\nIch komme auf jeden Fall wieder und kann den Salon nur weiterempfehlen. ✂️😊🙏",
  },
  {
    time: 1770595200,
    name: "K 2",
    avatar: "/trustindex/avatars/3.png",
    text: "Top Friseursalon! Sehr professionell, super Ergebnis, klare Empfehlung!",
  },
  {
    time: 1767398400,
    name: "Monika Lupelli",
    avatar: "/trustindex/avatars/4.png",
    text: "Ein sehr schönes gleichmäßiges Ergebnis. Haare sind gleichmäßig Blond mit schönen Highlights",
  },
  {
    time: 1756771200,
    name: "Jana Meise",
    avatar: "/trustindex/avatars/5.png",
    text: "Ich bin schon viele Jahre bei George Kundin und mehr als zufrieden.\nEr berät mich immer gut und sagt ehrlich, wenn etwas nicht möglich ist.\nEr hat vor vielen Jahren meine Haare gerettet und daher kann ich diesen Friseur nur empfehlen! :)",
  },
  {
    time: 1756771200,
    name: "Dors Badil",
    avatar: "/trustindex/avatars/6.png",
    text: "Very good job and friendly and understanding did what I needed I am from USA thank you George",
  },
  {
    time: 1754697600,
    name: "Esra Sarica",
    avatar: "/trustindex/avatars/7.png",
    text: "Ich war heute zum ersten Mal in diesem Salon und bin rundum begeistert!\nDie Beratung war sehr ausführlich und individuell. Es wurde genau auf meine Wünsche eingegangen und ich habe viele hilfreiche Tipps bekommen.\nDer Haarschnitt ist perfekt geworden, genau so, wie ich es mir vorgestellt habe.\nMan merkt sofort, dass hier mit viel Fachwissen, Sorgfalt und Leidenschaft gearbeitet wird.\nIch fühle mich mit meinem neuen Look richtig wohl und komme definitiv wieder.\nVielen Dank für die tolle Arbeit!",
  },
];

const ROWS_PER_PAGE = 5; // data-load-more-rows="5"

/** data-time-locale="vor %d %s|Heute|Tag|Tagen|Woche|Wochen|Monat|Monaten|Jahr|Jahren" */
function relativeDate(time: number, now: number): string {
  const days = Math.floor((now / 1000 - time) / 86400);
  const fmt = (n: number, one: string, many: string) => `vor ${n} ${n === 1 ? one : many}`;
  if (days < 1) return "Heute";
  if (days < 7) return fmt(days, "Tag", "Tagen");
  if (days < 30) return fmt(Math.round(days / 7), "Woche", "Wochen");
  if (days < 365) return fmt(Math.max(1, Math.round(days / 30)), "Monat", "Monaten");
  return fmt(Math.round(days / 365), "Jahr", "Jahren");
}

function ReviewItem({ review, now }: { review: Review; now: number | null }) {
  const textRef = useRef<HTMLDivElement>(null);
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

  const expandedStyle = open && textRef.current
    ? { maxHeight: `${textRef.current.scrollHeight}px`, WebkitLineClamp: "unset" as const }
    : undefined;

  return (
    <div data-empty="0" data-time={review.time} className="ti-review-item source-Google ti-image-layout-thumbnail">
      <div className="ti-inner">
        <div className="ti-review-header">
          <div className="ti-platform-icon ti-with-tooltip">
            <span className="ti-tooltip">Gepostet auf Google</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/trustindex/assets/platform/Google/icon.svg" alt="Google" width={20} height={20} loading="lazy" />
          </div>
          <div className="ti-profile-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={review.avatar} alt={`${review.name} profile picture`} loading="lazy" />
          </div>
          <div className="ti-profile-details">
            <div className="ti-name">{review.name}</div>
            <div className="ti-date">{now ? relativeDate(review.time, now) : ""}</div>
          </div>
        </div>
        <span className="ti-stars">
          {[1, 2, 3, 4, 5].map((n) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={n} className="ti-star" src="/trustindex/assets/platform/Google/star/f.svg" alt={`Google star ${n}`} width={17} height={17} loading="lazy" />
          ))}
          <span className="ti-verified-review ti-verified-platform">
            <span className="ti-verified-tooltip">Trustindex überprüft, ob die Originalquelle der Bewertung Google ist.</span>
          </span>
        </span>
        <div className="ti-review-content">
          <div ref={textRef} className="ti-review-text-container ti-inner" style={expandedStyle}>
            {review.text.split("\n").map((line, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </div>
          <span className="ti-read-more">
            {(overflowing || open) && (
              <span role="button" tabIndex={0} onClick={() => setOpen((o) => !o)} onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setOpen((o) => !o)}>
                {open ? "Ausblenden" : "Weiterlesen"}
              </span>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function GoogleReviews() {
  const [now, setNow] = useState<number | null>(null); // set after mount, so server and client HTML match
  const [visible, setVisible] = useState(ROWS_PER_PAGE);
  useEffect(() => setNow(Date.now()), []);

  return (
    <div className="ti-widget ti-goog ti-review-text-mode-readmore ti-text-align-left" data-no-translation="true" data-layout-id="33" data-layout-category="list" data-set-id="dark-background" data-language="de">
      <div className="ti-widget-container">
        <div className="ti-reviews-container">
          <div className="ti-reviews-container-wrapper">
            {REVIEWS.slice(0, visible).map((r) => (
              <ReviewItem key={r.name} review={r} now={now} />
            ))}
          </div>
          <div className="ti-load-more-reviews-container">
            {visible < REVIEWS.length && (
              <div className="ti-load-more-reviews-button" role="button" tabIndex={0} onClick={() => setVisible((v) => v + ROWS_PER_PAGE)} onKeyDown={(e) => e.key === "Enter" && setVisible((v) => v + ROWS_PER_PAGE)}>
                Mehr laden
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
