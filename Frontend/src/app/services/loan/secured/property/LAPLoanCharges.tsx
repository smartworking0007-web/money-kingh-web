"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";

const LAPLoanCharges = () => {
  const chargesData = [
    {
      title: "Processing Fee",
      amount: "Up to 1% – 3% of the loan amount + GST",
      desc: "One-time fee charged at the time of loan processing.",
    },
    {
      title: "Login / Application Fee",
      amount: "₹2,500 – ₹10,000 (Non-refundable)",
      desc: "Charged during application submission.",
    },
    {
      title: "Legal & Valuation Charges",
      amount: "₹3,000 – ₹10,000",
      desc: "Covers property verification and legal assessment.",
    },
    {
      title: "Documentation & Stamp Duty",
      amount: "Applicable as per state laws",
      desc: "Charges vary based on loan agreement value.",
    },
    {
      title: "Prepayment / Foreclosure Charges",
      amount: "0% – 4% depending on lender and loan type",
      desc: "May vary for floating vs fixed interest rate loans.",
    },
    {
      title: "EMI Bounce Charges",
      amount: "₹400 – ₹1,000 per instance",
      desc: "Applicable on failed EMI payments.",
    },
    {
      title: "Late Payment / Penal Charges",
      amount: "Up to 2% per month on overdue EMI",
      desc: "Applied in case of delayed payments.",
    },
  ];

  return (
    <section className="w-full bg-white py-8 md:py-16 px-4 md:px-12 font-lexend">
      <div className="max-w-7xl mx-auto">
        {/* --- HEADER SECTION --- */}
        <div className="mb-8">
          <Typography
            variant="h4"
            as="h3"
            className="text-[#1e293b] font-bold text-[24px] md:text-[32px] mb-2 tracking-tight mt-0!"
          >
            Charges Related to LAP Loan
          </Typography>

          <Typography
            variant="b1"
            as="h5"
            className="text-gray-500 text-sm md:text-lg font-normal mt-0!"
          >
            We ensure complete transparency with no hidden costs. Below are the standard charges applicable on a Loan Against Property.
          </Typography>
        </div>

        {/* --- RESPONSIVE TABLE --- */}
        <div className="w-full border border-gray-200 rounded-sm overflow-hidden shadow-sm">
          {/* Desktop Header */}
          <div className="hidden md:flex bg-[#0056b3] text-white">
            <div className="w-1/3 p-4 font-bold text-lg border-r border-white/20 uppercase tracking-wider">
              Fees and charges
            </div>
            <div className="w-2/3 p-4 font-bold text-lg uppercase tracking-wider">
              Amount & Details
            </div>
          </div>

          {/* Table Body */}
          <div className="flex flex-col">
            {chargesData.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row border-b border-gray-100 ${
                  index % 2 !== 0 ? "bg-[#f8f9fa]" : "bg-white"
                } hover:bg-blue-50 transition-colors duration-200`}
              >
                {/* Column 1: Title */}
                <div className="w-full md:w-1/3 p-4 md:p-5 flex items-center bg-[#0056b3]/5 md:bg-transparent border-b md:border-b-0 md:border-r border-gray-100">
                  <span className="font-bold md:font-semibold text-[#1e293b] text-sm md:text-base">
                    {item.title}
                  </span>
                </div>

                {/* Column 2: Amount & Description */}
                <div className="w-full md:w-2/3 p-4 md:p-5">
                  <p className="text-[#0056b3] font-bold text-sm md:text-[16px] mb-1">
                    {item.amount}
                  </p>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LAPLoanCharges;