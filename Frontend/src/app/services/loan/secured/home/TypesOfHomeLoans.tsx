"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";

const typesData = [
  {
    title: "Home Loan for Property Purchase",
    desc: "A home loan for property purchase helps you buy a new house, whether it is under construction or ready to move in. You can avail a high loan amount with flexible repayment options, making it easier to own your dream home."
  },
  {
    title: "Home Loan Balance Transfer",
    desc: "A home loan balance transfer allows you to transfer your existing home loan to another lender at a lower interest rate. This helps reduce your EMI burden and overall interest cost. You may also be eligible for a top-up loan for home renovation or other financial needs."
  },
  {
    title: "Home Construction Loan",
    desc: "This type of loan is ideal for individuals who want to construct a house on their own land. Funds are disbursed in stages based on construction progress, ensuring you only pay for what you build."
  },
  {
    title: "Home Renovation Loan",
    desc: "A home renovation loan helps you upgrade, repair, or remodel your existing property. It covers expenses like painting, flooring, and structural improvements to increase your home's value."
  }
];

const TypesOfHomeLoans = () => {
  return (
    // relative aur pt-10/16 se ye header ke niche perfectly set ho jayega
    <section className="relative w-full bg-white pt-10 md:pt-16 pb-12 md:pb-24 font-lexend z-10">
      <div className="max-w-7xl mx-auto px-5 md:px-12">
        
        {/* --- HEADER --- */}
        <div className="mb-8 md:mb-10 border-b border-gray-100 pb-5 md:pb-6">
          <Typography 
            variant="h3" 
            as="h3" 
            // mt-0! aur shadow-none se default behavior override hoga
            className="text-[#1e293b] font-bold text-xl md:text-3xl mb-2 md:mb-3 mt-0! scroll-mt-0!"
          >
            Types of Home Loans in India
          </Typography>
          <Typography 
            variant="s2" 
            className="text-gray-500 text-[13px] md:text-base max-w-4xl mt-0! leading-relaxed"
          >
            Home loans in India are designed to meet different financial needs, whether you are buying a new property, refinancing an existing loan, or upgrading your home.
          </Typography>
        </div>

        {/* --- RESPONSIVE LAYOUT --- */}
        <div className="flex flex-col gap-6 md:gap-10">
          {typesData.map((item, index) => (
            <div 
              key={index} 
              className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-12 items-start group border-b border-gray-50 md:border-0 pb-6 md:pb-0"
            >
              {/* Left Side: Title */}
              <div className="md:col-span-4   pl-3 md:pl-4 transition-all duration-300">
                <Typography 
                  variant="h5" 
                  as="h3" 
                  className="text-[#0f172a] font-bold text-base md:text-xl leading-tight transition-colors mt-0!"
                >
                  {item.title}
                </Typography>
              </div>

              {/* Right Side: Description */}
              <div className="md:col-span-8">
                <Typography 
                  variant="s2" 
                  className="text-[#475569] text-[13px] md:text-base leading-relaxed font-normal mt-0!"
                >
                  {item.desc}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TypesOfHomeLoans;