"use client";

import clsx from "clsx";
import { Container } from "./ui/container";
import { SectionReveal } from "./ui/section-reveal";
import { SectionHeading } from "./ui/section-heading";
import { Divider } from "./ui/divider";
import { Badge } from "./ui/badge";

/* ── Line icons (24px, stroke = currentColor) ── */

const icons = {
  globe: (
    <path d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 0c2.5 0 4.5-4 4.5-9S14.5 3 12 3 7.5 7 7.5 12s2 9 4.5 9zM3.5 9h17M3.5 15h17" />
  ),
  tag: (
    <path d="M3 12V4a1 1 0 011-1h8l9 9-9 9-9-9zm5-4.5a1 1 0 100 2 1 1 0 000-2z" />
  ),
  document: (
    <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5zm0 0v5h5M9 13h6M9 17h4" />
  ),
  anchor: (
    <path d="M12 8a2 2 0 100-4 2 2 0 000 4zm0 0v13m0 0c-4 0-7-3-7-7m7 7c4 0 7-3 7-7M8 11h8" />
  ),
  chat: (
    <path d="M21 12a8 8 0 01-11.6 7.1L4 20l1-4.6A8 8 0 1121 12zM8.5 12h.01M12 12h.01M15.5 12h.01" />
  ),
  bell: (
    <path d="M6 8a6 6 0 1112 0c0 7 3 9 3 9H3s3-2 3-9m4.3 13a2 2 0 003.4 0M19 3l2 2M5 3L3 5" />
  ),
};

type Feature = {
  icon: keyof typeof icons;
  eyebrow: string;
  title: string;
  description: string;
  plan?: string;
  featured?: boolean;
};

const features: Feature[] = [
  {
    icon: "globe",
    eyebrow: "New Destination",
    title: "Universal Orlando is here",
    description:
      "All 11 on-site Universal hotels — room-only or full packages with park tickets, Express Pass, and SuperStar Shuttle priced in. Compare hotels side by side and set alerts on any room.",
    featured: true,
  },
  {
    icon: "tag",
    eyebrow: "Better Rate Finder",
    title: "We find the deal Disney doesn't show you",
    description:
      "Room Genie checks Disney's special offers on every WDW package search and flags any that beat the standard rate. In one live search, a 4-Park Magic offer came in $1,194 under the standard package.",
    plan: "Explorer",
  },
  {
    icon: "document",
    eyebrow: "PDF Quotes",
    title: "Beautiful quotes in one click",
    description:
      "Turn any comparison into a polished PDF with per-room pricing, deposits, due dates, and optional add-ons. Multi-room trips included.",
    plan: "Explorer",
  },
  {
    icon: "anchor",
    eyebrow: "Disney Cruise Line",
    title: "Alerts on sold-out sailings",
    description:
      "Every sailing now shows up, even sold-out ones. Set an availability alert and get a text when a stateroom opens up.",
    plan: "Explorer",
  },
  {
    icon: "chat",
    eyebrow: "Room Genie + Claude",
    title: "Plan your trip by chatting",
    description:
      "Connect Room Genie to Claude and just ask: “Price the Polynesian for four in July.” It builds the quote, compares rooms, and sets your alerts.",
    plan: "Explorer",
  },
  {
    icon: "bell",
    eyebrow: "Smarter Alerts",
    title: "Watch every room at once",
    description:
      "Pick several room types and get an alert for each, or alert every sold-out room from a comparison in one tap. Alerts pause on their own once your check-in date passes.",
  },
];

const universalTiers = [
  { tier: "Premier", hotels: "Hard Rock · Portofino Bay · Royal Pacific", perk: "Express included" },
  { tier: "Epic Universe", hotels: "Helios Grand", perk: "Express add-on" },
  { tier: "Preferred", hotels: "Sapphire Falls", perk: "Express add-on" },
  { tier: "Prime Value", hotels: "Stella Nova · Terra Luna · Endless Summer", perk: "Express add-on" },
  { tier: "Value", hotels: "Cabana Bay · Aventura", perk: "Express add-on" },
];

