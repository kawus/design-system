# Design System

A component library and design system built on [shadcn/ui](https://ui.shadcn.com), inspired by Vercel and Linear. oklch color tokens, Geist typography, light/dark themes, and 41 installable components.

**[Live Docs](https://next-design-system-nu.vercel.app)** · **[Registry](https://next-design-system-nu.vercel.app/r/registry.json)**

## Install

Add the registry to your project's `components.json`:

```json
{
  "registries": {
    "@ds": "https://next-design-system-nu.vercel.app/r/{name}.json"
  }
}
```

Install the theme and any components you need:

```bash
npx shadcn add @ds/theme
npx shadcn add @ds/button @ds/card @ds/dialog
```

Or install a component directly by URL:

```bash
npx shadcn add https://next-design-system-nu.vercel.app/r/button.json
```

## What's included

### Foundation

- **Colors** — oklch color palette with semantic tokens (primary, muted, destructive, etc.) for light and dark themes
- **Typography** — Geist Sans + Geist Mono, 7-step type scale from Display to Micro
- **Surfaces** — Spacing scale, border radius tokens, and visual effects (glow, glass, gradient borders, noise)

### Components (41)

Accordion, Alert, Alert Dialog, Aspect Ratio, Avatar, Badge, Breadcrumb, Button, Calendar, Card, Checkbox, Collapsible, Command, Context Menu, Dialog, Dropdown Menu, Hover Card, Input, Input Group, Label, Menubar, Navigation Menu, Pagination, Popover, Progress, Radio Group, Resizable, Scroll Area, Select, Separator, Sheet, Skeleton, Slider, Sonner, Switch, Table, Tabs, Textarea, Toggle, Toggle Group, Tooltip

### Example Pages

Full-page compositions showing the system in use:

- **Dashboard** — Analytics with stat cards, activity feeds, settings, pricing
- **Landing Page** — SaaS marketing with hero, features, social proof, CTA
- **Article** — Long-form editorial with callouts and structured prose
- **Blog Post** — Rich content with video/audio players and code blocks

## Stack

- [Next.js](https://nextjs.org) (App Router)
- [Tailwind CSS 4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Radix UI](https://www.radix-ui.com) (via Base UI)
- [Geist](https://vercel.com/font) (Sans + Mono)

## Development

```bash
npm install
npm run dev
```

Build the shadcn registry:

```bash
npm run registry:build
```

The production build runs `shadcn build` before `next build` automatically.

## Requirements

- Next.js 15+
- Tailwind CSS 4
- shadcn/ui initialized (`npx shadcn init`)
- TypeScript recommended
