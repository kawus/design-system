"use client";

import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs uppercase tracking-widest text-muted-foreground font-mono mb-6">
      {children}
    </h2>
  );
}

/* ═══════════════════════════════════════════
   CONTENT SHOWCASE
   Prose, blockquotes, code, lists, cards
   ═══════════════════════════════════════════ */

export function ContentShowcase() {
  return (
    <div className="space-y-0">
      {/* ── PROSE ── */}
      <section>
        <SectionTitle>Prose</SectionTitle>
        <p className="text-sm text-muted-foreground mb-8">
          Long-form content with proper reading measure, spacing, and hierarchy.
        </p>
        <div className="bg-card rounded-xl p-8 md:p-12 ring-1 ring-foreground/5">
          <article className="max-w-2xl space-y-6">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              March 26, 2026
            </p>
            <h2 className="text-xl font-medium tracking-tight">
              Why we rebuilt our component library
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              After two years of incremental changes, our design system had accumulated enough
              inconsistencies that it was slowing us down rather than speeding us up. Components
              that should have been interchangeable weren&apos;t. Tokens that should have been
              semantic were still referencing raw hex values.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We made the decision to{" "}
              <span className="text-foreground font-medium">start fresh with constraints</span>.
              Every component would use semantic tokens. Every variant would map to a user intent.
              No more <code className="text-sm bg-muted px-1.5 py-0.5 rounded font-mono">gray-400</code>{" "}
              when we meant <code className="text-sm bg-muted px-1.5 py-0.5 rounded font-mono">muted-foreground</code>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The result is a system that&apos;s smaller, more consistent, and dramatically faster
              to build with. This is how we did it.
            </p>
          </article>
        </div>
      </section>

      <Separator className="my-16" />

      {/* ── BLOCKQUOTES ── */}
      <section>
        <SectionTitle>Blockquotes</SectionTitle>
        <p className="text-sm text-muted-foreground mb-8">
          Pull quotes, callouts, and highlighted excerpts.
        </p>
        <div className="bg-card rounded-xl p-8 md:p-12 ring-1 ring-foreground/5 space-y-8">
          {/* Style 1: Left border */}
          <blockquote className="border-l-2 border-foreground/20 pl-6 py-1">
            <p className="text-[15px] italic text-muted-foreground leading-relaxed">
              &ldquo;A design system isn&apos;t a project. It&apos;s a product, serving products.&rdquo;
            </p>
            <footer className="mt-3 text-sm text-muted-foreground/60">
              — Brad Frost
            </footer>
          </blockquote>

          {/* Style 2: Pull quote */}
          <div className="py-6">
            <p className="text-xl font-medium tracking-tight leading-snug text-muted-foreground max-w-xl">
              &ldquo;Ship the system, then let the system ship for you.&rdquo;
            </p>
          </div>

          {/* Style 3: Card-style callout */}
          <div className="glass gradient-border rounded-xl p-6">
            <div className="flex gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-chart-1 shrink-0 mt-0.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              <div>
                <p className="text-sm font-medium mb-1">Design Principle</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Every component should work in isolation. If a component requires context
                  about its parent to render correctly, it&apos;s not a component — it&apos;s a
                  fragment.
                </p>
              </div>
            </div>
          </div>

          {/* Style 4: Warning callout */}
          <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-6">
            <div className="flex gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-destructive shrink-0 mt-0.5">
                <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              <div>
                <p className="text-sm font-medium text-destructive mb-1">Breaking Change</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The <code className="text-xs bg-destructive/10 px-1.5 py-0.5 rounded font-mono">--color-gray-*</code> tokens
                  have been removed in v0.2.0. Use semantic tokens instead.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* ── CODE BLOCKS ── */}
      <section>
        <SectionTitle>Code</SectionTitle>
        <p className="text-sm text-muted-foreground mb-8">
          Inline code, code blocks, and terminal-style output.
        </p>
        <div className="bg-card rounded-xl p-8 md:p-12 ring-1 ring-foreground/5 space-y-8">
          {/* Inline code in prose */}
          <div className="max-w-2xl">
            <p className="text-muted-foreground leading-relaxed">
              Import the <code className="text-sm bg-muted px-1.5 py-0.5 rounded font-mono">Button</code> component
              from <code className="text-sm bg-muted px-1.5 py-0.5 rounded font-mono">@/components/ui/button</code> and
              use the <code className="text-sm bg-muted px-1.5 py-0.5 rounded font-mono">variant</code> prop to
              control its appearance.
            </p>
          </div>

          {/* Code block */}
          <div className="rounded-xl border border-border/50 bg-background overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-border/50">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-foreground/10" />
                  <div className="w-3 h-3 rounded-full bg-foreground/10" />
                  <div className="w-3 h-3 rounded-full bg-foreground/10" />
                </div>
                <span className="text-xs font-mono text-muted-foreground ml-2">button.tsx</span>
              </div>
              <button className="text-xs text-muted-foreground hover:text-foreground transition-colors font-mono">
                Copy
              </button>
            </div>
            <pre className="p-4 overflow-x-auto text-sm font-mono leading-relaxed">
              <code>{`import { Button } from "@/components/ui/button"

export function MyComponent() {
  return (
    <div className="flex gap-3">
      <Button variant="default">Save changes</Button>
      <Button variant="outline">Cancel</Button>
      <Button variant="ghost">Reset</Button>
    </div>
  )
}`}</code>
            </pre>
          </div>

          {/* Terminal output */}
          <div className="rounded-xl border border-border/50 bg-background overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/50">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground">
                <polyline points="4 17 10 11 4 5" />
                <line x1="12" y1="19" x2="20" y2="19" />
              </svg>
              <span className="text-xs font-mono text-muted-foreground">Terminal</span>
            </div>
            <pre className="p-4 overflow-x-auto text-sm font-mono leading-relaxed text-muted-foreground">
              <code>{`$ npx shadcn@latest add button badge card
✔ Installing dependencies
✔ Created 3 files:
  - src/components/ui/button.tsx
  - src/components/ui/badge.tsx
  - src/components/ui/card.tsx

$ npm run build
✓ Compiled successfully in 1.8s
✓ No TypeScript errors`}</code>
            </pre>
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* ── LISTS ── */}
      <section>
        <SectionTitle>Lists</SectionTitle>
        <p className="text-sm text-muted-foreground mb-8">
          Ordered, unordered, and description lists with consistent spacing.
        </p>
        <div className="bg-card rounded-xl p-8 md:p-12 ring-1 ring-foreground/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Unordered */}
            <div>
              <p className="text-xs font-mono text-muted-foreground/60 mb-4">unordered</p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-foreground/30 mt-1.5">
                    <svg width="6" height="6"><circle cx="3" cy="3" r="3" fill="currentColor"/></svg>
                  </span>
                  <span>Semantic color tokens with automatic dark mode</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground/30 mt-1.5">
                    <svg width="6" height="6"><circle cx="3" cy="3" r="3" fill="currentColor"/></svg>
                  </span>
                  <span>Composable components built on Radix primitives</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground/30 mt-1.5">
                    <svg width="6" height="6"><circle cx="3" cy="3" r="3" fill="currentColor"/></svg>
                  </span>
                  <span>Utility classes for glass, glow, and gradient effects</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground/30 mt-1.5">
                    <svg width="6" height="6"><circle cx="3" cy="3" r="3" fill="currentColor"/></svg>
                  </span>
                  <span>Full TypeScript support with strict types</span>
                </li>
              </ul>
            </div>

            {/* Ordered */}
            <div>
              <p className="text-xs font-mono text-muted-foreground/60 mb-4">ordered</p>
              <ol className="space-y-3 text-muted-foreground">
                {["Install the design system package", "Configure your tailwind.config.ts", "Import the global styles", "Start using components"].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-xs font-mono text-muted-foreground/40 w-5 shrink-0 mt-0.5 text-right">
                      {i + 1}.
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Checklist */}
          <div className="mt-12">
            <p className="text-xs font-mono text-muted-foreground/60 mb-4">checklist</p>
            <ul className="space-y-3 text-muted-foreground">
              {[
                { text: "Set up design tokens", done: true },
                { text: "Build core components", done: true },
                { text: "Create showcase gallery", done: true },
                { text: "Add article page template", done: true },
                { text: "Figma sync integration", done: false },
                { text: "Theme studio editor", done: false },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  {item.done ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-chart-2 shrink-0">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground/30 shrink-0">
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  )}
                  <span className={item.done ? "line-through text-muted-foreground/50" : ""}>
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* ── CONTENT CARDS ── */}
      <section>
        <SectionTitle>Content Cards</SectionTitle>
        <p className="text-sm text-muted-foreground mb-8">
          Blog posts, changelog entries, and team member cards.
        </p>
        <div className="space-y-8">
          {/* Blog post cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                tag: "Engineering",
                title: "Migrating to semantic tokens",
                desc: "How we replaced 200+ color references with 24 semantic tokens.",
                date: "Mar 24, 2026",
              },
              {
                tag: "Design",
                title: "The case for dark-first",
                desc: "Why we design in dark mode and adapt to light — not the other way around.",
                date: "Mar 20, 2026",
              },
              {
                tag: "Product",
                title: "Introducing the showcase",
                desc: "A living gallery that replaces static documentation with interactive examples.",
                date: "Mar 18, 2026",
              },
            ].map((post) => (
              <Card key={post.title} className="group cursor-pointer transition-colors hover:bg-accent/30">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-[10px] font-mono uppercase tracking-wider">
                      {post.tag}
                    </Badge>
                    <span className="text-xs font-mono text-muted-foreground">{post.date}</span>
                  </div>
                  <CardTitle className="group-hover:text-foreground transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription>{post.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Changelog entry */}
          <div className="bg-card rounded-xl p-8 ring-1 ring-foreground/5">
            <p className="text-xs font-mono text-muted-foreground/60 mb-6">changelog</p>
            <div className="space-y-8">
              {[
                {
                  version: "v0.1.0",
                  date: "Mar 26, 2026",
                  changes: [
                    "Initial release with 22 components",
                    "Semantic token system with dark/light themes",
                    "Custom utilities: glass, glow, gradient-border, noise",
                    "Interactive showcase gallery",
                  ],
                },
                {
                  version: "v0.0.2",
                  date: "Mar 20, 2026",
                  changes: [
                    "Replaced oklch neutral scale with refined values",
                    "Added chart-1 through chart-5 tokens",
                    "Fixed border opacity in dark mode",
                  ],
                },
              ].map((release) => (
                <div key={release.version} className="flex gap-6">
                  <div className="shrink-0 w-20">
                    <p className="font-mono text-sm font-medium">{release.version}</p>
                    <p className="text-xs text-muted-foreground font-mono">{release.date}</p>
                  </div>
                  <div className="border-l border-border/50 pl-6">
                    <ul className="space-y-2">
                      {release.changes.map((change, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-foreground/20 shrink-0">—</span>
                          {change}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team member cards */}
          <div>
            <p className="text-xs font-mono text-muted-foreground/60 mb-4">team</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { initials: "KA", name: "Kawus A.", role: "Product" },
                { initials: "JL", name: "Jamie L.", role: "Design" },
                { initials: "MR", name: "Morgan R.", role: "Engineering" },
                { initials: "SP", name: "Sam P.", role: "Engineering" },
              ].map((person) => (
                <div
                  key={person.initials}
                  className="flex flex-col items-center gap-3 rounded-xl border border-border/50 bg-card/50 p-6 text-center"
                >
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-accent text-sm font-medium">
                      {person.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{person.name}</p>
                    <p className="text-xs text-muted-foreground">{person.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* ── EMPTY STATES ── */}
      <section>
        <SectionTitle>Empty States</SectionTitle>
        <p className="text-sm text-muted-foreground mb-8">
          What users see when there&apos;s nothing to show yet.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Empty state 1 */}
          <div className="bg-card rounded-xl p-12 ring-1 ring-foreground/5 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M12 8v8" />
                <path d="M8 12h8" />
              </svg>
            </div>
            <h3 className="text-sm font-medium mb-1">No components yet</h3>
            <p className="text-xs text-muted-foreground max-w-[220px] mb-4">
              Add your first component to start building your design system.
            </p>
            <Badge variant="outline" className="text-xs cursor-pointer hover:bg-accent/50 transition-colors">
              Create component
            </Badge>
          </div>

          {/* Empty state 2 */}
          <div className="bg-card rounded-xl p-12 ring-1 ring-foreground/5 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <h3 className="text-sm font-medium mb-1">No comments</h3>
            <p className="text-xs text-muted-foreground max-w-[220px]">
              Comments will appear here when your team starts reviewing components.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
