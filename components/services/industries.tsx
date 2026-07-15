import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import type { Industry } from "@/types";

type IndustriesProps = {
  items: Industry[];
};

export function Industries({ items }: IndustriesProps) {
  return (
    <Section>
      <FadeIn className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand">
          Industries
        </p>
        <h2 className="mt-3">Industries we serve</h2>
      </FadeIn>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((industry, index) => (
          <FadeIn key={industry.name} delay={index * 0.05}>
            <div className="flex items-center gap-4 rounded-2xl border border-border bg-background p-6">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <industry.icon className="size-5" aria-hidden="true" />
              </div>
              <span className="font-medium">{industry.name}</span>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
