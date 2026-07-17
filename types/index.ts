export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export type MegaNavColumn = {
  title: string;
  links: NavItem[];
};

export type MegaNavItem = {
  label: string;
  href?: string;
  columns?: MegaNavColumn[];
};

export type SocialLink = {
  label: string;
  href: string;
  icon: "instagram" | "facebook" | "linkedin" | "youtube";
};

export type FooterLinkGroup = {
  title: string;
  links: NavItem[];
};

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
};

export * from "./service";
export * from "./company";
export * from "./case-study";
export * from "./blog";
