import { ogImageContentType, ogImageSize, renderOgImage } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "Supereva Technology — Careers";

export default function Image() {
  return renderOgImage({
    eyebrow: "Careers",
    title: "Build AI-first software with a team that cares about the craft",
  });
}
