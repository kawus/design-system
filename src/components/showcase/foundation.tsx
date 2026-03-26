"use client";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

/* ─── Section header helper ─── */
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs uppercase tracking-widest text-muted-foreground font-mono mb-6">
      {children}
    </h2>
  );
}

/* ─── Color swatch ─── */
function Swatch({ name, cssVar }: { name: string; cssVar: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className={cn("h-16 w-full rounded-lg border border-border", cssVar)}
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

/* ─── Typography specimen row ─── */
function TypeRow({
  label,
  sample,
  classes,
  className,
}: {
  label: string;
  sample: string;
  classes: string;
  className: string;
}) {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-6">
      <div className={cn("shrink-0", className)}>{sample}</div>
      <div className="flex items-center gap-3 mt-1 sm:mt-0">
        <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">
          {label}
        </span>
        <span className="font-mono text-[11px] text-muted-foreground/60 hidden md:inline">
          {classes}
        </span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   FOUNDATION SHOWCASE
   ═══════════════════════════════════════════ */
export function FoundationShowcase() {
  return (
    <div className="space-y-0">
      {/* ── COLOR PALETTE ── */}
      <section>
        <SectionTitle>Color Palette</SectionTitle>
        <div className="space-y-8">
          <ColorGroup
            label="Base"
            swatches={[
              { name: "--background", cssVar: "bg-background" },
              { name: "--foreground", cssVar: "bg-foreground" },
              { name: "--card", cssVar: "bg-card" },
              { name: "--card-foreground", cssVar: "bg-card-foreground" },
              { name: "--popover", cssVar: "bg-popover" },
              { name: "--popover-foreground", cssVar: "bg-popover-foreground" },
            ]}
          />
          <ColorGroup
            label="Interactive"
            swatches={[
              { name: "--primary", cssVar: "bg-primary" },
              { name: "--primary-foreground", cssVar: "bg-primary-foreground" },
              { name: "--secondary", cssVar: "bg-secondary" },
              {
                name: "--secondary-foreground",
                cssVar: "bg-secondary-foreground",
              },
              { name: "--accent", cssVar: "bg-accent" },
              { name: "--accent-foreground", cssVar: "bg-accent-foreground" },
              { name: "--muted", cssVar: "bg-muted" },
              { name: "--muted-foreground", cssVar: "bg-muted-foreground" },
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
      </section>

      <Separator className="my-16" />

      {/* ── TYPOGRAPHY SCALE ── */}
      <section>
        <SectionTitle>Typography Scale</SectionTitle>
        <div className="space-y-8">
          <TypeRow
            label="Display"
            sample="Design at scale"
            classes="text-5xl font-semibold tracking-tight text-gradient"
            className="text-5xl font-semibold tracking-tight text-gradient"
          />
          <TypeRow
            label="H1"
            sample="Build with precision"
            classes="text-4xl font-semibold tracking-tight"
            className="text-4xl font-semibold tracking-tight"
          />
          <TypeRow
            label="H2"
            sample="Every pixel matters"
            classes="text-2xl font-semibold"
            className="text-2xl font-semibold"
          />
          <TypeRow
            label="H3"
            sample="Components that compose"
            classes="text-xl font-medium"
            className="text-xl font-medium"
          />
          <TypeRow
            label="Body"
            sample="The foundation of great interfaces starts with a consistent, well-documented design system."
            classes="text-base"
            className="text-base max-w-2xl"
          />
          <TypeRow
            label="Small"
            sample="Secondary information and helper text"
            classes="text-sm text-muted-foreground"
            className="text-sm text-muted-foreground"
          />
          <TypeRow
            label="Micro"
            sample="System status"
            classes="text-xs uppercase tracking-widest font-mono"
            className="text-xs uppercase tracking-widest font-mono text-muted-foreground"
          />
        </div>
      </section>

      <Separator className="my-16" />

      {/* ── SPACING SCALE ── */}
      <section>
        <SectionTitle>Spacing Scale</SectionTitle>
        <div className="space-y-3">
          {[1, 2, 3, 4, 6, 8, 12, 16, 20, 24, 32, 48, 64].map((value) => {
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

      <Separator className="my-16" />

      {/* ── BORDER RADIUS ── */}
      <section>
        <SectionTitle>Border Radius</SectionTitle>
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

      <Separator className="my-16" />

      {/* ── EFFECTS ── */}
      <section>
        <SectionTitle>Effects</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Glow */}
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

          {/* Glass */}
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

          {/* Gradient border */}
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

          {/* Gradient text */}
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

          {/* Noise texture */}
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

          {/* Combined */}
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
