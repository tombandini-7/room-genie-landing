import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Container } from "@/components/ui/container";
import { PrivacyContent } from "@/components/legal/privacy-content";

export const metadata: Metadata = {
  title: "Privacy Policy — Room Genie",
  description:
    "Privacy Policy for Room Genie, a Walt Disney World resort availability monitoring and price comparison service operated by Lucidia Solutions, LLC.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        <Container className="max-w-3xl">
          <h1
            className="font-display text-3xl sm:text-4xl font-semibold text-gold-gradient"
            style={{ letterSpacing: "-0.025em" }}
          >
            Privacy Policy
          </h1>
          <div className="mt-8">
            <PrivacyContent />
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
