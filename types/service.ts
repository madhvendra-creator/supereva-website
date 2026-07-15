import type { LucideIcon } from "lucide-react";

export type ProblemPoint = {
  title: string;
  description: string;
};

export type ServiceOffering = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type Industry = {
  icon: LucideIcon;
  name: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type ServicePageContent = {
  slug: string;
  name: string;
  eyebrow: string;
  shortDescription: string;
  heroHeadline: string;
  heroDescription: string;
  problem: {
    title: string;
    description: string;
    points: ProblemPoint[];
  };
  offerings: ServiceOffering[];
  process: ProcessStep[];
  technologies: string[];
  industries: Industry[];
  faqs: Faq[];
  cta: {
    title: string;
    description: string;
  };
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  relatedSlugs: string[];
};
