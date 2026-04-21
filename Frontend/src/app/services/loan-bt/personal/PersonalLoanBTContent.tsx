"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";
import { ArrowRightLeft, PlusCircle, TrendingDown, CheckCircle2 } from "lucide-react";

export default function PersonalLoanBTContent() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Feature Highlights Data
  const features = [
    {
      icon: <TrendingDown className="w-6 h-6 text-blue-600" />,
      title: "Lower Interest Rate",
      desc: "Switch your existing high-interest loan to a lender offering lower ROI."
    },
    {
      icon: <PlusCircle className="w-6 h-6 text-blue-600" />,
      title: "Additional Top-Up",
      desc: "Borrow extra funds over your outstanding balance for any personal need."
    },
    {
      icon: <ArrowRightLeft className="w-6 h-6 text-blue-600" />,
      title: "EMI Reduction",
      desc: "Lower your monthly installments and manage your cash flow better."
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-blue-600" />,
      title: "Minimal Paperwork",
      desc: "Fast-track processing with simple documentation and quick approval."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-20 font-lexend">
      
      {/* --- HEADER SECTION --- */}
      <div className="text-center mb-16">
        <Typography
          variant="h3"
          as="h2"
          className="text-[#1e293b] font-black mb-4 text-2xl md:text-[42px] mt-0"
        >
          Personal Loan Balance Transfer & Top-Up
        </Typography>

        <Typography
          variant="h5"
          as="h4"
          className=" mb-8 text-lg md:text-xl uppercase tracking-wide mt-0"
        >
          Reduce Your EMI & Get Extra Funds Easily
        </Typography>

        <div className="max-w-5xl mx-auto border-b border-gray-200 pb-12">
          <p className="text-gray-500 leading-relaxed text-base md:text-[18px] mt-0 text-center">
            A Personal Loan Balance Transfer allows you to transfer your existing loan from one lender to another at a lower interest rate. Along with this, you can also avail a Top-Up Loan, which provides additional funds over and above your outstanding loan amount.
            
            {/* Conditional Content (Read More) */}
            <span className={`${isExpanded ? "inline" : "hidden"}`}>
              {" "} This facility helps you reduce your financial burden while meeting additional financial needs such as medical emergencies, weddings, travel, or business expansion. By opting for a Balance Transfer, you not only save on interest but can also restructure your loan tenure to better suit your current financial situation. It is a smart financial move for anyone looking to optimize their debt and gain extra liquidity simultaneously.
            </span>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="ml-2 text-[#004687] hover:text-[#003566] font-bold underline underline-offset-4 transition-all cursor-pointer bg-transparent border-none py-0"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </p>
        </div>
      </div>

      {/* --- FEATURES GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((item, index) => (
          <div 
            key={index} 
            className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-xl hover:bg-white transition-all duration-300 group"
          >
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              {item.icon}
            </div>
            <Typography className="text-slate-800 font-bold text-lg mb-3 mt-0">
              {item.title}
            </Typography>
            <Typography className="text-slate-500 text-sm leading-relaxed mt-0">
              {item.desc}
            </Typography>
          </div>
        ))}
      </div>

    </div>
  );
}