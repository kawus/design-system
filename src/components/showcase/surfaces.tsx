"use client";

import { cn } from "@/lib/utils";

export function SurfacesShowcase() {
  return (
    <div className="space-y-16">
      {/* Spacing scale */}
      <section>
        <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-mono mb-6">
          Spacing Scale
        </h3>
        <div className="space-y-3">
          {[1, 2, 4, 6, 8, 12, 16, 24].map((value) => {
            const px = value * 4;
            return (
              <div key={value} className="flex items-center gap-4">
                <span className="font-mono text-xs text-muted-foreground w-16 text-right shrink-0">
                  {px}px
                </span>
                <div
                  className="h-3 rounded-sm bg-primary/80"
                  style={{ width: `${px}px` }}
                />
                <span className="font-mono text-[11px] text-muted-foreground/60">
                  {value <= 12 ? `p-${value}` : `p-[${px}px]`}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Border radius */}
      <section>
        <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-mono mb-6">
          Border Radius
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {(
            [
              ["sm", "rounded-sm"],
              ["md", "rounded-md"],
              ["lg", "rounded-lg"],
              ["xl", "rounded-xl"],
              ["2xl", "rounded-2xl"],
              ["full", "rounded-full"],
            ] as const
          ).map(([label, cls]) => (
            <div key={label} className="flex flex-col items-center gap-3">
              <div
                className={cn(
                  "h-20 w-20 border-2 border-primary/40 bg-surface",
                  cls
                )}
              />
              <span className="font-mono text-xs text-muted-foreground">
                {cls}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Effects */}
      <section>
        <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-mono mb-6">
          Effects
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-3">
            <div className="glow rounded-xl bg-card border border-border p-6 h-32 flex items-center justify-center">
              <span className="text-sm text-muted-foreground">
                Subtle blue glow
              </span>
            </div>
            <span className="font-mono text-xs text-muted-foreground">
              .glow
            </span>
          </div>

          <div className="space-y-3">
            <div className="glass rounded-xl p-6 h-32 flex items-center justify-center">
              <span className="text-sm text-muted-foreground">
                Frosted glass surface
              </span>
            </div>
            <span className="font-mono text-xs text-muted-foreground">
              .glass
            </span>
          </div>

          <div className="space-y-3">
            <div className="gradient-border rounded-xl bg-card p-6 h-32 flex items-center justify-center">
              <span className="text-sm text-muted-foreground">
                Gradient edge highlight
              </span>
            </div>
            <span className="font-mono text-xs text-muted-foreground">
              .gradient-border
            </span>
          </div>

          <div className="space-y-3">
            <div className="rounded-xl bg-card border border-border p-6 h-32 flex items-center justify-center">
              <span className="text-gradient text-2xl font-semibold tracking-tight">
                Gradient text
              </span>
            </div>
            <span className="font-mono text-xs text-muted-foreground">
              .text-gradient
            </span>
          </div>

          <div className="space-y-3">
            <div className="relative noise rounded-xl bg-surface border border-border p-6 h-32 flex items-center justify-center">
              <span className="text-sm text-muted-foreground">
                Noise texture overlay
              </span>
            </div>
            <span className="font-mono text-xs text-muted-foreground">
              .noise{" "}
              <span className="text-muted-foreground/50">
                (requires relative parent)
              </span>
            </span>
          </div>

          <div className="space-y-3">
            <div className="relative noise glow gradient-border glass rounded-xl p-6 h-32 flex items-center justify-center">
              <span className="text-gradient text-lg font-semibold tracking-tight">
                All combined
              </span>
            </div>
            <span className="font-mono text-xs text-muted-foreground">
              .glow .glass .gradient-border .noise .text-gradient
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