function UniversalTiers() {
  return (
    <div className="mt-8 rounded-lg border border-white/[0.07] bg-black/20 divide-y divide-white/[0.05]">
      {universalTiers.map((row) => (
        <div key={row.tier} className="flex items-center gap-4 px-4 py-3">
          <span className="w-24 shrink-0 text-[10px] font-semibold uppercase tracking-[0.15em] text-gold/80">
            {row.tier}
          </span>
          <span className="flex-1 min-w-0 truncate text-sm text-text-primary/80">{row.hotels}</span>
          <span
            className={clsx(
              "hidden sm:inline shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-medium",
              row.perk === "Express included"
                ? "bg-gold/15 text-gold-light"
                : "bg-white/5 text-text-tertiary"
            )}
          >
            {row.perk}
          </span>
        </div>
      ))}
    </div>
  );
}

function FeatureTile({ feature }: { feature: Feature }) {
  return (
    <div
      className={clsx(
        "group relative h-full rounded-xl p-6 sm:p-7 transition-all duration-300",
        feature.featured
          ? "gold-border-glow border border-gold/30 bg-gradient-to-br from-gold/[0.09] via-white/[0.03] to-transparent"
          : "border border-white/[0.06] bg-white/[0.02] hover:border-gold/25 hover:bg-gold/[0.03]"
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div
          className={clsx(
            "flex items-center justify-center rounded-lg border border-gold/25 bg-gold/10 text-gold",
            feature.featured ? "h-12 w-12" : "h-10 w-10"
          )}
        >
          <svg
            className={feature.featured ? "h-6 w-6" : "h-5 w-5"}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {icons[feature.icon]}
          </svg>
        </div>
        {feature.featured ? (
          <Badge variant="gold" className="text-[10px] tracking-widest">New</Badge>
        ) : (
          feature.plan && (
            <Badge variant="muted" className="text-[9px] tracking-widest px-2">
              {feature.plan}
            </Badge>
          )
        )}
      </div>

      <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.2em] text-gold/80">
        {feature.eyebrow}
      </p>
      <h3
        className={clsx(
          "mt-2 font-display font-semibold text-text-primary",
          feature.featured ? "text-2xl sm:text-3xl" : "text-lg"
        )}
        style={{ letterSpacing: "-0.02em", lineHeight: 1.2 }}
      >
        {feature.title}
      </h3>
      <p
        className={clsx(
          "mt-3 text-text-secondary leading-relaxed",
          feature.featured ? "text-base max-w-md" : "text-sm"
        )}
      >
        {feature.description}
      </p>

      {feature.featured && <UniversalTiers />}

      {feature.featured && (
        <div className="mt-6 flex flex-wrap gap-2">
          {["Park tickets", "Express Pass", "Cancel For Any Reason", "SuperStar Shuttle", "Price-drop alerts"].map(
            (chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-text-secondary"
              >
                {chip}
              </span>
            )
          )}
        </div>
      )}
    </div>
  );
}

export function WhatsNew() {
  return (
    <section id="whats-new" className="py-24 sm:py-32 relative">
      <Container className="max-w-6xl">
        <SectionReveal>
          <SectionHeading>
            Fresh From the <span className="text-gold-gradient italic">Genie&apos;s Lamp</span>
          </SectionHeading>
          <p className="mt-5 text-center text-text-secondary max-w-2xl mx-auto">
            We&apos;ve shipped a lot this year. Here&apos;s what&apos;s new since you last looked.
          </p>
        </SectionReveal>

        <Divider />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <SectionReveal
              key={feature.title}
              delay={i * 0.06}
              className={clsx(feature.featured && "md:col-span-2 lg:row-span-2")}
            >
              <FeatureTile feature={feature} />
            </SectionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
