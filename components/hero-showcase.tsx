"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import clsx from "clsx";

const LOGO_URL =
  "https://xrcwdxbwtnmxyahbgrlw.supabase.co/storage/v1/object/public/app-assets/logos/Room%20Genie%20-%20Small%20-%20Transparent.png";

/* ── Illustrative scenes — one per destination, cycled in the hero ── */

type Row = {
  name: string;
  tier: string;
  price?: number;
  highlight?: string;
};

type Scene = {
  destination: string;
  query: string;
  unit: string;
  rows: Row[];
  toast: { title: string; body: string };
};

const destinationTabs = [
  { label: "Disney World", icon: "🏰" },
  { label: "Universal", icon: "🎬" },
  { label: "Cruise Line", icon: "🚢" },
  { label: "Disneyland", icon: "🎢" },
  { label: "Aulani", icon: "🌺" },
];

const scenes: Scene[] = [
  {
    destination: "Disney World",
    query: "Oct 12–16 · 2 adults, 2 kids · 4-day tickets",
    unit: "resorts",
    rows: [
      { name: "Pop Century", tier: "Value", price: 3412 },
      { name: "Caribbean Beach", tier: "Moderate", price: 4478, highlight: "Better Rate · Save $1,194" },
      { name: "Riviera Resort", tier: "Deluxe Villa", price: 6934 },
      { name: "Polynesian Village", tier: "Deluxe", price: 7215 },
      { name: "Grand Floridian", tier: "Deluxe" },
    ],
    toast: {
      title: "Room Available!",
      body: "Grand Floridian — Standard View just opened for Oct 12–16.",
    },
  },
  {
    destination: "Universal",
    query: "Mar 8–12 · 2 adults, 2 kids · Park-to-Park",
    unit: "hotels",
    rows: [
      { name: "Cabana Bay Beach", tier: "Value", price: 2986 },
      { name: "Sapphire Falls", tier: "Preferred", price: 3842 },
      { name: "Royal Pacific", tier: "Premier", price: 5120, highlight: "Express Pass included" },
      { name: "Helios Grand", tier: "Epic Universe", price: 5640 },
      { name: "Hard Rock Hotel", tier: "Premier" },
    ],
    toast: {
      title: "Room Available!",
      body: "Hard Rock Hotel — Deluxe King just opened for Mar 8–12.",
    },
  },
  {
    destination: "Cruise Line",
    query: "Disney Wish · 3-Night Bahamian · Jan 16",
    unit: "categories",
    rows: [
      { name: "Inside Stateroom", tier: "Deck 6", price: 3156 },
      { name: "Oceanview", tier: "Deck 5", price: 3780 },
      { name: "Verandah", tier: "Deck 9", price: 4934, highlight: "Special Offer applied" },
      { name: "Concierge", tier: "Deck 12", price: 7210 },
      { name: "Concierge Suite", tier: "Deck 13" },
    ],
    toast: {
      title: "Price Drop!",
      body: "Concierge Suite opened up on the Jan 16 Wish sailing.",
    },
  },
];

/* Timeline for one scene (ms from scene start) */
const ROW_START = 500;
const ROW_GAP = 320;
const HIGHLIGHT_AT = ROW_START + ROW_GAP * 5 + 500;
const ALERT_AT = HIGHLIGHT_AT + 900;
const TOAST_AT = ALERT_AT + 900;
const SCENE_LENGTH = TOAST_AT + 3200;

const ease = [0.25, 0.46, 0.45, 0.94] as const;

function formatUSD(n: number) {
  return `$${Math.round(n).toLocaleString("en-US")}`;
}

function CountUp({ value, animate }: { value: number; animate: boolean }) {
  const [display, setDisplay] = useState(animate ? 0 : value);

  useEffect(() => {
    if (!animate) {
      setDisplay(value);
      return;
    }
    let frame: number;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / 700);
      setDisplay(value * (1 - Math.pow(1 - t, 3)));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value, animate]);

  return <>{formatUSD(display)}</>;
}

