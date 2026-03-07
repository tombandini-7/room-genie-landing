"use client";

import Script from "next/script";
import { useEffect } from "react";
import {
  GA_MEASUREMENT_ID,
  trackSectionView,
  trackScrollDepth,
  trackOutboundClick,
  trackAppNavigation,
} from "@/lib/analytics";

const OBSERVED_SECTIONS = ["hero", "features", "pricing", "faq", "footer"];
const SCROLL_THRESHOLDS = [25, 50, 75, 90];

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Section observer
    const seen = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !seen.has(entry.target.id)) {
            seen.add(entry.target.id);
            trackSectionView(entry.target.id);
          }
        }
      },
      { threshold: 0.5 }
    );

    for (const id of OBSERVED_SECTIONS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    // Scroll depth
    const firedDepths = new Set<number>();
    function onScroll() {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;
      const percent = Math.round((window.scrollY / scrollHeight) * 100);

      for (const threshold of SCROLL_THRESHOLDS) {
        if (percent >= threshold && !firedDepths.has(threshold)) {
          firedDepths.add(threshold);
          trackScrollDepth(threshold);
        }
      }

      if (firedDepths.has(90)) {
        window.removeEventListener("scroll", onScroll);
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });

    // Outbound click delegation
    function onClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement).closest?.("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.href;
      if (!href) return;

      // Skip same-origin, mailto, tel
      try {
        const url = new URL(href, window.location.origin);
        if (url.origin === window.location.origin) return;
        if (url.protocol === "mailto:" || url.protocol === "tel:") return;

        const text = anchor.textContent?.trim() || "";

        // app.roomgenie.travel handled via trackAppNavigation in components
        if (url.hostname === "app.roomgenie.travel") {
          trackAppNavigation(href, text);
          return;
        }

        trackOutboundClick(href, text);
      } catch {
        // invalid URL, skip
      }
    }
    document.addEventListener("click", onClick);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
      {children}
    </>
  );
}
