import React from "react";
import type { Metadata } from "next";
import CompanyIntro from "../components/stats/CompanyIntro";
import ServiceGrid from "../components/Service/ServiceGrid";
import FinancialPartners from "../components/FinancialPartners/FinancialPartners";
import MissionVision from "./MissionVision";
import AboutServiceGrid from "./AboutServiceGrid";
import Hero from "./Hero";
import { AboutTestimonialCard } from "./AboutTestimonialCard";
import WhyChoose from "../components/Choose/WhyChoose";

// --- COMPLETE SEO METADATA ---
export const metadata: Metadata = {
  title: "About Us | Money King Financial Services",
  description:
    "Learn about Money King Financial Services Pvt. Ltd. Discover our vision, mission, nationwide partner network, and leadership in loan distribution and financial advisory.",
  keywords: [
    "About Money King Financial Services",
    "financial services India",
    "loan distribution network",
    "financial advisory India",
    "DSA partner network",
    "wealth management consultants",
    "Money King Financial Services Pvt Ltd",
    "Money King",
  ],
  authors: [{ name: "Money King Financial Services" }],
  creator: "Money King Financial Services",
  publisher: "Money King Financial Services",
  alternates: {
    canonical: "/about",
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
    title: "About Us | Money King Financial Services",
    description:
      "Learn about Money King Financial Services Pvt. Ltd. Discover our vision, mission, nationwide partner network, and leadership in loan distribution and financial advisory.",
    url: "https://moneykingfinancial.com/about",
    siteName: "Money King Financial Services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Money King Financial Services",
    description:
      "Learn about Money King Financial Services Pvt. Ltd. Discover our vision, mission, nationwide partner network, and leadership in loan distribution and financial advisory.",
  },
};

export default function About() {
  return (
    <main className="w-full min-h-screen bg-white overflow-x-hidden">
      <MissionVision />

      <div className="w-full flex flex-col">
        {/* Company Intro Wrapper */}
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <CompanyIntro />
        </div>

        <AboutServiceGrid />
        <Hero />
        <AboutTestimonialCard />
        <div className="w-full">
          <FinancialPartners />
        </div>

        {/* Baki sections */}
        <ServiceGrid />
        <div className="mt-12 md:mt-24 mb-16 md:mb-32">
          <WhyChoose />
        </div>
      </div>
    </main>
  );
}