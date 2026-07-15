import {
  BlogPreview,
  CaseStudies,
  CtaBanner,
  HowWeHelp,
  Testimonials,
  TrustBar,
  WhatWeDo,
} from "@/components/sections";
import { PageHero } from "@/components/layout/page-hero";
import { siteConfig } from "@/constants/site";

export default function Home() {
  return (
    <>
      <PageHero
        eyebrow={siteConfig.name}
        headline="AI-first software, built to ship"
        description={siteConfig.description}
        primaryCta={{ label: "Get in touch", href: "/contact" }}
        secondaryCta={{ label: "View our services", href: "/services" }}
      />

      <TrustBar />
      <WhatWeDo />
      <HowWeHelp />
      <CaseStudies />
      <Testimonials />
      <BlogPreview />
      <CtaBanner />
    </>
  );
}
