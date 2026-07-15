import { Bot, FileText, Link2, Workflow } from "lucide-react";

import { industries } from "@/constants/industries";
import type { ServicePageContent } from "@/types";

export const aiAutomation: ServicePageContent = {
  slug: "ai-automation",
  name: "AI Automation",
  eyebrow: "AI Automation",
  shortDescription:
    "Reliable AI-powered automation for repetitive workflows, document processing, and internal operations.",
  heroHeadline: "Automate the busywork. Free your team for the real work.",
  heroDescription:
    "We design AI-powered automations that handle repetitive processes reliably, so your team spends time on judgment calls, not data entry.",
  problem: {
    title: "Manual work quietly caps how fast you can grow",
    description:
      "Every hour spent on repetitive, rules-based work is an hour not spent on the judgment calls that actually need a person, and most automation attempts break the moment reality gets messy.",
    points: [
      {
        title: "Manual work that doesn't scale",
        description:
          "Repetitive tasks consume hours that should be spent on higher-value work as the business grows.",
      },
      {
        title: "Automations that break on edge cases",
        description:
          "Brittle scripts and rules-based automation fail the moment reality doesn't match the happy path.",
      },
      {
        title: "Disconnected tools",
        description:
          "Data re-entered by hand across multiple systems introduces errors and wastes time.",
      },
      {
        title: "No visibility into what's actually happening",
        description:
          "Automated processes without proper logging make it hard to trust or debug when something goes wrong.",
      },
    ],
  },
  offerings: [
    {
      icon: Workflow,
      title: "Workflow & Process Automation",
      description:
        "Automating multi-step business processes end to end, with clear handling for exceptions.",
    },
    {
      icon: Bot,
      title: "AI Agents for Internal Operations",
      description:
        "Agents that handle internal requests and tasks across the tools your team already uses.",
    },
    {
      icon: FileText,
      title: "Document & Data Processing Automation",
      description:
        "Extracting and processing structured and unstructured data at a fraction of the manual effort.",
    },
    {
      icon: Link2,
      title: "Systems Integration",
      description:
        "Connecting automation directly into your existing stack instead of creating another silo.",
    },
  ],
  process: [
    {
      title: "Discover",
      description:
        "We map the actual workflow, including exceptions and edge cases, before designing any automation.",
    },
    {
      title: "Design",
      description:
        "We decide where AI judgment adds value versus where deterministic rules are more reliable and cheaper.",
    },
    {
      title: "Build",
      description:
        "We build with logging, fallbacks, and human-in-the-loop checkpoints where the cost of an error is high.",
    },
    {
      title: "Scale",
      description:
        "We monitor accuracy and volume in production, and expand automation as confidence in the system grows.",
    },
  ],
  technologies: [
    "Python",
    "LangChain",
    "OpenAI API",
    "Workflow Orchestration Tools",
    "PostgreSQL",
    "FastAPI",
  ],
  industries,
  faqs: [
    {
      question: "What kinds of tasks can actually be automated?",
      answer:
        "Most repetitive, rules-based, or document-heavy processes are good candidates — we'll assess your specific workflows during discovery rather than guessing upfront.",
    },
    {
      question: "How do you make sure the automation is reliable?",
      answer:
        "Through logging, fallback handling, and human-in-the-loop review for high-stakes decisions, rather than assuming full autonomy from day one.",
    },
    {
      question: "Will this replace our existing tools?",
      answer:
        "Usually not — most automations integrate with the tools your team already uses instead of replacing them.",
    },
    {
      question: "How long before we see results?",
      answer:
        "Most engagements target a working first automation within weeks, with further workflows added incrementally after that.",
    },
  ],
  cta: {
    title: "What's eating your team's time that shouldn't be?",
    description:
      "Tell us about the manual process slowing you down, and we'll show you what automating it actually looks like.",
  },
  metaTitle: "AI Automation Services",
  metaDescription:
    "Supereva Technology builds reliable AI-powered automation for repetitive workflows, document processing, and internal operations.",
  keywords: [
    "AI automation services",
    "business process automation",
    "workflow automation company",
    "intelligent automation",
  ],
  relatedSlugs: ["ai-development", "devops", "enterprise-software"],
};
