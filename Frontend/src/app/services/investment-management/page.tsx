import type { Metadata } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import InvestmentPlanningContent from "./InvestmentPlanningContent";
import InvestmentMistakes from "./InvestmentMistakes";
import InvestmentAdvisoryAdvantages from "./InvestmentAdvisoryAdvantages";
import EarlyInvestmentPlanning from "./EarlyInvestmentPlanning";
import InvestmentPlanningFAQ from "./InvestmentPlanningFAQ";

// --- COMPLETE SEO METADATA (Title: exactly 55 characters including spaces) ---
export const metadata: Metadata = {
  title: "Investment Management Services | Money King Financials",
  description:
    "Expert investment management and strategic portfolio planning services in India. Maximize returns with tailored asset allocation and risk advisory.",
  keywords: [
    "Investment Management Services",
    "portfolio management India",
    "wealth planning strategies",
    "asset allocation advisory",
    "mutual funds investment planning",
    "long term wealth creation",
    "Money King Financial Services",
    "Money King",
  ],
  authors: [{ name: "Money King Financial Services" }],
  creator: "Money King Financial Services",
  publisher: "Money King Financial Services",
  alternates: {
    canonical: "https://moneykingfinancial.com/services/investment-management",
    languages: {
      en: "https://moneykingfinancial.com/services/investment-management",
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
    title: "Investment Management Services | Money King Financials",
    description:
      "Expert investment management and strategic portfolio planning services in India. Maximize returns with tailored asset allocation and risk advisory.",
    url: "https://moneykingfinancial.com/services/investment-management",
    siteName: "Money King Financial Services",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Investment Management Services | Money King Financials",
    description:
      "Expert investment management and strategic portfolio planning services in India. Maximize returns with tailored asset allocation and risk advisory.",
  },
};

export default function InvestmentPlanningHero() {
  return (
    <main className="w-full bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full aspect-4/3 sm:aspect-15/9 md:aspect-15/8 lg:aspect-15/6">
          <Image
            src="/images/footer/investment.jpg"
            alt="Expert Investment Management and Strategic Portfolio Planning"
            fill
            className="object-cover object-right md:object-center transition-all duration-500"
            priority
          />

          {/* SEO Text Overlay & Action Button */}
          <div className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-900/50 to-transparent flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full">
              <div className="max-w-xl text-left text-white space-y-4">
                {/* --- H1 HEADING --- */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight drop-shadow-lg text-white">
                  Strategic Investment <br />
                  <span className="text-emerald-400">Management</span> & Wealth
                </h1>

                <p className="text-slate-200 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-lg">
                  Grow and protect your wealth with expert portfolio planning, disciplined asset allocation, and personalized advisory services.
                </p>

                <div className="pt-2">
                  <Link
                    href="http://application.dsacrm.com/e22787fa-e05f-4643-a0af-d4a5b98889ba/apply"
                    className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3.5 px-8 rounded-xl text-base md:text-lg transition-all shadow-xl cursor-pointer"
                  >
                    Start Investing Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SUB-HEADER SECTION (H2) --- */}
      <section className="w-full pt-10 md:pt-14 pb-2 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Key Pillars of <span className="text-emerald-600">Smart Investment Planning</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base mt-2 max-w-2xl mx-auto">
            Avoid common wealth-building mistakes and leverage strategic asset diversification for long-term compound growth.
          </p>
        </div>
      </section>

      {/* --- 1. Investment Mistakes --- */}
      <section className="bg-white py-6 md:py-10">
        <InvestmentMistakes />
      </section>

      {/* --- 2. Investment Planning Content --- */}
      <section className="bg-white py-6 md:py-10 border-t border-gray-50">
        <InvestmentPlanningContent />
      </section>

      {/* --- 3. Advisory Advantages --- */}
      <section className="bg-white py-6 -mt-15 border-t border-gray-50">
        <InvestmentAdvisoryAdvantages />
      </section>

      {/* --- 4. Early Investment Planning --- */}
      <section className="bg-white py-4 md:py-8">
        <EarlyInvestmentPlanning />
      </section>

      {/* --- 5. FAQs --- */}
      <section className="bg-white py-4 md:py-8">
        <InvestmentPlanningFAQ />
      </section>
    </main>
  );
}