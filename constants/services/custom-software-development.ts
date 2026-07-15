import { Layers, Network, RefreshCw, Wrench } from "lucide-react";

import { industries } from "@/constants/industries";
import type { ServicePageContent } from "@/types";

export const customSoftwareDevelopment: ServicePageContent = {
  slug: "custom-software-development",
  name: "Custom Software Development",
  eyebrow: "Custom Software Development",
  shortDescription:
    "Custom applications, platforms, and internal tools engineered around how your business actually works.",
  heroHeadline: "Software built around your business, not the other way around.",
  heroDescription:
    "We design and build custom applications, platforms, and internal tools that fit how your business actually works, not how a generic template assumes it should.",
  problem: {
    title: "Generic software forces you to compromise",
    description:
      "Off-the-shelf tools and aging legacy systems both create the same problem: your team spends time working around the software instead of the software working for your team.",
    points: [
      {
        title: "One-size-fits-all software",
        description:
          "Off-the-shelf tools force your team to bend its process to fit the tool, not the other way around.",
      },
      {
        title: "Technical debt that compounds",
        description:
          "Legacy codebases become slower and riskier to change every year they're left unaddressed.",
      },
      {
        title: "Disconnected systems",
        description:
          "Data trapped in silos across different tools costs teams hours of manual reconciliation every week.",
      },
      {
        title: "Outgrowing the current system",
        description:
          "Systems built for an earlier stage of the business start to buckle under new volume or complexity.",
      },
    ],
  },
  offerings: [
    {
      icon: Layers,
      title: "Product Engineering",
      description:
        "End-to-end engineering for new products, from architecture through launch.",
    },
    {
      icon: RefreshCw,
      title: "Legacy System Modernization",
      description:
        "Untangling brittle legacy systems into maintainable, modern architectures without halting the business.",
    },
    {
      icon: Network,
      title: "APIs & Systems Integration",
      description:
        "Clean, well-documented APIs and integrations that connect the tools your teams already depend on.",
    },
    {
      icon: Wrench,
      title: "Internal Tools & Platforms",
      description:
        "Purpose-built internal tools that remove manual work and give teams the visibility they need.",
    },
  ],
  process: [
    {
      title: "Discover",
      description:
        "We learn how your team actually works today, including the workarounds, before proposing a system.",
    },
    {
      title: "Design",
      description:
        "We architect for your real constraints: existing systems, team size, and where the business is headed next.",
    },
    {
      title: "Build",
      description:
        "Senior engineers ship in small, reviewable increments so you see working software early and often.",
    },
    {
      title: "Scale",
      description:
        "We help the system evolve as your data, team, and usage grow, rather than requiring a rewrite.",
    },
  ],
  technologies: [
    "TypeScript",
    "Node.js",
    "Python",
    "PostgreSQL",
    "GraphQL",
    "Docker",
    "AWS",
    "Next.js",
  ],
  industries,
  faqs: [
    {
      question: "Do you take over existing codebases, or only build from scratch?",
      answer:
        "Both. Many engagements start with modernizing or extending an existing system rather than a full rewrite.",
    },
    {
      question: "Who owns the code and IP?",
      answer:
        "You do. Everything we build is delivered with full ownership and no vendor lock-in.",
    },
    {
      question: "How do you choose the tech stack?",
      answer:
        "Based on your team's existing skills, long-term maintainability, and the specific performance and scale requirements of the project, not by default.",
    },
    {
      question: "What does ongoing support look like?",
      answer:
        "We can hand off fully to your team, stay on for maintenance and iteration, or anything in between, set at the start of the engagement.",
    },
  ],
  cta: {
    title: "Have a system that needs to work harder for you?",
    description:
      "Tell us where it's falling short, and we'll show you what a purpose-built version looks like.",
  },
  metaTitle: "Custom Software Development Services",
  metaDescription:
    "Supereva Technology designs and builds custom software, internal tools, and platform engineering tailored to how your business actually operates.",
  keywords: [
    "custom software development",
    "software development company",
    "legacy system modernization",
    "custom enterprise applications",
  ],
  relatedSlugs: ["enterprise-software", "web-development", "cloud-solutions"],
};
