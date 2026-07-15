import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import type { TimelineMilestone } from "@/types";

type TimelineProps = {
  items: TimelineMilestone[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <Section>
      <FadeIn className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand">
          Our story
        </p>
        <h2 className="mt-3">Company timeline</h2>
      </FadeIn>

      <div className="relative mx-auto mt-14 max-w-2xl">
        <div
          aria-hidden
          className="absolute left-[0.9375rem] top-2 hidden h-[calc(100%-1rem)] w-px bg-border sm:block"
        />
        <div className="flex flex-col gap-10">
          {items.map((item, index) => (
            <FadeIn
              key={item.phase}
              delay={index * 0.08}
              className="relative flex gap-6"
            >
              <span className="relative z-10 mt-1 hidden size-8 shrink-0 items-center justify-center rounded-full border border-border bg-background text-xs font-semibold sm:flex">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-brand">
                  {item.phase}
                </p>
                <h3 className="mt-2 text-lg">{item.title}</h3>
                <p className="mt-2 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
