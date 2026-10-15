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
  // Title ko unique aur search-friendly banaya gaya hai
  title: "Who We Are & Our Mission | Money King Financial Services",
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
    canonical: "https://moneykingfinancial.com/about",
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
    title: "Who We Are & Our Mission | Money King Financial Services",
    description:
      "Learn about Money King Financial Services Pvt. Ltd. Discover our vision, mission, nationwide partner network, and leadership in loan distribution and financial advisory.",
    url: "https://moneykingfinancial.com/about",
    siteName: "Money King Financial Services",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Who We Are & Our Mission | Money King Financial Services",
    description:
      "Learn about Money King Financial Services Pvt. Ltd. Discover our vision, mission, nationwide partner network, and leadership in loan distribution and financial advisory.",
  },
};

export default function About() {
  // JSON-LD Organization Schema for Google Knowledge Panel & Search Console
  const jsonLdAboutSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Money King Financial Services Pvt. Ltd.",
    url: "https://moneykingfinancial.com/about",
    logo: "https://moneykingfinancial.com/logo.png",
    telephone: "+91-9876543210", // Apna official contact number dalein
    address: {
      "@type": "PostalAddress",
      streetAddress: "A-39 Sector-63",
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
      postalCode: "201301",
      addressCountry: "IN",
    },
    description:
      "Money King Financial Services Pvt. Ltd. operates as an authorized Direct Selling Agent (DSA) and loan facilitator connecting customers with RBI-regulated banks.",
  };

  return (
    <main className="w-full min-h-screen bg-white overflow-x-hidden font-sans">
      {/* Structured Data Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdAboutSchema),
        }}
      />

      {/* --- VISIBLE HERO HEADER WITH H1 (Fixed sr-only issue) --- */}
      <section className="bg-slate-900 text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            About Money King Financial Services
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Discover our mission, vision, nationwide partner network, and leadership in transparent loan distribution and financial advisory.
          </p>
        </div>
      </section>

      {/* --- SEO TEXT BLOCK (Fixes Low Text-to-HTML Ratio) --- */}
      <section className="bg-slate-50 border-b border-slate-200 py-10 px-6">
        <div className="max-w-5xl mx-auto text-slate-700 text-xs sm:text-sm leading-relaxed space-y-3 text-center">
          <p>
            Established in Noida, Uttar Pradesh, <strong>Money King Financial Services Pvt. Ltd.</strong> is dedicated to bridging the gap between borrowers and major financial institutions. We partner with over 40+ RBI-regulated banks and NBFCs to provide seamless personal loans, business loans, and customized financial solutions.
          </p>
        </div>
      </section>

      {/* --- EXISTING COMPONENTS --- */}
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