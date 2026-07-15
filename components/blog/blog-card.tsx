import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";

import { formatDate } from "@/lib/format-date";
import { getReadingTime } from "@/lib/reading-time";
import type { BlogPost } from "@/types";

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  const readingTime = getReadingTime(post.content);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/10"
    >
      <span className="inline-flex w-fit items-center rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">
        {post.category}
      </span>
      <h2 className="mt-4 text-lg">{post.title}</h2>
      <p className="mt-2 flex-1 text-sm text-muted-foreground">
        {post.excerpt}
      </p>

      <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
        <span>{formatDate(post.publishedAt)}</span>
        <span className="inline-flex items-center gap-1">
          <Clock className="size-3.5" aria-hidden="true" />
          {readingTime} min read
        </span>
      </div>

      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground">
        Read article
        <ArrowUpRight
          className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
