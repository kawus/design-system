"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { cn } from "@/lib/utils"

/* ------------------------------------------------------------------ */
/*  Inline SVG Icons                                                   */
/* ------------------------------------------------------------------ */

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M6 3l5 5-5 5" />
    </svg>
  )
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={className}>
      <path d="M8 3v10M3 8h10" />
    </svg>
  )
}

function ArrowUpIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M8 13V3M3 8l5-5 5 5" />
    </svg>
  )
}

function ArrowDownIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M8 3v10M3 8l5 5 5-5" />
    </svg>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 8.5l3.5 3.5L13 4" />
    </svg>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 4l8 8M12 4l-8 8" />
    </svg>
  )
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="7" cy="7" r="4" />
      <path d="M13 13l-3-3" />
    </svg>
  )
}

function BellIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M8 14c1.1 0 2-.9 2-2H6c0 1.1.9 2 2 2zM3 10V7a5 5 0 0110 0v3l1 2H2l1-2z" />
    </svg>
  )
}

function MessageIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2 3h12v8H4l-2 2V3z" />
    </svg>
  )
}

function GitMergeIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="4" cy="4" r="2" />
      <circle cx="12" cy="8" r="2" />
      <circle cx="4" cy="12" r="2" />
      <path d="M4 6v6M6 5c3 0 4 3 4 3" />
    </svg>
  )
}

function RocketIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M8 2s4 2 4 7l-1 2H5L4 9c0-5 4-7 4-7zM5 11l-1 3M11 11l1 3M6 14h4" />
    </svg>
  )
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="8" cy="5" r="3" />
      <path d="M2 14c0-3 3-5 6-5s6 2 6 5" />
    </svg>
  )
}

function SettingsIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="8" cy="8" r="2" />
      <path d="M8 1v2M8 13v2M1 8h2M13 8h2M2.9 2.9l1.4 1.4M11.7 11.7l1.4 1.4M13.1 2.9l-1.4 1.4M4.3 11.7l-1.4 1.4" />
    </svg>
  )
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M8 1L2 4v4c0 4 6 7 6 7s6-3 6-7V4L8 1z" />
    </svg>
  )
}

function CreditCardIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="1" y="3" width="14" height="10" rx="1.5" />
      <path d="M1 7h14" />
    </svg>
  )
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="6" cy="5" r="2.5" />
      <path d="M1 14c0-3 2.5-4.5 5-4.5s5 1.5 5 4.5" />
      <circle cx="12" cy="5" r="2" />
      <path d="M15 14c0-2.5-1.5-3.5-3-4" />
    </svg>
  )
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M8 1C5.2 1 3 3.2 3 6c0 4 5 9 5 9s5-5 5-9c0-2.8-2.2-5-5-5z" />
      <circle cx="8" cy="6" r="2" />
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  Section wrapper                                                    */
/* ------------------------------------------------------------------ */

