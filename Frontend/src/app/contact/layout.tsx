import type { Metadata } from "next";
import React from "react";

// --- COMPLETE SEO METADATA (Title: exactly 55 characters including spaces) ---
export const metadata: Metadata = {
  title: "Contact Us Today | Money King Financial Services India",
  description:
    "Get in touch with Money King Financial Services. Reach our Mumbai headquarters or branch offices nationwide for loans, mutual funds, and insurance inquiries.",
  keywords: [
    "Contact Money King Financial Services",
    "Money King headquarters Mumbai",
    "financial services customer care",
    "loan inquiry contact number",
    "mutual funds advisory contact",
    "insurance inquiry India",
    "Money King Financial Services Pvt Ltd",
    "Money King",
  ],
  authors: [{ name: "Money King Financial Services" }],
  creator: "Money King Financial Services",
  publisher: "Money King Financial Services",
  alternates: {
    canonical: "https://moneykingfinancial.com/contact",
    languages: {
      en: "https://moneykingfinancial.com/contact",
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
    title: "Contact Us Today | Money King Financial Services India",
    description:
      "Get in touch with Money King Financial Services. Reach our Mumbai headquarters or branch offices nationwide for loans, mutual funds, and insurance inquiries.",
    url: "https://moneykingfinancial.com/contact",
    siteName: "Money King Financial Services",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us Today | Money King Financial Services India",
    description:
      "Get in touch with Money King Financial Services. Reach our Mumbai headquarters or branch offices nationwide for loans, mutual funds, and insurance inquiries.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}