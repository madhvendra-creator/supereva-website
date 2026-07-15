import { Accordion } from "@base-ui/react/accordion";
import { Plus } from "lucide-react";

import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/motion/fade-in";
import type { Faq as FaqItem } from "@/types";

type FaqProps = {
  items: FaqItem[];
};

export function Faq({ items }: FaqProps) {
  return (
    <section id="faqs" className="w-full py-16 md:py-24">
      <Container size="md">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            FAQs
          </p>
          <h2 className="mt-3">Common questions</h2>
        </FadeIn>

        <FadeIn delay={0.08} className="mt-12">
          <Accordion.Root className="flex flex-col divide-y divide-border rounded-2xl border border-border">
            {items.map((item) => (
              <Accordion.Item key={item.question}>
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-medium hover:bg-muted/50">
                    {item.question}
                    <Plus
                      className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-panel-open:rotate-45"
                      aria-hidden="true"
                    />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Panel className="h-[var(--accordion-panel-height)] overflow-hidden text-sm transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0">
                  <p className="px-6 pb-5 text-muted-foreground">
                    {item.answer}
                  </p>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </FadeIn>
      </Container>
    </section>
  );
}
