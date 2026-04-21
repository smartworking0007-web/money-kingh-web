"use client";

import React, { useState } from "react";
// Agar aapka file path alag hai toh ise check kar lein
import { Typography } from "@/app/components/ui/Typography";

export default function LAPBTContent() {
  const [isExpanded, setIsExpanded] = useState(false);

  const tableData = [
    {
      criteria: "Eligible Profiles",
      express: "Salaried & Self-Employed",
      normal: "Salaried & Self-Employed",
    },
    {
      criteria: "Age Limit",
      express: "SE: 23–70 yrs\nSalaried: 21–60 yrs",
      normal: "SE: 23–70 yrs\nSalaried: 21–60 yrs",
    },
    {
      criteria: "Credit Score",
      express: "725+ Preferred",
      normal: "725+ Preferred",
    },
    {
      criteria: "Minimum EMI Paid",
      express: "18 Months",
      normal: "12 Months",
    },
    {
      criteria: "Maximum Loan Amount",
      express: "Up to ₹5 Crore",
      normal: "Up to ₹5 Crore",
    },
    {
      criteria: "Eligibility Basis",
      express: "Based on Repayment Track Record",
      normal: "Based on Income (Min ₹12,000/month)",
    },
    {
      criteria: "Top-Up Calculation",
      express: "On Original Loan Amount",
      normal: "On BT Outstanding Amount",
    },
    {
      criteria: "Top-Up Eligibility",
      express: "≥18 months → Up to 110%",
      normal:
        "12–18 months → Only BT\n19–24 months → Up to 50%\n>24 months → Up to 100%",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-12 py-10 font-lexend bg-white relative z-30 rounded-t-[40px] -mt-40 md:-mt-60 shadow-sm">
      {/* --- SECTION 2: COMPARISON TABLE --- */}
      <div className="text-center mb-8 px-4">
        <Typography
          variant="h4"
          as="h4"
          className="text-[#1e293b] font-black text-xl md:text-3xl mb-3"
        >
          LAP Balance Transfer Eligibility | Express vs Normal BT
        </Typography>
        <Typography className="text-slate-500 text-xs md:text-base font-medium max-w-3xl mx-auto">
          Check LAP Balance Transfer eligibility for Express & Normal BT. Reduce
          EMI and get top-up loan on property with flexible criteria.
        </Typography>
      </div>

      <div className="overflow-x-auto border border-slate-200 rounded-32px shadow-2xl shadow-slate-200/60 bg-white mx-4 md:mx-0">
        <table className="w-full text-left border-collapse min-w-[750px]">
          <thead>
            <tr className="bg-[#8B1D1D]">
              <th className="p-5 text-white font-bold text-sm md:text-base rounded-tl-32px">
                Criteria
              </th>
              <th className="p-5 text-white font-bold text-sm md:text-base">
                Express BT
              </th>
              <th className="p-5 text-white font-bold text-sm md:text-base rounded-tr-32px">
                Normal BT
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {tableData.map((row, index) => (
              <tr key={index} className="hover:bg-slate-50 transition-colors">
                <td className="p-4 md:p-5 text-[#1e293b] font-bold text-xs md:text-sm bg-slate-50/50 border-r border-slate-100">
                  {row.criteria}
                </td>
                <td className="p-4 md:p-5 text-slate-700 font-semibold text-xs md:text-sm whitespace-pre-line leading-relaxed">
                  {row.express}
                </td>
                <td className="p-4 md:p-5 text-slate-600 font-medium text-xs md:text-sm whitespace-pre-line leading-relaxed">
                  {row.normal}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-8 text-slate-400 text-[10px] md:text-xs text-center">
        *Terms and conditions apply. Final terms are subject to document
        verification by Money King Financial.
      </p>
    </div>
  );
}
