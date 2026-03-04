"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/container";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const LOGO_URL =
  "https://xrcwdxbwtnmxyahbgrlw.supabase.co/storage/v1/object/public/app-assets/logos/Room%20Genie%20-%20Small%20-%20Transparent.png";

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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

      <Container className="relative z-10 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Logo */}
          <motion.img
            src={LOGO_URL}
            alt="Room Genie"
            variants={fadeUp}
            custom={0}
            className="h-24 sm:h-28 lg:h-32 w-auto mb-10"
          />

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            custom={0.15}
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold max-w-4xl"
            style={{ letterSpacing: "-0.025em", lineHeight: 1.1 }}
          >
            Never Miss Your Dream{" "}
            <span className="text-gold-gradient">Disney Room</span>{" "}
            Again
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            custom={0.3}
            className="mt-7 text-lg sm:text-xl text-text-secondary max-w-2xl leading-relaxed"
          >
            Monitor Walt Disney World resort availability every 30 minutes
            and compare live pricing across 10+ resorts.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            custom={0.45}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Button href="https://app.roomgenie.travel" className="px-8 py-3.5">
              Get Started
            </Button>
            <Button variant="outline" href="#pricing" className="px-8 py-3.5">
              View Pricing
            </Button>
          </motion.div>

          {/* SMS Badge */}
          <motion.div variants={fadeUp} custom={0.55} className="mt-8">
            <Badge variant="gold">SMS Alerts Coming Soon</Badge>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
