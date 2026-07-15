import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import type { ServiceOffering } from "@/types";

type OfferingsProps = {
  title?: string;
  description?: string;
  items: ServiceOffering[];
};

export function Offerings({
  title = "What's included",
  description = "A closer look at what this service covers, end to end.",
  items,
}: OfferingsProps) {
  return (
    <Section background="muted">
      <FadeIn className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand">
          Services
        </p>
        <h2 className="mt-3">{title}</h2>
        <p className="mt-4 text-muted-foreground">{description}</p>
      </FadeIn>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {items.map((item, index) => (
          <FadeIn key={item.title} delay={index * 0.06}>
            <div className="h-full rounded-2xl border border-border bg-background p-8">
              <div className="flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <item.icon className="size-5" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl">{item.title}</h3>
              <p className="mt-3 text-muted-foreground">{item.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
