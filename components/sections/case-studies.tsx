import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import { CaseStudyCard } from "@/components/portfolio/case-study-card";
import { buttonVariants } from "@/components/ui/button";
import { caseStudies } from "@/constants/case-studies";
import { cn } from "@/lib/utils";

const featuredSlugs = [
  "ai-underwriting-platform",
  "patient-intake-automation",
  "headless-storefront-replatform",
  "adaptive-learning-platform",
];

const featuredCaseStudies = featuredSlugs
  .map((slug) => caseStudies.find((caseStudy) => caseStudy.slug === slug))
  .filter((caseStudy): caseStudy is NonNullable<typeof caseStudy> =>
    Boolean(caseStudy)
  );

export function CaseStudies() {
  return (
    <Section id="case-studies">
      <FadeIn className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            Case studies
          </p>
          <h2 className="mt-3">Real systems, shipped and running</h2>
        </div>
        <Link
          href="/portfolio"
          className={cn(buttonVariants({ variant: "outline" }), "shrink-0")}
        >
          View all work
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </FadeIn>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featuredCaseStudies.map((caseStudy, index) => (
          <FadeIn key={caseStudy.slug} delay={index * 0.06}>
            <CaseStudyCard caseStudy={caseStudy} />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
