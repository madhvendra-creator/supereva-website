import { caseStudySlugs, getCaseStudyBySlug } from "@/constants/case-studies";
import { ogImageContentType, ogImageSize, renderOgImage } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "Supereva Technology — Case Study";

export function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }));
}

type ImageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Image({ params }: ImageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  return renderOgImage({
    eyebrow: caseStudy?.industry ?? "Case Study",
    title: caseStudy?.title ?? "Supereva Technology",
  });
}
