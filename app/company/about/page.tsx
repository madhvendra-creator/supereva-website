import Script from "next/script";
import {
  Awards,
  Certifications,
  MissionVision,
  Timeline,
  Values,
} from "@/components/company";
import { Breadcrumbs } from "@/components/services";
import { PageHero } from "@/components/layout/page-hero";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Differentiators } from "@/components/sections/differentiators";
import {
  companyTimeline,
  missionStatement,
  values,
  visionStatement,
  whySupereva,
} from "@/constants/company";
import { constructMetadata } from "@/lib/metadata";
import { buildBreadcrumbPageJsonLd, jsonLdScriptProps } from "@/lib/schema";

export const metadata = constructMetadata({
  title: "About",
  description:
    "Supereva Technology's mission, vision, values, and story — an engineering-first company building AI-native software.",
  path: "/company/about",
});

const jsonLd = buildBreadcrumbPageJsonLd([
  { name: "Home", path: "/" },
  { name: "Company", path: "/company" },
  { name: "About", path: "/company/about" },
]);

export default function AboutPage() {
  return (
    <>
      <Script id="json-ld" type="application/ld+json" {...jsonLdScriptProps(jsonLd)} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Company", href: "/company" },
          { label: "About" },
        ]}
      />

      <PageHero
        eyebrow="About Supereva"
        headline="We build AI-first software, the way it should be built"
        description="Supereva Technology exists because most software still treats AI as an afterthought. We think it should be the foundation."
      />

      <MissionVision mission={missionStatement} vision={visionStatement} />

      <Differentiators
        eyebrow="Why Supereva"
        title="Why teams choose to build with us"
        items={whySupereva}
      />

      <Values items={values} />

      <Timeline items={companyTimeline} />

      <Awards />

      <Certifications />

      <CtaBanner
        title="Want to know more about how we work?"
        description="Tell us about your project, and we'll walk you through our process in detail."
      />
    </>
  );
}
