import { ShieldCheck } from "lucide-react";

import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";

export function Certifications() {
  return (
    <Section>
      <FadeIn className="mx-auto flex max-w-xl flex-col items-center rounded-2xl border border-dashed border-border bg-muted/30 p-10 text-center">
        <div className="flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
          <ShieldCheck className="size-5" aria-hidden="true" />
        </div>
        <h2 className="mt-6 text-2xl">Certifications</h2>
        <p className="mt-3 text-muted-foreground">
          Formal compliance certifications will be listed here as they&apos;re
          completed. In the meantime, our engineering follows
          industry-standard security practices by default.
        </p>
      </FadeIn>
    </Section>
  );
}
