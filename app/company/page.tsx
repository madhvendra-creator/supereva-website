import Script from "next/script";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Breadcrumbs } from "@/components/services";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { FadeIn } from "@/components/motion/fade-in";
import { Stats } from "@/components/company";
import { companyStats } from "@/constants/company";
import { constructMetadata } from "@/lib/metadata";
import { buildBreadcrumbPageJsonLd, jsonLdScriptProps } from "@/lib/schema";

export const metadata = constructMetadata({
  title: "Company",
  description:
    "Learn about Supereva Technology: our mission, values, leadership, and how to join the team.",
  path: "/company",
});

const jsonLd = buildBreadcrumbPageJsonLd([
  { name: "Home", path: "/" },
  { name: "Company", path: "/company" },
]);

const companyPages = [
  {
    href: "/company/about",
    title: "About",
    description:
      "Our mission, vision, values, and the story behind Supereva Technology.",
  },
  {
    href: "/company/leadership",
    title: "Leadership",
    description: "The people guiding how we build and who we work with.",
  },
  {
    href: "/company/careers",
    title: "Careers",
    description: "Where we typically hire, and how to introduce yourself.",
  },
];

export default function CompanyPage() {
  return (
    <>
      <Script id="json-ld" type="application/ld+json" {...jsonLdScriptProps(jsonLd)} />

      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Company" }]} />

      <PageHero
        eyebrow="Company"
        headline="An engineering-first company, built for AI-native software"
        description="Supereva Technology is a small, senior team building AI-first software for ambitious companies. Here's who we are."
      />

      <Stats items={companyStats} />

      <section className="pb-20 md:pb-28">
        <Container size="lg">
          <div className="grid gap-6 sm:grid-cols-3">
            {companyPages.map((page, index) => (
              <FadeIn key={page.href} delay={index * 0.06}>
                <Link
                  href={page.href}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/10"
                >
                  <h2 className="text-xl">{page.title}</h2>
                  <p className="mt-3 flex-1 text-muted-foreground">
                    {page.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground">
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
        </Container>
      </section>

      <CtaBanner
        title="Want to work with us?"
        description="Whether you have a project in mind or want to join the team, we'd love to hear from you."
        primaryCta={{ label: "Get in touch", href: "/contact" }}
        secondaryCta={{ label: "View careers", href: "/company/careers" }}
      />
    </>
  );
}
