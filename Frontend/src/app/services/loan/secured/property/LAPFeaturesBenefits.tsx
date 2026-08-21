"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";

const benefitsData = [
  "Higher loan amount",
  "Competitive interest rates compared with many unsecured options",
  "Longer repayment tenure",
  "Use for eligible personal or business requirements",
  "Balance transfer options, where available",
  "Top-up facility, subject to lender policy",
  "Secured loan structure",
];

const LAPFeaturesBenefits = () => {
  return (
    <section className="w-full bg-white pt-0 pb-16 font-lexend">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-10">
          <Typography
            variant="h3"
            as="h3"
            className="text-[#1e293b] text-xl md:text-[30px] leading-tight font-semibold"
          >
            Benefits of Loan Against Property
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {benefitsData.map((title, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-lg transition-all duration-300 flex items-center h-full"
            >
              <Typography
                variant="b1"
                as="h5"
                className="text-[#1e293b] font-bold text-base md:text-lg leading-snug"
              >
                {title}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LAPFeaturesBenefits;