import { Container } from "@/components/layout/container";
import { Skeleton } from "@/components/ui/skeleton";

export function DetailPageSkeleton() {
  return (
    <div className="pb-20 md:pb-28">
      <div className="border-b border-border py-4">
        <Container size="xl">
          <Skeleton className="h-4 w-40" />
        </Container>
      </div>

      <Container
        size="md"
        className="flex flex-col items-center pt-16 pb-12 text-center md:pt-20"
      >
        <Skeleton className="h-6 w-32 rounded-full" />
        <Skeleton className="mt-6 h-10 w-full max-w-xl" />
        <Skeleton className="mt-3 h-10 w-3/4 max-w-md" />
        <Skeleton className="mt-6 h-5 w-full max-w-lg" />
        <Skeleton className="mt-2 h-5 w-2/3 max-w-md" />
      </Container>

      <Container size="lg" className="mt-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="rounded-2xl border border-border p-8">
              <Skeleton className="h-5 w-1/2" />
              <Skeleton className="mt-3 h-4 w-full" />
              <Skeleton className="mt-2 h-4 w-5/6" />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
