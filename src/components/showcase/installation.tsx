"use client";

import { useState, useCallback } from "react";

const REGISTRY_URL = "https://next-design-system-nu.vercel.app/r";

const components = [
  "accordion", "alert", "alert-dialog", "aspect-ratio", "avatar",
  "badge", "breadcrumb", "button", "calendar", "card", "checkbox",
  "collapsible", "command", "context-menu", "dialog", "dropdown-menu",
  "hover-card", "input", "input-group", "label", "menubar",
  "navigation-menu", "pagination", "popover", "progress", "radio-group",
  "resizable", "scroll-area", "select", "separator", "sheet", "skeleton",
  "slider", "sonner", "switch", "table", "tabs", "textarea", "toggle",
  "toggle-group", "tooltip",
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [text]);

  return (
    <button
      onClick={handleCopy}
      className="absolute top-3 right-3 px-2 py-1 rounded-md text-[11px] font-mono text-muted-foreground hover:text-foreground bg-muted/50 hover:bg-muted transition-colors"
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

function CodeBlock({ code, language = "bash" }: { code: string; language?: string }) {
  return (
    <div className="relative group">
      <pre className="bg-card rounded-lg border border-border/50 p-4 overflow-x-auto">
        <code className="text-[13px] font-mono text-foreground leading-relaxed whitespace-pre">
          {code}
        </code>
      </pre>
      <CopyButton text={code} />
    </div>
  );
}

function Step({ number, title, children }: { number: number; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center size-7 rounded-full bg-primary text-primary-foreground text-xs font-medium shrink-0">
          {number}
        </div>
        <div className="flex-1 w-px bg-border/50 mt-3" />
      </div>
      <div className="flex-1 pb-10">
        <h3 className="text-[15px] font-medium text-foreground mb-3">{title}</h3>
        {children}
      </div>
    </div>
  );
}

export function InstallationShowcase() {
  return (
    <div className="space-y-12">
      {/* Quick start */}
      <section>
        <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-mono mb-6">
          Quick Start
        </h3>
        <p className="text-sm text-muted-foreground mb-6 max-w-2xl">
          Install any component directly into your existing shadcn/ui project. Components come with the full design system theme — oklch colors, Geist fonts, light/dark mode, and custom utilities.
        </p>

        <div className="space-y-0">
          <Step number={1} title="Add the registry to your project">
            <p className="text-sm text-muted-foreground mb-3">
              Open your <code className="text-[13px] font-mono bg-muted px-1.5 py-0.5 rounded">components.json</code> and add the registry:
            </p>
            <CodeBlock
              language="json"
              code={`{
  "registries": {
    "@ds": "${REGISTRY_URL}/{name}.json"
  }
}`}
            />
          </Step>

          <Step number={2} title="Install the theme">
            <p className="text-sm text-muted-foreground mb-3">
              The theme includes all color tokens, dark mode, and custom CSS utilities like <code className="text-[13px] font-mono bg-muted px-1.5 py-0.5 rounded">.glow</code>, <code className="text-[13px] font-mono bg-muted px-1.5 py-0.5 rounded">.glass</code>, and <code className="text-[13px] font-mono bg-muted px-1.5 py-0.5 rounded">.gradient-border</code>.
            </p>
            <CodeBlock code="npx shadcn add @ds/theme" />
          </Step>

          <Step number={3} title="Install components">
            <p className="text-sm text-muted-foreground mb-3">
              Add individual components as you need them. Dependencies are resolved automatically.
            </p>
            <CodeBlock code={`npx shadcn add @ds/button
npx shadcn add @ds/card @ds/dialog @ds/table
npx shadcn add @ds/command @ds/popover`} />
          </Step>

          <Step number={4} title="Use in your code">
            <p className="text-sm text-muted-foreground mb-3">
              Components import exactly like standard shadcn/ui.
            </p>
            <CodeBlock
              language="tsx"
              code={`import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Get Started</Button>
      </CardContent>
    </Card>
  )
}`}
            />
          </Step>
        </div>
      </section>

      {/* Alternative: direct URL */}
      <section>
        <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-mono mb-6">
          Without Registry Config
        </h3>
        <p className="text-sm text-muted-foreground mb-4 max-w-2xl">
          You can also install components directly by URL without modifying your <code className="text-[13px] font-mono bg-muted px-1.5 py-0.5 rounded">components.json</code>:
        </p>
        <CodeBlock code={`npx shadcn add ${REGISTRY_URL}/button.json`} />
      </section>

      {/* Available components */}
      <section>
        <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-mono mb-6">
          Available Components
        </h3>
        <p className="text-sm text-muted-foreground mb-4 max-w-2xl">
          {components.length} components available. Install everything at once or pick what you need.
        </p>

        {/* Install all */}
        <div className="mb-6">
          <p className="text-sm font-medium text-foreground mb-2">Install all components</p>
          <CodeBlock code={`npx shadcn add @ds/theme ${components.map(c => `@ds/${c}`).join(" ")}`} />
        </div>

        {/* Component grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {components.map((name) => (
            <div
              key={name}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border/50 bg-card hover:bg-accent/50 transition-colors group"
            >
              <span className="text-[13px] font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                {name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Requirements */}
      <section>
        <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-mono mb-6">
          Requirements
        </h3>
        <div className="bg-card rounded-lg border border-border/50 p-6">
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="size-1.5 rounded-full bg-foreground/40 mt-1.5 shrink-0" />
              <span>
                <span className="text-foreground font-medium">Next.js 15+</span> with App Router
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="size-1.5 rounded-full bg-foreground/40 mt-1.5 shrink-0" />
              <span>
                <span className="text-foreground font-medium">Tailwind CSS 4</span>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="size-1.5 rounded-full bg-foreground/40 mt-1.5 shrink-0" />
              <span>
                <span className="text-foreground font-medium">shadcn/ui</span> initialized in your project (<code className="font-mono bg-muted px-1.5 py-0.5 rounded text-[13px]">npx shadcn init</code>)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="size-1.5 rounded-full bg-foreground/40 mt-1.5 shrink-0" />
              <span>
                <span className="text-foreground font-medium">TypeScript</span> recommended
              </span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
