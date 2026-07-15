import { ListTree } from "lucide-react";

import type { BlogContentBlock } from "@/types";

type TableOfContentsProps = {
  content: BlogContentBlock[];
};

export function TableOfContents({ content }: TableOfContentsProps) {
  const headings = content.filter(
    (block): block is Extract<BlogContentBlock, { type: "heading" }> =>
      block.type === "heading"
  );

  if (headings.length === 0) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="rounded-2xl border border-border bg-muted/30 p-6 lg:sticky lg:top-24"
    >
      <div className="flex items-center gap-2 text-sm font-semibold">
        <ListTree className="size-4" aria-hidden="true" />
        On this page
      </div>
      <ul className="mt-4 flex flex-col gap-2.5 border-l border-border pl-4">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
