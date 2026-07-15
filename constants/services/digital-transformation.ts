import { ClipboardCheck, Compass, Network, Users } from "lucide-react";

import { industries } from "@/constants/industries";
import type { ServicePageContent } from "@/types";

export const digitalTransformation: ServicePageContent = {
  slug: "digital-transformation",
  name: "Digital Transformation",
  eyebrow: "Digital Transformation",
  shortDescription:
    "Phased, low-risk modernization of legacy processes, systems, and data across the organization.",
  heroHeadline: "Modernize how your business runs, not just how it looks.",
  heroDescription:
    "We help organizations replace manual, disconnected processes with modern systems, without disrupting the business while the change happens.",
  problem: {
    title: "The technology usually isn't the hardest part",
    description:
      "Most transformation efforts stall not because the new system is hard to build, but because the process, data, and people side of the change was never properly sequenced.",
    points: [
      {
        title: "Manual processes everywhere",
        description:
          "Spreadsheets and email threads are still running processes that should have been automated years ago.",
      },
      {
        title: "Data trapped in silos",
        description:
          "Teams make decisions on incomplete information because systems don't talk to each other.",
      },
      {
        title: "Legacy technology limiting growth",
        description:
          "The business has outgrown its systems, but replacing them feels too risky to start.",
      },
      {
        title: "Change that doesn't stick",
        description:
          "New tools get rolled out but abandoned when teams aren't brought along with the change.",
      },
    ],
  },
  offerings: [
    {
      icon: ClipboardCheck,
      title: "Technology & Process Audits",
      description:
        "A clear-eyed assessment of current systems and processes, and where they're actually costing you.",
    },
    {
      icon: Compass,
      title: "Legacy Modernization Roadmaps",
      description:
        "A sequenced plan for modernization that prioritizes impact and risk, not just technical convenience.",
    },
    {
      icon: Network,
      title: "Data & Systems Integration",
      description:
        "Connecting previously siloed systems so teams work from one version of the truth.",
    },
    {
      icon: Users,
      title: "Change Management & Rollout Support",
      description:
        "Supporting adoption across teams, since a transformation only succeeds if people actually use it.",
    },
  ],
  process: [
    {
      title: "Discover",
      description:
        "We audit current processes, systems, and pain points across the teams actually affected by the change.",
    },
    {
      title: "Design",
      description:
        "We build a modernization roadmap sequenced by risk and impact, not just technical convenience.",
    },
    {
      title: "Build",
      description:
        "We implement in phases that deliver visible wins early, keeping the business running throughout.",
    },
    {
      title: "Scale",
      description:
        "We support adoption and rollout, since a transformation only succeeds if people actually use the new system.",
    },
  ],
  technologies: [
    "Cloud Platforms (AWS/GCP/Azure)",
    "API Integration Platforms",
    "Data Warehousing",
    "Low-Code / No-Code Tooling",
    "PostgreSQL",
    "GraphQL",
  ],
  industries,
  faqs: [
    {
      question: "Where should we start if everything feels outdated?",
      answer:
        "With an audit — we help you sequence the changes that will have the most impact first, rather than trying to fix everything at once.",
    },
    {
      question: "How do you avoid disrupting the business during the transition?",
      answer:
        "By rolling out change in phases that run alongside existing systems until the new ones are proven, rather than a risky single cutover.",
    },
    {
      question: "How is this different from a custom software project?",
      answer:
        "Digital transformation often spans multiple systems and teams, and includes the process and change-management work needed to make the technology actually stick.",
    },
    {
      question: "How do you measure success?",
      answer:
        "Against the specific process and business metrics defined during the audit, not just whether the new system was deployed.",
    },
  ],
  cta: {
    title: "Ready to modernize how your business actually runs?",
    description:
      "Tell us where the friction is today, and we'll help you map the path to fixing it.",
  },
  metaTitle: "Digital Transformation Services",
  metaDescription:
    "Supereva Technology helps organizations modernize legacy processes and systems through phased, low-risk digital transformation engagements.",
  keywords: [
    "digital transformation services",
    "business process modernization",
    "legacy modernization consulting",
    "digital transformation company",
  ],
  relatedSlugs: ["enterprise-software", "cloud-solutions", "custom-software-development"],
};
