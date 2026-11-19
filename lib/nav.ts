/** Main navigation (header on desktop, side drawer on mobile). */
export type NavItem = { label: string; href: string; children?: NavItem[] };

export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Damen",
    href: "/damen/",
    children: [
      { label: "Schnitt", href: "/damen/damen-schnitt/" },
      { label: "Färben", href: "/damen/faerben/" },
      { label: "Balayage", href: "/damen/balayage-friseur/" },
      { label: "Strähnen", href: "/damen/straehnen/" },
      { label: "Extensions", href: "/damen/extentions/" },
      { label: "Make-up", href: "/damen/make-up/" },
      { label: "Braut", href: "/damen/braut/" },
      { label: "Hochstecken", href: "/damen/hochstecken/" },
      { label: "Haar Proteine", href: "/damen/haar-protin/" },
    ],
  },
  {
    label: "Herren",
    href: "/herren/",
    children: [
      { label: "Schnitt", href: "/herren/schnitt/" },
      { label: "Färben", href: "/herren/faerben/" },
      { label: "Dauerwelle", href: "/herren/dauerwelle/" },
    ],
  },
  { label: "Produkte", href: "/produkte/" },
  { label: "Preisliste", href: "/preisliste/" },
  { label: "Kontakt", href: "/kontakt/" },
];
