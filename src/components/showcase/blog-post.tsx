"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

/* ═══════════════════════════════════════════
   VIDEO PLAYER — Custom controls, Linear-style
   ═══════════════════════════════════════════ */

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function VideoPlayer({
  src,
  poster,
  aspectRatio = "16/9",
}: {
  src: string;
  poster?: string;
  aspectRatio?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [showSpeed, setShowSpeed] = useState(false);
  const speeds = [0.5, 0.75, 1, 1.25, 1.5, 2];

  const togglePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  }, []);

  const handleSeek = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const bar = progressRef.current;
      const v = videoRef.current;
      if (!bar || !v) return;
      const rect = bar.getBoundingClientRect();
      const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      v.currentTime = pct * duration;
    },
    [duration]
  );

  const changeSpeed = useCallback((s: number) => {
    const v = videoRef.current;
    if (v) v.playbackRate = s;
    setSpeed(s);
    setShowSpeed(false);
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onTime = () => setCurrentTime(v.currentTime);
    const onMeta = () => setDuration(v.duration);
    const onEnd = () => setPlaying(false);
    v.addEventListener("timeupdate", onTime);
    v.addEventListener("loadedmetadata", onMeta);
    v.addEventListener("ended", onEnd);
    return () => {
      v.removeEventListener("timeupdate", onTime);
      v.removeEventListener("loadedmetadata", onMeta);
      v.removeEventListener("ended", onEnd);
    };
  }, []);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="rounded-xl border border-border/50 bg-card/30 overflow-hidden">
      {/* Video element */}
      <div
        className="relative bg-black cursor-pointer"
        style={{ aspectRatio }}
        onClick={togglePlay}
      >
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          className="w-full h-full object-cover"
          playsInline
          preload="metadata"
        />
        {/* Play overlay */}
        {!playing && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white" className="ml-1">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="px-4 py-3 flex items-center gap-3">
        {/* Play/pause */}
        <button
          onClick={togglePlay}
          className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
        >
          {playing ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          )}
        </button>

        {/* Time */}
        <span className="text-[11px] font-mono text-muted-foreground/60 shrink-0 w-[72px]">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>

        {/* Progress bar */}
        <div
          ref={progressRef}
          className="flex-1 h-1 bg-foreground/10 rounded-full cursor-pointer group relative"
          onClick={handleSeek}
        >
          <div
            className="h-full bg-foreground/40 rounded-full transition-[width] duration-100"
            style={{ width: `${progress}%` }}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-foreground opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ left: `calc(${progress}% - 5px)` }}
          />
        </div>

        {/* Speed */}
        <div className="relative">
          <button
            onClick={() => setShowSpeed(!showSpeed)}
            className="text-[11px] font-mono text-muted-foreground/60 hover:text-muted-foreground transition-colors px-1"
          >
            {speed}x
          </button>
          {showSpeed && (
            <div className="absolute bottom-full right-0 mb-2 bg-card border border-border/50 rounded-lg p-1 shadow-lg z-10">
              {speeds.map((s) => (
                <button
                  key={s}
                  onClick={() => changeSpeed(s)}
                  className={cn(
                    "block w-full text-left text-[11px] font-mono px-3 py-1 rounded transition-colors",
                    s === speed
                      ? "text-foreground bg-accent"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  )}
                >
                  {s}x
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   AUDIO PLAYER — Podcast/episode style
   ═══════════════════════════════════════════ */

function AudioPlayer({
  src,
  title,
  subtitle,
  artwork,
}: {
  src: string;
  title: string;
  subtitle: string;
  artwork?: string;
}) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [speed, setSpeed] = useState(1);

  const togglePlay = useCallback(() => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      a.play();
      setPlaying(true);
    } else {
      a.pause();
      setPlaying(false);
    }
  }, []);

  const handleSeek = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const bar = progressRef.current;
      const a = audioRef.current;
      if (!bar || !a) return;
      const rect = bar.getBoundingClientRect();
      const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      a.currentTime = pct * duration;
    },
    [duration]
  );

  const skip = useCallback((seconds: number) => {
    const a = audioRef.current;
    if (a) a.currentTime = Math.max(0, Math.min(a.duration, a.currentTime + seconds));
  }, []);

  const cycleSpeed = useCallback(() => {
    const speeds = [1, 1.25, 1.5, 2];
    const next = speeds[(speeds.indexOf(speed) + 1) % speeds.length];
    if (audioRef.current) audioRef.current.playbackRate = next;
    setSpeed(next);
  }, [speed]);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    const onTime = () => setCurrentTime(a.currentTime);
    const onMeta = () => setDuration(a.duration);
    const onEnd = () => setPlaying(false);
    a.addEventListener("timeupdate", onTime);
    a.addEventListener("loadedmetadata", onMeta);
    a.addEventListener("ended", onEnd);
    return () => {
      a.removeEventListener("timeupdate", onTime);
      a.removeEventListener("loadedmetadata", onMeta);
      a.removeEventListener("ended", onEnd);
    };
  }, []);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="rounded-xl border border-border/50 bg-card/30 p-5">
      <audio ref={audioRef} src={src} preload="metadata" />

      <div className="flex gap-4">
        {/* Artwork */}
        <div className="shrink-0 w-16 h-16 rounded-lg bg-foreground/5 border border-border/50 flex items-center justify-center overflow-hidden">
          {artwork ? (
            <img src={artwork} alt="" className="w-full h-full object-cover" />
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground/40">
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </svg>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium truncate">{title}</p>
          <p className="text-[11px] text-muted-foreground/60 truncate">{subtitle}</p>

          {/* Progress bar */}
          <div
            ref={progressRef}
            className="mt-3 h-1 bg-foreground/10 rounded-full cursor-pointer group relative"
            onClick={handleSeek}
          >
            <div
              className="h-full bg-foreground/40 rounded-full transition-[width] duration-100"
              style={{ width: `${progress}%` }}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-foreground opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ left: `calc(${progress}% - 5px)` }}
            />
          </div>

          {/* Controls row */}
          <div className="flex items-center justify-between mt-2">
            <span className="text-[11px] font-mono text-muted-foreground/60">
              {formatTime(currentTime)} / {formatTime(duration || 0)}
            </span>

            <div className="flex items-center gap-1">
              {/* Rewind 15s */}
              <button
                onClick={() => skip(-15)}
                className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="1 4 1 10 7 10" />
                  <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
                  <text x="12" y="16" textAnchor="middle" fill="currentColor" stroke="none" fontSize="7" fontFamily="monospace">15</text>
                </svg>
              </button>

              {/* Play/pause */}
              <button
                onClick={togglePlay}
                className="p-1.5 text-foreground hover:text-foreground/80 transition-colors"
              >
                {playing ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                )}
              </button>

              {/* Forward 30s */}
              <button
                onClick={() => skip(30)}
                className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 4 23 10 17 10" />
                  <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
                  <text x="12" y="16" textAnchor="middle" fill="currentColor" stroke="none" fontSize="7" fontFamily="monospace">30</text>
                </svg>
              </button>

              {/* Speed */}
              <button
                onClick={cycleSpeed}
                className="text-[11px] font-mono text-muted-foreground/60 hover:text-muted-foreground transition-colors px-1.5 py-1 rounded hover:bg-accent/50"
              >
                {speed}x
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   BLOG POST SHOWCASE — Longform content
   ═══════════════════════════════════════════ */

