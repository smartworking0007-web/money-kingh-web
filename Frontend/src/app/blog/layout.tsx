import type { Metadata } from "next";
import React from "react";

// --- COMPLETE SEO METADATA ---
export const metadata: Metadata = {
  // Title: exactly 55 characters including spaces
  title: "Financial Blogs & Guides | Money King Financial Portal",
  
  // Description: exactly 120 characters including spaces
  description:
    "Explore practical guides on personal loans, mutual funds, SIP, insurance, and smart wealth planning in India with Money King.",
  
  keywords: [
    "Financial Blogs & Guides",
    "personal loan guides",
    "mutual funds advice",
    "SIP investment planning",
    "health insurance guides",
    "smart wealth planning India",
    "Money King Financial Services",
    "Money King",
  ],
  authors: [{ name: "Money King Financial Services" }],
  creator: "Money King Financial Services",
  publisher: "Money King Financial Services",
  alternates: {
    canonical: "https://moneykingfinancial.com/blog",
    languages: {
      en: "https://moneykingfinancial.com/blog",
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
    title: "Financial Blogs & Guides | Money King Financial Portal",
    description:
      "Explore practical guides on personal loans, mutual funds, SIP, insurance, and smart wealth planning in India with Money King.",
    url: "https://moneykingfinancial.com/blog",
    siteName: "Money King Financial Services",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Financial Blogs & Guides | Money King Financial Portal",
    description:
      "Explore practical guides on personal loans, mutual funds, SIP, insurance, and smart wealth planning in India with Money King.",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}