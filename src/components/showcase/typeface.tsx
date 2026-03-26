"use client";

import { cn } from "@/lib/utils";

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

export function TypefaceShowcase() {
  return (
    <div className="space-y-16">
      {/* Typeface specimens */}
      <section>
        <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-mono mb-6">
          Typeface
        </h3>
        <div className="bg-card rounded-xl p-8 ring-1 ring-foreground/5 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sans */}
            <div>
              <p className="text-[11px] font-mono text-muted-foreground/60 mb-3">sans — headings & body</p>
              <p className="text-3xl font-medium tracking-tight mb-2 font-sans">Geist Sans</p>
              <p className="text-sm text-muted-foreground mb-4 font-sans">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                abcdefghijklmnopqrstuvwxyz<br />
                0123456789
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-muted px-2 py-0.5 rounded font-mono">font-sans</span>
                <span className="text-xs bg-muted px-2 py-0.5 rounded font-mono">--font-geist-sans</span>
              </div>
            </div>
            {/* Mono */}
            <div>
              <p className="text-[11px] font-mono text-muted-foreground/60 mb-3">mono — code, labels & data</p>
              <p className="text-3xl font-medium tracking-tight mb-2 font-mono">Geist Mono</p>
              <p className="text-sm text-muted-foreground mb-4 font-mono">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                abcdefghijklmnopqrstuvwxyz<br />
                0123456789
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-muted px-2 py-0.5 rounded font-mono">font-mono</span>
                <span className="text-xs bg-muted px-2 py-0.5 rounded font-mono">--font-geist-mono</span>
              </div>
            </div>
          </div>

          {/* Weight specimens */}
          <div>
            <p className="text-[11px] font-mono text-muted-foreground/60 mb-3">weights</p>
            <div className="space-y-2">
              {[
                { weight: "font-normal", label: "400 — Regular", desc: "Body text, descriptions" },
                { weight: "font-medium", label: "500 — Medium", desc: "Headings, emphasis, labels" },
                { weight: "font-semibold", label: "600 — Semibold", desc: "Buttons, strong emphasis (use sparingly)" },
              ].map((w) => (
                <div key={w.label} className="flex items-baseline gap-4">
                  <span className={cn("text-lg w-48 shrink-0", w.weight)}>
                    The quick brown fox
                  </span>
                  <span className="text-xs font-mono text-muted-foreground/60">{w.label}</span>
                  <span className="text-xs text-muted-foreground/40 hidden md:inline">— {w.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Typography scale */}
      <section>
        <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-mono mb-6">
          Typography Scale
        </h3>
        <div className="space-y-8">
          <TypeRow
            label="Display"
            sample="Design at scale"
            classes="text-3xl md:text-4xl font-medium tracking-tight text-muted-foreground"
            className="text-3xl md:text-4xl font-medium tracking-tight text-muted-foreground"
          />
          <TypeRow
            label="H1"
            sample="Build with precision"
            classes="text-2xl font-medium tracking-tight"
            className="text-2xl font-medium tracking-tight"
          />
          <TypeRow
            label="H2"
            sample="Every pixel matters"
            classes="text-xl font-medium tracking-tight text-muted-foreground"
            className="text-xl font-medium tracking-tight text-muted-foreground"
          />
          <TypeRow
            label="H3"
            sample="Components that compose"
            classes="text-lg font-medium"
            className="text-lg font-medium"
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
    </div>
  );
}
