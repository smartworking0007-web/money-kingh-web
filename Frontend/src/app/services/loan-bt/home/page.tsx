"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "@/app/components/ui/Typography";
import HomeLoanBTProfiles from "./HomeLoanBTProfiles";
import LoanCalculator from "@/app/components/LoanCalculator/LoanCalculator";
import HomeLoanContent from "../../loan/secured/home/HomeLoanContent";
import HomeLoanBTComparison from "./HomeLoanBTComparison";
import HomeLoanBTJourney from "./HomeLoanBTJourney";
import HomeLoanBTFees from "./HomeLoanBTFees";
import HomeLoanBTFAQ from "./HomeLoanBTFAQ";
import DocumentsRequired from "./DocumentsRequired";

export default function HomeLoanPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[70vh] md:h-[85vh] lg:h-[90vh] bg-[#d73a32] overflow-hidden font-lexend">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/bt/home.jpeg"
            alt="Home Loan BT"
            fill
            priority
            quality={100}
            // Image ko right side push kiya hai taaki left mein text ke liye jagah ban jaye
            className="object-cover object-right md:object-right transition-all duration-700 scale-105"
          />
          {/* Subtle gradient overlay to make text more readable on the left */}
          <div className="absolute inset-0 bg-leanear-to-r from-black/40 via-transparent to-transparent z-1" />
        </div>

        {/* Hero Content Wrapper */}
        {/* Padding-left (pl-4) ko kam kiya hai taaki text bilkul left mein dikhe */}
        <div className="absolute inset-0 z-10 max-w-[1440px] mx-auto px-4 md:px-8 w-full flex items-center pb-16 md:pb-0">
          <div className="w-full flex justify-start">
            {/* items-start ensures text and button are left-aligned */}
            <div className="max-w-[320px] md:max-w-2xl flex flex-col items-start text-left">
              <Typography
                variant="h2"
                as="h1"
                className="text-white mb-6 leading-[1.1] font-black drop-shadow-2xl text-xl md:text-[64px]"
              >
                Home Loan BT & <br />
                Top Up
              </Typography>

              <Link href="http://application.dsacrm.com/e22787fa-e05f-4643-a0af-d4a5b98889ba/apply" className="w-full md:w-auto">
                <button className="w-full md:w-auto bg-white text-[#d73a32] hover:bg-slate-100 px-10 py-3 md:px-14 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all shadow-2xl active:scale-95 cursor-pointer">
                  Avail Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- Rest of the Components --- */}
      <section className="bg-white py-10 md:py-5">
        <HomeLoanBTProfiles />
      </section>
      
      <section className="bg-white py-20 md:py-30">
        <LoanCalculator />
      </section>
      
      <section className="bg-white p-0 -mt-12 md:-mt-20 relative z-30">
        <HomeLoanContent />
      </section>
      
      <section className="bg-white p-0 -mt-10 md:-mt-15 relative z-30">
        <HomeLoanBTComparison />
      </section>
      
      <section className="bg-white p-0 -mt-10 md:-mt-5 relative z-30">
        <HomeLoanBTJourney />
      </section>
      <section className="bg-white p-0 -mt-10 md:-mt-5 relative z-30">
        <DocumentsRequired />
      </section>
      
      <section className="bg-white p-0 -mt-10 md:-mt-5 relative z-30">
        <HomeLoanBTFees />
      </section>
      
      <section className="bg-white p-0 -mt-10 md:-mt-5 relative z-30">
        <HomeLoanBTFAQ />
      </section>
    </main>
  );
}