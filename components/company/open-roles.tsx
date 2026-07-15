import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/constants/site";
import { cn } from "@/lib/utils";
import type { RoleCategory } from "@/types";

type OpenRolesProps = {
  categories: RoleCategory[];
};

export function OpenRoles({ categories }: OpenRolesProps) {
  return (
    <Section background="muted">
      <FadeIn className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand">
          Hiring
        </p>
        <h2 className="mt-3">Where we typically hire</h2>
        <p className="mt-4 text-muted-foreground">
          We don&apos;t have specific openings listed right now, but we&apos;re
          always interested in hearing from strong candidates in these areas.
        </p>
      </FadeIn>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category, index) => (
          <FadeIn key={category.title} delay={index * 0.06}>
            <div className="h-full rounded-2xl border border-border bg-background p-6 text-center">
              <div className="mx-auto flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <category.icon className="size-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg">{category.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {category.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.2} className="mt-12 flex justify-center">
        <Link
          href={`mailto:${siteConfig.contactEmail}`}
          className={cn(buttonVariants({ size: "lg" }), "px-6")}
        >
          Introduce yourself
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </FadeIn>
    </Section>
  );
}
