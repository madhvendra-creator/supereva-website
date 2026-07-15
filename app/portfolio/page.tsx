import Script from "next/script";
import { Breadcrumbs } from "@/components/services";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { PortfolioGrid } from "@/components/portfolio";
import { CtaBanner } from "@/components/sections/cta-banner";
import { caseStudies, caseStudyIndustries } from "@/constants/case-studies";
import { constructMetadata } from "@/lib/metadata";
import { buildBreadcrumbPageJsonLd, jsonLdScriptProps } from "@/lib/schema";

export const metadata = constructMetadata({
  title: "Portfolio",
  description:
    "Case studies from Supereva Technology's engineering work across fintech, healthcare, e-commerce, education, logistics, and manufacturing.",
  path: "/portfolio",
});

const jsonLd = buildBreadcrumbPageJsonLd([
  { name: "Home", path: "/" },
  { name: "Portfolio", path: "/portfolio" },
]);

export default function PortfolioPage() {
  return (
    <>
      <Script id="json-ld" type="application/ld+json" {...jsonLdScriptProps(jsonLd)} />

      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Portfolio" }]} />

      <PageHero
        eyebrow="Portfolio"
        headline="Case studies from our engineering work"
        description="A look at the kind of problems we take on and how we approach them, across industries. Client details are anonymized for confidentiality."
      />

      <Section>
        <PortfolioGrid items={caseStudies} industries={caseStudyIndustries} />
      </Section>

      <CtaBanner
        title="Have a project like this in mind?"
        description="Tell us about what you're building, and we'll show you how we'd approach it."
      />
    </>
  );
}
