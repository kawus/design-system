"use client";

import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

/* ═══════════════════════════════════════════
   ARTICLE SHOWCASE
   Linear /next–style: restrained, editorial, quiet
   ═══════════════════════════════════════════ */

export function ArticleShowcase() {
  return (
    <div className="-mx-6">
      {/* ── META HEADER ── */}
      <header className="max-w-2xl mx-auto px-6 pt-16 pb-8">
        <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-widest text-muted-foreground/60">
          <span>designsystem.dev/next</span>
          <span>—</span>
          <time>26 March 2026</time>
        </div>
      </header>

      {/* ── MAIN HEADLINE ── */}
      <section className="max-w-2xl mx-auto px-6 pb-16">
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-snug">
          Design systems are infrastructure.
        </h1>
      </section>

      {/* ── OPENING NARRATIVE ── */}
      <section className="max-w-2xl mx-auto px-6 space-y-6">
        <p className="text-[15px] text-muted-foreground leading-relaxed">
          For a decade, design systems were treated as style guides. A PDF passed between
          teams. A Figma file that drifted from production. A Storybook nobody maintained.
        </p>
        <p className="text-[15px] text-muted-foreground leading-relaxed">
          That era is ending. The best teams have realized that a design system isn&apos;t
          documentation — it&apos;s{" "}
          <span className="text-foreground">living infrastructure</span>{" "}
          that shapes every pixel shipped to production.
        </p>
        <p className="text-[15px] text-muted-foreground leading-relaxed">
          Components that compose. Tokens that propagate. Patterns that enforce consistency
          without demanding conformity. The system does the work so your team can focus on
          the product.
        </p>
      </section>

      {/* ── SPACER ── */}
      <div className="h-20 md:h-28" />

      {/* ── DATA CALLOUT ── */}
      <section className="max-w-2xl mx-auto px-6">
        <p className="text-xl md:text-2xl font-medium tracking-tight leading-snug text-muted-foreground">
          Teams using a shared component system ship{" "}
          <span className="text-foreground">34% faster</span> and report{" "}
          <span className="text-foreground">68% fewer</span> visual inconsistencies
          across their product surface.
        </p>
      </section>

      {/* ── SPACER ── */}
      <div className="h-20 md:h-28" />

      {/* ── ARCHITECTURE DIAGRAM — Full bleed ── */}
      <section className="w-full px-6 pb-20">
        <div className="max-w-4xl mx-auto rounded-xl border border-border/50 bg-card/30 p-8 md:p-12 font-mono text-xs text-muted-foreground/60 overflow-x-auto">
          <pre className="leading-relaxed">{`
  ┌─────────────────────────────────────────────────────────┐
  │                     DESIGN SYSTEM                        │
  │                                                          │
  │  ┌──────────┐   ┌──────────┐   ┌──────────┐            │
  │  │  Tokens  │──▶│Components│──▶│ Patterns │            │
  │  │          │   │          │   │          │            │
  │  │ colors   │   │ button   │   │ forms    │            │
  │  │ spacing  │   │ input    │   │ tables   │            │
  │  │ type     │   │ card     │   │ layouts  │            │
  │  │ radii    │   │ dialog   │   │ pages    │            │
  │  └──────────┘   └──────────┘   └──────────┘            │
  │       │              │              │                    │
  │       ▼              ▼              ▼                    │
  │  ┌─────────────────────────────────────────────┐        │
  │  │              APPLICATION LAYER               │        │
  │  │                                              │        │
  │  │   Marketing    App UI    Admin    Emails     │        │
  │  └─────────────────────────────────────────────┘        │
  └─────────────────────────────────────────────────────────┘
          `}</pre>
        </div>
      </section>

      {/* ── FEATURE ANNOUNCEMENTS ── */}
      <section className="max-w-2xl mx-auto px-6 space-y-14">
        <div>
          <h2 className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground/60 mb-12">
            What&apos;s new
          </h2>
        </div>

        {/* Feature 1 */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium tracking-tight">
            Semantic Tokens
          </h3>
          <p className="text-[15px] text-muted-foreground leading-relaxed">
            Colors are no longer hex values. They&apos;re{" "}
            <span className="text-foreground">intentions</span>.{" "}
            <code className="text-[13px] bg-muted px-1.5 py-0.5 rounded font-mono">--destructive</code> means
            danger everywhere — button, badge, toast, border. Change it once, it updates across
            every surface. Dark mode isn&apos;t a separate theme; it&apos;s the same tokens in a different
            context.
          </p>
          <div className="flex gap-2 pt-2">
            <div className="h-6 w-6 rounded bg-primary" />
            <div className="h-6 w-6 rounded bg-secondary" />
            <div className="h-6 w-6 rounded bg-accent" />
            <div className="h-6 w-6 rounded bg-muted" />
            <div className="h-6 w-6 rounded bg-destructive" />
          </div>
        </div>

        <Separator className="opacity-20" />

        {/* Feature 2 */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium tracking-tight">
            Glass &amp; Glow
          </h3>
          <p className="text-[15px] text-muted-foreground leading-relaxed">
            Two utility classes that define the visual language.{" "}
            <code className="text-[13px] bg-muted px-1.5 py-0.5 rounded font-mono">.glass</code>{" "}
            gives you frosted translucency.{" "}
            <code className="text-[13px] bg-muted px-1.5 py-0.5 rounded font-mono">.glow</code>{" "}
            adds a subtle halo. Combined, they create surfaces that feel like they exist
            in physical space — depth without drop shadows.
          </p>
          <div className="flex gap-4 pt-2">
            <div className="glass rounded-lg p-5 flex-1 text-center text-xs text-muted-foreground font-mono">
              .glass
            </div>
            <div className="glow rounded-lg bg-card p-5 flex-1 text-center text-xs text-muted-foreground font-mono">
              .glow
            </div>
          </div>
        </div>

        <Separator className="opacity-20" />

        {/* Feature 3 */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium tracking-tight">
            Gradient Border
          </h3>
          <p className="text-[15px] text-muted-foreground leading-relaxed">
            The{" "}
            <code className="text-[13px] bg-muted px-1.5 py-0.5 rounded font-mono">.gradient-border</code>{" "}
            utility uses a CSS mask trick to create borders that shimmer from light to dark.
            No extra markup. No JavaScript. Just a class.
          </p>
          <div className="pt-2">
            <div className="gradient-border rounded-lg bg-card p-6 text-center text-xs text-muted-foreground font-mono">
              .gradient-border
            </div>
          </div>
        </div>
      </section>

      {/* ── SPACER ── */}
      <div className="h-20 md:h-28" />

      {/* ── COMING SOON ── */}
      <section className="max-w-2xl mx-auto px-6 space-y-10">
        <h2 className="text-xl font-medium tracking-tight text-muted-foreground">
          Coming soon:
        </h2>

        <div className="space-y-6">
          <div className="space-y-1.5">
            <h3 className="text-[15px] font-medium">
              Figma Sync
            </h3>
            <p className="text-[15px] text-muted-foreground leading-relaxed">
              Push tokens from code to Figma. Pull design changes back. One source of truth
              that actually stays in sync.
            </p>
          </div>

          <div className="space-y-1.5">
            <h3 className="text-[15px] font-medium">
              Theme Studio
            </h3>
            <p className="text-[15px] text-muted-foreground leading-relaxed">
              A visual editor for creating and previewing theme variants. Light, dark,
              high contrast, brand — all generated from a single set of base tokens.
            </p>
          </div>

          <div className="space-y-1.5">
            <h3 className="text-[15px] font-medium">
              Component Analytics
            </h3>
            <p className="text-[15px] text-muted-foreground leading-relaxed">
              Track which components are used, where, and how often. Identify drift before
              it becomes debt. Deprecate with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* ── SPACER ── */}
      <div className="h-20 md:h-28" />

      {/* ── CLOSING STATEMENTS ── */}
      <section className="max-w-2xl mx-auto px-6 space-y-6 pb-20">
        <p className="text-[15px] font-medium leading-relaxed">
          The best design systems remove overhead.
        </p>
        <p className="text-[15px] font-medium leading-relaxed text-muted-foreground">
          They don&apos;t ask for adoption — they make everything else harder without them.
        </p>
        <p className="text-[15px] font-medium leading-relaxed text-muted-foreground/50">
          Build the system. Then let the system build for you.
        </p>
      </section>

      {/* ── SIGNATURE ── */}
      <section className="max-w-2xl mx-auto px-6 pb-16">
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-accent text-xs font-medium">DS</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">Design System Team</p>
            <p className="text-[11px] text-muted-foreground/60">March 2026</p>
          </div>
        </div>
      </section>

      {/* ── FULL-WIDTH DIVIDER ── */}
      <div className="border-t border-border/50" />

      {/* ── FOOTER RESOURCES ── */}
      <section className="max-w-2xl mx-auto px-6 py-16">
        <p className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground/60 mb-8">
          Learn more
        </p>

        {/* Video placeholder */}
        <div className="rounded-xl border border-border/50 bg-card/30 aspect-video flex items-center justify-center mb-6 overflow-hidden">
          <div className="text-center space-y-3">
            <div className="mx-auto w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 text-muted-foreground">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
            <p className="text-xs text-muted-foreground/60">Watch the introduction — 4:32</p>
          </div>
        </div>

        {/* Resource links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <a href="#" className="group flex items-center justify-between rounded-lg border border-border/50 bg-card/30 p-4 transition-colors hover:bg-accent/30">
            <div>
              <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">Changelog</p>
              <p className="text-[11px] text-muted-foreground/60 mt-0.5">What&apos;s new in v0.1.0</p>
            </div>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground/40 group-hover:text-muted-foreground transition-colors">
              <path d="M7 17l9.2-9.2M17 17V8H8" />
            </svg>
          </a>
          <a href="#" className="group flex items-center justify-between rounded-lg border border-border/50 bg-card/30 p-4 transition-colors hover:bg-accent/30">
            <div>
              <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">Getting Started</p>
              <p className="text-[11px] text-muted-foreground/60 mt-0.5">Set up the system in 5 minutes</p>
            </div>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground/40 group-hover:text-muted-foreground transition-colors">
              <path d="M7 17l9.2-9.2M17 17V8H8" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
