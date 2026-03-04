"use client";

import { Container } from "./ui/container";
import { SectionReveal } from "./ui/section-reveal";
import { SectionHeading } from "./ui/section-heading";
import { Divider } from "./ui/divider";

const alertSteps = [
  {
    number: "1",
    title: "Set Your Alert",
    description:
      "Pick your resort, room type, and travel dates. Set a target price for price-drop notifications.",
  },
  {
    number: "2",
    title: "We Watch For You",
    description:
      "Room Genie checks Disney every 30 minutes, 24/7. No manual refreshing required.",
  },
  {
    number: "3",
    title: "Get Notified Instantly",
    description:
      "Receive an email the moment your room becomes available or the price drops below your target.",
  },
];

const exploreSteps = [
  {
    number: "1",
    title: "Enter Your Trip Details",
    description:
      "Package type, dates, and number of guests — enter your details once.",
  },
  {
    number: "2",
    title: "Compare Every Resort",
    description:
      "See live pricing across 10+ Walt Disney World resorts displayed side by side.",
  },
  {
    number: "3",
    title: "Book the Best Deal",
    description:
      "Rooms, tickets, dining plans, and Memory Maker — all compared so you can find the best value.",
  },
];

function StepColumn({
  title,
  steps,
}: {
  title: string;
  steps: typeof alertSteps;
}) {
  return (
    <div>
      <h3
        className="text-gold font-display text-xl sm:text-2xl font-semibold mb-10"
        style={{ letterSpacing: "-0.02em" }}
      >
        {title}
      </h3>
      <div className="space-y-0">
        {steps.map((step, i) => (
          <div key={step.number} className="relative flex gap-5">
            {/* Connector line + number */}
            <div className="flex flex-col items-center">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold text-sm font-semibold">
                {step.number}
              </div>
              {i < steps.length - 1 && (
                <div
                  className="w-px flex-1 my-1"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(186, 157, 93, 0.25), rgba(186, 157, 93, 0.05))",
                  }}
                />
              )}
            </div>

            {/* Content */}
            <div className={i < steps.length - 1 ? "pb-10" : "pb-0"}>
              <h4
                className="text-text-primary font-medium text-base mb-1.5"
                style={{ letterSpacing: "-0.01em" }}
              >
                {step.title}
              </h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section id="features" className="py-24 sm:py-32 relative">
      <Container>
        <SectionReveal>
          <SectionHeading>How It Works</SectionHeading>
          <p className="mt-5 text-center text-text-secondary max-w-2xl mx-auto">
            Two powerful tools to help you find the perfect Disney resort room at the best price.
          </p>
        </SectionReveal>

        <Divider />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          <SectionReveal delay={0.1}>
            <StepColumn title="Availability Alerts" steps={alertSteps} />
          </SectionReveal>
          <SectionReveal delay={0.25}>
            <StepColumn title="Explore Rates" steps={exploreSteps} />
          </SectionReveal>
        </div>
      </Container>
    </section>
  );
}
