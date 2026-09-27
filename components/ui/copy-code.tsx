"use client";

import { useState } from "react";
import clsx from "clsx";
import { trackCta } from "@/lib/analytics";

export function CopyCode({
  code,
  location,
  size = "sm",
  className,
}: {
  code: string;
  location: string;
  size?: "sm" | "lg";
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      // Clipboard can be blocked (insecure context, permissions) — the code stays visible either way
    }
    setCopied(true);
    trackCta(`Copy ${code}`, location);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy promo code ${code}`}
      className={clsx(
        "group inline-flex items-center gap-2 rounded-md border border-dashed border-gold/60 bg-gold/10 font-semibold text-gold-light transition-all duration-300 hover:border-gold hover:bg-gold/20",
        size === "sm" && "px-2 py-0.5 text-[11px] tracking-[0.18em]",
        size === "lg" && "px-5 py-3 text-2xl sm:text-3xl tracking-[0.2em] font-display",
        className
      )}
    >
      <span>{code}</span>
      <span
        className={clsx(
          "font-body font-medium uppercase tracking-wider text-gold/70 group-hover:text-gold transition-colors",
          size === "sm" ? "text-[9px]" : "text-[11px]"
        )}
        aria-live="polite"
      >
        {copied ? "Copied ✓" : "Copy"}
      </span>
    </button>
  );
}
