"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/container";
import { SectionReveal } from "./ui/section-reveal";
import { SectionHeading } from "./ui/section-heading";
import { Divider } from "./ui/divider";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { SIGNUP_URL } from "@/lib/urls";
import { trackCta, trackAppNavigation } from "@/lib/analytics";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

/* ── Static mock data matching the real app ── */

const destinations = [
  { label: "Walt Disney World", icon: "🏰", active: false },
  { label: "Disneyland", icon: "🎢", active: false },
  { label: "Au'Lani", icon: "🌺", active: false },
  { label: "Cruise Line", icon: "🚢", active: true },
];

const sailings = [
  {
    ship: "Disney Fantasy",
    nights: 7,
    depart: "Dec 7",
    returnDate: "Dec 14",
    year: "2026",
    route: ["Port Canaveral", "Cozumel", "Grand Cayman", "Castaway Cay"],
    product: "7-Night Western Caribbean from Port Canaveral",
    pricing: [
      { type: "Inside", icon: "◆", price: "$8,274" },
      { type: "Oceanview", icon: "◈", price: "$9,618" },
      { type: "Verandah", icon: "▣", price: "$12,152" },
      { type: "Concierge", icon: "✦", price: "$19,460" },
    ],
    offer: true,
  },
  {
    ship: "Disney Wish",
    nights: 3,
    depart: "Jan 16",
    returnDate: "Jan 19",
    year: "2027",
    route: ["Port Canaveral", "Nassau", "Castaway Cay"],
    product: "3-Night Bahamian from Port Canaveral",
    pricing: [
      { type: "Inside", icon: "◆", price: "$3,156" },
      { type: "Oceanview", icon: "◈", price: "$3,780" },
      { type: "Verandah", icon: "▣", price: "$4,934" },
      { type: "Concierge", icon: "✦", price: "$7,210" },
    ],
    offer: false,
  },
];

const stateroomRooms = [
  {
    label: "Room 1",
    party: "2A, 3C (0, 6, 8)",
    price: "$6,152.75",
    guests: 5,
    tax: "$520.35",
    deposit: "$563.24",
    depositDate: "Mar 25, 2026",
    finalPmt: "Nov 3, 2026",
    gratuities: "$320.00",
  },
  {
    label: "Room 2",
    party: "2A, 2C (5, 7)",
    price: "$5,607.00",
    guests: 4,
    tax: "$416.28",
    deposit: "$519.07",
    depositDate: "Mar 25, 2026",
    finalPmt: "Nov 3, 2026",
    gratuities: "$256.00",
  },
  {
    label: "Room 3",
    party: "2A, 2C (3, 6)",
    price: "$5,607.00",
    guests: 4,
    tax: "$416.28",
    deposit: "$519.07",
    depositDate: "Mar 25, 2026",
    finalPmt: "Nov 3, 2026",
    gratuities: "$256.00",
  },
  {
    label: "Room 4",
    party: "2A, 2C (0, 3)",
    price: "$5,265.32",
    guests: 4,
    tax: "$416.28",
    deposit: "$484.90",
    depositDate: "Mar 25, 2026",
    finalPmt: "Nov 3, 2026",
    gratuities: "$256.00",
  },
];

/* ── Cruise Results Mockup ── */

