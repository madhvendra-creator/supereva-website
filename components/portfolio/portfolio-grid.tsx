"use client";

import { useMemo, useState } from "react";

import { CaseStudyCard } from "@/components/portfolio/case-study-card";
import { cn } from "@/lib/utils";
import type { CaseStudy } from "@/types";

type PortfolioGridProps = {
  items: CaseStudy[];
  industries: string[];
};

export function PortfolioGrid({ items, industries }: PortfolioGridProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = useMemo(
    () => (selected ? items.filter((item) => item.industry === selected) : items),
    [items, selected]
  );

  return (
    <div>
      <div
        role="group"
        aria-label="Filter case studies by industry"
        className="flex flex-wrap items-center justify-center gap-2"
      >
        <FilterPill
          label="All industries"
          active={selected === null}
          onClick={() => setSelected(null)}
        />
        {industries.map((industry) => (
          <FilterPill
            key={industry}
            label={industry}
            active={selected === industry}
            onClick={() => setSelected(industry)}
          />
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <CaseStudyCard key={item.slug} caseStudy={item} />
          ))}
        </div>
      ) : (
        <p className="mt-14 text-center text-muted-foreground">
          No case studies for this industry yet — check back soon.
        </p>
      )}
    </div>
  );
}

type FilterPillProps = {
  label: string;
  active: boolean;
  onClick: () => void;
};

function FilterPill({ label, active, onClick }: FilterPillProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
        active
          ? "border-transparent bg-primary text-primary-foreground"
          : "border-border bg-background text-muted-foreground hover:text-foreground"
      )}
    >
      {label}
    </button>
  );
}
