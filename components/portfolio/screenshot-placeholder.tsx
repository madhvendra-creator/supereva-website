import { ImageOff } from "lucide-react";

import { cn } from "@/lib/utils";

type ScreenshotPlaceholderProps = {
  label?: string;
  className?: string;
};

export function ScreenshotPlaceholder({
  label = "Screenshot placeholder",
  className,
}: ScreenshotPlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl border border-dashed border-border bg-muted/40",
        className
      )}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <ImageOff className="size-5 text-muted-foreground" aria-hidden="true" />
        <p className="text-xs font-medium text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}
