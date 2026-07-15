"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";

import { BlogCard } from "@/components/blog/blog-card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import type { BlogPost } from "@/types";

type BlogGridProps = {
  posts: BlogPost[];
  categories: string[];
  tags: string[];
};

export function BlogGrid({ posts, categories, tags }: BlogGridProps) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return posts.filter((post) => {
      const matchesCategory = !selectedCategory || post.category === selectedCategory;
      const matchesTag = !selectedTag || post.tags.includes(selectedTag);
      const matchesQuery =
        !normalizedQuery ||
        post.title.toLowerCase().includes(normalizedQuery) ||
        post.excerpt.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesTag && matchesQuery;
    });
  }, [posts, query, selectedCategory, selectedTag]);

  const hasActiveFilters = Boolean(query || selectedCategory || selectedTag);

  return (
    <div>
      <div className="relative mx-auto max-w-lg">
        <Search
          className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
        <Input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search articles..."
          aria-label="Search articles"
          className="pl-9"
        />
      </div>

      <div
        role="group"
        aria-label="Filter by category"
        className="mt-8 flex flex-wrap items-center justify-center gap-2"
      >
        <FilterPill
          label="All categories"
          active={selectedCategory === null}
          onClick={() => setSelectedCategory(null)}
        />
        {categories.map((category) => (
          <FilterPill
            key={category}
            label={category}
            active={selectedCategory === category}
            onClick={() =>
              setSelectedCategory(selectedCategory === category ? null : category)
            }
          />
        ))}
      </div>

      <div
        role="group"
        aria-label="Filter by tag"
        className="mt-3 flex flex-wrap items-center justify-center gap-2"
      >
        {tags.map((tag) => (
          <FilterPill
            key={tag}
            label={`#${tag}`}
            active={selectedTag === tag}
            subtle
            onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
          />
        ))}
      </div>

      {hasActiveFilters && (
        <div className="mt-4 flex justify-center">
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setSelectedCategory(null);
              setSelectedTag(null);
            }}
            className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <X className="size-3.5" aria-hidden="true" />
            Clear filters
          </button>
        </div>
      )}

      {filtered.length > 0 ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="mt-14 text-center text-muted-foreground">
          No articles match your search yet.
        </p>
      )}
    </div>
  );
}

type FilterPillProps = {
  label: string;
  active: boolean;
  onClick: () => void;
  subtle?: boolean;
};

function FilterPill({ label, active, onClick, subtle }: FilterPillProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "rounded-full border px-3.5 py-1.5 font-medium transition-colors",
        subtle ? "text-xs" : "text-sm",
        active
          ? "border-transparent bg-primary text-primary-foreground"
          : "border-border bg-background text-muted-foreground hover:text-foreground"
      )}
    >
      {label}
    </button>
  );
}
