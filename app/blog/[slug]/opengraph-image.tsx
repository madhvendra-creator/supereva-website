import { getPostBySlug, postSlugs } from "@/constants/blog";
import { ogImageContentType, ogImageSize, renderOgImage } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "Supereva Technology — Blog Article";

export function generateStaticParams() {
  return postSlugs.map((slug) => ({ slug }));
}

type ImageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Image({ params }: ImageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return renderOgImage({
    eyebrow: post?.category ?? "Blog",
    title: post?.title ?? "Supereva Technology",
  });
}
