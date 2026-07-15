import { Banknote, Cloud, Server, Terminal } from "lucide-react";

import { industries } from "@/constants/industries";
import type { ServicePageContent } from "@/types";

export const cloudSolutions: ServicePageContent = {
  slug: "cloud-solutions",
  name: "Cloud Solutions",
  eyebrow: "Cloud Solutions",
  shortDescription:
    "Cloud architecture, migration, and operations built for reliability and cost control.",
  heroHeadline: "Cloud infrastructure that scales with you, not against you.",
  heroDescription:
    "We design, migrate, and operate cloud infrastructure built for reliability and cost control at every stage of growth.",
  problem: {
    title: "Infrastructure that grew organically eventually breaks",
    description:
      "Most cloud problems don't show up until they're expensive: a runaway bill, an outage during peak traffic, or a security gap no one had mapped.",
    points: [
      {
        title: "Unpredictable cloud bills",
        description:
          "Costs creep upward as infrastructure grows organically, without anyone owning the overall spend.",
      },
      {
        title: "Fragile, manually-managed infrastructure",
        description:
          "Systems configured by hand are hard to reproduce, audit, or recover quickly when something breaks.",
      },
      {
        title: "Downtime during peak demand",
        description:
          "Infrastructure that wasn't designed for your actual traffic patterns fails exactly when it matters most.",
      },
      {
        title: "Security gaps from ad hoc setups",
        description:
          "Cloud environments that grew without a security review often carry risks no one has fully mapped.",
      },
    ],
  },
  offerings: [
    {
      icon: Cloud,
      title: "Cloud Architecture & Migration",
      description:
        "Migrating and re-architecting infrastructure for reliability, without disrupting the live business.",
    },
    {
      icon: Terminal,
      title: "Infrastructure as Code",
      description:
        "Reproducible, version-controlled infrastructure that's auditable and fast to recover.",
    },
    {
      icon: Banknote,
      title: "Cost Optimization & FinOps",
      description:
        "Right-sizing infrastructure and instituting ongoing cost visibility, not a one-time audit.",
    },
    {
      icon: Server,
      title: "High Availability & Multi-Region Design",
      description:
        "Architecture built to stay up under real traffic spikes and regional failures.",
    },
  ],
  process: [
    {
      title: "Discover",
      description:
        "We audit your current infrastructure, costs, and failure points before proposing any changes.",
    },
    {
      title: "Design",
      description:
        "We architect for your real traffic patterns and growth plans, codified as infrastructure as code from the start.",
    },
    {
      title: "Build",
      description:
        "We migrate or build out infrastructure in staged, reversible steps to avoid disrupting the live business.",
    },
    {
      title: "Scale",
      description:
        "We tune performance and cost continuously as usage grows, with monitoring in place from day one.",
    },
  ],
  technologies: [
    "AWS",
    "GCP",
    "Azure",
    "Terraform",
    "Kubernetes",
    "Docker",
    "Pulumi",
    "Datadog",
  ],
  industries,
  faqs: [
    {
      question: "Which cloud provider do you recommend?",
      answer:
        "It depends on your existing tooling, team expertise, and workload — we'll make a specific recommendation rather than defaulting to one provider.",
    },
    {
      question: "Can you migrate us without downtime?",
      answer:
        "In most cases, yes — we plan migrations in reversible stages specifically to avoid disruption to the live system.",
    },
    {
      question: "How do you help control cloud costs?",
      answer:
        "Through right-sizing infrastructure, reserved capacity planning, and ongoing cost monitoring, not just a one-time audit.",
    },
    {
      question: "Do you handle security and compliance requirements?",
      answer:
        "We build infrastructure aligned with industry-standard security practices and can work alongside your compliance and security teams on specific requirements.",
    },
  ],
  cta: {
    title: "Is your infrastructure ready for your next stage of growth?",
    description:
      "Tell us about your current setup, and we'll show you where the risk and cost actually are.",
  },
  metaTitle: "Cloud Solutions & Infrastructure Services",
  metaDescription:
    "Supereva Technology designs, migrates, and operates cloud infrastructure on AWS, GCP, and Azure — built for reliability, security, and cost control.",
  keywords: [
    "cloud solutions company",
    "cloud migration services",
    "AWS consulting",
    "infrastructure as code",
  ],
  relatedSlugs: ["devops", "enterprise-software", "ai-development"],
};
