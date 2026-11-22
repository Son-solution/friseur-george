/**
 * Content of the 13 Elementor service pages (same template on the original:
 * heading → image carousel → text editor → EAEL advanced accordion).
 * Extracted verbatim from the live pages on 18 Nov 2026. Slide strings: "path|alt|WxH"
 * (path relative to /wp-content/uploads/). Natural pixel sizes were read from the real files.
 */

export type Faq = { id: string; tab: string; title: string; html: string; active?: boolean };
export type ServicePage = {
  path: string;
  pageId: number;
  title: string;
  metaTitle: string;
  description?: string;
  ids: [container1: string, heading: string, container2: string, carousel: string, container3: string, text: string, accordion: string];
  headingAnim?: string;
  navigation?: "arrows" | "both";
  slides: string[];
  text: string;
  faqs: Faq[];
};

const Q = (id: string, tab: string, title: string, html: string, active = false): Faq => ({ id, tab, title, html, active });

export const SERVICES: ServicePage[] = [
  {
    path: "/damen/straehnen/",
    pageId: 353,
    title: "Strähnen",
    metaTitle: "Strähnen - Friseur & Kosmetik George",
    ids: ["d5b9f3c", "3368efa", "70f892d", "f2169d4", "eb8ad77", "68c7c70", "da42b2b"],
    slides: [
      "2025/04/WhatsApp-Image-2025-04-02-at-21.54.30.jpeg|WhatsApp Image 2025-04-02 at 21.54.30|1200x1600",
      "2025/04/WhatsApp-Image-2025-04-02-at-21.54.30-1.jpeg|WhatsApp Image 2025-04-02 at 21.54.30 (1)|1200x1600",
      "2025/04/WhatsApp-Image-2025-04-02-at-21.54.31-5.jpeg|WhatsApp Image 2025-04-02 at 21.54.31 (5)|1200x1600",
      "2025/04/WhatsApp-Image-2025-04-02-at-21.54.31-4-e1743789610317.jpeg|WhatsApp Image 2025-04-02 at 21.54.31 (4)|900x1400",
      "2025/04/WhatsApp-Image-2025-04-02-at-21.54.31-e1743789631586.jpeg|WhatsApp Image 2025-04-02 at 21.54.31|1200x1340",
      "2025/03/IMG_E2329-scaled-e1743789814131.jpg|IMG_E2329|1440x2220",
      "2025/03/IMG_E0556-scaled-e1743789651632.jpg|IMG_E0556|1440x2074",
      "2025/03/IMG_9533-scaled-e1743789669306.jpg|IMG_9533|1440x2360",
      "2025/03/IMG_9532-scaled-e1743789691919.jpg|IMG_9532|1440x2138",
      "2025/03/IMG_9058-scaled-e1743789709255.jpg|IMG_9058|1440x2120",
      "2025/03/IMG_2390-scaled.jpg|IMG_2390|1440x2560",
      "2025/03/IMG_2389-scaled.jpg|IMG_2389|1440x2560",
      "2025/03/IMG_1592-scaled-e1743789728417.jpg|IMG_1592|1440x1643",
      "2025/03/IMG_1068-scaled.jpg|IMG_1068|1440x2560",
      "2025/03/IMG_1056-scaled.jpg|IMG_1056|1440x2560",
      "2025/03/IMG_1049-scaled.jpg|IMG_1049|1440x2560",
      "2025/03/IMG_0987-scaled.jpg|IMG_0987|1440x2560",
      "2025/03/IMG_0551-scaled.jpg|IMG_0551|1440x2560",
      "2025/03/IMG_0545-scaled-e1743789784895.jpg|IMG_0545|1440x1818",
      "2025/03/cc7f2d67-262d-4e6a-b91b-2f7f5adfc491.jpg|cc7f2d67-262d-4e6a-b91b-2f7f5adfc491|576x1024",
      "2025/03/c690147c-2f0e-48ed-bdd2-db68403c94ad.jpg|c690147c-2f0e-48ed-bdd2-db68403c94ad|576x1024",
      "2025/03/89c9a5cc-8331-42c2-b6b2-f2f0796cb492.jpg|89c9a5cc-8331-42c2-b6b2-f2f0796cb492|576x1024",
      "2025/03/55fe8a53-f14f-48b8-b5d7-ca18c32c3a13.jpg|55fe8a53-f14f-48b8-b5d7-ca18c32c3a13|576x1024",
      "2025/03/8d1e7ec4-c8f4-4918-bbe3-d4330b279cb4.jpg|8d1e7ec4-c8f4-4918-bbe3-d4330b279cb4|576x1024",
      "2025/04/WhatsApp-Image-2025-04-02-at-21.54.31-1.jpeg|WhatsApp Image 2025-04-02 at 21.54.31 (1)|900x1600",
      "2025/04/WhatsApp-Image-2025-04-02-at-21.54.31-2.jpeg|WhatsApp Image 2025-04-02 at 21.54.31 (2)|1200x1600",
      "2025/04/WhatsApp-Image-2025-04-02-at-21.54.31-3.jpeg|WhatsApp Image 2025-04-02 at 21.54.31 (3)|1200x1600",
    ],
    text: `<p><strong>Strähnen – Natürliche Highlights vom Profi | Friseur Wiesbaden</strong></p><p>Strähnen sind weit mehr als nur Farbspiel im Haar – sie verleihen jeder Frisur Tiefe, Bewegung und Frische. Aber was genau ist <strong>Strähnen</strong> eigentlich? Beim Strähnen werden gezielt einzelne Haarpartien aufgehellt oder abgedunkelt, um Kontraste zu schaffen und die Haarfarbe lebendiger wirken zu lassen. Es ist eine beliebte Technik, um dem Haar mehr Struktur zu geben, ohne eine komplette Farbveränderung vorzunehmen.</p><p><strong>Warum sind Strähnen notwendig?</strong><br>Strähnen helfen dabei, einen natürlichen Look zu kreieren und können gezielt Akzente setzen – zum Beispiel, um Gesichtszüge zu betonen oder dem Haar optisch mehr Volumen zu geben. Besonders bei einem professionellen <strong>Friseur in Wiesbaden</strong> wie Friseur George wird individuell auf Ihren Typ und Stil eingegangen, um die perfekte Farbkombination zu erzielen.</p>`,
    faqs: [
      Q("wie-lange-halten-strhnen", "2281", "Wie lange halten Strähnen?", "<p>Je nach Technik und Haarwachstum etwa 6–10 Wochen.</p>", true),
      Q("sind-strhnen-schdlich-fr-das-haar", "2282", "Sind Strähnen schädlich für das Haar?", "<p>Bei professioneller Anwendung und Pflege nicht. Wir arbeiten mit hochwertigen Produkten, die Ihr Haar schützen.</p><ul><li><p> </p></li></ul>"),
      Q("welche-arten-von-strhnen-gibt-es", "2283", "Welche Arten von Strähnen gibt es?", "<p>Von klassischen Foliensträhnen über Balayage bis hin zu feinen Babylights – wir beraten Sie individuell.</p>"),
      Q("kann-man-graue-haare-mit-strhnen-kaschieren", "2284", "Kann man graue Haare mit Strähnen kaschieren?", "<p>Ja! Strähnen eignen sich hervorragend, um graue Haare natürlich zu integrieren oder abzudecken.</p><p> </p>"),
    ],
  },
  {
    path: "/damen/braut/",
    pageId: 357,
    title: "Braut",
    metaTitle: "Braut - Friseur & Kosmetik George",
    ids: ["529b74e", "164d7d6", "99a01a8", "3ad54cd", "67c2772", "2a14e01", "b09dc5c"],
    headingAnim: "fadeInDown",
    navigation: "both",
    slides: [
      "elementor/thumbs/AdobeStock_183082677-scaled-rwfsomdx13asri43h6aayuz4d6yxzz7vby7mz8nzn4.jpeg|A girl in a beige peignoir, with a wreath of flowers on her head|1080x1080",
      "elementor/thumbs/AdobeStock_94726509-scaled-rwfsoylthxriyfmchtkgd9w437aps1kdpmoy7u5ve8.jpeg|Beauty adult woman bride in white wedding dress in luxury place|1080x1080",
      "elementor/thumbs/AdobeStock_282194057-scaled-rwfsoq59sffy1xymv7wt8u0yqqgeurmsogtkwciey8.jpeg|Beautiful young bride with bouquet of flowers on light background|1080x1080",
    ],
    text: `<p><strong>Brautstyling – Für deinen schönsten Tag | Friseur &amp; Kosmetik George in Wiesbaden</strong></p><p>An deinem großen Tag soll alles perfekt sein – vor allem dein Look. Bei <strong>Friseur &amp; Kosmetik George in Wiesbaden</strong> bekommst du ein professionelles <strong>Brautstyling</strong>, das deine natürliche Schönheit unterstreicht und dich zum Strahlen bringt – mit viel Gefühl, Stil und höchster Präzision.</p><p><strong>Was gehört zum Brautstyling?</strong><br>Unser Brautstyling umfasst individuell abgestimmte <strong>Brautfrisuren</strong> und <strong>Braut-Make-up</strong> – von romantisch bis modern, von elegant bis natürlich. In einem persönlichen Probetermin finden wir gemeinsam den Look, der perfekt zu dir, deinem Kleid und deinem Hochzeitsthema passt.</p><p><strong>Warum professionelles Brautstyling?</strong><br>Am Hochzeitstag sollte alles stressfrei ablaufen. Wir sorgen dafür, dass Frisur und Make-up perfekt halten – den ganzen Tag und Abend. Mit hochwertigen Produkten, viel Erfahrung und einem Auge fürs Detail kreieren wir ein Styling, das dich nicht nur wunderschön aussehen lässt, sondern sich auch genauso anfühlt.</p>`,
    faqs: [
      Q("wann-sollte-ich-den-probetermin-machen", "1851", "Wann sollte ich den Probetermin machen?", "<p>Ideal ist 4–6 Wochen vor der Hochzeit – so bleibt genug Zeit für Feinabstimmungen.</p>", true),
      Q("kommen-sie-auch-zur-location", "1852", "Kommen Sie auch zur Location?", "<p>Ja, auf Wunsch bieten wir auch einen mobilen Brautservice im Raum Wiesbaden an.</p><ul><li> </li></ul>"),
      Q("ist-das-styling-auch-fr-brautmtter-oder-trauzeuginnen-buchbar", "1853", "Ist das Styling auch für Brautmütter oder Trauzeuginnen buchbar?", "<p>Natürlich! Wir stylen auf Wunsch auch Familie und Gäste.</p>"),
      Q("wird-auf-hauttyp-haarstruktur-eingegangen", "1854", "Wird auf Hauttyp &amp; Haarstruktur eingegangen?", "<p>Selbstverständlich – alles wird individuell abgestimmt.</p>"),
    ],
  },
  {
    path: "/damen/extentions/",
    pageId: 361,
    title: "Extension",
    metaTitle: "Extensions - Friseur & Kosmetik George",
    ids: ["1d861fc", "2ce9e02", "3c66211", "58d99ab", "7fd9465", "09f3891", "c4aab2a"],
    headingAnim: "fadeInDown",
    slides: [
      "2025/04/WhatsApp-Image-2025-03-15-at-20.35.36-3.jpeg|WhatsApp Image 2025-03-15 at 20.35.36 (3)|1200x1600",
      "2025/04/WhatsApp-Image-2025-03-15-at-20.35.36-2.jpeg|WhatsApp Image 2025-03-15 at 20.35.36 (2)|1200x1600",
      "2025/04/WhatsApp-Image-2025-03-15-at-20.35.36-1.jpeg|WhatsApp Image 2025-03-15 at 20.35.36 (1)|1200x1600",
      "2025/04/WhatsApp-Image-2025-03-15-at-20.35.35.jpeg|WhatsApp Image 2025-03-15 at 20.35.35|1200x1600",
      "2025/04/WhatsApp-Image-2025-03-15-at-20.35.35-3.jpeg|WhatsApp Image 2025-03-15 at 20.35.35 (3)|1200x1600",
      "2025/04/WhatsApp-Image-2025-03-15-at-20.35.35-2.jpeg|WhatsApp Image 2025-03-15 at 20.35.35 (2)|1280x1600",
      "2025/04/WhatsApp-Image-2025-03-15-at-20.35.35-1.jpeg|WhatsApp Image 2025-03-15 at 20.35.35 (1)|1200x1600",
      "2025/04/WhatsApp-Image-2025-03-15-at-20.35.36-7.jpeg|WhatsApp Image 2025-03-15 at 20.35.36 (7)|1200x1600",
      "2025/04/WhatsApp-Image-2025-03-15-at-20.35.36-6.jpeg|WhatsApp Image 2025-03-15 at 20.35.36 (6)|1200x1600",
      "2025/04/WhatsApp-Image-2025-03-15-at-20.35.36-5.jpeg|WhatsApp Image 2025-03-15 at 20.35.36 (5)|1200x1600",
      "2025/04/WhatsApp-Image-2025-03-15-at-20.35.36-4.jpeg|WhatsApp Image 2025-03-15 at 20.35.36 (4)|1200x1600",
    ],
    text: `<p><strong>Haarverlängerung – Mehr Länge, mehr Volumen, mehr Wow | Friseur &amp; Kosmetik George in Wiesbaden</strong></p><p>Träumen Sie von langem, vollem Haar mit natürlichem Schwung? Mit hochwertigen <strong>Extensions</strong> machen wir diesen Traum wahr! Bei <strong>Friseur &amp; Kosmetik George in Wiesbaden</strong> bieten wir professionelle Haarverlängerungen und -verdichtungen an – perfekt abgestimmt auf Ihre Haarstruktur, Farbe und Wünsche.</p><p><strong>Was sind Extensions?</strong><br>Extensions sind Echthaar- oder Kunsthaarsträhnen, die in Ihr eigenes Haar eingearbeitet werden, um Länge, Volumen oder gezielte Highlights zu erzielen. Wir arbeiten ausschließlich mit qualitativ hochwertigen Produkten und modernen Methoden, die besonders schonend für Ihr Eigenhaar sind.</p><p><strong>Warum Extensions vom Profi?</strong><br>Nur bei fachgerechter Anwendung sehen Extensions natürlich aus und fühlen sich angenehm an. Wir achten auf die richtige Technik, präzise Farbanpassung und den optimalen Halt – ganz ohne sichtbare Übergänge oder Beschädigung des Eigenhaars.</p>`,
    faqs: [
      Q("wie-lange-halten-extensions", "2061", "Wie lange halten Extensions?", "<p>Je nach Methode und Pflege zwischen 2 und 6 Monaten.</p>", true),
      Q("fhlt-man-die-extensions", "2062", "Fühlt man die Extensions?", "<p>Unsere Methoden sorgen für einen natürlichen Tragekomfort – kaum spürbar, aber sichtbar schön.</p><ul><li><ul><li><p> </p></li></ul></li></ul>"),
      Q("sind-die-extensions-wasch-und-stylbar", "2063", "Sind die Extensions wasch- und stylbar?", "<p>Ja, besonders Echthaar-Extensions lassen sich wie normales Haar waschen, föhnen, glätten oder locken.</p>"),
      Q("eignen-sich-extensions-auch-bei-feinem-haar", "2064", "Eignen sich Extensions auch bei feinem Haar?", "<p>Ja! Gerade bei feinem Haar sorgt eine gezielte Haarverdichtung für mehr Fülle und Selbstbewusstsein.</p><p> </p>"),
    ],
  },
  {
    path: "/damen/faerben/",
    pageId: 348,
    title: "Färben",
    metaTitle: "Färben - Friseur & Kosmetik George",
    ids: ["8dc7693", "c026dea", "118e153", "5837820", "753983c", "2620c7a", "430b445"],
    headingAnim: "fadeInDown",
    slides: [20, 17, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2].map(
      (n) => `2025/03/WhatsApp-Image-2025-03-11-at-21.58.34-${n}-1.jpeg|WhatsApp Image 2025-03-11 at 21.58.34 (${n})|${n === 9 ? "1440x1440" : "1200x1600"}`
    ),
    text: `<p><strong>Haarfärben – Ausdrucksstarke Farben &amp; perfekte Ergebnisse | Friseur &amp; Kosmetik George in Wiesbaden</strong></p><p>Ob sanfte Farbauffrischung, komplette Typveränderung oder dezente Akzente – eine professionelle Haarfarbe bringt Frische, Glanz und Persönlichkeit in Ihren Look. Bei <strong>Friseur &amp; Kosmetik George in Wiesbaden</strong> setzen wir auf hochwertige Produkte, individuelle Beratung und moderne Farbtechniken, um das perfekte Farbergebnis für Sie zu erzielen.</p><p><strong>Was bedeutet professionelles Haarfärben?</strong><br>Professionelles Haarfärben geht weit über das bloße Auftragen von Farbe hinaus. Wir analysieren Haarstruktur, Haartyp und Teint, um eine Farbe zu wählen, die harmonisch zu Ihrem Stil passt. Ob intensiv, natürlich, kühl oder warm – wir finden den Farbton, der Sie strahlen lässt.</p><p><strong>Warum ist Haarfärben beim Friseur wichtig?</strong><br>Im Gegensatz zu Hausfarben garantieren wir bei uns ein gleichmäßiges, glänzendes Ergebnis – ohne unerwünschte Farbstiche oder Haarschäden. Unsere schonenden Färbemethoden erhalten die Haarstruktur und sorgen für langanhaltende Farbbrillanz.</p>`,
    faqs: [
      Q("wie-lange-hlt-die-farbe", "7031", "Wie lange hält die Farbe?", "<p>Abhängig vom Farbton und Haartyp etwa 4–8 Wochen – mit der richtigen Pflege sogar länger.</p>", true),
      Q("werden-auch-graue-haare-abgedeckt", "7032", "Werden auch graue Haare abgedeckt?", "<p>Ja! Wir bieten 100 % Grauabdeckung mit natürlichen oder modischen Nuancen.</p>"),
      Q("bietet-ihr-auch-sanfte-oder-pflanzliche-farben-an", "7033", "Bietet ihr auch sanfte oder pflanzliche Farben an?", "<p>Ja, wir beraten Sie gern zu ammoniakfreien oder pflanzenbasierten Alternativen.</p>"),
      Q("kann-ich-meine-farbe-auffrischen-lassen", "7034", "Kann ich meine Farbe auffrischen lassen?", "<p>Natürlich – wir bieten Glossings, Tönungen und Farbauffrischungen an.</p><p> </p>"),
    ],
  },
  {
    path: "/damen/balayage-friseur/",
    pageId: 351,
    // Only page with a Yoast meta description. Its original canonical pointed to a foreign domain
    // (deinfriseursalon.de) – replaced by the page's own URL, see docs/SEO-MIGRATION.md.
    description: "Perfekte Balayage beim Friseur – natürliche Farbverläufe, sanfte Highlights & individuelle Looks. Vereinbaren Sie jetzt einen Termin für Ihr Traumhaar!",
    title: "Balayage",
    metaTitle: "Balayage - Friseur & Kosmetik George",
    ids: ["fc88f11", "4fb692d", "1f05d7e", "47fd21f", "c5ecce1", "42ed965", "7e02fa0"],
    headingAnim: "fadeInDown",
    slides: [
      "2025/04/WhatsApp-Image-2025-04-02-at-21.11.41-2-3.jpeg|WhatsApp Image 2025-04-02 at 21.11.41 (2)|1200x1600",
      "2025/03/IMG_E6607-scaled.jpg|IMG_E6607|1440x2560",
      "2025/04/WhatsApp-Image-2025-04-02-at-21.11.41-11.jpeg|WhatsApp Image 2025-04-02 at 21.11.41 (11)|1200x1600",
      "2025/04/WhatsApp-Image-2025-04-02-at-21.11.41-18.jpeg|WhatsApp Image 2025-04-02 at 21.11.41 (18)|1200x1600",
      "2025/03/IMG_6608-scaled.jpg|IMG_6608|1439x2560",
      "2025/03/IMG_6258-scaled.jpg|IMG_6258|1440x2560",
      "2025/03/IMG_6253-scaled.jpg|IMG_6253|1440x2560",
      "2025/03/YJQV5507.jpg|YJQV5507|1013x1800",
      "2025/03/XPXA1543.jpg|XPXA1543|1007x1790",
      "2025/03/IMG_1749-1-scaled.jpg|IMG_1749|1920x2560",
      "2025/03/SELR7260.jpg|SELR7260|1012x1800",
      "2025/03/KMXF4297.jpg|KMXF4297|1012x1800",
      "2025/03/IMG_E2279-scaled.jpg|IMG_E2279|1440x2560",
      "2025/03/IMG_E9663-scaled.jpg|IMG_E9663|1440x2560",
      "2025/03/IMG_E9532-scaled.jpg|IMG_E9532|1440x2560",
      "2025/03/IMG_1746-1-scaled.jpg|IMG_1746|1920x2560",
      "2025/04/WhatsApp-Image-2025-04-02-at-21.11.41-3-3.jpeg|WhatsApp Image 2025-04-02 at 21.11.41 (3)|1200x1600",
      "2025/03/IMG_E9176-scaled.jpg|IMG_E9176|1440x2560",
      "2025/03/IMG_E9175-scaled.jpg|IMG_E9175|1440x2560",
      "2025/03/IMG_E6636-scaled.jpg|IMG_E6636|1440x2560",
      "2025/03/IMG_6608-1-scaled.jpg|IMG_6608|1439x2560",
      "2025/03/IMG_6258-1-scaled.jpg|IMG_6258|1440x2560",
      "2025/04/WhatsApp-Image-2025-04-02-at-21.11.41-1-2.jpeg|WhatsApp Image 2025-04-02 at 21.11.41 (1)|1200x1600",
      "2025/03/IMG_E2279-1-scaled.jpg|IMG_E2279|1440x2560",
      "2025/03/IMG_1675-1-scaled.jpg|IMG_1675|1552x2560",
      "2025/03/IMG_1776-1-scaled.jpg|IMG_1776|1920x2560",
      "2025/03/IMG_1796-1-scaled.jpg|IMG_1796|1920x2560",
      "2025/03/c88ee8c2-1043-4fca-95f1-a7a4fa45dea5.jpg|c88ee8c2-1043-4fca-95f1-a7a4fa45dea5|768x1024",
      "2025/03/c703d41d-d45b-4bec-ad97-7b71c4b3312b.jpg|c703d41d-d45b-4bec-ad97-7b71c4b3312b|819x1024",
      "2025/03/cc128da7-ebdd-45bd-816b-c6a51db85939.jpg|cc128da7-ebdd-45bd-816b-c6a51db85939|768x1024",
      "2025/03/CVNN4889.jpg|CVNN4889|1440x1791",
      "2025/03/DFDU5880.jpg|DFDU5880|1440x1800",
      "2025/03/IMG_0786-scaled.jpg|IMG_0786|1920x2560",
      "2025/03/IMG_1231-1-scaled.jpg|IMG_1231|1920x2560",
      "2025/03/IMG_1088-scaled.jpg|IMG_1088|1920x2560",
      "2025/03/IMG_0872-scaled.jpg|IMG_0872|1920x2560",
      "2025/03/IMG_2411-1-scaled.jpg|IMG_2411|1920x2560",
      "2025/03/IMG_2421-1-scaled.jpg|IMG_2421|1920x2560",
      "2025/03/IMG_2505-1-scaled.jpg|IMG_2505|1920x2560",
      "2025/03/IMG_2511-1-scaled.jpg|IMG_2511|1920x2560",
      "2025/03/IMG_2522-1-scaled.jpg|IMG_2522|1920x2560",
      "2025/03/IMG_6035-1-scaled.jpg|IMG_6035|1440x2560",
      "2025/03/IMG_6253-1-scaled.jpg|IMG_6253|1440x2560",
      "2025/04/WhatsApp-Image-2025-04-02-at-21.11.41-1.jpeg|WhatsApp Image 2025-04-02 at 21.11.41 (1)|1200x1600",
      "2025/03/IMG_E6607-1-scaled.jpg|IMG_E6607|1440x2560",
      "2025/03/690fdf07-d70c-4d2f-bec3-30b60e2f49e4.jpg|690fdf07-d70c-4d2f-bec3-30b60e2f49e4|621x1024",
      "2025/03/1923e0ea-5d06-4302-b5e2-91c18c6fe692.jpg|1923e0ea-5d06-4302-b5e2-91c18c6fe692|768x1024",
      "2025/03/abdf940a-d074-4d36-a1e4-3235e35f8071.jpg|abdf940a-d074-4d36-a1e4-3235e35f8071|768x1024",
      "2025/03/AXEW5507.jpg|AXEW5507|1440x1791",
      "2025/03/IMG_2160-1-scaled.jpg|IMG_2160|1920x2560",
      ...["5", "4", "3", "2", "", "17", "16", "15", "19", "6", "7", "8", "9", "10", "12", "13", "14"].map((n) => {
        const narrow = n === "15" || n === "8" || n === "9";
        return `2025/04/WhatsApp-Image-2025-04-02-at-21.11.41${n ? "-" + n : ""}.jpeg|WhatsApp Image 2025-04-02 at 21.11.41${n ? ` (${n})` : ""}|${narrow ? "900x1600" : "1200x1600"}`;
      }),
    ],
    text: `<p><strong>Balayage – Natürlich schöne Farbverläufe | Friseur &amp; Kosmetik George in Wiesbaden</strong></p><p>Sanfte Übergänge, lebendige Tiefe und ein Look wie von der Sonne geküsst – das ist <strong>Balayage</strong>. Bei <strong>Friseur &amp; Kosmetik George in Wiesbaden</strong> zaubern wir mit dieser modernen Färbetechnik natürliche Highlights ins Haar, die individuell auf deinen Typ abgestimmt sind – für einen frischen, strahlenden Look, der lange begeistert.</p><p><strong>Was ist Balayage?</strong><br>Balayage ist eine Freihand-Färbetechnik, bei der die Farbe sanft in die Längen eingearbeitet wird. Dadurch entstehen weiche, fließende Übergänge ohne harte Kontraste – ganz im Gegensatz zu klassischen Strähnen. Das Ergebnis: Ein natürlicher, multidimensionaler Look mit wenig sichtbarem Ansatz.</p><p><strong>Warum Balayage vom Profi?</strong><br>Nur ein erfahrener Friseur beherrscht die perfekte Platzierung und Technik, damit der Farbverlauf harmonisch wirkt. Bei uns bekommst du ein maßgeschneidertes Balayage-Ergebnis, das zu deinem Haarton, Haarschnitt und Stil passt – inklusive individueller Beratung und Pflegeempfehlung.</p>`,
    faqs: [
      Q("wie-lange-hlt-balayage", "1321", "Wie lange hält Balayage?", "<p>Durch den weichen Übergang bleibt Balayage bis zu 4 Monate schön – ganz ohne sichtbaren Ansatz.</p>", true),
      Q("ist-balayage-fr-jedes-haar-geeignet", "1322", "Ist Balayage für jedes Haar geeignet?", "<p>Ja! Ob blond, braun oder rötlich – wir passen Technik und Farbton deinem Haar an.</p>"),
      Q("wie-pflege-ich-mein-balayage-richtig", "1323", "Wie pflege ich mein Balayage richtig?", "<p>Wir empfehlen spezielle Pflegeprodukte für gefärbtes Haar – gerne beraten wir dich dazu im Salon.</p>"),
      Q("kann-man-balayage-auch-auffrischen-lassen", "1324", "Kann man Balayage auch auffrischen lassen?", "<p>Ja, mit einem Glossing oder leichten Highlights bringen wir den Look jederzeit wieder zum Strahlen.</p>"),
    ],
  },
  {
    path: "/damen/haar-protin/",
    pageId: 363,
    title: "Haar Proteine",
    metaTitle: "Haar Protein - Friseur & Kosmetik George",
    ids: ["0213fab", "7531371", "dce5928", "c6aa471", "bdda7c4", "c95d637", "8b59b2d"],
    headingAnim: "fadeInDown",
    slides: [
      "2025/04/WhatsApp-Image-2025-03-15-at-20.41.24.jpeg|WhatsApp Image 2025-03-15 at 20.41.24|1280x1600",
      "2025/04/WhatsApp-Image-2025-03-15-at-20.41.24-2.jpeg|WhatsApp Image 2025-03-15 at 20.41.24 (2)|1200x1600",
      "2025/04/WhatsApp-Image-2025-03-15-at-20.41.24-1.jpeg|WhatsApp Image 2025-03-15 at 20.41.24 (1)|1200x1600",
      "2025/04/WhatsApp-Image-2025-03-15-at-20.41.23.jpeg|WhatsApp Image 2025-03-15 at 20.41.23|1200x1600",
    ],
    text: `<p><strong>Haar-Proteinbehandlung – Für kräftiges &amp; gesundes Haar | Friseur &amp; Kosmetik George in Wiesbaden</strong></p><p>Geschädigtes, sprödes oder kraftloses Haar braucht gezielte Pflege – und genau hier kommt unsere <strong>Haar-Proteinbehandlung</strong> ins Spiel. Bei <strong>Friseur &amp; Kosmetik George in Wiesbaden</strong> bieten wir professionelle Proteinbehandlungen an, die das Haar von innen stärken, reparieren und ihm seine natürliche Schönheit zurückgeben.</p><p><strong>Was ist eine Haar-Proteinbehandlung?</strong><br>Proteine sind die Bausteine unseres Haares. Durch häufiges Färben, Hitze, Umweltbelastungen oder chemische Behandlungen verliert das Haar wichtige Proteine und wird dadurch brüchig und stumpf. Eine gezielte Proteinbehandlung führt dem Haar diese essenziellen Bausteine wieder zu, baut es auf und verleiht ihm neue Kraft und Glanz.</p><p><strong>Warum ist eine Proteinbehandlung wichtig?</strong><br>Ein ausgewogenes Protein-Feuchtigkeits-Verhältnis ist entscheidend für gesundes Haar. Ohne ausreichend Proteine verliert das Haar an Struktur und Elastizität. Unsere professionelle Behandlung sorgt dafür, dass dein Haar wieder gestärkt, geschmeidig und widerstandsfähig wird – spürbar und sichtbar ab der ersten Anwendung.</p>`,
    faqs: [
      Q("fr-wen-ist-die-behandlung-geeignet", "1461", "Für wen ist die Behandlung geeignet?", "<p>Für alle Haartypen – besonders bei geschädigtem, gefärbtem oder strukturgeschwächtem Haar.</p>", true),
      Q("wie-oft-sollte-man-sie-anwenden", "1462", "Wie oft sollte man sie anwenden?", "<p>Je nach Haarschädigung alle 4–6 Wochen – wir beraten dich individuell.</p>"),
      Q("kann-ich-sie-mit-anderen-behandlungen-kombinieren", "1463", "Kann ich sie mit anderen Behandlungen kombinieren?", "<p>Ja, z. B. nach dem Färben, Glätten oder als Vorbereitung auf eine chemische Behandlung.</p>"),
      Q("ist-die-behandlung-auch-fr-feines-haar-geeignet", "1464", "Ist die Behandlung auch für feines Haar geeignet?", "<p>Absolut – wir wählen die passende Pflegeformel für deine Haarstruktur.</p><p> </p>"),
    ],
  },
  {
    path: "/damen/hochstecken/",
    pageId: 355,
    title: "Hochstecken",
    metaTitle: "Hochstecken - Friseur & Kosmetik George",
    ids: ["a097882", "fa9afa5", "f7e300d", "3a29a87", "12ee069", "59a9239", "44fa0db"],
    headingAnim: "fadeInDown",
    slides: [
      "11-rwfsryp9bvvi1l9bymaju0m4eihxd8highpsenplio|11", "10-rwfsryp9bvvi1l9bymaju0m4eihxd8highpsenplio|10", "2-rwfss1irwdzd0f58i5ifjhwi6o410bspgvo8uhlf00|2",
      "3-rwfss1irwdzd0f58i5ifjhwi6o410bspgvo8uhlf00|3", "rwfss5a4nq4iauzrw74xtgyck7lhv47mtea6rlfub4|", "14-e1743786699279-rwfss0kxpjy2ot6lnn3sz051la8nsmoz4r0rd7mt68|14",
      "15-rwfss0kxpjy2ot6lnn3sz051la8nsmoz4r0rd7mt68|15", "1-rwfsrxrf51u7pzap43vx9iunt4mk5jds4d2axdqzow|1", "4-rwfss2gm380nc13vcnx23znys1ze80wft0bqbrk0ts|4",
      "5-e1743786746500-rwfss2gm380nc13vcnx23znys1ze80wft0bqbrk0ts|5", "6-rwfss3ega21xnn2i76boohffdfurfq0654z7t1imnk|6", "7-rwfss3ega21xnn2i76boohffdfurfq0654z7t1imnk|7",
      "8-rwfss4cagw37z9151oqb8z6vytq4nf3wh9mpabh8hc|8", "9-e1743786767962-rwfss4cagw37z9151oqb8z6vytq4nf3wh9mpabh8hc|9", "16-e1743786718389-rwfss1irwdzd0f58i5ifjhwi6o410bspgvo8uhlf00|16",
      "12-rwfsrzn3ipwsd77yt4p6eidkzwdakxl8smd9vxo7cg|12", "13-rwfsrzn3ipwsd77yt4p6eidkzwdakxl8smd9vxo7cg|13",
    ].map((s) => {
      const [suffix, n] = s.split("|");
      return `elementor/thumbs/WhatsApp-Image-2025-03-11-at-21.36.32-${suffix}.jpeg|WhatsApp Image 2025-03-11 at 21.36.32${n ? ` (${n})` : ""}|1080x1080`;
    }),
    text: `<p><strong>Hochsteckfrisuren – Stilvoll &amp; Elegant | Friseur &amp; Kosmetik George in Wiesbaden</strong></p><p>Ob für Hochzeiten, besondere Anlässe oder elegante Events – eine perfekt gestylte Hochsteckfrisur verleiht jedem Auftritt das gewisse Etwas. Bei Friseur &amp; Kosmetik George in Wiesbaden kreieren wir individuelle Hochsteckfrisuren, die Ihre Persönlichkeit unterstreichen und den ganzen Tag lang halten.</p><p>Was ist eine Hochsteckfrisur?<br>Bei einer Hochsteckfrisur wird das Haar elegant nach oben frisiert und kunstvoll fixiert – klassisch, modern oder romantisch-verspielt, ganz nach Wunsch. Sie eignet sich besonders für festliche Anlässe wie Hochzeiten, Bälle, Galas oder Fotoshootings.</p><p>Warum eine Hochsteckfrisur vom Profi?<br>Nur ein erfahrener Friseur sorgt dafür, dass die Frisur nicht nur wunderschön aussieht, sondern auch den ganzen Tag (und die Nacht) hält – ohne Verrutschen. Wir verwenden hochwertige Stylingprodukte und arbeiten mit viel Liebe zum Detail.</p>`,
    faqs: [
      Q("wie-lange-dauert-das-hochstecken", "7231", "Wie lange dauert das Hochstecken?", "<p>Je nach Stil und Haarlänge zwischen 30 und 90 Minuten.</p>", true),
      Q("kann-ich-vorher-einen-probetermin-machen", "7232", "Kann ich vorher einen Probetermin machen?", "<p>Ja, besonders bei Brautfrisuren empfehlen wir ein Probestyling.</p>"),
      Q("werden-accessoires-zb-blumen-haarschmuck-integriert", "7233", "Werden Accessoires (z. B. Blumen, Haarschmuck) integriert?", "<p>Natürlich! Wir integrieren gerne Ihre gewünschten Accessoires stilvoll in die Frisur.</p>"),
      Q("gibt-es-kombiangebote-mit-make-up", "7234", "Gibt es Kombiangebote mit Make-up?", "<p>Ja! Bei <strong>Friseur &amp; Kosmetik George in Wiesbaden</strong> bieten wir auch komplette Stylingpakete inklusive Make-up.</p><p> </p>"),
    ],
  },
  {
    path: "/damen/damen-schnitt/",
    pageId: 209,
    title: "Schnitt",
    metaTitle: "Schnitt - Friseur & Kosmetik George",
    ids: ["41a939f", "ed9ea3a", "a28097d", "8fc831f", "d576d47", "2282e51", "9a73c0c"],
    headingAnim: "fadeInDown",
    slides: [
      "03-15-at-20.36.20-1|20.36.20 (1)", "03-15-at-20.36.19-19|20.36.19 (19)", "03-15-at-20.36.19-18|20.36.19 (18)", "03-15-at-20.36.19-17|20.36.19 (17)",
      "04-02-at-21.33.20-1-1|21.33.20 (1)|900", "04-02-at-21.33.20-2-1|21.33.20 (2)|900", "04-02-at-21.33.20|21.33.20|900",
      "03-15-at-20.36.19-1|20.36.19 (1)", "03-15-at-20.36.19-3|20.36.19 (3)", "03-15-at-20.36.19-4|20.36.19 (4)", "03-15-at-20.36.19-5|20.36.19 (5)",
      "04-02-at-21.33.20-6|21.33.20 (6)", "04-02-at-21.33.20-7|21.33.20 (7)", "04-02-at-21.33.20-4|21.33.20 (4)", "04-02-at-21.33.20-5|21.33.20 (5)",
      "03-15-at-20.36.19-6|20.36.19 (6)", "03-15-at-20.36.19-7|20.36.19 (7)", "03-15-at-20.36.19-9|20.36.19 (9)", "03-15-at-20.36.19-10|20.36.19 (10)",
      "03-15-at-20.36.19-11|20.36.19 (11)", "03-15-at-20.36.19-2|20.36.19 (2)", "04-02-at-21.33.20-1|21.33.20 (1)", "04-02-at-21.33.20-3|21.33.20 (3)|900",
      "04-02-at-21.33.20-2|21.33.20 (2)",
    ].map((s) => {
      const [file, alt, w] = s.split("|");
      const date = file.startsWith("03-15") ? "2025-03-15" : "2025-04-02";
      return `2025/04/WhatsApp-Image-2025-${file}.jpeg|WhatsApp Image ${date} at ${alt}|${w || "1200"}x1600`;
    }),
    text: `<p><strong>Damenhaarschnitt – Perfekter Schnitt für jeden Stil | Friseur George Wiesbaden</strong></p><p>Ein guter Haarschnitt ist weit mehr als nur eine neue Frisur – er ist Ausdruck Ihrer Persönlichkeit. Bei <strong>Friseur George</strong> – Ihrem professionellen <strong>Friseur in Wiesbaden</strong> – legen wir besonderen Wert auf individuelle Beratung, präzise Schnitte und ein Ergebnis, das perfekt zu Ihnen passt. Egal ob klassisch, modern, frech oder elegant – wir finden den Stil, der Ihre Ausstrahlung unterstreicht.</p><p><strong>Was ist ein professioneller Damenhaarschnitt?</strong></p><p><br>Ein Damenhaarschnitt beginnt bei uns immer mit einer persönlichen Beratung. Dabei berücksichtigen wir Ihre Haarstruktur, Gesichtsform, Ihren Lebensstil und Ihre Wünsche. So entsteht ein Look, der nicht nur gut aussieht, sondern sich auch gut anfühlt und leicht zu pflegen ist.</p><p><strong>Warum ist ein guter Haarschnitt wichtig?</strong><br>Ein professioneller Schnitt sorgt für gesunde Spitzen, mehr Volumen und eine leichte Handhabung im Alltag. Er kann Ihr gesamtes Erscheinungsbild positiv verändern und Ihr Selbstbewusstsein stärken. Regelmäßige Haarschnitte helfen außerdem, Spliss zu vermeiden und das Haar gepflegt aussehen zu lassen.</p>`,
    faqs: [
      Q("wie-oft-sollte-man-die-haare-schneiden", "1611", "Wie oft sollte man die Haare schneiden?", "<p>Je nach Haarlänge und Struktur alle 6 bis 10 Wochen.</p>", true),
      Q("wird-der-haarschnitt-individuell-angepasst", "1612", "Wird der Haarschnitt individuell angepasst?", "<p>Ja, bei uns bekommen Sie keine Standardfrisur – sondern einen auf Sie abgestimmten Look.</p>"),
      Q("kann-ich-auch-eine-typvernderung-bekommen", "1613", "Kann ich auch eine Typveränderung bekommen?", "<p>Natürlich! Wir beraten Sie gern zu neuen Trends, Farben und Stylings.</p>"),
      Q("ist-eine-haarwsche-und-pflege-inklusive", "1614", "Ist eine Haarwäsche und Pflege inklusive?", "<p>Auf Wunsch verwöhnen wir Ihr Haar mit hochwertigen Pflegeprodukten – für Glanz und Geschmeidigkeit.</p>"),
    ],
  },
  {
    path: "/damen/make-up/",
    pageId: 359,
    title: "Make-up",
    metaTitle: "Make-up - Friseur & Kosmetik George",
    ids: ["7654b47", "e9912ae", "bd80647", "86113ba", "a908b8d", "a127704", "94e0646"],
    headingAnim: "fadeInDown",
    slides: [
      "elementor/thumbs/WhatsApp-Image-2025-04-02-at-22.24.01-1-1-rwfssru97qze1i308gvzhb9etgiazup6whxua8ie5s.jpeg|WhatsApp Image 2025-04-02 at 22.24.01 (1)|1080x1080",
      "elementor/thumbs/WhatsApp-Image-2025-04-02-at-22.24.02-5-rwfssss3el0od41n2zam1t0veudo7jsx8mlbrigzzk.jpeg|WhatsApp Image 2025-04-02 at 22.24.02 (5)|1080x1080",
      "elementor/thumbs/WhatsApp-Image-2025-04-02-at-22.24.02-4-rwfssss3el0od41n2zam1t0veudo7jsx8mlbrigzzk.jpeg|WhatsApp Image 2025-04-02 at 22.24.02 (4)|1080x1080",
      "elementor/thumbs/AdobeStock_120423799-scaled-rwfsnx09wkc2214yldbdljdobsg185f48glj0rpmb4.jpeg|Makeup artist preparing bride before her wedding|1080x1080",
      "elementor/thumbs/WhatsApp-Image-2025-04-02-at-22.24.02-3-rwfssru97qze1i308gvzhb9etgiazup6whxua8ie5s.jpeg|WhatsApp Image 2025-04-02 at 22.24.02 (3)|1080x1080",
    ],
    text: `<p><strong>Make-up – Schönheit, die strahlt | Friseur &amp; Kosmetik George in Wiesbaden</strong></p><p>Ob für besondere Anlässe oder den perfekten Alltags-Look – professionelles Make-up unterstreicht Ihre natürliche Schönheit und verleiht Ihnen Selbstbewusstsein und Ausstrahlung. Bei <strong>Friseur &amp; Kosmetik George in Wiesbaden</strong> sorgen wir mit viel Feingefühl, hochwertigen Produkten und langjähriger Erfahrung dafür, dass Sie sich rundum wohl und wunderschön fühlen.</p><p><strong>Was ist professionelles Make-up?</strong><br>Professionelles Make-up ist mehr als nur Farbe im Gesicht – es ist individuell abgestimmte Kunst. Wir achten auf Ihren Hauttyp, Ihre Gesichtszüge und den Anlass, um ein harmonisches und typgerechtes Ergebnis zu erzielen – von dezent-natürlich bis glamourös.</p><p><strong>Warum ist professionelles Make-up wichtig?</strong><br>Ein geschultes Auge, saubere Techniken und hochwertige Produkte machen den Unterschied. Besonders bei Events wie Hochzeiten, Fotoshootings oder besonderen Feierlichkeiten sorgt professionelles Make-up für ein langanhaltendes, makelloses Ergebnis – das auch auf Fotos perfekt wirkt.</p>`,
    faqs: [
      Q("wie-lange-hlt-das-make-up", "1561", "Wie lange hält das Make-up?", "<p>Je nach Hauttyp und Anlass bis zu 12 Stunden oder länger – mit Fixierung sogar noch mehr.</p>", true),
      Q("wird-auf-meinen-hauttyp-eingegangen", "1562", "Wird auf meinen Hauttyp eingegangen?", "<p>Ja! Wir verwenden speziell abgestimmte Produkte für empfindliche, trockene oder fettige Haut.</p>"),
      Q("kann-ich-auch-eine-typvernderung-bekommen", "1563", "Kann ich auch eine Typveränderung bekommen?", "<p>Natürlich! Wir beraten Sie gern zu neuen Trends, Farben und Stylings.</p>"),
      Q("ist-eine-haarwsche-und-pflege-inklusive", "1564", "Ist eine Haarwäsche und Pflege inklusive?", "<p>Auf Wunsch verwöhnen wir Ihr Haar mit hochwertigen Pflegeprodukten – für Glanz und Geschmeidigkeit.</p>"),
    ],
  },
  {
    path: "/produkte/",
    pageId: 1489,
    title: "Produkte",
    metaTitle: "Produkte - Friseur & Kosmetik George",
    ids: ["4dc19bb", "9738e1f", "0dab5b8", "d166c39", "2e56e93", "9606513", "4c19935"],
    headingAnim: "fadeInDown",
    slides: ["07.57.54", "07.57.11", "08.02.48", "08.02.25", "08.02.11", "08.01.56", "08.01.47", "08.01.40", "08.01.13", "08.00.51"].map(
      (t) => `2025/04/WhatsApp-Image-2025-04-04-at-${t}.jpeg|WhatsApp Image 2025-04-04 at ${t}|1080x1080`
    ),
    text: `<p><strong>Unsere Pflege – Deine Schönheit mit GLYNT</strong></p><p>In meinem Salon arbeiten wir ausschließlich mit hochwertigen Produkten von GLYNT. Diese stehen für exzellente Haarpflege, präzise Farbtechnologien und spürbare Ergebnisse – abgestimmt auf die individuellen Bedürfnisse jedes Haartyps.</p><p><strong>SHADOWS Colour System</strong><br>Für jeden Typ die passende Haarfarbe. Ob dauerhafte Colorationen oder sanfte Farbveredelungen – die SHADOWS-Serie sorgt für intensive Farbergebnisse, strahlenden Glanz und langanhaltende Farbfrische.</p><p><strong>TRIJUVEN Therapie</strong><br>Eine tiefenwirksame Pflegekur zur Haarverjüngung. Ideal für strukturgeschädigtes Haar – stärkt, regeneriert und verleiht neue Elastizität sowie seidige Geschmeidigkeit.</p><p><strong>ICE BLOND Serie</strong><br>Perfekt für kühles Blond. Die ICE BLOND Serie neutralisiert Gelbstiche und pflegt aufgehelltes Haar mit feuchtigkeitsspendenden Inhaltsstoffen.</p><p><strong>DERMA Serie</strong><br>Spezielle Pflege für empfindliche oder irritierte Kopfhaut. Die Produkte beruhigen, spenden Feuchtigkeit und schaffen die optimale Grundlage für gesundes Haarwachstum.</p><p><strong>HYDRO Pflege</strong><br>Feuchtigkeitspflege für trockenes oder sprödes Haar. Mit Aloe Vera und ausgewählten Wirkstoffen versorgt sie das Haar intensiv, ohne zu beschweren.</p><p><strong>NUTRI Serie</strong><br>Ideal für trockenes, kraftloses oder strapaziertes Haar. Die pflegende Formel mit wertvollen Ölen sorgt für Glanz, Geschmeidigkeit und bessere Kämmbarkeit.</p><p><strong>REVITAL Serie</strong><br>Farbschutz und Pflege in einem. Diese Serie schützt coloriertes Haar vor dem Verblassen, bewahrt die Leuchtkraft und regeneriert die Haarstruktur.</p><p><strong>VOLUME Linie</strong><br>Leichte Pflege für feines oder kraftloses Haar. Sie sorgt für spürbar mehr Volumen, Fülle und Frische – ohne das Haar zu beschweren.</p><p><strong>SUN Serie</strong><br>Schutz und Regeneration für sommergestresstes Haar. Diese Serie schützt vor UV-Strahlung, spendet Feuchtigkeit und pflegt sonnenbeanspruchtes Haar intensiv.</p>`,
    faqs: [
      Q("1warum-verwendet-ihr-produkte-von-glynt-im-salon", "7971", "1.Warum verwendet ihr Produkte von GLYNT im Salon?", "<p>GLYNT steht für professionelle Haarpflege auf höchstem Niveau. Die Produkte sind besonders hautverträglich, wirksam und basieren auf hochwertigen Inhaltsstoffen. Sie bieten individuelle Lösungen für jedes Haarbedürfnis – vom Farbschutz bis zur Feuchtigkeitspflege.</p>", true),
      Q("2-kann-ich-die-glynt-produkte-auch-zu-hause-verwenden", "7972", "2. Kann ich die GLYNT-Produkte auch zu Hause verwenden?", "<ul><li><p>Ja, alle Produkte sind auch für die Anwendung zu Hause geeignet. Wir beraten dich gerne, welche Pflege am besten zu deinem Haartyp passt und wie du sie richtig anwendest.</p><p> </p></li></ul>"),
      Q("3-sind-die-produkte-von-glynt-vegan-oder-tierversuchsfrei", "7973", "3. Sind die Produkte von GLYNT vegan oder tierversuchsfrei?", "<p>GLYNT verzichtet auf Tierversuche und viele der Produkte sind vegan. Gerne informieren wir dich individuell über bestimmte Serien und Inhaltsstoffe.</p><p> </p>"),
      Q("4-gibt-es-spezielle-produkte-fr-coloriertes-oder-blondiertes-haar", "7974", "4. Gibt es spezielle Produkte für coloriertes oder blondiertes Haar?", "<p>Ja. Für coloriertes Haar empfehlen wir die REVITAL-Serie, für blondiertes Haar ist die ICE BLOND-Serie ideal. Beide pflegen intensiv und erhalten die Farbbrillanz.</p><p> </p><p> </p>"),
      Q("5-ich-habe-eine-empfindliche-kopfhaut-welche-produkte-helfen", "7975", "5. Ich habe eine empfindliche Kopfhaut – welche Produkte helfen?", "<p>Die DERMA-Serie von GLYNT ist speziell für sensible oder trockene Kopfhaut entwickelt worden. Sie beruhigt, spendet Feuchtigkeit und unterstützt die Regeneration.</p><p> </p>"),
      Q("6-welche-pflege-ist-gut-fr-trockenes-oder-strapaziertes-haar", "7976", "6. Welche Pflege ist gut für trockenes oder strapaziertes Haar?", "<p>Für trockenes Haar eignet sich die NUTRI-Serie ideal. Sie enthält pflegende Öle, die dem Haar Geschmeidigkeit, Glanz und Feuchtigkeit zurückgeben.</p><p> </p><p> </p>"),
      Q("7-wie-oft-sollte-ich-die-trijuven-therapie-anwenden", "7977", "7. Wie oft sollte ich die TRIJUVEN-Therapie anwenden?", "<p>Die TRIJUVEN-Therapie empfehlen wir je nach Haarzustand ca. alle 4 bis 6 Wochen. Für ein intensives Ergebnis kann sie regelmäßig in deinen Friseurbesuch integriert werden.</p>"),
      Q("8-was-kann-ich-tun-wenn-mein-haar-zu-wenig-volumen-hat", "7978", "8. Was kann ich tun, wenn mein Haar zu wenig Volumen hat?", "<p>Die VOLUME-Serie ist perfekt für feines oder kraftloses Haar. Sie gibt mehr Stand, Leichtigkeit und Fülle – ohne das Haar zu beschweren.</p>"),
      Q("9-habt-ihr-auch-produkte-fr-den-sommer-oder-fr-sonnengestresstes-haar", "7979", "9. Habt ihr auch Produkte für den Sommer oder für sonnengestresstes Haar?", "<p>Ja, mit der SUN-Serie schützt du dein Haar vor UV-Strahlen und pflegst es nach dem Sonnenbaden. Ideal für Urlaub oder heiße Tage.</p>"),
      Q("10-wo-kann-ich-die-produkte-kaufen", "79710", "10. Wo kann ich die Produkte kaufen?", "<p>Alle GLYNT-Produkte kannst du direkt bei uns im Salon kaufen. Wir beraten dich gerne individuell und finden die passende Pflege für dich.</p>"),
    ],
  },
  {
    path: "/herren/faerben/",
    pageId: 908,
    title: "Haarfarbe für Herren",
    metaTitle: "Färben - Friseur & Kosmetik George",
    ids: ["b29406a", "664b438", "2563f93", "ee45a06", "0abc50f", "85fde2e", "524f033"],
    headingAnim: "fadeInDown",
    slides: [
      "2025/04/7585ca57-8ba1-4262-8b59-7e454eba9eee.jpg|7585ca57-8ba1-4262-8b59-7e454eba9eee|512x512",
      "2025/04/side-view-man-hair-salon-scaled.jpg|side-view-man-hair-salon|1707x2560",
      "2025/04/young-man-posing-portrait-close-up-scaled.jpg|young man posing portrait close-up|1707x2560",
      "2025/04/bd3b8396-65ce-4571-88b7-f8666054da14.jpg|bd3b8396-65ce-4571-88b7-f8666054da14|512x512",
      "2025/04/IMG_8538.jpg|IMG_8538|1057x1600",
      "2025/04/PHOTO-2025-04-08-14-05-57-1.jpg|PHOTO-2025-04-08-14-05-57|1025x1028",
    ],
    text: `<p><strong>Haarfarbe für Herren – Stilvolle Veränderung mit natürlichem Ergebnis | Friseur &amp; Kosmetik George in Wiesbaden</strong></p><p>Ob dezente Grauabdeckung, modischer Farbwechsel oder frischer Look – eine professionelle <strong>Haarfarbe für Herren</strong> verleiht Ihrem Stil neuen Ausdruck. Bei <strong>Friseur &amp; Kosmetik George in Wiesbaden</strong> bieten wir maßgeschneiderte Farbservices für Männer, die Wert auf gepflegtes Aussehen und Natürlichkeit legen.</p><p><strong>Warum Haarfarbe für Herren?</strong><br>Haarfarbe ist längst nicht mehr nur Frauensache. Männer entscheiden sich immer häufiger für eine Farbauffrischung oder dezente Tönung, um jünger, frischer oder einfach individueller auszusehen. Besonders beliebt: <strong>natürliche Grauabdeckung</strong>, bei der das Ergebnis weich und unauffällig wirkt.</p><p><strong>Was bieten wir an?</strong><br>Wir arbeiten mit hochwertigen Produkten und beraten dich typgerecht – ob kühles Braun, markantes Schwarz, trendiges Silber oder kreative Akzente. Auch komplette Farbveränderungen oder moderne Techniken wie Balayage für Männer sind möglich.</p>`,
    faqs: [
      Q("wie-lange-hlt-die-farbe", "8631", "Wie lange hält die Farbe?", "<p>Je nach Produkt zwischen 4–8 Wochen. Tönungen waschen sich nach und nach aus, permanente Farben halten länger.</p>", true),
      Q("wirkt-das-ergebnis-natrlich", "8632", "Wirkt das Ergebnis natürlich?", "<p>Ja! Unser Ziel ist ein frischer, gepflegter Look – nicht künstlich, sondern typgerecht.</p>"),
      Q("wie-viel-zeit-muss-ich-einplanen", "8633", "Wie viel Zeit muss ich einplanen?", "<p>Eine Färbung dauert in der Regel 30–60 Minuten – je nach Technik und Haarlänge.</p>"),
      Q("kann-ich-die-farbe-mit-einem-haarschnitt-kombinieren", "8634", "Kann ich die Farbe mit einem Haarschnitt kombinieren?", "<p>Natürlich – wir bieten Farb- und Schnittpakete für ein rundum gepflegtes Ergebnis.</p>"),
    ],
  },
  {
    path: "/herren/dauerwelle/",
    pageId: 910,
    title: "Dauerwelle",
    metaTitle: "Dauerwelle - Friseur & Kosmetik George",
    ids: ["3da1f8f", "76f5449", "7910b73", "426fa1f", "d574d50", "e15afa7", "322612b"],
    headingAnim: "fadeInDown",
    slides: [
      "2025/04/portrait-young-man-looking-camera-scaled.jpg|portrait-young-man-looking-camera|1878x2560",
      "2025/07/2.jpg|2|1200x1600",
      "2025/07/1.jpg|1|1200x1600",
      "2025/07/3.jpg|3|1200x1600",
    ],
    text: `<p><strong>Herren-Dauerwelle – Volumen, Bewegung &amp; moderner Style | Friseur &amp; Kosmetik George in Wiesbaden</strong></p><p>Locken liegen im Trend – auch bei Männern! Mit einer professionellen <strong>Dauerwelle für Herren</strong> verleihen wir Ihrem Haar mehr Struktur, Volumen und eine lässige Dynamik, die Ihren Look auf ein neues Level hebt. Bei <strong>Friseur &amp; Kosmetik George in Wiesbaden</strong> setzen wir auf moderne Techniken und schonende Produkte für natürliche und stylische Ergebnisse.</p><p><strong>Was ist eine Herren-Dauerwelle?</strong><br>Die Dauerwelle ist eine chemische Umformung des Haares, bei der glattes Haar in lockiges oder welliges Haar verwandelt wird. Der Look reicht von weichen Wellen bis zu definierten Locken – ganz nach Wunsch und Haartyp. Besonders beliebt ist die Kombination aus <strong>Fade Cut und Locken-Top</strong>, die Frische und Individualität ausstrahlt.</p><p><strong>Warum eine Dauerwelle vom Profi?</strong><br>Nur beim Profi bekommst du ein natürliches Ergebnis, das zu deinem Typ passt – ohne das Haar unnötig zu belasten. Wir analysieren deine Haarstruktur, beraten dich ausführlich und sorgen mit der richtigen Technik für gesunde, langanhaltende Locken.</p>`,
    faqs: [
      Q("wie-lange-hlt-eine-dauerwelle", "5251", "Wie lange hält eine Dauerwelle?", "<p>In der Regel 6–8 Wochen – je nach Haarstruktur und Pflege.</p>", true),
      Q("ist-die-dauerwelle-schdlich-fr-das-haar", "5252", "Ist die Dauerwelle schädlich für das Haar?", "<p>Nein – wir arbeiten mit modernen, pflegenden Produkten, die das Haar schonen.</p>"),
      Q("brauche-ich-eine-bestimmte-haarlnge", "5253", "Brauche ich eine bestimmte Haarlänge?", "<p>Ja, mindestens 5–7 cm sind ideal – wir beraten dich gern individuell.</p>"),
      Q("kann-ich-die-locken-auch-stylen", "5254", "Kann ich die Locken auch stylen?", "<p>Auf jeden Fall! Wir zeigen dir passende Produkte und Techniken für dein neues Styling.</p><p> </p>"),
    ],
  },
  {
    path: "/herren/schnitt/",
    pageId: 906,
    title: "Herren Schnitt",
    metaTitle: "Schnitt - Friseur & Kosmetik George",
    ids: ["4dc19bb", "9738e1f", "0dab5b8", "d166c39", "2e56e93", "9606513", "4c19935"],
    headingAnim: "fadeInDown",
    slides: [
      "2025/04/IMG_8538.jpg|IMG_8538|1057x1600",
      "2025/04/side-view-man-hair-salon-scaled.jpg|side-view-man-hair-salon|1707x2560",
      "2025/04/young-man-posing-portrait-close-up-scaled.jpg|young man posing portrait close-up|1707x2560",
      "2025/07/2.jpg|2|1200x1600",
      "2025/07/1.jpg|1|1200x1600",
      "2025/07/3.jpg|3|1200x1600",
      "2025/07/WhatsApp-Image-2025-07-08-at-19.39.17.jpg|WhatsApp Image 2025-07-08 at 19.39.17|1367x1575",
    ],
    text: `<p><strong>Herrenschnitt – Stilvoll, präzise &amp; modern | Friseur &amp; Kosmetik George in Wiesbaden</strong></p><p>Ein gepflegter Haarschnitt ist die Basis für einen starken Auftritt. Bei <strong>Friseur &amp; Kosmetik George in Wiesbaden</strong> bieten wir Ihnen moderne und klassische <strong>Herrenschnitte</strong>, die exakt auf Ihren Typ, Ihre Haarstruktur und Ihren Lebensstil abgestimmt sind – mit höchster Präzision und viel Stilgefühl.</p><p><strong>Was ist ein professioneller Herrenschnitt?</strong><br>Ein professioneller Herrenschnitt kombiniert saubere Linien, eine perfekte Form und ein Styling, das sich im Alltag leicht pflegen lässt. Ob Kurzhaarschnitt, Fade, Undercut, Business-Look oder Bartpflege – wir beraten Sie individuell und setzen Ihren Wunschlook präzise um.</p><p><strong>Warum ein Herrenschnitt beim Friseur?</strong><br>Nur der Profi sorgt für exakte Übergänge, perfekte Konturen und eine Frisur, die lange hält. Mit hochwertigen Produkten und aktuellem Know-how garantieren wir ein Ergebnis, das Sie überzeugt – in entspannter Atmosphäre und ohne lange Wartezeit.</p>`,
    faqs: [
      Q("wie-oft-sollte-man-die-haare-schneiden", "7971", "Wie oft sollte man die Haare schneiden?", "<p>Im Durchschnitt alle 3–5 Wochen, je nach Schnitt und Haarwachstum.</p>", true),
      Q("bietet-ihr-auch-bartpflege-an", "7972", "Bietet ihr auch Bartpflege an?", "<p>Ja! Wir trimmen, formen und pflegen Ihren Bart – perfekt abgestimmt auf Ihren Stil.</p><ul><li><p> </p></li></ul>"),
      Q("kann-ich-spontan-vorbeikommen", "7973", "Kann ich spontan vorbeikommen?", "<p>Gerne mit Termin, aber auch kurzfristige Anfragen sind möglich – rufen Sie einfach an.</p>"),
      Q("gibt-es-auch-pflegeprodukte-fr-mnner", "7974", "Gibt es auch Pflegeprodukte für Männer?", "<p>Ja, wir beraten Sie gern zu Styling- und Pflegeprodukten für Männerhaar und Bart.</p><p> </p>"),
    ],
  },
];

export function parseSlide(s: string) {
  const [path, alt, size] = s.split("|");
  const [width, height] = size.split("x").map(Number);
  return { src: `/wp-content/uploads/${path}`, alt, width, height };
}
