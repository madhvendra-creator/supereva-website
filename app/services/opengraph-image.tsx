import { ogImageContentType, ogImageSize, renderOgImage } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "Supereva Technology — Services";

export default function Image() {
  return renderOgImage({
    eyebrow: "Services",
    title: "Engineering services built for AI-native products",
  });
}
