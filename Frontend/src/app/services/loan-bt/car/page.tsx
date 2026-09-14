import type { Metadata } from "next";
import React from "react";
import Image from "next/image";
import LoanCalculator from "@/app/components/LoanCalculator/LoanCalculator";
import CarLoanContent from "./CarLoanContent";
import MachineryLoanFeatures from "./MachineryLoanFeatures";
import CarLoanEligibility from "./CarLoanEligibility";
import CarLoanApplySteps from "./CarLoanApplySteps";
import CarLoanInterestCTA from "./CarLoanInterestCTA";
import CarLoanFAQs from "./CarLoanFAQs";

// --- COMPLETE SEO METADATA ---
export const metadata: Metadata = {
  title: "Car Loan in India | Rates, Eligibility & Calculator",
  description:
    "Apply for a car loan in India with low interest rates and flexible EMI options. Compare top lenders, check eligibility, and get fast approval.",
  keywords: [
    "Car Loan in India",
    "Car Loan Interest Rates",
    "Car Loan Eligibility",
    "Car Loan EMI Calculator",
    "apply car loan online",
    "car loan balance transfer",
    "car loan top-up",
    "Money King Financial Services",
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
    title: "Car Loan in India: Interest Rates, Eligibility & EMI Calculator",
    description:
      "Apply for a car loan in India with low interest rates and flexible EMI options. Compare top lenders, check eligibility, and get fast approval.",
    siteName: "Money King Financial Services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Loan in India: Interest Rates, Eligibility & EMI Calculator",
    description:
      "Apply for a car loan in India with low interest rates and flexible EMI options. Compare top lenders, check eligibility, and get fast approval.",
  },
};

export default function CarLoanHero() {
  return (
    <main className="w-full bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full h-[500px] md:h-auto md:aspect-15/9 lg:aspect-15/6">
          <Image
            src="/images/bt/car5.jpeg"
            alt="Car Loan in India: Interest Rates, Eligibility & EMI Calculator"
            fill
            className="object-cover object-[70%_center] md:object-center transition-all duration-500"
            priority
          />

          {/* --- TEXT OVERLAY --- */}
          <div className="absolute inset-0 flex items-center bg-gradient-to-t from-black/80 via-black/40 to-transparent md:bg-black/30">
            <div className="container mx-auto px-6 md:px-12">
              <div className="max-w-xl text-left text-white">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight drop-shadow-lg">
                  Car Loan in India: Interest Rates, Eligibility & EMI Calculator
                </h1>
                <p className="mt-4 text-base md:text-xl font-medium drop-shadow-md opacity-90 leading-relaxed max-w-[320px] md:max-w-full">
                  Apply for a car loan in India with low interest rates and flexible EMI options. Compare top lenders, check eligibility, and get fast approval.
                </p>

                {/* Mobile specific Apply Button */}
                <div className="mt-6 md:hidden">
                  <button className="bg-yellow-400 text-black font-bold px-8 py-3 rounded-full text-sm shadow-lg active:scale-95 transition-transform">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTIONS --- */}
      <div className="relative z-20 bg-white space-y-16 md:space-y-24 py-8 md:py-45 mt-30 md:-mt-15">
        <LoanCalculator />
      </div>
      <div className="relative z-20 bg-white space-y-16 md:space-y-24 py-8 md:py-20 mt-30 md:-mt-24">
        <CarLoanContent />
      </div>
      <div className="relative z-20 space-y-16 md:space-y-24 py-8 md:py-10 -mt-10 md:-mt-30">
        <MachineryLoanFeatures />
      </div>
      <div className="relative z-20 space-y-16 md:space-y-24 py-8 md:py-20 -mt-10 md:-mt-24">
        <CarLoanEligibility />
      </div>
      <div className="relative z-20 space-y-16 md:space-y-24 py-8 md:py-20 -mt-10 md:-mt-40">
        <CarLoanApplySteps />
      </div>
      <div className="relative z-20 bg-white space-y-16 md:space-y-24 py-8 md:py-20 -mt-10 md:-mt-24">
        <CarLoanInterestCTA />
      </div>
      <div className="relative z-20 bg-white space-y-16 md:space-y-24 py-8 md:py-20 -mt-10 md:-mt-30">
        <CarLoanFAQs />
      </div>
    </main>
  );
}