import { getServiceBySlug, serviceSlugs } from "@/constants/services";
import { ogImageContentType, ogImageSize, renderOgImage } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "Supereva Technology — Service";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

type ImageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Image({ params }: ImageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  return renderOgImage({
    eyebrow: service?.eyebrow ?? "Services",
    title: service?.heroHeadline ?? "Supereva Technology",
  });
}
