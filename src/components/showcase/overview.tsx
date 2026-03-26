"use client";

import {
  Palette,
  Type,
  Layers,
  Component,
  Monitor,
  Moon,
  Sun,
  ArrowRight,
  Package,
  Sparkles,
} from "lucide-react";

function FeatureCard({
  icon: Icon,
  title,
  description,
  onNavigate,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  onNavigate?: () => void;
}) {
  return (
    <button
      onClick={onNavigate}
      className="group text-left rounded-xl border border-border/50 bg-card p-6 hover:border-border hover:bg-accent/30 transition-all"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center justify-center size-9 rounded-lg bg-muted">
          <Icon className="size-4 text-foreground" />
        </div>
        <ArrowRight className="size-3.5 text-muted-foreground/0 group-hover:text-muted-foreground transition-colors" />
      </div>
      <h3 className="text-[15px] font-medium text-foreground mb-1">{title}</h3>
      <p className="text-[13px] text-muted-foreground leading-relaxed">
        {description}
      </p>
    </button>
  );
}

function StatBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="text-2xl font-medium tracking-tight text-foreground">
        {value}
      </p>
      <p className="text-[13px] text-muted-foreground mt-1">{label}</p>
    </div>
  );
}

export function OverviewShowcase({
  onNavigate,
}: {
  onNavigate?: (id: string) => void;
}) {
  const nav = (id: string) => () => onNavigate?.(id);

  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="pt-4">
        <p className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground/60 mb-4">
          Open Source
        </p>
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight max-w-2xl">
          A design system built for shipping
        </h1>
        <p className="mt-4 text-[15px] text-muted-foreground leading-relaxed max-w-xl">
          oklch color tokens, Geist typography, and 41 components distributed as
          a shadcn registry. Install what you need, keep what works.
        </p>
        <div className="mt-8 flex items-center gap-3">
          <button
            onClick={nav("installation")}
            className="inline-flex items-center gap-2 h-9 px-4 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Get Started
            <ArrowRight className="size-3.5" />
          </button>
          <button
            onClick={nav("core")}
            className="inline-flex items-center gap-2 h-9 px-4 rounded-lg border border-border bg-background text-sm font-medium text-foreground hover:bg-accent/50 transition-colors"
          >
            Browse Components
          </button>
        </div>
      </section>

      {/* Install snippet */}
      <section>
        <div className="rounded-xl border border-border/50 bg-card overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/50 bg-muted/30">
            <span className="size-2 rounded-full bg-muted-foreground/20" />
            <span className="size-2 rounded-full bg-muted-foreground/20" />
            <span className="size-2 rounded-full bg-muted-foreground/20" />
            <span className="text-[11px] font-mono text-muted-foreground/40 ml-2">
              Terminal
            </span>
          </div>
          <div className="p-5 font-mono text-[13px] leading-relaxed">
            <p className="text-muted-foreground/50"># Add the registry</p>
            <p className="text-foreground mt-1">
              npx shadcn add --registry https://next-design-system-nu.vercel.app/r button
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section>
        <div className="flex items-center justify-center gap-16">
          <StatBlock value="41" label="Components" />
          <StatBlock value="1,900+" label="Icons" />
          <StatBlock value="2" label="Themes" />
        </div>
      </section>

      {/* Feature grid */}
      <section>
        <h2 className="text-xs uppercase tracking-widest text-muted-foreground font-mono mb-6">
          What&apos;s Inside
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <FeatureCard
            icon={Palette}
            title="Colors"
            description="oklch color palette with semantic tokens. Perceptually uniform, consistent across light and dark."
            onNavigate={nav("colors")}
          />
          <FeatureCard
            icon={Type}
            title="Typeface"
            description="Geist Sans and Geist Mono. 7-step type scale from Display down to Micro."
            onNavigate={nav("typeface")}
          />
          <FeatureCard
            icon={Layers}
            title="Surfaces"
            description="Spacing scale, border radius tokens, glow, glass, gradient borders, and noise."
            onNavigate={nav("surfaces")}
          />
          <FeatureCard
            icon={Component}
            title="Components"
            description="41 production-ready components. Buttons, dialogs, tables, forms, and more."
            onNavigate={nav("core")}
          />
          <FeatureCard
            icon={Sparkles}
            title="Icons"
            description="1,900+ Lucide icons. Searchable, consistent 24px grid with 2px stroke."
            onNavigate={nav("icons")}
          />
          <FeatureCard
            icon={Package}
            title="Registry"
            description="Install via shadcn CLI. Cherry-pick components, dependencies resolve automatically."
            onNavigate={nav("installation")}
          />
        </div>
      </section>

      {/* Theme preview */}
      <section>
        <h2 className="text-xs uppercase tracking-widest text-muted-foreground font-mono mb-6">
          Light & Dark
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="rounded-xl border border-border/50 p-8 bg-card flex flex-col items-center justify-center gap-4">
            <Sun className="size-6 text-foreground" />
            <div className="flex items-center gap-2">
              <span className="size-5 rounded-md bg-background border border-border" />
              <span className="size-5 rounded-md bg-foreground" />
              <span className="size-5 rounded-md bg-muted" />
              <span className="size-5 rounded-md bg-accent" />
              <span className="size-5 rounded-md bg-primary" />
              <span className="size-5 rounded-md bg-destructive" />
            </div>
            <p className="text-[13px] text-muted-foreground">
              Clean, minimal, Vercel-like
            </p>
          </div>
          <div className="rounded-xl border border-border/50 p-8 bg-card flex flex-col items-center justify-center gap-4">
            <Moon className="size-6 text-foreground" />
            <div className="flex items-center gap-2">
              <span className="glow size-5 rounded-md bg-card border border-border" />
              <span className="size-5 rounded-md bg-foreground" />
              <span className="size-5 rounded-md bg-muted" />
              <span className="glass size-5 rounded-md" />
              <span className="size-5 rounded-md bg-primary" />
              <span className="size-5 rounded-md bg-destructive" />
            </div>
            <p className="text-[13px] text-muted-foreground">
              Cinematic, Linear-inspired
            </p>
          </div>
        </div>
      </section>

      {/* Example pages callout */}
      <section>
        <h2 className="text-xs uppercase tracking-widest text-muted-foreground font-mono mb-6">
          See It in Action
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            {
              id: "patterns",
              title: "Dashboard",
              desc: "Analytics, stat cards, activity feeds, settings",
            },
            {
              id: "marketing",
              title: "Landing Page",
              desc: "Hero, features, social proof, pricing CTA",
            },
            {
              id: "article",
              title: "Article",
              desc: "Long-form editorial with callouts and diagrams",
            },
            {
              id: "blog-post",
              title: "Blog Post",
              desc: "Video, audio, code blocks, reader engagement",
            },
          ].map((example) => (
            <button
              key={example.id}
              onClick={nav(example.id)}
              className="group text-left rounded-xl border border-border/50 bg-card p-5 hover:border-border hover:bg-accent/30 transition-all flex items-center justify-between"
            >
              <div>
                <p className="text-[15px] font-medium text-foreground">
                  {example.title}
                </p>
                <p className="text-[13px] text-muted-foreground mt-0.5">
                  {example.desc}
                </p>
              </div>
              <ArrowRight className="size-4 text-muted-foreground/0 group-hover:text-muted-foreground transition-colors shrink-0 ml-4" />
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
