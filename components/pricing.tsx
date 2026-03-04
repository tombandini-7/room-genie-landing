"use client";

import { Container } from "@/components/ui/container";
import { SectionReveal } from "@/components/ui/section-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "Single Alert",
    price: "$5",
    period: "/alert",
    subtitle: "Try it risk-free — no subscription",
    badge: null,
    highlighted: false,
    features: [
      "Get notified when your room opens up or drops in price",
      "SMS + email notifications",
      "Buy 1–10 credits at a time",
      "Credits last a full year",
    ],
    cta: "Get Started",
  },
  {
    name: "Watcher",
    price: "$19",
    period: "/mo",
    subtitle: "Monitor every resort — miss nothing",
    badge: "Most Popular" as const,
    highlighted: true,
    features: [
      "Unlimited alerts — monitor every resort at once",
      "Edit, pause, or reactivate any alert anytime",
      "Instant SMS + email notifications",
      "Monitor all Walt Disney World resorts",
    ],
    cta: "Start Watching",
  },
  {
    name: "Explorer",
    price: "$29",
    period: "/mo",
    subtitle: "Alerts + full trip price comparison",
    badge: "Best Value" as const,
    highlighted: false,
    features: [
      "Everything in Watcher",
      "Explore Rates: compare 10+ resorts simultaneously",
      "Live pricing — rooms, tickets, dining, Memory Maker",
      "Book the best deal directly with Disney",
    ],
    cta: "Start Exploring",
  },
];

const comparisonRows = [
  { feature: "Availability alerts", single: true, watcher: true, explorer: true },
  { feature: "Price drop alerts", single: true, watcher: true, explorer: true },
  { feature: "Email notifications", single: true, watcher: true, explorer: true },
  { feature: "SMS notifications", single: true, watcher: true, explorer: true },
  { feature: "Unlimited alerts", single: false, watcher: true, explorer: true },
  { feature: "Edit / pause / reactivate alerts", single: false, watcher: true, explorer: true },
  { feature: "Monitor all resorts", single: false, watcher: true, explorer: true },
  { feature: "Explore Rates — compare 10+ resorts", single: false, watcher: false, explorer: true },
  { feature: "Live Disney pricing", single: false, watcher: false, explorer: true },
  { feature: "Rooms, tickets, dining, Memory Maker", single: false, watcher: false, explorer: true },
];

const Check = () => (
  <svg className="mx-auto h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const Dash = () => (
  <span className="mx-auto block h-px w-4 bg-white/10" />
);

export function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32">
      <Container>
        <SectionReveal>
          <SectionHeading
            title="Simple, Transparent Pricing"
            subtitle="Start with a single alert or go unlimited. Cancel anytime."
            gold
          />
        </SectionReveal>

        {/* Plan cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <SectionReveal key={plan.name} delay={i * 0.1}>
              <Card
                variant={plan.highlighted ? "highlighted" : "default"}
                className="flex h-full flex-col"
              >
                {plan.badge && (
                  <Badge variant="gold" className="mb-4 self-start">
                    {plan.badge}
                  </Badge>
                )}

                <h3 className="font-display text-xl font-bold text-white">
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm text-white/40">{plan.subtitle}</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-lg text-white/30">{plan.period}</span>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-white/60"
                    >
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button
                    href="https://app.roomgenie.travel"
                    variant={plan.highlighted ? "solid" : "outline"}
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </div>
              </Card>
            </SectionReveal>
          ))}
        </div>

        {/* Comparison table */}
        <SectionReveal delay={0.2}>
          <div className="mt-20 overflow-x-auto">
            <table className="w-full min-w-[600px] text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="pb-4 text-left font-medium text-white/40">
                    Feature
                  </th>
                  <th className="pb-4 text-center font-medium text-white/40">
                    Single Alert
                  </th>
                  <th className="pb-4 text-center font-medium text-gold">
                    Watcher
                  </th>
                  <th className="pb-4 text-center font-medium text-white/40">
                    Explorer
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="border-b border-white/5">
                    <td className="py-3 text-white/60">{row.feature}</td>
                    <td className="py-3 text-center">
                      {row.single ? <Check /> : <Dash />}
                    </td>
                    <td className="py-3 text-center">
                      {row.watcher ? <Check /> : <Dash />}
                    </td>
                    <td className="py-3 text-center">
                      {row.explorer ? <Check /> : <Dash />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
