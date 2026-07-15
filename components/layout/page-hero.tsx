import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { HeroBackground } from "@/components/sections/hero-background";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PageHeroCta = {
  label: string;
  href: string;
};

type PageHeroProps = {
  eyebrow: string;
  headline: string;
  description: string;
  primaryCta?: PageHeroCta;
  secondaryCta?: PageHeroCta;
};

export function PageHero({
  eyebrow,
  headline,
  description,
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 md:pt-20 md:pb-24">
      <HeroBackground />

      <Container size="md" className="flex flex-col items-center text-center">
        <span className="inline-flex items-center rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">
          {eyebrow}
        </span>

        <h1 className="mt-6 max-w-2xl text-3xl md:text-5xl">{headline}</h1>

        <p className="mt-6 max-w-xl text-balance text-lg text-muted-foreground">
          {description}
        </p>

        {(primaryCta || secondaryCta) && (
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className={cn(buttonVariants({ size: "lg" }), "px-6")}
              >
                {primaryCta.label}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "px-6"
                )}
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </Container>
    </section>
  );
}
