import type { CaseStudy } from "@/types";

export const fleetVisibilityPlatform: CaseStudy = {
  slug: "fleet-visibility-platform",
  title: "Real-Time Fleet Visibility Platform for a Regional Logistics Operator",
  clientDescriptor: "A regional logistics operator",
  industry: "Logistics & Supply Chain",
  serviceSlug: "custom-software-development",
  summary:
    "Giving dispatchers and customers real-time visibility into fleet location and delivery status, replacing a phone-based tracking process.",
  challenge: {
    intro:
      "Dispatchers tracked deliveries primarily through phone calls to drivers, and customers had no way to check delivery status themselves.",
    points: [
      "Dispatchers spent a large share of their day fielding status-check calls from both drivers and customers.",
      "Delayed shipments were often discovered only after a customer complained.",
      "There was no historical record of delivery performance to spot recurring problem routes.",
    ],
  },
  solution: {
    intro:
      "We built a real-time tracking and dispatch platform that pulls GPS data directly from existing fleet hardware into a live dispatcher dashboard.",
    points: [
      "Built a dispatcher dashboard showing live fleet location and delivery status across all active routes.",
      "Added automated customer notifications for delivery status changes, reducing inbound status-check calls.",
      "Logged historical delivery data to make recurring problem routes visible for the first time.",
    ],
  },
  technologies: ["Node.js", "React", "PostgreSQL", "Kafka", "AWS", "Mapbox"],
  results: {
    intro:
      "Dispatchers spent noticeably less time on status-check calls, and delayed shipments started getting caught before customers had to ask.",
    metrics: [
      { label: "Dispatcher call volume", value: "Significantly reduced" },
      { label: "Delivery visibility", value: "Real-time" },
      { label: "Exception handling", value: "Faster" },
    ],
  },
  screenshotCount: 3,
  cta: {
    title: "Still tracking deliveries over the phone?",
    description:
      "Tell us how your dispatch process works today, and we'll show you what real-time visibility could look like.",
  },
  metaTitle: "Case Study: Real-Time Fleet Visibility Platform",
  metaDescription:
    "How Supereva Technology built a real-time fleet tracking and dispatch platform for a regional logistics operator.",
  keywords: [
    "logistics software case study",
    "fleet tracking platform",
    "dispatch software development",
    "custom software development case study",
  ],
};
