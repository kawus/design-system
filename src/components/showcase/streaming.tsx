"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import {
  Play,
  Plus,
  ThumbsUp,
  Search,
  Bell,
  ChevronRight,
  Clock,
  TrendingUp,
  Star,
  Volume2,
  Maximize,
  SkipForward,
  Pause,
  Info,
  ChevronDown,
  Film,
} from "lucide-react"

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */

const featured = {
  title: "The Architecture of Light",
  year: "2026",
  rating: "TV-MA",
  seasons: "2 Seasons",
  match: "98% Match",
  description: "An ambitious architect's obsession with natural light leads her down a path that blurs the line between genius and madness. As her designs grow more radical, the people around her begin to question whether her vision will illuminate or consume everything.",
  genres: ["Drama", "Thriller", "Architecture"],
}

const continueWatching = [
  { id: 1, title: "The Architecture of Light", episode: "S2 E4", progress: 65, duration: "48min left", image: "AL" },
  { id: 2, title: "Signal Lost", episode: "S1 E7", progress: 30, duration: "32min left", image: "SL" },
  { id: 3, title: "Midnight Protocol", episode: "S1 E2", progress: 82, duration: "11min left", image: "MP" },
  { id: 4, title: "The Quiet Year", episode: "S1 E1", progress: 12, duration: "51min left", image: "QY" },
]

const trending = [
  { id: 1, title: "Vertex", year: "2026", rating: 4.8, tag: "New", genre: "Sci-Fi", image: "VX" },
  { id: 2, title: "The Last Garden", year: "2025", rating: 4.6, tag: null, genre: "Drama", image: "LG" },
  { id: 3, title: "Blackout", year: "2026", rating: 4.9, tag: "Trending", genre: "Thriller", image: "BO" },
  { id: 4, title: "Paper Walls", year: "2025", rating: 4.3, tag: null, genre: "Romance", image: "PW" },
  { id: 5, title: "Zero Hour", year: "2026", rating: 4.7, tag: "New", genre: "Action", image: "ZH" },
  { id: 6, title: "Still Water", year: "2024", rating: 4.5, tag: null, genre: "Mystery", image: "SW" },
]

const myList = [
  { id: 1, title: "The Quiet Year", genre: "Drama", image: "QY" },
  { id: 2, title: "Blackout", genre: "Thriller", image: "BO" },
  { id: 3, title: "Vertex", genre: "Sci-Fi", image: "VX" },
  { id: 4, title: "Paper Walls", genre: "Romance", image: "PW" },
]

const episodes = [
  { num: 1, title: "First Light", duration: "52 min", description: "Maya receives a commission that could define her career — a museum built entirely around the movement of the sun." },
  { num: 2, title: "Shadow Study", duration: "48 min", description: "An unexpected structural failure forces Maya to confront the limits of her approach." },
  { num: 3, title: "Refraction", duration: "55 min", description: "Maya's collaboration with a glass artist opens new possibilities — and new tensions with her team." },
  { num: 4, title: "The Golden Hour", duration: "50 min", description: "As the museum nears completion, Maya makes a decision that puts everything at risk." },
]

const categories = [
  { id: "for-you", label: "For You" },
  { id: "trending", label: "Trending" },
  { id: "new", label: "New Releases" },
  { id: "films", label: "Films" },
  { id: "series", label: "Series" },
  { id: "documentaries", label: "Documentaries" },
]

/* ------------------------------------------------------------------ */
/*  Subcomponents                                                       */
/* ------------------------------------------------------------------ */

