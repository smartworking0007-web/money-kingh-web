import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import BankingManagementContent from "./BankingManagementContent";
import BankingManagementFeatures from "./BankingManagementFeatures";
import BankingServiceTypes from "./BankingServiceTypes";
import BankingSolutions from "./BankingSolutions";
import RiskManagementProcess from "./RiskManagementProcess";
import ChooseRiskManagement from "./ChooseRiskManagement";
import WhyChooseMoneyKing from "./WhyChooseMoneyKing";
import BankingFAQ from "./BankingFAQ";

// --- COMPLETE SEO METADATA (Title: exactly 55 characters including spaces) ---
export const metadata: Metadata = {
  title: "Banking Management Solutions | Money King Financial Hub",
  description:
    "Explore strategic banking management, financial risk mitigation, and corporate banking solutions with Money King Financial Services.",
  keywords: [
    "Banking Management Services",
    "Corporate Financial Solutions",
    "financial risk mitigation",
    "cash management services India",
    "corporate liquidity management",
    "business banking advisory",
    "Money King Financial Services",
    "Money King",
  ],
  authors: [{ name: "Money King Financial Services" }],
  creator: "Money King Financial Services",
  publisher: "Money King Financial Services",
  alternates: {
    canonical: "https://moneykingfinancial.com/services/banking-management",
    languages: {
      en: "https://moneykingfinancial.com/services/banking-management",
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
    title: "Banking Management & Corporate Financial Solutions | Money King",
    description:
      "Explore strategic banking management, financial risk mitigation, and corporate banking solutions with Money King Financial Services.",
    url: "https://moneykingfinancial.com/services/banking-management",
    siteName: "Money King Financial Services",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Banking Management & Corporate Financial Solutions | Money King",
    description:
      "Explore strategic banking management, financial risk mitigation, and corporate banking solutions with Money King Financial Services.",
  },
};

export default function BankingManagementPage() {
  return (
    <main className="w-full bg-white font-sans">
      {/* --- HERO SECTION WITH H1 --- */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full aspect-6/3 sm:aspect-10/9 md:aspect-15/9 lg:aspect-15/6">
          <Image
            src="/images/footer/Banking.jpeg"
            alt="Banking Management & Corporate Financial Solutions"
            fill
            className="object-cover object-right md:object-center transition-all duration-500"
            priority
          />

          {/* Text Overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-slate-950/90 via-slate-900/60 to-transparent flex items-center">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
              <div className="max-w-2xl text-white space-y-4">
                {/* --- H1 HEADING --- */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight drop-shadow-lg text-white">
                  Banking Management <br />
                  <span className="text-blue-400">& Corporate Financial</span> Solutions
                </h1>

                <p className="text-slate-200 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-xl drop-shadow-md">
                  Explore strategic banking management, financial risk mitigation, and corporate banking solutions tailored to optimize enterprise liquidity.
                </p>

                <div className="pt-2">
                  <Link
                    href="http://application.dsacrm.com/e22787fa-e05f-4643-a0af-d4a5b98889ba/apply"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-8 rounded-xl text-base md:text-lg transition-all shadow-xl cursor-pointer"
                  >
                    Get Advisory Support
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SUB-HEADER SECTION WITH H2 --- */}
      <section className="w-full pt-10 md:pt-14 pb-2 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* --- H2 HEADING --- */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Strategic Corporate <span className="text-blue-600">Banking & Liquidity Solutions</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base mt-2 max-w-2xl mx-auto">
            Safeguard capital efficiency with robust compliance mechanisms, proactive risk mitigation, and institutional treasury services.
          </p>
        </div>
      </section>

      {/* --- CONTENT SECTIONS --- */}
      <section className="bg-white py-0 md:py-0">
        <BankingManagementContent />
      </section>

      <section className="bg-white py-0 md:py-0">
        <BankingManagementFeatures />
      </section>

      <section className="bg-white py-0 md:py-0">
        <BankingServiceTypes />
      </section>

      <section className="bg-white py-0 md:py-0">
        <BankingSolutions />
      </section>

      <section className="bg-white py-0 md:py-0">
        <RiskManagementProcess />
      </section>

      <section className="bg-white py-0 md:py-0">
        <ChooseRiskManagement />
      </section>

      <section className="bg-white py-0 md:py-0">
        <WhyChooseMoneyKing />
      </section>

      <section className="bg-white py-0 md:py-0">
        <BankingFAQ />
      </section>
    </main>
  );
}