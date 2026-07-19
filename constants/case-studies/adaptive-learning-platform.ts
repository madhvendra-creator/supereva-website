import type { CaseStudy } from "@/types";

export const adaptiveLearningPlatform: CaseStudy = {
  slug: "adaptive-learning-platform",
  title: "Adaptive Learning Platform for an Online Education Provider",
  clientDescriptor: "An online education provider",
  industry: "Education & EdTech",
  serviceSlug: "ai-development",
  image: "/images/edtech.png",
  summary:
    "Replacing one-size-fits-all course content with an adaptive platform that responds to how individual students actually learn.",
  challenge: {
    intro:
      "Every student moved through the same fixed course content at the same pace, regardless of where they were actually struggling.",
    points: [
      "Drop-off rates were highest at a handful of specific lessons, but instructors had no systematic way to see that.",
      "Struggling students often didn't surface until they'd already disengaged from the course.",
      "Instructors were building progress reports by hand, pulling data from several disconnected tools.",
    ],
  },
  solution: {
    intro:
      "We built an adaptive learning platform that adjusts content and pacing per student, with analytics that surface struggling students early.",
    points: [
      "Built a recommendation layer that adjusts lesson sequencing based on individual student performance.",
      "Added instructor-facing analytics that flag at-risk students automatically, instead of waiting for manual review.",
      "Consolidated progress reporting into a single dashboard, replacing several disconnected spreadsheets.",
    ],
  },
  technologies: ["Python", "React", "PostgreSQL", "OpenAI API", "AWS"],
  results: {
    intro:
      "Instructors gained visibility into student progress they'd never had before, and course completion rates improved as a result.",
    metrics: [
      { label: "Course completion", value: "Improved" },
      { label: "At-risk students flagged", value: "Automatically" },
      { label: "Manual reporting time", value: "Largely eliminated" },
    ],
  },
  screenshotCount: 3,
  screenshots: [
    "/images/screenshots/adaptive-learning-1.png",
    "/images/screenshots/adaptive-learning-2.png",
    "/images/screenshots/adaptive-learning-3.png",
  ],
  cta: {
    title: "Looking to make your course content actually adapt to learners?",
    description:
      "Tell us about your platform, and we'll show you where adaptive learning would have the most impact.",
  },
  metaTitle: "Case Study: Adaptive Learning Platform",
  metaDescription:
    "How Supereva Technology built an adaptive learning platform for an online education provider, improving completion rates and instructor visibility.",
  keywords: [
    "edtech case study",
    "adaptive learning platform",
    "AI in education",
    "AI development case study",
  ],
};
