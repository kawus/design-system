"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
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
    <div className="space-y-24">
      {/* ═══ HERO SECTION ═══ */}
      <section className="relative flex flex-col items-center text-center py-24 overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 blur-3xl" />

        <div className="relative z-10 flex flex-col items-center gap-6 max-w-3xl mx-auto">
          <Badge
            variant="outline"
            className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground px-3 py-1"
          >
            Introducing V2.0
          </Badge>

          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-gradient leading-[1.1]">
            Build products at the
            <br />
            speed of thought
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl">
            The modern platform for teams who ship fast. Designed for developers,
            loved by everyone.
          </p>

          <div className="flex items-center gap-3 mt-2">
            <Button size="lg">
              Get started free
            </Button>
            <Button variant="outline" size="lg" className="gradient-border">
              View documentation
            </Button>
          </div>
        </div>
      </section>

      {/* ═══ FEATURE GRID ═══ */}
      <section className="py-16">
        <div className="text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
            Capabilities
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gradient">
            Everything you need to ship
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="glass gradient-border rounded-xl p-6 transition-all hover:border-white/20 hover:bg-white/[0.08]"
            >
              <div className="flex items-center justify-center size-10 rounded-lg bg-white/5 border border-white/10 mb-4">
                <feature.icon className="size-5 text-muted-foreground" />
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ BENTO GRID ═══ */}
      <section className="py-16">
        <div className="text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
            Platform
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gradient">
            Designed for scale
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Large card — spans 2 cols */}
          <div className="lg:col-span-2 lg:row-span-2 glass gradient-border rounded-xl overflow-hidden flex flex-col">
            <div className="flex-1 min-h-[200px] bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-transparent p-6 flex items-end">
              <div className="w-full rounded-lg bg-white/5 border border-white/10 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-3">
                  <div className="size-2 rounded-full bg-green-400" />
                  <span className="text-xs font-mono text-muted-foreground">All systems operational</span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[92, 78, 95].map((val, i) => (
                    <div key={i} className="space-y-1">
                      <div className="h-16 rounded bg-white/5 flex items-end p-1">
                        <div
                          className="w-full rounded bg-gradient-to-t from-blue-500/40 to-blue-500/10"
                          style={{ height: `${val}%` }}
                        />
                      </div>
                      <p className="text-[10px] font-mono text-muted-foreground text-center">
                        {["API", "Edge", "DB"][i]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-1">Observability dashboard</h3>
              <p className="text-sm text-muted-foreground">
                Real-time metrics across your entire stack. Instant alerts when something drifts.
              </p>
            </div>
          </div>

          {/* Small card 1 */}
          <div className="lg:col-span-2 glass gradient-border rounded-xl p-6 flex items-start gap-4">
            <div className="flex items-center justify-center size-10 rounded-lg bg-white/5 border border-white/10 shrink-0">
              <IconLightning className="size-5 text-muted-foreground" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Instant deployments</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Push to deploy in under 3 seconds. Atomic rollbacks if anything goes wrong. Every commit gets a unique preview URL.
              </p>
            </div>
          </div>

          {/* Small card 2 */}
          <div className="lg:col-span-2 glass gradient-border rounded-xl p-6 flex items-start gap-4">
            <div className="flex items-center justify-center size-10 rounded-lg bg-white/5 border border-white/10 shrink-0">
              <IconShield className="size-5 text-muted-foreground" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Zero-trust security</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Every request is authenticated at the edge. Automatic TLS, DDoS mitigation, and WAF included with every plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATS / SOCIAL PROOF ═══ */}
      <section className="py-16">
        <div className="glass gradient-border rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="text-4xl font-semibold tracking-tight">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIAL ═══ */}
      <section className="py-16 flex justify-center">
        <div className="gradient-border glass rounded-xl p-8 md:p-10 max-w-2xl w-full">
          <blockquote className="text-lg italic text-foreground/90 leading-relaxed mb-6">
            &ldquo;We migrated our entire platform in a weekend. The DX is unmatched — it feels
            like the tool was built by people who actually ship products, not just sell them.&rdquo;
          </blockquote>
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback>SK</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Sarah Kim</p>
              <p className="text-xs text-muted-foreground">
                Head of Engineering, Acme Corp
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA SECTION ═══ */}
      <section className="relative py-24 flex flex-col items-center text-center overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 blur-3xl" />

        <div className="relative z-10 flex flex-col items-center gap-6 max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gradient">
            Start building today
          </h2>
          <p className="text-muted-foreground text-lg">
            Join thousands of teams shipping faster with a platform that gets out of your way.
          </p>

          <div className="flex w-full max-w-sm items-center gap-2">
            <Input
              type="email"
              placeholder="you@company.com"
              className="h-10"
            />
            <Button size="lg" className="shrink-0">
              Get started
            </Button>
          </div>

          <p className="text-xs text-muted-foreground">
            No credit card required. Free for small teams.
          </p>
        </div>
      </section>
    </div>
  )
}
