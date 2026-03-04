"use client";

import { Container } from "@/components/ui/container";
import { SectionReveal } from "@/components/ui/section-reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      {/* Radial gold gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(186,157,93,0.08) 0%, transparent 70%)",
        }}
      />

      <Container className="relative z-10 py-20 text-center">
        <SectionReveal>
          <Badge variant="muted" className="mb-8">
            Walt Disney World Resort Monitoring
          </Badge>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
            Never Miss Your Dream{" "}
            <span className="text-gold-gradient">Disney Room</span> Again
          </h1>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/60 sm:text-lg lg:text-xl">
            Room Genie monitors Walt Disney World resort availability every 30
            minutes and compares live pricing across 10+ resorts — so you can
            book the perfect room at the best price.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.3}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="https://app.roomgenie.travel" size="large">
              Get Started
            </Button>
            <Button href="#pricing" variant="outline" size="large">
              See Pricing
            </Button>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.4}>
          <div className="mt-10">
            <Badge variant="gold">SMS Alerts Coming Soon</Badge>
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
