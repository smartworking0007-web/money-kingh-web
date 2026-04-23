"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
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

export default function HomeLoanPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* --- HERO SECTION --- */}
      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[75vh] md:h-[90vh] bg-[#73c7d3] overflow-hidden font-lexend">
        {/* Background Image Container */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/loanpage/home.jpeg"
            alt="New Home Background"
            fill
            /* FIX: 'object-left' se image ka left side (banda + ghar) hamesha visible rahega.
         'md:object-right' desktop par image ko right side dhakel dega layout balance karne ke liye.
      */
            className="object-cover object-left md:object-right transition-all duration-500"
            priority
            quality={100}
          />

          {/* Mobile Overlay: Text readability ke liye */}
          <div className="absolute inset-0 bg-black/10 md:bg-transparent" />
        </div>

        {/* Hero Content Wrapper */}
        <div className="absolute inset-0 z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col">
          {/* 1. Top Spacer: Mobile par isko kam kiya hai taaki text upar chala jaye */}
          <div className="flex-[0.4] md:flex-1" />

          {/* 2. Main Content */}
          <div className="w-full flex flex-col items-center md:items-end">
            <div className="max-w-[340px] md:max-w-xl flex flex-col items-center md:items-start text-center md:text-left">
              <Typography
                variant="d2"
                as="h1"
                className="text-white md:text-[#1e293b] mb-3 md:mb-6 leading-[1.1] font-bold drop-shadow-xl md:drop-shadow-none text-2xl sm:text-4xl md:text-[64px]"
              >
                Sapno Ka Ghar, <br className="hidden md:block" />
                Sirf Ek Loan Door
              </Typography>

              <Typography
                variant="s1"
                as="p"
                className="text-white md:text-[#334155] mb-6 md:mb-8 font-medium leading-relaxed text-[14px] md:text-lg max-w-[280px] md:max-w-lg"
              >
                Make your dream home a reality with 12 EMIs waived
                <br className="hidden md:block" />
                on your home loan.
              </Typography>

              <Link
                href="http://application.dsacrm.com/e22787fa-e05f-4643-a0af-d4a5b98889ba/apply"
                className="w-full md:w-auto"
              >
                <button className="w-full md:w-auto bg-[#6CDAE7] hover:bg-[#5bc8d5] text-white px-10 py-3 md:px-12 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all shadow-xl active:scale-95 cursor-pointer">
                  Avail Now
                </button>
              </Link>
            </div>
          </div>

          {/* 3. Bottom Spacer: Isse bande ki image ke liye jagah banegi */}
          <div className="flex-1 md:hidden" />
          <div className="hidden md:block md:h-24" />
        </div>
      </section>
      {/* --- ALL OTHER SECTIONS --- */}
      <div className="relative z-20 bg-white">
        <section className="py-10">
          <HomeLoanContent />
        </section>

        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <HomeLoanRatesTable />
          </div>
        </section>

        <section className="py-16 md:py-24 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <LoanCalculator />
          </div>
        </section>

        <section className="-mt-12 md:-mt-20">
          <FeaturesBenefits />
        </section>

        <TypesOfHomeLoans />
        <HomeLoanBanner />
        <HomeLoanCharges />
        <HomeLoanEligibility />
        <HomeLoanDocuments />
        <ApplyHomeLoan />
        <HomeLoanRejection />
        <HomeLoanDosDonts />
        <HomeLoanTips />
        <HomeLoanFAQ />

        {/* --- FOOTER SECTIONS --- */}
        <div className="space-y-16 py-20">
          <FinancialPartners />
          <div className="bg-[#f8fafc] py-20">
            <WhyChoose />
          </div>
        </div>
      </div>
    </main>
  );
}
