import type { Metadata, Viewport } from "next";
import { ICONS, SITE_NAME, SITE_URL } from "./site";

export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  icons: {
    icon: [
      { url: ICONS.icon32, sizes: "32x32" },
      { url: ICONS.icon192, sizes: "192x192" },
    ],
    apple: ICONS.apple,
  },
  other: { "msapplication-TileImage": ICONS.tile },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: { locale: "de_DE", siteName: SITE_NAME, type: "website" },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};
