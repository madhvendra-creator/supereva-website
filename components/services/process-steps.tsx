import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import type { ProcessStep } from "@/types";

type ProcessStepsProps = {
  title?: string;
  steps: ProcessStep[];
};

export function ProcessSteps({
  title = "A process built for momentum",
  steps,
}: ProcessStepsProps) {
  return (
    <Section>
      <FadeIn className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand">
          How we work
        </p>
        <h2 className="mt-3">{title}</h2>
      </FadeIn>

      <div className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
        <div
          aria-hidden
          className="absolute left-0 top-6 hidden h-px w-full bg-border md:block"
        />
        {steps.map((step, index) => (
          <FadeIn
            key={step.title}
            delay={index * 0.08}
            className="relative flex flex-col items-start"
          >
            <span className="relative z-10 flex size-12 items-center justify-center rounded-full border border-border bg-background text-sm font-semibold">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-5 text-lg">{step.title}</h3>
            <p className="mt-2 text-muted-foreground">{step.description}</p>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
