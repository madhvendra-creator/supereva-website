import Script from "next/script";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/services";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/motion/fade-in";
import {
  ArticleContent,
  ArticleMeta,
  AuthorBio,
  RelatedArticles,
  TableOfContents,
} from "@/components/blog";
import { CtaBanner } from "@/components/sections/cta-banner";
import { blogPosts, getPostBySlug, postSlugs } from "@/constants/blog";
import { constructMetadata } from "@/lib/metadata";
import { buildArticlePageJsonLd, jsonLdScriptProps } from "@/lib/schema";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return postSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return constructMetadata({ noIndex: true });
  }

  return constructMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((item) => item.slug !== post.slug)
    .sort((a, b) => {
      const score = (candidate: typeof a) =>
        (candidate.category === post.category ? 2 : 0) +
        candidate.tags.filter((tag) => post.tags.includes(tag)).length;
      return score(b) - score(a);
    })
    .slice(0, 3);

  const jsonLd = buildArticlePageJsonLd(post, [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ]);

  return (
    <>
      <Script id="json-ld" type="application/ld+json" {...jsonLdScriptProps(jsonLd)} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <section className="relative overflow-hidden pt-16 pb-12 md:pt-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute left-1/2 top-[-14rem] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px] dark:bg-brand/10" />
        </div>

        <Container size="md" className="flex flex-col items-center text-center">
          <span className="inline-flex items-center rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">
            {post.category}
          </span>
          <h1 className="mt-6 max-w-2xl text-3xl md:text-5xl">{post.title}</h1>
          <p className="mt-6 max-w-xl text-balance text-lg text-muted-foreground">
            {post.excerpt}
          </p>
          <div className="mt-8">
            <ArticleMeta post={post} />
          </div>
        </Container>
      </section>

      <div className="border-y border-border">
        <Container size="lg">
          <div className="grid gap-10 py-16 lg:grid-cols-[260px_1fr]">
            <FadeIn>
              <TableOfContents content={post.content} />
            </FadeIn>

            <FadeIn delay={0.08} className="flex flex-col gap-10">
              <ArticleContent content={post.content} />
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <AuthorBio author={post.author} />
            </FadeIn>
          </div>
        </Container>
      </div>

      <RelatedArticles posts={relatedPosts} />

      <CtaBanner
        title="Want help putting this into practice?"
        description="Tell us about your project, and we'll show you how we'd approach it."
      />
    </>
  );
}
