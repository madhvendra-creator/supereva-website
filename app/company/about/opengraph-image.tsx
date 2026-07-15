import { ogImageContentType, ogImageSize, renderOgImage } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "Supereva Technology — About";

export default function Image() {
  return renderOgImage({
    eyebrow: "About Supereva",
    title: "We build AI-first software, the way it should be built",
  });
}
