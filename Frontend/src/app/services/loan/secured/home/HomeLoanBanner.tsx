"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import Link from "next/link"; // Link import kiya hai navigation ke liye

const HomeLoanBanner = () => {
  return (
    // -mt-10 md:-mt-16 se section upar shift hoga
    <section className="w-full bg-white py-4 md:py-10 px-4 md:px-10 font-lexend -mt-10 md:-mt-20 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* --- ROUNDED CARD --- */}
        <div className="w-full bg-[#FFFFFF] border border-gray-100 shadow-[0_10px_50px_rgba(0,0,0,0.05)] rounded-[30px] md:rounded-[60px] py-10 md:py-24 px-5 md:px-20 text-center relative overflow-hidden">
          {/* Subtle decoration dots */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#00C4D8]/5 rounded-full -mr-12 -mt-12"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#00C4D8]/5 rounded-full -ml-12 -mb-12"></div>

          <div className="relative z-20">
            {/* --- TITLE (Responsive text size) --- */}
            <Typography
              variant="h3"
              as="h2"
              className="text-[#1e293b] font-extrabold text-[22px] md:text-5xl mb-4 md:mb-6 mt-0! leading-tight tracking-tight"
            >
              Money King Home Loan Interest Rates
            </Typography>

            {/* --- DESCRIPTION (Responsive font and width) --- */}
            <div className="max-w-4xl mx-auto mb-8 md:mb-12">
              <Typography
                variant="s2"
                as="p"
                className="text-gray-500 text-[13px] md:text-xl leading-relaxed mt-0! font-medium px-2 md:px-0"
              >
                Our home loan interest rates are linked to market benchmarks and
                may change depending on RBI policies and lender guidelines.
                Borrowers with a higher CIBIL score (750+) can benefit from
                lower interest rates. We provide expert assistance to help you
                compare lenders across India.
              </Typography>
            </div>

            {/* --- BUTTONS (Mobile Stack, Desktop Row) --- */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6">
              {/* Apply Now Button wrapped with Link */}
              <Link
                href="http://application.dsacrm.com/e22787fa-e05f-4643-a0af-d4a5b98889ba/apply"
                className="w-full sm:w-auto"
              >
                <button className="w-full bg-[#00C4D8] hover:bg-[#0099ab] text-white px-8 md:px-14 py-3.5 md:py-4 rounded-full font-bold text-base md:text-lg transition-all duration-300 shadow-lg shadow-cyan-500/20 active:scale-95 cursor-pointer">
                  Apply Now
                </button>
              </Link>

              <button className="w-full sm:w-auto bg-white border-2 border-[#00C4D8] text-[#00C4D8] hover:bg-[#00C4D8] hover:text-white px-8 md:px-14 py-3.5 md:py-4 rounded-full font-bold text-base md:text-lg transition-all duration-300 active:scale-95 cursor-pointer">
                View Rates
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeLoanBanner;
