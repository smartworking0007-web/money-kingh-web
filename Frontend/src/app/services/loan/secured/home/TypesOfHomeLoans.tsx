"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
// In icons ko aap apne hisaab se replace kar sakte hain (Lucide-react icons recommended hain)
import { Home, RefreshCw, Hammer, Paintbrush } from "lucide-react";

const typesData = [
  {
    title: "Home Loan for Property Purchase",
    desc: "A home loan for property purchase helps you buy a new house, whether it is under construction or ready to move in. You can avail a high loan amount with flexible repayment options.",
    icon: <Home className="w-5 h-5 text-blue-600" />
  },
  {
    title: "Home Loan Balance Transfer",
    desc: "Transfer your existing home loan to another lender at a lower interest rate. This helps reduce your EMI burden and overall interest cost.",
    icon: <RefreshCw className="w-5 h-5 text-green-600" />
  },
  {
    title: "Home Construction Loan",
    desc: "Ideal for individuals who want to construct a house on their own land. Funds are disbursed in stages based on construction progress.",
    icon: <Hammer className="w-5 h-5 text-orange-600" />
  },
  {
    title: "Home Renovation Loan",
    desc: "Upgrade, repair, or remodel your existing property. It covers expenses like painting, flooring, and structural improvements.",
    icon: <Paintbrush className="w-5 h-5 text-purple-600" />
  }
];

const TypesOfHomeLoans = () => {
  return (
    <section className="relative w-full bg-[#f8fafc] md:bg-white pt-10 md:pt-16 pb-12 md:pb-24 font-lexend z-10">
      <div className="max-w-7xl mx-auto px-5 md:px-12">
        
        {/* --- HEADER --- */}
        <div className="mb-8 md:mb-12 border-b border-gray-100 pb-6">
          <Typography 
            variant="h3" 
            as="h3" 
            className="text-[#1e293b] font-bold text-2xl md:text-3xl mb-3 mt-0! italic-none"
          >
            Types of Home Loans in India
          </Typography>
          <Typography 
            variant="s2" 
            className="text-gray-500 text-sm md:text-base max-w-3xl mt-0! leading-relaxed"
          >
            Home loans are designed to meet different financial needs. Choose the one that fits your goal.
          </Typography>
        </div>

        {/* --- RESPONSIVE LAYOUT --- */}
        <div className="grid grid-cols-1 gap-4 md:gap-10">
          {typesData.map((item, index) => (
            <div 
              key={index} 
              className="bg-white md:bg-transparent p-5 md:p-0 rounded-2xl md:rounded-none shadow-sm md:shadow-none border border-gray-100 md:border-0 md:border-b md:border-gray-50 md:pb-10 group"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-12 items-start">
                
                {/* Left Side: Icon + Title */}
                <div className="md:col-span-4 flex items-center gap-3 md:block">
                  {/* Icon only visible on mobile for better visual cues */}
                  <div className="md:hidden p-2 bg-blue-50 rounded-lg">
                    {item.icon}
                  </div>
                  
                  <Typography 
                    variant="h5" 
                    as="h3" 
                    className="text-[#0f172a] font-bold text-lg md:text-xl leading-tight mt-0!"
                  >
                    {item.title}
                  </Typography>
                </div>

                {/* Right Side: Description */}
                <div className="md:col-span-8">
                  <Typography 
                    variant="s2" 
                    className="text-[#475569] text-sm md:text-lg leading-relaxed font-normal mt-0!"
                  >
                    {item.desc}
                  </Typography>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TypesOfHomeLoans;