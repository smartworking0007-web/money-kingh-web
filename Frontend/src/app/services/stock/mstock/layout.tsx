import type { Metadata } from "next";
import React from "react";

// --- COMPLETE SEO METADATA (Title: exactly 55 characters including spaces) ---
export const metadata: Metadata = {
  title: "Open Free Demat Account Online | Money King Services IN",
  description:
    "Open a free Demat account online with m.Stock. Enjoy zero brokerage on delivery, mutual funds, and IPOs with competitive flat ₹5 brokerage on Intraday and F&O trading.",
  keywords: [
    "Open Free Demat Account Online",
    "mStock zero brokerage delivery",
    "free demat account opening",
    "flat 5 brokerage intraday",
    "F&O trading account India",
    "mStock demat account",
    "Money King Financial Services",
    "Money King",
  ],
  authors: [{ name: "Money King Financial Services" }],
  creator: "Money King Financial Services",
  publisher: "Money King Financial Services",
  alternates: {
    canonical: "https://moneykingfinancial.com/services/stock/mstock",
    languages: {
      en: "https://moneykingfinancial.com/services/stock/mstock",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Open Free Demat Account Online with m.Stock | Zero Brokerage Delivery | Money King",
    description:
      "Open a free Demat account online with m.Stock. Enjoy zero brokerage on delivery, mutual funds, and IPOs with competitive flat ₹5 brokerage on Intraday and F&O trading.",
    url: "https://moneykingfinancial.com/services/stock/mstock",
    siteName: "Money King Financial Services",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Open Free Demat Account Online with m.Stock | Zero Brokerage Delivery | Money King",
    description:
      "Open a free Demat account online with m.Stock. Enjoy zero brokerage on delivery, mutual funds, and IPOs with competitive flat ₹5 brokerage on Intraday and F&O trading.",
  },
};

export default function MStockLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}