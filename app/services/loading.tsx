import { HubPageSkeleton } from "@/components/layout/hub-page-skeleton";
import { ServiceCardSkeleton } from "@/components/services/service-card-skeleton";

export default function Loading() {
  return (
    <HubPageSkeleton>
      <ServiceCardSkeleton />
    </HubPageSkeleton>
  );
}
