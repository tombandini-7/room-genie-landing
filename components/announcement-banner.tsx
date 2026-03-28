"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/container";
import { Badge } from "./ui/badge";

const destinations = [
  {
    name: "Walt Disney World",
    icon: "🏰",
  },
  {
    name: "Disney Cruise Line",
    icon: "🚢",
  },
  {
    name: "Disneyland",
    icon: "🎢",
  },
  {
    name: "Disney Aulani",
    icon: "🌺",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export function AnnouncementBanner() {
  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      {/* Animated background glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(186, 157, 93, 0.07) 0%, transparent 70%)",
        }}
      />

      <Container className="max-w-4xl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center"
        >
          {/* NEW badge */}
          <motion.div variants={fadeUp} custom={0}>
            <Badge variant="gold" className="text-xs tracking-widest mb-6">
              New — Now Live
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={fadeUp}
            custom={0.1}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-text-primary"
            style={{ letterSpacing: "-0.025em", lineHeight: 1.15 }}
          >
            Explore Rates Now Covers{" "}
            <span className="text-gold-gradient">All of Disney</span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            custom={0.2}
            className="mt-5 text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Compare live pricing across Walt Disney World, Disney Cruise Line,
            Disneyland, and Aulani — all from one search.
          </motion.p>

          {/* Destination cards */}
          <motion.div
            variants={fadeUp}
            custom={0.35}
            className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
          >
            {destinations.map((dest, i) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.4 + i * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="group relative rounded-xl border border-gold/15 bg-white/[0.02] p-5 hover:border-gold/30 hover:bg-gold/[0.04] transition-all duration-300"
              >
                <div className="text-3xl mb-3">{dest.icon}</div>
                <p className="text-sm font-medium text-text-primary leading-tight">
                  {dest.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
