"use client";

import { Container } from "./ui/container";
import { SectionReveal } from "./ui/section-reveal";
import { SectionHeading } from "./ui/section-heading";
import { Accordion } from "./ui/accordion";
import { Divider } from "./ui/divider";

const faqGroups = [
  {
    category: "Getting Started",
    items: [
      {
        question: "What is Room Genie?",
        answer:
          "Room Genie is a monitoring service for Walt Disney World resort availability and pricing. Set alerts for your desired resort, room type, and dates — and get notified when a room opens up or a price drops below your target.",
      },
      {
        question: "Is there a free trial?",
        answer:
          "There is no free trial or free tier. However, single alert credits are available for purchase without a subscription, so you can try the service without committing to a monthly plan.",
      },
      {
        question: "Which parks does Room Genie support?",
        answer:
          "Room Genie monitors all Walt Disney World resort properties, including Value, Moderate, Deluxe, and Deluxe Villa resorts.",
      },
    ],
  },
  {
    category: "Availability Alerts",
    items: [
      {
        question: "How does an availability alert work?",
        answer:
          "You set your desired resort, room type, and travel dates. Room Genie checks Disney's system every 30 minutes. When your room becomes available, you receive an email notification right away.",
      },
      {
        question: "What's the difference between an availability alert and a price alert?",
        answer:
          "An availability alert notifies you any time a room becomes bookable. A price alert only notifies you when the price drops below a target you set — useful for snagging deals on rooms that are already available.",
      },
      {
        question: "How will I be notified?",
        answer:
          "Notifications are sent via email. SMS notifications are coming very soon.",
      },
    ],
  },
  {
    category: "Explore Rates",
    items: [
      {
        question: "What is Explore Rates?",
        answer:
          "Explore Rates lets you enter your trip details once and compare live pricing across 10+ Walt Disney World resorts simultaneously — including rooms, tickets, dining plans, and Memory Maker.",
      },
      {
        question: "How current is the pricing data?",
        answer:
          "Pricing is pulled live from Disney at the time of your search, so you're always seeing the most up-to-date rates available.",
      },
    ],
  },
  {
    category: "Plans & Credits",
    items: [
      {
        question: "Can I cancel anytime?",
        answer:
          "Yes. Both the Watcher and Explorer plans can be cancelled at any time with no penalty or commitment.",
      },
      {
        question: "Do credits expire?",
        answer:
          "Single alert credits expire 1 year from the date of purchase.",
      },
      {
        question: "What if I run out of credits?",
        answer:
          "Watcher and Explorer subscribers have unlimited alerts — no credits to worry about. If you're on single alerts, you can purchase additional credits at any time.",
      },
    ],
  },
  {
    category: "Account & Billing",
    items: [
      {
        question: "What happens if my payment fails?",
        answer:
          "Your subscription moves to a past-due status. You'll see a banner in the app prompting you to update your payment method.",
      },
      {
        question: "Can I upgrade or downgrade my plan?",
        answer:
          "Yes. Upgrading from Watcher to Explorer is prorated and takes effect immediately ($10/mo more). Downgrading from Explorer to Watcher transitions at the end of your current billing period.",
      },
    ],
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 sm:py-32 relative">
      <Container className="max-w-3xl">
        <SectionReveal>
          <SectionHeading>Frequently Asked Questions</SectionHeading>
        </SectionReveal>

        <Divider />

        <div className="mt-14 space-y-12">
          {faqGroups.map((group, i) => (
            <SectionReveal key={group.category} delay={i * 0.08}>
              <h3
                className="text-gold font-display text-base font-semibold tracking-wide mb-2"
              >
                {group.category}
              </h3>
              <div>
                {group.items.map((item) => (
                  <Accordion
                    key={item.question}
                    question={item.question}
                    answer={item.answer}
                  />
                ))}
              </div>
            </SectionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
