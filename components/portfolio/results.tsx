import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import type { CaseStudy } from "@/types";

type ResultsProps = {
  results: CaseStudy["results"];
};

export function Results({ results }: ResultsProps) {
  return (
    <Section background="muted">
      <FadeIn className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand">
          Results
        </p>
        <h2 className="mt-3">The outcome</h2>
        <p className="mt-4 text-muted-foreground">{results.intro}</p>
      </FadeIn>

      <div className="mt-14 grid gap-6 sm:grid-cols-3">
        {results.metrics.map((metric, index) => (
          <FadeIn key={metric.label} delay={index * 0.06}>
            <div className="rounded-2xl border border-border bg-background p-8 text-center">
              <p className="text-3xl font-semibold text-brand">
                {metric.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {metric.label}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      <p className="mt-8 text-center text-xs text-muted-foreground">
        Client details anonymized for confidentiality. Figures reflect the
        representative outcomes this type of engagement targets.
      </p>
    </Section>
  );
}
