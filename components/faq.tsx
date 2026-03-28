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
        question: "Which Disney destinations does Room Genie support?",
        answer:
          "Availability alerts monitor all Walt Disney World resort properties, including Value, Moderate, Deluxe, and Deluxe Villa resorts. Explore Rates goes further — comparing live pricing across Walt Disney World, Disney Cruise Line, Disneyland, and Disney's Aulani Resort in Hawaii.",
      },
    ],
  },
  {
    category: "Availability Alerts",
    items: [
      {
        question: "How does an availability alert work?",
        answer:
          "You set your desired resort, room type, and travel dates. Room Genie checks Disney resort availability every 30 minutes. When your room becomes available, we send you an email notification.",
      },
      {
        question: "What's the difference between an availability alert and a price alert?",
        answer:
          "An availability alert notifies you any time a room becomes bookable. A price alert only notifies you when the price drops below a target you set — useful for snagging deals on rooms that are already available.",
      },
      {
        question: "How will I be notified?",
        answer:
          "Notifications are sent via email and SMS. You can enable SMS alerts by adding and verifying your phone number in your account settings.",
      },
      {
        question: "What types of rates does Room Genie monitor?",
        answer:
          "Room Genie monitors standard publicly available rates, which can include general promotions that Disney offers to all guests. However, discounted rates for Disney Visa cardholders, Florida Residents, and Annual Passholders are not currently supported.",
      },
    ],
  },
  {
    category: "Explore Rates",
    items: [
      {
        question: "What is Explore Rates?",
        answer:
          "Explore Rates lets you enter your trip details once and compare live pricing across multiple Disney destinations simultaneously. It now covers Walt Disney World, Disney Cruise Line, Disneyland, and Disney's Aulani Resort in Hawaii.",
      },
      {
        question: "Which Disney destinations does Explore Rates support?",
        answer:
          "Explore Rates supports Walt Disney World (all resorts), Disney Cruise Line (all ships and itineraries), Disneyland Resort (Disneyland Hotel, Disney's Grand Californian, and Pixar Place Hotel), and Disney's Aulani Resort & Spa in Ko Olina, Hawaii.",
      },
      {
        question: "Can I compare pricing across different Disney destinations?",
        answer:
          "Explore Rates compares options within each destination. For example, you can compare all Walt Disney World resorts side by side, or compare Disney Cruise Line itineraries — helping you find the best value for each type of Disney vacation.",
      },
      {
        question: "How current is the pricing data?",
        answer:
          "Pricing is retrieved from publicly available Disney sources at the time of your search, so you're seeing current rates. Always verify directly with Disney before booking.",
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
          "Your subscription moves to a past-due status. While past due, the app will redirect you to update your payment method each time you log in until payment is successfully resolved.",
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
