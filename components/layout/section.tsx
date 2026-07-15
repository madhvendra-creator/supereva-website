import { cva, type VariantProps } from "class-variance-authority";

import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

const sectionVariants = cva("w-full py-16 md:py-24", {
  variants: {
    background: {
      default: "bg-background",
      muted: "bg-muted/50",
      card: "bg-card",
    },
  },
  defaultVariants: {
    background: "default",
  },
});

interface SectionProps
  extends React.ComponentProps<"section">,
    VariantProps<typeof sectionVariants> {
  containerSize?: React.ComponentProps<typeof Container>["size"];
  container?: boolean;
}

function Section({
  className,
  background,
  containerSize,
  container = true,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      data-slot="section"
      className={cn(sectionVariants({ background, className }))}
      {...props}
    >
      {container ? (
        <Container size={containerSize}>{children}</Container>
      ) : (
        children
      )}
    </section>
  );
}

export { Section, sectionVariants };
