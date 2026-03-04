"use client";

import { Container } from "@/components/ui/container";
import { SectionReveal } from "@/components/ui/section-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Accordion } from "@/components/ui/accordion";

const faqData = [
  {
    category: "Getting Started",
    items: [
      {
        question: "What is Room Genie?",
        answer:
          "Room Genie is a monitoring tool for Walt Disney World resorts. It tracks room availability and pricing so you can get notified the moment your desired room opens up or drops in price — and compare live rates across 10+ resorts.",
      },
      {
        question: "How do I get started?",
        answer:
          "Create a free account, then either purchase a single alert credit or subscribe to a plan. Set your resort, room type, and travel dates — Room Genie handles the rest.",
      },
      {
        question: "Do I need a subscription to use Room Genie?",
        answer:
          "No. You can purchase individual alert credits at $5 each with no subscription required. Subscriptions (Watcher and Explorer) are available if you want unlimited alerts and additional features.",
      },
    ],
  },
  {
    category: "Availability Alerts",
    items: [
      {
        question: "How often does Room Genie check for availability?",
        answer:
          "Room Genie checks Disney resort availability every 30 minutes, 24/7. You'll be notified the moment your room becomes available or the price drops below your target.",
      },
      {
        question: "What types of notifications will I receive?",
        answer:
          "You'll receive email notifications when your alert conditions are met. SMS notifications are coming soon.",
      },
      {
        question: "Can I set a target price for my alert?",
        answer:
          "Yes. When creating an alert, you can set a target price. Room Genie will notify you when the price drops below that amount.",
      },
      {
        question: "Can I edit or pause an alert after creating it?",
        answer:
          "Yes — with a Watcher or Explorer subscription, you can edit, pause, and reactivate your alerts at any time.",
      },
    ],
  },
  {
    category: "Explore Rates",
    items: [
      {
        question: "What is Explore Rates?",
        answer:
          "Explore Rates lets you compare live pricing across 10+ Walt Disney World resorts simultaneously. Enter your trip details once and see rooms, tickets, dining plans, and Memory Maker pricing side by side.",
      },
      {
        question: "Where does the pricing data come from?",
        answer:
          "Explore Rates pulls live pricing directly from Disney's website, so you always see the most up-to-date rates.",
      },
      {
        question: "Which plan includes Explore Rates?",
        answer:
          "Explore Rates is available exclusively on the Explorer plan ($29/mo), which includes everything in the Watcher plan plus the full rate comparison tool.",
      },
    ],
  },
  {
    category: "Plans & Credits",
    items: [
      {
        question: "What's included in the Single Alert plan?",
        answer:
          "Each single alert credit costs $5 and lets you set one availability or price drop alert. You can purchase 1–10 credits at a time. Credits expire after 1 year from purchase.",
      },
      {
        question: "What's the difference between Watcher and Explorer?",
        answer:
          "Watcher ($19/mo) gives you unlimited alerts with the ability to edit, pause, and reactivate them, plus SMS and email notifications. Explorer ($29/mo) includes everything in Watcher plus Explore Rates — live pricing comparison across 10+ resorts for rooms, tickets, dining, and Memory Maker.",
      },
      {
        question: "Do single alert credits expire?",
        answer:
          "Yes. Single alert credits expire 1 year after purchase. Subscriptions (Watcher and Explorer) provide unlimited alerts for as long as your subscription is active.",
      },
    ],
  },
  {
    category: "Account & Billing",
    items: [
      {
        question: "Can I cancel my subscription anytime?",
        answer:
          "Yes. You can cancel your Watcher or Explorer subscription at any time. There's no commitment or cancellation fee.",
      },
      {
        question: "How do I manage my subscription?",
        answer:
          "You can manage your subscription, update your payment method, and view billing history from your account settings in the Room Genie app.",
      },
      {
        question: "Can I upgrade or downgrade my plan?",
        answer:
          "Yes. You can upgrade from Watcher to Explorer or downgrade from Explorer to Watcher at any time from your account settings.",
      },
    ],
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 sm:py-32">
      <Container>
        <SectionReveal>
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about Room Genie."
            gold
          />
        </SectionReveal>

        <div className="mx-auto mt-16 max-w-3xl">
          {faqData.map((category, catIdx) => (
            <SectionReveal key={category.category} delay={catIdx * 0.05}>
              <div className="mt-10 first:mt-0">
                <h3 className="mb-2 font-display text-lg font-semibold text-gold">
                  {category.category}
                </h3>
                {category.items.map((item) => (
                  <Accordion key={item.question} title={item.question}>
                    {item.answer}
                  </Accordion>
                ))}
              </div>
            </SectionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
