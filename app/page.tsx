import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { AnnouncementBanner } from "@/components/announcement-banner";
import { WhatsNew } from "@/components/whats-new";
import { ExploreShowcase } from "@/components/explore-showcase";
import { HowItWorks } from "@/components/how-it-works";
import { PromoTicket } from "@/components/promo-ticket";
import { Pricing } from "@/components/pricing";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AnnouncementBanner />
      <WhatsNew />
      <ExploreShowcase />
      <HowItWorks />
      <PromoTicket />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}
