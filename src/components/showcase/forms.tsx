"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupButton,
} from "@/components/ui/input-group"

/* ------------------------------------------------------------------ */
/*  Inline SVG Icons                                                   */
/* ------------------------------------------------------------------ */

function CalendarIcon({ className }: { className?: string }) {
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
      <rect x="2" y="3" width="12" height="11" rx="2" />
      <path d="M5 1v3M11 1v3M2 7h12" />
    </svg>
  )
}

function SearchIcon({ className }: { className?: string }) {
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
      <circle cx="7" cy="7" r="4.5" />
      <path d="M10.5 10.5L14 14" />
    </svg>
  )
}

function AlignLeftIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={className}>
      <path d="M2 3h12M2 7h8M2 11h10M2 15h6" />
    </svg>
  )
}

function AlignCenterIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={className}>
      <path d="M2 3h12M4 7h8M3 11h10M5 15h6" />
    </svg>
  )
}

function AlignRightIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={className}>
      <path d="M2 3h12M6 7h8M4 11h10M8 15h6" />
    </svg>
  )
}

function AlignJustifyIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={className}>
      <path d="M2 3h12M2 7h12M2 11h12M2 15h12" />
    </svg>
  )
}

function BoldIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 3h5.5a3 3 0 0 1 0 5H4V3zM4 8h6.5a3 3 0 0 1 0 5H4V8z" />
    </svg>
  )
}

function ItalicIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M10 3H6M10 13H6M9 3l-2 10" />
    </svg>
  )
}

function UnderlineIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 3v5a4 4 0 0 0 8 0V3M3 14h10" />
    </svg>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 8.5l3.5 3.5L13 5" />
    </svg>
  )
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 6l4 4 4-4" />
    </svg>
  )
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="1" y="3" width="14" height="10" rx="2" />
      <path d="M1 4l7 5 7-5" />
    </svg>
  )
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3.5 1.5h9a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1z" />
      <path d="M8 12.5h.01" />
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
/*  Slider Section                                                     */
/* ------------------------------------------------------------------ */

function SliderSection() {
  const [singleValue, setSingleValue] = React.useState<readonly number[]>([40])
  const [rangeValue, setRangeValue] = React.useState<readonly number[]>([25, 75])

  const handleSingle = React.useCallback((value: number | readonly number[]) => {
    setSingleValue(Array.isArray(value) ? value : [value])
  }, [])
  const handleRange = React.useCallback((value: number | readonly number[]) => {
    setRangeValue(Array.isArray(value) ? value : [value])
  }, [])

  return (
    <Section title="Slider" description="Continuous and discrete value selection with single and range modes.">
      <div className="space-y-10">
        <div>
          <p className="text-xs font-mono text-muted-foreground/60 mb-4">default with value label</p>
          <div className="max-w-sm space-y-3">
            <div className="flex items-center justify-between">
              <Label className="text-[15px] text-muted-foreground">Volume</Label>
              <span className="text-sm font-mono text-muted-foreground">{singleValue[0]}</span>
            </div>
            <Slider defaultValue={[40]} onValueChange={handleSingle} />
          </div>
        </div>

        <Separator />

        <div>
          <p className="text-xs font-mono text-muted-foreground/60 mb-4">range slider</p>
          <div className="max-w-sm space-y-3">
            <div className="flex items-center justify-between">
              <Label className="text-[15px] text-muted-foreground">Price range</Label>
              <span className="text-sm font-mono text-muted-foreground">${rangeValue[0]} — ${rangeValue[1]}</span>
            </div>
            <Slider defaultValue={[25, 75]} onValueChange={handleRange} />
          </div>
        </div>
      </div>
    </Section>
  )
}

/* ------------------------------------------------------------------ */
/*  Calendar Section                                                   */
/* ------------------------------------------------------------------ */

