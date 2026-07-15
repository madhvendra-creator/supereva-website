import { ogImageContentType, ogImageSize, renderOgImage } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "Supereva Technology — Contact";

export default function Image() {
  return renderOgImage({
    eyebrow: "Contact",
    title: "Let's talk about what you're building",
  });
}
