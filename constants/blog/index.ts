import { boringTechnologyByDefault } from "./boring-technology-by-default";
import { codebaseReadyForRewrite } from "./codebase-ready-for-rewrite";
import { costOfSlowCicd } from "./cost-of-slow-cicd";
import { designingForEnterpriseTrust } from "./designing-for-enterprise-trust";
import { evaluatingAiVendors } from "./evaluating-ai-vendors";
import { ragNotASilverBullet } from "./rag-not-a-silver-bullet";

import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  evaluatingAiVendors,
  ragNotASilverBullet,
  codebaseReadyForRewrite,
  boringTechnologyByDefault,
  designingForEnterpriseTrust,
  costOfSlowCicd,
].sort(
  (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
);

export const postSlugs = blogPosts.map((post) => post.slug);

export const blogCategories = Array.from(
  new Set(blogPosts.map((post) => post.category))
);

export const blogTags = Array.from(
  new Set(blogPosts.flatMap((post) => post.tags))
).sort();

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
