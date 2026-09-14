import type { Metadata } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import MachineryLoanContent from "./MachineryLoanContent";
import LoanCalculator from "@/app/components/LoanCalculator/LoanCalculator";
import MachineryLoanBenefits from "./MachineryLoanBenefits";
import MachineryLoanEligibility from "./MachineryLoanEligibility";
import MachineryLoanApplyStep from "./MachineryLoanApplyStep";
import MachineryLoanFAQs from "./MachineryLoanFAQs";
import { Typography } from "@/app/components/ui/Typography";

// --- COMPLETE SEO METADATA ---
export const metadata: Metadata = {
  title: "Machinery Loan Balance Transfer & Top-Up | Money King",
  description:
    "Transfer your business machinery loan to top lenders at competitive interest rates. Reduce machinery EMIs and unlock quick top-up funding for business growth.",
  keywords: [
    "Machinery Loan Balance Transfer",
    "Machinery Loan Top-Up",
    "business machinery loan transfer",
    "equipment loan balance transfer India",
    "reduce machinery loan EMI",
    "machinery loan interest rates",
    "commercial equipment financing",
    "Money King Financial Services",
    "Money King",
  ],
  authors: [{ name: "Money King Financial Services" }],
  creator: "Money King Financial Services",
  publisher: "Money King Financial Services",
  alternates: {
    canonical: "https://moneykingfinancial.com/services/loan-bt/machinery",
    languages: {
      en: "https://moneykingfinancial.com/services/loan-bt/machinery",
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
    title: "Machinery Loan Balance Transfer & Top-Up | Money King",
    description:
      "Transfer your business machinery loan to top lenders at competitive interest rates. Reduce machinery EMIs and unlock quick top-up funding for business growth.",
    url: "https://moneykingfinancial.com/services/loan-bt/machinery",
    siteName: "Money King Financial Services",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Machinery Loan Balance Transfer & Top-Up | Money King",
    description:
      "Transfer your business machinery loan to top lenders at competitive interest rates. Reduce machinery EMIs and unlock quick top-up funding for business growth.",
  },
};

export default function MachineryLoanHero() {
  return (
    <main className="w-full bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full h-[500px] md:h-auto md:aspect-15/9 lg:aspect-15/6">
          <Image
            src="/images/bt/ma.jpeg"
            alt="Business Machinery Loan Balance Transfer & Top-Up"
            fill
            className="object-cover object-[35%_center] md:object-center"
            priority
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent md:bg-black/40 flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full">
              <div className="max-w-xl text-left text-white space-y-4 md:space-y-6">
                <Typography
                  variant="h2"
                  as="h1"
                  className="text-white! font-black! text-3xl! md:text-5xl! lg:text-6xl! leading-tight! mt-0!"
                >
                  Machinery Loan to <br />
                  Empower Your Business
                </Typography>

                <p className="text-white/90 text-base md:text-lg lg:text-xl font-medium max-w-md leading-relaxed">
                  Transfer your business machinery loan to top lenders at competitive interest rates. Reduce machinery EMIs and unlock quick top-up funding for business growth.
                </p>

                {/* Apply Now Button */}
                <div className="pt-4">
                  <Link
                    href="http://application.dsacrm.com/e22787fa-e05f-4643-a0af-d4a5b98889ba/apply"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-10 rounded-xl text-lg transition-all transform active:scale-95 shadow-xl border-none"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- H2 SECTION --- */}
      <section className="w-full pt-12 md:pt-16 pb-4 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Benefits of <span className="text-blue-600">Machinery Loan Balance Transfer & Top-Up</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base mt-3 max-w-2xl mx-auto">
            Reduce equipment EMIs, shift high-interest machinery debts to partner banks, and access liquid capital for modern infrastructure.
          </p>
        </div>
      </section>

      {/* --- CONTENT SECTIONS --- */}
      <div className="relative z-20 space-y-16 md:space-y-24 py-8 md:py-20 -mt-10 md:-mt-24">
        <MachineryLoanContent />
      </div>
      <div className="relative z-20 bg-white space-y-16 md:space-y-24 py-8 md:py-20 mt-10 md:-mt-24">
        <LoanCalculator />
      </div>
      <div className="relative z-20 bg-white space-y-16 md:space-y-24 py-8 md:py-20 -mt-15 md:-mt-24">
        <MachineryLoanBenefits />
      </div>
      <div className="relative z-20 bg-white space-y-16 md:space-y-24 py-8 md:py-20 -mt-10 md:-mt-24">
        <MachineryLoanEligibility />
      </div>
      <div className="relative z-20 bg-white space-y-16 md:space-y-24 py-8 md:py-20 -mt-10 md:-mt-24">
        <MachineryLoanApplyStep />
      </div>
      <div className="relative z-20 bg-white space-y-16 md:space-y-24 py-8 md:py-20 -mt-10 md:-mt-24">
        <MachineryLoanFAQs />
      </div>
    </main>
  );
}