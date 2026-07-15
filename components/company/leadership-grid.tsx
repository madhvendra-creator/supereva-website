import { UserCircle } from "lucide-react";

import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import type { LeadershipMember } from "@/types";

type LeadershipGridProps = {
  items: LeadershipMember[];
};

export function LeadershipGrid({ items }: LeadershipGridProps) {
  return (
    <Section>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((member, index) => (
          <FadeIn key={member.role} delay={index * 0.06}>
            <div className="flex h-full flex-col items-center rounded-2xl border border-border bg-muted/30 p-6 text-center">
              <div className="flex size-16 items-center justify-center rounded-full bg-brand/10 text-brand">
                <UserCircle className="size-8" aria-hidden="true" />
              </div>
              <p className="mt-4 font-semibold text-muted-foreground">
                {member.name}
              </p>
              <p className="mt-1 text-sm font-medium text-brand">
                {member.role}
              </p>
              {member.bio && (
                <p className="mt-3 text-sm text-muted-foreground">
                  {member.bio}
                </p>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
