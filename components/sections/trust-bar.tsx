import { FadeIn } from "@/components/motion/fade-in";

// TODO: swap for real client logos once available. Using engineering stack
// names as placeholders in the meantime.
const stack = [
  "TypeScript",
  "Python",
  "Next.js",
  "PyTorch",
  "AWS",
  "Kubernetes",
  "PostgreSQL",
  "LangChain",
];

export function TrustBar() {
  return (
    <div className="w-full border-y border-border bg-muted/30 py-10">
      <FadeIn className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Trusted by teams shipping with AI
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border bg-background px-4 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:border-brand/40 hover:text-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>
      </FadeIn>
    </div>
  );
}
