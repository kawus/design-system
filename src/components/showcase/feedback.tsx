"use client"

import { useState, useEffect } from "react"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress"
import { Skeleton } from "@/components/ui/skeleton"
import { toast } from "sonner"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

/* ------------------------------------------------------------------ */
/*  Inline SVG Icons                                                   */
/* ------------------------------------------------------------------ */

function InfoCircleIcon({ className }: { className?: string }) {
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
      <circle cx="8" cy="8" r="6" />
      <path d="M8 7v4M8 5.5v-.01" />
    </svg>
  )
}

function XCircleIcon({ className }: { className?: string }) {
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
      <circle cx="8" cy="8" r="6" />
      <path d="M6 6l4 4M10 6l-4 4" />
    </svg>
  )
}

function CheckCircleIcon({ className }: { className?: string }) {
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
      <circle cx="8" cy="8" r="6" />
      <path d="M5.5 8l2 2 3-4" />
    </svg>
  )
}

function TriangleAlertIcon({ className }: { className?: string }) {
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
      <path d="M7.13 2.5a1 1 0 0 1 1.74 0l5.5 9.5A1 1 0 0 1 13.5 13.5h-11a1 1 0 0 1-.87-1.5l5.5-9.5z" />
      <path d="M8 6v3M8 11v.01" />
    </svg>
  )
}

function TrashIcon({ className }: { className?: string }) {
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
      <path d="M2.5 4h11M5.5 4V2.5h5V4M6 7v4M10 7v4M3.5 4l.5 9.5h8l.5-9.5" />
    </svg>
  )
}

