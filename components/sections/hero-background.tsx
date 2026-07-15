"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@teispace/next-themes";

const COLS = 40;
const ROWS = 20;
const WAVE_START = 0.32; // fraction down the canvas where the dot field begins
const FALLBACK_COLOR = "37, 99, 235"; // blue-600, used only if oklch() canvas fill is unsupported

/**
 * Animated dot-wave field behind the hero. Reads the site's --brand token
 * (defined in globals.css) so the color always matches the accent, in both
 * themes, without hardcoding it here.
 */
export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const isDark = resolvedTheme === "dark";
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const brandRaw = getComputedStyle(document.documentElement)
      .getPropertyValue("--brand")
      .trim();

    const withAlpha = (alpha: number) => {
      const candidate = brandRaw.replace(/\)\s*$/, ` / ${alpha})`);
      const probe = document.createElement("canvas").getContext("2d");
      if (probe) {
        probe.fillStyle = "#010203";
        probe.fillStyle = candidate;
        if (probe.fillStyle === "#010203") {
          return `rgba(${FALLBACK_COLOR}, ${alpha})`;
        }
      }
      return candidate;
    };

    let width = 0;
    let height = 0;
    let rafId = 0;

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      width = rect.width;
      height = rect.height;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resize();
    window.addEventListener("resize", resize);

    const start = performance.now();

    function draw(now: number) {
      ctx!.clearRect(0, 0, width, height);
      const t = (now - start) / 1000;

      const spacingX = width / COLS;
      const spacingY = (height * (1 - WAVE_START)) / ROWS;
      const baseTop = height * WAVE_START;

      for (let row = 0; row < ROWS; row++) {
        const fade = row / (ROWS - 1);
        const opacity = fade * (isDark ? 0.55 : 0.32);
        if (opacity <= 0.01) continue;

        const fill = withAlpha(opacity);
        const radius = 1 + fade * 1.6;

        for (let col = 0; col < COLS; col++) {
          const px = col * spacingX + spacingX / 2;
          const wave =
            Math.sin(t * 1.1 + col * 0.35 + row * 0.25) * (4 + fade * 6);
          const py = baseTop + row * spacingY + wave;

          ctx!.beginPath();
          ctx!.arc(px, py, radius, 0, Math.PI * 2);
          ctx!.fillStyle = fill;
          ctx!.fill();
        }
      }

      if (!reduceMotion) {
        rafId = requestAnimationFrame(draw);
      }
    }

    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, [resolvedTheme]);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {/* soft glow for depth behind the wave */}
      <div className="absolute left-1/2 top-[-10rem] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px] dark:bg-brand/10" />

      {/* scrim so the eyebrow/headline stay readable over the densest dots */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/10 to-transparent" />
    </div>
  );
}
