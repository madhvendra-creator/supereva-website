import Script from "next/script";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

import { Breadcrumbs, Technologies } from "@/components/services";
import { PageHero } from "@/components/layout/page-hero";
import {
  CaseStudyMeta,
  ChallengeSolution,
  MoreCaseStudies,
  Results,
  Screenshots,
} from "@/components/portfolio";
import { Section } from "@/components/layout/section";
import { CtaBanner } from "@/components/sections/cta-banner";
import {
  caseStudies,
  caseStudySlugs,
  getCaseStudyBySlug,
} from "@/constants/case-studies";
import { getServiceBySlug } from "@/constants/services";
import { constructMetadata } from "@/lib/metadata";
import { buildCaseStudyPageJsonLd, jsonLdScriptProps } from "@/lib/schema";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return constructMetadata({ noIndex: true });
  }

  return constructMetadata({
    title: caseStudy.metaTitle,
    description: caseStudy.metaDescription,
    path: `/portfolio/${caseStudy.slug}`,
  });
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  const relatedService = getServiceBySlug(caseStudy.serviceSlug);

  const moreCaseStudies = caseStudies
    .filter((item) => item.slug !== caseStudy.slug)
    .slice(0, 3);

  const jsonLd = buildCaseStudyPageJsonLd(caseStudy, [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: caseStudy.title, path: `/portfolio/${caseStudy.slug}` },
  ]);

  return (
    <>
      <Script id="json-ld" type="application/ld+json" {...jsonLdScriptProps(jsonLd)} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Portfolio", href: "/portfolio" },
          { label: caseStudy.title },
        ]}
      />

      <PageHero
        eyebrow={caseStudy.industry}
        headline={caseStudy.title}
        description={caseStudy.summary}
      />

      <CaseStudyMeta
        industry={caseStudy.industry}
        clientDescriptor={caseStudy.clientDescriptor}
      />

      <ChallengeSolution
        challenge={caseStudy.challenge}
        solution={caseStudy.solution}
      />

      <Technologies items={caseStudy.technologies} />

      <Results results={caseStudy.results} />

      <Screenshots count={caseStudy.screenshotCount} />

      {relatedService && (
        <Section>
          <div className="mx-auto flex max-w-2xl flex-col items-center rounded-2xl border border-border bg-muted/30 p-8 text-center">
            <p className="text-sm text-muted-foreground">
              This project was built as part of our
            </p>
            <Link
              href={`/services/${relatedService.slug}`}
              className="mt-2 inline-flex items-center gap-1 text-lg font-semibold text-brand"
            >
              {relatedService.name}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              {relatedService.shortDescription}
            </p>
          </div>
        </Section>
      )}

      <MoreCaseStudies items={moreCaseStudies} />

      <CtaBanner
        title={caseStudy.cta.title}
        description={caseStudy.cta.description}
      />
    </>
  );
}
