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
          "Room Genie watches resort availability and pricing for you. Set alerts for your desired resort, room type, and dates — and get a text and email when a room opens up or a price drops below your target. Explorer members can also compare live rates across Disney and Universal destinations and share them as PDF quotes.",
      },
      {
        question: "Is there a discount for new customers?",
        answer:
          "Yes! Enter code SOCIAL50 at checkout to get 50% off your first purchase — that's $2.50 per single alert, $9.50 for your first month of Watcher, or $14.50 for your first month of Explorer. Subscriptions renew at the regular monthly price and you can cancel anytime.",
      },
      {
        question: "Is there a free trial?",
        answer:
          "There is no free trial or free tier. However, single alert credits are available for purchase without a subscription, so you can try the service without committing to a monthly plan — and with code SOCIAL50 your first purchase is half off.",
      },
      {
        question: "Which destinations does Room Genie support?",
        answer:
          "Availability and price-drop alerts cover Walt Disney World, Disneyland Resort, Disney's Aulani Resort, and Universal Orlando's on-site hotels. Explorer members can also set alerts on Disney Cruise Line staterooms — even on sold-out sailings — and compare live pricing across all five destinations with Explore Rates.",
      },
    ],
  },
  {
    category: "Availability Alerts",
    items: [
      {
        question: "How does an availability alert work?",
        answer:
          "You set your desired resort, one or more room types, and travel dates. Room Genie checks availability every 30 minutes. When your room becomes available, we send you an email and text message. Alerts pause automatically once your check-in date has passed.",
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
          "Explore Rates lets you enter your trip details once and compare live pricing across many resorts side by side. It covers Walt Disney World, Disney Cruise Line, Disneyland, Disney's Aulani Resort in Hawaii, and Universal Orlando.",
      },
      {
        question: "Which destinations does Explore Rates support?",
        answer:
          "Explore Rates supports Walt Disney World (all resorts), Disney Cruise Line (all ships and itineraries, including sold-out sailings), Disneyland Resort (Disneyland Hotel, Disney's Grand Californian, and Pixar Place Hotel), Disney's Aulani Resort & Spa in Ko Olina, Hawaii, and all 11 on-site Universal Orlando hotels — with park tickets, Express Pass, and SuperStar Shuttle pricing.",
      },
      {
        question: "Can Room Genie find Disney special offers?",
        answer:
          "Yes. When you price a Walt Disney World package, Room Genie also checks Disney's current special offers and shows you a \"Better Rate\" whenever a promotion beats the standard price — including how much you'd save.",
      },
      {
        question: "Can I create a quote to share?",
        answer:
          "Explorer members can turn any comparison into a polished PDF quote in one click — with per-room pricing, deposits, payment due dates, and optional add-ons. Multi-room trips get per-room pricing and a combined total.",
      },
      {
        question: "Can I use Room Genie with Claude?",
        answer:
          "Yes. Connect Room Genie to Claude from your account's Connected Apps settings, then plan in plain English — ask Claude to price resorts, compare rooms, build a PDF quote, or set alerts for you.",
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
