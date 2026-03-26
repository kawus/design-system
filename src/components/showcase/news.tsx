"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import {
  Search,
  Bookmark,
  Share2,
  MessageSquare,
  Clock,
  TrendingUp,
  ChevronRight,
  ArrowRight,
  Flame,
  Globe,
  Cpu,
  Landmark,
  Activity,
  Leaf,
  User,
  Bell,
} from "lucide-react"

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */

const heroStory = {
  category: "Technology",
  title: "The Race to Build AI That Understands the Physical World",
  excerpt: "A new generation of models is moving beyond language and images into spatial reasoning, robotics, and real-time interaction with physical environments. The implications stretch from manufacturing to medicine.",
  author: "Elena Torres",
  authorInitials: "ET",
  time: "4 hours ago",
  readTime: "12 min read",
  comments: 284,
}

const topStories = [
  {
    id: 1,
    category: "Economy",
    title: "Central Banks Signal Coordinated Rate Pause as Inflation Cools Globally",
    excerpt: "The Federal Reserve, ECB, and Bank of Japan align on holding rates steady through Q3, marking an unusual moment of consensus.",
    author: "Marcus Webb",
    initials: "MW",
    time: "2h ago",
    readTime: "8 min",
    comments: 156,
    image: "CB",
  },
  {
    id: 2,
    category: "Science",
    title: "CRISPR Breakthrough Reverses Age-Related Vision Loss in Clinical Trial",
    excerpt: "Participants in a Phase 2 trial showed measurable improvement in visual acuity after a single gene-editing treatment.",
    author: "Dr. Sarah Lin",
    initials: "SL",
    time: "5h ago",
    readTime: "6 min",
    comments: 203,
    image: "CR",
  },
  {
    id: 3,
    category: "Climate",
    title: "Arctic Shipping Route Opens Two Months Earlier Than Predicted",
    excerpt: "The Northern Sea Route is navigable far ahead of schedule, raising both commercial opportunities and environmental alarm.",
    author: "Jonas Eriksen",
    initials: "JE",
    time: "6h ago",
    readTime: "7 min",
    comments: 91,
    image: "AS",
  },
]

const trendingTopics = [
  { rank: 1, title: "EU Digital Markets Act enforcement", posts: "2.4k posts" },
  { rank: 2, title: "Mars sample return mission delay", posts: "1.8k posts" },
  { rank: 3, title: "Global semiconductor shortage easing", posts: "1.2k posts" },
  { rank: 4, title: "Urban farming legislation", posts: "980 posts" },
  { rank: 5, title: "Quantum computing milestone", posts: "870 posts" },
]

const latestUpdates = [
  { time: "12 min ago", title: "Tokyo stock exchange hits record high on tech rally", category: "Markets" },
  { time: "28 min ago", title: "SpaceX Starship completes first orbital refueling test", category: "Space" },
  { time: "45 min ago", title: "WHO declares end to mpox global health emergency", category: "Health" },
  { time: "1h ago", title: "Major cybersecurity bill passes Senate committee", category: "Politics" },
  { time: "1h ago", title: "Electric vehicle sales surpass 30% market share in Europe", category: "Auto" },
  { time: "2h ago", title: "Nobel laureate calls for global AI governance treaty", category: "Tech" },
]

const sections = [
  { icon: Globe, label: "World" },
  { icon: Landmark, label: "Politics" },
  { icon: Cpu, label: "Technology" },
  { icon: Activity, label: "Health" },
  { icon: Leaf, label: "Climate" },
  { icon: TrendingUp, label: "Markets" },
]

const opinion = [
  {
    title: "We're measuring AI progress wrong",
    author: "Prof. Ada Okafor",
    initials: "AO",
    role: "AI Ethics, MIT",
  },
  {
    title: "The housing crisis won't be solved by building alone",
    author: "David Chen",
    initials: "DC",
    role: "Urban Policy Fellow",
  },
  {
    title: "Why climate optimism is not denial",
    author: "Maria Santos",
    initials: "MS",
    role: "Environmental Journalist",
  },
]

