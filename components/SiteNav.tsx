"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV, type NavItem } from "@/lib/nav";

function isActive(pathname: string, item: NavItem): boolean {
  if (item.href === "/") return pathname === "/";
  return pathname.startsWith(item.href) || !!item.children?.some((c) => pathname.startsWith(c.href));
}

/** Desktop header menu: hover / keyboard-focus dropdowns. */
export function DesktopNav() {
  const pathname = usePathname() ?? "/";
  return (
    <ul id="primary-menu" className="menu fg-menu">
      {NAV.map((item) => (
        <li
          key={item.href}
          className={`menu-item${item.children ? " menu-item-has-children" : ""}${isActive(pathname, item) ? " current-menu-item" : ""}`}
        >
          <Link href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
            {item.label}
            {item.children && <span className="fg-caret" aria-hidden="true" />}
          </Link>
          {item.children && (
            <ul className="sub-menu">
              {item.children.map((c) => (
                <li key={c.href} className={`menu-item${pathname.startsWith(c.href) ? " current-menu-item" : ""}`}>
                  <Link href={c.href} aria-current={pathname.startsWith(c.href) ? "page" : undefined}>
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

/** Mobile drawer menu: sub-menus open with a toggle button. */
export function MobileNav({ onNavigate }: { onNavigate: () => void }) {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState<string | null>(() => NAV.find((i) => i.children && isActive(pathname, i))?.href ?? null);

  return (
    <ul id="mobile-menu" className="menu fg-mobile-menu">
      {NAV.map((item) => {
        const expanded = open === item.href;
        return (
          <li key={item.href} className={`menu-item${isActive(pathname, item) ? " current-menu-item" : ""}`}>
            <div className="fg-mobile-row">
              <Link href={item.href} onClick={onNavigate} aria-current={pathname === item.href ? "page" : undefined}>
                {item.label}
              </Link>
              {item.children && (
                <button
                  type="button"
                  className={`fg-sub-toggle${expanded ? " is-open" : ""}`}
                  aria-expanded={expanded}
                  aria-label={`${item.label} Untermenü ${expanded ? "schließen" : "öffnen"}`}
                  onClick={() => setOpen(expanded ? null : item.href)}
                >
                  <span className="fg-caret" aria-hidden="true" />
                </button>
              )}
            </div>
            {item.children && expanded && (
              <ul className="sub-menu">
                {item.children.map((c) => (
                  <li key={c.href} className={`menu-item${pathname.startsWith(c.href) ? " current-menu-item" : ""}`}>
                    <Link href={c.href} onClick={onNavigate} aria-current={pathname.startsWith(c.href) ? "page" : undefined}>
                      {c.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
}
