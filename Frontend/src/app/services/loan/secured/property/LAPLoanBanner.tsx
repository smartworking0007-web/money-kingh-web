"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import Link from "next/link";

const LAPLoanBannerCompact = () => {
  return (
    // relative z-10 taaki ye pichle section se overlap kare
    <section className="w-full bg-white py-4 md:py-6 px-4 md:px-10 font-lexend -mt-10 md:-mt-20 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* --- ROUNDED CARD (Compact Size) --- */}
        {/* max-w-6xl desktop par card ki width control karega, mx-auto center karega */}
        <div className="w-full max-w-6xl mx-auto bg-[#FFFFFF] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.04)] rounded-[25px] md:rounded-[50px] py-6 md:py-16 px-5 md:px-12 text-center relative overflow-hidden">
          
          {/* Subtle decoration dots (Reduced size) */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-[#00C4D8]/5 rounded-full -mr-10 -mt-10"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-[#00C4D8]/5 rounded-full -ml-10 -mb-10"></div>

          <div className="relative z-20">
            {/* --- TITLE (h2) - mb-3 mobile, mb-5 desktop --- */}
            <Typography
              variant="h3"
              as="h2"
              className="text-[#1e293b] font-extrabold text-[20px] md:text-4xl mb-3 md:mb-5 mt-0! leading-tight tracking-tight"
            >
              Money King LAP Loan Interest Rate
            </Typography>

            {/* --- DESCRIPTION (Paragraph) - mb-6 mobile, mb-8 desktop --- */}
            <div className="max-w-3xl mx-auto mb-6 md:mb-8">
              <Typography
                variant="s2"
                as="p"
                // text-base desktop par isse readability smooth rahegi
                className="text-gray-500 text-[12px] md:text-base leading-relaxed mt-0! font-medium px-1 md:px-0"
              >
                The interest rate for a Loan Against Property (LAP) typically starts from 9.00% p.a. onwards and depends on factors like your CIBIL score (750+), income stability (salaried vs self-employed), and the type of property (residential usually lower than commercial). It is also influenced by the loan amount, tenure, and your existing EMIs, which help lenders assess your repayment capacity and determine the final rate offered.
              </Typography>
            </div>

            {/* --- BUTTONS - Stacks on Mobile --- */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-5">
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="w-full bg-[#00C4D8] hover:bg-[#0099ab] text-white px-8 md:px-12 py-3 md:py-3.5 rounded-full font-bold text-sm md:text-base transition-all duration-300 shadow-cyan-500/20 active:scale-95 cursor-pointer border-none outline-none">
                  Apply Now
                </button>
              </Link>

              <button className="w-full sm:w-auto bg-white border-2 border-[#00C4D8] text-[#00C4D8] hover:bg-[#00C4D8] hover:text-white px-8 md:px-12 py-3 md:py-3.5 rounded-full font-bold text-sm md:text-base transition-all duration-300 active:scale-95 cursor-pointer outline-none">
                View Rates
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LAPLoanBannerCompact;