import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { SERVICES } from "@/lib/services";

/** Clean sitemap: only legitimate pages of this project (no posts, no spam categories). */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority: number, changeFrequency: "monthly" | "yearly" = "monthly") => ({ url: `${SITE_URL}${path}`, lastModified: now, changeFrequency, priority });
  return [
    page("/", 1),
    page("/damen/", 0.8),
    ...SERVICES.map((s) => page(s.path, 0.7)),
    page("/preisliste/", 0.8),
    page("/kontakt/", 0.8),
    page("/herren/", 0.4),
    page("/salon/", 0.3),
    page("/galerie/", 0.3),
    page("/impressum/", 0.3, "yearly"),
    page("/geschaeftsbedingungen/", 0.3, "yearly"),
    page("/cookie-richtlinie-eu/", 0.3, "yearly"),
  ];
}
