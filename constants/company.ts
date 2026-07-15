import {
  Briefcase,
  Clock,
  Eye,
  Handshake,
  Palette,
  Rocket,
  Sparkle,
  Target,
  TrendingUp,
  Users2,
} from "lucide-react";

import type {
  LeadershipMember,
  RoleCategory,
  StatItem,
  TimelineMilestone,
  Value,
} from "@/types";

export const missionStatement =
  "To build AI-first software that helps ambitious teams do more with less, without cutting corners on quality or craft.";

export const visionStatement =
  "A future where every company, not just the biggest ones, has access to AI-native software built to enterprise standards.";

export const whySupereva: Value[] = [
  {
    icon: Handshake,
    title: "An engineering-first culture",
    description:
      "We're builders first. Every engagement is led by people who actually write and ship the code.",
  },
  {
    icon: Eye,
    title: "Transparent by default",
    description:
      "You get real visibility into progress, decisions, and trade-offs, not a black box.",
  },
  {
    icon: TrendingUp,
    title: "Built to scale with you",
    description:
      "We architect for where you're headed next, not just the next release.",
  },
  {
    icon: Handshake,
    title: "Partners past launch",
    description:
      "We stay engaged after ship day, because that's when most software actually earns its value.",
  },
];

export const values: Value[] = [
  {
    icon: Sparkle,
    title: "Craftsmanship",
    description:
      "We take pride in the details others skip. Code quality and product polish are not optional extras.",
  },
  {
    icon: Target,
    title: "Ownership",
    description:
      "We treat every project like it's our own product, not a ticket to close.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "We share real progress and real trade-offs, especially when the news isn't perfect.",
  },
  {
    icon: Rocket,
    title: "Curiosity",
    description:
      "We stay close to how AI and software actually change, not just how they're marketed.",
  },
  {
    icon: Clock,
    title: "Respect for time",
    description:
      "We run projects that respect everyone's time: clear scope, clear communication, no surprises.",
  },
];

export const companyTimeline: TimelineMilestone[] = [
  {
    phase: "Founding",
    title: "Where it started",
    description:
      "Supereva Technology was founded to build AI-native software the right way, from architecture to delivery.",
  },
  {
    phase: "Early engagements",
    title: "Proving the approach",
    description:
      "We partnered with our first clients to design and ship production software and AI systems.",
  },
  {
    phase: "Growing the team",
    title: "Scaling engineering depth",
    description:
      "We grew our engineering team to take on larger, more complex platform and AI engineering work.",
  },
  {
    phase: "Today",
    title: "Where we are now",
    description:
      "We continue to take on ambitious engineering work and refine how we build AI-first software.",
  },
];

export const leadershipTeam: LeadershipMember[] = [
  {
    role: "Founder & CEO",
    name: "Madhvendra Tomar",
    bio: "",
  },
  {
    role: "Co-Founder & CTO",
    name: "Rohan Desai",
    bio: "",
  },
  {
    role: "Head of Engineering",
    name: "Arjun Patel",
    bio: "",
  },
  {
    role: "Head of Design",
    name: "Priya Sharma",
    bio: "",
  },
];

export const companyStats: StatItem[] = [
  { label: "Team members", value: "Coming soon" },
  { label: "Client engagements", value: "Coming soon" },
  { label: "Countries served", value: "Coming soon" },
  { label: "Years of operation", value: "Coming soon" },
];

export const openRoleCategories: RoleCategory[] = [
  {
    icon: Rocket,
    title: "Engineering",
    description: "Full-stack, AI, and platform engineering roles.",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Product design and UX research roles.",
  },
  {
    icon: Briefcase,
    title: "Product & Strategy",
    description: "Product management and AI strategy roles.",
  },
  {
    icon: Users2,
    title: "Operations",
    description: "Business operations and client success roles.",
  },
];
