import { Building2, KeyRound, Lock, Network } from "lucide-react";

import { industries } from "@/constants/industries";
import type { ServicePageContent } from "@/types";

export const enterpriseSoftware: ServicePageContent = {
  slug: "enterprise-software",
  name: "Enterprise Software",
  eyebrow: "Enterprise Software",
  shortDescription:
    "Enterprise applications, systems integrations, and governance-ready platforms for complex organizations.",
  heroHeadline: "Enterprise-grade software, without enterprise-grade slowdowns.",
  heroDescription:
    "We build internal platforms and systems that meet the security, compliance, and integration demands of large organizations, without the multi-year timelines.",
  problem: {
    title: "Scale creates real constraints that generic software can't meet",
    description:
      "Large organizations need governance, integration, and compliance built in from the start, not requirements discovered halfway through a project.",
    points: [
      {
        title: "Legacy systems holding the business back",
        description:
          "Critical processes still run on systems too rigid or fragile to safely change.",
      },
      {
        title: "Compliance requirements slowing every project",
        description:
          "Security and compliance reviews bolted on at the end delay launches and frustrate stakeholders.",
      },
      {
        title: "Disconnected departments and data",
        description:
          "Different teams working from different versions of the truth creates costly coordination overhead.",
      },
      {
        title: "Access and governance as an afterthought",
        description:
          "Ad hoc permissions models become a security and audit liability as the organization grows.",
      },
    ],
  },
  offerings: [
    {
      icon: Building2,
      title: "Enterprise Application Development",
      description:
        "Custom applications built to handle the scale and complexity of large organizations.",
    },
    {
      icon: Network,
      title: "Systems Integration (ERP/CRM)",
      description:
        "Connecting new systems cleanly with the ERP, CRM, and legacy platforms already in place.",
    },
    {
      icon: KeyRound,
      title: "Role-Based Access & Governance",
      description:
        "Access control and governance models designed in from the start, not retrofitted later.",
    },
    {
      icon: Lock,
      title: "Compliance-Ready Architecture",
      description:
        "Architecture built to align with the security and compliance standards your organization requires.",
    },
  ],
  process: [
    {
      title: "Discover",
      description:
        "We map existing systems, stakeholders, and compliance requirements before proposing an architecture.",
    },
    {
      title: "Design",
      description:
        "We design for governance, access control, and integration requirements from the start, not as a later retrofit.",
    },
    {
      title: "Build",
      description:
        "We build and integrate incrementally, validating with real stakeholders and data along the way.",
    },
    {
      title: "Scale",
      description:
        "We support the system as new departments, integrations, and compliance needs are added over time.",
    },
  ],
  technologies: [
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Kafka",
    "Kubernetes",
    "SAML / SSO",
    "GraphQL",
    "Terraform",
  ],
  industries,
  faqs: [
    {
      question: "Can you integrate with our existing ERP or CRM?",
      answer:
        "Yes, integrating with established enterprise systems like these is a core part of most engagements.",
    },
    {
      question: "Do you handle enterprise security and compliance requirements?",
      answer:
        "We build to align with the security and compliance standards your organization requires, and work directly with your security and compliance teams on specific certifications.",
    },
    {
      question: "How do you manage a project across multiple stakeholders?",
      answer:
        "Through structured discovery and regular checkpoints with all affected teams, not just a single project sponsor.",
    },
    {
      question: "How long do enterprise engagements typically take?",
      answer:
        "It varies by scope, but we structure projects in incremental phases so stakeholders see working software well before the full system is complete.",
    },
  ],
  cta: {
    title: "Is legacy software holding your organization back?",
    description:
      "Tell us where the friction is, and we'll show you what a modern replacement actually requires.",
  },
  metaTitle: "Enterprise Software Development Services",
  metaDescription:
    "Supereva Technology builds enterprise applications, systems integrations, and governance-ready platforms for large, complex organizations.",
  keywords: [
    "enterprise software development",
    "enterprise application development company",
    "ERP integration services",
    "enterprise systems integration",
  ],
  relatedSlugs: ["custom-software-development", "cloud-solutions", "digital-transformation"],
};
