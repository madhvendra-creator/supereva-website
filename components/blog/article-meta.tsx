import { CalendarDays, Clock, User } from "lucide-react";

import { formatDate } from "@/lib/format-date";
import { getReadingTime } from "@/lib/reading-time";
import type { BlogPost } from "@/types";

type ArticleMetaProps = {
  post: BlogPost;
};

export function ArticleMeta({ post }: ArticleMetaProps) {
  const readingTime = getReadingTime(post.content);

  return (
    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
      <span className="inline-flex items-center gap-1.5">
        <User className="size-4" aria-hidden="true" />
        {post.author.name}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <CalendarDays className="size-4" aria-hidden="true" />
        <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Clock className="size-4" aria-hidden="true" />
        {readingTime} min read
      </span>
    </div>
  );
}
