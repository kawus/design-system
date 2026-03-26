"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

/* ─── Inline SVG Icons ─── */
function IconLightning({ className }: { className?: string }) {
  return (
    <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  )
}

function IconChart({ className }: { className?: string }) {
  return (
    <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <path d="M18 17V9" />
      <path d="M13 17V5" />
      <path d="M8 17v-3" />
    </svg>
  )
}

function IconShield({ className }: { className?: string }) {
  return (
    <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function IconGlobe({ className }: { className?: string }) {
  return (
    <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  )
}

function IconLayers({ className }: { className?: string }) {
  return (
    <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  )
}

function IconTerminal({ className }: { className?: string }) {
  return (
    <svg className={cn("size-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  )
}

/* ─── Feature data ─── */
const features = [
  {
    icon: IconLightning,
    title: "Blazing Fast",
    description: "Sub-50ms response times with edge-first architecture. Your users never wait.",
  },
  {
    icon: IconChart,
    title: "Real-time Analytics",
    description: "Live dashboards with granular event tracking. Know what's happening, as it happens.",
  },
  {
    icon: IconShield,
    title: "Enterprise Security",
    description: "SOC 2 Type II certified. End-to-end encryption, SSO, and role-based access out of the box.",
  },
  {
    icon: IconGlobe,
    title: "Global Edge Network",
    description: "Deployed across 40+ regions. Automatic failover. 99.9% uptime guaranteed.",
  },
  {
    icon: IconLayers,
    title: "Composable Primitives",
    description: "Headless components that adapt to your design system. Zero opinions, full control.",
  },
  {
    icon: IconTerminal,
    title: "Developer-first CLI",
    description: "Ship from your terminal. Git-native workflows with instant preview deployments.",
  },
]

const stats = [
  { value: "10,000+", label: "Active teams" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "50ms", label: "Avg response" },
  { value: "4.9/5", label: "User rating" },
]

/* ─── Main Showcase ─── */
export function MarketingShowcase() {
  return (
    <div className="space-y-20">
      {/* ═══ HERO SECTION ═══ */}
      <section className="flex flex-col items-center text-center pt-16 pb-8">
        <div className="flex flex-col items-center gap-5 max-w-2xl mx-auto">
          <Badge
            variant="outline"
            className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60 px-3 py-1"
          >
            Introducing V2.0
          </Badge>

          <h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-snug">
            Build products at the
            <br />
            speed of thought
          </h1>

          <p className="text-[15px] text-muted-foreground/70 max-w-lg">
            The modern platform for teams who ship fast. Designed for developers,
            loved by everyone.
          </p>

          <div className="flex items-center gap-3 mt-2">
            <Button>
              Get started free
            </Button>
            <Button variant="outline">
              View documentation
            </Button>
          </div>
        </div>
      </section>

      {/* ═══ FEATURE GRID ═══ */}
      <section>
        <div className="text-center mb-12">
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground/60 mb-3">
            Capabilities
          </p>
          <h2 className="text-2xl font-medium tracking-tight text-muted-foreground">
            Everything you need to ship
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-border/50 bg-card/30 p-5 transition-colors hover:bg-accent/30"
            >
              <div className="flex items-center justify-center size-8 rounded-lg bg-foreground/5 mb-3">
                <feature.icon className="size-4 text-muted-foreground" />
              </div>
              <h3 className="text-sm font-medium mb-1.5">{feature.title}</h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ BENTO GRID ═══ */}
      <section>
        <div className="text-center mb-12">
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground/60 mb-3">
            Platform
          </p>
          <h2 className="text-2xl font-medium tracking-tight text-muted-foreground">
            Designed for scale
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Large card — spans 2 cols */}
          <div className="lg:col-span-2 lg:row-span-2 rounded-xl border border-border/50 bg-card/30 overflow-hidden flex flex-col">
            <div className="flex-1 min-h-[200px] bg-gradient-to-br from-foreground/[0.03] to-transparent p-6 flex items-end">
              <div className="w-full rounded-lg border border-border/50 bg-background/50 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="size-1.5 rounded-full bg-green-400/70" />
                  <span className="text-[11px] font-mono text-muted-foreground/60">All systems operational</span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[92, 78, 95].map((val, i) => (
                    <div key={i} className="space-y-1">
                      <div className="h-14 rounded bg-foreground/[0.03] flex items-end p-1">
                        <div
                          className="w-full rounded bg-foreground/10"
                          style={{ height: `${val}%` }}
                        />
                      </div>
                      <p className="text-[10px] font-mono text-muted-foreground/50 text-center">
                        {["API", "Edge", "DB"][i]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-sm font-medium mb-1">Observability dashboard</h3>
              <p className="text-[13px] text-muted-foreground">
                Real-time metrics across your entire stack. Instant alerts when something drifts.
              </p>
            </div>
          </div>

          {/* Small card 1 */}
          <div className="lg:col-span-2 rounded-xl border border-border/50 bg-card/30 p-5 flex items-start gap-4">
            <div className="flex items-center justify-center size-8 rounded-lg bg-foreground/5 shrink-0">
              <IconLightning className="size-4 text-muted-foreground" />
            </div>
            <div>
              <h3 className="text-sm font-medium mb-1">Instant deployments</h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed">
                Push to deploy in under 3 seconds. Atomic rollbacks if anything goes wrong. Every commit gets a unique preview URL.
              </p>
            </div>
          </div>

          {/* Small card 2 */}
          <div className="lg:col-span-2 rounded-xl border border-border/50 bg-card/30 p-5 flex items-start gap-4">
            <div className="flex items-center justify-center size-8 rounded-lg bg-foreground/5 shrink-0">
              <IconShield className="size-4 text-muted-foreground" />
            </div>
            <div>
              <h3 className="text-sm font-medium mb-1">Zero-trust security</h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed">
                Every request is authenticated at the edge. Automatic TLS, DDoS mitigation, and WAF included with every plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATS / SOCIAL PROOF ═══ */}
      <section>
        <div className="rounded-xl border border-border/50 bg-card/30 p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="text-2xl font-medium tracking-tight">
                  {stat.value}
                </span>
                <span className="text-[13px] text-muted-foreground mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIAL ═══ */}
      <section className="flex justify-center">
        <div className="rounded-xl border border-border/50 bg-card/30 p-8 max-w-2xl w-full">
          <blockquote className="text-[15px] text-muted-foreground leading-relaxed mb-5">
            &ldquo;We migrated our entire platform in a weekend. The DX is unmatched — it feels
            like the tool was built by people who actually ship products, not just sell them.&rdquo;
          </blockquote>
          <div className="flex items-center gap-3">
            <Avatar className="h-7 w-7">
              <AvatarFallback className="text-[10px]">SK</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Sarah Kim</p>
              <p className="text-[11px] text-muted-foreground/60">
                Head of Engineering, Acme Corp
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA SECTION ═══ */}
      <section className="flex flex-col items-center text-center py-16">
        <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
          <h2 className="text-2xl font-medium tracking-tight text-muted-foreground">
            Start building today
          </h2>
          <p className="text-[15px] text-muted-foreground/70">
            Join thousands of teams shipping faster with a platform that gets out of your way.
          </p>

          <div className="flex w-full max-w-sm items-center gap-2 mt-2">
            <Input
              type="email"
              placeholder="you@company.com"
              className="h-9"
            />
            <Button className="shrink-0">
              Get started
            </Button>
          </div>

          <p className="text-[11px] text-muted-foreground/50">
            No credit card required. Free for small teams.
          </p>
        </div>
      </section>
    </div>
  )
}
