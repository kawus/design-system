"use client";

import { cn } from "@/lib/utils";

function Swatch({ name, cssVar }: { name: string; cssVar: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className={cn(
          "h-16 w-full rounded-lg border border-border",
          cssVar
        )}
      />
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
