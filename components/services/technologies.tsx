import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";

type TechnologiesProps = {
  items: string[];
};

export function Technologies({ items }: TechnologiesProps) {
  return (
    <Section background="muted">
      <FadeIn className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand">
          Technologies
        </p>
        <h2 className="mt-3">Tools we build with</h2>
      </FadeIn>

      <FadeIn
        delay={0.08}
        className="mt-10 flex flex-wrap items-center justify-center gap-3"
      >
        {items.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground"
          >
            {tech}
          </span>
        ))}
      </FadeIn>
    </Section>
  );
}
