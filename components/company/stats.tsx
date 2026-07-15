import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import type { StatItem } from "@/types";

type StatsProps = {
  items: StatItem[];
  background?: "default" | "muted" | "card";
};

export function Stats({ items, background = "default" }: StatsProps) {
  return (
    <Section background={background}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((stat, index) => (
          <FadeIn key={stat.label} delay={index * 0.05}>
            <div className="rounded-2xl border border-border bg-background p-6 text-center">
              <span className="inline-flex items-center rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">
                {stat.value}
              </span>
              <p className="mt-4 font-medium">{stat.label}</p>
            </div>
          </FadeIn>
        ))}
      </div>
      <p className="mt-8 text-center text-sm text-muted-foreground">
        We&apos;re early in our journey — detailed figures will be published
        here as we grow.
      </p>
    </Section>
  );
}
