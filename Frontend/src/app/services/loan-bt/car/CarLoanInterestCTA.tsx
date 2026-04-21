"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import Link from "next/link";

export default function CarLoanInterestCTA() {
  return (
    <section className="w-full px-6 font-lexend relative z-30 mt-10 md:-mt-10">
      <div className="max-w-5xl mx-auto">
        {/* --- MAIN CARD (Clean White) --- */}
        <div className="relative p-10 md:p-16 rounded-[40px] text-center ">
          {/* --- CONTENT --- */}
          <div className="relative z-10 space-y-4 md:space-y-6">
            <Typography
              variant="h3"
              as="h3"
              className="text-[#1e293b] font-black text-3xl md:text-5xl leading-tight m-0"
            >
              Interest Rates
            </Typography>

            <Typography
              variant="b1"
              className="text-slate-500 text-sm md:text-xl font-medium max-w-2xl mx-auto m-0"
            >
              Find out the rates for transferring your car loan or getting a
              top-up
            </Typography>

            {/* --- BUTTON --- */}
            <div className="pt-4">
              <Link href="/contact">
                <button className="px-10 py-3.5 md:px-12 md:py-4 bg-[#8B1D1D] text-white rounded-2xl font-black text-sm md:text-lg uppercase tracking-widest shadow-lg hover:bg-red-900 transition-all active:scale-95 cursor-pointer">
                  Know More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
