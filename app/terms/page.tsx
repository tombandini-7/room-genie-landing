import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Container } from "@/components/ui/container";
import { TermsContent } from "@/components/legal/terms-content";

export const metadata: Metadata = {
  title: "Terms & Conditions — Room Genie",
  description:
    "Terms and Conditions for Room Genie, a Walt Disney World resort availability monitoring and price comparison service operated by Lucidia Solutions, LLC.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        <Container className="max-w-3xl">
          <h1
            className="font-display text-3xl sm:text-4xl font-semibold text-gold-gradient"
            style={{ letterSpacing: "-0.025em" }}
          >
            Terms &amp; Conditions
          </h1>
          <div className="mt-8">
            <TermsContent />
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