function ContentCard({
  title,
  image,
  subtitle,
  badge,
  children,
}: {
  title: string
  image: string
  subtitle?: string
  badge?: string | null
  children?: React.ReactNode
}) {
  return (
    <div className="group shrink-0">
      <div className="relative aspect-video rounded-lg bg-muted/50 mb-2 flex items-center justify-center overflow-hidden cursor-pointer">
        <span className="text-2xl font-medium text-muted-foreground/20 tracking-tight">{image}</span>
        {badge && (
          <Badge
            variant={badge === "Trending" ? "default" : "secondary"}
            className="absolute top-2 left-2 text-[9px]"
          >
            {badge}
          </Badge>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
          <div className="size-10 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity scale-90 group-hover:scale-100">
            <Play className="size-4 text-black fill-black ml-0.5" />
          </div>
        </div>
        {children}
      </div>
      <p className="text-[13px] font-medium text-foreground truncate">{title}</p>
      {subtitle && (
        <p className="text-[11px] text-muted-foreground">{subtitle}</p>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Sections                                                            */
/* ------------------------------------------------------------------ */

function StreamingNav() {
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <Film className="size-4 text-foreground" />
          <p className="text-sm font-semibold tracking-tight">
            <span className="text-foreground">stream</span>
            <span className="text-muted-foreground">hub</span>
          </p>
        </div>
        <nav className="hidden md:flex items-center gap-1">
          {categories.map((cat, i) => (
            <span
              key={cat.id}
              className={cn(
                "px-3 py-1.5 text-[13px] cursor-pointer transition-colors",
                i === 0 ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {cat.label}
            </span>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon-sm">
          <Search className="size-4" />
        </Button>
        <Button variant="ghost" size="icon-sm" className="relative">
          <Bell className="size-4" />
          <span className="absolute top-1 right-1 size-1.5 rounded-full bg-destructive" />
        </Button>
        <Avatar size="sm" className="size-7 cursor-pointer">
          <AvatarFallback className="text-[10px]">KS</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}

function HeroBanner() {
  return (
    <section className="relative rounded-xl bg-muted/30 overflow-hidden mb-10">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />

      <div className="relative px-8 py-16 md:py-24 max-w-xl">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="secondary" className="text-[10px]">{featured.match}</Badge>
          <span className="text-[11px] text-muted-foreground">{featured.year}</span>
          <span className="text-[11px] text-muted-foreground">·</span>
          <span className="text-[11px] text-muted-foreground">{featured.rating}</span>
          <span className="text-[11px] text-muted-foreground">·</span>
          <span className="text-[11px] text-muted-foreground">{featured.seasons}</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-3">
          {featured.title}
        </h1>

        <p className="text-[15px] text-muted-foreground leading-relaxed mb-6 line-clamp-3">
          {featured.description}
        </p>

        <div className="flex items-center gap-3 mb-4">
          <Button>
            <Play className="size-4 mr-2 fill-current" />
            Resume S2 E4
          </Button>
          <Button variant="outline">
            <Plus className="size-4 mr-2" />
            My List
          </Button>
          <Button variant="ghost" size="icon">
            <ThumbsUp className="size-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Info className="size-4" />
          </Button>
        </div>

        <div className="flex items-center gap-2">
          {featured.genres.map((genre) => (
            <span key={genre} className="text-[11px] text-muted-foreground/60">{genre}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContinueWatchingRow() {
  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Clock className="size-4 text-muted-foreground" />
          <h2 className="text-[15px] font-medium">Continue Watching</h2>
        </div>
        <button className="text-[13px] text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors">
          See all <ChevronRight className="size-3" />
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {continueWatching.map((item) => (
          <ContentCard key={item.id} title={item.title} image={item.image} subtitle={item.episode}>
            {/* Progress bar overlay */}
            <div className="absolute bottom-0 inset-x-0">
              <div className="h-1 bg-muted-foreground/20">
                <div
                  className="h-full bg-primary"
                  style={{ width: `${item.progress}%` }}
                />
              </div>
            </div>
          </ContentCard>
        ))}
      </div>
    </section>
  )
}

function TrendingRow() {
  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="size-4 text-muted-foreground" />
          <h2 className="text-[15px] font-medium">Trending Now</h2>
        </div>
        <button className="text-[13px] text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors">
          See all <ChevronRight className="size-3" />
        </button>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
        {trending.map((item) => (
          <div key={item.id} className="group shrink-0">
            <div className="relative aspect-[2/3] rounded-lg bg-muted/50 mb-2 flex items-center justify-center overflow-hidden cursor-pointer">
              <span className="text-2xl font-medium text-muted-foreground/20 tracking-tight">{item.image}</span>
              {item.tag && (
                <Badge
                  variant={item.tag === "Trending" ? "default" : "secondary"}
                  className="absolute top-2 left-2 text-[9px]"
                >
                  {item.tag}
                </Badge>
              )}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <div className="size-10 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity scale-90 group-hover:scale-100">
                  <Play className="size-4 text-black fill-black ml-0.5" />
                </div>
              </div>
            </div>
            <p className="text-[13px] font-medium truncate">{item.title}</p>
            <div className="flex items-center gap-1.5">
              <Star className="size-2.5 fill-foreground text-foreground" />
              <span className="text-[11px] text-muted-foreground">{item.rating}</span>
              <span className="text-[11px] text-muted-foreground/40">·</span>
              <span className="text-[11px] text-muted-foreground">{item.genre}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function VideoPlayer() {
  const [playing, setPlaying] = useState(false)

  return (
    <section className="mb-10">
      <Separator className="mb-10" />
      <p className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground/60 mb-6">
        Player
      </p>

      <div className="rounded-xl overflow-hidden bg-black">
        {/* Video area */}
        <div
          className="relative aspect-video flex items-center justify-center cursor-pointer"
          onClick={() => setPlaying(!playing)}
        >
          <span className="text-5xl font-medium text-white/10 tracking-tight">AL</span>

          {/* Center play button */}
          {!playing && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="size-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors">
                <Play className="size-6 text-white fill-white ml-1" />
              </div>
            </div>
          )}

          {/* Bottom controls */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-4 pt-12">
            {/* Progress */}
            <div className="mb-3">
              <Progress value={65} className="h-1 bg-white/20 [&>div]:bg-white" />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button onClick={(e) => { e.stopPropagation(); setPlaying(!playing) }}>
                  {playing ? (
                    <Pause className="size-5 text-white" />
                  ) : (
                    <Play className="size-5 text-white fill-white" />
                  )}
                </button>
                <button>
                  <SkipForward className="size-5 text-white" />
                </button>
                <button>
                  <Volume2 className="size-5 text-white" />
                </button>
                <span className="text-[13px] text-white/60 font-mono">31:22 / 48:05</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[11px] text-white/60">S2 E4 — The Golden Hour</span>
                <button>
                  <Maximize className="size-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function EpisodeList() {
  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[15px] font-medium">Season 2</h2>
        <Tabs defaultValue="s2">
          <TabsList>
            <TabsTrigger value="s1" className="text-xs">Season 1</TabsTrigger>
            <TabsTrigger value="s2" className="text-xs">Season 2</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="space-y-2">
        {episodes.map((ep) => (
          <div
            key={ep.num}
            className={cn(
              "flex items-start gap-4 p-4 rounded-lg transition-colors cursor-pointer",
              ep.num === 4 ? "bg-accent/50" : "hover:bg-accent/30"
            )}
          >
            <div className="relative size-24 shrink-0 rounded-md bg-muted/50 flex items-center justify-center">
              <span className="text-lg text-muted-foreground/20 font-medium">E{ep.num}</span>
              <div className="absolute inset-0 flex items-center justify-center">
                <Play className="size-5 text-muted-foreground/50" />
              </div>
            </div>
            <div className="flex-1 min-w-0 py-0.5">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[13px] font-mono text-muted-foreground/50">{ep.num}.</span>
                <span className="text-[15px] font-medium">{ep.title}</span>
                {ep.num === 4 && (
                  <Badge variant="secondary" className="text-[9px]">Now Playing</Badge>
                )}
              </div>
              <p className="text-[13px] text-muted-foreground line-clamp-2">{ep.description}</p>
            </div>
            <span className="text-[13px] text-muted-foreground shrink-0 pt-0.5">{ep.duration}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function MyListSection() {
  return (
    <section>
      <Separator className="mb-10" />
      <p className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground/60 mb-6">
        My List
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {myList.map((item) => (
          <ContentCard key={item.id} title={item.title} image={item.image} subtitle={item.genre} />
        ))}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Export                                                              */
/* ------------------------------------------------------------------ */

export function StreamingShowcase() {
  return (
    <div>
      <StreamingNav />
      <Separator className="mb-6" />
      <HeroBanner />
      <ContinueWatchingRow />
      <TrendingRow />
      <VideoPlayer />
      <EpisodeList />
      <MyListSection />
    </div>
  )
}
