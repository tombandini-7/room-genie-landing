"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/container";
import { SectionReveal } from "./ui/section-reveal";
import { SectionHeading } from "./ui/section-heading";
import { Divider } from "./ui/divider";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { APP_URL } from "@/lib/urls";
import { trackCta, trackAppNavigation } from "@/lib/analytics";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const CONNECT_URL = `${APP_URL}/settings/connected-apps`;

const QUOTE_PREVIEW_SHOT =
  "https://ysxkvjimngygmlmnnvwm.supabase.co/storage/v1/object/public/app-assets/hero-images/Quote%20Preview.png";

/* ── Chat transcript data ── */

type ChatMessage =
  | { role: "user"; text: string }
  | { role: "assistant"; text: string }
  | { role: "tool"; tool: string; status: "running" | "done"; detail?: string };

const transcript: ChatMessage[] = [
  {
    role: "user",
    text:
      "Quote Grand Floridian for July 4–8, 2 adults + 2 kids (5, 8). Package with park tickets.",
  },
  {
    role: "assistant",
    text:
      "Got it — 4 nights, party of 4. Which rooms should I price? Grand Floridian has 9 room types.",
  },
  {
    role: "user",
    text: "Standard View Room and Lagoon View Room.",
  },
  {
    role: "tool",
    tool: "explore_rates",
    status: "done",
    detail: "Standard View · Lagoon View",
  },
  {
    role: "assistant",
    text:
      "Priced. Before the PDF — tickets/dining/Memory Maker/Travel Protection?",
  },
  {
    role: "user",
    text:
      "5-day Park Hopper, Quick Service dining, yes Memory Maker, no Travel Protection.",
  },
  {
    role: "tool",
    tool: "generate_quote_pdf",
    status: "done",
    detail: "Sandcastle Travel · Smith Family",
  },
  {
    role: "assistant",
    text: "Quote PDF ready — signed link valid 7 days.",
  },
];

/* ── Claude chat mockup ── */

function ClaudeChatMockup() {
  return (
    <div
      className="rounded-xl overflow-hidden flex flex-col"
      style={{
        border: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(0,0,0,0.3)",
        height: 560,
      }}
    >
      {/* Title bar — Claude window */}
      <div
        className="flex items-center gap-3 px-4 py-2.5 shrink-0"
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
          className="flex-1 flex items-center justify-center gap-2 text-[10px] text-white/35"
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" className="text-gold/70">
            <path
              d="M12 2L4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-medium">Claude</span>
          <span className="text-white/20">·</span>
          <span>Room Genie connected</span>
        </div>
      </div>

      {/* Transcript */}
      <div className="flex-1 p-4 sm:p-5 space-y-3 overflow-hidden">
        {transcript.map((m, i) => {
          if (m.role === "user") {
            return (
              <div key={i} className="flex justify-end">
                <div
                  className="max-w-[82%] rounded-2xl rounded-tr-sm px-3.5 py-2 text-[11px] sm:text-xs leading-relaxed text-white/85"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {m.text}
                </div>
              </div>
            );
          }
          if (m.role === "tool") {
            return (
              <div key={i} className="flex justify-start">
                <div
                  className="inline-flex items-center gap-2 rounded-lg px-2.5 py-1.5"
                  style={{
                    background: "rgba(186,157,93,0.08)",
                    border: "1px solid rgba(186,157,93,0.2)",
                  }}
                >
                  <span
                    className="inline-flex h-3.5 w-3.5 items-center justify-center rounded-full"
                    style={{ background: "rgba(186,157,93,0.25)" }}
                  >
                    <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                      <path
                        d="M2 5l2 2 4-4"
                        stroke="#d4b96a"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-[10px] font-mono font-medium text-gold/90">
                    {m.tool}
                  </span>
                  {m.detail && (
                    <>
                      <span className="text-[9px] text-white/20">·</span>
                      <span className="text-[10px] text-white/45 truncate max-w-[180px]">
                        {m.detail}
                      </span>
                    </>
                  )}
                </div>
              </div>
            );
          }
          return (
            <div key={i} className="flex justify-start gap-2">
              <div
                className="shrink-0 mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full"
                style={{ background: "rgba(186,157,93,0.15)" }}
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" className="text-gold">
                  <path
                    d="M12 2L4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="max-w-[82%] text-[11px] sm:text-xs leading-relaxed text-white/70">
                {m.text}
              </div>
            </div>
          );
        })}
      </div>

      {/* Input bar */}
      <div
        className="px-4 py-3 shrink-0"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div
          className="flex items-center gap-2 rounded-lg px-3 py-2"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <span className="text-[10px] text-white/25">Reply to Claude…</span>
          <span className="ml-auto text-[9px] font-mono text-white/20">↵</span>
        </div>
      </div>
    </div>
  );
}

/* ── Branded PDF — real screenshot ── */

