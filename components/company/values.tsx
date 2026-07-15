import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import type { Value } from "@/types";

type ValuesProps = {
  items: Value[];
};

export function Values({ items }: ValuesProps) {
  return (
    <Section background="muted">
      <FadeIn className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand">
          Values
        </p>
        <h2 className="mt-3">What we hold ourselves to</h2>
      </FadeIn>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <FadeIn key={item.title} delay={index * 0.05}>
            <div className="h-full rounded-2xl border border-border bg-background p-6">
              <div className="flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <item.icon className="size-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
