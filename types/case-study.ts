export type CaseStudyMetric = {
  label: string;
  value: string;
};

export type CaseStudySection = {
  intro: string;
  points: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  clientDescriptor: string;
  industry: string;
  serviceSlug: string;
  summary: string;
  challenge: CaseStudySection;
  solution: CaseStudySection;
  technologies: string[];
  results: {
    intro: string;
    metrics: CaseStudyMetric[];
  };
  screenshotCount: number;
  screenshots: string[];
  image?: string;
  cta: {
    title: string;
    description: string;
  };
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
};
