"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const LOGO_URL =
  "https://xrcwdxbwtnmxyahbgrlw.supabase.co/storage/v1/object/public/app-assets/logos/Room%20Genie%20-%20Small%20-%20Transparent.png";

const messages = [
  {
    destination: "Walt Disney World",
    icon: "🏰",
    body: "Room Available! Polynesian Village — Standard Room, Theme Park View. Oct 12–16. Was $2,847 → Now $2,194. $653 less than your target!",
    time: "Now",
  },
  {
    destination: "Disney Cruise Line",
    icon: "🚢",
    body: "Price Drop! Disney Fantasy — Verandah Stateroom, Deck 9. Dec 7–14 sailing. Was $5,290 → Now $4,156. Save $1,134!",
    time: "2m ago",
  },
  {
    destination: "Disneyland",
    icon: "🎢",
    body: "Room Available! Grand Californian — Standard Room, Woods View. Nov 3–6. $1,462 — below your $1,600 target!",
    time: "5m ago",
  },
  {
    destination: "Disney Aulani",
    icon: "🌺",
    body: "Price Drop! Aulani — 1-Bedroom Villa, Ocean View. Jan 18–25. Was $6,810 → Now $5,320. That's $1,490 off!",
    time: "8m ago",
  },
];

export function PhoneMockup() {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setVisibleMessages([0]);
    }, 800);
    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (visibleMessages.length === 0) return;
    if (visibleMessages.length < messages.length) {
      const nextTimer = setTimeout(() => {
        setVisibleMessages((prev) => [...prev, prev.length]);
      }, 2200);
      return () => clearTimeout(nextTimer);
    }
  }, [visibleMessages]);

  // Auto-scroll to bottom when new messages appear
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [visibleMessages]);

  return (
    <div className="relative flex items-center justify-center">
      {/* Glow behind phone */}
      <div
        className="absolute inset-0 blur-3xl opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(186, 157, 93, 0.25) 0%, transparent 70%)",
        }}
      />

      {/* Phone frame — fixed realistic proportions */}
      <div className="relative w-[272px] sm:w-[290px] mx-auto">
        <div
          className="rounded-[2.5rem] p-[3px]"
          style={{
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.1) 100%)",
          }}
        >
          <div
            className="rounded-[2.35rem] bg-black overflow-hidden relative flex flex-col"
            style={{ height: 580 }}
          >
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[26px] bg-black rounded-b-2xl z-20" />

            {/* Status bar */}
            <div className="relative z-10 flex-shrink-0 px-6 pt-2.5 pb-1 flex items-center justify-between text-[10px] text-white/60 font-medium bg-gray-950">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <svg width="14" height="10" viewBox="0 0 14 10" fill="currentColor" className="opacity-60">
                  <rect x="0" y="6" width="2.5" height="4" rx="0.5" />
                  <rect x="3.5" y="4" width="2.5" height="6" rx="0.5" />
                  <rect x="7" y="2" width="2.5" height="8" rx="0.5" />
                  <rect x="10.5" y="0" width="2.5" height="10" rx="0.5" />
                </svg>
                <svg width="22" height="11" viewBox="0 0 22 11" fill="currentColor" className="opacity-60">
                  <rect x="0" y="0.5" width="18" height="10" rx="2" stroke="currentColor" fill="none" strokeWidth="1" />
                  <rect x="18.5" y="3" width="2" height="5" rx="1" />
                  <rect x="1.5" y="2" width="12" height="7" rx="1" fill="currentColor" />
                </svg>
              </div>
            </div>

            {/* Messages header — fixed */}
            <div className="flex-shrink-0 text-center py-3 bg-gray-950 border-b border-white/5">
              <p className="text-white/40 text-[9px] uppercase tracking-widest mb-0.5">
                Messages
              </p>
              <div className="flex items-center justify-center gap-2 mb-0.5">
                <img
                  src={LOGO_URL}
                  alt="Room Genie"
                  className="w-4 h-4 rounded-full"
                />
                <span className="text-white text-xs font-semibold">
                  Room Genie
                </span>
              </div>
              <p className="text-white/30 text-[9px]">SMS Alerts</p>
            </div>

            {/* Scrollable message area */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-3 py-3 bg-gradient-to-b from-gray-950 to-gray-900"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {/* Hide webkit scrollbar */}
              <style>{`
                .phone-scroll::-webkit-scrollbar { display: none; }
              `}</style>
              <div className="space-y-3 phone-scroll">
                {messages.map((msg, i) => (
                  <AnimatePresence key={i}>
                    {visibleMessages.includes(i) && (
                      <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                          duration: 0.5,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                      >
                        {/* Timestamp */}
                        <p className="text-white/20 text-[8px] text-center mb-1.5">
                          {msg.time === "Now" ? "Just now" : msg.time}
                        </p>
                        {/* SMS bubble */}
                        <div className="flex gap-1.5 items-end">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center">
                            <img
                              src={LOGO_URL}
                              alt=""
                              className="w-3.5 h-3.5 rounded-full"
                            />
                          </div>
                          <div
                            className="flex-1 rounded-2xl rounded-bl-sm px-2.5 py-2"
                            style={{
                              background:
                                "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 100%)",
                              border: "1px solid rgba(255,255,255,0.06)",
                            }}
                          >
                            <div className="flex items-center gap-1 mb-0.5">
                              <span className="text-sm leading-none">
                                {msg.icon}
                              </span>
                              <span className="text-gold text-[9px] font-semibold">
                                {msg.destination}
                              </span>
                            </div>
                            <p className="text-white/75 text-[9px] leading-relaxed">
                              {msg.body}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                ))}
              </div>
            </div>

            {/* Home indicator */}
            <div className="flex-shrink-0 pb-2 pt-1 bg-gray-900 flex justify-center">
              <div className="w-24 h-1 rounded-full bg-white/20" />
            </div>
          </div>
        </div>

        {/* Side buttons */}
        <div className="absolute top-[70px] -left-[2px] w-[3px] h-[24px] rounded-l bg-white/10" />
        <div className="absolute top-[105px] -left-[2px] w-[3px] h-[42px] rounded-l bg-white/10" />
        <div className="absolute top-[155px] -left-[2px] w-[3px] h-[42px] rounded-l bg-white/10" />
        <div className="absolute top-[105px] -right-[2px] w-[3px] h-[52px] rounded-r bg-white/10" />
      </div>
    </div>
  );
}
