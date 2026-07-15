import { Quote } from "lucide-react";

import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import { testimonials } from "@/constants/testimonials";

export function Testimonials() {
  return (
    <Section background="muted" id="testimonials">
      <FadeIn className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand">
          What clients say
        </p>
        <h2 className="mt-3">Trusted by teams who ship</h2>
      </FadeIn>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <FadeIn
            key={testimonial.name}
            delay={index * 0.06}
            className="flex h-full flex-col rounded-2xl border border-border bg-background p-8"
          >
            <Quote className="size-6 text-brand" aria-hidden="true" />
            <p className="mt-4 flex-1 text-balance text-muted-foreground">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="mt-6">
              <p className="text-sm font-semibold text-foreground">
                {testimonial.name}
              </p>
              <p className="text-sm text-muted-foreground">
                {testimonial.role}, {testimonial.company}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
