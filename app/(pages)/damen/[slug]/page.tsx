import ServicePageView, { getService, serviceMetadata } from "@/components/ServicePageView";
import { SERVICES } from "@/lib/services";

const PREFIX = "/damen/";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.filter((s) => s.path.startsWith(PREFIX)).map((s) => ({ slug: s.path.slice(PREFIX.length, -1) }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return serviceMetadata(`${PREFIX}${slug}/`);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ServicePageView page={getService(`${PREFIX}${slug}/`)} />;
}
