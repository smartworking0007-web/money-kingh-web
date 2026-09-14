import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { Typography } from "@/app/components/ui/Typography";
import LoanCalculator from "@/app/components/LoanCalculator/LoanCalculator";
import FinancialPartners from "@/app/components/FinancialPartners/FinancialPartners";
import MachineryLoanInfo from "./MachineryLoanInfo";
import MachineryFeatures from "./MachineryFeatures";
import MachineryEligibility from "./MachineryEligibility";
import MachineryLoanRatesBanner from "./MachineryLoanRatesBanner";
import DocumentsAccordionPage from "./DocumentsRequiredPage";
// import MachineryProcess from "./MachineryProcess";
import ProductSegmentation from "./ProductSegmentation";
import MachineryFAQ from "./MachineryFAQ";

// --- COMPLETE SEO METADATA ---
export const metadata: Metadata = {
  // Exactly 55 characters including spaces
  title: "Machinery Loan in India: Rates | Money King Financials",
  description:
    "Get a machinery loan in India for new or used equipment. Check machinery finance interest rates, eligibility, documents, loan amount, and repayment tenure.",
  keywords: [
    "Machinery Loan in India",
    "machinery finance interest rates",
    "equipment loan eligibility",
    "new machinery financing",
    "used equipment loan India",
    "machinery loan documents required",
    "commercial equipment loan",
    "Money King Financial Services",
    "Money King",
  ],
  authors: [{ name: "Money King Financial Services" }],
  creator: "Money King Financial Services",
  publisher: "Money King Financial Services",
  alternates: {
    canonical: "https://moneykingfinancial.com/services/loan/secured/machinery",
    languages: {
      en: "https://moneykingfinancial.com/services/loan/secured/machinery",
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
    title: "Machinery Loan in India | Check Interest Rate & Eligibility",
    description:
      "Get a machinery loan in India for new or used equipment. Check machinery finance interest rates, eligibility, documents, loan amount, and repayment tenure.",
    url: "https://moneykingfinancial.com/services/loan/secured/machinery",
    siteName: "Money King Financial Services",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Machinery Loan in India | Check Interest Rate & Eligibility",
    description:
      "Get a machinery loan in India for new or used equipment. Check machinery finance interest rates, eligibility, documents, loan amount, and repayment tenure.",
  },
};

interface StatItem {
  label: string;
  value: string;
  icon: React.ReactNode;
}

export default function MachineryLoanPage() {
  const data = {
    title: "Machinery Loan in India",
    description:
      "Get a machinery loan in India for new or used equipment. Check machinery finance interest rates, eligibility, documents, loan amount, and repayment tenure.",
    stats: [] as StatItem[],
    features: [] as string[],
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image Section */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Machinery/Machinery.jpeg"
            alt="Machinery Loan in India"
            fill
            className="object-cover object-[80%_center] md:object-center brightness-[0.7]"
            priority
          />
          <div className="absolute inset-0 bg-black/50 md:bg-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-10">
              {/* --- H1 HEADING --- */}
              <Typography
                variant="h1"
                as="h1"
                className="text-white font-bold! text-3xl! md:text-6xl! mb-6 mt-0! leading-tight!"
              >
                {data.title}
              </Typography>

              <Typography
                variant="b1"
                className="text-white/90 mb-10 text-base md:text-xl max-w-2xl mt-0!"
              >
                {data.description}
              </Typography>

              {/* Stats & Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                {data.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20"
                  >
                    <div className="text-white mb-2">{stat.icon}</div>
                    <div className="text-xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-white/70 uppercase font-bold">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- H2 SECTION --- */}
      <section className="w-full pt-12 md:pt-16 pb-4 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Key Features of <span className="text-blue-600">Machinery Finance in India</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base mt-3 max-w-2xl mx-auto">
            Upgrade your manufacturing infrastructure with competitive interest rates, customized repayment tenure, and hassle-free documentation.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <div className="relative z-20 bg-white space-y-16 md:space-y-24 py-8 md:py-15">
        <MachineryLoanInfo />
      </div>
      <div className="relative z-20 bg-white space-y-16 md:space-y-24 py-8 md:py-15">
        <LoanCalculator />
      </div>
      <div className="relative z-20 bg-white space-y-16 md:space-y-24 py-8 md:py-10">
        <MachineryFeatures />
      </div>
      <div className="relative z-20 bg-white space-y-16 md:space-y-24 py-8 md:py-20 -mt-10 md:-mt-30">
        <MachineryEligibility />
      </div>

      <div className="relative z-20 space-y-16 md:space-y-24 py-8 md:py-20 -mt-20 md:-mt-50">
        <DocumentsAccordionPage />
      </div>

      {/* <div className="relative z-20 space-y-16 md:space-y-24 py-8 md:py-20 -mt-10 md:-mt-30">
        <MachineryProcess />
      </div> */}

      <div className="relative z-20 space-y-16 md:space-y-24 py-8 md:py-20 -mt-20 md:-mt-50">
        <MachineryLoanRatesBanner />
      </div>

      <div className="relative z-20 space-y-16 md:space-y-24 py-8 md:py-20 -mt-10 md:-mt-50">
        <ProductSegmentation />
      </div>

      <div className="relative z-20 space-y-16 md:space-y-24 py-8 md:py-20 -mt-10 md:-mt-50">
        <FinancialPartners />
      </div>

      <div className="relative z-20 space-y-16 md:space-y-24 py-8 md:py-20 -mt-10 md:-mt-35">
        <MachineryFAQ />
      </div>
    </main>
  );
}