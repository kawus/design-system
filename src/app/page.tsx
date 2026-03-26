"use client";

import { useState } from "react";
import { FoundationShowcase } from "@/components/showcase/foundation";
import { CoreShowcase } from "@/components/showcase/core";
import { DataNavShowcase } from "@/components/showcase/data-nav";
import { OverlayShowcase } from "@/components/showcase/overlay";
import { MarketingShowcase } from "@/components/showcase/marketing";
import { ArticleShowcase } from "@/components/showcase/article";
import { ContentShowcase } from "@/components/showcase/content";
import { BlogPostShowcase } from "@/components/showcase/blog-post";
import { FeedbackShowcase } from "@/components/showcase/feedback";
import { LayoutShowcase } from "@/components/showcase/layout";
import { FormsShowcase } from "@/components/showcase/forms";
import { PatternsShowcase } from "@/components/showcase/patterns";

const sidebarGroups = [
  {
    label: "Getting Started",
    items: [
      { id: "foundation", label: "Foundation", component: FoundationShowcase },
    ],
  },
  {
    label: "Components",
    items: [
      { id: "core", label: "Core", component: CoreShowcase },
      { id: "forms", label: "Forms", component: FormsShowcase },
      { id: "data-nav", label: "Data & Navigation", component: DataNavShowcase },
      { id: "feedback", label: "Feedback", component: FeedbackShowcase },
      { id: "overlay", label: "Overlay", component: OverlayShowcase },
    ],
  },
  {
    label: "Layout",
    items: [
      { id: "layout", label: "Layout", component: LayoutShowcase },
      { id: "patterns", label: "Patterns", component: PatternsShowcase },
    ],
  },
  {
    label: "Content",
    items: [
      { id: "marketing", label: "Marketing", component: MarketingShowcase },
      { id: "article", label: "Article", component: ArticleShowcase },
      { id: "blog-post", label: "Blog Post", component: BlogPostShowcase },
      { id: "content", label: "Content", component: ContentShowcase },
    ],
  },
] as const;

const allItems = sidebarGroups.flatMap((g) => g.items);
const fullWidthSections = new Set(["article", "blog-post"]);

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("foundation");
  const [isDark, setIsDark] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const ActiveComponent =
    allItems.find((s) => s.id === activeSection)?.component ?? FoundationShowcase;

  const activeLabel = allItems.find((s) => s.id === activeSection)?.label ?? "Foundation";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="flex items-center justify-between h-14 px-6">
          <div className="flex items-center gap-3">
            {/* Mobile menu toggle */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden flex items-center justify-center w-8 h-8 rounded-md hover:bg-accent/50 transition-colors text-muted-foreground hover:text-foreground"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M2 4h12M2 8h12M2 12h12" />
              </svg>
            </button>
            <h1 className="text-sm font-semibold tracking-tight">
              <span className="text-foreground">Design</span>
              <span className="text-muted-foreground">System</span>
            </h1>
            <span className="text-[11px] font-mono text-muted-foreground/50 bg-muted px-1.5 py-0.5 rounded">v0.1.0</span>
          </div>
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 px-3 py-1.5 text-[13px] text-muted-foreground hover:text-foreground rounded-md hover:bg-accent/50 transition-colors"
          >
            {isDark ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
            {isDark ? "Light" : "Dark"}
          </button>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Mobile overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-30 bg-background/60 backdrop-blur-sm lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={`
            fixed top-14 bottom-0 z-40 w-64 border-r border-border/50 bg-background overflow-y-auto
            transition-transform duration-200 ease-in-out
            lg:sticky lg:translate-x-0 lg:shrink-0
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <nav className="p-4 space-y-6">
            {sidebarGroups.map((group) => (
              <div key={group.label}>
                <p className="text-[11px] uppercase tracking-widest font-mono text-muted-foreground/60 mb-2 px-2">
                  {group.label}
                </p>
                <div className="space-y-0.5">
                  {group.items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveSection(item.id);
                        setSidebarOpen(false);
                      }}
                      className={`
                        w-full text-left px-2 py-1.5 rounded-md text-[13px] transition-colors
                        ${
                          activeSection === item.id
                            ? "bg-accent text-foreground font-medium"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                        }
                      `}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0">
          {/* Breadcrumb */}
          <div className="border-b border-border/50 px-8 py-3">
            <div className="flex items-center gap-2 text-[13px]">
              <span className="text-muted-foreground/60">Docs</span>
              <span className="text-muted-foreground/40">/</span>
              <span className="text-foreground font-medium">{activeLabel}</span>
            </div>
          </div>

          <div
            className={
              fullWidthSections.has(activeSection)
                ? "mx-auto max-w-5xl px-8 py-12"
                : "mx-auto max-w-6xl px-8 py-12"
            }
          >
            <ActiveComponent />
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/50 py-6">
        <div className="px-8 flex items-center justify-between text-[13px] text-muted-foreground">
          <span>Built with Next.js, Tailwind CSS, and shadcn/ui</span>
          <span className="font-mono text-xs">v0.1.0</span>
        </div>
      </footer>
    </div>
  );
}
