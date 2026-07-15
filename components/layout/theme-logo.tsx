"use client";

import Image from "next/image";
import { useTheme } from "@teispace/next-themes";

import { useHasMounted } from "@/hooks";
import { siteConfig } from "@/constants/site";

// Intrinsic width/height must match each source file's real aspect ratio
// (blacklogo.png is 2014x781, whitelogo.png is 1860x845) — otherwise the
// browser's CSS `aspect-ratio: auto` resolves differently before vs. after
// the image loads, which is what trips next/image's "width or height
// modified, but not the other" warning.
const DARK_LOGO = { src: "/images/blacklogo.png", width: 144, height: 56 };
const LIGHT_LOGO = { src: "/images/whitelogo.png", width: 123, height: 56 };

export function ThemeLogo() {
  const { resolvedTheme } = useTheme();
  const mounted = useHasMounted();

  if (!mounted) {
    return <div className="h-10 w-[140px]" />;
  }

  const isDark = resolvedTheme === "dark";
  const logo = isDark ? DARK_LOGO : LIGHT_LOGO;

  return (
    <Image
      src={logo.src}
      alt={siteConfig.name}
      width={logo.width}
      height={logo.height}
      priority
      className="h-10 w-auto object-contain"
    />
  );
}
