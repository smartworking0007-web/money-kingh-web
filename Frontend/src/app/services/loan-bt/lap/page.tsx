"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "@/app/components/ui/Typography";
import LAPBTProfiles from "./LAPBTProfiles";
import LoanCalculator from "@/app/components/LoanCalculator/LoanCalculator";
import LAPBTContent from "./LAPBTContent";
import LAPBTComparison from "./LAPBTComparison";
import LAPDocuments from "./LAPDocuments";
import LAPBTJourney from "./LAPBTJourney";
import LAPBTFees from "./LAPBTFees";
import LAPFAQs from "./LAPFAQs";

export default function HomeLoanPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[70vh] md:h-[85vh] lg:h-[90vh] bg-[#d73a32] overflow-hidden font-lexend">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/bt/bthome.jpeg"
            alt="Home Loan BT"
            fill
            priority
            quality={100}
            className="object-cover object-left md:object-[25%_center] transition-all duration-700 scale-105"
          />
        </div>

        {/* Hero Content Wrapper */}
        <div className="absolute inset-0 z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex items-center md:items-end pb-16 md:pb-24">
          <div className="w-full flex justify-center md:justify-end">
            <div className="max-w-[340px] md:max-w-xl flex flex-col items-center md:items-end text-center md:text-right">
              <Typography
                variant="d2"
                as="h1"
                className="text-white mb-4 leading-[1.1] font-black drop-shadow-2xl text-3xl sm:text-4xl md:text-[56px]"
              >
                Lap loan (BT & Top Up)
              </Typography>

              <Link href="/contact" className="w-full md:w-auto">
                <button className="w-full md:w-auto bg-white text-[#d73a32] hover:bg-slate-100 px-10 py-3 md:px-12 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all shadow-xl active:scale-95 cursor-pointer">
                  Avail Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white p-0 -mt-10 md:-mt-5 relative z-30">
        <LAPBTProfiles />
      </section>
      <section className="bg-white py-20 md:py-30">
        <LoanCalculator />
      </section>
       <section className="bg-white py-20 md:py-30">
        <LAPBTContent />
      </section>
       <section className="bg-white py-20 md:py-30">
        <LAPBTComparison />
      </section>
       <section className="bg-white py-0 md:py-0">
        <LAPDocuments />
      </section>
       <section className="bg-white py-0 md:py-0">
        <LAPBTJourney />
      </section>
      <section className="bg-white py-0 md:py-0">
        <LAPBTFees />
      </section>
      <section className="bg-white py-0 md:py-0">
        <LAPFAQs/>
      </section>
    </main>
  );
}
