import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <Container className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2">
          <img
            src="https://xrcwdxbwtnmxyahbgrlw.supabase.co/storage/v1/object/public/app-assets/logos/Room%20Genie%20-%20Small%20-%20Transparent.png"
            alt="Room Genie"
            width={24}
            height={24}
            className="h-6 w-6"
          />
          <span className="font-display text-sm font-semibold text-white/40">
            Room Genie
          </span>
        </div>

        <div className="flex gap-6 text-xs text-white/40">
          <a href="#" className="transition-colors hover:text-white/60">
            Privacy
          </a>
          <a href="#" className="transition-colors hover:text-white/60">
            Terms
          </a>
          <a href="mailto:support@roomgenie.travel" className="transition-colors hover:text-white/60">
            Contact
          </a>
        </div>

        <p className="text-xs text-white/30">
          &copy; {new Date().getFullYear()} Room Genie. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
