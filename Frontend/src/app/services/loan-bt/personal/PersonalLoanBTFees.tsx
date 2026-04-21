"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";

export default function PersonalLoanBTFees() {
  const feeData = [
    { type: "Processing Fee", detail: "1% – 3% of loan amount" },
    { type: "Prepayment Charges", detail: "2% – 5% (if applicable)" },
    { type: "Foreclosure Charges", detail: "As per lender policy" },
    { type: "Late Payment Fee", detail: "₹500 – ₹1,000 or EMI %" },
    { type: "Stamp Duty", detail: "As per state laws" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-12 py-8 bg-white font-lexend -mt-6 md:-mt-10 relative z-10">
      
      {/* --- HEADER --- */}
      <div className="text-center mb-10">
        <Typography
          variant="h3"
          as="h3"
          className="text-[#1e293b] font-black text-xl md:text-3xl mb-3 mt-0"
        >
          Fees & Charges
        </Typography> 
      </div>

      {/* --- TABLE CONTAINER --- */}
      <div className="max-w-4xl mx-auto overflow-hidden border border-slate-100 rounded-24px shadow-sm bg-slate-50/30">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-blue-600">
                <th className="py-4 px-6 text-white font-bold text-sm md:text-base uppercase tracking-wider">
                  Charges Type
                </th>
                <th className="py-4 px-6 text-white font-bold text-sm md:text-base uppercase tracking-wider">
                  Details
                </th>
              </tr>
            </thead>
            <tbody>
              {feeData.map((item, index) => (
                <tr 
                  key={index} 
                  className="border-b border-slate-100 last:border-0 hover:bg-blue-50/50 transition-colors"
                >
                  <td className="py-4 px-6 text-slate-800 font-bold text-sm md:text-base">
                    {item.type}
                  </td>
                  <td className="py-4 px-6 text-slate-500 text-sm md:text-base font-medium">
                    {item.detail}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}