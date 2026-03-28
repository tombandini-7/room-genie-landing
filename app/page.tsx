import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { AnnouncementBanner } from "@/components/announcement-banner";
import { ExploreShowcase } from "@/components/explore-showcase";
import { HowItWorks } from "@/components/how-it-works";
import { Pricing } from "@/components/pricing";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AnnouncementBanner />
      <ExploreShowcase />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}
