"use client";

import { CopyCode } from "./ui/copy-code";
import { PROMO_CODE, PROMO_PERCENT } from "@/lib/promo";
import { SIGNUP_URL } from "@/lib/urls";
import { trackCta, trackAppNavigation } from "@/lib/analytics";

export function PromoBar() {
  return (
    <div className="relative overflow-hidden border-b border-gold/25 bg-primary-dark">
      {/* Slow gold sheen sweeping across the bar */}
      <div className="promo-sheen absolute inset-y-0 -left-1/3 w-1/3 pointer-events-none" />

      <div className="relative flex items-center justify-center gap-2 sm:gap-3 px-4 py-2 text-[11px] sm:text-xs text-text-primary">
        <span className="text-gold" aria-hidden>✦</span>
        <span>
          <span className="font-semibold text-gold-light">{PROMO_PERCENT}% off</span>
          <span className="hidden sm:inline"> your first purchase</span>
          <span className="sm:hidden"> first purchase</span>
        </span>
        <CopyCode code={PROMO_CODE} location="promo-bar" />
        <a
          href={SIGNUP_URL}
          onClick={() => {
            trackCta("Claim Offer", "promo-bar");
            trackAppNavigation(SIGNUP_URL, "Claim Offer");
          }}
          className="hidden sm:inline font-medium text-gold hover:text-gold-light underline-offset-4 hover:underline transition-colors"
        >
          Claim offer →
        </a>
      </div>
    </div>
  );
}
