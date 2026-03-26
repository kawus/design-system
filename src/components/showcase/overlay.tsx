"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

/* ─── Section header helper ─── */
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs uppercase tracking-widest text-muted-foreground font-mono mb-6">
      {children}
    </h2>
  );
}

/* ─── Inline SVG icons ─── */
function TrashIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      <line x1="10" x2="10" y1="11" y2="17" />
      <line x1="14" x2="14" y1="11" y2="17" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function FilterIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function XCircleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

/* ─── Main export ─── */
export function OverlayShowcase() {
  return (
    <div className="space-y-0">
      {/* ──────────────────── Dialog ──────────────────── */}
      <section>
        <SectionTitle>Dialog</SectionTitle>
        <p className="text-sm text-muted-foreground mb-8">
          Modal dialogs for confirmations, forms, and focused interactions.
          Includes backdrop blur and smooth enter/exit transitions.
        </p>
        <div className="bg-card rounded-xl p-8 ring-1 ring-foreground/5">
          <div className="flex flex-wrap gap-4">
            {/* Confirm delete dialog */}
            <Dialog>
              <DialogTrigger
                render={
                  <Button variant="destructive">
                    <TrashIcon />
                    Delete project
                  </Button>
                }
              />
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Delete project</DialogTitle>
                  <DialogDescription>
                    This will permanently delete{" "}
                    <span className="font-medium text-foreground">
                      Design System v2
                    </span>{" "}
                    and all associated data. This action cannot be undone.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose render={<Button variant="outline" />}>
                    Cancel
                  </DialogClose>
                  <Button variant="destructive">
                    <TrashIcon />
                    Delete permanently
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {/* Create new dialog */}
            <Dialog>
              <DialogTrigger
                render={
                  <Button variant="outline">
                    <PlusIcon />
                    Create new
                  </Button>
                }
              />
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create new project</DialogTitle>
                  <DialogDescription>
                    Add a new project to your workspace. You can change these
                    details later.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-2">
                  <div className="grid gap-2">
                    <Label htmlFor="project-name">Name</Label>
                    <Input
                      id="project-name"
                      placeholder="My new project"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="project-desc">Description</Label>
                    <textarea
                      id="project-desc"
                      placeholder="What is this project about?"
                      rows={3}
                      className="w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-2 text-sm transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 dark:bg-input/30"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose render={<Button variant="outline" />}>
                    Cancel
                  </DialogClose>
                  <Button>Create project</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* ──────────────────── Sheet ──────────────────── */}
      <section>
        <SectionTitle>Sheet</SectionTitle>
        <p className="text-sm text-muted-foreground mb-8">
          Slide-out panels for detail views, settings, and editing workflows.
          Anchored to the edge of the viewport with smooth transitions.
        </p>
        <div className="bg-card rounded-xl p-8 ring-1 ring-foreground/5">
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="outline">
                  <SettingsIcon />
                  Open settings
                </Button>
              }
            />
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Project settings</SheetTitle>
                <SheetDescription>
                  Configure your project preferences and team access.
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-6 px-4">
                <div className="grid gap-2">
                  <Label htmlFor="sheet-name">Project name</Label>
                  <Input id="sheet-name" defaultValue="Design System v2" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="sheet-slug">URL slug</Label>
                  <Input id="sheet-slug" defaultValue="design-system-v2" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="sheet-visibility">Visibility</Label>
                  <div className="flex items-center gap-3">
                    <Checkbox id="sheet-visibility" defaultChecked />
                    <Label
                      htmlFor="sheet-visibility"
                      className="font-normal text-muted-foreground"
                    >
                      Public — anyone with the link can view
                    </Label>
                  </div>
                </div>
                <Separator />
                <div className="grid gap-2">
                  <Label className="text-destructive">Danger zone</Label>
                  <p className="text-sm text-muted-foreground">
                    Transfer or delete this project permanently.
                  </p>
                  <Button variant="destructive" className="w-fit">
                    <TrashIcon />
                    Delete project
                  </Button>
                </div>
              </div>
              <div className="mt-auto flex gap-2 p-4">
                <SheetClose render={<Button variant="outline" className="flex-1" />}>
                  Cancel
                </SheetClose>
                <Button className="flex-1">Save changes</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </section>

      <Separator className="my-16" />

      {/* ──────────────────── Popover ──────────────────── */}
      <section>
        <SectionTitle>Popover</SectionTitle>
        <p className="text-sm text-muted-foreground mb-8">
          Contextual overlays for filters, menus, and quick actions. Positioned
          relative to their trigger with smooth scale and fade transitions.
        </p>
        <div className="bg-card rounded-xl p-8 ring-1 ring-foreground/5">
          <Popover>
            <PopoverTrigger
              render={
                <Button variant="outline">
                  <FilterIcon />
                  Filter
                </Button>
              }
            />
            <PopoverContent align="start" className="w-64">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium mb-2">Filter by status</p>
                {[
                  { id: "backlog", label: "Backlog", checked: false },
                  { id: "todo", label: "Todo", checked: true },
                  { id: "in-progress", label: "In Progress", checked: true },
                  { id: "done", label: "Done", checked: false },
                  { id: "cancelled", label: "Cancelled", checked: false },
                ].map((item) => (
                  <label
                    key={item.id}
                    htmlFor={`filter-${item.id}`}
                    className="flex items-center gap-3 rounded-md px-2 py-1.5 text-sm hover:bg-muted cursor-pointer transition-colors"
                  >
                    <Checkbox
                      id={`filter-${item.id}`}
                      defaultChecked={item.checked}
                    />
                    <span>{item.label}</span>
                  </label>
                ))}
                <Separator className="my-2" />
                <div className="flex items-center justify-between">
                  <Button variant="ghost" size="xs">
                    Clear all
                  </Button>
                  <Button size="xs">Apply</Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </section>

      <Separator className="my-16" />

      {/* ──────────────────── Tooltip ──────────────────── */}
      <section>
        <SectionTitle>Tooltip</SectionTitle>
        <p className="text-sm text-muted-foreground mb-8">
          Contextual hints that appear on hover. Supports all four positions
          with smooth enter/exit animations and an arrow indicator.
        </p>
        <div className="bg-card rounded-xl p-8 ring-1 ring-foreground/5">
          <TooltipProvider>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Tooltip>
                <TooltipTrigger render={<Button variant="outline" />}>
                  Top
                </TooltipTrigger>
                <TooltipContent side="top">
                  Tooltip on top
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger render={<Button variant="outline" />}>
                  Bottom
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  Tooltip on bottom
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger render={<Button variant="outline" />}>
                  Left
                </TooltipTrigger>
                <TooltipContent side="left">
                  Tooltip on left
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger render={<Button variant="outline" />}>
                  Right
                </TooltipTrigger>
                <TooltipContent side="right">
                  Tooltip on right
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </div>
      </section>

      <Separator className="my-16" />

      {/* ──────────────────── Toast / Notification Patterns ──────────────────── */}
      <section>
        <SectionTitle>Notification Patterns</SectionTitle>
        <p className="text-sm text-muted-foreground mb-8">
          Static mockups of toast and notification styles. Success, error, and
          info states with optional action buttons.
        </p>
        <div className="bg-card rounded-xl p-8 ring-1 ring-foreground/5">
          <div className="mx-auto flex max-w-md flex-col gap-3">
            {/* Success */}
            <div className="bg-card rounded-lg p-4 ring-1 ring-foreground/5 flex items-start gap-3">
              <span className="text-emerald-500">
                <CheckCircleIcon />
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">Changes saved</p>
                <p className="text-sm text-muted-foreground mt-0.5">
                  Your project settings have been updated successfully.
                </p>
              </div>
            </div>

            {/* Error */}
            <div className="bg-card rounded-lg p-4 ring-1 ring-foreground/5 flex items-start gap-3">
              <span className="text-red-500">
                <XCircleIcon />
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">Failed to deploy</p>
                <p className="text-sm text-muted-foreground mt-0.5">
                  Build failed at step 3 — check the logs for details.
                </p>
              </div>
            </div>

            {/* Info */}
            <div className="bg-card rounded-lg p-4 ring-1 ring-foreground/5 flex items-start gap-3">
              <span className="text-blue-500">
                <InfoIcon />
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">New version available</p>
                <p className="text-sm text-muted-foreground mt-0.5">
                  v2.4.0 is ready. Review the changelog before upgrading.
                </p>
              </div>
            </div>

            {/* With action */}
            <div className="bg-card rounded-lg p-4 ring-1 ring-foreground/5 flex items-start gap-3">
              <span className="text-emerald-500">
                <CheckCircleIcon />
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">Issue archived</p>
                <p className="text-sm text-muted-foreground mt-0.5">
                  DES-142 has been moved to the archive.
                </p>
              </div>
              <Button variant="outline" size="xs" className="shrink-0">
                Undo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
