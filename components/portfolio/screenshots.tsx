import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import { ScreenshotPlaceholder } from "@/components/portfolio/screenshot-placeholder";

type ScreenshotsProps = {
  count: number;
};

export function Screenshots({ count }: ScreenshotsProps) {
  return (
    <Section>
      <FadeIn className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand">
          Preview
        </p>
        <h2 className="mt-3">Product screenshots</h2>
      </FadeIn>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: count }).map((_, index) => (
          <FadeIn key={index} delay={index * 0.06}>
            <ScreenshotPlaceholder label={`Screenshot placeholder ${index + 1}`} />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
