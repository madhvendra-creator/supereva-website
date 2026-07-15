import type { BlogPost } from "@/types";

export const evaluatingAiVendors: BlogPost = {
  slug: "evaluating-ai-vendors",
  title: "How to Evaluate an AI Vendor Before You Sign a Contract",
  excerpt:
    "AI vendor demos are easy to make impressive. Here's what to actually check before you commit budget and data to one.",
  category: "AI Engineering",
  tags: ["AI Strategy", "Vendor Evaluation", "LLMs"],
  author: { name: "Supereva Team", role: "Engineering" },
  publishedAt: "2026-07-11",
  content: [
    {
      type: "paragraph",
      text: "Evaluating an AI vendor is harder than evaluating traditional software, because a polished demo tells you almost nothing about how the system behaves on your actual data, at your actual volume, under your actual failure modes. Most procurement checklists built for conventional SaaS don't ask the right questions for AI products. Here's what we'd actually check.",
    },
    {
      type: "heading",
      id: "ask-how-the-model-is-evaluated",
      text: "Ask how the model is actually evaluated",
      },
    {
      type: "paragraph",
      text: "A live demo is a sample size of one. Ask the vendor what their evaluation set looks like, how often they re-run it, and what the failure modes were the last time a model version changed. If they can't produce a real answer beyond \"we test it internally,\" treat that as a signal, not a formality.",
    },
    {
      type: "heading",
      id: "understand-what-happens-to-your-data",
      text: "Understand what happens to your data",
    },
    {
      type: "paragraph",
      text: "Some vendors train on customer data by default, some retain it for a fixed window, and some genuinely isolate it. These are meaningfully different postures, and the difference matters more the more sensitive your data is. Get this in writing, not in a sales conversation.",
    },
    {
      type: "heading",
      id: "check-for-lock-in-before-you-need-to-leave",
      text: "Check for lock-in before you need to leave",
    },
    {
      type: "paragraph",
      text: "The easiest time to negotiate portability is before you sign, not after two years of accumulated prompts, embeddings, and fine-tuned behavior. A few questions worth asking directly:",
    },
    {
      type: "list",
      items: [
        "Can we export our prompt history, embeddings, and fine-tuning data in a usable format?",
        "What would it take to move to a different provider if we needed to?",
        "Are we building on standard interfaces, or vendor-specific abstractions we can't easily replace?",
      ],
    },
    {
      type: "heading",
      id: "ask-what-happens-when-the-model-is-wrong",
      text: "Ask what happens when the model is wrong",
    },
    {
      type: "paragraph",
      text: "Every model is wrong sometimes. The question that actually matters is what happens next: is there a fallback path, a confidence threshold, a human review step for high-stakes outputs? Vendors who've thought seriously about production use will have a real answer here. Vendors who haven't will change the subject back to accuracy benchmarks.",
    },
    {
      type: "heading",
      id: "the-bottom-line",
      text: "The bottom line",
    },
    {
      type: "paragraph",
      text: "None of this is about distrust for its own sake. It's about applying the same rigor to an AI vendor that you'd apply to any system you're about to depend on. The vendors worth working with will welcome these questions, because they've already asked them of themselves.",
    },
  ],
  metaTitle: "How to Evaluate an AI Vendor Before You Sign a Contract",
  metaDescription:
    "A practical checklist for evaluating AI vendors: model evaluation, data handling, lock-in risk, and failure behavior, before you commit.",
  keywords: [
    "AI vendor evaluation",
    "AI procurement checklist",
    "AI vendor due diligence",
    "choosing an AI vendor",
  ],
};
