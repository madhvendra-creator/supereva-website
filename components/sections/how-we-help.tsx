import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We spend time in your problem before we touch a keyboard — mapping users, data, and constraints so we build the right thing, not just a working thing.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "Senior engineers ship in tight loops, with architecture decisions made deliberately and AI woven in from the first commit, not bolted on at the end.",
  },
  {
    number: "03",
    title: "Scale",
    description:
      "We stay in the loop after launch — watching performance, cost, and reliability as usage grows, and tuning the system as real-world data comes in.",
  },
];

export function HowWeHelp() {
  return (
    <Section background="muted" id="how-we-help">
      <FadeIn className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand">
          How we help
        </p>
        <h2 className="mt-3">From first prototype to production scale</h2>
      </FadeIn>

      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {steps.map((step, index) => (
          <FadeIn
            key={step.number}
            delay={index * 0.08}
            className="rounded-2xl border border-border bg-background p-8"
          >
            <span className="flex size-12 items-center justify-center rounded-full border border-border bg-muted/50 text-sm font-semibold">
              {step.number}
            </span>
            <h3 className="mt-6 text-xl">{step.title}</h3>
            <p className="mt-3 text-muted-foreground">{step.description}</p>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
