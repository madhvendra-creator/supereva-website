import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { ScreenshotPlaceholder } from "@/components/portfolio/screenshot-placeholder";
import type { CaseStudy } from "@/types";

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
};

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <Link
      href={`/portfolio/${caseStudy.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/10"
    >
      <div className="p-4 pb-0">
        {caseStudy.image ? (
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-muted/50">
            <Image
              src={caseStudy.image}
              alt={`${caseStudy.title} preview`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ) : (
          <ScreenshotPlaceholder label="Case study preview" />
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="inline-flex w-fit items-center rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">
          {caseStudy.industry}
        </span>
        <h2 className="mt-4 text-lg">{caseStudy.title}</h2>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">
          {caseStudy.summary}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground">
          View case study
          <ArrowUpRight
            className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
