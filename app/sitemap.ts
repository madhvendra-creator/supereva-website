import type { MetadataRoute } from "next";

import { caseStudySlugs } from "@/constants/case-studies";
import { blogPosts } from "@/constants/blog";
import { serviceSlugs } from "@/constants/services";
import { siteConfig } from "@/constants/site";

function url(path: string) {
  return new URL(path, siteConfig.url).toString();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = [
    { url: url("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: url("/services"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: url("/portfolio"), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: url("/blog"), lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: url("/company"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/company/about"), lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    {
      url: url("/company/leadership"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: url("/company/careers"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    { url: url("/contact"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const serviceEntries: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: url(`/services/${slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const caseStudyEntries: MetadataRoute.Sitemap = caseStudySlugs.map((slug) => ({
    url: url(`/portfolio/${slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: url(`/blog/${post.slug}`),
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...serviceEntries, ...caseStudyEntries, ...blogEntries];
}
