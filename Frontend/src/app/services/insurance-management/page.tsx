import type { Metadata } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import InsuranceRiskContent from "./InsuranceRiskContent";
import InsuranceRiskFeatures from "./InsuranceRiskFeatures";
import InsuranceRiskTypes from "./InsuranceRiskTypes";
import InsuranceRiskSolutions from "./InsuranceRiskSolutions";
import WhyChooseInsurance from "./WhyChooseInsurance";
import InsuranceRiskFAQ from "./InsuranceRiskFAQ";

// --- COMPLETE SEO METADATA (Title: exactly 55 characters including spaces) ---
export const metadata: Metadata = {
  title: "Insurance & Risk Management | Money King Financial Hub",
  description:
    "Protect your future, assets, and business with comprehensive insurance and risk mitigation advisory from Money King Financial Services.",
  keywords: [
    "Insurance and Risk Management Solutions",
    "business risk mitigation advisory",
    "life insurance planning India",
    "general insurance advisory",
    "corporate asset insurance",
    "health insurance solutions",
    "Money King Financial Services",
    "Money King",
  ],
  authors: [{ name: "Money King Financial Services" }],
  creator: "Money King Financial Services",
  publisher: "Money King Financial Services",
  alternates: {
    canonical: "https://moneykingfinancial.com/services/insurance-management",
    languages: {
      en: "https://moneykingfinancial.com/services/insurance-management",
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
    title: "Insurance & Risk Management Solutions | Money King Financial Services",
    description:
      "Protect your future, assets, and business with comprehensive insurance and risk mitigation advisory from Money King Financial Services.",
    url: "https://moneykingfinancial.com/services/insurance-management",
    siteName: "Money King Financial Services",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insurance & Risk Management Solutions | Money King Financial Services",
    description:
      "Protect your future, assets, and business with comprehensive insurance and risk mitigation advisory from Money King Financial Services.",
  },
};

export default function InsuranceManagementPage() {
  return (
    <main className="w-full bg-white font-sans">
      {/* --- HERO SECTION WITH H1 --- */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full aspect-6/3 sm:aspect-10/9 md:aspect-15/9 lg:aspect-15/6">
          <Image
            src="/images/footer/Risk.jpeg"
            alt="Insurance & Risk Management Solutions"
            fill
            className="object-cover object-right md:object-center transition-all duration-500"
            priority
          />

          {/* --- LEFT SIDE TEXT OVERLAY --- */}
          <div className="absolute inset-0 bg-linear-to-r from-slate-950/90 via-slate-900/60 to-transparent flex items-center">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
              <div className="max-w-2xl text-white space-y-4">
                {/* --- H1 HEADING --- */}
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight drop-shadow-lg text-white">
                  Insurance & <br />
                  <span className="text-blue-400">Risk Management</span> Solutions
                </h1>

                <p className="text-slate-200 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-xl drop-shadow-md">
                  Protect your future, assets, and business with comprehensive insurance and risk mitigation advisory from Money King Financial Services.
                </p>

                <div className="pt-2">
                  <Link
                    href="http://application.dsacrm.com/e22787fa-e05f-4643-a0af-d4a5b98889ba/apply"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-8 rounded-xl text-base md:text-lg transition-all shadow-xl cursor-pointer"
                  >
                    Get Protected Today
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
            Comprehensive <span className="text-blue-600">Protection & Risk Mitigation</span> Advisory
          </h2>
          <p className="text-slate-600 text-sm md:text-base mt-2 max-w-2xl mx-auto">
            Safeguard individual health, commercial property, and business assets against unforeseen liabilities with our custom insurance strategies.
          </p>
        </div>
      </section>

      {/* --- OTHER SECTIONS --- */}
      <section className="bg-white">
        <InsuranceRiskContent />
      </section>

      <section className="bg-white">
        <InsuranceRiskFeatures />
      </section>

      <section className="bg-white">
        <InsuranceRiskTypes />
      </section>

      <section className="bg-white">
        <InsuranceRiskSolutions />
      </section>

      <section className="bg-white">
        <WhyChooseInsurance />
      </section>

      <section className="bg-white">
        <InsuranceRiskFAQ />
      </section>
    </main>
  );
}