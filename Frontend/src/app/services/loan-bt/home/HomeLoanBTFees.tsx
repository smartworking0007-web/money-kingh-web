"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import { ReceiptText, Info } from "lucide-react";

export default function HomeLoanBTFees() {
  const charges = [
    { type: "Processing Fee", details: "0.5% – 1.5% of loan amount" },
    { type: "Legal & Technical Charges", details: "As per lender" },
    {
      type: "Prepayment Charges",
      details: "Nil (for floating rate in most cases)",
    },
    { type: "Foreclosure Charges", details: "As per lender policy" },
    { type: "Stamp Duty", details: "As per state laws" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-12 py-12 font-lexend bg-white relative z-20">
      {/* --- HEADER (Centered) --- */}
      <div className="flex flex-col items-center gap-3 mb-10 text-center">
        <div className="bg-blue-100 p-3 rounded-2xl text-blue-600 shadow-sm">
          <ReceiptText size={28} />
        </div>
        <div>
          <Typography variant="h4" as="h4">
            Fees & Charges in HL (BT & Top UP)
          </Typography>
        </div>
      </div>

      {/* --- CHARGES TABLE (Centered with mx-auto) --- */}
      <div className="max-w-3xl mx-auto border border-slate-100 rounded-32px overflow-hidden shadow-xl shadow-slate-100/50">
        {/* Table Header */}
        <div className="grid grid-cols-2 bg-slate-50 p-5 border-b border-slate-100">
          <Typography className="text-[#1e293b] font-bold text-xs md:text-sm uppercase tracking-widest text-center border-r border-slate-200">
            Charges Type
          </Typography>
          <Typography className="text-[#1e293b] font-bold text-xs md:text-sm uppercase tracking-widest text-center">
            Details
          </Typography>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-slate-100">
          {charges.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-2 p-5 hover:bg-blue-50/30 transition-all group"
            >
              <Typography className="text-slate-700 font-bold text-sm md:text-base m-0 text-center flex items-center justify-center gap-2 border-r border-slate-100">
                <span className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                {item.type}
              </Typography>
              <Typography className="text-slate-500 font-medium text-sm md:text-base m-0 text-center flex items-center justify-center italic md:not-italic px-2">
                {item.details}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      {/* --- DISCLAIMER (Centered) --- */}
      <div className="mt-8 flex flex-col items-center text-center max-w-2xl mx-auto px-4">
        <div className="flex items-center gap-2 text-slate-400 mb-2">
          <Info size={16} />
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-tighter">
            Disclaimer
          </span>
        </div>
        <p className="text-[11px] md:text-xs leading-relaxed ">
          Note: Charges mentioned above are indicative and vary depending on the
          partner bank and financial institution guidelines at the time of
          application.
        </p>
      </div>
    </div>
  );
}
