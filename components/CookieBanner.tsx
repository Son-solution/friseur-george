"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, FaTimes } from "./icons";

type Category = "functional" | "preferences" | "statistics" | "marketing";
const MAX_AGE = 365 * 24 * 60 * 60;

function readCookie(name: string) {
  return document.cookie
    .split("; ")
    .find((c) => c.startsWith(name + "="))
    ?.split("=")[1];
}
function writeCookie(name: string, value: string) {
  document.cookie = `${name}=${value}; max-age=${MAX_AGE}; path=/; SameSite=Lax${location.protocol === "https:" ? "; Secure" : ""}`;
}

const CATEGORIES: { key: Category; title: string; description: string }[] = [
  {
    key: "functional",
    title: "Funktional",
    description:
      "Die technische Speicherung oder der Zugang ist unbedingt erforderlich für den rechtmäßigen Zweck, die Nutzung eines bestimmten Dienstes zu ermöglichen, der vom Teilnehmer oder Nutzer ausdrücklich gewünscht wird, oder für den alleinigen Zweck, die Übertragung einer Nachricht über ein elektronisches Kommunikationsnetz durchzuführen.",
  },
  {
    key: "preferences",
    title: "Vorlieben",
    description:
      "Die technische Speicherung oder der Zugriff ist für den rechtmäßigen Zweck der Speicherung von Präferenzen erforderlich, die nicht vom Abonnenten oder Benutzer angefordert wurden.",
  },
  {
    key: "statistics",
    title: "Statistiken",
    description: "Die technische Speicherung oder der Zugriff, der ausschließlich zu statistischen Zwecken erfolgt.",
  },
  {
    key: "marketing",
    title: "Marketing",
    description:
      "Die technische Speicherung oder der Zugriff ist erforderlich, um Nutzerprofile zu erstellen, um Werbung zu versenden oder um den Nutzer auf einer Website oder über mehrere Websites hinweg zu ähnlichen Marketingzwecken zu verfolgen.",
  },
];

const STATISTICS_ANONYMOUS =
  "Die technische Speicherung oder der Zugriff, der ausschließlich zu anonymen statistischen Zwecken verwendet wird. Ohne eine Vorladung, die freiwillige Zustimmung deines Internetdienstanbieters oder zusätzliche Aufzeichnungen von Dritten können die zu diesem Zweck gespeicherten oder abgerufenen Informationen allein in der Regel nicht dazu verwendet werden, dich zu identifizieren.";

/**
 * Complianz-style opt-in banner (bottom-right, "save preferences" variant) with the
 * original German texts. Consent is stored in the same cookie names Complianz used
 * (cmplz_*), so visitors who already consented on the WordPress site are not asked again.
 * The original template bugs ("{title}" links, "Manage {vendor_count} vendors") were
 * hidden on the original and are not rendered here.
 */
