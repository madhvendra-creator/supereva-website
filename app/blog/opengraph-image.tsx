import { ogImageContentType, ogImageSize, renderOgImage } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "Supereva Technology — Blog";

export default function Image() {
  return renderOgImage({
    eyebrow: "Blog",
    title: "Notes on building AI-first software",
  });
}
