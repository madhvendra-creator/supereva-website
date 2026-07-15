import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import { BlogCard } from "@/components/blog/blog-card";
import { buttonVariants } from "@/components/ui/button";
import { blogPosts } from "@/constants/blog";
import { cn } from "@/lib/utils";

const recentPosts = blogPosts.slice(0, 3);

export function BlogPreview() {
  return (
    <Section id="blog-preview">
      <FadeIn className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            From the blog
          </p>
          <h2 className="mt-3">Notes from building AI-first software</h2>
        </div>
        <Link
          href="/blog"
          className={cn(buttonVariants({ variant: "outline" }), "shrink-0")}
        >
          Read the blog
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </FadeIn>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recentPosts.map((post, index) => (
          <FadeIn key={post.slug} delay={index * 0.06}>
            <BlogCard post={post} />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
