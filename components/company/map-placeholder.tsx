import { MapPin } from "lucide-react";

export function MapPlaceholder() {
  return (
    <div
      className="relative flex h-64 w-full items-center justify-center overflow-hidden rounded-2xl border border-border bg-background"
      role="img"
      aria-label="Map placeholder — office location to be added"
    >
      <div
        aria-hidden
        className="absolute inset-0 [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:24px_24px] opacity-40"
      />
      <div className="relative flex flex-col items-center gap-2 text-center">
        <div className="flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
          <MapPin className="size-5" aria-hidden="true" />
        </div>
        <p className="text-sm font-medium text-muted-foreground">
          Map coming soon
        </p>
      </div>
    </div>
  );
}
