"use client";

import { useState } from "react";
import { FoundationShowcase } from "@/components/showcase/foundation";
import { CoreShowcase } from "@/components/showcase/core";
import { DataNavShowcase } from "@/components/showcase/data-nav";
import { OverlayShowcase } from "@/components/showcase/overlay";
import { MarketingShowcase } from "@/components/showcase/marketing";

const sections = [
  { id: "foundation", label: "Foundation", component: FoundationShowcase },
  { id: "core", label: "Core", component: CoreShowcase },
  { id: "data-nav", label: "Data & Nav", component: DataNavShowcase },
  { id: "overlay", label: "Overlay", component: OverlayShowcase },
  { id: "marketing", label: "Marketing", component: MarketingShowcase },
] as const;

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("foundation");
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const ActiveComponent =
    sections.find((s) => s.id === activeSection)?.component ?? FoundationShowcase;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-14">
          <div className="flex items-center gap-6">
            <h1 className="text-sm font-semibold tracking-tight">
              <span className="text-foreground">Design</span>
              <span className="text-muted-foreground">System</span>
            </h1>
            <nav className="flex items-center gap-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`px-3 py-1.5 text-[13px] rounded-md transition-colors ${
                    activeSection === section.id
                      ? "bg-accent text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </nav>
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

      {/* Content */}
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <ActiveComponent />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 py-6">
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between text-[13px] text-muted-foreground">
          <span>Built with Next.js, Tailwind CSS, and shadcn/ui</span>
          <span className="font-mono text-xs">v0.1.0</span>
        </div>
      </footer>
    </div>
  );
}
