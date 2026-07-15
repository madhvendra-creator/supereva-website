import Script from "next/script";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Breadcrumbs } from "@/components/services";
import { Container } from "@/components/layout/container";
import { CtaBanner } from "@/components/sections/cta-banner";
import { FadeIn } from "@/components/motion/fade-in";
import { PageHero } from "@/components/layout/page-hero";
import { services } from "@/constants/services";
import { constructMetadata } from "@/lib/metadata";
import { buildBreadcrumbPageJsonLd, jsonLdScriptProps } from "@/lib/schema";

export const metadata = constructMetadata({
  title: "Services",
  description:
    "Explore Supereva Technology's engineering services: AI development, custom software, cloud, mobile, design, DevOps, and enterprise systems.",
  path: "/services",
});

const jsonLd = buildBreadcrumbPageJsonLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
]);

export default function ServicesPage() {
  return (
    <>
      <Script id="json-ld" type="application/ld+json" {...jsonLdScriptProps(jsonLd)} />

      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} />

      <PageHero
        eyebrow="Services"
        headline="Engineering services built for AI-native products"
        description="From first prototype to enterprise-scale platforms, here's how Supereva Technology can help."
      />

      <section className="pb-20 md:pb-28">
        <Container size="xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <FadeIn key={service.slug} delay={index * 0.05}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/10"
                >
                  <h2 className="text-xl">{service.name}</h2>
                  <p className="mt-3 flex-1 text-muted-foreground">
                    {service.shortDescription}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground">
                    Learn more
                    <span className="sr-only"> about {service.name}</span>
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

      <CtaBanner />
    </>
  );
}
