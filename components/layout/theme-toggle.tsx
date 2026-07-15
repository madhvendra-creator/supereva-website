"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@teispace/next-themes";

import { Button } from "@/components/ui/button";
import { useHasMounted } from "@/hooks";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  // next-themes only knows the real theme after mount (it reads
  // localStorage during the client's first render). Gating on `mounted`
  // keeps that first render identical to the server's, so the icon only
  // switches once hydration has already succeeded.
  const mounted = useHasMounted();

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" aria-label="Toggle theme">
        <span className="h-5 w-5" />
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
    </Button>
  );
}
