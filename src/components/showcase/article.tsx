"use client";

import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

/* ═══════════════════════════════════════════
   ARTICLE SHOWCASE
   A Linear /next–style narrative page
   ═══════════════════════════════════════════ */

export function ArticleShowcase() {
  return (
    <div className="-mx-6">
      {/* ── META HEADER ── */}
      <header className="max-w-3xl mx-auto px-6 pt-16 pb-8">
        <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">
          <span>designsystem.dev/next</span>
          <span className="text-border">—</span>
          <time>26 March 2026</time>
        </div>
      </header>

      {/* ── MAIN HEADLINE ── */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] text-gradient">
          Design systems
          <br />
          are infrastructure.
        </h1>
      </section>

      {/* ── OPENING NARRATIVE ── */}
      <section className="max-w-3xl mx-auto px-6 space-y-8">
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          For a decade, design systems were treated as style guides. A PDF passed between
          teams. A Figma file that drifted from production. A Storybook nobody maintained.
        </p>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          That era is ending. The best teams have realized that a design system isn't
          documentation — it's <span className="text-foreground font-medium">living
          infrastructure</span> that shapes every pixel shipped to production.
        </p>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          Components that compose. Tokens that propagate. Patterns that enforce consistency
          without demanding conformity. The system does the work so your team can focus on
          the product.
        </p>
      </section>

      {/* ── SPACER ── */}
      <div className="h-24 md:h-32" />

      {/* ── DATA CALLOUT — Full bleed ── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/30 to-transparent" />
        <div className="relative max-w-3xl mx-auto px-6">
          <p className="text-3xl md:text-4xl font-semibold tracking-tight leading-snug">
            Teams using a shared component system ship{" "}
            <span className="text-gradient">34% faster</span> and report{" "}
            <span className="text-gradient">68% fewer</span> visual inconsistencies
            across their product surface.
          </p>
        </div>
      </section>

      {/* ── SPACER ── */}
      <div className="h-24 md:h-32" />

      {/* ── ARCHITECTURE DIAGRAM — Full bleed ── */}
      <section className="w-full px-6 pb-24">
        <div className="max-w-5xl mx-auto rounded-2xl border border-border/50 bg-card/50 p-8 md:p-12 font-mono text-xs md:text-sm text-muted-foreground overflow-x-auto">
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
      <section className="max-w-3xl mx-auto px-6 space-y-16">
        <div>
          <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-12">
            What&apos;s new
          </h2>
        </div>

        {/* Feature 1 */}
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Semantic Tokens
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Colors are no longer hex values. They&apos;re <span className="text-foreground font-medium">intentions</span>.{" "}
            <code className="text-sm bg-muted px-2 py-0.5 rounded font-mono">--destructive</code> means
            danger everywhere — button, badge, toast, border. Change it once, it updates across
            every surface. Dark mode isn&apos;t a separate theme; it&apos;s the same tokens in a different
            context.
          </p>
          <div className="flex gap-3 pt-2">
            <div className="h-8 w-8 rounded-md bg-primary" />
            <div className="h-8 w-8 rounded-md bg-secondary" />
            <div className="h-8 w-8 rounded-md bg-accent" />
            <div className="h-8 w-8 rounded-md bg-muted" />
            <div className="h-8 w-8 rounded-md bg-destructive" />
          </div>
        </div>

        <Separator className="opacity-30" />

        {/* Feature 2 */}
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Glass & Glow
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Two utility classes that define the visual language.{" "}
            <code className="text-sm bg-muted px-2 py-0.5 rounded font-mono">.glass</code>{" "}
            gives you frosted translucency.{" "}
            <code className="text-sm bg-muted px-2 py-0.5 rounded font-mono">.glow</code>{" "}
            adds a cinematic halo. Combined, they create surfaces that feel like they exist
            in physical space — depth without drop shadows.
          </p>
          <div className="flex gap-4 pt-2">
            <div className="glass rounded-xl p-6 flex-1 text-center text-sm text-muted-foreground">
              .glass
            </div>
            <div className="glow rounded-xl bg-card p-6 flex-1 text-center text-sm text-muted-foreground">
              .glow
            </div>
          </div>
        </div>

        <Separator className="opacity-30" />

        {/* Feature 3 */}
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Gradient Border
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The <code className="text-sm bg-muted px-2 py-0.5 rounded font-mono">.gradient-border</code>{" "}
            utility uses a CSS mask trick to create borders that shimmer from light to dark.
            No extra markup. No JavaScript. Just a class that makes any element feel premium.
          </p>
          <div className="pt-2">
            <div className="gradient-border rounded-xl bg-card p-8 text-center text-sm text-muted-foreground">
              Any element. One class. Instant premium.
            </div>
          </div>
        </div>
      </section>

      {/* ── SPACER ── */}
      <div className="h-24 md:h-32" />

      {/* ── COMING SOON ── */}
      <section className="max-w-3xl mx-auto px-6 space-y-12">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-muted-foreground">
          Coming soon:
        </h2>

        <div className="space-y-8">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">
              Figma Sync
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Push tokens from code to Figma. Pull design changes back. One source of truth
              that actually stays in sync.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">
              Theme Studio
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              A visual editor for creating and previewing theme variants. Light, dark,
              high contrast, brand — all generated from a single set of base tokens.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">
              Component Analytics
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Track which components are used, where, and how often. Identify drift before
              it becomes debt. Deprecate with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* ── SPACER ── */}
      <div className="h-24 md:h-32" />

      {/* ── CLOSING STATEMENTS — Big typography ── */}
      <section className="max-w-3xl mx-auto px-6 space-y-12 pb-24">
        <p className="text-2xl md:text-3xl font-semibold tracking-tight leading-snug">
          The best design systems remove overhead.
        </p>
        <p className="text-2xl md:text-3xl font-semibold tracking-tight leading-snug text-muted-foreground">
          They don&apos;t ask for adoption — they make everything else harder without them.
        </p>
        <p className="text-2xl md:text-3xl font-semibold tracking-tight leading-snug text-muted-foreground/50">
          Build the system. Then let the system build for you.
        </p>
      </section>

      {/* ── SIGNATURE ── */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="flex items-center gap-4">
          <Avatar className="h-10 w-10">
            <AvatarFallback className="bg-accent text-sm font-medium">DS</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">Design System Team</p>
            <p className="text-xs text-muted-foreground">March 2026</p>
          </div>
        </div>
      </section>

      {/* ── FULL-WIDTH DIVIDER ── */}
      <div className="border-t border-border/50" />

      {/* ── FOOTER RESOURCES ── */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-8">
          <Badge variant="outline" className="font-mono text-[10px] uppercase tracking-widest">
            Learn more
          </Badge>
        </div>

        {/* Video placeholder */}
        <div className="rounded-2xl border border-border/50 bg-card/50 aspect-video flex items-center justify-center mb-8 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-chart-1/5 via-transparent to-chart-3/5" />
          <div className="relative text-center space-y-3">
            <div className="mx-auto w-16 h-16 rounded-full bg-foreground/10 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="ml-1">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
            <p className="text-sm text-muted-foreground">Watch the introduction — 4:32</p>
          </div>
        </div>

        {/* Resource links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="#" className="group flex items-center justify-between rounded-xl border border-border/50 bg-card/50 p-5 transition-colors hover:bg-accent/50">
            <div>
              <p className="text-sm font-medium group-hover:text-foreground transition-colors">Changelog</p>
              <p className="text-xs text-muted-foreground mt-1">What&apos;s new in v0.1.0</p>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground group-hover:text-foreground transition-colors">
              <path d="M7 17l9.2-9.2M17 17V8H8" />
            </svg>
          </a>
          <a href="#" className="group flex items-center justify-between rounded-xl border border-border/50 bg-card/50 p-5 transition-colors hover:bg-accent/50">
            <div>
              <p className="text-sm font-medium group-hover:text-foreground transition-colors">Getting Started</p>
              <p className="text-xs text-muted-foreground mt-1">Set up the system in 5 minutes</p>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground group-hover:text-foreground transition-colors">
              <path d="M7 17l9.2-9.2M17 17V8H8" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
