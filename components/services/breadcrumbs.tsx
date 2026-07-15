import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Container } from "@/components/layout/container";

type BreadcrumbLink = {
  label: string;
  href?: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbLink[] }) {
  return (
    <div className="border-b border-border">
      <Container size="xl">
        <nav aria-label="Breadcrumb" className="py-4">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              return (
                <li key={item.label} className="flex items-center gap-1.5">
                  {item.href && !isLast ? (
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span
                      aria-current={isLast ? "page" : undefined}
                      className={isLast ? "text-foreground" : undefined}
                    >
                      {item.label}
                    </span>
                  )}
                  {!isLast && (
                    <ChevronRight
                      className="size-3.5 text-muted-foreground/60"
                      aria-hidden="true"
                    />
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </Container>
    </div>
  );
}
