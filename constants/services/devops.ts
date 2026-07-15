import { GitBranch, LineChart, Settings2, ShieldAlert } from "lucide-react";

import { industries } from "@/constants/industries";
import type { ServicePageContent } from "@/types";

export const devops: ServicePageContent = {
  slug: "devops",
  name: "DevOps",
  eyebrow: "DevOps",
  shortDescription:
    "CI/CD, observability, and infrastructure automation that let teams ship faster with fewer incidents.",
  heroHeadline: "Ship faster, break less, sleep better.",
  heroDescription:
    "We design CI/CD pipelines, observability, and infrastructure automation so your team can deploy with confidence instead of dread.",
  problem: {
    title: "Slow, fragile releases are a process problem, not a people problem",
    description:
      "Teams don't lack talent, they lack pipelines and visibility they can trust. That gap shows up as dreaded deploys, flaky CI, and incidents discovered by customers first.",
    points: [
      {
        title: "Deploys everyone dreads",
        description:
          "Manual, error-prone deployment processes slow teams down and make releases a source of anxiety.",
      },
      {
        title: "Flaky CI pipelines",
        description:
          "Unreliable tests and builds erode trust in the pipeline, so teams start skipping checks altogether.",
      },
      {
        title: "Flying blind in production",
        description:
          "Without real observability, teams find out about problems from customers instead of from their systems.",
      },
      {
        title: "Firefighting instead of building",
        description:
          "Teams stuck reacting to recurring incidents never get time to fix the root causes.",
      },
    ],
  },
  offerings: [
    {
      icon: GitBranch,
      title: "CI/CD Pipeline Design",
      description:
        "Reliable, fast pipelines that make deploys routine instead of risky.",
    },
    {
      icon: LineChart,
      title: "Observability & Monitoring",
      description:
        "Metrics, logging, and tracing that surface problems before customers do.",
    },
    {
      icon: Settings2,
      title: "Infrastructure Automation",
      description:
        "Automating repetitive operational work so engineers spend time building, not maintaining.",
    },
    {
      icon: ShieldAlert,
      title: "Incident Response & Reliability Engineering",
      description:
        "Structured incident response and reliability practices that reduce repeat failures.",
    },
  ],
  process: [
    {
      title: "Discover",
      description:
        "We audit your current deployment process and incident history to find where the real risk lives.",
    },
    {
      title: "Design",
      description:
        "We design pipelines and monitoring around your actual failure modes, not a generic best-practices checklist.",
    },
    {
      title: "Build",
      description:
        "We implement automation incrementally, so improvements ship without freezing ongoing development.",
    },
    {
      title: "Scale",
      description:
        "We tune alerting and reliability practices as your systems and team grow, to keep signal-to-noise high.",
    },
  ],
  technologies: [
    "GitHub Actions",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Prometheus",
    "Grafana",
    "Datadog",
    "Argo CD",
  ],
  industries,
  faqs: [
    {
      question: "Do you work with our existing CI/CD tooling?",
      answer:
        "Yes, we typically improve and extend what's already in place rather than replacing it outright, unless a rebuild is genuinely warranted.",
    },
    {
      question: "Can you provide on-call or incident response support?",
      answer:
        "We can, depending on the engagement, from building the reliability foundation to ongoing operational support.",
    },
    {
      question: "How do you decide what to automate first?",
      answer:
        "Based on where manual work is creating the most risk or lost time today, not automation for its own sake.",
    },
    {
      question: "Will this require us to change our whole tech stack?",
      answer:
        "Rarely. Most improvements come from better automation and observability around your existing stack, not a wholesale replacement.",
    },
  ],
  cta: {
    title: "Tired of deploys that feel like a gamble?",
    description:
      "Tell us about your current pipeline, and we'll show you where the biggest reliability gains are.",
  },
  metaTitle: "DevOps Services & Engineering",
  metaDescription:
    "Supereva Technology builds CI/CD pipelines, observability, and infrastructure automation that let teams ship faster with fewer incidents.",
  keywords: [
    "DevOps services",
    "CI/CD consulting",
    "site reliability engineering",
    "infrastructure automation",
  ],
  relatedSlugs: ["cloud-solutions", "enterprise-software", "ai-automation"],
};
