import { siteConfig } from "@/constants/site";
import { getReadingTime } from "@/lib/reading-time";
import type { BlogPost, CaseStudy, ServicePageContent } from "@/types";

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function buildOrganizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${siteConfig.url}#organization`,
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.contactEmail,
    sameAs: Object.values(siteConfig.links),
  };
}

export function buildWebSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${siteConfig.url}#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    publisher: { "@id": `${siteConfig.url}#organization` },
  };
}

export function buildLocalBusinessSchema() {
  const base = {
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}#localbusiness`,
    name: siteConfig.legalName,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.contactEmail,
  };

  // Address is intentionally omitted until a real office location is
  // confirmed — LocalBusiness structured data is machine-read, so a
  // placeholder address here would be actively misleading, unlike copy.
  if (!siteConfig.address) {
    return base;
  }

  return {
    ...base,
    address: {
      "@type": "PostalAddress",
      ...siteConfig.address,
    },
  };
}

export function buildServiceSchema(service: ServicePageContent) {
  const url = new URL(`/services/${service.slug}`, siteConfig.url).toString();

  return {
    "@type": "Service",
    "@id": `${url}#service`,
    name: service.name,
    description: service.metaDescription,
    url,
    serviceType: service.name,
    provider: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.name} Offerings`,
      itemListElement: service.offerings.map((offering) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: offering.title,
          description: offering.description,
        },
      })),
    },
  };
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteConfig.url).toString(),
    })),
  };
}

export function buildFaqSchema(faqs: ServicePageContent["faqs"]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildArticleSchema(post: BlogPost) {
  const url = new URL(`/blog/${post.slug}`, siteConfig.url).toString();

  return {
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.metaDescription,
    url,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    wordCount: getReadingTime(post.content) * 200,
    articleSection: post.category,
    keywords: post.tags.join(", "),
    author: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

export function buildCaseStudySchema(caseStudy: CaseStudy) {
  const url = new URL(`/portfolio/${caseStudy.slug}`, siteConfig.url).toString();

  return {
    "@type": "Article",
    "@id": `${url}#case-study`,
    headline: caseStudy.title,
    description: caseStudy.metaDescription,
    url,
    articleSection: caseStudy.industry,
    keywords: caseStudy.technologies.join(", "),
    about: {
      "@type": "Thing",
      name: caseStudy.industry,
    },
    author: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

export function buildCaseStudyPageJsonLd(
  caseStudy: CaseStudy,
  breadcrumbs: BreadcrumbItem[]
) {
  return {
    "@context": "https://schema.org",
    "@graph": [buildCaseStudySchema(caseStudy), buildBreadcrumbSchema(breadcrumbs)],
  };
}

export function buildServicePageJsonLd(
  service: ServicePageContent,
  breadcrumbs: BreadcrumbItem[]
) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildServiceSchema(service),
      buildBreadcrumbSchema(breadcrumbs),
      buildFaqSchema(service.faqs),
    ],
  };
}

export function buildArticlePageJsonLd(post: BlogPost, breadcrumbs: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [buildArticleSchema(post), buildBreadcrumbSchema(breadcrumbs)],
  };
}

export function buildBreadcrumbPageJsonLd(breadcrumbs: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [buildBreadcrumbSchema(breadcrumbs)],
  };
}

export function jsonLdScriptProps(data: unknown) {
  return {
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(data).replace(/</g, "\\u003c"),
    },
  };
}
