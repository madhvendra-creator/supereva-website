import Script from "next/script";
import { Breadcrumbs } from "@/components/services";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { BlogGrid } from "@/components/blog";
import { CtaBanner } from "@/components/sections/cta-banner";
import { blogCategories, blogPosts, blogTags } from "@/constants/blog";
import { constructMetadata } from "@/lib/metadata";
import { buildBreadcrumbPageJsonLd, jsonLdScriptProps } from "@/lib/schema";

export const metadata = constructMetadata({
  title: "Blog",
  description:
    "Notes on AI engineering, software development, product design, and how we build at Supereva Technology.",
  path: "/blog",
});

const jsonLd = buildBreadcrumbPageJsonLd([
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
]);

export default function BlogPage() {
  return (
    <>
      <Script id="json-ld" type="application/ld+json" {...jsonLdScriptProps(jsonLd)} />

      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />

      <PageHero
        eyebrow="Blog"
        headline="Notes on building AI-first software"
        description="Practical thinking on AI engineering, software development, and product design, from the team building it day to day."
      />

      <Section>
        <BlogGrid posts={blogPosts} categories={blogCategories} tags={blogTags} />
      </Section>

      <CtaBanner
        title="Have a project you'd like our take on?"
        description="Tell us what you're building, and we'll share how we'd approach it."
      />
    </>
  );
}
