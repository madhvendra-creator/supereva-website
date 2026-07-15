import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ServiceHeroProps = {
  eyebrow: string;
  headline: string;
  description: string;
};

export function ServiceHero({ eyebrow, headline, description }: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 md:pt-20 md:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-[-14rem] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px] dark:bg-brand/10" />
      </div>

      <Container size="md" className="flex flex-col items-center text-center">
        <span className="inline-flex items-center rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">
          {eyebrow}
        </span>

        <h1 className="mt-6 max-w-3xl text-3xl md:text-5xl">{headline}</h1>

        <p className="mt-6 max-w-2xl text-balance text-lg text-muted-foreground">
          {description}
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className={cn(buttonVariants({ size: "lg" }), "px-6")}
          >
            Start a project
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <Link
            href="#faqs"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "px-6"
            )}
          >
            Common questions
          </Link>
        </div>
      </Container>
    </section>
  );
}
