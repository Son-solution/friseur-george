import { notFound } from "next/navigation";

/** Catch-all so unknown URLs render the Kadence-style 404 inside the site frame. */
export default function Missing() {
  notFound();
}
