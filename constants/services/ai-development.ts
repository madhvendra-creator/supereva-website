import { Bot, Cpu, Database, Workflow } from "lucide-react";

import { industries } from "@/constants/industries";
import type { ServicePageContent } from "@/types";

export const aiDevelopment: ServicePageContent = {
  slug: "ai-development",
  name: "AI Development",
  eyebrow: "AI Development",
  shortDescription:
    "Production-grade AI systems, from LLM applications to RAG and agents.",
  heroHeadline: "Custom AI systems built for production, not demos.",
  heroDescription:
    "Supereva Technology designs and builds AI systems that hold up in production: reliable, evaluated, and integrated into how your business actually runs.",
  problem: {
    title: "Most AI prototypes never make it to production",
    description:
      "It's easy to demo a model. It's hard to ship one that's reliable, cost-controlled, and trusted by real users. Most teams get stuck between the two.",
    points: [
      {
        title: "Prototypes that never ship",
        description:
          "Most AI proofs of concept stall before production because reliability, cost, and integration were never designed in.",
      },
      {
        title: "Unpredictable model behavior",
        description:
          "Without evaluation and guardrails, LLM outputs drift, hallucinate, or fail silently in ways that erode user trust.",
      },
      {
        title: "Data that isn't AI-ready",
        description:
          "Valuable data locked in disconnected systems can't power retrieval or fine-tuning until it's structured and accessible.",
      },
      {
        title: "Runaway inference costs",
        description:
          "Without careful architecture, token usage and compute spend scale faster than the value the system delivers.",
      },
    ],
  },
  offerings: [
    {
      icon: Bot,
      title: "LLM Application Development",
      description:
        "Production-ready applications powered by large language models, from chat interfaces to embedded copilots.",
    },
    {
      icon: Database,
      title: "Retrieval-Augmented Generation",
      description:
        "Knowledge retrieval systems that ground model outputs in your own data, accurately and securely.",
    },
    {
      icon: Workflow,
      title: "AI Agents & Workflow Automation",
      description:
        "Autonomous and semi-autonomous agents that execute multi-step tasks across your existing tools.",
    },
    {
      icon: Cpu,
      title: "Model Evaluation & Fine-Tuning",
      description:
        "Rigorous evaluation pipelines and fine-tuning work that make model behavior predictable in production.",
    },
  ],
  process: [
    {
      title: "Discover",
      description:
        "We map your use case, data sources, and success criteria before selecting a single model or framework.",
    },
    {
      title: "Design",
      description:
        "We choose the right architecture, model, and retrieval strategy, and prove it out against real evaluation data.",
    },
    {
      title: "Build",
      description:
        "Engineers integrate the system into your product and infrastructure, with guardrails and fallback logic in place.",
    },
    {
      title: "Scale",
      description:
        "We monitor accuracy, latency, and cost in production, and keep tuning the system as usage grows.",
    },
  ],
  technologies: [
    "Python",
    "PyTorch",
    "OpenAI API",
    "Anthropic API",
    "LangChain",
    "LlamaIndex",
    "Pinecone",
    "Hugging Face",
  ],
  industries,
  faqs: [
    {
      question: "Do you build with our existing AI provider, or recommend one?",
      answer:
        "Both — we can build on top of the model provider you've already committed to, or help you evaluate providers against your accuracy, latency, and cost requirements before committing.",
    },
    {
      question: "How do you prevent hallucinations in production?",
      answer:
        "Through retrieval grounding, structured evaluation sets, and guardrails that catch low-confidence outputs before they reach users — not just prompt tweaking.",
    },
    {
      question: "Can you work with our existing data infrastructure?",
      answer:
        "Yes. We typically start by assessing what's usable as-is and what needs light preparation before it can power retrieval or fine-tuning.",
    },
    {
      question: "What happens after the system is live?",
      answer:
        "We stay engaged post-launch to monitor real-world accuracy and cost, since model behavior and usage patterns both shift over time.",
    },
  ],
  cta: {
    title: "Ready to put AI into production?",
    description:
      "Tell us what you're trying to build, and we'll tell you what it actually takes to ship it reliably.",
  },
  metaTitle: "AI Development Services",
  metaDescription:
    "Production-grade AI development from Supereva Technology — LLM applications, RAG systems, AI agents, and model evaluation built to run reliably at scale.",
  keywords: [
    "AI development",
    "LLM application development",
    "RAG systems",
    "AI agents",
    "custom AI development company",
  ],
  relatedSlugs: ["ai-automation", "custom-software-development", "cloud-solutions"],
};
