"use client";

import { Container } from "./ui/container";
import { SectionReveal } from "./ui/section-reveal";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { CopyCode } from "./ui/copy-code";
import { plans } from "./pricing";
import { PROMO_CODE, PROMO_PERCENT, promoPrice } from "@/lib/promo";
import { SIGNUP_URL } from "@/lib/urls";
import { trackCta, trackAppNavigation } from "@/lib/analytics";

const unitLabels: Record<string, string> = {
  "/alert": "per alert",
  "/mo": "first month",
};

/* Circular cut-outs where the stub tears off. Colored to match the page background. */
function Notch({ className }: { className: string }) {
  return (
    <span
      aria-hidden
      className={`absolute h-6 w-6 rounded-full bg-primary z-10 ${className}`}
    />
  );
}

export function PromoTicket() {
  return (
    <section id="offer" className="py-20 sm:py-28 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(186, 157, 93, 0.10) 0%, transparent 70%)",
        }}
      />

      <Container className="max-w-5xl relative z-10">
        <SectionReveal>
          <div className="ticket-border relative rounded-2xl p-[1.5px] shadow-2xl shadow-gold/10">
            {/* No overflow-hidden here: the notches must overhang the gold border */}
            <div className="relative flex flex-col lg:flex-row rounded-[15px] bg-primary">
              {/* Main body */}
              <div className="flex-1 p-7 sm:p-10 lg:p-12 relative">
                <div className="absolute inset-0 grid-texture pointer-events-none rounded-t-[15px] lg:rounded-l-[15px] lg:rounded-tr-none overflow-hidden" />
                <div className="relative">
                  <Badge variant="gold" className="text-[10px] tracking-widest">
                    Limited-Time Offer
                  </Badge>
                  <h2
                    className="mt-5 font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-text-primary"
                    style={{ letterSpacing: "-0.025em", lineHeight: 1.1 }}
                  >
                    Your first purchase,{" "}
                    <span className="text-gold-gradient italic">half off.</span>
                  </h2>
                  <p className="mt-4 text-text-secondary leading-relaxed max-w-md">
                    That sold-out room you&apos;ve been refreshing for? Let Room Genie
                    watch it for you — for {PROMO_PERCENT}% less. Works on any plan.
                  </p>

                  <ul className="mt-8 space-y-3 max-w-md">
                    {plans.map((plan) => (
                      <li
                        key={plan.name}
                        className="flex items-baseline justify-between gap-4 border-b border-dashed border-white/[0.08] pb-3"
                      >
                        <span className="text-sm text-text-primary font-medium">
                          {plan.name}
                        </span>
                        <span className="flex items-baseline gap-2.5 shrink-0">
                          <span className="text-sm text-text-tertiary line-through decoration-gold/60">
                            {plan.price}
                          </span>
                          <span className="font-display text-2xl font-semibold text-gold-light">
                            {promoPrice(plan.price)}
                          </span>
                          <span className="text-[11px] text-text-tertiary w-16">
                            {unitLabels[plan.unit]}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Perforation + stub */}
              <div className="relative lg:w-[340px] border-t-2 lg:border-t-0 lg:border-l-2 border-dashed border-gold/35 bg-gradient-to-br from-gold/[0.10] to-gold/[0.03] rounded-b-[15px] lg:rounded-bl-none lg:rounded-r-[15px]">
                {/* Mobile: notches on the left/right edges; desktop: top/bottom edges */}
                <Notch className="-top-[13px] -left-[13.5px] lg:-top-[13.5px] lg:-left-[13px]" />
                <Notch className="-top-[13px] -right-[13.5px] lg:hidden" />
                <Notch className="hidden lg:block -bottom-[13.5px] -left-[13px]" />

                <div className="h-full flex flex-col items-center justify-center text-center p-8 sm:p-10">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-gold/70">
                    Admit One · First Purchase
                  </p>
                  <p
                    className="mt-3 font-display text-7xl sm:text-8xl font-semibold text-gold-gradient leading-none"
                    style={{ letterSpacing: "-0.04em" }}
                  >
                    {PROMO_PERCENT}%
                  </p>
                  <p className="text-xs uppercase tracking-[0.3em] text-text-secondary mt-1">
                    Off
                  </p>

                  <CopyCode
                    code={PROMO_CODE}
                    size="lg"
                    location="promo-ticket"
                    className="mt-7"
                  />
                  <p className="mt-3 text-xs text-text-tertiary">
                    Tap to copy · enter at checkout
                  </p>

                  <Button
                    href={SIGNUP_URL}
                    className="mt-7 w-full px-8 py-3.5"
                    onClick={() => {
                      trackCta("Claim 50% Off", "promo-ticket");
                      trackAppNavigation(SIGNUP_URL, "Claim 50% Off");
                    }}
                  >
                    Claim {PROMO_PERCENT}% Off
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>

        <p className="mt-5 text-center text-[11px] text-text-tertiary">
          {PROMO_PERCENT}% off your first purchase with code {PROMO_CODE}. Subscriptions renew at the
          regular monthly price. Cancel anytime.
        </p>
      </Container>
    </section>
  );
}
