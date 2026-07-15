import { Container } from "@/components/layout/container";

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

export function TechStack() {
  return (
    <div className="border-y border-border bg-muted/30 py-8">
      <Container size="xl">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Engineering stack
        </p>
        <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {stack.map((tech) => (
            <li
              key={tech}
              className="text-sm font-medium text-muted-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
