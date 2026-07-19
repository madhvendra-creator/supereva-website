import { caseStudies } from "@/constants/case-studies";
import { industries } from "@/constants/industries";
import { services } from "@/constants/services";
import type { FooterLinkGroup, MegaNavItem, SocialLink } from "@/types";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.superevatechnology.com";

const siteDomain = new URL(siteUrl).hostname.replace(/^www\./, "");

export const siteConfig = {
  name: "Supereva",
  legalName: "Supereva Technology Private Limited",
  url: siteUrl,
  description:
    "Supereva Technology is an AI, product development, and data engineering company building AI-first software products and platforms.",
  keywords: ["Supereva", "AI software", "AI-first company", "product engineering"],
  contactEmail: "info@superevatechnology.com",
  contactPhone: "+91 78792 02985",
  links: {
    instagram: "https://www.instagram.com/superevatechnology/",
    facebook: "https://www.facebook.com/profile.php?id=61552211918589",
    linkedin: "https://www.linkedin.com/company/supereva-technology-private-limited/?viewAsMember=true",
  },
  // Left unset until a real office location is confirmed — do not populate with
  // a placeholder address, since LocalBusiness structured data is machine-read.
  address: undefined as
    | {
        streetAddress: string;
        addressLocality: string;
        addressRegion: string;
        postalCode: string;
        addressCountry: string;
      }
    | undefined,
} as const;

const aiServiceSlugs = ["ai-development", "ai-automation", "enterprise-software"];

const aiServices = aiServiceSlugs
  .map((slug) => services.find((service) => service.slug === slug))
  .filter((service): service is NonNullable<typeof service> => Boolean(service));

const otherServices = services.filter(
  (service) => !aiServiceSlugs.includes(service.slug)
);

const featuredCaseStudySlugs = [
  "ai-underwriting-platform",
  "patient-intake-automation",
  "headless-storefront-replatform",
];

const featuredCaseStudies = featuredCaseStudySlugs
  .map((slug) => caseStudies.find((caseStudy) => caseStudy.slug === slug))
  .filter((caseStudy): caseStudy is NonNullable<typeof caseStudy> =>
    Boolean(caseStudy)
  );

export const mainNavItems: MegaNavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "AI & GenAI",
    columns: [
      {
        title: "AI & GenAI",
        links: aiServices.map((service) => ({
          label: service.name,
          href: `/services/${service.slug}`,
          description: service.shortDescription,
        })),
      },
    ],
  },
  {
    label: "Services",
    columns: [
      {
        title: "Services",
        links: otherServices.map((service) => ({
          label: service.name,
          href: `/services/${service.slug}`,
          description: service.shortDescription,
        })),
      },
    ],
  },
  {
    label: "Portfolio",
    columns: [
      {
        title: "Portfolio",
        links: [
          { label: "Case Studies", href: "/portfolio" },
          ...featuredCaseStudies.map((caseStudy) => ({
            label: caseStudy.title,
            href: `/portfolio/${caseStudy.slug}`,
            description: caseStudy.summary,
          })),
        ],
      },
    ],
  },
  {
    label: "Industries",
    columns: [
      {
        title: "Industries",
        // TODO: link each industry to a dedicated /industries/[slug] page once
        // those routes exist — routing to /contact for now.
        links: industries.map((industry) => ({
          label: industry.name,
          href: "/contact",
        })),
      },
    ],
  },
  {
    label: "Company",
    columns: [
      {
        title: "Company",
        links: [
          { label: "About", href: "/company/about" },
          { label: "Leadership", href: "/company/leadership" },
          { label: "Careers", href: "/company/careers" },
        ],
      },
    ],
  },
  { label: "Blog", href: "/blog" },
];

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/company/about" },
      { label: "Leadership", href: "/company/leadership" },
      { label: "Careers", href: "/company/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: services.map((service) => ({
      label: service.name,
      href: `/services/${service.slug}`,
    })),
  },
  {
    title: "Industries",
    links: industries.map((industry) => ({
      // TODO: point to dedicated industry pages once they exist.
      label: industry.name,
      href: "/contact",
    })),
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Case Studies", href: "/portfolio" },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: siteConfig.links.instagram, icon: "instagram" },
  { label: "Facebook", href: siteConfig.links.facebook, icon: "facebook" },
  { label: "LinkedIn", href: siteConfig.links.linkedin, icon: "linkedin" },
];
