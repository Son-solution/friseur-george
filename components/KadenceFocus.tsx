"use client";

import { useEffect } from "react";

/** Kadence's focus-outline helper: hide outlines for mouse users, show them again for keyboard users. */
export default function KadenceFocus() {
  useEffect(() => {
    const b = document.body;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Tab") b.classList.remove("hide-focus-outline");
    };
    const onMouse = () => b.classList.add("hide-focus-outline");
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onMouse);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onMouse);
    };
  }, []);
  return null;
}
