import type { CaseStudy } from "@/types";

export const headlessStorefrontReplatform: CaseStudy = {
  slug: "headless-storefront-replatform",
  title: "Headless Storefront Replatform for a DTC Retail Brand",
  clientDescriptor: "A fast-growing direct-to-consumer retail brand",
  industry: "E-commerce & Retail",
  serviceSlug: "web-development",
  image: "/images/ecommerce.png",
  summary:
    "Migrating a slow, template-bound storefront to a headless architecture built for speed during high-traffic sale events.",
  challenge: {
    intro:
      "The brand's storefront ran on a templated e-commerce platform that couldn't keep up with the traffic spikes their promotions were driving.",
    points: [
      "Page load times degraded noticeably during flash sales, visibly hurting conversion.",
      "The platform's template system made design changes slow and often required developer involvement for basic updates.",
      "The storefront had gone down entirely during at least one major promotional event in the past year.",
    ],
  },
  solution: {
    intro:
      "We migrated the storefront to a headless architecture, decoupling the front-end from the commerce backend the client already relied on for inventory and fulfillment.",
    points: [
      "Rebuilt the storefront on Next.js with a component library the marketing team could compose pages from directly.",
      "Kept the existing inventory and fulfillment systems in place, connecting them through a clean API layer instead of replacing them.",
      "Set explicit performance budgets for every page template and tested against them before launch, not after.",
    ],
  },
  technologies: ["Next.js", "React", "TypeScript", "GraphQL", "Vercel", "Shopify (headless)"],
  results: {
    intro:
      "The new storefront handled its first major sale event without incident, at a fraction of the previous load times.",
    metrics: [
      { label: "Page load speed", value: "+45%" },
      { label: "Uptime during peak sale", value: "100%" },
      { label: "Mobile conversion", value: "Measurable lift" },
    ],
  },
  screenshotCount: 3,
  cta: {
    title: "Does your storefront hold up under real traffic?",
    description:
      "Tell us about your current setup, and we'll show you where the biggest performance gains are.",
  },
  metaTitle: "Case Study: Headless Storefront Replatform",
  metaDescription:
    "How Supereva Technology replatformed a DTC retail storefront to headless commerce, improving page speed by 45% with zero downtime during peak sales.",
  keywords: [
    "headless commerce case study",
    "e-commerce replatform",
    "Next.js e-commerce",
    "web development case study",
  ],
};
