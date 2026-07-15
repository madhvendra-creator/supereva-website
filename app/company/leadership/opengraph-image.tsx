import { ogImageContentType, ogImageSize, renderOgImage } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "Supereva Technology — Leadership";

export default function Image() {
  return renderOgImage({
    eyebrow: "Leadership",
    title: "The team steering how we build",
  });
}
