"use client"

import { useState } from "react"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "@/components/ui/breadcrumb"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"

/* ------------------------------------------------------------------ */
/*  Inline SVG Icons                                                   */
/* ------------------------------------------------------------------ */

function ChevronDownSmall({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 6l4 4 4-4" />
    </svg>
  )
}

function FileIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 2H4.5A1.5 1.5 0 003 3.5v9A1.5 1.5 0 004.5 14h7a1.5 1.5 0 001.5-1.5V6L9 2z" />
      <path d="M9 2v4h4" />
    </svg>
  )
}

function FolderIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2 4.5A1.5 1.5 0 013.5 3h2.879a1 1 0 01.707.293L8.5 4.707A1 1 0 009.207 5H12.5A1.5 1.5 0 0114 6.5v5a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 012 11.5v-7z" />
    </svg>
  )
}

function BellIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M6 13a2 2 0 004 0M3.5 7a4.5 4.5 0 019 0c0 2.5.75 4 1.5 5H2c.75-1 1.5-2.5 1.5-5z" />
    </svg>
  )
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="7" width="10" height="7" rx="1.5" />
      <path d="M5 7V5a3 3 0 016 0v2" />
    </svg>
  )
}

function SettingsIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="8" cy="8" r="2" />
      <path d="M13.3 10a1.2 1.2 0 00.24 1.32l.04.04a1.44 1.44 0 11-2.04 2.04l-.04-.04a1.2 1.2 0 00-1.32-.24 1.2 1.2 0 00-.72 1.1v.12a1.44 1.44 0 11-2.88 0v-.06a1.2 1.2 0 00-.78-1.1 1.2 1.2 0 00-1.32.24l-.04.04a1.44 1.44 0 11-2.04-2.04l.04-.04A1.2 1.2 0 002.68 10a1.2 1.2 0 00-1.1-.72h-.12a1.44 1.44 0 010-2.88h.06a1.2 1.2 0 001.1-.78 1.2 1.2 0 00-.24-1.32l-.04-.04A1.44 1.44 0 114.38 2.22l.04.04a1.2 1.2 0 001.32.24h.06A1.2 1.2 0 006.52 1.4v-.12a1.44 1.44 0 012.88 0v.06a1.2 1.2 0 00.72 1.1 1.2 1.2 0 001.32-.24l.04-.04a1.44 1.44 0 112.04 2.04l-.04.04a1.2 1.2 0 00-.24 1.32v.06a1.2 1.2 0 001.1.72h.12a1.44 1.44 0 010 2.88h-.06a1.2 1.2 0 00-1.1.72z" />
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  Section wrapper                                                    */
/* ------------------------------------------------------------------ */

