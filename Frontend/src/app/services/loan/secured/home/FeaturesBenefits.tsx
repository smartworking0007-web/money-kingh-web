"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";

const benefitsData = [
  {
    title: "Early Home Ownership",
    desc: "A home loan allows you to buy your dream house without waiting to save the entire amount. You can own a property now while continuing to manage your other financial goals."
  },
  {
    title: "Better Financial Planning",
    desc: "Instead of using all your savings at once, a housing loan lets you pay in manageable EMIs. This helps maintain liquidity and ensures better financial planning."
  },
  {
    title: "Long Repayment Tenure",
    desc: "Home loans come with flexible repayment tenures of up to 30 years, making EMIs more affordable and easier to manage over time."
  },
  {
    title: "Lower Interest Rates",
    desc: "Compared to personal loans, home loans in India offer lower interest rates. Some lenders also provide special benefits and reduced rates for women borrowers."
  },
  {
    title: "Tax Benefits",
    desc: "Home loan borrowers can avail tax deductions on principal repayment under Section 80C and on interest under Section 24(b), as per applicable tax laws."
  },
  {
    title: "Minimal or No Prepayment Charges",
    desc: "Most lenders do not charge prepayment or foreclosure fees on floating rate home loans, allowing you to repay your loan early without extra cost."
  }
];

const FeaturesBenefits = () => {
  return (
    <section className="w-full bg-white py-12 md:py-20 font-lexend">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* --- MAIN TITLE (Slightly smaller for better balance) --- */}
        <div className="text-center mb-12">
          <Typography 
            variant="h4" 
            as="h2" 
            className="text-[#1e293b] font-bold text-2xl md:text-[32px] leading-tight"
          >
            Features and Benefits of Home Loan in India
          </Typography>
        </div>

        {/* --- RESPONSIVE GRID SECTION --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefitsData.map((item, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-50 rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-500 flex flex-col h-full group"
            >
              {/* Card Title (Smaller text size) */}
              <Typography 
                variant="h5" 
                as="h3" 
                className="text-[#1e293b] font-bold text-lg md:text-xl mb-3 leading-snug group-hover:text-blue-600 transition-colors"
              >
                {item.title}
              </Typography>
              
              {/* Card Description (Compact text size) */}
              <Typography 
                variant="b3" 
                as="p" 
                className="text-[#64748b] text-[13px] md:text-sm leading-relaxed font-normal"
              >
                {item.desc}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBenefits;