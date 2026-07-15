import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";

type RelatedService = {
  slug: string;
  name: string;
  shortDescription: string;
};

type RelatedServicesProps = {
  items: RelatedService[];
};

export function RelatedServices({ items }: RelatedServicesProps) {
  if (items.length === 0) return null;

  return (
    <Section background="muted">
      <FadeIn className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand">
          Explore more
        </p>
        <h2 className="mt-3">Related services</h2>
      </FadeIn>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <FadeIn key={item.slug} delay={index * 0.06}>
            <Link
              href={`/services/${item.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/10"
            >
              <h3 className="text-lg">{item.name}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">
                {item.shortDescription}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground">
                Learn more
                <ArrowUpRight
                  className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </span>
            </Link>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
