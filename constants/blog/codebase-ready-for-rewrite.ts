import type { BlogPost } from "@/types";

export const codebaseReadyForRewrite: BlogPost = {
  slug: "signs-your-codebase-needs-a-rewrite",
  title: "Five Signs Your Codebase Is Ready for a Rewrite (and Four Signs It Isn't)",
  excerpt:
    "Rewriting a system is one of the highest-risk calls a team can make. Here's how to tell whether it's actually warranted, or whether the real fix is smaller than it feels.",
  category: "Software Development",
  tags: ["Legacy Systems", "Technical Debt", "Architecture"],
  author: { name: "Supereva Team", role: "Engineering" },
  publishedAt: "2026-06-20",
  content: [
    {
      type: "paragraph",
      text: "\"We should just rewrite it\" is one of the most expensive sentences in software. Sometimes it's correct. Often, it's a reaction to pain that a smaller, less risky change could actually solve. Here's how we think about telling the two apart.",
    },
    {
      type: "heading",
      id: "signs-it-might-be-time",
      text: "Signs it might actually be time",
    },
    {
      type: "list",
      items: [
        "Every new feature requires touching the same fragile, poorly understood core logic, and each change carries real regression risk.",
        "The system's architecture actively fights the business it now needs to support, not just the one it was built for originally.",
        "Onboarding a new engineer to make a safe, confident change takes weeks, not days.",
        "The underlying platform or language is genuinely unsupported, not just unfashionable.",
        "You've tried targeted refactors more than once, and the underlying problems keep resurfacing in new forms.",
      ],
    },
    {
      type: "heading",
      id: "signs-its-not-actually-the-fix",
      text: "Signs it's not actually the fix",
    },
    {
      type: "list",
      items: [
        "The code is unpleasant to work in, but it's reliable, and the pain is aesthetic more than functional.",
        "A specific module or service is the real problem, not the whole system.",
        "The team wants to rewrite because the stack is old, not because it's actually holding anything back.",
        "There's no clear plan for how the business keeps running during a multi-month or multi-year rewrite.",
      ],
    },
    {
      type: "heading",
      id: "the-question-that-actually-matters",
      text: "The question that actually matters",
    },
    {
      type: "paragraph",
      text: "The real question isn't \"is this codebase unpleasant.\" It's \"does this codebase's architecture prevent us from doing what the business needs next, in a way that a targeted change can't fix.\" That reframe alone rules out a surprising number of proposed rewrites.",
    },
    {
      type: "heading",
      id: "if-you-do-rewrite",
      text: "If you do decide to rewrite",
    },
    {
      type: "paragraph",
      text: "Do it in a way that lets the business keep running: strangler-fig migrations that replace the system piece by piece, not a big-bang cutover after a year of silent development. The riskiest rewrites are the ones where nothing ships until everything is done.",
    },
  ],
  metaTitle: "Five Signs Your Codebase Is Ready for a Rewrite",
  metaDescription:
    "A practical framework for deciding whether a legacy system actually needs a rewrite, or whether a smaller, lower-risk change will solve the real problem.",
  keywords: [
    "legacy system rewrite",
    "technical debt",
    "software modernization",
    "when to rewrite legacy code",
  ],
};
