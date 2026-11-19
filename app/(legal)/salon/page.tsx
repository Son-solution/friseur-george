import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: { absolute: "Salon - Friseur & Kosmetik George" },
  alternates: { canonical: "/salon/" },
  openGraph: { title: "Salon - Friseur & Kosmetik George", url: "/salon/" },
};

/** On the original this WordPress page has a title only and no content (Kadence default template). */
export default function Page() {
  return <LegalPage title="Salon" postId={34} />;
}
