import { Skeleton } from "@/components/ui/skeleton";

export function CaseStudyCardSkeleton() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background">
      <div className="p-4 pb-0">
        <Skeleton className="aspect-video w-full rounded-xl" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <Skeleton className="h-5 w-24 rounded-full" />
        <Skeleton className="mt-4 h-5 w-4/5" />
        <Skeleton className="mt-2 h-4 w-full" />
        <Skeleton className="mt-2 h-4 w-2/3" />
        <Skeleton className="mt-6 h-4 w-32" />
      </div>
    </div>
  );
}
