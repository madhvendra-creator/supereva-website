import Script from "next/script";
import { OpenRoles, Values } from "@/components/company";
import { Breadcrumbs } from "@/components/services";
import { PageHero } from "@/components/layout/page-hero";
import { CtaBanner } from "@/components/sections/cta-banner";
import { openRoleCategories, values } from "@/constants/company";
import { constructMetadata } from "@/lib/metadata";
import { buildBreadcrumbPageJsonLd, jsonLdScriptProps } from "@/lib/schema";

export const metadata = constructMetadata({
  title: "Careers",
  description:
    "Join Supereva Technology. See where we typically hire and what we value in the people we work with.",
  path: "/company/careers",
});

const jsonLd = buildBreadcrumbPageJsonLd([
  { name: "Home", path: "/" },
  { name: "Company", path: "/company" },
  { name: "Careers", path: "/company/careers" },
]);

export default function CareersPage() {
  return (
    <>
      <Script id="json-ld" type="application/ld+json" {...jsonLdScriptProps(jsonLd)} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Company", href: "/company" },
          { label: "Careers" },
        ]}
      />

      <PageHero
        eyebrow="Careers"
        headline="Build AI-first software with a team that cares about the craft"
        description="We're a small, senior team, and we grow deliberately. Here's what we look for and where we typically hire."
      />

      <Values items={values} />

      <OpenRoles categories={openRoleCategories} />

      <CtaBanner
        title="Don't see an exact fit?"
        description="We're always open to hearing from strong candidates, even without a specific opening listed."
        primaryCta={{ label: "Introduce yourself", href: "/contact" }}
        secondaryCta={{ label: "Meet the team", href: "/company/leadership" }}
      />
    </>
  );
}
