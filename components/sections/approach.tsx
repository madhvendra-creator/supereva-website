import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We dig into your problem, users, and constraints before writing a line of code.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Architecture and product decisions made deliberately, not by default.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Senior engineers ship production-grade software in tight, iterative loops.",
  },
  {
    number: "04",
    title: "Scale",
    description:
      "We stay in the loop post-launch: performance, reliability, and growth.",
  },
];

export function Approach() {
  return (
    <Section id="approach">
      <FadeIn className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand">
          How we work
        </p>
        <h2 className="mt-3">A process built for momentum</h2>
      </FadeIn>

      <div className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
        <div
          aria-hidden
          className="absolute left-0 top-6 hidden h-px w-full bg-border md:block"
        />
        {steps.map((step, index) => (
          <FadeIn
            key={step.number}
            delay={index * 0.08}
            className="relative flex flex-col items-start"
          >
            <span className="relative z-10 flex size-12 items-center justify-center rounded-full border border-border bg-background text-sm font-semibold">
              {step.number}
            </span>
            <h3 className="mt-5 text-lg">{step.title}</h3>
            <p className="mt-2 text-muted-foreground">{step.description}</p>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
