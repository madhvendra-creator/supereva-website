import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import { BlogCard } from "@/components/blog/blog-card";
import type { BlogPost } from "@/types";

type RelatedArticlesProps = {
  posts: BlogPost[];
};

export function RelatedArticles({ posts }: RelatedArticlesProps) {
  if (posts.length === 0) return null;

  return (
    <Section background="muted">
      <FadeIn className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand">
          Keep reading
        </p>
        <h2 className="mt-3">Related articles</h2>
      </FadeIn>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <FadeIn key={post.slug} delay={index * 0.06}>
            <BlogCard post={post} />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
