"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import Link from "next/link";

const HomeLoanBanner = () => {
  const factors = [
    "CIBIL/credit profile",
    "Monthly income",
    "Employment stability",
    "Existing EMIs",
    "Loan amount",
    "Property value",
    "LTV ratio",
    "Loan tenure",
    "Type of interest rate",
    "Lender policy",
  ];

  return (
    // -mt-10 md:-mt-16 se section upar shift hoga
    <section className="w-full bg-white py-4 md:py-10 px-4 md:px-10 font-lexend -mt-10 md:-mt-20 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* --- ROUNDED CARD --- */}
        <div className="w-full bg-[#FFFFFF] border border-gray-100 shadow-[0_10px_50px_rgba(0,0,0,0.05)] rounded-[30px] md:rounded-[60px] py-10 md:py-20 px-5 md:px-16 text-center relative overflow-hidden">
          {/* Subtle decoration dots */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#00C4D8]/5 rounded-full -mr-12 -mt-12"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#00C4D8]/5 rounded-full -ml-12 -mb-12"></div>

          <div className="relative z-20">
            {/* --- TITLE --- */}
            <Typography
              variant="h3"
              as="h2"
              className="text-[#1e293b] font-extrabold text-[22px] md:text-4xl lg:text-5xl mb-4 md:mb-6 mt-0! leading-tight tracking-tight"
            >
              Home Loan Interest Rate in India
            </Typography>

            {/* --- DESCRIPTION --- */}
            <div className="max-w-4xl mx-auto mb-6 md:mb-8">
              <Typography
                variant="s2"
                as="p"
                className="text-gray-600 text-[14px] md:text-lg leading-relaxed mt-0! font-normal px-2 md:px-0"
              >
                Home loan interest rates vary by lender and applicant profile.
                The rate offered may depend on credit history, income,
                employment or business profile, loan amount, property value,
                loan-to-value ratio, repayment tenure and lender-specific
                policies.
              </Typography>
            </div>

            {/* --- FACTORS LIST SECTION --- */}
            <div className="max-w-3xl mx-auto mb-8 md:mb-12 text-left bg-gray-50/60 p-6 md:p-8 rounded-2xl border border-gray-100">
              <h3 className="text-gray-800 font-bold text-base md:text-lg mb-4">
                Factors affecting your home loan interest rate:
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 md:gap-3">
                {factors.map((factor, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-600 text-sm md:text-base font-medium"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#00C4D8] mr-3 shrink-0"></span>
                    {factor}
                  </li>
                ))}
              </ul>
            </div>

            {/* --- BUTTON (Only Apply Now) --- */}
            <div className="flex items-center justify-center">
              <Link
                href="http://application.dsacrm.com/e22787fa-e05f-4643-a0af-d4a5b98889ba/apply"
                className="w-full sm:w-auto"
              >
                <button className="w-full sm:w-auto bg-[#00C4D8] hover:bg-[#0099ab] text-white px-8 md:px-14 py-3.5 md:py-4 rounded-full font-bold text-base md:text-lg transition-all duration-300 shadow-lg shadow-cyan-500/20 active:scale-95 cursor-pointer">
                  Apply Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeLoanBanner;