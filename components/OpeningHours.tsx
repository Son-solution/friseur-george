"use client";

import { useEffect, useState } from "react";
import { OPENING_HOURS } from "@/lib/site";

/** Index (0 = Montag … 6 = Sonntag) of today in the salon's time zone. */
function todayIndex(): number {
  const wd = new Intl.DateTimeFormat("en-US", { weekday: "short", timeZone: "Europe/Berlin" }).format(new Date());
  return ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].indexOf(wd);
}

/**
 * Opening hours as a list of rows (day left, time right, hairline separators).
 * Today's row is highlighted; it is computed after mount so the server HTML stays
 * the same for every visitor (no hydration mismatch).
 */
export default function OpeningHours() {
  const [today, setToday] = useState<number | null>(null);

  useEffect(() => {
    setToday(todayIndex());
    // keep it correct if the page stays open past midnight
    const t = setInterval(() => setToday(todayIndex()), 60_000);
    return () => clearInterval(t);
  }, []);

  return (
    <ul className="fg-hours">
      {OPENING_HOURS.map((row, i) => (
        <li key={row.day} className={`fg-hours-row${i === today ? " is-today" : ""}${row.hours ? "" : " is-closed"}`} aria-current={i === today ? "date" : undefined}>
          <span className="fg-hours-day">{row.day}</span>
          <span className="fg-hours-time">{row.hours ?? "Geschlossen"}</span>
        </li>
      ))}
    </ul>
  );
}
