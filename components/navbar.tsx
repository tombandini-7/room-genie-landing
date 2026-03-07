"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "./ui/container";
import { Button } from "./ui/button";
import { SIGNUP_URL, LOGIN_URL } from "@/lib/urls";
import { trackCta, trackAppNavigation } from "@/lib/analytics";

const LOGO_URL =
  "https://xrcwdxbwtnmxyahbgrlw.supabase.co/storage/v1/object/public/app-assets/logos/Room%20Genie%20-%20Small%20-%20Transparent.png";

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(6, 30, 41, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
      }}
    >
      <Container>
        <div
          className="flex items-center justify-between transition-all duration-500"
          style={{ padding: scrolled ? "0.5rem 0" : (isMobile ? "0.75rem 0" : "1.25rem 0") }}
        >
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/" className="shrink-0">
            <motion.img
              src={LOGO_URL}
              alt="Room Genie"
              animate={{ height: scrolled ? (isMobile ? 36 : 50) : (isMobile ? 48 : 100) }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="w-auto"
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <span className="w-px h-4 bg-white/15" />
            <a
              href={LOGIN_URL}
              onClick={() => { trackCta("Sign In", "navbar"); trackAppNavigation(LOGIN_URL, "Sign In"); }}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-300"
            >
              Sign In
            </a>
            <Button href={SIGNUP_URL} className="text-xs px-5 py-2.5" onClick={() => { trackCta("Get Started", "navbar"); trackAppNavigation(SIGNUP_URL, "Get Started"); }}>
              Get Started
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-6 h-5 flex flex-col justify-between"
            aria-label="Toggle menu"
          >
            <span
              className="block h-px w-full bg-white/80 transition-all duration-300 origin-center"
              style={{
                transform: mobileOpen ? "translateY(8px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="block h-px w-full bg-white/80 transition-all duration-300"
              style={{ opacity: mobileOpen ? 0 : 1 }}
            />
            <span
              className="block h-px w-full bg-white/80 transition-all duration-300 origin-center"
              style={{
                transform: mobileOpen ? "translateY(-8px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:hidden overflow-hidden border-t border-white/[0.06]"
            style={{
              backgroundColor: "rgba(6, 30, 41, 0.95)",
              backdropFilter: "blur(20px)",
            }}
          >
            <Container className="py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-300 py-2"
                >
                  {link.label}
                </a>
              ))}
              <span className="h-px w-full bg-white/[0.06]" />
              <a
                href={LOGIN_URL}
                onClick={() => { setMobileOpen(false); trackCta("Sign In", "navbar"); trackAppNavigation(LOGIN_URL, "Sign In"); }}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-300 py-2"
              >
                Sign In
              </a>
              <Button
                href={SIGNUP_URL}
                className="mt-2 w-full text-center"
                onClick={() => { trackCta("Get Started", "navbar"); trackAppNavigation(SIGNUP_URL, "Get Started"); }}
              >
                Get Started
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
