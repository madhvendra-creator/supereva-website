import Script from "next/script";
import { LeadershipGrid } from "@/components/company";
import { Breadcrumbs } from "@/components/services";
import { PageHero } from "@/components/layout/page-hero";
import { CtaBanner } from "@/components/sections/cta-banner";
import { leadershipTeam } from "@/constants/company";
import { constructMetadata } from "@/lib/metadata";
import { buildBreadcrumbPageJsonLd, jsonLdScriptProps } from "@/lib/schema";

export const metadata = constructMetadata({
  title: "Leadership",
  description:
    "Meet the team guiding how Supereva Technology builds AI-first software.",
  path: "/company/leadership",
});

const jsonLd = buildBreadcrumbPageJsonLd([
  { name: "Home", path: "/" },
  { name: "Company", path: "/company" },
  { name: "Leadership", path: "/company/leadership" },
]);

export default function LeadershipPage() {
  return (
    <>
      <Script id="json-ld" type="application/ld+json" {...jsonLdScriptProps(jsonLd)} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Company", href: "/company" },
          { label: "Leadership" },
        ]}
      />

      <PageHero
        eyebrow="Leadership"
        headline="The team steering how we build"
        description="Supereva Technology is led by a small group of engineers and operators who stay close to the work, not just the roadmap."
      />

      <LeadershipGrid items={leadershipTeam} />

      <CtaBanner
        title="Interested in joining the team?"
        description="We're always looking for people who care about the craft as much as we do."
        primaryCta={{ label: "View careers", href: "/company/careers" }}
        secondaryCta={{ label: "Get in touch", href: "/contact" }}
      />
    </>
  );
}
