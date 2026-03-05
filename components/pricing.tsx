"use client";

import { Container } from "./ui/container";
import { SectionReveal } from "./ui/section-reveal";
import { SectionHeading } from "./ui/section-heading";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Divider } from "./ui/divider";
import { SIGNUP_URL } from "@/lib/urls";

const plans = [
  {
    name: "Single Alert",
    price: "$5",
    unit: "/alert",
    subtitle: "Try it risk-free — no subscription",
    badge: null,
    highlighted: false,
    cta: "Get Started",
    features: [
      "Notified when your room opens up or drops in price",
      "Email notifications",
      "Purchase 1–10 credits at a time",
      "Credits last a full year",
      "No subscription required",
    ],
  },
  {
    name: "Watcher",
    price: "$19",
    unit: "/mo",
    subtitle: "Monitor every resort — miss nothing",
    badge: "Most Popular",
    highlighted: true,
    cta: "Start Watching",
    features: [
      "Unlimited alerts across all WDW resorts",
      "Edit, pause & reactivate any alert anytime",
      "Email notifications when conditions are met",
      "Monitor every room type at every resort",
      "Cancel anytime — no commitment",
    ],
  },
  {
    name: "Explorer",
    price: "$29",
    unit: "/mo",
    subtitle: "The complete Disney trip planning toolkit",
    badge: "Best Value",
    highlighted: false,
    cta: "Start Exploring",
    features: [
      "Everything in Watcher, plus Explore Rates",
      "Compare 10+ resorts side by side in one search",
      "See full trip pricing — rooms, tickets, dining & Memory Maker",
      "Live pricing from publicly available Disney sources",
      "Find the best value resort for your dates instantly",
    ],
  },
];

function CheckIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0 text-gold"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32 relative">
      <Container className="max-w-5xl">
        <SectionReveal>
          <SectionHeading>Simple, Transparent Pricing</SectionHeading>
          <p className="mt-5 text-center text-text-secondary max-w-xl mx-auto">
            Start with a single alert or go unlimited. No hidden fees, cancel anytime.
          </p>
        </SectionReveal>

        <Divider />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <SectionReveal key={plan.name} delay={i * 0.1}>
              <Card highlighted={plan.highlighted} className="flex flex-col h-full">
                <div className="mb-5">
                  <div className="flex items-center justify-between">
                    <h3
                      className="font-display text-lg font-semibold text-text-primary"
                      style={{ letterSpacing: "-0.01em" }}
                    >
                      {plan.name}
                    </h3>
                    {plan.badge && <Badge variant="gold">{plan.badge}</Badge>}
                  </div>
                  <p className="mt-1.5 text-xs text-text-tertiary">{plan.subtitle}</p>
                </div>

                <div className="flex items-baseline gap-1 mb-6">
                  <span
                    className="text-5xl font-display font-semibold text-text-primary"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {plan.price}
                  </span>
                  <span className="text-text-tertiary text-sm">{plan.unit}</span>
                </div>

                <div className="h-px bg-white/[0.06] mb-6" />

                <ul className="space-y-3.5 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="text-sm text-text-secondary leading-snug">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  href={SIGNUP_URL}
                  variant={plan.highlighted ? "solid" : "outline"}
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </Card>
            </SectionReveal>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-text-tertiary">
          SMS alerts coming soon. Email notifications are live today.
        </p>
      </Container>
    </section>
  );
}