/* ------------------------------------------------------------------ */
/*  Sections                                                            */
/* ------------------------------------------------------------------ */

function NewsNav() {
  return (
    <div className="space-y-0">
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center gap-6">
          <p className="text-sm font-semibold tracking-tight">
            <span className="text-foreground">the</span>
            <span className="text-muted-foreground">dispatch</span>
          </p>
          <div className="hidden md:flex items-center gap-1">
            {sections.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="px-2.5 py-1.5 text-[13px] text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center relative">
            <Search className="absolute left-2.5 size-3.5 text-muted-foreground/50" />
            <Input
              placeholder="Search..."
              className="h-8 w-44 pl-8 text-xs"
            />
          </div>
          <Button variant="ghost" size="icon-sm" className="sm:hidden">
            <Search className="size-4" />
          </Button>
          <Button variant="ghost" size="icon-sm" className="relative">
            <Bell className="size-4" />
            <span className="absolute top-1 right-1 size-1.5 rounded-full bg-destructive" />
          </Button>
          <Button size="sm" className="text-xs hidden sm:inline-flex">Subscribe</Button>
        </div>
      </div>

      {/* Breaking bar */}
      <div className="flex items-center gap-3 py-2 border-y border-border/50">
        <Badge variant="destructive" className="text-[9px] shrink-0">
          <Flame className="size-2.5 mr-1" />
          Breaking
        </Badge>
        <p className="text-[13px] text-muted-foreground truncate">
          G7 leaders announce joint infrastructure plan for developing nations — live coverage
        </p>
        <button className="text-[13px] text-foreground font-medium shrink-0 hover:underline underline-offset-4">
          Follow
        </button>
      </div>
    </div>
  )
}

function HeroStory() {
  return (
    <section className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Main story */}
        <div className="md:col-span-3">
          <Badge variant="secondary" className="text-[10px] mb-4">{heroStory.category}</Badge>
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight leading-tight mb-4 cursor-pointer hover:text-muted-foreground transition-colors">
            {heroStory.title}
          </h1>
          <p className="text-[15px] text-muted-foreground leading-relaxed mb-5">
            {heroStory.excerpt}
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Avatar size="sm" className="size-6">
                <AvatarFallback className="text-[9px]">{heroStory.authorInitials}</AvatarFallback>
              </Avatar>
              <span className="text-[13px] font-medium">{heroStory.author}</span>
            </div>
            <span className="text-[11px] text-muted-foreground/50">·</span>
            <span className="text-[11px] text-muted-foreground">{heroStory.time}</span>
            <span className="text-[11px] text-muted-foreground/50">·</span>
            <span className="text-[11px] text-muted-foreground">{heroStory.readTime}</span>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <Button variant="ghost" size="xs" className="text-muted-foreground">
              <Bookmark className="size-3.5 mr-1" /> Save
            </Button>
            <Button variant="ghost" size="xs" className="text-muted-foreground">
              <Share2 className="size-3.5 mr-1" /> Share
            </Button>
            <Button variant="ghost" size="xs" className="text-muted-foreground">
              <MessageSquare className="size-3.5 mr-1" /> {heroStory.comments}
            </Button>
          </div>
        </div>

        {/* Hero image placeholder */}
        <div className="md:col-span-2">
          <div className="aspect-[4/3] rounded-xl bg-muted/50 flex items-center justify-center">
            <span className="text-4xl font-medium text-muted-foreground/15 tracking-tight">AI</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function TopStories() {
  return (
    <section>
      <Separator className="mb-8" />
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[15px] font-medium">Top Stories</h2>
        <button className="text-[13px] text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors">
          More stories <ChevronRight className="size-3" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {topStories.map((story) => (
          <div key={story.id} className="group">
            <div className="aspect-video rounded-lg bg-muted/50 mb-3 flex items-center justify-center">
              <span className="text-2xl font-medium text-muted-foreground/15 tracking-tight">{story.image}</span>
            </div>
            <Badge variant="outline" className="text-[9px] mb-2">{story.category}</Badge>
            <h3 className="text-[15px] font-medium leading-snug mb-2 cursor-pointer group-hover:text-muted-foreground transition-colors">
              {story.title}
            </h3>
            <p className="text-[13px] text-muted-foreground leading-relaxed line-clamp-2 mb-3">
              {story.excerpt}
            </p>
            <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
              <span>{story.author}</span>
              <span className="text-muted-foreground/40">·</span>
              <span>{story.time}</span>
              <span className="text-muted-foreground/40">·</span>
              <span>{story.readTime}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function LiveUpdatesAndTrending() {
  return (
    <section className="mt-10">
      <Separator className="mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Live updates */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-destructive/60" />
              <span className="relative inline-flex size-2 rounded-full bg-destructive" />
            </span>
            <h2 className="text-[15px] font-medium">Live Updates</h2>
          </div>

          <div className="space-y-0">
            {latestUpdates.map((update, i) => (
              <div key={i}>
                <div className="flex items-start gap-4 py-3 group cursor-pointer">
                  <span className="text-[11px] font-mono text-muted-foreground/50 w-16 shrink-0 pt-0.5">
                    {update.time}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[15px] text-foreground group-hover:text-muted-foreground transition-colors leading-snug">
                      {update.title}
                    </p>
                    <Badge variant="outline" className="text-[9px] mt-1.5">{update.category}</Badge>
                  </div>
                </div>
                {i < latestUpdates.length - 1 && <Separator />}
              </div>
            ))}
          </div>
        </div>

        {/* Trending sidebar */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="size-4 text-muted-foreground" />
            <h2 className="text-[15px] font-medium">Trending</h2>
          </div>

          <div className="space-y-4">
            {trendingTopics.map((topic) => (
              <div key={topic.rank} className="flex items-start gap-3 group cursor-pointer">
                <span className="text-2xl font-medium text-muted-foreground/20 w-7 shrink-0 leading-none">
                  {topic.rank}
                </span>
                <div>
                  <p className="text-[13px] font-medium group-hover:text-muted-foreground transition-colors leading-snug">
                    {topic.title}
                  </p>
                  <p className="text-[11px] text-muted-foreground/60 mt-0.5">{topic.posts}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function OpinionSection() {
  return (
    <section className="mt-10">
      <Separator className="mb-8" />
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[15px] font-medium">Opinion</h2>
        <button className="text-[13px] text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors">
          All opinion <ChevronRight className="size-3" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {opinion.map((piece) => (
          <div
            key={piece.title}
            className="group rounded-xl border border-border/50 p-5 hover:border-border hover:bg-accent/30 transition-all cursor-pointer"
          >
            <h3 className="text-[15px] font-medium leading-snug mb-4 group-hover:text-muted-foreground transition-colors">
              {piece.title}
            </h3>
            <div className="flex items-center gap-2">
              <Avatar size="sm" className="size-6">
                <AvatarFallback className="text-[9px]">{piece.initials}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-[13px] font-medium">{piece.author}</p>
                <p className="text-[11px] text-muted-foreground">{piece.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function NewsletterCTA() {
  return (
    <section className="mt-10">
      <Separator className="mb-8" />
      <div className="rounded-xl border border-border/50 bg-card p-8 text-center max-w-lg mx-auto">
        <h3 className="text-lg font-medium tracking-tight mb-2">The Daily Brief</h3>
        <p className="text-[13px] text-muted-foreground mb-5">
          The five stories you need to know, delivered every morning at 7 AM.
        </p>
        <div className="flex items-center gap-2 max-w-sm mx-auto">
          <Input placeholder="your@email.com" className="h-9 text-[13px] flex-1" />
          <Button size="sm">
            Subscribe
            <ArrowRight className="size-3.5 ml-1.5" />
          </Button>
        </div>
        <p className="text-[11px] text-muted-foreground/50 mt-3">
          Free. No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Export                                                              */
/* ------------------------------------------------------------------ */

export function NewsShowcase() {
  return (
    <div>
      <NewsNav />
      <HeroStory />
      <TopStories />
      <LiveUpdatesAndTrending />
      <OpinionSection />
      <NewsletterCTA />
    </div>
  )
}
