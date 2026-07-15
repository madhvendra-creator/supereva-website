export type BlogContentBlock =
  | { type: "heading"; id: string; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export type BlogAuthor = {
  name: string;
  role: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  author: BlogAuthor;
  publishedAt: string;
  content: BlogContentBlock[];
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
};
