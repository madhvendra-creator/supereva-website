import { Skeleton } from "@/components/ui/skeleton";

export function ServiceCardSkeleton() {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-background p-8">
      <Skeleton className="h-6 w-2/3" />
      <Skeleton className="mt-4 h-4 w-full" />
      <Skeleton className="mt-2 h-4 w-5/6" />
      <Skeleton className="mt-6 h-4 w-28" />
    </div>
  );
}