function SendIcon({ className }: { className?: string }) {
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
      <path d="M14 2L7 9M14 2l-5 12-2-5-5-2 12-5z" />
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
/*  FeedbackShowcase                                                   */
/* ------------------------------------------------------------------ */

export function FeedbackShowcase() {
  const [animatedProgress, setAnimatedProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimatedProgress((prev) => {
        if (prev >= 100) return 0
        return prev + 1
      })
    }, 80)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="space-y-0">
      <div className="mb-16">
        <h2 className="text-lg font-medium tracking-tight mb-2">Feedback</h2>
        <p className="text-sm text-muted-foreground max-w-2xl">Alerts, progress indicators, loading states, toasts, and confirmation dialogs.</p>
      </div>

      {/* ---------------------------------------------------------- */}
      {/*  ALERTS                                                    */}
      {/* ---------------------------------------------------------- */}
      <Section
        title="Alert"
        description="Contextual feedback messages for user actions and system states."
      >
        <div className="space-y-3">
          <Alert>
            <InfoCircleIcon className="size-4" />
            <AlertTitle>New deployment available</AlertTitle>
            <AlertDescription>
              A new version has been deployed to staging. Review changes before promoting to production.
            </AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <XCircleIcon className="size-4" />
            <AlertTitle>Build failed</AlertTitle>
            <AlertDescription>
              The pipeline failed at the test stage. Check the logs for details.
            </AlertDescription>
          </Alert>

          <Alert className="text-emerald-600 dark:text-emerald-400">
            <CheckCircleIcon className="size-4" />
            <AlertTitle>Changes published</AlertTitle>
            <AlertDescription>
              Your changes are now live. It may take a few minutes for the CDN to propagate.
            </AlertDescription>
          </Alert>
        </div>
      </Section>

      <Separator className="my-16" />

      {/* ---------------------------------------------------------- */}
      {/*  PROGRESS                                                  */}
      {/* ---------------------------------------------------------- */}
      <Section
        title="Progress"
        description="Visual indicators for task completion and loading states."
      >
        <div className="space-y-10">
          <div>
            <p className="text-xs font-mono text-muted-foreground/60 mb-4">static</p>
            <Progress value={65}>
              <ProgressLabel className="text-[15px] text-muted-foreground">
                In progress
              </ProgressLabel>
              <ProgressValue className="text-sm text-muted-foreground">
                {(formattedValue) => formattedValue}
              </ProgressValue>
            </Progress>
          </div>

          <Separator />

          <div>
            <p className="text-xs font-mono text-muted-foreground/60 mb-4">animated</p>
            <Progress value={animatedProgress}>
              <ProgressLabel className="text-[15px] text-muted-foreground">
                Uploading files...
              </ProgressLabel>
              <ProgressValue className="text-sm text-muted-foreground tabular-nums">
                {(formattedValue) => formattedValue}
              </ProgressValue>
            </Progress>
          </div>
        </div>
      </Section>

      <Separator className="my-16" />

      {/* ---------------------------------------------------------- */}
      {/*  SKELETON                                                  */}
      {/* ---------------------------------------------------------- */}
      <Section
        title="Skeleton"
        description="Placeholder loading states that mirror content layout."
      >
        <div className="grid gap-8 sm:grid-cols-2">
          {/* Card skeleton */}
          <div>
            <p className="text-xs text-muted-foreground font-mono mb-3">Card</p>
            <div className="flex items-start gap-3">
              <Skeleton className="size-10 shrink-0 rounded-full" />
              <div className="flex-1 space-y-2 pt-0.5">
                <Skeleton className="h-4 w-3/5" />
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-4/5" />
              </div>
            </div>
          </div>

          {/* Table row skeleton */}
          <div>
            <p className="text-xs text-muted-foreground font-mono mb-3">Table row</p>
            <div className="space-y-2">
              {[1, 2, 3].map((row) => (
                <div key={row} className="flex items-center gap-3">
                  <Skeleton className="h-3 w-1/4" />
                  <Skeleton className="h-3 w-2/5" />
                  <Skeleton className="h-3 w-1/6" />
                  <Skeleton className="h-3 w-1/5" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Separator className="my-16" />

      {/* ---------------------------------------------------------- */}
      {/*  TOAST (SONNER)                                            */}
      {/* ---------------------------------------------------------- */}
      <Section
        title="Toast"
        description="Temporary notifications triggered by user actions."
      >
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => toast("Event has been created")}
          >
            Default
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => toast.success("Changes saved successfully")}
          >
            Success
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => toast.error("Failed to save changes")}
          >
            Error
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              toast("Meeting scheduled", {
                action: {
                  label: "Undo",
                  onClick: () => toast("Meeting cancelled"),
                },
              })
            }
          >
            With action
          </Button>
        </div>
      </Section>

      <Separator className="my-16" />

      {/* ---------------------------------------------------------- */}
      {/*  ALERT DIALOG                                              */}
      {/* ---------------------------------------------------------- */}
      <Section
        title="Alert Dialog"
        description="Modal confirmations for destructive or important actions."
      >
        <div className="flex flex-wrap gap-3">
          <AlertDialog>
            <AlertDialogTrigger
              render={<Button variant="destructive" size="sm" />}
            >
              <TrashIcon className="size-3.5" />
              Delete account
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogMedia className="bg-destructive/10">
                  <TrashIcon className="size-5 text-destructive" />
                </AlertDialogMedia>
                <AlertDialogTitle>Delete account</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. All your data, projects, and settings will be permanently removed.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction variant="destructive">
                  Delete account
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <AlertDialog>
            <AlertDialogTrigger
              render={<Button variant="outline" size="sm" />}
            >
              <SendIcon className="size-3.5" />
              Publish changes
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogMedia>
                  <SendIcon className="size-5 text-foreground" />
                </AlertDialogMedia>
                <AlertDialogTitle>Publish changes</AlertDialogTitle>
                <AlertDialogDescription>
                  This will deploy your changes to production. All users will see the updated version immediately.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Publish</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </Section>

      <Separator className="my-16" />

      {/* ---------------------------------------------------------- */}
      {/*  HOVER CARD                                                */}
      {/* ---------------------------------------------------------- */}
      <Section
        title="Hover Card"
        description="Contextual previews shown on hover for links and mentions."
      >
        <div className="flex flex-wrap items-baseline gap-6">
          <div className="text-[15px] text-muted-foreground">
            Assigned to{" "}
            <HoverCard>
              <HoverCardTrigger
                render={
                  <button className="font-medium text-foreground underline underline-offset-4 decoration-foreground/20 hover:decoration-foreground/40 transition-colors cursor-pointer" />
                }
              >
                @emilchen
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5">
                    <div className="size-9 rounded-full bg-muted flex items-center justify-center text-xs font-medium text-muted-foreground">
                      EC
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Emil Chen</p>
                      <p className="text-xs text-muted-foreground">@emilchen</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Senior engineer working on infrastructure and developer tooling.
                  </p>
                  <div className="flex gap-4 text-xs text-muted-foreground">
                    <span><span className="font-medium text-foreground">142</span> commits</span>
                    <span><span className="font-medium text-foreground">38</span> PRs</span>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>{" "}
            for review
          </div>

          <div className="text-[15px] text-muted-foreground">
            See{" "}
            <HoverCard>
              <HoverCardTrigger
                render={
                  <button className="font-medium text-foreground underline underline-offset-4 decoration-foreground/20 hover:decoration-foreground/40 transition-colors cursor-pointer" />
                }
              >
                API documentation
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">REST API Reference</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Complete reference for authentication, endpoints, rate limits, and error handling.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Last updated 2 days ago
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>{" "}
            for details
          </div>
        </div>
      </Section>
    </div>
  )
}
