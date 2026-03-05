import { Container } from "./ui/container";

const LOGO_URL =
  "https://xrcwdxbwtnmxyahbgrlw.supabase.co/storage/v1/object/public/app-assets/logos/Room%20Genie%20-%20Small%20-%20Transparent.png";

const links = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Contact", href: "mailto:support@lucidia.travel" },
];

export function Footer() {
  return (
    <footer className="py-16 border-t border-white/[0.06]">
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
              className="text-xs text-text-tertiary hover:text-gold transition-colors duration-300 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="text-xs text-text-tertiary">
          &copy; {new Date().getFullYear()} Room Genie. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
