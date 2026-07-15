import { Clock, Mail, MapPin } from "lucide-react";

import { siteConfig } from "@/constants/site";

export function OfficeInfo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-4">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
          <MapPin className="size-5" aria-hidden="true" />
        </div>
        <div>
          <h2 className="text-base font-semibold">Office</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            B 54, Pulak City Rau, Near Silicon City, Ab Road, Indore
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
          <Mail className="size-5" aria-hidden="true" />
        </div>
        <div>
          <h2 className="text-base font-semibold">Email</h2>
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="mt-1 inline-block text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {siteConfig.contactEmail}
          </a>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
          <Clock className="size-5" aria-hidden="true" />
        </div>
        <div>
          <h2 className="text-base font-semibold">Response time</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            We typically reply within 10 minutes.
          </p>
        </div>
      </div>
    </div>
  );
}
