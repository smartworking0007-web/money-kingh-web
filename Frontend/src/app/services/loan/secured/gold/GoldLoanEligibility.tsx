"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";

export default function GoldLoanEligibility() {
  const [activeTab, setActiveTab] = useState<"eligibility" | "documentation">(
    "eligibility",
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 bg-white font-lexend">
      {/* --- INTEREST RATE DESCRIPTION --- */}
      <div className="mb-8">
        <Typography
          variant="h4"
          as="h4"
          className="text-[#1e293b] font-bold text-xl md:text-2xl"
        >
          Gold Loan Interest Rate: 9%–14% p.a.
        </Typography>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* --- LEFT SIDE: SIDEBAR TABS --- */}
        <div className="w-full md:w-1/4 flex flex-col border border-gray-100 rounded-xl overflow-hidden shadow-sm">
          <button
            onClick={() => setActiveTab("eligibility")}
            className={`px-6 py-5 text-left font-semibold transition-all ${
              activeTab === "eligibility"
                ? "bg-[#827d7f] text-white"
                : "bg-slate-50 text-slate-600 hover:bg-slate-100"
            }`}
          >
            Eligibility
          </button>
          <button
            onClick={() => setActiveTab("documentation")}
            className={`px-6 py-5 text-left font-semibold transition-all ${
              activeTab === "documentation"
                ? "bg-[#6b6869] text-white"
                : "bg-slate-50 text-slate-600 hover:bg-slate-100"
            }`}
          >
            Documentation
          </button>
        </div>

        {/* --- RIGHT SIDE: CONTENT AREA --- */}
        <div className="w-full md:w-3/4 animate-in fade-in duration-500">
          {activeTab === "eligibility" ? (
            <div className="space-y-6">
              <Typography
                variant="h4"
                as="h4"
                className="text-[#1e293b] font-bold text-2xl md:text-3xl mb-4"
              >
                Eligibility
              </Typography>

              <div className="border border-slate-200 rounded-lg overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-200">
                      <th className="py-3 px-4 font-semibold text-slate-700">
                        Eligibility
                      </th>
                      <th className="py-3 px-4 font-semibold text-slate-700">
                        General Requirement
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="py-3 px-4 font-medium">Residency</td>
                      <td className="py-3 px-4">Indian resident</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Age</td>
                      <td className="py-3 px-4">Lender-specific</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Gold</td>
                      <td className="py-3 px-4">Eligible gold jewellery/coins</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Purity</td>
                      <td className="py-3 px-4">Accepted purity depends on lender</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">KYC</td>
                      <td className="py-3 px-4">Valid KYC documents</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Income</td>
                      <td className="py-3 px-4">Requirements vary by product</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Credit Score</td>
                      <td className="py-3 px-4">Requirements vary by lender</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <Typography
                variant="h4"
                as="h4"
                className="text-[#1e293b] font-bold text-2xl md:text-3xl mb-4"
              >
                Documents Required for a Gold Loan
              </Typography>

              <div className="space-y-6">
                <div>
                  <p className="font-semibold text-slate-800 text-lg mb-3">
                    KYC Documents
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 shrink-0 w-5 h-5 bg-teal-500 text-white rounded-full flex items-center justify-center text-[10px]">
                        ✓
                      </span>
                      <p className="text-slate-700">PAN Card</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 shrink-0 w-5 h-5 bg-teal-500 text-white rounded-full flex items-center justify-center text-[10px]">
                        ✓
                      </span>
                      <p className="text-slate-700">
                        Aadhaar Card / accepted identity proof
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 shrink-0 w-5 h-5 bg-teal-500 text-white rounded-full flex items-center justify-center text-[10px]">
                        ✓
                      </span>
                      <p className="text-slate-700">Address proof</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 shrink-0 w-5 h-5 bg-teal-500 text-white rounded-full flex items-center justify-center text-[10px]">
                        ✓
                      </span>
                      <p className="text-slate-700">
                        Photograph, where required
                      </p>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-slate-800 text-lg mb-3">
                    Gold
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 shrink-0 w-5 h-5 bg-teal-500 text-white rounded-full flex items-center justify-center text-[10px]">
                        ✓
                      </span>
                      <p className="text-slate-700">
                        Eligible gold jewellery/coins for valuation and pledge
                      </p>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-slate-800 text-lg mb-3">
                    Additional Documents
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 shrink-0 w-5 h-5 bg-teal-500 text-white rounded-full flex items-center justify-center text-[10px]">
                        ✓
                      </span>
                      <p className="text-slate-700">
                        Any lender-specific declaration/documentation
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}