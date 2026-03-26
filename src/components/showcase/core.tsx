"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Toggle } from "@/components/ui/toggle"
import { Separator } from "@/components/ui/separator"

/* ------------------------------------------------------------------ */
/*  Inline SVG Icons                                                   */
/* ------------------------------------------------------------------ */

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className={className}
    >
      <path d="M8 3v10M3 8h10" />
    </svg>
  )
}

function ArrowRightIcon({ className }: { className?: string }) {
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
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  )
}

function BoldIcon({ className }: { className?: string }) {
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
      <path d="M4 3h5.5a3 3 0 0 1 0 5H4V3zM4 8h6.5a3 3 0 0 1 0 5H4V8z" />
    </svg>
  )
}

function ItalicIcon({ className }: { className?: string }) {
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
      <path d="M10 3H6M10 13H6M9 3l-2 10" />
    </svg>
  )
}

function UnderlineIcon({ className }: { className?: string }) {
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
      <path d="M4 3v5a4 4 0 0 0 8 0V3M3 14h10" />
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
/*  CoreShowcase                                                       */
/* ------------------------------------------------------------------ */

export function CoreShowcase() {
  return (
    <div className="space-y-0">
      <div className="mb-16">
        <h2 className="text-lg font-medium tracking-tight mb-2">Core Components</h2>
        <p className="text-sm text-muted-foreground max-w-2xl">Buttons, badges, inputs, and form controls — the building blocks of every interface.</p>
      </div>

      {/* ---------------------------------------------------------- */}
      {/*  BUTTONS                                                    */}
      {/* ---------------------------------------------------------- */}
      <Section
        title="Buttons"
        description="Primary actions, secondary options, destructive confirmations."
      >
        <div className="space-y-10">
          {/* --- Variants --- */}
          <div>
            <p className="text-xs font-mono text-muted-foreground/60 mb-4">
              variants
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="default">Default</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>

          {/* --- Sizes --- */}
          <div>
            <p className="text-xs font-mono text-muted-foreground/60 mb-4">
              sizes
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>

          {/* --- With icons --- */}
          <div>
            <p className="text-xs font-mono text-muted-foreground/60 mb-4">
              with icons
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button>
                <PlusIcon data-icon="inline-start" />
                Create
              </Button>
              <Button variant="outline">
                Continue
                <ArrowRightIcon data-icon="inline-end" />
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Separator className="my-16" />

      {/* ---------------------------------------------------------- */}
      {/*  BADGES                                                     */}
      {/* ---------------------------------------------------------- */}
      <Section
        title="Badges"
        description="Status indicators, labels, and tags across all variants."
      >
        <div className="space-y-10">
          {/* --- Variants --- */}
          <div>
            <p className="text-xs font-mono text-muted-foreground/60 mb-4">
              variants
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="default">Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="ghost">Ghost</Badge>
            </div>
          </div>

          {/* --- With dot indicators --- */}
          <div>
            <p className="text-xs font-mono text-muted-foreground/60 mb-4">
              with status dot
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="secondary" className="gap-1.5">
                <span className="size-1.5 rounded-full bg-emerald-500" />
                Active
              </Badge>
              <Badge variant="secondary" className="gap-1.5">
                <span className="size-1.5 rounded-full bg-amber-500" />
                Pending
              </Badge>
              <Badge variant="secondary" className="gap-1.5">
                <span className="size-1.5 rounded-full bg-red-500" />
                Offline
              </Badge>
              <Badge variant="outline" className="gap-1.5">
                <span className="size-1.5 rounded-full bg-blue-500" />
                In review
              </Badge>
              <Badge variant="outline" className="gap-1.5">
                <span className="size-1.5 rounded-full bg-purple-500" />
                Draft
              </Badge>
            </div>
          </div>
        </div>
      </Section>

      <Separator className="my-16" />

      {/* ---------------------------------------------------------- */}
      {/*  INPUTS                                                     */}
      {/* ---------------------------------------------------------- */}
      <Section
        title="Inputs"
        description="Text fields, textareas, and form controls for capturing user input."
      >
        <div className="grid gap-8 max-w-md">
          {/* Default */}
          <div>
            <p className="text-xs font-mono text-muted-foreground/60 mb-3">
              default
            </p>
            <Input placeholder="Enter your email..." />
          </div>

          {/* With label */}
          <div>
            <p className="text-xs font-mono text-muted-foreground/60 mb-3">
              with label
            </p>
            <div className="grid gap-2">
              <Label htmlFor="input-label">Full name</Label>
              <Input id="input-label" placeholder="Jane Doe" />
            </div>
          </div>

          {/* Disabled */}
          <div>
            <p className="text-xs font-mono text-muted-foreground/60 mb-3">
              disabled
            </p>
            <Input disabled placeholder="Cannot edit this field" />
          </div>

          {/* Error state */}
          <div>
            <p className="text-xs font-mono text-muted-foreground/60 mb-3">
              error
            </p>
            <div className="grid gap-2">
              <Label htmlFor="input-error">Email</Label>
              <Input
                id="input-error"
                aria-invalid="true"
                defaultValue="not-an-email"
              />
              <p className="text-xs text-destructive">
                Please enter a valid email address.
              </p>
            </div>
          </div>

        </div>
      </Section>

      <Separator className="my-16" />

      {/* ---------------------------------------------------------- */}
      {/*  SELECT                                                     */}
      {/* ---------------------------------------------------------- */}
      <Section
        title="Select"
        description="Dropdown menus for choosing from a predefined set of options."
      >
        <div className="max-w-xs space-y-6">
          <div className="grid gap-2">
            <Label>Framework</Label>
            <Select defaultValue="next">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a framework" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="next">Next.js</SelectItem>
                <SelectItem value="remix">Remix</SelectItem>
                <SelectItem value="astro">Astro</SelectItem>
                <SelectItem value="nuxt">Nuxt</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Section>

      <Separator className="my-16" />

      {/* ---------------------------------------------------------- */}
      {/*  CHECKBOX & RADIO                                           */}
      {/* ---------------------------------------------------------- */}
      <Section
        title="Checkbox & Radio"
        description="Selection controls for single and multiple choices."
      >
        <div className="grid md:grid-cols-2 gap-12">
          {/* Checkbox group */}
          <div>
            <p className="text-xs font-mono text-muted-foreground/60 mb-4">
              checkbox group
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <Checkbox id="check-1" defaultChecked />
                <Label htmlFor="check-1" className="font-normal">
                  Enable notifications
                </Label>
              </div>
              <div className="flex items-center gap-2.5">
                <Checkbox id="check-2" />
                <Label htmlFor="check-2" className="font-normal">
                  Send weekly digest
                </Label>
              </div>
              <div className="flex items-center gap-2.5" data-disabled="true">
                <Checkbox id="check-3" disabled />
                <Label htmlFor="check-3" className="font-normal">
                  Marketing emails (disabled)
                </Label>
              </div>
            </div>
          </div>

          {/* Radio group */}
          <div>
            <p className="text-xs font-mono text-muted-foreground/60 mb-4">
              radio group
            </p>
            <RadioGroup defaultValue="comfortable">
              <div className="flex items-center gap-2.5">
                <RadioGroupItem value="compact" id="radio-1" />
                <Label htmlFor="radio-1" className="font-normal">
                  Compact
                </Label>
              </div>
              <div className="flex items-center gap-2.5">
                <RadioGroupItem value="comfortable" id="radio-2" />
                <Label htmlFor="radio-2" className="font-normal">
                  Comfortable
                </Label>
              </div>
              <div className="flex items-center gap-2.5">
                <RadioGroupItem value="spacious" id="radio-3" />
                <Label htmlFor="radio-3" className="font-normal">
                  Spacious
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </Section>

      <Separator className="my-16" />

      {/* ---------------------------------------------------------- */}
      {/*  SWITCH & TOGGLE                                            */}
      {/* ---------------------------------------------------------- */}
      <Section
        title="Switch & Toggle"
        description="Binary controls and pressable toggle buttons."
      >
        <div className="flex flex-wrap items-start gap-12">
          {/* Switch */}
          <div>
            <p className="text-xs font-mono text-muted-foreground/60 mb-4">
              switch
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Switch id="switch-1" defaultChecked />
                <Label htmlFor="switch-1" className="font-normal">
                  Dark mode
                </Label>
              </div>
              <div className="flex items-center gap-3">
                <Switch id="switch-2" />
                <Label htmlFor="switch-2" className="font-normal">
                  Airplane mode
                </Label>
              </div>
            </div>
          </div>

          {/* Toggle */}
          <div>
            <p className="text-xs font-mono text-muted-foreground/60 mb-4">
              toggle
            </p>
            <div className="flex items-center gap-2">
              <Toggle defaultPressed aria-label="Bold">
                <BoldIcon />
              </Toggle>
              <Toggle aria-label="Italic">
                <ItalicIcon />
              </Toggle>
              <Toggle aria-label="Underline">
                <UnderlineIcon />
              </Toggle>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