function CruiseMockup() {
  return (
    <div className="space-y-3">
      <p className="text-[10px] font-medium uppercase tracking-wider text-white/25 px-1">
        12 sailings found
      </p>
      {sailings.map((s) => (
        <div
          key={s.ship + s.depart}
          className="rounded-xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="flex">
            {/* Accent stripe */}
            <div
              className="w-1 shrink-0"
              style={{
                background: "linear-gradient(180deg, #ba9d5d 0%, #9a8249 100%)",
              }}
            />
            <div className="flex-1 min-w-0 p-3 sm:p-4">
              {/* Top row */}
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div className="flex items-baseline gap-2 min-w-0">
                  <span className="text-white text-sm font-semibold truncate">
                    {s.ship}
                  </span>
                  <span className="shrink-0 rounded-full bg-white/5 px-1.5 py-0.5 text-[10px] font-medium text-white/40">
                    {s.nights}N
                  </span>
                  {s.offer && (
                    <span className="shrink-0 rounded-full bg-gold/15 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-gold">
                      Special Offer
                    </span>
                  )}
                </div>
                <div className="flex items-baseline gap-1.5 text-xs shrink-0">
                  <span className="font-medium text-white/60">
                    {s.depart} – {s.returnDate}
                  </span>
                  <span className="text-white/25">{s.year}</span>
                </div>
              </div>

              {/* Product name */}
              <p className="mt-1 text-[10px] text-white/30">{s.product}</p>

              {/* Ports */}
              <div className="mt-1 flex flex-wrap items-center gap-x-1 text-[10px] text-white/25">
                {s.route.map((port, i) => (
                  <span key={i} className="flex items-center gap-1">
                    {i > 0 && (
                      <svg className="h-2 w-2 text-gold/30" viewBox="0 0 10 10" fill="none">
                        <path d="M3 1L7 5L3 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                    {port}
                  </span>
                ))}
              </div>

              {/* Pricing grid */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {s.pricing.map((p) => (
                  <div
                    key={p.type}
                    className="flex items-baseline gap-1 rounded-lg px-2 py-1"
                    style={{ background: "rgba(255,255,255,0.04)" }}
                  >
                    <span className="text-[9px] text-white/20">{p.icon}</span>
                    <span className="text-[10px] text-white/40">{p.type}</span>
                    <span className="text-xs font-semibold text-white/90">{p.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Multi-Room Stateroom Mockup ── */

function MultiRoomMockup() {
  return (
    <div className="space-y-3">
      {/* Stateroom header */}
      <div>
        <div className="flex items-baseline gap-2 mb-1">
          <span
            className="inline-flex items-center justify-center rounded px-1.5 py-0.5 text-[10px] font-bold text-white/70"
            style={{ background: "rgba(255,255,255,0.08)" }}
          >
            04B
          </span>
          <span className="text-white text-xs sm:text-sm font-semibold">
            Deluxe Family Oceanview Stateroom with Verandah
          </span>
        </div>
        <p className="text-[9px] sm:text-[10px] text-white/30 leading-relaxed">
          Approx. 284 sq. ft., including Verandah &middot; Sleeps 4 to 5 &middot; Private Verandah &middot; Decks 8, 9 &middot; Midship, Aft
        </p>
      </div>

      {/* Room cards grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        {stateroomRooms.map((room) => (
          <div
            key={room.label}
            className="rounded-lg p-2.5 sm:p-3"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            {/* Room label + party */}
            <div className="flex items-baseline justify-between gap-1 mb-2">
              <span className="text-[11px] font-semibold text-white/80">
                {room.label}
              </span>
              <span className="text-[8px] text-white/30">{room.party}</span>
            </div>

            {/* Price */}
            <p className="text-base sm:text-lg font-bold text-white/90 leading-none mb-1">
              {room.price}
            </p>
            <p className="text-[9px] text-white/30">
              {room.guests} guests &middot; {room.tax} tax
            </p>

            {/* Deposit */}
            <p className="mt-1.5 text-[9px] font-medium text-gold/80">
              {room.deposit} deposit &middot; {room.depositDate}
            </p>
            <p className="text-[8px] text-white/20">
              Final pmt {room.finalPmt}
            </p>
            <p className="text-[8px] text-white/20 italic">
              + {room.gratuities} optional gratuities
            </p>

            {/* Set Alert link */}
            <p className="mt-2 text-[10px] text-gold/60 font-medium">
              Set Alert
            </p>
          </div>
        ))}
      </div>

      {/* Combined total */}
      <div
        className="rounded-lg p-3"
        style={{
          background: "linear-gradient(135deg, rgba(186,157,93,0.08) 0%, rgba(186,157,93,0.03) 100%)",
          border: "1px solid rgba(186,157,93,0.2)",
        }}
      >
        <p className="text-[10px] font-semibold text-gold mb-0.5">
          Combined Total
        </p>
        <p className="text-lg sm:text-xl font-bold text-white/90 leading-none">
          $22,632.07
        </p>
        <p className="mt-1 text-[9px] text-white/30">
          Combined deposit: $2,086.28
        </p>
      </div>
    </div>
  );
}

/* ── Browser Frame Wrapper ── */

function BrowserFrame({
  children,
  activeTab,
}: {
  children: React.ReactNode;
  activeTab: string;
}) {
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        border: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(0,0,0,0.3)",
      }}
    >
      {/* Title bar */}
      <div
        className="flex items-center gap-3 px-4 py-2.5"
        style={{
          background: "rgba(255,255,255,0.03)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
        </div>
        <div
          className="flex-1 rounded-md px-3 py-1 text-[10px] text-white/25 text-center"
          style={{ background: "rgba(255,255,255,0.04)" }}
        >
          app.roomgenie.travel/explore-rates
        </div>
      </div>

      {/* Destination switcher */}
      <div
        className="flex gap-1 px-4 py-2"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
      >
        {destinations.map((d) => (
          <div
            key={d.label}
            className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[10px] font-medium transition-colors"
            style={{
              background: d.active ? "rgba(186,157,93,0.12)" : "transparent",
              border: d.active
                ? "1px solid rgba(186,157,93,0.25)"
                : "1px solid transparent",
              color: d.active ? "#d4b96a" : "rgba(255,255,255,0.35)",
            }}
          >
            <span className="text-sm">{d.icon}</span>
            <span className="hidden sm:inline">{d.label}</span>
          </div>
        ))}
      </div>

      {/* Content area */}
      <div className="p-4 sm:p-5">{children}</div>
    </div>
  );
}

/* ── Main Section ── */

export function ExploreShowcase() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 30%, rgba(186, 157, 93, 0.06) 0%, transparent 70%)",
        }}
      />

      <Container className="relative z-10">
        <SectionReveal>
          <SectionHeading>See It in Action</SectionHeading>
          <p className="mt-5 text-center text-text-secondary max-w-2xl mx-auto">
            Things Disney&apos;s website can&apos;t do — price a cruise and compare rooms across resorts in seconds, not hours.
          </p>
        </SectionReveal>

        <Divider />

        {/* Two showcases side by side on desktop */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Cruise pricing showcase */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.div variants={fadeUp} custom={0.1}>
              <div className="mb-5">
                <Badge variant="gold" className="text-[10px] tracking-widest mb-3">
                  Disney Cruise Line
                </Badge>
                <h3
                  className="font-display text-xl sm:text-2xl font-semibold text-text-primary"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  Price a Cruise Instantly
                </h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                  Browse sailings, compare stateroom categories, and see real pricing across every ship — no calling Disney or waiting on hold.
                </p>
              </div>
              <BrowserFrame activeTab="Cruise Line">
                <CruiseMockup />
              </BrowserFrame>
            </motion.div>
          </motion.div>

          {/* Multi-room quoting showcase */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.div variants={fadeUp} custom={0.25}>
              <div className="mb-5">
                <Badge variant="gold" className="text-[10px] tracking-widest mb-3">
                  Multi-Room Quoting
                </Badge>
                <h3
                  className="font-display text-xl sm:text-2xl font-semibold text-text-primary"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  Quote Up to 4 Rooms at Once
                </h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                  Traveling with extended family? See per-room pricing, deposits, and a combined total for up to 4 staterooms — impossible on Disney&apos;s website.
                </p>
              </div>
              <BrowserFrame activeTab="Walt Disney World">
                <MultiRoomMockup />
              </BrowserFrame>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA */}
        <SectionReveal delay={0.3}>
          <div className="mt-14 text-center">
            <Button
              href={SIGNUP_URL}
              className="px-8 py-3.5"
              onClick={() => {
                trackCta("Try Explore Rates", "explore-showcase");
                trackAppNavigation(SIGNUP_URL, "Try Explore Rates");
              }}
            >
              Try Explore Rates
            </Button>
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
