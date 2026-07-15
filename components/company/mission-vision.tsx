import { Flag, Telescope } from "lucide-react";

import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";

type MissionVisionProps = {
  mission: string;
  vision: string;
};

export function MissionVision({ mission, vision }: MissionVisionProps) {
  return (
    <Section>
      <div className="grid gap-6 md:grid-cols-2">
        <FadeIn>
          <div className="h-full rounded-2xl border border-border bg-muted/30 p-8 md:p-10">
            <div className="flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
              <Flag className="size-5" aria-hidden="true" />
            </div>
            <h2 className="mt-6 text-2xl">Our mission</h2>
            <p className="mt-4 text-muted-foreground">{mission}</p>
          </div>
        </FadeIn>
        <FadeIn delay={0.08}>
          <div className="h-full rounded-2xl border border-border bg-muted/30 p-8 md:p-10">
            <div className="flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
              <Telescope className="size-5" aria-hidden="true" />
            </div>
            <h2 className="mt-6 text-2xl">Our vision</h2>
            <p className="mt-4 text-muted-foreground">{vision}</p>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
