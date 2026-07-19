import type { CaseStudy } from "@/types";

export const predictiveMaintenanceSystem: CaseStudy = {
  slug: "predictive-maintenance-system",
  title: "Predictive Maintenance System for an Industrial Manufacturer",
  clientDescriptor: "A mid-size industrial manufacturer",
  industry: "Manufacturing",
  serviceSlug: "ai-development",
  summary:
    "Shifting equipment maintenance from reactive to predictive using sensor data and machine learning models.",
  challenge: {
    intro:
      "Equipment maintenance was purely reactive: machines ran until something failed, and unplanned downtime was a direct hit to production schedules.",
    points: [
      "Unplanned downtime was the single largest source of production delays on the floor.",
      "Sensor data from equipment was being collected but never systematically analyzed.",
      "Maintenance teams had no reliable way to prioritize which machines needed attention first.",
    ],
  },
  solution: {
    intro:
      "We built a predictive maintenance system that analyzes existing sensor data to flag equipment at risk of failure before it happens.",
    points: [
      "Connected existing equipment sensor data into a centralized pipeline instead of leaving it siloed per machine.",
      "Trained models to flag early warning signs of failure specific to each equipment type.",
      "Built a maintenance dashboard that prioritizes machines by predicted risk, not just age or schedule.",
    ],
  },
  technologies: ["Python", "PyTorch", "Kafka", "PostgreSQL", "Grafana", "AWS IoT"],
  results: {
    intro:
      "Maintenance shifted from a purely reactive schedule to one guided by actual equipment risk, catching problems before they caused downtime.",
    metrics: [
      { label: "Unplanned downtime", value: "Reduced" },
      { label: "Maintenance approach", value: "Reactive to predictive" },
      { label: "Equipment lifespan", value: "Extended" },
    ],
  },
  screenshotCount: 3,
  screenshots: [
    "/images/screenshots/predictive-maintenance-1.png",
    "/images/screenshots/predictive-maintenance-2.png",
    "/images/screenshots/predictive-maintenance-3.png",
  ],
  cta: {
    title: "Losing production time to unplanned downtime?",
    description:
      "Tell us about your equipment and data, and we'll show you what predictive maintenance would take to stand up.",
  },
  metaTitle: "Case Study: Predictive Maintenance System",
  metaDescription:
    "How Supereva Technology built a predictive maintenance system for an industrial manufacturer, reducing unplanned downtime.",
  keywords: [
    "predictive maintenance case study",
    "manufacturing AI",
    "industrial IoT",
    "AI development case study",
  ],
};
