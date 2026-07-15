import { ogImageContentType, ogImageSize, renderOgImage } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "Supereva Technology — AI-First Software Company";

export default function Image() {
  return renderOgImage({
    eyebrow: "AI-First Software Company",
    title: "Software that thinks ahead, built for what's next.",
  });
}
