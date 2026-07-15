import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CtaLink = {
  label: string;
  href: string;
};

type CtaBannerProps = {
  title?: string;
  description?: string;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
};

export function CtaBanner({
  title = "Let's build what's next.",
  description = "Tell us about your product, and we'll tell you how fast we can help you ship it.",
  primaryCta = { label: "Get in touch", href: "/contact" },
  secondaryCta = { label: "View our services", href: "/services" },
}: CtaBannerProps = {}) {
  return (
    <Section id="contact">
      <FadeIn className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-muted/60 to-background px-8 py-16 text-center md:px-16 md:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/20 blur-[100px]"
        />
        <h2 className="relative">{title}</h2>
        <p className="relative mx-auto mt-4 max-w-xl text-muted-foreground">
          {description}
        </p>
        <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={primaryCta.href}
            className={cn(buttonVariants({ size: "lg" }), "px-6")}
          >
            {primaryCta.label}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <Link
            href={secondaryCta.href}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "px-6"
            )}
          >
            {secondaryCta.label}
          </Link>
        </div>
      </FadeIn>
    </Section>
  );
}
