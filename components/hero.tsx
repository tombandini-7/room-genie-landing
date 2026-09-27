"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/container";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { HeroShowcase } from "./hero-showcase";
import { SIGNUP_URL } from "@/lib/urls";
import { trackCta, trackAppNavigation } from "@/lib/analytics";
import { PROMO_CODE, PROMO_PERCENT } from "@/lib/promo";

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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-36 lg:pt-40">
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
          className="flex flex-col lg:flex-row items-center gap-10 lg:gap-10"
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
              Never Miss Your Dream{" "}
              <span className="text-gold-gradient">Disney Room</span>{" "}
              Again
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              custom={0.25}
              className="mt-7 text-lg sm:text-xl text-text-secondary max-w-xl leading-relaxed"
            >
              Get a text the moment a sold-out room opens up or the price drops.
              Compare live rates across Disney World, Disneyland, Aulani, Disney
              Cruise Line — and now Universal Orlando — all in one place.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              custom={0.4}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button href={SIGNUP_URL} className="px-8 py-3.5" onClick={() => { trackCta("Get Started 50% Off", "hero"); trackAppNavigation(SIGNUP_URL, "Get Started 50% Off"); }}>
                Get Started — {PROMO_PERCENT}% Off
              </Button>
              <Button variant="outline" href="#pricing" className="px-8 py-3.5" onClick={() => trackCta("View Pricing", "hero")}>
                View Pricing
              </Button>
            </motion.div>

            <motion.p
              variants={fadeUp}
              custom={0.45}
              className="mt-4 text-sm text-text-tertiary text-center lg:text-left"
            >
              Use code <span className="font-semibold tracking-widest text-gold-light">{PROMO_CODE}</span> at checkout for {PROMO_PERCENT}% off your first purchase.
            </motion.p>

            <motion.div variants={fadeUp} custom={0.5} className="mt-8 flex flex-wrap gap-2 justify-center lg:justify-start">
              <Badge variant="gold">New: Universal Orlando</Badge>
              <Badge variant="muted">SMS &amp; Email Alerts</Badge>
            </motion.div>
          </div>

          {/* Right: Phone Mockup */}
          <motion.div
            variants={fadeUp}
            custom={0.3}
            className="w-full lg:w-auto lg:flex-none"
          >
            <HeroShowcase />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
