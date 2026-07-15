import type { BlogContentBlock } from "@/types";

const WORDS_PER_MINUTE = 200;

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export function getReadingTime(content: BlogContentBlock[]): number {
  const wordCount = content.reduce((total, block) => {
    if (block.type === "paragraph" || block.type === "heading") {
      return total + countWords(block.text);
    }
    if (block.type === "list") {
      return total + block.items.reduce((sum, item) => sum + countWords(item), 0);
    }
    return total;
  }, 0);

  return Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));
}
