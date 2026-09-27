import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { AnalyticsProvider } from "@/components/analytics-provider";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Disney & Universal Resort Availability Alerts & Rates - Room Genie",
  description:
    "Get a text when your sold-out Disney or Universal Orlando room opens up or drops in price, and compare live rates across Disney World, Disneyland, Aulani, Disney Cruise Line, and Universal Orlando. 50% off your first purchase with code SOCIAL50.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Room Genie — Never Miss Your Dream Disney Room",
    description:
      "Availability and price-drop alerts plus live rate comparisons for Disney and Universal Orlando. 50% off your first purchase with code SOCIAL50.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>
        <AnalyticsProvider>{children}</AnalyticsProvider>
      </body>
    </html>
  );
}
