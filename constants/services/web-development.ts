import { Gauge, Layers3, Monitor, ShoppingCart } from "lucide-react";

import { industries } from "@/constants/industries";
import type { ServicePageContent } from "@/types";

export const webDevelopment: ServicePageContent = {
  slug: "web-development",
  name: "Web Development",
  eyebrow: "Web Development",
  shortDescription:
    "Fast, accessible, SEO-ready web experiences engineered on modern frameworks.",
  heroHeadline: "Fast, accessible, production-grade web experiences.",
  heroDescription:
    "We build marketing sites, web applications, and storefronts engineered for speed, accessibility, and conversion, not just visual polish.",
  problem: {
    title: "Most sites are built for launch day, not for growth",
    description:
      "A site that looks good in a design review can still lose customers to slow load times, broken accessibility, or a front-end that can't keep up with the business.",
    points: [
      {
        title: "Slow sites lose customers",
        description:
          "Every extra second of load time measurably increases bounce rate and lowers conversion.",
      },
      {
        title: "Inaccessible experiences",
        description:
          "Sites built without accessibility in mind exclude real users and create legal and compliance risk.",
      },
      {
        title: "Fragile front-ends",
        description:
          "Without a real component architecture, small design changes turn into multi-day engineering efforts.",
      },
      {
        title: "SEO left as an afterthought",
        description:
          "Technical SEO bolted on after launch rarely performs as well as sites architected for it from day one.",
      },
    ],
  },
  offerings: [
    {
      icon: Monitor,
      title: "Marketing Sites & Web Apps",
      description:
        "Custom-built sites and applications engineered for performance, clarity, and conversion.",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Storefronts",
      description:
        "Fast, reliable storefronts that hold up under real traffic and checkout volume.",
    },
    {
      icon: Gauge,
      title: "Performance & Core Web Vitals",
      description:
        "Auditing and optimizing existing sites against real performance and ranking metrics.",
    },
    {
      icon: Layers3,
      title: "Design Systems & Component Libraries",
      description:
        "Reusable, documented component libraries that keep design and engineering in sync.",
    },
  ],
  process: [
    {
      title: "Discover",
      description:
        "We start with your users, content, and goals, not a template, to define what the site actually needs to do.",
    },
    {
      title: "Design",
      description:
        "Information architecture and UI decisions are made together, so design and engineering aren't fighting each other later.",
    },
    {
      title: "Build",
      description:
        "We build on modern, well-supported frameworks with performance and accessibility budgets from day one.",
    },
    {
      title: "Scale",
      description:
        "We monitor real-world performance and Core Web Vitals post-launch, and keep the site fast as content grows.",
    },
  ],
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Vercel",
    "GraphQL",
    "Sanity",
    "Contentful",
  ],
  industries,
  faqs: [
    {
      question: "Can you work with our existing design or CMS?",
      answer:
        "Yes — we regularly build on top of existing design systems and integrate with CMS platforms teams already use, like Sanity or Contentful.",
    },
    {
      question: "Do you handle SEO?",
      answer:
        "Technical SEO — structured data, metadata, performance, crawlability — is built in from the start, not added after launch.",
    },
    {
      question: "How fast will our site actually be?",
      answer:
        "We set explicit performance budgets (Core Web Vitals, load time) at the start of the project and test against them continuously, not just at the end.",
    },
    {
      question: "Do you provide ongoing maintenance after launch?",
      answer:
        "Yes, available as an ongoing engagement, or we can hand the codebase to your team with full documentation.",
    },
  ],
  cta: {
    title: "Is your site working as hard as it should?",
    description:
      "Tell us about your current site and goals, and we'll show you where the biggest gains are.",
  },
  metaTitle: "Web Development Services",
  metaDescription:
    "Supereva Technology builds fast, accessible, SEO-ready web experiences — from marketing sites to e-commerce storefronts — engineered on modern frameworks.",
  keywords: [
    "web development company",
    "Next.js development",
    "website development services",
    "e-commerce development",
  ],
  relatedSlugs: ["ui-ux-design", "custom-software-development", "digital-transformation"],
};
