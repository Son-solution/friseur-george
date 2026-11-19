/**
 * Site-wide constants, taken 1:1 from https://friseur-george.de/ (inspected 18 Nov 2026).
 */

export const SITE_URL = "https://friseur-george.de";
export const SITE_NAME = "Friseur & Kosmetik George";

/**
 * Salonkee booking widget (the original booking provider).
 * The original links carried Google "Reserve with Google" session tokens
 * (gei, rwg_token, ved) that are single-use tracking values. Only the stable
 * parameters are kept.
 */
export const BOOKING_URL =
  "https://salonkee.de/salon/george/widget/service?hl=de-DE&source=cat";

export const PHONE_HREF = "tel:Tel:0611-51017717"; // exactly as on the original (sic)
export const EMAIL = "bashar.george85@gmail.com";

export const SOCIAL = {
  facebook: "https://www.facebook.com/friseurgeorge",
  instagram: "https://www.instagram.com/friseurgeorge",
  tiktok: "https://www.tiktok.com/@friseurgeorge",
} as const;

// Verbatim from the original: the data= part carries the Google place ID, so the link opens the salon's listing.
export const MAPS_PLACE_URL =
  "https://www.google.com/maps/place/Friseur+George/@50.0786241,8.2284322,730m/data=!3m1!1e3!4m15!1m8!3m7!1s0x47bdbe74eafda24d:0x50dceacebe09010b!2sDotzheimer+Str.+39,+65185+Wiesbaden!3b1!8m2!3d50.0786241!4d8.2310071!16s%2Fg%2F11b8vd29ww!3m5!1s0xc414eb026fc85d9:0xe8340e077ab28bb6!8m2!3d50.0785701!4d8.2310257!16s%2Fg%2F11tss2j5wz?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D";

export const MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=Friseur%20George%20Dotzheimer%20Stra%C3%9Fe%2039%2C%2065185%20Wiesbaden&t=m&z=16&output=embed&iwloc=near";

export const ADDRESS = "Dotzheimer Straße 39, 65185 Wiesbaden";

/** All original images keep their WordPress upload paths so image URLs stay identical. */
const U = "/wp-content/uploads";

export const IMAGES = {
  logo: { src: `${U}/2025/02/Logo-Friseur-George.png`, width: 20717, height: 10550 },
  heroDamen: { src: `${U}/2025/04/150-187-1-1-photoaidcom-greyscale-1024x1019.jpg`, width: 1024, height: 1019 },
  heroHerren: {
    src: `${U}/elementor/thumbs/WhatsApp-Image-2025-07-08-at-19.39.17-rwfsqw5uv4acbhuf52clb6l52em5y9fpqzll34mozk.jpg`,
    width: 1024,
    height: 1024,
    alt: "WhatsApp Image 2025-07-08 at 19.39.17",
  },
  george: { src: `${U}/2025/04/WhatsApp-Image-2025-03-13-at-17.41.56-e1743614149852.jpeg`, width: 741, height: 800 },
  maria: { src: `${U}/2025/04/WhatsApp-Image-2025-04-04-at-21.44.48.jpeg`, width: 899, height: 956 },
} as const;

/** Salon carousel – real slide order as rendered by Swiper on the original (loop duplicates removed). */
export const SALON_SLIDES = [
  { n: 5, file: "WhatsApp-Image-2025-04-02-at-18.42.07-5-scaled-e1743613752296.jpeg", width: 1195, height: 1408 },
  { n: 3, file: "WhatsApp-Image-2025-04-02-at-18.42.07-3-scaled-e1743613771834.jpeg", width: 1195, height: 1434 },
  { n: 1, file: "WhatsApp-Image-2025-04-02-at-18.42.07-1-scaled-e1743613791392.jpeg", width: 1195, height: 1438 },
  { n: 7, file: "WhatsApp-Image-2025-04-02-at-18.42.07-7-scaled-e1743795510274.jpeg", width: 1920, height: 2304 },
  { n: 6, file: "WhatsApp-Image-2025-04-02-at-18.42.07-6-scaled-e1743795539103.jpeg", width: 1034, height: 1258 },
  { n: 4, file: "WhatsApp-Image-2025-04-02-at-18.42.07-4-scaled-e1743795621374.jpeg", width: 866, height: 1000 },
  { n: 2, file: "WhatsApp-Image-2025-04-02-at-18.42.07-2-scaled-e1743795665243.jpeg", width: 838, height: 993 },
].map((s) => ({
  ...s,
  src: `${U}/2025/04/${s.file}`,
  alt: `WhatsApp Image 2025-04-02 at 18.42.07 (${s.n})`,
}));

export const ICONS = {
  icon32: `${U}/2025/02/cropped-symbul-schwarz-32x32.png`,
  icon192: `${U}/2025/02/cropped-symbul-schwarz-192x192.png`,
  apple: `${U}/2025/02/cropped-symbul-schwarz-180x180.png`,
  tile: `${U}/2025/02/cropped-symbul-schwarz-270x270.png`,
} as const;
