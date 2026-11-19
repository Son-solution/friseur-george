"use client";

/** Re-opens the cookie banner (replaces Complianz's inline "manage consent" widget on the cookie policy page). */
export default function ManageConsentButton() {
  return (
    <button type="button" className="button cmplz-manage-consent-button" onClick={() => window.dispatchEvent(new Event("fg:manage-consent"))}>
      Zustimmung verwalten
    </button>
  );
}
