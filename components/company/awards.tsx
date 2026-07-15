import { Award } from "lucide-react";

import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";

export function Awards() {
  return (
    <Section background="muted">
      <FadeIn className="mx-auto flex max-w-xl flex-col items-center rounded-2xl border border-dashed border-border bg-background p-10 text-center">
        <div className="flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
          <Award className="size-5" aria-hidden="true" />
        </div>
        <h2 className="mt-6 text-2xl">Awards &amp; recognition</h2>
        <p className="mt-3 text-muted-foreground">
          We&apos;re just getting started. Awards and industry recognition
          will be featured here as they&apos;re received.
        </p>
      </FadeIn>
    </Section>
  );
}