function Section({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) {
  return (
    <section>
      <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-mono mb-2">
        {title}
      </h3>
      {description && (
        <p className="text-sm text-muted-foreground mb-8">{description}</p>
      )}
      {!description && <div className="mb-6" />}
      {children}
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  1. Dashboard Header                                                */
/* ------------------------------------------------------------------ */

function DashboardHeader() {
  return (
    <div className="bg-card rounded-xl p-8 ring-1 ring-foreground/5">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Analytics</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Overview</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mt-4 flex items-start justify-between">
        <div>
          <h1 className="text-xl font-medium text-foreground">Analytics Overview</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Track key metrics and monitor performance across all channels.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">Export</Button>
          <Button size="sm">
            <span data-icon="inline-start"><PlusIcon className="size-3.5" /></span>
            New Report
          </Button>
        </div>
      </div>

      <div className="mt-5 flex items-center gap-2">
        <Badge variant="secondary">All channels</Badge>
        <Badge variant="outline">Last 30 days</Badge>
        <Badge variant="outline">North America</Badge>
        <Badge variant="outline">Desktop</Badge>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  2. Stat Cards Row                                                  */
/* ------------------------------------------------------------------ */

const stats = [
  { label: "Revenue", value: "$48,250", trend: "+12.5%", up: true },
  { label: "Active Users", value: "2,340", trend: "+8.1%", up: true },
  { label: "Bounce Rate", value: "24.3%", trend: "-3.2%", up: false },
  { label: "Avg. Session", value: "4m 32s", trend: "+18.7%", up: true },
]

function StatCards() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.label}>
          <CardHeader>
            <CardDescription className="text-xs text-muted-foreground">{stat.label}</CardDescription>
          </CardHeader>
          <CardContent className="-mt-2">
            <p className="text-2xl font-medium text-foreground tracking-tight">{stat.value}</p>
            <div className={cn(
              "mt-1 inline-flex items-center gap-1 text-xs font-medium",
              stat.up ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"
            )}>
              {stat.up ? <ArrowUpIcon className="size-3" /> : <ArrowDownIcon className="size-3" />}
              {stat.trend}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  3. Activity Feed / Timeline                                        */
/* ------------------------------------------------------------------ */

const activities = [
  { avatar: "SC", name: "Sarah Chen", action: "created issue", target: "AUTH-142: Session timeout handling", time: "2h ago", color: "bg-blue-500" },
  { avatar: "MR", name: "Marcus Rivera", action: "commented on", target: "UI-89: Dark mode toggle", time: "4h ago", color: "bg-amber-500" },
  { avatar: "EJ", name: "Elena Johansson", action: "merged PR", target: "#327 — Refactor auth middleware", time: "5h ago", color: "bg-violet-500" },
  { avatar: "TN", name: "Tomás Nguyen", action: "deployed to production", target: "v2.4.1", time: "8h ago", color: "bg-emerald-500" },
  { avatar: "AL", name: "Ava Liu", action: "assigned", target: "PERF-56: Query optimization", time: "yesterday", color: "bg-rose-500" },
]

function ActivityFeed() {
  return (
    <div className="bg-card rounded-xl p-8 ring-1 ring-foreground/5">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-6">
          {activities.map((item, i) => (
            <div key={i} className="relative flex items-start gap-4 pl-10">
              {/* Dot on line */}
              <div className={cn("absolute left-[13px] top-1 size-1.5 rounded-full", item.color)} />

              <Avatar size="sm">
                <AvatarFallback className="text-[10px]">{item.avatar}</AvatarFallback>
              </Avatar>

              <div className="flex-1 min-w-0">
                <p className="text-[15px] text-muted-foreground">
                  <span className="font-medium text-foreground">{item.name}</span>{" "}
                  {item.action}{" "}
                  <span className="text-foreground">{item.target}</span>
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  4. User Profile Card                                               */
/* ------------------------------------------------------------------ */

function UserProfileCard() {
  return (
    <div className="bg-card rounded-xl p-8 ring-1 ring-foreground/5 max-w-sm mx-auto">
      <div className="flex flex-col items-center text-center">
        <Avatar size="lg" className="size-16">
          <AvatarFallback className="text-lg">EJ</AvatarFallback>
        </Avatar>

        <div className="mt-4">
          <div className="flex items-center justify-center gap-2">
            <h3 className="text-[15px] font-medium text-foreground">Elena Johansson</h3>
            <Badge variant="secondary" className="text-[10px]">Admin</Badge>
          </div>
          <p className="mt-0.5 text-sm text-muted-foreground">Senior Product Engineer</p>
          <div className="mt-1 flex items-center justify-center gap-1 text-xs text-muted-foreground">
            <MapPinIcon className="size-3" />
            Stockholm, Sweden
          </div>
        </div>

        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
          Building tools that help teams ship faster. Passionate about developer experience, systems design, and the occasional side quest into generative art.
        </p>

        <Separator className="my-5" />

        <div className="flex items-center gap-8 text-center">
          <div>
            <p className="text-[15px] font-medium text-foreground">48</p>
            <p className="text-xs text-muted-foreground">Posts</p>
          </div>
          <div>
            <p className="text-[15px] font-medium text-foreground">120</p>
            <p className="text-xs text-muted-foreground">Following</p>
          </div>
          <div>
            <p className="text-[15px] font-medium text-foreground">2.4k</p>
            <p className="text-xs text-muted-foreground">Followers</p>
          </div>
        </div>

        <div className="mt-5 flex items-center gap-2">
          <Button size="sm">Follow</Button>
          <Button variant="outline" size="sm">
            <span data-icon="inline-start"><MessageIcon className="size-3.5" /></span>
            Message
          </Button>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  5. Settings Page Layout                                            */
/* ------------------------------------------------------------------ */

const settingsNav = [
  { label: "General", icon: SettingsIcon, active: false },
  { label: "Notifications", icon: BellIcon, active: true },
  { label: "Security", icon: ShieldIcon, active: false },
  { label: "Billing", icon: CreditCardIcon, active: false },
  { label: "Team", icon: UsersIcon, active: false },
]

function SettingsLayout() {
  return (
    <div className="bg-card rounded-xl ring-1 ring-foreground/5 overflow-hidden">
      <div className="flex min-h-[400px]">
        {/* Left nav */}
        <div className="w-48 shrink-0 border-r border-border p-4">
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-mono mb-4 px-2">Settings</p>
          <nav className="space-y-0.5">
            {settingsNav.map((item) => (
              <div
                key={item.label}
                className={cn(
                  "flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-sm transition-colors cursor-pointer",
                  item.active
                    ? "bg-muted text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                <item.icon className="size-4" />
                {item.label}
              </div>
            ))}
          </nav>
        </div>

        {/* Right content */}
        <div className="flex-1 p-6">
          <h3 className="text-[15px] font-medium text-foreground">Notifications</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Choose what you want to be notified about.
          </p>

          <Separator className="my-5" />

          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[15px] text-foreground">Push notifications</p>
                <p className="text-sm text-muted-foreground">Receive push notifications on your devices.</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-[15px] text-foreground">Email digest</p>
                <p className="text-sm text-muted-foreground">Weekly summary of activity and updates.</p>
              </div>
              <Switch />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-[15px] text-foreground">Mentions &amp; replies</p>
                <p className="text-sm text-muted-foreground">Get notified when someone mentions you.</p>
              </div>
              <Switch defaultChecked />
            </div>

            <Separator />

            <div>
              <label className="text-[15px] text-foreground block mb-2">Notification email</label>
              <Input type="email" placeholder="elena@company.com" className="max-w-xs" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  6. Pricing Table                                                   */
/* ------------------------------------------------------------------ */

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "For individuals exploring the platform.",
    features: [
      { label: "Up to 3 projects", included: true },
      { label: "1 GB storage", included: true },
      { label: "Community support", included: true },
      { label: "API access", included: false },
      { label: "Custom domains", included: false },
      { label: "Analytics", included: false },
    ],
    cta: "Get started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$24",
    period: "/month",
    description: "For professionals and growing teams.",
    features: [
      { label: "Unlimited projects", included: true },
      { label: "50 GB storage", included: true },
      { label: "Priority support", included: true },
      { label: "API access", included: true },
      { label: "Custom domains", included: true },
      { label: "Analytics", included: false },
    ],
    cta: "Start free trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "$96",
    period: "/month",
    description: "For organizations that need more control.",
    features: [
      { label: "Unlimited projects", included: true },
      { label: "500 GB storage", included: true },
      { label: "Dedicated support", included: true },
      { label: "API access", included: true },
      { label: "Custom domains", included: true },
      { label: "Advanced analytics", included: true },
    ],
    cta: "Contact sales",
    highlighted: false,
  },
]

function PricingTable() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={cn(
            "rounded-xl p-6 ring-1 flex flex-col",
            plan.highlighted
              ? "bg-card ring-foreground/15 shadow-sm"
              : "bg-card ring-foreground/5"
          )}
        >
          {plan.highlighted && (
            <Badge variant="default" className="w-fit mb-4 text-[10px]">Recommended</Badge>
          )}
          <h4 className="text-[15px] font-medium text-foreground">{plan.name}</h4>
          <div className="mt-2 flex items-baseline gap-1">
            <span className="text-3xl font-medium text-foreground tracking-tight">{plan.price}</span>
            <span className="text-sm text-muted-foreground">{plan.period}</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>

          <Separator className="my-5" />

          <ul className="space-y-2.5 flex-1">
            {plan.features.map((feature) => (
              <li key={feature.label} className="flex items-center gap-2 text-sm">
                {feature.included ? (
                  <CheckIcon className="size-3.5 text-foreground" />
                ) : (
                  <XIcon className="size-3.5 text-muted-foreground/40" />
                )}
                <span className={feature.included ? "text-muted-foreground" : "text-muted-foreground/40"}>
                  {feature.label}
                </span>
              </li>
            ))}
          </ul>

          <Button
            variant={plan.highlighted ? "default" : "outline"}
            size="sm"
            className="mt-6 w-full"
          >
            {plan.cta}
          </Button>
        </div>
      ))}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  7. Notification Panel                                              */
/* ------------------------------------------------------------------ */

const notifications = [
  { icon: MessageIcon, title: "New comment", description: "Sarah Chen commented on AUTH-142", time: "2m ago", unread: true },
  { icon: UserIcon, title: "Assigned to you", description: "PERF-56: Query optimization has been assigned", time: "15m ago", unread: true },
  { icon: GitMergeIcon, title: "PR merged", description: "#327 — Refactor auth middleware was merged", time: "1h ago", unread: false },
  { icon: RocketIcon, title: "Deployment complete", description: "v2.4.1 deployed to production successfully", time: "3h ago", unread: false },
  { icon: BellIcon, title: "Mention", description: "Marcus mentioned you in UI-89 discussion", time: "5h ago", unread: false },
]

function NotificationPanel() {
  return (
    <div className="bg-card rounded-xl ring-1 ring-foreground/5 max-w-sm mx-auto overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4">
        <h3 className="text-[15px] font-medium text-foreground">Notifications</h3>
        <button className="text-xs text-muted-foreground hover:text-foreground transition-colors">
          Mark all read
        </button>
      </div>

      <Separator />

      <div>
        {notifications.map((item, i) => (
          <div
            key={i}
            className={cn(
              "flex items-start gap-3 px-5 py-3.5 transition-colors hover:bg-muted/50",
              i < notifications.length - 1 && "border-b border-border/50"
            )}
          >
            <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg bg-muted">
              <item.icon className="size-3.5 text-muted-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="text-sm font-medium text-foreground">{item.title}</p>
                {item.unread && (
                  <span className="size-1.5 rounded-full bg-blue-500 shrink-0" />
                )}
              </div>
              <p className="mt-0.5 text-xs text-muted-foreground truncate">{item.description}</p>
            </div>
            <p className="text-xs text-muted-foreground shrink-0 mt-0.5">{item.time}</p>
          </div>
        ))}
      </div>

      <Separator />

      <div className="px-5 py-3 text-center">
        <button className="text-xs text-muted-foreground hover:text-foreground transition-colors">
          View all notifications
        </button>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  8. Command Bar / Shortcut Hints                                    */
/* ------------------------------------------------------------------ */

const shortcuts = [
  { keys: ["⌘", "K"], label: "Search" },
  { keys: ["⌘", "N"], label: "New item" },
  { keys: ["⌘", "/"], label: "Command palette" },
  { keys: ["⌘", "B"], label: "Toggle sidebar" },
  { keys: ["⌘", "⇧", "P"], label: "Quick switch" },
  { keys: ["Esc"], label: "Close / cancel" },
]

function CommandBar() {
  return (
    <div className="bg-card rounded-xl p-6 ring-1 ring-foreground/5">
      <div className="flex items-center gap-3 mb-5">
        <div className="flex size-7 items-center justify-center rounded-lg bg-muted">
          <SearchIcon className="size-3.5 text-muted-foreground" />
        </div>
        <div>
          <h3 className="text-[15px] font-medium text-foreground">Keyboard Shortcuts</h3>
          <p className="text-xs text-muted-foreground">Navigate faster with these shortcuts.</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-8 gap-y-2.5">
        {shortcuts.map((shortcut) => (
          <div key={shortcut.label} className="flex items-center justify-between py-1">
            <span className="text-sm text-muted-foreground">{shortcut.label}</span>
            <div className="flex items-center gap-1">
              {shortcut.keys.map((key) => (
                <kbd
                  key={key}
                  className="inline-flex h-5 min-w-5 items-center justify-center rounded border border-border bg-muted px-1.5 font-mono text-[10px] text-muted-foreground"
                >
                  {key}
                </kbd>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Export                                                              */
/* ------------------------------------------------------------------ */

export function PatternsShowcase() {
  return (
    <div className="space-y-0">
      <div className="mb-16">
        <h2 className="text-lg font-medium tracking-tight mb-2">Patterns</h2>
        <p className="text-sm text-muted-foreground max-w-2xl">Complete UI compositions built from the design system — dashboards, profiles, settings, and more.</p>
      </div>

      <Section title="Dashboard Header" description="Page header with breadcrumbs, title, actions, and filters.">
        <DashboardHeader />
      </Section>

      <Separator className="my-16" />

      <Section title="Stat Cards" description="Metric cards with trend indicators for dashboard overviews.">
        <StatCards />
      </Section>

      <Separator className="my-16" />

      <Section title="Activity Feed" description="Vertical timeline of user actions and system events.">
        <ActivityFeed />
      </Section>

      <Separator className="my-16" />

      <Section title="User Profile" description="Profile card with avatar, bio, stats, and action buttons.">
        <UserProfileCard />
      </Section>

      <Separator className="my-16" />

      <Section title="Settings Layout" description="Side navigation with content panel for app settings.">
        <SettingsLayout />
      </Section>

      <Separator className="my-16" />

      <Section title="Pricing Table" description="Three-tier pricing comparison with feature checklists.">
        <PricingTable />
      </Section>

      <Separator className="my-16" />

      <Section title="Notifications" description="Notification feed with unread indicators and actions.">
        <NotificationPanel />
      </Section>

      <Separator className="my-16" />

      <Section title="Keyboard Shortcuts" description="Keyboard shortcut reference grid.">
        <CommandBar />
      </Section>
    </div>
  )
}
