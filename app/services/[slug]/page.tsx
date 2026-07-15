import Script from "next/script";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  Breadcrumbs,
  Faq,
  Industries,
  Offerings,
  ProblemStatement,
  ProcessSteps,
  RelatedServices,
  ServiceHero,
  Technologies,
} from "@/components/services";
import { CtaBanner } from "@/components/sections/cta-banner";
import { getServiceBySlug, services, serviceSlugs } from "@/constants/services";
import { constructMetadata } from "@/lib/metadata";
import { buildServicePageJsonLd, jsonLdScriptProps } from "@/lib/schema";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return constructMetadata({ noIndex: true });
  }

  return constructMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = service.relatedSlugs
    .map((relatedSlug) => services.find((item) => item.slug === relatedSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item))
    .map((item) => ({
      slug: item.slug,
      name: item.name,
      shortDescription: item.shortDescription,
    }));

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.name, path: `/services/${service.slug}` },
  ];

  const jsonLd = buildServicePageJsonLd(service, breadcrumbItems);

  return (
    <>
      <Script id="json-ld" type="application/ld+json" {...jsonLdScriptProps(jsonLd)} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.name },
        ]}
      />

      <ServiceHero
        eyebrow={service.eyebrow}
        headline={service.heroHeadline}
        description={service.heroDescription}
      />

      <ProblemStatement
        title={service.problem.title}
        description={service.problem.description}
        points={service.problem.points}
      />

      <Offerings
        title={`End-to-end ${service.name.toLowerCase()}`}
        description={`A closer look at what our ${service.name.toLowerCase()} engagements cover, end to end.`}
        items={service.offerings}
      />

      <ProcessSteps steps={service.process} />

      <Technologies items={service.technologies} />

      <Industries items={service.industries} />

      <Faq items={service.faqs} />

      <RelatedServices items={relatedServices} />

      <CtaBanner
        title={service.cta.title}
        description={service.cta.description}
        primaryCta={{ label: "Get in touch", href: "/contact" }}
        secondaryCta={{ label: "View all services", href: "/services" }}
      />
    </>
  );
}
