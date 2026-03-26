"use client";

import { useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

/* ─── Resolve any CSS color (including oklch) to #RRGGBB via canvas pixel ─── */
function getComputedHex(el: HTMLElement): string {
  const color = getComputedStyle(el).backgroundColor;
  const canvas = document.createElement("canvas");
  canvas.width = 1;
  canvas.height = 1;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) return color;
  ctx.clearRect(0, 0, 1, 1);
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 1, 1);
  const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
  return (
    "#" +
    [r, g, b]
      .map((v) => v.toString(16).padStart(2, "0"))
      .join("")
      .toUpperCase()
  );
}

/* ─── Color swatch with hover hex + click to copy ─── */
function Swatch({ name, cssVar }: { name: string; cssVar: string }) {
  const swatchRef = useRef<HTMLDivElement>(null);
  const [hex, setHex] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleMouseEnter = useCallback(() => {
    if (swatchRef.current) {
      setHex(getComputedHex(swatchRef.current));
    }
  }, []);

  const handleClick = useCallback(() => {
    if (swatchRef.current) {
      const value = getComputedHex(swatchRef.current);
      navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <div
        ref={swatchRef}
        className={cn(
          "h-16 w-full rounded-lg border border-border relative cursor-pointer group transition-shadow hover:ring-2 hover:ring-ring/30",
          cssVar
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => { setHex(null); setCopied(false); }}
        onClick={handleClick}
      >
        <div className="absolute inset-0 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
          <span className="font-mono text-[11px] text-white font-medium">
            {copied ? "Copied!" : hex ?? "…"}
          </span>
        </div>
      </div>
      <span className="font-mono text-xs text-muted-foreground">{name}</span>
    </div>
  );
}

/* ─── Color group ─── */
function ColorGroup({
  label,
  swatches,
}: {
  label: string;
  swatches: { name: string; cssVar: string }[];
}) {
  return (
    <div>
      <p className="text-sm font-medium mb-3">{label}</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {swatches.map((s) => (
          <Swatch key={s.name} {...s} />
        ))}
      </div>
    </div>
  );
}

export function ColorsShowcase() {
  return (
    <div className="space-y-8">
      <ColorGroup
        label="Base"
        swatches={[
          { name: "--background", cssVar: "bg-background" },
          { name: "--foreground", cssVar: "bg-foreground" },
          { name: "--card", cssVar: "bg-card" },
        ]}
      />
      <ColorGroup
        label="Interactive"
        swatches={[
          { name: "--primary", cssVar: "bg-primary" },
          { name: "--secondary", cssVar: "bg-secondary" },
          { name: "--muted", cssVar: "bg-muted" },
          { name: "--accent", cssVar: "bg-accent" },
          { name: "--destructive", cssVar: "bg-destructive" },
        ]}
      />
      <ColorGroup
        label="Border & Input"
        swatches={[
          { name: "--border", cssVar: "bg-border" },
          { name: "--input", cssVar: "bg-input" },
          { name: "--ring", cssVar: "bg-ring" },
        ]}
      />
      <ColorGroup
        label="Chart"
        swatches={[
          { name: "--chart-1", cssVar: "bg-chart-1" },
          { name: "--chart-2", cssVar: "bg-chart-2" },
          { name: "--chart-3", cssVar: "bg-chart-3" },
          { name: "--chart-4", cssVar: "bg-chart-4" },
          { name: "--chart-5", cssVar: "bg-chart-5" },
        ]}
      />
      <ColorGroup
        label="Custom"
        swatches={[
          { name: "--glow", cssVar: "bg-glow" },
          { name: "--surface", cssVar: "bg-surface" },
          { name: "--surface-hover", cssVar: "bg-surface-hover" },
        ]}
      />
    </div>
  );
}
