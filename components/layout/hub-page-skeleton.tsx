import { Container } from "@/components/layout/container";
import { Skeleton } from "@/components/ui/skeleton";

type HubPageSkeletonProps = {
  count?: number;
  children: React.ReactNode;
};

export function HubPageSkeleton({ count = 6, children }: HubPageSkeletonProps) {
  return (
    <div className="pb-20 md:pb-28">
      <div className="flex flex-col items-center pt-16 pb-20 text-center md:pt-20">
        <Skeleton className="h-6 w-28 rounded-full" />
        <Skeleton className="mt-6 h-10 w-full max-w-md" />
        <Skeleton className="mt-3 h-10 w-2/3 max-w-sm" />
        <Skeleton className="mt-6 h-5 w-full max-w-lg" />
      </div>

      <Container size="xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: count }).map((_, index) => (
            <div key={index}>{children}</div>
          ))}
        </div>
      </Container>
    </div>
  );
}