export function BlogPostShowcase() {
  return (
    <div className="-mx-6">
      {/* ── HEADER ── */}
      <header className="max-w-2xl mx-auto px-6 pt-16 pb-12">
        <div className="flex items-center gap-3 mb-6">
          <Badge variant="secondary" className="text-[10px] font-mono uppercase tracking-wider">
            Engineering
          </Badge>
          <span className="text-[11px] font-mono text-muted-foreground/60">
            March 26, 2026
          </span>
          <span className="text-[11px] text-muted-foreground/40">·</span>
          <span className="text-[11px] text-muted-foreground/60">
            12 min read
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-snug mb-6">
          Building a design system that doesn&apos;t fight you
        </h1>

        <p className="text-[15px] text-muted-foreground/70 leading-relaxed mb-8">
          How we rebuilt our component library from the ground up — and what we learned
          about making a system that teams actually want to use.
        </p>

        {/* Author */}
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="text-xs">MR</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">Morgan Rivera</p>
            <p className="text-[11px] text-muted-foreground/60">Staff Engineer, Design Systems</p>
          </div>
        </div>
      </header>

      {/* ── COVER IMAGE AREA ── */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <div className="rounded-xl border border-border/50 bg-card/30 aspect-[2/1] flex items-center justify-center overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-foreground/[0.02] via-foreground/[0.04] to-foreground/[0.02] flex items-center justify-center">
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center gap-3">
                <div className="h-8 w-8 rounded bg-foreground/5 border border-border/50" />
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground/30">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
                <div className="h-8 w-8 rounded bg-foreground/5 border border-border/50" />
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground/30">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
                <div className="h-8 w-8 rounded bg-foreground/5 border border-border/50" />
              </div>
              <p className="text-[11px] font-mono text-muted-foreground/40">tokens → components → patterns</p>
            </div>
          </div>
        </div>
      </section>

      <Separator className="max-w-2xl mx-auto opacity-20" />

      {/* ── BODY CONTENT ── */}
      <article className="max-w-2xl mx-auto px-6 py-12">
        <div className="space-y-6">
          <p className="text-[15px] text-muted-foreground leading-relaxed">
            Most design systems fail not because of bad components, but because of bad
            abstractions. Teams start with the best intentions — a shared library, consistent
            patterns, a single source of truth. Then reality sets in.
          </p>

          <p className="text-[15px] text-muted-foreground leading-relaxed">
            The button has 47 props. The card component has three wrappers. The color system
            references <code className="text-[13px] bg-muted px-1.5 py-0.5 rounded font-mono">gray-400</code> in
            some places and <code className="text-[13px] bg-muted px-1.5 py-0.5 rounded font-mono">neutral-500</code> in
            others, and nobody remembers which is canonical. The system that was supposed to
            speed things up is now the thing slowing everyone down.
          </p>

          <p className="text-[15px] text-muted-foreground leading-relaxed">
            We decided to start over. Not because the old system was irredeemable — but because
            we&apos;d learned enough to know what <span className="text-foreground">actually matters</span>.
          </p>
        </div>

        {/* ── SECTION HEADING ── */}
        <h2 className="text-lg font-medium tracking-tight mt-14 mb-6">
          The three rules
        </h2>

        <div className="space-y-6">
          <p className="text-[15px] text-muted-foreground leading-relaxed">
            We started the rebuild with three non-negotiable constraints:
          </p>

          <ol className="space-y-4 text-[15px] text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-[13px] font-mono text-muted-foreground/40 w-5 shrink-0 mt-0.5 text-right">1.</span>
              <span>
                <span className="text-foreground">Semantic everything.</span>{" "}
                No raw colors, no magic numbers, no pixel values in components.
                Every value references a token, every token has a name that describes
                its <em>purpose</em>, not its appearance.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[13px] font-mono text-muted-foreground/40 w-5 shrink-0 mt-0.5 text-right">2.</span>
              <span>
                <span className="text-foreground">Composition over configuration.</span>{" "}
                Instead of one component with 30 props, we build small pieces that
                snap together. A button is a button. An icon goes inside it if you want one.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[13px] font-mono text-muted-foreground/40 w-5 shrink-0 mt-0.5 text-right">3.</span>
              <span>
                <span className="text-foreground">Dark mode is not a feature.</span>{" "}
                It&apos;s a context. The same tokens in a different environment. If you
                build with semantic tokens, dark mode is free.
              </span>
            </li>
          </ol>
        </div>

        {/* ── VIDEO SECTION ── */}
        <h2 className="text-lg font-medium tracking-tight mt-14 mb-4">
          Watch the walkthrough
        </h2>

        <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">
          Here&apos;s a 4-minute walkthrough of the new token architecture and how it propagates
          through the component tree.
        </p>
      </article>

      {/* Video — wider than text column */}
      <div className="max-w-3xl mx-auto px-6 mb-12">
        <VideoPlayer
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
          aspectRatio="16/9"
        />
        <p className="text-[11px] text-muted-foreground/50 mt-3 text-center font-mono">
          Token architecture walkthrough — 4:32
        </p>
      </div>

      {/* ── CONTINUE BODY ── */}
      <article className="max-w-2xl mx-auto px-6">
        <div className="space-y-6">
          <p className="text-[15px] text-muted-foreground leading-relaxed">
            The key insight was that most of our &ldquo;design inconsistencies&rdquo; weren&apos;t
            caused by engineers going rogue. They were caused by ambiguity. When a developer
            needs a border color and sees six grays in the palette, they pick one. When another
            developer needs a border color next week, they pick a different one. Neither is wrong.
            The system is.
          </p>

          <p className="text-[15px] text-muted-foreground leading-relaxed">
            Semantic tokens eliminate that ambiguity. There&apos;s one border color:{" "}
            <code className="text-[13px] bg-muted px-1.5 py-0.5 rounded font-mono">--border</code>.
            There&apos;s one muted text color:{" "}
            <code className="text-[13px] bg-muted px-1.5 py-0.5 rounded font-mono">--muted-foreground</code>.
            The decision is already made. You just use it.
          </p>
        </div>

        {/* ── BLOCKQUOTE ── */}
        <blockquote className="border-l-2 border-foreground/15 pl-6 py-1 my-10">
          <p className="text-[15px] text-muted-foreground leading-relaxed italic">
            &ldquo;The best systems don&apos;t restrict creativity — they remove the decisions
            that aren&apos;t creative. Nobody needs to be creative about border colors.&rdquo;
          </p>
        </blockquote>

        {/* ── CODE BLOCK ── */}
        <h2 className="text-lg font-medium tracking-tight mt-14 mb-4">
          What the code looks like
        </h2>

        <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">
          Here&apos;s the difference between the old approach and the new one. The component
          API surface shrinks dramatically when you lean on tokens instead of props.
        </p>

        <div className="rounded-xl border border-border/50 bg-background overflow-hidden mb-10">
          <div className="flex items-center px-4 py-2.5 border-b border-border/50">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-foreground/10" />
              <div className="w-2.5 h-2.5 rounded-full bg-foreground/10" />
              <div className="w-2.5 h-2.5 rounded-full bg-foreground/10" />
            </div>
            <span className="text-[11px] font-mono text-muted-foreground/50 ml-3">example.tsx</span>
          </div>
          <pre className="p-4 overflow-x-auto text-[13px] font-mono leading-relaxed text-muted-foreground">
            <code>{`// Before: 14 color props, none semantic
<Card
  bg="#1a1a1a"
  borderColor="#2a2a2a"
  textColor="#e5e5e5"
  subtextColor="#888"
  hoverBg="#222"
/>

// After: zero color props, all semantic
<Card>
  <CardHeader>
    <CardTitle>Settings</CardTitle>
    <CardDescription>Manage your preferences</CardDescription>
  </CardHeader>
</Card>`}</code>
          </pre>
        </div>

        <div className="space-y-6">
          <p className="text-[15px] text-muted-foreground leading-relaxed">
            The new card uses{" "}
            <code className="text-[13px] bg-muted px-1.5 py-0.5 rounded font-mono">bg-card</code>,{" "}
            <code className="text-[13px] bg-muted px-1.5 py-0.5 rounded font-mono">text-card-foreground</code>,
            and <code className="text-[13px] bg-muted px-1.5 py-0.5 rounded font-mono">ring-foreground/10</code>{" "}
            internally. In dark mode, those values resolve differently. The card itself
            doesn&apos;t know or care.
          </p>
        </div>

        {/* ── AUDIO SECTION ── */}
        <h2 className="text-lg font-medium tracking-tight mt-14 mb-4">
          Listen to the discussion
        </h2>

        <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">
          We recorded a conversation with the team about the tradeoffs we made during the
          rebuild — what we kept, what we threw away, and what we wish we&apos;d done sooner.
        </p>
      </article>

      {/* Audio player — matches text column */}
      <div className="max-w-2xl mx-auto px-6 mb-6">
        <AudioPlayer
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
          title="Ep. 14: Rebuilding the design system"
          subtitle="Design Systems Podcast · 38 min"
        />
      </div>

      {/* Second audio player — different style */}
      <div className="max-w-2xl mx-auto px-6 mb-12">
        <AudioPlayer
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
          title="Ep. 15: Semantic tokens in practice"
          subtitle="Design Systems Podcast · 24 min"
        />
      </div>

      {/* ── FINAL SECTION ── */}
      <article className="max-w-2xl mx-auto px-6">
        <h2 className="text-lg font-medium tracking-tight mb-4">
          What we&apos;d do differently
        </h2>

        <div className="space-y-6 mb-12">
          <p className="text-[15px] text-muted-foreground leading-relaxed">
            If we started again today, we&apos;d skip the light theme entirely for the first
            version. Not because light mode doesn&apos;t matter — it does. But because building
            dark-first forces you into semantic tokens from day one. You can&apos;t cheat with{" "}
            <code className="text-[13px] bg-muted px-1.5 py-0.5 rounded font-mono">#333</code>{" "}
            when you know it needs to work on both backgrounds.
          </p>

          <p className="text-[15px] text-muted-foreground leading-relaxed">
            We&apos;d also invest in the showcase earlier. Having a living gallery — where
            every component is interactive, every variant is visible, and the gallery itself
            uses the system — made adoption effortless. People stopped asking &ldquo;how do I
            use this?&rdquo; because the answer was always right there.
          </p>

          <p className="text-[15px] text-muted-foreground leading-relaxed">
            The system isn&apos;t done. It probably never will be. But for the first time, it
            feels like something that accelerates us rather than constrains us. That&apos;s
            the goal.
          </p>
        </div>

        <Separator className="opacity-20 mb-10" />

        {/* ── SHARE / TAGS ── */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex gap-2">
            <Badge variant="secondary" className="text-[10px] font-mono uppercase tracking-wider">
              Design Systems
            </Badge>
            <Badge variant="secondary" className="text-[10px] font-mono uppercase tracking-wider">
              Engineering
            </Badge>
            <Badge variant="secondary" className="text-[10px] font-mono uppercase tracking-wider">
              Tokens
            </Badge>
          </div>
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-1.5">
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
              <polyline points="16 6 12 2 8 6" />
              <line x1="12" y1="2" x2="12" y2="15" />
            </svg>
            Share
          </Button>
        </div>

        <Separator className="opacity-20 mb-10" />

        {/* ── AUTHOR BIO ── */}
        <div className="flex gap-4 mb-16">
          <Avatar className="h-10 w-10">
            <AvatarFallback className="text-xs">MR</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium mb-1">Morgan Rivera</p>
            <p className="text-[13px] text-muted-foreground leading-relaxed">
              Staff Engineer on the Design Systems team. Previously at Vercel and Stripe.
              Writes about component architecture, design tokens, and the space where
              design and engineering meet.
            </p>
          </div>
        </div>

        {/* ── RELATED POSTS ── */}
        <div>
          <p className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground/60 mb-4">
            Related
          </p>
          <div className="space-y-3">
            {[
              { title: "Migrating 200 color references to semantic tokens", date: "Mar 20, 2026" },
              { title: "Why we chose oklch over hsl", date: "Mar 14, 2026" },
              { title: "The case for dark-first design", date: "Feb 28, 2026" },
            ].map((post) => (
              <a
                key={post.title}
                href="#"
                className="group flex items-center justify-between py-2 transition-colors"
              >
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {post.title}
                </span>
                <span className="text-[11px] font-mono text-muted-foreground/40 shrink-0 ml-4">
                  {post.date}
                </span>
              </a>
            ))}
          </div>
        </div>
      </article>

      {/* Bottom spacing */}
      <div className="h-16" />
    </div>
  );
}
