import { Layers, RefreshCw, Rocket, Smartphone } from "lucide-react";

import { industries } from "@/constants/industries";
import type { ServicePageContent } from "@/types";

export const mobileAppDevelopment: ServicePageContent = {
  slug: "mobile-app-development",
  name: "Mobile App Development",
  eyebrow: "Mobile App Development",
  shortDescription:
    "Native and cross-platform iOS and Android apps engineered for performance and reliability.",
  heroHeadline: "Native-quality mobile apps, engineered to ship on both platforms.",
  heroDescription:
    "We design and build iOS and Android applications that feel native, perform reliably, and don't require two separate teams to maintain.",
  problem: {
    title: "Mobile apps fail in ways the App Store won't warn you about",
    description:
      "Beyond the build itself, most mobile projects run into the same friction: fragmented platforms, review delays, and performance that only shows up on real devices.",
    points: [
      {
        title: "Fragmented codebases",
        description:
          "Maintaining separate iOS and Android codebases doubles the cost of every feature and bug fix.",
      },
      {
        title: "App store rejections and delays",
        description:
          "Submission requirements and review policies catch teams off guard late in the process, delaying launches.",
      },
      {
        title: "Performance on real devices",
        description:
          "Apps that feel smooth on a flagship phone can lag badly on the mid-range devices most users actually own.",
      },
      {
        title: "Unreliable offline behavior",
        description:
          "Apps that assume constant connectivity break down exactly when users need them most.",
      },
    ],
  },
  offerings: [
    {
      icon: Smartphone,
      title: "Native iOS & Android Development",
      description:
        "Fully native applications where performance and platform integration matter most.",
    },
    {
      icon: Layers,
      title: "Cross-Platform Engineering",
      description:
        "Single-codebase apps built on React Native or Flutter, without sacrificing a native feel.",
    },
    {
      icon: Rocket,
      title: "App Store Optimization & Release Management",
      description:
        "Managing submissions, review feedback, and release cadence so launches stay on schedule.",
    },
    {
      icon: RefreshCw,
      title: "Offline-First & Sync Architecture",
      description:
        "Data architectures that keep apps usable and consistent even with unreliable connectivity.",
    },
  ],
  process: [
    {
      title: "Discover",
      description:
        "We clarify which platforms, devices, and offline scenarios actually matter for your users before choosing an approach.",
    },
    {
      title: "Design",
      description:
        "We decide between native and cross-platform based on performance needs and team constraints, not by default preference.",
    },
    {
      title: "Build",
      description:
        "We ship in testable increments, with real devices in the loop from early in development, not just before release.",
    },
    {
      title: "Scale",
      description:
        "We manage store submissions, monitor crash and performance data, and iterate post-launch.",
    },
  ],
  technologies: [
    "Swift",
    "Kotlin",
    "React Native",
    "Flutter",
    "Firebase",
    "GraphQL",
    "Fastlane",
    "SQLite",
  ],
  industries,
  faqs: [
    {
      question: "Should we build native or cross-platform?",
      answer:
        "It depends on your performance requirements, budget, and team — we'll give you a clear recommendation after understanding your use case, not a default answer.",
    },
    {
      question: "Who handles App Store and Play Store submission?",
      answer:
        "We do, including managing review feedback and re-submissions, so launches aren't delayed by process surprises.",
    },
    {
      question: "Can you take over an existing app?",
      answer:
        "Yes, we regularly take on existing codebases for new feature work, performance fixes, or platform migrations.",
    },
    {
      question: "How do you handle offline usage?",
      answer:
        "We design explicit offline and sync behavior as part of the architecture, not as an afterthought bolted on later.",
    },
  ],
  cta: {
    title: "Ready to build a mobile app people actually want to use?",
    description:
      "Tell us about your product and platforms, and we'll map out the fastest reliable path to launch.",
  },
  metaTitle: "Mobile App Development Services",
  metaDescription:
    "Supereva Technology builds native and cross-platform iOS and Android apps engineered for performance, reliability, and fast App Store approval.",
  keywords: [
    "mobile app development company",
    "iOS app development",
    "Android app development",
    "React Native development",
  ],
  relatedSlugs: ["ui-ux-design", "cloud-solutions", "ai-development"],
};
