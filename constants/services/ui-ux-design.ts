import { ClipboardCheck, Palette, PenTool, Puzzle } from "lucide-react";

import { industries } from "@/constants/industries";
import type { ServicePageContent } from "@/types";

export const uiUxDesign: ServicePageContent = {
  slug: "ui-ux-design",
  name: "UI/UX Design",
  eyebrow: "UI/UX Design",
  shortDescription:
    "Research-backed product design and design systems, from UX strategy to production-ready components.",
  heroHeadline: "Design that earns trust before a single word is read.",
  heroDescription:
    "We design products and experiences that are clear, usable, and consistent, grounded in real research, not just visual trends.",
  problem: {
    title: "Most design problems are trust problems in disguise",
    description:
      "Confusing flows, inconsistent interfaces, and disconnected hand-offs all erode the same thing: a user's confidence that the product works the way they expect.",
    points: [
      {
        title: "Confusing user journeys",
        description:
          "Users abandon products when the path to value isn't obvious within the first few interactions.",
      },
      {
        title: "Inconsistent design language",
        description:
          "Without a shared system, every new feature looks and behaves slightly differently, eroding trust.",
      },
      {
        title: "Design and engineering out of sync",
        description:
          "Hand-offs without shared components turn every implementation into a translation exercise.",
      },
      {
        title: "Decisions made without user input",
        description:
          "Design choices based on internal opinion alone often miss how real users actually behave.",
      },
    ],
  },
  offerings: [
    {
      icon: PenTool,
      title: "Product Design & UX Research",
      description:
        "Interface and flow design grounded in structured research with real target users.",
    },
    {
      icon: Palette,
      title: "Design Systems",
      description:
        "Documented, reusable design systems that keep new features consistent as the product grows.",
    },
    {
      icon: ClipboardCheck,
      title: "Prototyping & Usability Testing",
      description:
        "Testing key flows before engineering time is spent, so decisions are validated, not assumed.",
    },
    {
      icon: Puzzle,
      title: "Design-to-Code Handoff",
      description:
        "Production-ready components delivered in close collaboration with engineering, not static mockups.",
    },
  ],
  process: [
    {
      title: "Discover",
      description:
        "We research how real users think about the problem before sketching a single screen.",
    },
    {
      title: "Design",
      description:
        "We prototype and test key flows early, so decisions are validated before engineering time is spent.",
    },
    {
      title: "Build",
      description:
        "We deliver production-ready components, not just static mockups, to keep design and code in sync.",
    },
    {
      title: "Scale",
      description:
        "We evolve the design system as the product grows, keeping new features consistent with existing ones.",
    },
  ],
  technologies: ["Figma", "Framer", "Storybook", "Tailwind CSS", "Design Tokens", "React"],
  industries,
  faqs: [
    {
      question: "Do you do user research, or just visual design?",
      answer:
        "Both — visual design decisions are grounded in research and testing, not just aesthetic preference.",
    },
    {
      question: "Can you work within our existing design system?",
      answer:
        "Yes, we can extend an existing system or help you build one from scratch if it doesn't exist yet.",
    },
    {
      question: "What do we actually receive at the end of the engagement?",
      answer:
        "Production-ready design files, a documented component library, and close collaboration with engineering during implementation.",
    },
    {
      question: "How do you handle usability testing?",
      answer:
        "We run structured testing sessions with real target users at key milestones, not just a final review before launch.",
    },
  ],
  cta: {
    title: "Ready for a product that's actually easy to use?",
    description:
      "Tell us what's not working today, and we'll show you what a research-backed redesign looks like.",
  },
  metaTitle: "UI/UX Design Services",
  metaDescription:
    "Supereva Technology designs research-backed products and design systems — from UX strategy to production-ready component libraries.",
  keywords: [
    "UI UX design agency",
    "product design services",
    "design systems",
    "user experience research",
  ],
  relatedSlugs: ["web-development", "mobile-app-development", "custom-software-development"],
};
