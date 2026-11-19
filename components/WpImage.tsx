import Image, { type ImageProps } from "next/image";

/**
 * next/image with the ORIGINAL file's aspect ratio pinned in CSS.
 * The image optimizer rounds resized heights to whole pixels (e.g. the 20717×10550 logo
 * becomes 384×196), which would make `height:auto` images up to ~0.5px taller than on the
 * original site. Pinning `aspect-ratio` keeps every box exactly as WordPress rendered it.
 */
export default function WpImage(props: ImageProps & { width: number; height: number }) {
  const { style, width, height, ...rest } = props;
  return <Image {...rest} width={width} height={height} style={{ aspectRatio: `${width} / ${height}`, ...style }} />;
}
