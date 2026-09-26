import type { Metadata } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "@/app/components/ui/Typography";
import { Button } from "@/app/components/ui/Button";
import GoldLoanContent from "./GoldLoanContent";
import LoanCalculator from "@/app/components/LoanCalculator/LoanCalculator";
import GoldLoanFeatures from "./GoldLoanFeatures";
import GoldLoanDetails from "./GoldLoanDetails";
import GoldLoanRates from "./GoldLoanRates";
import GoldLoanEligibility from "./GoldLoanEligibility";
import ApplyGoldLoan from "./ApplyGoldLoan";
import GoldLoanProcess from "./GoldLoanProcess";
import FAQPage from "../car/FAQPage";
import GoldLoanTypes from "./GoldLoanTypes";

// --- COMPLETE SEO METADATA ---
export const metadata: Metadata = {
  title: "Gold Loan | Low Interest Rates & Instant Approval",
  description:
    "Get instant gold loan against jewellery or coins with Money King. Compare low interest rates, check per gram rate, and get instant approval.",
  keywords: [
    "Gold Loan in India",
    "Gold Loan Interest Rates",
    "Per Gram Rate",
    "Gold Loan Eligibility",
    "instant gold loan",
    "gold loan against jewellery",
    "gold loan documents",
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
    title: "Gold Loan | Low Interest Rates & Instant Approval",
    description:
      "Get instant gold loan against jewellery or coins with Money King. Compare low interest rates, check per gram rate, and get instant approval.",
    siteName: "Money King Financial Services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gold Loan | Low Interest Rates & Instant Approval",
    description:
      "Get instant gold loan against jewellery or coins with Money King. Compare low interest rates, check per gram rate, and get instant approval.",
  },
};

export default function GoldLoanPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[500px] md:h-[600px] flex items-center overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gold/gold.jpeg"
            alt="Gold Loan in India: Interest Rates, Per Gram Rate & Eligibility"
            fill
            className="object-cover object-right"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-white via-white/95 to-transparent md:via-white/40" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-10 md:px-20 relative z-10">
          <div className="max-w-[85%] md:max-w-2xl">
            {/* H1 Heading */}
            <Typography
              variant="h5"
              as="h1"
              className="text-[#004687]! text-3xl! md:text-5xl! font-bold! mb-4! mt-0! leading-tight!"
            >
              Gold Loan in India: Interest Rates, Per Gram Rate & Eligibility
            </Typography>

            <Typography
              variant="b1"
              as="p"
              className="text-slate-700! text-lg! md:text-2xl! mb-8! mt-0! font-medium!"
            >
              Get instant gold loan against jewellery or coins with Money King. Compare low interest rates, check per gram rate, and get instant approval.
            </Typography>

            <Link href="http://application.dsacrm.com/e22787fa-e05f-4643-a0af-d4a5b98889ba/apply">
              <Button
                size="lg"
                className="bg-[#004687]! hover:bg-[#003566]! rounded-xl! h-12! md:h-14! px-8! md:px-10! shadow-lg! cursor-pointer transition-colors text-white"
              >
                APPLY NOW
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="bg-white py-20 md:py-28">
        <GoldLoanContent />
      </section>

      <section className="bg-white py-10 md:py-5">
        <LoanCalculator />
      </section>

      <section className="bg-white py-10 md:py-5">
        <GoldLoanTypes />
      </section>

      <section className="bg-white py-10 md:py-5">
        <GoldLoanFeatures />
      </section>

      <section className="bg-white py-10 md:py-5">
        <GoldLoanDetails />
      </section>

      <section className="bg-white py-10 md:py-5">
        <GoldLoanRates />
      </section>

      <section className="bg-white py-10 md:py-5">
        <GoldLoanEligibility />
      </section>

      <section className="bg-white py-10 md:py-5">
        <ApplyGoldLoan />
      </section>

      <section className="bg-white py-10 md:py-5">
        <GoldLoanProcess />
      </section>

      <section className="bg-white py-10 md:py-5">
        <FAQPage />
      </section>
    </main>
  );
}