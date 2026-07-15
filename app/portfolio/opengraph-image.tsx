import { ogImageContentType, ogImageSize, renderOgImage } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "Supereva Technology — Portfolio";

export default function Image() {
  return renderOgImage({
    eyebrow: "Portfolio",
    title: "Case studies from our engineering work",
  });
}
