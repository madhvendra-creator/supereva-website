import { User } from "lucide-react";

import type { BlogAuthor } from "@/types";

type AuthorBioProps = {
  author: BlogAuthor;
};

export function AuthorBio({ author }: AuthorBioProps) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-border bg-muted/30 p-6">
      <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
        <User className="size-6" aria-hidden="true" />
      </div>
      <div>
        <p className="font-semibold">{author.name}</p>
        <p className="text-sm text-muted-foreground">
          {author.role} at Supereva Technology
        </p>
      </div>
    </div>
  );
}
