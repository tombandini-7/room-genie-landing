"use client";

import { Container } from "./ui/container";
import { trackCta } from "@/lib/analytics";

const LOGO_URL =
  "https://xrcwdxbwtnmxyahbgrlw.supabase.co/storage/v1/object/public/app-assets/logos/Room%20Genie%20-%20Small%20-%20Transparent.png";

const links = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Contact", href: "mailto:support@lucidia.travel" },
];

export function Footer() {
  return (
    <footer id="footer" className="py-16 border-t border-white/[0.06]">
      <Container className="flex flex-col items-center gap-7">
        <img
          src={LOGO_URL}
          alt="Room Genie"
          className="h-10 w-auto opacity-40"
        />

        <div className="flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => trackCta(link.label, "footer")}
              className="text-xs text-text-tertiary hover:text-gold transition-colors duration-300 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="text-xs text-text-tertiary">
          &copy; {new Date().getFullYear()} Room Genie. All rights reserved.
        </p>

        <p className="max-w-2xl text-center text-[11px] leading-relaxed text-text-tertiary/70">
          Room Genie is an independent service and is not affiliated with,
          endorsed by, or sponsored by The Walt Disney Company, Disney
          Destinations, LLC, or any of their subsidiaries or affiliates. All
          Disney properties, ships, character names, and related marks are
          trademarks of The Walt Disney Company. Pricing is retrieved from
          publicly available Disney sources at the time of search; always
          verify directly with Disney before booking.
        </p>
      </Container>
    </footer>
  );
}
