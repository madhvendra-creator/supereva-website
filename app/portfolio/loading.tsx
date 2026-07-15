import { HubPageSkeleton } from "@/components/layout/hub-page-skeleton";
import { CaseStudyCardSkeleton } from "@/components/portfolio/case-study-card-skeleton";

export default function Loading() {
  return (
    <HubPageSkeleton>
      <CaseStudyCardSkeleton />
    </HubPageSkeleton>
  );
}
