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
      {/* Mobile par h-[500px] fix kiya hai taaki image zyada zoom na ho */}
      <section className="relative w-full h-[400px] md:h-[90vh] lg:h-[90vh] bg-[#d73a32] overflow-hidden font-lexend">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/bt/home.jpeg"
            alt="Home Loan BT"
            fill
            priority
            quality={100}
            // MOBILE FIX: Mobile par 'object-[25%_center]' use kiya hai taaki 
            // image ka main part (ghar/subject) left side se frame mein aa jaye.
            className="object-cover object-[70%_center] md:object-right transition-all duration-700 scale-105"
          />
          {/* Responsive Gradient Overlay */}
          {/* Mobile: Bottom-to-Top dark gradient for white text visibility */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent md:bg-linear-to-r md:from-black/60 md:via-transparent md:to-transparent z-1" />
        </div>

        {/* Hero Content Wrapper */}
        <div className="absolute inset-0 z-10 max-w-[1440px] mx-auto px-6 md:px-12 w-full flex items-center pt-20 md:pt-0">
          <div className="w-full flex justify-start">
            <div className="max-w-[280px] md:max-w-3xl flex flex-col items-start text-left">
              <Typography
                variant="h2"
                as="h1"
                // text-3xl! mobile ke liye perfect size hai
                className="text-white mb-6 leading-[1.1] font-black drop-shadow-2xl text-3xl! md:text-[64px]! mt-0!"
              >
                Home Loan BT & <br />
                Top Up
              </Typography>

              <Link href="http://application.dsacrm.com/e22787fa-e05f-4643-a0af-d4a5b98889ba/apply" className="w-full md:w-auto">
                <button className="w-full md:w-auto bg-white text-[#d73a32] hover:bg-slate-100 px-10 py-3 md:px-14 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all shadow-2xl active:scale-95 cursor-pointer border-none">
                  Avail Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- Rest of the Components --- */}
      
      {/* Spacing ko balanced rakha hai taki mobile par overlap na ho */}
      <section className="relative z-20 bg-white space-y-16 md:space-y-24 py-8 md:py-20 -mt-10 md:-mt-24">
        <HomeLoanBTProfiles />
      </section>
      
      <section className="relative z-20 bg-white space-y-16 md:space-y-24 py-8 md:py-40 mt-20 md:-mt-24">
        <LoanCalculator />
      </section>
      
      <section className="relative z-20   md:space-y-10 py-8 md:py-10 -mt-20 md:-mt-40">
        <HomeLoanContent />
      </section>
      
      <section className="relative z-20 space-y-16 md:space-y-24 py-8 md:py-20 -mt-40 md:-mt-50">
        <HomeLoanBTComparison />
      </section>
      
      <section className="relative z-20 bg-white space-y-16 md:space-y-24 py-8 md:py-20 -mt-20 md:-mt-40">
        <HomeLoanBTJourney />
      </section>
      
      <section className="relative z-20  space-y-16 md:space-y-24 py-8 md:py-20 -mt-20 md:-mt-40">
        <DocumentsRequired />
      </section>
      
      <section className="relative z-20  space-y-16 md:space-y-24 py-8 md:py-20 -mt-10 md:-mt-40">
        <HomeLoanBTFees />
      </section>
      
      <section className="relative z-20 space-y-16 md:space-y-24 py-8 md:py-20 -mt-10 md:-mt-40">
        <HomeLoanBTFAQ />
      </section>
    </main>
  );
}