export function HeroShowcase() {
  const reduceMotion = useReducedMotion();
  const [sceneIndex, setSceneIndex] = useState(0);
  const [elapsed, setElapsed] = useState(reduceMotion ? SCENE_LENGTH : 0);

  // Drive the scene timeline with a handful of coarse timers
  useEffect(() => {
    if (reduceMotion) {
      setElapsed(SCENE_LENGTH);
      return;
    }
    setElapsed(0);
    const marks = [
      ...Array.from({ length: 5 }, (_, i) => ROW_START + ROW_GAP * i),
      HIGHLIGHT_AT,
      ALERT_AT,
      TOAST_AT,
    ];
    const timers = marks.map((t) => setTimeout(() => setElapsed(t), t));
    timers.push(
      setTimeout(() => setSceneIndex((i) => (i + 1) % scenes.length), SCENE_LENGTH)
    );
    return () => timers.forEach(clearTimeout);
  }, [sceneIndex, reduceMotion]);

  const scene = scenes[sceneIndex];
  const rowsShown = Math.max(0, Math.min(5, Math.floor((elapsed - ROW_START) / ROW_GAP) + 1));
  const scanning = elapsed < HIGHLIGHT_AT;
  const showHighlight = elapsed >= HIGHLIGHT_AT;
  const alertSet = elapsed >= ALERT_AT;
  const showToast = elapsed >= TOAST_AT;

  return (
    <div className="relative mx-auto w-full max-w-[560px] lg:w-[540px] xl:w-[600px] lg:max-w-none py-6 sm:py-10">
      {/* Ambient glow */}
      <div
        className="absolute -inset-10 blur-3xl opacity-60 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 55% 50%, rgba(186, 157, 93, 0.22) 0%, transparent 70%)",
        }}
      />

      {/* Back layer: PDF quote card peeking out behind the panel */}
      <motion.div
        aria-hidden
        className="hidden sm:block absolute -left-8 bottom-0 w-52 rounded-xl p-4 z-0"
        style={{
          background: "linear-gradient(160deg, #f7f1e3 0%, #e9dfc6 100%)",
          rotate: -9,
          boxShadow: "0 30px 60px rgba(0,0,0,0.45)",
        }}
        animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex items-center justify-between">
          <span className="font-display text-[11px] font-semibold text-primary">Trip Quote</span>
          <span className="rounded bg-primary px-1.5 py-0.5 text-[8px] font-bold tracking-wider text-gold">PDF</span>
        </div>
        <div className="mt-3 h-14 rounded-md bg-gradient-to-br from-[#0a2e3f] to-[#061E29]" />
        <div className="mt-3 space-y-1.5">
          <div className="h-1.5 w-4/5 rounded-full bg-primary/15" />
          <div className="h-1.5 w-3/5 rounded-full bg-primary/15" />
        </div>
        <div className="mt-3 flex items-baseline justify-between border-t border-primary/10 pt-2">
          <span className="text-[8px] uppercase tracking-wider text-primary/50">Total</span>
          <span className="font-display text-sm font-semibold text-primary">$4,478.42</span>
        </div>
      </motion.div>

      {/* Main panel */}
      <div style={{ perspective: 1600 }} className="relative z-10">
        <motion.div
          className="rounded-2xl overflow-hidden lg:[transform:rotateY(-7deg)_rotateX(3deg)]"
          style={{
            background:
              "linear-gradient(160deg, rgba(20, 52, 66, 0.92) 0%, rgba(8, 32, 44, 0.96) 100%)",
            border: "1px solid rgba(186, 157, 93, 0.22)",
            boxShadow:
              "0 50px 100px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.03) inset, 0 0 60px rgba(186,157,93,0.08)",
            backdropFilter: "blur(20px)",
          }}
          animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Window chrome */}
          <div className="flex items-center gap-3 px-4 py-2.5 border-b border-white/[0.06] bg-white/[0.02]">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            </div>
            <div className="flex-1 rounded-md bg-white/[0.04] px-3 py-1 text-center text-[10px] text-white/30">
              app.roomgenie.travel/explore-rates
            </div>
          </div>

          {/* Destination tabs */}
          <div className="flex gap-1 px-3 sm:px-4 pt-3 overflow-hidden">
            {destinationTabs.map((tab) => {
              const active = tab.label === scene.destination;
              return (
                <div
                  key={tab.label}
                  className={clsx(
                    "relative flex items-center gap-1.5 rounded-lg px-2 sm:px-2.5 py-1.5 text-[10px] font-medium transition-colors duration-500",
                    active ? "text-gold-light" : "text-white/35"
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="hero-tab"
                      className="absolute inset-0 rounded-lg border border-gold/30 bg-gold/[0.12]"
                      transition={{ duration: 0.5, ease }}
                    />
                  )}
                  <span className="relative text-sm">{tab.icon}</span>
                  <span className={clsx("relative", active ? "inline" : "hidden sm:inline")}>
                    {tab.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Query + live status */}
          <div className="px-4 sm:px-5 pt-4">
            <div className="flex items-center justify-between gap-3">
              <AnimatePresence mode="wait">
                <motion.p
                  key={scene.query}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="truncate text-[11px] text-white/45"
                >
                  {scene.query}
                </motion.p>
              </AnimatePresence>
              <span className="flex shrink-0 items-center gap-1.5 text-[10px] font-medium">
                <span className="relative flex h-2 w-2">
                  {scanning && (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
                  )}
                  <span
                    className={clsx(
                      "relative inline-flex h-2 w-2 rounded-full",
                      scanning ? "bg-gold" : "bg-emerald-400"
                    )}
                  />
                </span>
                <span className={scanning ? "text-gold/80" : "text-emerald-300/80"}>
                  {scanning ? "Checking live rates" : `${scene.rows.length} ${scene.unit} compared`}
                </span>
              </span>
            </div>
            <div className="mt-2.5 h-[2px] rounded-full bg-white/[0.06] overflow-hidden">
              <motion.div
                key={sceneIndex}
                className="h-full rounded-full"
                style={{ background: "linear-gradient(90deg, #9a8249, #d4b96a)" }}
                initial={{ width: reduceMotion ? "100%" : "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: (HIGHLIGHT_AT - 200) / 1000, ease: "easeInOut" }}
              />
            </div>
          </div>

          {/* Results */}
          <div className="relative px-3 sm:px-4 pt-3 pb-4 space-y-1.5 min-h-[282px]">
            {/* Scan line */}
            {scanning && !reduceMotion && (
              <motion.div
                key={`scan-${sceneIndex}`}
                className="pointer-events-none absolute left-0 right-0 h-16 z-10"
                style={{
                  background:
                    "linear-gradient(180deg, transparent, rgba(212,185,106,0.10) 70%, rgba(212,185,106,0.45) 100%)",
                  borderBottom: "1px solid rgba(212,185,106,0.5)",
                }}
                initial={{ top: -64 }}
                animate={{ top: "100%" }}
                transition={{ duration: (HIGHLIGHT_AT - 300) / 1000, ease: "linear" }}
              />
            )}

            <AnimatePresence mode="popLayout">
              {scene.rows.slice(0, rowsShown).map((row) => {
                const isHighlight = showHighlight && !!row.highlight;
                const soldOut = row.price === undefined;
                return (
                  <motion.div
                    key={`${sceneIndex}-${row.name}`}
                    layout
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, transition: { duration: 0.25 } }}
                    transition={{ duration: 0.45, ease }}
                    className={clsx(
                      "relative flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all duration-500",
                      isHighlight
                        ? "border border-gold/50 bg-gold/[0.10] shadow-[0_0_30px_rgba(186,157,93,0.18)]"
                        : "border border-white/[0.05] bg-white/[0.03]"
                    )}
                  >
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[13px] font-semibold text-white/90">{row.name}</p>
                      <p className="text-[10px] text-white/35">{row.tier}</p>
                    </div>

                    <AnimatePresence>
                      {isHighlight && (
                        <motion.span
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, ease }}
                          className="hidden sm:inline-flex shrink-0 items-center gap-1 rounded-full bg-gold px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-primary"
                        >
                          ✦ {row.highlight}
                        </motion.span>
                      )}
                    </AnimatePresence>

                    {soldOut ? (
                      <span
                        className={clsx(
                          "shrink-0 rounded-md px-2 py-1 text-[10px] font-semibold transition-all duration-500",
                          alertSet
                            ? "bg-emerald-400/15 text-emerald-300 border border-emerald-400/30"
                            : "bg-white/[0.04] text-white/40 border border-white/10"
                        )}
                      >
                        {alertSet ? "🔔 Alert set" : "Sold out"}
                      </span>
                    ) : (
                      <span
                        className={clsx(
                          "shrink-0 text-right font-display text-base font-semibold tabular-nums",
                          isHighlight ? "text-gold-light" : "text-white/85"
                        )}
                      >
                        <CountUp value={row.price!} animate={!reduceMotion} />
                      </span>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Notification toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            key={`toast-${sceneIndex}`}
            initial={{ opacity: 0, y: -16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, transition: { duration: 0.3 } }}
            transition={{ duration: 0.5, ease }}
            className="absolute z-20 -top-2 right-2 sm:-right-6 lg:-right-10 w-[250px] sm:w-[270px] rounded-2xl p-3 flex gap-3"
            style={{
              background: "rgba(245, 240, 228, 0.97)",
              boxShadow: "0 24px 50px rgba(0,0,0,0.45), 0 0 0 1px rgba(186,157,93,0.3)",
            }}
          >
            <div className="h-9 w-9 shrink-0 rounded-lg bg-primary flex items-center justify-center overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={LOGO_URL} alt="" className="h-7 w-auto object-contain" />
            </div>
            <div className="min-w-0">
              <div className="flex items-baseline justify-between gap-2">
                <p className="text-[11px] font-bold text-primary">{scene.toast.title}</p>
                <p className="text-[9px] text-primary/40">now</p>
              </div>
              <p className="mt-0.5 text-[10.5px] leading-snug text-primary/70">{scene.toast.body}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* "Always watching" chip */}
      <motion.div
        className="hidden sm:flex absolute z-20 -bottom-1 right-6 items-center gap-2 rounded-full border border-gold/25 bg-primary/90 px-3.5 py-2 backdrop-blur"
        style={{ boxShadow: "0 12px 30px rgba(0,0,0,0.4)" }}
        animate={reduceMotion ? undefined : { y: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        <span className="text-[11px] font-medium text-text-primary">Watching 24/7 · every 30 min</span>
      </motion.div>
    </div>
  );
}
