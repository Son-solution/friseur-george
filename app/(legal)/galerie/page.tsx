import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: { absolute: "Galerie - Friseur & Kosmetik George" },
  alternates: { canonical: "/galerie/" },
  openGraph: { title: "Galerie - Friseur & Kosmetik George", url: "/galerie/" },
};

/** On the original this WordPress page has a title only and no content (Kadence default template). */
export default function Page() {
  return <LegalPage title="Galerie" postId={36} />;
}
