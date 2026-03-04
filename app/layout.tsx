import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
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
  title: "Room Genie — Walt Disney World Resort Availability Alerts & Price Comparison",
  description:
    "Monitor Walt Disney World resort availability every 30 minutes and compare live pricing across 10+ resorts. Get notified instantly when your dream Disney room opens up.",
  openGraph: {
    title: "Room Genie — Never Miss Your Dream Disney Room",
    description:
      "Monitor Walt Disney World resort availability every 30 minutes and compare live pricing across 10+ resorts.",
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
      <body>{children}</body>
    </html>
  );
}
