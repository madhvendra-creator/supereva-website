import { ogImageContentType, ogImageSize, renderOgImage } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "Supereva Technology — Company";

export default function Image() {
  return renderOgImage({
    eyebrow: "Company",
    title: "An engineering-first company, built for AI-native software",
  });
}
