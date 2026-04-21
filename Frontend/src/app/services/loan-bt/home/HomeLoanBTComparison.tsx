"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";

export default function HomeLoanBTComparison() {
  const tableData = [
    {
      criteria: "Eligible Profiles",
      express: "Salaried & Self-Employed",
      normal: "Salaried & Self-Employed (Non-Professional)",
    },
    {
      criteria: "Age Limit",
      express: "SE: 23–70 yrs | Sal: 21–60 yrs",
      normal: "SE: 23–70 yrs | Sal: 21–60 yrs",
    },
    {
      criteria: "Credit Score",
      express: "725+ Preferred",
      normal: "725+ Preferred",
    },
    { criteria: "Minimum EMI Paid", express: "12 Months", normal: "12 Months" },
    {
      criteria: "Maximum Loan Amount",
      express: "Up to ₹5 Crore",
      normal: "Up to ₹5 Crore",
    },
    {
      criteria: "Eligibility Basis",
      express: "Based on Repayment Track",
      normal: "Based on Income (Min ₹12,000/mo)",
    },
    {
      criteria: "Top-Up Calculation",
      express: "On Original Loan Amount",
      normal: "On BT Outstanding Amount",
    },
    {
      criteria: "Top-Up (12–18 Months)",
      express: "Up to 100%",
      normal: "Up to 20%",
    },
    {
      criteria: "Top-Up (19–24 Months)",
      express: "Up to 120%",
      normal: "Up to 50%",
    },
    {
      criteria: "Top-Up (>24 Months)",
      express: "Up to 135%",
      normal: "Up to 100%",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-12 py-12 font-lexend bg-white relative z-20">
      {/* --- HEADER --- */}
      <div className="text-center mb-10">
        <Typography
          variant="h3"
          as="h3"
          className="text-[#1e293b] font-black text-xl md:text-3xl mb-3"
        >
          Money King Financial –{" "}
          <span className="text-blue-600">BT Options</span>
        </Typography>
        <Typography className="text-slate-500 text-sm md:text-base font-medium">
          Ready for a BT Upgrade? Let&apos;s Find Out!
        </Typography>
      </div>

      {/* --- COMPARISON TABLE CONTAINER --- */}
      <div className="overflow-x-auto border border-slate-100 rounded-24px shadow-xl shadow-slate-200/50">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="bg-[#8B1D1D]">
              {" "}
              {/* Deep Red Header like reference */}
              <th className="p-5 text-white font-bold text-sm md:text-base rounded-tl-24px">
                Criteria
              </th>
              <th className="p-5 text-white font-bold text-sm md:text-base">
                Express BT
              </th>
              <th className="p-5 text-white font-bold text-sm md:text-base rounded-tr-24px">
                Normal BT
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {tableData.map((row, index) => (
              <tr
                key={index}
                className={`transition-colors hover:bg-blue-50/50 ${index % 2 === 0 ? "bg-white" : "bg-slate-50/30"}`}
              >
                <td className="p-4 md:p-5 text-[#1e293b] font-bold text-xs md:text-sm bg-slate-50/50 border-r border-slate-100">
                  {row.criteria}
                </td>
                <td className="p-4 md:p-5 text-slate-600 font-medium text-xs md:text-sm">
                  {row.express}
                </td>
                <td className="p-4 md:p-5 text-slate-600 font-medium text-xs md:text-sm">
                  {row.normal}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* --- NOTE SECTION --- */}
      <div className="mt-8 p-6 bg-blue-50 border border-blue-100 rounded-2xl">
        <Typography className="text-blue-800 text-[11px] md:text-xs leading-relaxed font-medium ">
          <strong>Note:</strong> Loan approval, eligibility, and top-up limits
          are subject to lender policies including Money King Home Finance
          Company and partner institutions. Final terms are determined after
          thorough document verification.
        </Typography>
      </div>
    </div>
  );
}
