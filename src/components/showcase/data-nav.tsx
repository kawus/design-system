"use client"

import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

/* ------------------------------------------------------------------ */
/*  Section title helper                                               */
/* ------------------------------------------------------------------ */

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs uppercase tracking-widest text-muted-foreground font-mono mb-6">
      {children}
    </h2>
  )
}

/* ------------------------------------------------------------------ */
/*  Inline SVG Icons                                                   */
/* ------------------------------------------------------------------ */

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={cn("size-4", className)}>
      <circle cx="6.5" cy="6.5" r="4" />
      <path d="m10 10 3.5 3.5" />
    </svg>
  )
}

function FileIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cn("size-4", className)}>
      <path d="M9 1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5L9 1Z" />
      <path d="M9 1v4h4" />
    </svg>
  )
}

function SettingsIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cn("size-4", className)}>
      <circle cx="8" cy="8" r="2" />
      <path d="M13.6 10a1.2 1.2 0 0 0 .24 1.32l.04.04a1.44 1.44 0 1 1-2.04 2.04l-.04-.04a1.2 1.2 0 0 0-1.32-.24 1.2 1.2 0 0 0-.72 1.08v.12a1.44 1.44 0 1 1-2.88 0v-.06a1.2 1.2 0 0 0-.78-1.08 1.2 1.2 0 0 0-1.32.24l-.04.04a1.44 1.44 0 1 1-2.04-2.04l.04-.04A1.2 1.2 0 0 0 2.88 10a1.2 1.2 0 0 0-1.08-.72h-.12a1.44 1.44 0 0 1 0-2.88h.06A1.2 1.2 0 0 0 2.82 5.6a1.2 1.2 0 0 0-.24-1.32l-.04-.04a1.44 1.44 0 1 1 2.04-2.04l.04.04a1.2 1.2 0 0 0 1.32.24h.06a1.2 1.2 0 0 0 .72-1.08V1.28a1.44 1.44 0 0 1 2.88 0v.06a1.2 1.2 0 0 0 .72 1.08 1.2 1.2 0 0 0 1.32-.24l.04-.04a1.44 1.44 0 1 1 2.04 2.04l-.04.04a1.2 1.2 0 0 0-.24 1.32v.06a1.2 1.2 0 0 0 1.08.72h.12a1.44 1.44 0 0 1 0 2.88h-.06a1.2 1.2 0 0 0-1.08.72Z" />
    </svg>
  )
}

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cn("size-4", className)}>
      <path d="M2 6l6-4.5L14 6v7.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V6Z" />
      <path d="M6 15V8h4v7" />
    </svg>
  )
}

function LayersIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cn("size-4", className)}>
      <path d="M1 8l7 4 7-4" />
      <path d="M1 12l7 4 7-4" />
      <path d="M1 4l7 4 7-4-7-4-7 4Z" />
    </svg>
  )
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cn("size-4", className)}>
      <path d="M11 14v-1.5a3 3 0 0 0-3-3H4a3 3 0 0 0-3 3V14" />
      <circle cx="6" cy="4.5" r="3" />
      <path d="M15 14v-1.5a3 3 0 0 0-2.25-2.9" />
      <path d="M10.5 1.6a3 3 0 0 1 0 5.8" />
    </svg>
  )
}

function InboxIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cn("size-4", className)}>
      <path d="M14 8H10.67a.67.67 0 0 0-.67.67v.66a1.33 1.33 0 0 1-1.33 1.34H7.33A1.33 1.33 0 0 1 6 9.33v-.66A.67.67 0 0 0 5.33 8H2" />
      <path d="M3.64 2h8.72L14 8v5.33a1.33 1.33 0 0 1-1.33 1.34H3.33A1.33 1.33 0 0 1 2 13.33V8l1.64-6Z" />
    </svg>
  )
}

function ChartIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cn("size-4", className)}>
      <path d="M12 13V7" />
      <path d="M8 13V3" />
      <path d="M4 13v-3" />
    </svg>
  )
}

function CopyIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cn("size-4", className)}>
      <rect x="5" y="5" width="9" height="9" rx="1" />
      <path d="M2 11V3a1 1 0 0 1 1-1h8" />
    </svg>
  )
}

function TrashIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cn("size-4", className)}>
      <path d="M2 4h12" />
      <path d="M12.67 4v9.33a1.33 1.33 0 0 1-1.34 1.34H4.67a1.33 1.33 0 0 1-1.34-1.34V4" />
      <path d="M5.33 4V2.67a1.33 1.33 0 0 1 1.34-1.34h2.66a1.33 1.33 0 0 1 1.34 1.34V4" />
    </svg>
  )
}

function EditIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cn("size-4", className)}>
      <path d="M8 13.3h5.3" />
      <path d="M10.67 2.3a1.41 1.41 0 0 1 2 2L4.67 12.3l-2.67.7.67-2.67 8-8Z" />
    </svg>
  )
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cn("size-4", className)}>
      <path d="M3 8h10" />
      <path d="m9 4 4 4-4 4" />
    </svg>
  )
}

function HashIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cn("size-4", className)}>
      <path d="M3 6h10M3 10h10M6.5 2l-1 12M10.5 2l-1 12" />
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  Mock data                                                          */
/* ------------------------------------------------------------------ */

const STATUS_COLORS: Record<string, string> = {
  "In Progress": "bg-yellow-500",
  "Done": "bg-emerald-500",
  "Backlog": "bg-muted-foreground/40",
  "Todo": "bg-blue-500",
  "In Review": "bg-violet-500",
  "Cancelled": "bg-red-500",
}

const PRIORITY_VARIANTS: Record<string, "default" | "secondary" | "outline" | "destructive"> = {
  "Urgent": "destructive",
  "High": "default",
  "Medium": "secondary",
  "Low": "outline",
  "None": "outline",
}

const issues = [
  { id: "LIN-142", status: "In Progress", title: "Implement dark mode toggle for dashboard", priority: "High", assignee: "KA", date: "Mar 24" },
  { id: "LIN-141", status: "In Review", title: "Fix command palette focus trap on mount", priority: "Urgent", assignee: "SM", date: "Mar 23" },
  { id: "LIN-140", status: "Done", title: "Add keyboard navigation to data table", priority: "Medium", assignee: "JR", date: "Mar 22" },
  { id: "LIN-139", status: "Todo", title: "Design empty state illustrations", priority: "Low", assignee: "EP", date: "Mar 21" },
  { id: "LIN-138", status: "In Progress", title: "Migrate dropdown menu to Base UI primitives", priority: "High", assignee: "KA", date: "Mar 20" },
  { id: "LIN-137", status: "Backlog", title: "Audit color contrast ratios for WCAG AA", priority: "Medium", assignee: "SM", date: "Mar 19" },
  { id: "LIN-136", status: "Cancelled", title: "Add CSV export to analytics table", priority: "None", assignee: "JR", date: "Mar 18" },
]

/* ------------------------------------------------------------------ */
/*  1. Table                                                           */
/* ------------------------------------------------------------------ */

