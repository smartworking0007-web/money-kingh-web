import type { Metadata } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import PersonalLoanBTContent from "./PersonalLoanBTContent";
import LoanCalculator from "@/app/components/LoanCalculator/LoanCalculator";
import PersonalLoanBTInfo from "./PersonalLoanBTInfo";
import PersonalLoanBTBenefits from "./PersonalLoanBTBenefits";
import PersonalLoanBTEligibility from "./PersonalLoanBTEligibility";
import PersonalLoanBTDocuments from "./PersonalLoanBTDocuments";
import PersonalLoanBTInterest from "./PersonalLoanBTInterest";
import PersonalLoanBTFees from "./PersonalLoanBTFees";
import PersonalLoanBTTarget from "./PersonalLoanBTTarget";
import PersonalLoanBTSteps from "./PersonalLoanBTSteps";
import PersonalLoanBTWhyChoose from "./PersonalLoanBTWhyChoose";
import PersonalLoanCategories from "./PersonalLoanCategories";
import PersonalLoanBTFAQ from "./PersonalLoanBTFAQ";

// --- COMPLETE SEO METADATA ---
export const metadata: Metadata = {
  title: "Personal Loan Balance Transfer & Top-Up | Money King",
  description:
    "Transfer your existing personal loan to leading banks at lower interest rates. Reduce monthly EMIs, consolidate debt, and get instant top-up loan options.",
  keywords: [
    "Personal Loan Balance Transfer",
    "Top-Up Loans",
    "personal loan balance transfer India",
    "lower interest rate personal loan",
    "reduce monthly EMI",
    "debt consolidation",
    "instant top up loan",
    "Money King Financial Services",
    "Money King",
  ],
  authors: [{ name: "Money King Financial Services" }],
  creator: "Money King Financial Services",
  publisher: "Money King Financial Services",
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
    title: "Personal Loan Balance Transfer & Top-Up Loans | Money King",
    description:
      "Transfer your existing personal loan to leading banks at lower interest rates. Reduce monthly EMIs, consolidate debt, and get instant top-up loan options.",
    siteName: "Money King Financial Services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Loan Balance Transfer & Top-Up Loans | Money King",
    description:
      "Transfer your existing personal loan to leading banks at lower interest rates. Reduce monthly EMIs, consolidate debt, and get instant top-up loan options.",
  },
};

export default function PersonalLoanBTPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* --- HERO SECTION WITH VISIBLE H1 --- */}
      <section className="relative w-full h-[500px] md:h-[600px] flex items-center overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/bt/perbt.jpg"
            alt="Personal Loan Balance Transfer & Top-Up Loans"
            fill
            className="object-cover object-right"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-white via-white/95 to-transparent md:via-white/70" />
        </div>

        {/* --- H1 HEADING & HERO CONTENT --- */}
        <div className="container mx-auto px-6 md:px-20 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-4 tracking-tight">
              Personal Loan Balance Transfer &{" "}
              <span className="text-blue-600">Top-Up Loans</span>
            </h1>

            <p className="text-slate-700 text-sm sm:text-base md:text-lg mb-8 font-medium leading-relaxed">
              Transfer your existing personal loan to leading banks at lower
              interest rates. Reduce monthly EMIs, consolidate debt, and get
              instant top-up loan options.
            </p>

            <Link
              href="http://application.dsacrm.com/e22787fa-e05f-4643-a0af-d4a5b98889ba/apply"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 md:px-10 md:py-4 rounded-xl shadow-lg transition-all active:scale-95 cursor-pointer text-sm md:text-base"
            >
              Apply for Balance Transfer
            </Link>
          </div>
        </div>
      </section>

      {/* --- H2 SECTION --- */}
      <section className="w-full pt-12 md:pt-16 pb-4 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Benefits of{" "}
            <span className="text-blue-600">
              Personal Loan Balance Transfer
            </span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base mt-3 max-w-2xl mx-auto">
            Switch your high-interest personal loan to lower rates, optimize your
            cash flow, and access additional funding through affordable top-up
            loans.
          </p>
        </div>
      </section>

      {/* --- CONTENT SECTIONS --- */}
      <section className="bg-white py-10 md:py-5">
        <PersonalLoanBTContent />
      </section>

      <section className="bg-white py-20 md:py-30">
        <LoanCalculator />
      </section>

      <section className="bg-white py-10 md:py-5">
        <PersonalLoanBTInfo />
      </section>

      <section className="bg-white py-10 md:py-5">
        <PersonalLoanBTBenefits />
      </section>

      <section className="bg-white py-10 md:py-5">
        <PersonalLoanBTEligibility />
      </section>

      <section className="bg-white py-10 md:py-5">
        <PersonalLoanBTDocuments />
      </section>

      <section className="bg-white py-10 md:py-5">
        <PersonalLoanBTInterest />
      </section>

      <section className="bg-white py-10 md:py-5">
        <PersonalLoanBTFees />
      </section>

      <section className="bg-white py-10 md:py-5">
        <PersonalLoanBTTarget />
      </section>

      <section className="bg-white py-10 md:py-5">
        <PersonalLoanBTSteps />
      </section>

      <section className="bg-white py-10 md:py-5">
        <PersonalLoanBTWhyChoose />
      </section>

      <section className="bg-white py-10 md:py-5">
        <PersonalLoanCategories />
      </section>

      <section className="bg-white py-10 md:py-5">
        <PersonalLoanBTFAQ />
      </section>
    </main>
  );
}