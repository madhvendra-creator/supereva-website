import { Gauge, Lock, Sparkles, Users } from "lucide-react";

import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import { cn } from "@/lib/utils";
import type { Value } from "@/types";

type DifferentiatorItem = Value & { className?: string };

const defaultItems: DifferentiatorItem[] = [
  {
    icon: Sparkles,
    title: "AI-native by default",
    description:
      "We don't bolt AI onto existing products. We architect for it from day one.",
    className: "md:col-span-2",
  },
  {
    icon: Users,
    title: "Senior engineering, no bench",
    description:
      "Every project is staffed by engineers who've shipped production systems before.",
  },
  {
    icon: Lock,
    title: "Security & compliance first",
    description:
      "Built with the rigor enterprise teams expect, from architecture to deployment.",
  },
  {
    icon: Gauge,
    title: "Speed without shortcuts",
    description:
      "Fast iteration, without sacrificing code quality or long-term architecture.",
    className: "md:col-span-2",
  },
];

type DifferentiatorsProps = {
  eyebrow?: string;
  title?: string;
  items?: DifferentiatorItem[];
  background?: "default" | "muted" | "card";
};

export function Differentiators({
  eyebrow = "Why Supereva",
  title = "Built differently, by design",
  items = defaultItems,
  background = "muted",
}: DifferentiatorsProps) {
  return (
    <Section background={background} id="why-supereva">
      <FadeIn className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand">
          {eyebrow}
        </p>
        <h2 className="mt-3">{title}</h2>
      </FadeIn>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {items.map((item, index) => (
          <FadeIn
            key={item.title}
            delay={index * 0.06}
            className={cn(
              "rounded-2xl border border-border bg-background p-8",
              item.className
            )}
          >
            <div className="flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
              <item.icon className="size-5" aria-hidden="true" />
            </div>
            <h3 className="mt-6 text-xl">{item.title}</h3>
            <p className="mt-3 text-muted-foreground">{item.description}</p>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
