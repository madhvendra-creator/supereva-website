import { HubPageSkeleton } from "@/components/layout/hub-page-skeleton";
import { BlogCardSkeleton } from "@/components/blog/blog-card-skeleton";

export default function Loading() {
  return (
    <HubPageSkeleton>
      <BlogCardSkeleton />
    </HubPageSkeleton>
  );
}
