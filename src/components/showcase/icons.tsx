"use client";

import { useState, useMemo, useCallback } from "react";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ─── Build icon map once ─── */
const iconEntries: { name: string; component: LucideIcon }[] = Object.entries(
  LucideIcons
)
  .filter(
    ([key]) =>
      /^[A-Z]/.test(key) &&
      !key.startsWith("create") &&
      !key.endsWith("Icon") &&
      key !== "default"
  )
  .map(([key, component]) => ({
    name: key,
    component: component as LucideIcon,
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

/* ─── Convert PascalCase to kebab-case for display ─── */
function toKebab(str: string): string {
  return str
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();
}

const ICONS_PER_PAGE = 200;

export function IconsShowcase() {
  const [search, setSearch] = useState("");
  const [copied, setCopied] = useState<string | null>(null);
  const [page, setPage] = useState(0);

  const filtered = useMemo(() => {
    if (!search.trim()) return iconEntries;
    const q = search.toLowerCase();
    return iconEntries.filter(
      (icon) =>
        icon.name.toLowerCase().includes(q) ||
        toKebab(icon.name).includes(q)
    );
  }, [search]);

  const totalPages = Math.ceil(filtered.length / ICONS_PER_PAGE);
  const visible = filtered.slice(
    page * ICONS_PER_PAGE,
    (page + 1) * ICONS_PER_PAGE
  );

  const handleCopy = useCallback((name: string) => {
    const importStr = `import { ${name} } from "lucide-react"`;
    navigator.clipboard.writeText(importStr);
    setCopied(name);
    setTimeout(() => setCopied(null), 1500);
  }, []);

  return (
    <div className="space-y-8">
      {/* Search + count */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <LucideIcons.Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground/50" />
          <input
            type="text"
            placeholder="Search icons..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(0);
            }}
            className="w-full h-9 pl-9 pr-3 rounded-lg border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring/30 transition-shadow"
          />
        </div>
        <span className="text-[13px] text-muted-foreground font-mono shrink-0">
          {filtered.length} icons
        </span>
      </div>

      {/* Icon grid */}
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2">
        {visible.map(({ name, component: Icon }) => (
          <button
            key={name}
            onClick={() => handleCopy(name)}
            className="group flex flex-col items-center gap-2 p-3 rounded-lg border border-transparent hover:border-border/50 hover:bg-accent/50 transition-colors"
            title={name}
          >
            <Icon className="size-5 text-foreground" />
            <span className="text-[10px] font-mono text-muted-foreground/60 group-hover:text-muted-foreground truncate w-full text-center transition-colors">
              {copied === name ? "Copied!" : toKebab(name)}
            </span>
          </button>
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <LucideIcons.SearchX className="size-8 text-muted-foreground/30 mb-3" />
          <p className="text-sm text-muted-foreground">
            No icons found for &ldquo;{search}&rdquo;
          </p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-4">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="px-3 py-1.5 text-[13px] rounded-md border border-border hover:bg-accent/50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            Previous
          </button>
          <span className="text-[13px] text-muted-foreground font-mono px-3">
            {page + 1} / {totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="px-3 py-1.5 text-[13px] rounded-md border border-border hover:bg-accent/50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            Next
          </button>
        </div>
      )}

      {/* Usage note */}
      <div className="bg-card rounded-lg border border-border/50 p-5">
        <p className="text-[13px] text-muted-foreground">
          Click any icon to copy its import statement. All icons are from{" "}
          <a
            href="https://lucide.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
          >
            Lucide
          </a>
          {" "}— {iconEntries.length} icons, 24px grid, 2px stroke.
        </p>
      </div>
    </div>
  );
}
