import { AlertTriangle, Lightbulb } from "lucide-react";

import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import type { CaseStudySection } from "@/types";

type ChallengeSolutionProps = {
  challenge: CaseStudySection;
  solution: CaseStudySection;
};

export function ChallengeSolution({ challenge, solution }: ChallengeSolutionProps) {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-2">
        <FadeIn>
          <div className="flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
            <AlertTriangle className="size-5" aria-hidden="true" />
          </div>
          <h2 className="mt-6 text-2xl">The challenge</h2>
          <p className="mt-4 text-muted-foreground">{challenge.intro}</p>
          <ul className="mt-4 flex flex-col gap-3">
            {challenge.points.map((point) => (
              <li key={point} className="flex gap-3 text-sm text-muted-foreground">
                <span
                  aria-hidden
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-brand"
                />
                {point}
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
            <Lightbulb className="size-5" aria-hidden="true" />
          </div>
          <h2 className="mt-6 text-2xl">The solution</h2>
          <p className="mt-4 text-muted-foreground">{solution.intro}</p>
          <ul className="mt-4 flex flex-col gap-3">
            {solution.points.map((point) => (
              <li key={point} className="flex gap-3 text-sm text-muted-foreground">
                <span
                  aria-hidden
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-brand"
                />
                {point}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </Section>
  );
}
