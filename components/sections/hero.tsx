import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-[-12rem] h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-brand/25 blur-[120px] dark:bg-brand/15" />
        <div className="absolute -right-32 top-52 h-[22rem] w-[22rem] rounded-full bg-brand/10 blur-[100px]" />
      </div>

      <Container size="md" className="flex flex-col items-center text-center">
        <span className="inline-flex items-center rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">
          AI-First Software Company
        </span>

        <h1 className="mt-6 max-w-3xl text-4xl md:text-6xl">
          Software that thinks ahead, built for{" "}
          <span className="bg-gradient-to-r from-foreground to-brand bg-clip-text text-transparent">
            what&apos;s next
          </span>
          .
        </h1>

        <p className="mt-6 max-w-xl text-balance text-lg text-muted-foreground md:text-xl">
          Supereva Technology designs, builds, and ships AI-native products
          for teams who can&apos;t afford to move slow.
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
            href="/services"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "px-6"
            )}
          >
            Explore our services
          </Link>
        </div>
      </Container>
    </section>
  );
}
