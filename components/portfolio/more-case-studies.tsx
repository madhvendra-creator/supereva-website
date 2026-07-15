import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import { CaseStudyCard } from "@/components/portfolio/case-study-card";
import type { CaseStudy } from "@/types";

type MoreCaseStudiesProps = {
  items: CaseStudy[];
};

export function MoreCaseStudies({ items }: MoreCaseStudiesProps) {
  if (items.length === 0) return null;

  return (
    <Section background="muted">
      <FadeIn className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand">
          Explore more
        </p>
        <h2 className="mt-3">More case studies</h2>
      </FadeIn>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <FadeIn key={item.slug} delay={index * 0.06}>
            <CaseStudyCard caseStudy={item} />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
