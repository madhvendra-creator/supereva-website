import Script from "next/script";
import dynamic from "next/dynamic";

import { OfficeInfo } from "@/components/company";
import { Breadcrumbs } from "@/components/services";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { constructMetadata } from "@/lib/metadata";
import {
  buildBreadcrumbSchema,
  buildLocalBusinessSchema,
  jsonLdScriptProps,
} from "@/lib/schema";

const ContactForm = dynamic(() =>
  import("@/components/contact/contact-form").then((mod) => mod.ContactForm)
);

export const metadata = constructMetadata({
  title: "Contact",
  description:
    "Get in touch with Supereva Technology to discuss your next AI or software project.",
  path: "/contact",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    buildLocalBusinessSchema(),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Contact", path: "/contact" },
    ]),
  ],
};

export default function ContactPage() {
  return (
    <>
      <Script id="json-ld" type="application/ld+json" {...jsonLdScriptProps(jsonLd)} />

      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />

      <PageHero
        eyebrow="Contact"
        headline="Let's talk about what you're building"
        description="Tell us about your project, and we'll get back to you within a couple of business days."
      />

      <Section containerSize="lg" background="muted">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-2xl border border-border bg-background p-8 md:p-10">
            <ContactForm />
          </div>

          <div className="flex flex-col gap-8">
            <OfficeInfo />
          </div>
        </div>
      </Section>
    </>
  );
}
