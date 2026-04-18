"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";

export default function InvestmentComparisonContent() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-12 py-10 font-lexend">
      {/* --- TOP SECTION --- */}
      <div className="text-center mb-10">
        <Typography
          variant="h3"
          as="h3"
          className="text-[#1e293b] font-black mb-6 text-2xl md:text-[38px] leading-tight mt-0"
        >
          When Should You Invest a Lump Sum or an SIP?
        </Typography>

        <div className="max-w-5xl mx-auto mb-10">
          <p className="text-gray-500 leading-relaxed text-sm md:text-[18px] mt-0">
            Investing via a lump sum or an SIP depends on your comfort with
            risk, the investible you have available and how the market looks at
            the time. A lump sum works well when you have a considerable amount
            ready and want the complete amount to begin compounding quickly. An
            SIP disseminates your investment throughout months, which makes it
            easier to manage market ups and downs.
            {/* Conditional Content */}
            <span className={`${isExpanded ? "inline" : "hidden"}`}>
              {" "}
              Both methods have their own merits. While Lump Sum can offer
              higher returns in a bull market, SIP provides a psychological
              cushion and financial discipline, ensuring you stay invested
              across different market cycles without worrying about timing the
              entry perfectly.
            </span>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="ml-2 text-[#D84B7E] hover:text-[#b03a64] font-bold underline-offset-4 border-b-2 border-[#D84B7E] transition-all cursor-pointer bg-transparent border-none py-0 text-sm md:text-base"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </p>
        </div>
      </div>

      {/* --- COMPARISON TABLE SECTION --- */}
      <div className="max-w-4xl mx-auto">
        <Typography
          variant="h4"
          className="text-center text-slate-800 font-bold mb-6 text-xl md:text-2xl mt-0"
        >
          Lump Sum & SIP: A Quick Look at Objectives
        </Typography>

        <div className="overflow-x-auto rounded-2xl border border-slate-100 shadow-sm">
          <table className="w-full text-left border-collapse bg-white">
            <thead>
              <tr className="bg-slate-50">
                <th className="p-4 md:p-5 border-b border-slate-100 text-[#D84B7E] font-black uppercase tracking-wider text-xs md:text-sm">
                  Lump Sum Investment
                </th>
                <th className="p-4 md:p-5 border-b border-slate-100 text-[#004687] font-black uppercase tracking-wider text-xs md:text-sm">
                  SIP (Systematic Investment Plan)
                </th>
              </tr>
            </thead>
            <tbody className="text-slate-600 text-[13px] md:text-base font-medium">
              <tr>
                <td className="p-4 md:p-5 border-b border-slate-50">
                  You invest the full amount at once.
                </td>
                <td className="p-4 md:p-5 border-b border-slate-50">
                  You invest smaller amounts regularly.
                </td>
              </tr>
              <tr className="bg-slate-50/30">
                <td className="p-4 md:p-5 border-b border-slate-50">
                  Works well in stable or rising markets.
                </td>
                <td className="p-4 md:p-5 border-b border-slate-50">
                  Ideal during volatile markets due to rupee-cost averaging.
                </td>
              </tr>
              <tr>
                <td className="p-4 md:p-5 border-b border-slate-50">
                  Suitable when you have surplus funds.
                </td>
                <td className="p-4 md:p-5 border-b border-slate-50">
                  Suitable when building wealth gradually.
                </td>
              </tr>
              <tr className="bg-slate-50/30">
                <td className="p-4 md:p-5">
                  Higher immediate market exposure.
                </td>
                <td className="p-4 md:p-5">
                  Lower short-term risk because investments are staggered.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
