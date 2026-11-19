import ServicePageView, { getService, serviceMetadata } from "@/components/ServicePageView";

export const metadata = serviceMetadata("/produkte/");

export default function ProduktePage() {
  return <ServicePageView page={getService("/produkte/")} />;
}
