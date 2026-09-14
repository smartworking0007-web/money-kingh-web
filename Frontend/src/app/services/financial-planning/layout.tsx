import type { Metadata } from "next";
import React from "react";

// --- COMPLETE SEO METADATA (Title: exactly 55 characters including spaces) ---
export const metadata: Metadata = {
  title: "Financial Planning & Advisory Services | Money King Hub",
  description:
    "Expert financial planning and advisory services. Get customized wealth management, risk consulting, and strategic investment guidance tailored to your goals.",
  keywords: [
    "Financial Planning and Advisory Services",
    "wealth management consultants India",
    "strategic investment guidance",
    "risk advisory services",
    "financial portfolio management",
    "retirement planning services",
    "Money King Financial Services",
    "Money King",
  ],
  authors: [{ name: "Money King Financial Services" }],
  creator: "Money King Financial Services",
  publisher: "Money King Financial Services",
  alternates: {
    canonical: "https://moneykingfinancial.com/services/financial-planning",
    languages: {
      en: "https://moneykingfinancial.com/services/financial-planning",
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
    title: "Professional Financial Planning & Advisory Services | Money King",
    description:
      "Expert financial planning and advisory services. Get customized wealth management, risk consulting, and strategic investment guidance tailored to your goals.",
    url: "https://moneykingfinancial.com/services/financial-planning",
    siteName: "Money King Financial Services",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Financial Planning & Advisory Services | Money King",
    description:
      "Expert financial planning and advisory services. Get customized wealth management, risk consulting, and strategic investment guidance tailored to your goals.",
  },
};

export default function FinancialPlanningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}