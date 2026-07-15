import { AlertTriangle } from "lucide-react";

import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import type { ProblemPoint } from "@/types";

type ProblemStatementProps = {
  title: string;
  description: string;
  points: ProblemPoint[];
};

export function ProblemStatement({ title, description, points }: ProblemStatementProps) {
  return (
    <Section>
      <FadeIn className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand">
          The Challenge
        </p>
        <h2 className="mt-3">{title}</h2>
        <p className="mt-4 text-muted-foreground">{description}</p>
      </FadeIn>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {points.map((point, index) => (
          <FadeIn key={point.title} delay={index * 0.06}>
            <div className="flex h-full gap-4 rounded-2xl border border-border bg-muted/30 p-6">
              <AlertTriangle
                className="mt-0.5 size-5 shrink-0 text-brand"
                aria-hidden="true"
              />
              <div>
                <h3 className="text-base font-semibold">{point.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {point.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