function BrandedPdfMockup() {
  return (
    <div
      className="relative rounded-xl overflow-hidden flex flex-col"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow:
          "0 30px 80px -20px rgba(0,0,0,0.55), 0 0 0 1px rgba(186,157,93,0.06)",
        height: 560,
      }}
    >
      {/* Caption strip */}
      <div
        className="flex items-center justify-between px-4 py-2.5 shrink-0"
        style={{
          background: "rgba(255,255,255,0.03)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-medium text-white/70">
            Quote PDF
          </span>
          <span className="text-[10px] text-white/25">·</span>
          <span className="text-[10px] text-white/45">
            adventures-by-tom.pdf
          </span>
        </div>
        <span
          className="rounded-full px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-gold"
          style={{
            background: "rgba(186,157,93,0.1)",
            border: "1px solid rgba(186,157,93,0.22)",
          }}
        >
          Branded
        </span>
      </div>

      {/* Real PDF screenshot */}
      <div className="relative flex-1 overflow-hidden bg-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={QUOTE_PREVIEW_SHOT}
          alt="A real branded quote PDF generated by Room Genie for Adventures By Tom — Walt Disney World Halloween 2026, 7 nights, 3 resort options"
          className="block w-full h-auto"
          loading="lazy"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.92) 100%)",
          }}
        />
      </div>
    </div>
  );
}

/* ── Main Section ── */

export function ClaudeQuoteFlow() {
  return (
    <section
      id="for-agents"
      className="py-24 sm:py-32 relative overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 50% 20%, rgba(186, 157, 93, 0.07) 0%, transparent 70%)",
        }}
      />

      <Container className="relative z-10">
        <SectionReveal>
          <div className="flex justify-center mb-5">
            <Badge variant="gold" className="text-[10px] tracking-widest">
              For Travel Agents
            </Badge>
          </div>
          <SectionHeading>Quote Disney in Plain English</SectionHeading>
          <p className="mt-5 text-center text-text-secondary max-w-2xl mx-auto">
            Connect Room Genie to Claude Desktop or Claude Code. Ask for a
            quote — Claude prices it live, walks the add-on toggles, and
            generates a branded PDF ready for your client.
          </p>
        </SectionReveal>

        <Divider />

        {/* Two-up: chat + PDF */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col"
          >
            <motion.div variants={fadeUp} custom={0.1} className="flex-1 flex flex-col">
              <div className="mb-5">
                <Badge variant="muted" className="text-[10px] tracking-widest mb-3">
                  Step 1 — Ask Claude
                </Badge>
                <h3
                  className="font-display text-xl sm:text-2xl font-semibold text-text-primary"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  A conversation, not a form
                </h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                  Claude calls Room Genie&apos;s tools on your behalf — pulling
                  live Disney pricing, asking the right add-on questions, and
                  surfacing what your client actually needs to decide.
                </p>
              </div>
              <div className="flex-1">
                <ClaudeChatMockup />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col"
          >
            <motion.div variants={fadeUp} custom={0.25} className="flex-1 flex flex-col">
              <div className="mb-5">
                <Badge variant="muted" className="text-[10px] tracking-widest mb-3">
                  Step 2 — Send the PDF
                </Badge>
                <h3
                  className="font-display text-xl sm:text-2xl font-semibold text-text-primary"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  Branded with your agency
                </h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                  Multi-page PDF with your logo, colors, and contact info — set
                  once in your agency profile. Cover, per-room breakdowns,
                  add-ons, deposit dates, and terms. Saved to your dashboard
                  for re-sharing.
                </p>
              </div>
              <div className="flex-1">
                <BrandedPdfMockup />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Compatibility row */}
        <SectionReveal delay={0.25}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs text-text-secondary">
            <span className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold/60" />
              Works with Claude Desktop
            </span>
            <span className="hidden sm:inline-block w-px h-3 bg-white/10" />
            <span className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold/60" />
              Works with Claude Code
            </span>
            <span className="hidden sm:inline-block w-px h-3 bg-white/10" />
            <span className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold/60" />
              One-time OAuth, no API keys
            </span>
          </div>
        </SectionReveal>

        {/* CTA */}
        <SectionReveal delay={0.35}>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button
              href={CONNECT_URL}
              className="px-8 py-3.5"
              onClick={() => {
                trackCta("Connect Claude", "claude-quote-flow");
                trackAppNavigation(CONNECT_URL, "Connect Claude");
              }}
            >
              Connect Claude
            </Button>
            <Button
              variant="outline"
              href="#pricing"
              className="px-8 py-3.5"
              onClick={() => trackCta("See Plans", "claude-quote-flow")}
            >
              See Plans
            </Button>
          </div>
          <p className="mt-4 text-center text-xs text-text-secondary/70">
            MCP server &amp; quote PDFs included on the Explorer plan.
          </p>
        </SectionReveal>
      </Container>
    </section>
  );
}