export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [checked, setChecked] = useState<Record<Category, boolean>>({ functional: true, preferences: false, statistics: false, marketing: false });
  const [openCat, setOpenCat] = useState<Category | null>(null);

  useEffect(() => {
    if (readCookie("cmplz_banner-status") !== "dismissed") setVisible(true);
    const reopen = () => setVisible(true);
    window.addEventListener("fg:manage-consent", reopen);
    return () => window.removeEventListener("fg:manage-consent", reopen);
  }, []);

  const save = (values: Record<Category, boolean>) => {
    (Object.keys(values) as Category[]).forEach((k) => writeCookie(`cmplz_${k}`, k === "functional" || values[k] ? "allow" : "deny"));
    writeCookie("cmplz_banner-status", "dismissed");
    setVisible(false);
    window.dispatchEvent(new CustomEvent("fg:consent", { detail: values }));
  };

  if (!visible) return null;

  return (
    <div id="cmplz-cookiebanner-container">
      <div className="cmplz-cookiebanner banner-1 banner-a optin cmplz-bottom-right cmplz-categories-type-save-preferences cmplz-show" aria-modal="true" data-nosnippet="true" role="dialog" aria-live="polite" aria-labelledby="cmplz-header-1-optin" aria-describedby="cmplz-message-1-optin">
        <div className="cmplz-header">
          <div className="cmplz-logo" />
          <div className="cmplz-title" id="cmplz-header-1-optin">Zustimmung verwalten</div>
          <div className="cmplz-close" tabIndex={0} role="button" aria-label="Dialog schließen" onClick={() => save({ functional: true, preferences: false, statistics: false, marketing: false })} onKeyDown={(e) => e.key === "Enter" && save({ functional: true, preferences: false, statistics: false, marketing: false })}>
            <FaTimes />
          </div>
        </div>

        <div className="cmplz-divider cmplz-divider-header" />
        <div className="cmplz-body">
          <div className="cmplz-message" id="cmplz-message-1-optin">
            Um dir ein optimales Erlebnis zu bieten, verwenden wir Technologien wie Cookies, um Geräteinformationen zu speichern und/oder darauf zuzugreifen. Wenn du diesen Technologien zustimmst, können wir Daten wie das Surfverhalten oder eindeutige IDs auf dieser Website verarbeiten. Wenn du deine Zustimmung nicht erteilst oder zurückziehst, können bestimmte Merkmale und Funktionen beeinträchtigt werden.
          </div>
          <div className="cmplz-categories">
            {CATEGORIES.map((c) => (
              <div key={c.key} className={`cmplz-category cmplz-${c.key}${openCat === c.key ? " cmplz-open" : ""}`}>
                <div className="cmplz-category-header">
                  <span className="cmplz-category-title">{c.title}</span>
                  {c.key === "functional" ? (
                    <span className="cmplz-always-active">
                      <span className="cmplz-banner-checkbox">
                        <input type="checkbox" id="cmplz-functional-optin" className="cmplz-consent-checkbox cmplz-functional" checked disabled readOnly />
                        <label className="cmplz-label" htmlFor="cmplz-functional-optin">
                          <span className="screen-reader-text">Funktional</span>
                        </label>
                      </span>
                      Always active
                    </span>
                  ) : (
                    <span className="cmplz-banner-checkbox">
                      <input
                        type="checkbox"
                        id={`cmplz-${c.key}-optin`}
                        className={`cmplz-consent-checkbox cmplz-${c.key}`}
                        checked={checked[c.key]}
                        onChange={(e) => setChecked((v) => ({ ...v, [c.key]: e.target.checked }))}
                      />
                      <label className="cmplz-label" htmlFor={`cmplz-${c.key}-optin`}>
                        <span className="screen-reader-text">{c.title}</span>
                      </label>
                    </span>
                  )}
                  <button type="button" className="cmplz-category-toggle" aria-expanded={openCat === c.key} aria-label={c.title} onClick={() => setOpenCat((o) => (o === c.key ? null : c.key))}>
                    <span className="cmplz-icon cmplz-open">
                      <ChevronDown />
                    </span>
                  </button>
                </div>
                <div className="cmplz-description">
                  <span className={`cmplz-description-${c.key}`}>{c.description}</span>
                  {c.key === "statistics" && <span className="cmplz-description-statistics-anonymous">{STATISTICS_ANONYMOUS}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cmplz-divider cmplz-footer" />
        <div className="cmplz-buttons">
          <button type="button" className="cmplz-btn cmplz-accept" onClick={() => save({ functional: true, preferences: true, statistics: true, marketing: true })}>
            Akzeptieren
          </button>
          <button type="button" className="cmplz-btn cmplz-deny" onClick={() => save({ functional: true, preferences: false, statistics: false, marketing: false })}>
            Ablehnen
          </button>
          <button type="button" className="cmplz-btn cmplz-save-preferences" onClick={() => save(checked)}>
            Einstellungen speichern
          </button>
        </div>

        <div className="cmplz-links cmplz-documents">
          <ul>
            <li>
              <Link href="/cookie-richtlinie-eu/" className="cmplz-link cookie-statement" data-relative_url="#cmplz-manage-consent-container">
                Cookie-Richtlinie
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
