"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/container";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { SIGNUP_URL } from "@/lib/urls";
import { trackCta, trackAppNavigation } from "@/lib/analytics";

const HERO_CLAUDE_SHOT =
  "https://ysxkvjimngygmlmnnvwm.supabase.co/storage/v1/object/public/app-assets/hero-images/Claude%20Screenshot.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 lg:pt-24 pb-16 lg:pb-12"
    >
      {/* Layered background gradients */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(186, 157, 93, 0.08) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 70% 80%, rgba(186, 157, 93, 0.04) 0%, transparent 50%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 40% 30% at 20% 60%, rgba(186, 157, 93, 0.03) 0%, transparent 50%)",
          }}
        />
        {/* Grid texture */}
        <div className="absolute inset-0 grid-texture" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12"
        >
          {/* Left: Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              custom={0.1}
              className="font-display text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-semibold"
              style={{ letterSpacing: "-0.025em", lineHeight: 1.1 }}
            >
              Accurate Disney{" "}
              <span className="text-gold-gradient">Pricing</span>, in Plain
              English
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              custom={0.25}
              className="mt-7 text-lg sm:text-xl text-text-secondary max-w-xl leading-relaxed"
            >
              Compare live package totals across every Disney destination —
              priced to the dollar, side-by-side. Set availability alerts and
              send branded quote PDFs to clients. Right inside a Claude
              conversation.
            </motion.p>

            {/* Accuracy proof points */}
            <motion.ul
              variants={fadeUp}
              custom={0.35}
              className="mt-6 flex flex-wrap gap-x-5 gap-y-2 justify-center lg:justify-start text-sm text-text-secondary"
            >
              {[
                "Pulled live from Disney",
                "Matches the booking cart",
                "Multi-resort, multi-room",
              ].map((line) => (
                <li key={line} className="flex items-center gap-2">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="shrink-0 text-gold"
                  >
                    <path
                      d="M2.5 7.5l2.5 2.5L11.5 4"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {line}
                </li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              custom={0.45}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                href={SIGNUP_URL}
                className="px-8 py-3.5"
                onClick={() => {
                  trackCta("Get Started", "hero");
                  trackAppNavigation(SIGNUP_URL, "Get Started");
                }}
              >
                Get Started
              </Button>
              <Button
                variant="outline"
                href="#pricing"
                className="px-8 py-3.5"
                onClick={() => trackCta("View Pricing", "hero")}
              >
                View Pricing
              </Button>
            </motion.div>

            {/* Badges */}
            <motion.div
              variants={fadeUp}
              custom={0.55}
              className="mt-8 flex flex-wrap gap-2 justify-center lg:justify-start"
            >
              <Badge variant="gold">SMS &amp; Email Alerts Live</Badge>
              <Badge variant="gold">Now in Claude Desktop &amp; Claude Code</Badge>
            </motion.div>
          </div>

          {/* Right: Real Claude conversation */}
          <motion.div
            variants={fadeUp}
            custom={0.3}
            className="w-full lg:flex-1 lg:max-w-[520px]"
          >
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow:
                  "0 30px 80px -20px rgba(0,0,0,0.55), 0 0 0 1px rgba(186,157,93,0.06)",
              }}
            >
              {/* Caption strip on top */}
              <div
                className="flex items-center justify-between px-4 py-2.5"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="inline-flex h-4 w-4 items-center justify-center rounded-full"
                    style={{ background: "rgba(186,157,93,0.18)" }}
                  >
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" className="text-gold">
                      <path
                        d="M12 2L4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-[11px] font-medium text-white/70">
                    Claude
                  </span>
                  <span className="text-[10px] text-white/25">·</span>
                  <span className="text-[10px] text-white/45">
                    Room Genie connected
                  </span>
                </div>
                <span
                  className="rounded-full px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-gold"
                  style={{
                    background: "rgba(186,157,93,0.1)",
                    border: "1px solid rgba(186,157,93,0.22)",
                  }}
                >
                  Live pricing
                </span>
              </div>

              {/* Image — capped on desktop so hero fits viewport; bottom fades */}
              <div className="relative bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={HERO_CLAUDE_SHOT}
                  alt="A real Claude conversation pricing four Walt Disney World resorts side by side using Room Genie"
                  className="block w-full h-auto lg:h-[560px] lg:object-cover lg:object-top"
                  loading="eager"
                />
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.95) 100%)",
                  }}
                />
              </div>
            </div>

            {/* Tiny caption under */}
            <p className="mt-3 text-center text-[11px] text-text-tertiary tracking-wide">
              Real Claude conversation — 4 resorts priced in one prompt.
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
