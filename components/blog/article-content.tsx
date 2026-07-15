import type { BlogContentBlock } from "@/types";

type ArticleContentProps = {
  content: BlogContentBlock[];
};

export function ArticleContent({ content }: ArticleContentProps) {
  return (
    <div className="flex flex-col gap-5">
      {content.map((block, index) => {
        if (block.type === "heading") {
          return (
            <h2 key={block.id} id={block.id} className="mt-6 scroll-mt-24 text-2xl">
              {block.text}
            </h2>
          );
        }

        if (block.type === "list") {
          return (
            <ul key={index} className="flex flex-col gap-2 pl-1">
              {block.items.map((item) => (
                <li key={item} className="flex gap-3 text-muted-foreground">
                  <span
                    aria-hidden
                    className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand"
                  />
                  {item}
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p key={index} className="text-muted-foreground">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
