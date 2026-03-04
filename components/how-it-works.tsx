"use client";

import { Container } from "@/components/ui/container";
import { SectionReveal } from "@/components/ui/section-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const alertSteps = [
  {
    step: "01",
    title: "Set Your Alert",
    description:
      "Pick your resort, room type, and travel dates. Set a target price if you want price-drop notifications.",
  },
  {
    step: "02",
    title: "We Watch For You",
    description:
      "Room Genie checks Disney every 30 minutes, 24/7 — so you don't have to keep refreshing.",
  },
  {
    step: "03",
    title: "Get Notified Instantly",
    description:
      "Receive an email the moment your room becomes available or the price drops below your target.",
  },
];

const exploreSteps = [
  {
    step: "01",
    title: "Enter Your Trip Details",
    description:
      "Package type, travel dates, number of guests — enter your details once.",
  },
  {
    step: "02",
    title: "Compare Every Resort",
    description:
      "See live pricing across 10+ Walt Disney World resorts side by side, updated in real time.",
  },
  {
    step: "03",
    title: "Book the Best Deal",
    description:
      "Compare rooms, tickets, dining plans, and Memory Maker all in one place — then book directly with Disney.",
  },
];

function StepCards({
  label,
  steps,
  delayOffset = 0,
}: {
  label: string;
  steps: typeof alertSteps;
  delayOffset?: number;
}) {
  return (
    <div>
      <SectionReveal delay={delayOffset}>
        <Badge variant="gold" className="mb-6">
          {label}
        </Badge>
      </SectionReveal>
      <div className="flex flex-col gap-4">
        {steps.map((step, i) => (
          <SectionReveal key={step.step} delay={delayOffset + 0.1 + i * 0.1}>
            <Card>
              <div className="flex gap-4">
                <span className="font-display text-2xl font-bold text-gold/30">
                  {step.step}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/50">
                    {step.description}
                  </p>
                </div>
              </div>
            </Card>
          </SectionReveal>
        ))}
      </div>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32">
      <Container>
        <SectionReveal>
          <SectionHeading
            title="How It Works"
            subtitle="Two powerful tools to help you find and book the perfect Disney resort room."
            gold
          />
        </SectionReveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-8">
          <StepCards label="Availability Alerts" steps={alertSteps} />
          <StepCards
            label="Explore Rates"
            steps={exploreSteps}
            delayOffset={0.2}
          />
        </div>
      </Container>
    </section>
  );
}
