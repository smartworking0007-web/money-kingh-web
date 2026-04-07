"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import { CheckCircle2, XCircle } from "lucide-react";

const HomeLoanDosDonts = () => {
  const data = [
    {
      do: "Ensure that you have researched on the loan you want to apply for",
      dont: "Do not blindly sign the documents before you read every term and condition on it",
    },
    {
      do: "Read the fine print before taking the loan",
      dont: "Do not forget to compare interest rates offered by different loan providers",
    },
    {
      do: "Look out for any charges applicable on prepayments and foreclosure",
      dont: "Do not default on your monthly payments",
    },
    {
      do: "Make sure you pay the equated monthly instalments (EMIs) on time",
      dont: "Do not apply for a loan just for the sake of it",
    },
    {
      do: "Ensure that you have a good credit score before you apply",
      dont: "Do not sign the home loan agreement before reading the clauses",
    },
    {
      do: "Apply for a loan amount you are eligible for",
      dont: "Do not request for a change in tenure unless you have considered all the aspects",
    },
    {
      do: "Submit all the necessary documents",
      dont: "Do not submit an incomplete or mismatched loan application",
    },
    {
      do: "Ensure that you have stable employment",
      dont: "Do not have too many ongoing loans",
    },
  ];

  return (
    <section className="w-full bg-white py-10 md:py-20 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Meta Title */}
        <Typography
          variant="h3"
          className="text-2xl md:text-4xl font-bold text-slate-900 mb-8 md:mb-12 border-l-4 border-blue-600 pl-4"
        >
          Home Loan Rejection: The Ultimate Do&apos;s & Don&apos;ts
        </Typography>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-8 py-5 text-lg font-bold text-emerald-700 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6" /> Do&apos;s
                </th>
                <th className="px-8 py-5 text-lg font-bold text-red-600">
                  <div className="flex items-center gap-2">
                    <XCircle className="w-6 h-6" /> Don&apos;ts
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {data.map((item, index) => (
                <tr key={index} className="hover:bg-slate-50 transition-colors">
                  <td className="px-8 py-4 text-slate-600 text-[15px] leading-relaxed border-r border-slate-100 w-1/2">
                    {item.do}
                  </td>
                  <td className="px-8 py-4 text-slate-600 text-[15px] leading-relaxed w-1/2">
                    {item.dont}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Responsive View (Optimized Cards) */}
        <div className="md:hidden space-y-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm"
            >
              {/* Do Section */}
              <div className="p-4 bg-emerald-50/30 flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-[14px] text-slate-700 leading-snug">
                  <span className="font-bold text-emerald-700">Do:</span> {item.do}
                </p>
              </div>
              
              {/* Separator - Fixed to h-px */}
              <div className="h-px bg-slate-200 w-full" />
              
              {/* Don't Section */}
              <div className="p-4 bg-red-50/30 flex gap-3">
                <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <p className="text-[14px] text-slate-700 leading-snug">
                  <span className="font-bold text-red-700">Don&apos;t:</span> {item.dont}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeLoanDosDonts;