import type { CaseStudy } from "@/types";

export const aiUnderwritingPlatform: CaseStudy = {
  slug: "ai-underwriting-platform",
  title: "AI-Powered Underwriting Platform for a Growing Lender",
  clientDescriptor: "A Series B fintech lender",
  industry: "Fintech & Banking",
  serviceSlug: "ai-development",
  image: "/images/fintech.png",
  summary:
    "Replacing a manual underwriting process with an AI-assisted platform that scores risk consistently and scales with loan volume.",
  challenge: {
    intro:
      "The client's underwriting process was entirely manual, and it was starting to buckle under growth. Loan volume had tripled in a year, but the underwriting team hadn't grown to match it.",
    points: [
      "Risk decisions varied significantly between underwriters reviewing similar applications.",
      "Average time-to-decision was slipping as application volume grew, hurting conversion.",
      "There was no consistent, auditable record of why a given risk decision was made.",
    ],
  },
  solution: {
    intro:
      "We designed and built an AI-assisted underwriting platform that scores risk consistently while keeping a human underwriter in the loop for final decisions.",
    points: [
      "Built a risk-scoring model grounded in the client's historical loan performance data, not a generic off-the-shelf score.",
      "Integrated the scoring engine directly into the existing loan origination system, so underwriters didn't need to switch tools.",
      "Added structured explanations for every score, giving underwriters and auditors a clear, consistent rationale for each decision.",
    ],
  },
  technologies: ["Python", "PyTorch", "LangChain", "PostgreSQL", "AWS", "Next.js"],
  results: {
    intro:
      "Within the first full quarter after launch, the underwriting team was processing significantly more applications without adding headcount.",
    metrics: [
      { label: "Manual review time", value: "-70%" },
      { label: "Loan volume scaled", value: "3x" },
      { label: "Risk decisions", value: "Fully auditable" },
    ],
  },
  screenshotCount: 3,
  cta: {
    title: "Have a manual process that's starting to strain under growth?",
    description:
      "Tell us about your workflow, and we'll show you what an AI-assisted version could look like.",
  },
  metaTitle: "Case Study: AI-Powered Underwriting Platform",
  metaDescription:
    "How Supereva Technology built an AI-assisted underwriting platform for a growing fintech lender, cutting manual review time by 70%.",
  keywords: [
    "AI underwriting case study",
    "fintech AI development",
    "risk scoring platform",
    "AI development case study",
  ],
};