function DateSelectionSection() {
  const [calendarDate, setCalendarDate] = React.useState<Date | undefined>(new Date(2026, 2, 26))
  const [pickerDate, setPickerDate] = React.useState<Date | undefined>(new Date(2026, 2, 26))
  const [open, setOpen] = React.useState(false)

  return (
    <Section title="Date Selection" description="Inline calendar and popover date picker for selecting dates.">
      <div className="grid gap-10 sm:grid-cols-2 items-start">
        <div>
          <p className="text-xs font-mono text-muted-foreground/60 mb-4">inline calendar</p>
          <Calendar
            mode="single"
            selected={calendarDate}
            onSelect={setCalendarDate}
          />
        </div>

        <div>
          <p className="text-xs font-mono text-muted-foreground/60 mb-4">date picker popover</p>
          <div className="max-w-xs">
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger
                render={
                  <Button variant="outline" className={cn("w-full justify-start text-left font-normal gap-2", !pickerDate && "text-muted-foreground")}>
                    <CalendarIcon className="size-4" />
                    {pickerDate
                      ? pickerDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
                      : "Pick a date"}
                  </Button>
                }
              />
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={pickerDate}
                  onSelect={(d) => {
                    setPickerDate(d)
                    setOpen(false)
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </Section>
  )
}

/* ------------------------------------------------------------------ */
/*  Toggle Group Section                                               */
/* ------------------------------------------------------------------ */

function ToggleGroupSection() {
  return (
    <Section title="Toggle Group" description="Grouped toggles for single or multi-select options.">
      <div className="space-y-10">
        <div>
          <p className="text-xs font-mono text-muted-foreground/60 mb-4">single select — text alignment</p>
          <ToggleGroup defaultValue={["left"]}>
            <ToggleGroupItem value="left" aria-label="Align left">
              <AlignLeftIcon className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
              <AlignCenterIcon className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
              <AlignRightIcon className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="justify" aria-label="Justify">
              <AlignJustifyIcon className="size-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <Separator />

        <div>
          <p className="text-xs font-mono text-muted-foreground/60 mb-4">multi select — formatting</p>
          <ToggleGroup multiple defaultValue={["bold"]}>
            <ToggleGroupItem value="bold" aria-label="Bold">
              <BoldIcon className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Italic">
              <ItalicIcon className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Underline">
              <UnderlineIcon className="size-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

      </div>
    </Section>
  )
}

/* ------------------------------------------------------------------ */
/*  Combobox Section                                                   */
/* ------------------------------------------------------------------ */

const frameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt", label: "Nuxt" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
  { value: "gatsby", label: "Gatsby" },
  { value: "solid-start", label: "SolidStart" },
]

function ComboboxSection() {
  const [open, setOpen] = React.useState(false)
  const [selected, setSelected] = React.useState("")

  return (
    <Section title="Combobox" description="Searchable dropdown combining Command and Popover for autocomplete patterns.">
      <div className="max-w-xs">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger
            render={
              <Button variant="outline" className="w-full justify-between font-normal">
                {selected
                  ? frameworks.find((f) => f.value === selected)?.label
                  : "Select framework..."}
                <ChevronDownIcon className="size-4 text-muted-foreground" />
              </Button>
            }
          />
          <PopoverContent className="w-[var(--anchor-width)] p-0">
            <Command>
              <CommandInput placeholder="Search framework..." />
              <CommandList>
                <CommandEmpty>No framework found.</CommandEmpty>
                <CommandGroup>
                  {frameworks.map((framework) => (
                    <CommandItem
                      key={framework.value}
                      value={framework.value}
                      data-checked={selected === framework.value}
                      onSelect={(currentValue) => {
                        setSelected(currentValue === selected ? "" : currentValue)
                        setOpen(false)
                      }}
                    >
                      {framework.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </Section>
  )
}

/* ------------------------------------------------------------------ */
/*  Login Form Section                                                 */
/* ------------------------------------------------------------------ */

function FormPatternsSection() {
  return (
    <Section title="Form Patterns" description="Complete form examples for authentication and settings.">
      <div className="grid gap-8 lg:grid-cols-2 items-start">
        <Card>
          <CardHeader>
            <CardTitle>Sign in</CardTitle>
            <CardDescription>Enter your credentials to access your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="login-email">Email</Label>
                <Input id="login-email" type="email" placeholder="you@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="login-password">Password</Label>
                <Input id="login-password" type="password" placeholder="Enter your password" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox id="remember-me" />
                  <Label htmlFor="remember-me" className="text-sm text-muted-foreground font-normal">
                    Remember me
                  </Label>
                </div>
                <button type="button" className="text-sm text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline">
                  Forgot password?
                </button>
              </div>
              <Button className="w-full">Sign in</Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Account settings</CardTitle>
            <CardDescription>Update your profile information and notification preferences</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="settings-name">Name</Label>
                  <Input id="settings-name" defaultValue="Kawus Sarhang" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="settings-email">Email</Label>
                  <Input id="settings-email" type="email" defaultValue="kawus@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="settings-bio">Bio</Label>
                <Textarea id="settings-bio" placeholder="Tell us about yourself..." className="min-h-24" />
              </div>

              <Separator />

              <div className="space-y-1">
                <p className="text-[15px] font-medium text-foreground">Notifications</p>
                <p className="text-sm text-muted-foreground">Choose what you want to be notified about.</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <Label className="text-[15px]">Email notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive updates about your account via email.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <Label className="text-[15px]">Push notifications</Label>
                    <p className="text-sm text-muted-foreground">Get notified on your device when something happens.</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <Label className="text-[15px]">Marketing emails</Label>
                    <p className="text-sm text-muted-foreground">Hear about new features and product updates.</p>
                  </div>
                  <Switch />
                </div>
              </div>

              <Separator />

              <div className="flex items-center gap-3 justify-end">
                <Button variant="outline">Cancel</Button>
                <Button>Save changes</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </Section>
  )
}

/* ------------------------------------------------------------------ */
/*  Input Groups Section                                               */
/* ------------------------------------------------------------------ */

function InputGroupsSection() {
  return (
    <Section title="Input Groups" description="Combined input patterns with icons, buttons, and select prefixes.">
      <div className="grid gap-6 sm:grid-cols-3">
        <div>
          <p className="text-xs font-mono text-muted-foreground/60 mb-4">search with icon</p>
          <InputGroup>
            <InputGroupAddon>
              <SearchIcon className="size-4" />
            </InputGroupAddon>
            <InputGroupInput placeholder="Search..." />
          </InputGroup>
        </div>

        <div>
          <p className="text-xs font-mono text-muted-foreground/60 mb-4">email subscribe</p>
          <InputGroup>
            <InputGroupAddon>
              <MailIcon className="size-4" />
            </InputGroupAddon>
            <InputGroupInput type="email" placeholder="you@example.com" />
            <InputGroupAddon align="inline-end">
              <InputGroupButton variant="default" size="xs">Subscribe</InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </div>

        <div>
          <p className="text-xs font-mono text-muted-foreground/60 mb-4">phone with country code</p>
          <div className="flex gap-2">
            <Select defaultValue="us">
              <SelectTrigger className="w-[100px] shrink-0">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">+1</SelectItem>
                <SelectItem value="uk">+44</SelectItem>
                <SelectItem value="de">+49</SelectItem>
                <SelectItem value="nl">+31</SelectItem>
                <SelectItem value="se">+46</SelectItem>
              </SelectContent>
            </Select>
            <Input placeholder="Phone number" />
          </div>
        </div>
      </div>
    </Section>
  )
}

/* ------------------------------------------------------------------ */
/*  FormsShowcase                                                      */
/* ------------------------------------------------------------------ */

export function FormsShowcase() {
  return (
    <div className="space-y-0">
      <div className="mb-16">
        <h2 className="text-lg font-medium tracking-tight mb-2">Forms</h2>
        <p className="text-sm text-muted-foreground max-w-2xl">Sliders, date pickers, toggle groups, and complete form patterns.</p>
      </div>
      <SliderSection />
      <Separator className="my-16" />
      <DateSelectionSection />
      <Separator className="my-16" />
      <ToggleGroupSection />
      <Separator className="my-16" />
      <ComboboxSection />
      <Separator className="my-16" />
      <FormPatternsSection />
      <Separator className="my-16" />
      <InputGroupsSection />
    </div>
  )
}