function TableShowcase() {
  return (
    <div>
      <SectionTitle>Table</SectionTitle>
      <div className="bg-card rounded-xl p-8 ring-1 ring-foreground/5 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-foreground/5 hover:bg-transparent">
              <TableHead className="w-10 text-muted-foreground text-xs font-normal">Status</TableHead>
              <TableHead className="text-muted-foreground text-xs font-normal">Identifier</TableHead>
              <TableHead className="text-muted-foreground text-xs font-normal">Title</TableHead>
              <TableHead className="text-muted-foreground text-xs font-normal">Priority</TableHead>
              <TableHead className="text-muted-foreground text-xs font-normal">Assignee</TableHead>
              <TableHead className="text-right text-muted-foreground text-xs font-normal">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {issues.map((issue) => (
              <TableRow key={issue.id} className="border-foreground/5 cursor-pointer">
                <TableCell>
                  <span className={cn("inline-block size-2 rounded-full", STATUS_COLORS[issue.status])} />
                </TableCell>
                <TableCell className="font-mono text-xs text-muted-foreground">{issue.id}</TableCell>
                <TableCell className="text-sm font-medium">{issue.title}</TableCell>
                <TableCell>
                  <Badge variant={PRIORITY_VARIANTS[issue.priority]} className="text-[10px] px-1.5 h-4">
                    {issue.priority}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Avatar size="sm">
                    <AvatarFallback className="text-[10px]">{issue.assignee}</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell className="text-right font-mono text-xs text-muted-foreground">{issue.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  2. Tabs                                                            */
/* ------------------------------------------------------------------ */

function TabsShowcase() {
  return (
    <div>
      <SectionTitle>Tabs</SectionTitle>
      <div className="space-y-10">
        {/* Default tabs */}
        <div className="bg-card rounded-xl p-8 ring-1 ring-foreground/5">
          <p className="text-sm text-muted-foreground mb-4">Default</p>
          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-4">
              <div className="rounded-lg border border-foreground/5 p-4 text-sm text-muted-foreground">
                Project health is strong. 12 issues closed this week, 3 in review.
              </div>
            </TabsContent>
            <TabsContent value="analytics" className="mt-4">
              <div className="rounded-lg border border-foreground/5 p-4 text-sm text-muted-foreground">
                Velocity trending up 18% over the last 4 sprints.
              </div>
            </TabsContent>
            <TabsContent value="settings" className="mt-4">
              <div className="rounded-lg border border-foreground/5 p-4 text-sm text-muted-foreground">
                Notifications, integrations, and workspace preferences.
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Line-style tabs */}
        <div className="bg-card rounded-xl p-8 ring-1 ring-foreground/5">
          <p className="text-sm text-muted-foreground mb-4">Underline</p>
          <Tabs defaultValue="active">
            <TabsList variant="line">
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="archived">Archived</TabsTrigger>
            </TabsList>
            <TabsContent value="active" className="mt-4">
              <div className="rounded-lg border border-foreground/5 p-4 text-sm text-muted-foreground">
                6 active issues across 2 projects.
              </div>
            </TabsContent>
            <TabsContent value="completed" className="mt-4">
              <div className="rounded-lg border border-foreground/5 p-4 text-sm text-muted-foreground">
                142 issues completed this cycle.
              </div>
            </TabsContent>
            <TabsContent value="archived" className="mt-4">
              <div className="rounded-lg border border-foreground/5 p-4 text-sm text-muted-foreground">
                No archived issues.
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Pill-style tabs */}
        <div className="bg-card rounded-xl p-8 ring-1 ring-foreground/5">
          <p className="text-sm text-muted-foreground mb-4">Pill</p>
          <Tabs defaultValue="all">
            <TabsList className="rounded-full [&>*]:rounded-full">
              <TabsTrigger value="all">All Issues</TabsTrigger>
              <TabsTrigger value="mine">Assigned to Me</TabsTrigger>
              <TabsTrigger value="mentions">Mentions</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-4">
              <div className="rounded-lg border border-foreground/5 p-4 text-sm text-muted-foreground">
                Showing all 47 issues.
              </div>
            </TabsContent>
            <TabsContent value="mine" className="mt-4">
              <div className="rounded-lg border border-foreground/5 p-4 text-sm text-muted-foreground">
                8 issues assigned to you.
              </div>
            </TabsContent>
            <TabsContent value="mentions" className="mt-4">
              <div className="rounded-lg border border-foreground/5 p-4 text-sm text-muted-foreground">
                3 recent mentions.
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  3. Command Palette                                                 */
/* ------------------------------------------------------------------ */

function CommandPaletteShowcase() {
  return (
    <div>
      <SectionTitle>Command Palette</SectionTitle>
      <div className="bg-card rounded-xl p-8 ring-1 ring-foreground/5">
        <div className="mx-auto max-w-lg">
          <Command className="rounded-xl border border-foreground/10 shadow-2xl">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Actions">
                <CommandItem>
                  <FileIcon className="text-muted-foreground" />
                  <span>Create New Issue</span>
                  <CommandShortcut className="font-mono">C</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <EditIcon className="text-muted-foreground" />
                  <span>Edit Issue</span>
                  <CommandShortcut className="font-mono">E</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <CopyIcon className="text-muted-foreground" />
                  <span>Copy Issue URL</span>
                  <CommandShortcut className="font-mono">⌘C</CommandShortcut>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Navigation">
                <CommandItem>
                  <HomeIcon className="text-muted-foreground" />
                  <span>Go to Dashboard</span>
                  <CommandShortcut className="font-mono">G D</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <LayersIcon className="text-muted-foreground" />
                  <span>Go to Projects</span>
                  <CommandShortcut className="font-mono">G P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <SettingsIcon className="text-muted-foreground" />
                  <span>Go to Settings</span>
                  <CommandShortcut className="font-mono">G S</CommandShortcut>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Recent">
                <CommandItem>
                  <HashIcon className="text-muted-foreground" />
                  <span className="text-muted-foreground">LIN-142</span>
                  <span>Implement dark mode toggle</span>
                </CommandItem>
                <CommandItem>
                  <HashIcon className="text-muted-foreground" />
                  <span className="text-muted-foreground">LIN-141</span>
                  <span>Fix command palette focus trap</span>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  4. Dropdown Menu (static mockup)                                   */
/* ------------------------------------------------------------------ */

function DropdownMenuShowcase() {
  return (
    <div>
      <SectionTitle>Dropdown Menu</SectionTitle>
      <div className="bg-card rounded-xl p-8 ring-1 ring-foreground/5">
        <div className="mx-auto max-w-xs">
          {/* Static mockup — no trigger needed, just the visual */}
          <div className="rounded-lg bg-popover p-1 text-popover-foreground shadow-lg ring-1 ring-foreground/10">
            {/* Group 1 */}
            <div className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm bg-accent text-accent-foreground">
              <EditIcon />
              <span>Edit Issue</span>
              <span className="ml-auto text-xs tracking-widest font-mono opacity-60">⌘E</span>
            </div>
            <div className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent/50 transition-colors">
              <CopyIcon />
              <span>Duplicate</span>
              <span className="ml-auto text-xs tracking-widest font-mono text-muted-foreground">⌘D</span>
            </div>
            <div className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent/50 transition-colors">
              <ArrowRightIcon />
              <span>Move to Project</span>
              <span className="ml-auto text-xs tracking-widest font-mono text-muted-foreground">M</span>
            </div>

            {/* Separator */}
            <div className="-mx-1 my-1 h-px bg-border" />

            {/* Group 2 */}
            <div className="px-1.5 py-1 text-xs font-medium text-muted-foreground">Dangerous</div>
            <div className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-destructive hover:bg-destructive/10 transition-colors">
              <TrashIcon />
              <span>Delete Issue</span>
              <span className="ml-auto text-xs tracking-widest font-mono opacity-60">⌫</span>
            </div>

            {/* Separator */}
            <div className="-mx-1 my-1 h-px bg-border" />

            {/* Disabled item */}
            <div className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm opacity-50 pointer-events-none">
              <ChartIcon />
              <span>Export Analytics</span>
              <span className="ml-auto text-xs tracking-widest font-mono text-muted-foreground">⌘⇧E</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  5. Navigation Sidebar                                              */
/* ------------------------------------------------------------------ */

type NavItem = {
  icon: ({ className }: { className?: string }) => React.ReactElement
  label: string
  active?: boolean
  badge?: string
  children?: string[]
}

const navGroups: { label: string; items: NavItem[] }[] = [
  {
    label: "General",
    items: [
      { icon: HomeIcon, label: "Dashboard", active: true },
      { icon: InboxIcon, label: "Inbox", badge: "3" },
      { icon: ChartIcon, label: "Analytics" },
    ],
  },
  {
    label: "Workspace",
    items: [
      { icon: LayersIcon, label: "Projects", children: ["Design System", "Mobile App", "API v2"] },
      { icon: UsersIcon, label: "Team" },
      { icon: FileIcon, label: "Documents" },
    ],
  },
]

function NavigationSidebarShowcase() {
  return (
    <div>
      <SectionTitle>Navigation Sidebar</SectionTitle>
      <div className="bg-card rounded-xl p-8 ring-1 ring-foreground/5">
        <div className="mx-auto max-w-xs">
          <div className="w-60 rounded-xl bg-sidebar text-sidebar-foreground ring-1 ring-foreground/5 overflow-hidden">
            {/* App header */}
            <div className="flex items-center gap-2.5 px-4 pt-5 pb-4">
              <div className="flex size-7 items-center justify-center rounded-lg bg-foreground text-background text-xs font-bold">
                A
              </div>
              <div>
                <p className="text-sm font-semibold leading-none">Acme Inc</p>
                <p className="text-[11px] text-muted-foreground mt-0.5">Workspace</p>
              </div>
            </div>

            <Separator className="opacity-50" />

            {/* Navigation groups */}
            <nav className="px-3 py-4 space-y-6">
              {navGroups.map((group) => (
                <div key={group.label}>
                  <p className="px-2 mb-2 text-[11px] uppercase tracking-widest text-muted-foreground font-medium">
                    {group.label}
                  </p>
                  <ul className="space-y-0.5">
                    {group.items.map((item) => (
                      <li key={item.label}>
                        <div
                          className={cn(
                            "flex items-center gap-2.5 rounded-md px-2 py-1.5 text-sm transition-colors",
                            item.active
                              ? "bg-accent text-accent-foreground font-medium"
                              : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                          )}
                        >
                          <item.icon className="size-4 shrink-0" />
                          <span>{item.label}</span>
                          {"badge" in item && item.badge && (
                            <span className="ml-auto flex size-5 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        {/* Nested items */}
                        {"children" in item && item.children && (
                          <ul className="ml-6 mt-0.5 space-y-0.5 border-l border-foreground/5 pl-2">
                            {item.children.map((child) => (
                              <li key={child}>
                                <div className="rounded-md px-2 py-1 text-sm text-muted-foreground hover:bg-accent/50 hover:text-foreground transition-colors cursor-pointer">
                                  {child}
                                </div>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>

            {/* Bottom user section */}
            <div className="mt-auto border-t border-foreground/5">
              <div className="flex items-center gap-2.5 px-4 py-3">
                <Avatar size="sm">
                  <AvatarFallback className="text-[10px]">KA</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium leading-none truncate">Kawus A.</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5 truncate">kawus@acme.dev</p>
                </div>
                <SettingsIcon className="size-4 text-muted-foreground shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Export                                                              */
/* ------------------------------------------------------------------ */

export function DataNavShowcase() {
  return (
    <div>
      <TableShowcase />
      <Separator className="my-16" />
      <TabsShowcase />
      <Separator className="my-16" />
      <CommandPaletteShowcase />
      <Separator className="my-16" />
      <DropdownMenuShowcase />
      <Separator className="my-16" />
      <NavigationSidebarShowcase />
    </div>
  )
}
