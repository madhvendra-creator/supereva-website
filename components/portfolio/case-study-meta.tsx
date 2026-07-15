import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/motion/fade-in";

type CaseStudyMetaProps = {
  industry: string;
  clientDescriptor: string;
};

export function CaseStudyMeta({ industry, clientDescriptor }: CaseStudyMetaProps) {
  return (
    <div className="border-b border-border bg-muted/30">
      <Container size="md">
        <FadeIn className="flex flex-col items-center gap-3 py-8 text-center">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
              {industry}
            </span>
            <span className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
              {clientDescriptor}
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            Client details anonymized for confidentiality.
          </p>
        </FadeIn>
      </Container>
    </div>
  );
}
