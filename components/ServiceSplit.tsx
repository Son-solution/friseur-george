import Image from "@/components/WpImage";
import Link from "next/link";

type Img = { src: string; width: number; height: number };

/**
 * Service overview used on /damen/ and /herren/: service names stacked on the left
 * (each links to its page), one photo on the right (photo first on mobile).
 * Styles: .fg-service-split in app/styles/custom.css.
 */
export default function ServiceSplit({ label, image, alt, items }: { label: string; image: Img; alt: string; items: { label: string; href: string }[] }) {
  return (
    <div className="fg-service-split">
      <nav className="fg-service-list" aria-label={label}>
        <ul>
          {items.map((it) => (
            <li key={it.href}>
              <Link href={it.href}>
                <span>{it.label}</span>
                <span className="fg-service-arrow" aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="fg-service-photo">
        <Image src={image.src} width={image.width} height={image.height} alt={alt} sizes="(max-width: 767px) 100vw, 560px" priority />
      </div>
    </div>
  );
}
