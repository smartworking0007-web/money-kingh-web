import type { Metadata } from "next";
import React from "react";
import Image from "next/image";
import LifeInsuranceContent from "./LifeInsuranceContent";
import LifeInsuranceTables from "./LifeInsuranceTables";
import NRIInsuranceInfo from "./NRIHelpSection";
import InsuranceTypesPage from "./InsuranceTypesPage";
import InsuranceTypesDetail from "./InsuranceTypesDetail";
import HowInsuranceWorks from "./HowInsuranceWorks";
import InsuranceDocuments from "./InsuranceDocuments";
import WhoCanBuy from "./WhoCanBuy";
import TestimonialSlider from "./TestimonialSlider";
import DosAndDonts from "./DosAndDonts";
import InsuranceFAQs from "./InsuranceFAQs";

// --- SEO METADATA ---
export const metadata: Metadata = {
  title: "Insurance & Risk Management Services | Money King India",
  description:
    "Protect your future with Money King Financial Services. Explore life, health, business insurance, and expert risk management solutions in India.",
  keywords: [
    "Insurance & Risk Management Services in India",
    "Life Insurance Plans & Term Cover",
    "Secure Your Family",
    "health insurance",
    "business insurance",
    "risk management solutions",
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
    title: "Insurance & Risk Management Services in India",
    description:
      "Protect your future with Money King Financial Services. Explore life, health, business insurance, and expert risk management solutions in India.",
    siteName: "Money King Financial Services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insurance & Risk Management Services in India",
    description:
      "Protect your future with Money King Financial Services. Explore life, health, business insurance, and expert risk management solutions in India.",
  },
};

export default function HealthInsuranceHero() {
  return (
    <main className="w-full bg-white">
      {/* --- HERO SECTION WITH VISIBLE H1 --- */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full aspect-4/3 md:aspect-15/9 lg:aspect-15/6 flex items-center justify-center">
          <Image
            src="/images/life/life.jpeg"
            alt="Insurance & Risk Management Services in India"
            fill
            className="object-cover"
            priority
          />
          {/* Subtle overlay so text is clearly readable */}
          <div className="absolute inset-0 bg-black/45" />

          {/* --- H1 HEADING --- */}
          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight drop-shadow-lg leading-tight">
              Insurance & Risk Management Services in India
            </h1>
            <p className="text-gray-200 text-xs sm:text-sm md:text-base lg:text-lg mt-3 md:mt-4 max-w-3xl mx-auto drop-shadow-md">
              Protect your future with Money King Financial Services. Explore life, health, business insurance, and expert risk management solutions in India.
            </p>
          </div>
        </div>
      </section>

      {/* --- HEADING 2 SECTION --- */}
      <section className="w-full pt-8 md:pt-12 px-4 text-center">
      
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="bg-white pt-2 md:pt-10">
        <LifeInsuranceContent />
      </section>
      <section className="bg-white pt-2 md:pt-10">
        <LifeInsuranceTables />
      </section>
      <section className="bg-white pt-2 md:pt-10">
        <NRIInsuranceInfo />
      </section>
      <section className="bg-white pt-2 md:pt-10">
        <InsuranceTypesPage />
      </section>
      <section className="bg-white pt-2 md:pt-10">
        <InsuranceTypesDetail />
      </section>
      <section className="bg-white pt-2 md:pt-10">
        <HowInsuranceWorks />
      </section>
      <section className="bg-white pt-2 md:pt-10">
        <InsuranceDocuments />
      </section>
      <section className="bg-white pt-2 md:pt-10">
        <WhoCanBuy />
      </section>
      <section className="bg-white pt-2 md:pt-10">
        <TestimonialSlider />
      </section>
      <section className="bg-white pt-2 md:pt-10">
        <DosAndDonts />
      </section>
      <section className="bg-white pt-2 md:pt-10">
        <InsuranceFAQs />
      </section>
    </main>
  );
}