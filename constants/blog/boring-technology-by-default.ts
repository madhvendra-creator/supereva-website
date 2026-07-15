import type { BlogPost } from "@/types";

export const boringTechnologyByDefault: BlogPost = {
  slug: "why-we-default-to-boring-technology",
  title: "Why We Default to Boring Technology (and When We Don't)",
  excerpt:
    "Choosing a tech stack is a risk decision disguised as a technical one. Here's how we actually decide when to reach for something new.",
  category: "Engineering Culture",
  tags: ["Tech Stack", "Engineering Culture", "Architecture"],
  author: { name: "Supereva Team", role: "Engineering" },
  publishedAt: "2026-06-08",
  content: [
    {
      type: "paragraph",
      text: "Every engineering team eventually has the conversation: do we build this the proven way, or the new way? We default to proven, well-understood technology far more often than engineers might expect from a company that builds AI-first software, and it's a deliberate choice, not a lack of curiosity.",
    },
    {
      type: "heading",
      id: "a-tech-choice-is-a-risk-decision",
      text: "A tech choice is a risk decision, not just a technical one",
    },
    {
      type: "paragraph",
      text: "When we choose a database, a framework, or a queue, we're not just picking the best API. We're deciding how much operational risk a client is taking on, how easy it will be to hire for later, and how much of our time will go to fighting the tool instead of building the product. New technology can be the right call, but it always adds a form of risk that has to be worth paying for.",
    },
    {
      type: "heading",
      id: "where-boring-wins",
      text: "Where boring wins by default",
    },
    {
      type: "paragraph",
      text: "For anything load-bearing, the parts of a system where downtime or data loss is expensive, we lean toward tools with a long track record: mature databases, well-documented frameworks, infrastructure with a decade of production scars already worked out by someone else. Boring, in this context, means predictable, not outdated.",
    },
    {
      type: "heading",
      id: "where-we-reach-for-something-new",
      text: "Where we reach for something new",
    },
    {
      type: "paragraph",
      text: "We make exceptions where the new tool solves a problem the old one genuinely can't, and where the blast radius of it going wrong is contained. AI tooling is the clearest example: the field moves fast enough that \"proven\" sometimes means \"already outdated,\" so we evaluate newer frameworks and models more aggressively there, while still isolating that risk from the core systems around it.",
    },
    {
      type: "heading",
      id: "how-we-actually-decide",
      text: "How we actually decide",
    },
    {
      type: "paragraph",
      text: "The question we ask isn't \"is this exciting\" or even \"is this better on paper.\" It's \"what does this cost us if it's wrong, and who's going to maintain it in two years.\" Most of the time, that question points back to the boring answer. Sometimes it doesn't, and that's fine too, as long as the decision was made on purpose.",
    },
  ],
  metaTitle: "Why We Default to Boring Technology (and When We Don't)",
  metaDescription:
    "How Supereva Technology thinks about tech stack decisions: when proven, well-understood tools win, and when it's actually worth the risk of something new.",
  keywords: [
    "tech stack decisions",
    "boring technology",
    "engineering culture",
    "software architecture decisions",
  ],
};
