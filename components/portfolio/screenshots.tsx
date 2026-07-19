import Image from "next/image";

import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";

type ScreenshotsProps = {
  screenshots: string[];
};

export function Screenshots({ screenshots }: ScreenshotsProps) {
  if (screenshots.length === 0) return null;

  return (
    <Section>
      <FadeIn className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand">
          Preview
        </p>
        <h2 className="mt-3">Product screenshots</h2>
      </FadeIn>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {screenshots.map((src, index) => (
          <FadeIn key={index} delay={index * 0.06}>
            <div className="overflow-hidden rounded-xl border border-border bg-muted/40">
              <Image
                src={src}
                alt={`Product screenshot ${index + 1}`}
                width={600}
                height={400}
                className="aspect-video w-full object-cover"
              />
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