function Section({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <section>
      <p className="text-xs uppercase tracking-widest text-muted-foreground font-mono mb-2">
        {title}
      </p>
      <p className="text-sm text-muted-foreground mb-8">{description}</p>
      <div className="bg-card rounded-xl p-8 ring-1 ring-foreground/5">
        {children}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  LayoutShowcase                                                     */
/* ------------------------------------------------------------------ */

export function LayoutShowcase() {
  const [collapsibleOpen, setCollapsibleOpen] = useState(false)

  return (
    <div className="space-y-0">
      <div className="mb-16">
        <h2 className="text-lg font-medium tracking-tight mb-2">Layout</h2>
        <p className="text-sm text-muted-foreground max-w-2xl">Accordion, collapsible sections, scroll areas, resizable panels, and navigation patterns.</p>
      </div>

      {/* ---------------------------------------------------------- */}
      {/*  ACCORDION                                                  */}
      {/* ---------------------------------------------------------- */}

      <Section
        title="Accordion"
        description="Expandable content sections for FAQs and progressive disclosure."
      >
        <div className="max-w-xl">
          <Accordion>
            <AccordionItem>
              <AccordionTrigger>
                What is the design system built with?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  The design system is built with React, TypeScript, and
                  Tailwind CSS. Components use Base UI primitives for
                  accessibility and keyboard interactions out of the box.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem>
              <AccordionTrigger>
                How do I customize the theme?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Theme tokens are defined as CSS custom properties. Override
                  them in your global stylesheet or use the built-in dark mode
                  toggle. All components automatically respond to token changes.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem>
              <AccordionTrigger>
                Can I use individual components?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Yes. Every component is independently importable with no
                  side effects. Install only what you need — there are no
                  global providers required except for theming.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Section>

      <Separator className="my-16" />

      {/* ---------------------------------------------------------- */}
      {/*  COLLAPSIBLE                                                */}
      {/* ---------------------------------------------------------- */}

      <Section
        title="Collapsible"
        description="A togglable container for revealing additional content on demand."
      >
        <div className="max-w-md">
          <Collapsible open={collapsibleOpen} onOpenChange={setCollapsibleOpen}>
            <div className="flex items-center justify-between">
              <p className="text-[15px] font-medium text-foreground">
                3 pinned repositories
              </p>
              <CollapsibleTrigger
                className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              >
                {collapsibleOpen ? "Hide" : "Show all"}
                <ChevronDownSmall
                  className={`size-3.5 transition-transform ${collapsibleOpen ? "rotate-180" : ""}`}
                />
              </CollapsibleTrigger>
            </div>

            <div className="mt-3 space-y-2">
              <div className="flex items-center gap-3 rounded-lg border border-border px-4 py-3">
                <FolderIcon className="size-4 text-muted-foreground" />
                <div>
                  <p className="text-[15px] font-medium text-foreground">
                    design-system
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Component library and documentation
                  </p>
                </div>
              </div>

              <CollapsibleContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 rounded-lg border border-border px-4 py-3">
                    <FolderIcon className="size-4 text-muted-foreground" />
                    <div>
                      <p className="text-[15px] font-medium text-foreground">
                        frontend-app
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Next.js application with App Router
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg border border-border px-4 py-3">
                    <FolderIcon className="size-4 text-muted-foreground" />
                    <div>
                      <p className="text-[15px] font-medium text-foreground">
                        api-server
                      </p>
                      <p className="text-sm text-muted-foreground">
                        REST and GraphQL API service
                      </p>
                    </div>
                  </div>
                </div>
              </CollapsibleContent>
            </div>
          </Collapsible>
        </div>
      </Section>

      <Separator className="my-16" />

      {/* ---------------------------------------------------------- */}
      {/*  TABS                                                       */}
      {/* ---------------------------------------------------------- */}

      <Section
        title="Tabs"
        description="Tabbed interface for organizing content into switchable panels."
      >
        <Tabs defaultValue="general">
          <TabsList>
            <TabsTrigger value="general">
              <SettingsIcon className="size-3.5" />
              General
            </TabsTrigger>
            <TabsTrigger value="notifications">
              <BellIcon className="size-3.5" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="security">
              <LockIcon className="size-3.5" />
              Security
            </TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="mt-6">
            <div className="space-y-6 max-w-lg">
              <div>
                <p className="text-[15px] font-medium text-foreground mb-1">
                  Display name
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  This is your public display name across the platform.
                </p>
                <input
                  type="text"
                  defaultValue="Kawus"
                  className="h-8 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground outline-none focus:border-ring focus:ring-2 focus:ring-ring/50"
                />
              </div>
              <Separator />
              <div>
                <p className="text-[15px] font-medium text-foreground mb-1">
                  Email
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  Manage your email address and notification preferences.
                </p>
                <input
                  type="email"
                  defaultValue="kawus@example.com"
                  className="h-8 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground outline-none focus:border-ring focus:ring-2 focus:ring-ring/50"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="notifications" className="mt-6">
            <div className="space-y-6 max-w-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[15px] font-medium text-foreground">
                    Push notifications
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Receive push notifications on your devices.
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[15px] font-medium text-foreground">
                    Email digest
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Weekly summary of activity and updates.
                  </p>
                </div>
                <Switch />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[15px] font-medium text-foreground">
                    Marketing emails
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Product announcements and feature updates.
                  </p>
                </div>
                <Switch />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="security" className="mt-6">
            <div className="space-y-6 max-w-lg">
              <div>
                <p className="text-[15px] font-medium text-foreground mb-1">
                  Current password
                </p>
                <input
                  type="password"
                  placeholder="Enter current password"
                  className="h-8 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground outline-none focus:border-ring focus:ring-2 focus:ring-ring/50"
                />
              </div>
              <div>
                <p className="text-[15px] font-medium text-foreground mb-1">
                  New password
                </p>
                <input
                  type="password"
                  placeholder="Enter new password"
                  className="h-8 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground outline-none focus:border-ring focus:ring-2 focus:ring-ring/50"
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[15px] font-medium text-foreground">
                    Two-factor authentication
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Add an extra layer of security to your account.
                  </p>
                </div>
                <Switch />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </Section>

      <Separator className="my-16" />

      {/* ---------------------------------------------------------- */}
      {/*  SCROLL AREA                                                */}
      {/* ---------------------------------------------------------- */}

      <Section
        title="Scroll Area"
        description="Custom scrollable regions with styled scrollbars."
      >
        <div className="grid gap-8 md:grid-cols-2">
          {/* Vertical scroll */}
          <div>
            <p className="text-sm font-medium text-foreground mb-3">
              Notification feed
            </p>
            <ScrollArea className="h-72 rounded-lg border border-border">
              <div className="p-4 space-y-3">
                {[
                  { title: "New comment on PR #142", time: "2 min ago", unread: true },
                  { title: "Deployment succeeded", time: "15 min ago", unread: true },
                  { title: "Issue assigned to you", time: "1 hour ago", unread: true },
                  { title: "Build failed on main", time: "2 hours ago", unread: false },
                  { title: "Review requested", time: "3 hours ago", unread: false },
                  { title: "Branch merged", time: "4 hours ago", unread: false },
                  { title: "New team member joined", time: "5 hours ago", unread: false },
                  { title: "Sprint retrospective scheduled", time: "6 hours ago", unread: false },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-md px-3 py-2.5 hover:bg-muted/50 transition-colors"
                  >
                    {item.unread && (
                      <span className="mt-1.5 size-2 shrink-0 rounded-full bg-blue-500" />
                    )}
                    {!item.unread && <span className="mt-1.5 size-2 shrink-0" />}
                    <div className="min-w-0">
                      <p className="text-[15px] text-foreground truncate">
                        {item.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {item.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Horizontal scroll */}
          <div>
            <p className="text-sm font-medium text-foreground mb-3">
              Tags
            </p>
            <ScrollArea className="w-full rounded-lg border border-border">
              <div className="flex gap-2 p-4">
                {[
                  "React", "TypeScript", "Tailwind", "Next.js", "Node.js",
                  "GraphQL", "PostgreSQL", "Redis", "Docker", "Kubernetes",
                  "Terraform", "GitHub Actions", "Vercel", "Supabase",
                  "Prisma", "tRPC",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="shrink-0 rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        </div>
      </Section>

      <Separator className="my-16" />

      {/* ---------------------------------------------------------- */}
      {/*  RESIZABLE PANELS                                           */}
      {/* ---------------------------------------------------------- */}

      <Section
        title="Resizable Panels"
        description="Draggable panel layouts for building flexible interfaces."
      >
        <div className="rounded-lg border border-border overflow-hidden">
          <ResizablePanelGroup orientation="horizontal" className="min-h-48">
            <ResizablePanel defaultSize={30} minSize={20}>
              <div className="p-4 h-full">
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-mono mb-3">
                  Sidebar
                </p>
                <div className="space-y-1.5">
                  {["Overview", "Components", "Tokens", "Icons", "Changelog"].map((item) => (
                    <div
                      key={item}
                      className="rounded-md px-2.5 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors cursor-default"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={70} minSize={30}>
              <div className="p-4 h-full">
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-mono mb-3">
                  Content
                </p>
                <p className="text-sm text-muted-foreground">
                  Drag the handle to resize panels. This pattern is common
                  for sidebars, file explorers, and split-view editors.
                </p>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </Section>

      <Separator className="my-16" />

      {/* ---------------------------------------------------------- */}
      {/*  ASPECT RATIO                                               */}
      {/* ---------------------------------------------------------- */}

      <Section
        title="Aspect Ratio"
        description="Maintain consistent proportions for media and content containers."
      >
        <div className="grid grid-cols-2 gap-4 max-w-lg">
          {[
            { ratio: 16 / 9, label: "16:9" },
            { ratio: 1, label: "1:1" },
          ].map(({ ratio, label }) => (
            <div key={label}>
              <AspectRatio
                ratio={ratio}
                className="rounded-lg bg-muted flex items-center justify-center"
              >
                <span className="text-sm font-mono text-muted-foreground">
                  {label}
                </span>
              </AspectRatio>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                {label}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Separator className="my-16" />

      {/* ---------------------------------------------------------- */}
      {/*  BREADCRUMB                                                 */}
      {/* ---------------------------------------------------------- */}

      <Section
        title="Breadcrumb"
        description="Navigation trail showing the current page location in a hierarchy."
      >
        <div className="space-y-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Projects</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Components</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbEllipsis />
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Layout</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </Section>

      <Separator className="my-16" />

      {/* ---------------------------------------------------------- */}
      {/*  PAGINATION                                                 */}
      {/* ---------------------------------------------------------- */}

      <Section
        title="Pagination"
        description="Navigate between pages of content with numbered controls."
      >
        <div className="space-y-6">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">12</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </Section>
    </div>
  )
}
