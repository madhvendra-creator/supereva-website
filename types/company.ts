import type { LucideIcon } from "lucide-react";

export type Value = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type TimelineMilestone = {
  phase: string;
  title: string;
  description: string;
};

export type LeadershipMember = {
  role: string;
  name: string;
  bio: string;
};

export type StatItem = {
  label: string;
  value: string;
};

export type RoleCategory = {
  icon: LucideIcon;
  title: string;
  description: string;
};
