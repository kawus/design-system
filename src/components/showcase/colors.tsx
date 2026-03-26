"use client";

import { useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

/* ─── Read the raw CSS variable value (e.g. "oklch(0.13 0 0)") ─── */
function getOklchValue(varName: string): string {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue(varName)
    .trim();
  return raw || "–";
}

/* ─── Color swatch with hover oklch + click to copy ─── */
function Swatch({ name, cssVar }: { name: string; cssVar: string }) {
  const swatchRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleMouseEnter = useCallback(() => {
    const raw = getOklchValue(name);
    setValue(raw);
  }, [name]);

  const handleClick = useCallback(() => {
    const raw = getOklchValue(name);
    navigator.clipboard.writeText(`oklch(${raw})`);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [name]);

  return (
    <div className="flex flex-col gap-2">
      <div
        ref={swatchRef}
        className={cn(
          "h-16 w-full rounded-lg border border-border relative cursor-pointer group transition-shadow hover:ring-2 hover:ring-ring/30",
          cssVar
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => { setValue(null); setCopied(false); }}
        onClick={handleClick}
      >
        <div className="absolute inset-0 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
          <span className="font-mono text-[10px] text-white font-medium">
            {copied ? "Copied!" : value ?? "…"}
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
