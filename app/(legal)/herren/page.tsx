import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: { absolute: "Herren - Friseur & Kosmetik George" },
  alternates: { canonical: "/herren/" },
  openGraph: { title: "Herren - Friseur & Kosmetik George", url: "/herren/" },
};

/** On the original this WordPress page has a title only and no content (Kadence default template). */
export default function Page() {
  return <LegalPage title="Herren" postId={237} />;
}
