import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Typography } from "@/app/components/ui/Typography";
import WhyChoose from "@/app/components/Choose/WhyChoose";
import LoanCalculator from "@/app/components/LoanCalculator/LoanCalculator";
import FinancialPartners from "@/app/components/FinancialPartners/FinancialPartners";
import HomeLoanContent from "./HomeLoanContent";
import HomeLoanRatesTable from "./HomeLoanRatesTable";
import FeaturesBenefits from "./FeaturesBenefits";
import TypesOfHomeLoans from "./TypesOfHomeLoans";
import HomeLoanBanner from "./HomeLoanBanner";
import HomeLoanCharges from "./HomeLoanCharges";
import HomeLoanEligibility from "./HomeLoanEligibility";
import HomeLoanDocuments from "./HomeLoanDocuments";
import ApplyHomeLoan from "./ApplyHomeLoan";
import HomeLoanRejection from "./HomeLoanRejection";
import HomeLoanDosDonts from "./HomeLoanDosDonts";
import HomeLoanTips from "./HomeLoanTips";
import HomeLoanFAQ from "./HomeLoanFAQ";

// --- SEO METADATA (Title: exactly 55 characters including spaces) ---
export const metadata: Metadata = {
  title: "Home Loans in India: Compare Rates | Money King India",
  description:
    "Compare home loans from top banks & NBFCs with Money King. Check low interest rates, eligibility criteria, EMI calculation, and get fast approval.",
  keywords: [
    "Home Loans in India",
    "Compare Interest Rates",
    "home loan eligibility criteria",
    "home loan EMI calculator",
    "apply home loan online",
    "low interest home loans",
    "housing finance India",
    "Money King Financial Services",
    "Money King",
  ],
  authors: [{ name: "Money King Financial Services" }],
  creator: "Money King Financial Services",
  publisher: "Money King Financial Services",
  alternates: {
    canonical: "https://moneykingfinancial.com/services/loan/secured/home",
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
    title: "Home Loans in India: Compare Interest Rates & Apply Online",
    description:
      "Compare home loans from top banks & NBFCs with Money King. Check low interest rates, eligibility criteria, EMI calculation, and get fast approval.",
    url: "https://moneykingfinancial.com/services/loan/secured/home",
    siteName: "Money King Financial Services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Loans in India: Compare Interest Rates & Apply Online",
    description:
      "Compare home loans from top banks & NBFCs with Money King. Check low interest rates, eligibility criteria, EMI calculation, and get fast approval.",
  },
};

export default function HomeLoanPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[450px] md:h-[85vh] bg-[#73c7d3] overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/loanpage/home.jpg"
            alt="Home Loans in India: Compare Interest Rates & Apply Online"
            fill
            className="object-cover object-left md:object-center transition-all duration-700 scale-100"
            priority
            quality={95}
          />

          {/* Mobile Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent md:bg-transparent" />
        </div>

        {/* Hero Content Wrapper */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full h-full flex items-center justify-center md:justify-end">
          <div className="max-w-[340px] md:max-w-xl flex flex-col items-center md:items-start text-center md:text-left mt-16 md:mt-0">
            {/* --- H1 HEADING --- */}
            <Typography
              variant="h2"
              as="h1"
              className="text-white md:text-[#1e293b] mb-4 font-black leading-[1.1] text-2xl sm:text-4xl md:text-[54px] drop-shadow-2xl md:drop-shadow-none"
            >
              Home Loans in India: Compare Interest Rates & Apply Online
            </Typography>

            {/* --- DESCRIPTION --- */}
            <Typography
              variant="s1"
              as="p"
              className="text-white/90 md:text-[#334155] mb-8 font-medium leading-relaxed text-xs md:text-lg max-w-[260px] md:max-w-lg"
            >
              Compare home loans from top banks & NBFCs with Money King. Check low interest rates, eligibility criteria, EMI calculation, and get fast approval.
            </Typography>

            <Link
              href="http://application.dsacrm.com/e22787fa-e05f-4643-a0af-d4a5b98889ba/apply"
              className="w-full sm:w-auto"
            >
              <button className="w-full sm:w-64 bg-[#6CDAE7] hover:bg-[#5bc8d5] text-white px-10 py-3 md:px-12 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all shadow-2xl active:scale-95 cursor-pointer border-none">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* --- CONTENT SECTIONS --- */}
      <div className="relative z-20 bg-white">
        <section className="py-10">
          <HomeLoanContent />
        </section>

        <section className="py-12 border-b border-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <HomeLoanRatesTable />
          </div>
        </section>

        <section className="py-30 md:py-35">
          <div className="max-w-7xl mx-auto px-4">
            <LoanCalculator />
          </div>
        </section>

        <div className="-mt-30 md:-mt-35">
          <FeaturesBenefits />
        </div>

        <div className="-mt-5 md:-mt-15">
          <TypesOfHomeLoans />
        </div>

        <HomeLoanBanner />
        <HomeLoanCharges />
        <HomeLoanEligibility />
        <HomeLoanDocuments />
        <ApplyHomeLoan />
        <HomeLoanRejection />
        <HomeLoanDosDonts />
        <HomeLoanTips />
        <HomeLoanFAQ />

        <div className="-mt-5 md:-mt-10">
          <FinancialPartners />
        </div>

        <div className="mt-10 md:mt-5 mb-12 md:mb-20">
          <WhyChoose />
        </div>
      </div>
    </main>
  );
}