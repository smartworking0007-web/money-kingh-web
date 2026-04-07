"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";

const HomeLoanCharges = () => {
  const chargesData = [
    {
      title: "Processing Fees",
      desc: "Lenders charge a processing fee for evaluating your home loan application. This is usually a small percentage of the loan amount and may vary from lender to lender.",
    },
    {
      title: "Prepayment / Foreclosure Charges",
      desc: "Some lenders may charge fees if you repay your loan before the tenure ends. However, most floating rate home loans come with zero or minimal prepayment charges.",
    },
    {
      title: "Late Payment Charges",
      desc: "If you miss your EMI due date, a penalty is charged on the overdue amount. Timely payments help you avoid extra costs and maintain a good credit score.",
    },
    {
      title: "Legal & Technical Charges",
      desc: "These charges cover property verification, legal checks, and technical evaluation conducted by the lender before approving the loan.",
    },
    {
      title: "Documentation Charges",
      desc: "A nominal fee may be charged for preparing and processing loan-related documents.",
    },
    {
      title: "Conversion Charges",
      desc: "If you choose to switch from a higher interest rate to a lower rate within the same lender, a conversion fee may be applicable.",
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
            className="text-[#1e293b] font-bold text-[24px] md:text-[32px] mb-2 tracking-tight"
          >
            Charges Related to Home Loan
          </Typography>

          <Typography
            variant="h5"
            as="h5"
            className="text-gray-500 text-sm md:text-lg font-normal "
          >
            The fees and charges related to home loan are mentioned in the table
            below:
          </Typography>
        </div>

        {/* --- RESPONSIVE TABLE / MOBILE CARDS --- */}
        <div className="w-full border border-gray-200 rounded-sm overflow-hidden">
          {/* Desktop Header (Hidden on Mobile) */}
          <div className="hidden md:flex bg-[#0056b3] text-white">
            <div className="w-1/3 p-4 font-bold text-lg border-r border-white/20">
              Fees and charges
            </div>
            <div className="w-2/3 p-4 font-bold text-lg">Amount</div>
          </div>

          {/* Table Body / Mobile Cards */}
          <div className="flex flex-col">
            {chargesData.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row border-b border-gray-100 ${
                  index % 2 !== 0 ? "bg-[#f8f9fa]" : "bg-white"
                }`}
              >
                {/* Column 1: Title */}
                <div className="w-full md:w-1/3 p-4 md:p-5 flex items-center bg-[#0056b3]/5 md:bg-transparent border-b md:border-b-0 md:border-r border-gray-100">
                  <span className="font-bold md:font-medium text-[#1e293b] text-sm md:text-base">
                    {item.title}
                  </span>
                </div>

                {/* Column 2: Description */}
                <div className="w-full md:w-2/3 p-4 md:p-5">
                  <p className="text-gray-600 text-sm md:text-[16px] leading-relaxed">
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

export default HomeLoanCharges;
