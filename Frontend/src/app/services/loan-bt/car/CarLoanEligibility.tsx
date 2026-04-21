"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";

export default function CarLoanEligibility() {
  const [activeTab, setActiveTab] = useState<"eligibility" | "documentation">(
    "eligibility",
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 bg-white font-lexend relative z-20">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        
        {/* --- LEFT SIDE: SIDEBAR TABS --- */}
        <div className="w-full md:w-1/4 flex flex-col border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
          <button
            onClick={() => setActiveTab("eligibility")}
            className={`px-6 py-5 text-left font-bold transition-all ${
              activeTab === "eligibility"
                ? "bg-[#8B1D1D] text-white"
                : "bg-slate-50 text-slate-600 hover:bg-slate-100"
            }`}
          >
            Eligibility Criteria
          </button>
          <button
            onClick={() => setActiveTab("documentation")}
            className={`px-6 py-5 text-left font-bold transition-all ${
              activeTab === "documentation"
                ? "bg-[#8B1D1D] text-white"
                : "bg-slate-50 text-slate-600 hover:bg-slate-100"
            }`}
          >
            Documents Required
          </button>
        </div>

        {/* --- RIGHT SIDE: CONTENT AREA --- */}
        <div className="w-full md:w-3/4 animate-in fade-in slide-in-from-bottom-2 duration-500">
          {activeTab === "eligibility" ? (
            <div className="space-y-6">
              <Typography
                variant="h3"
                as="h3"
                className="text-[#1e293b] font-black text-2xl md:text-3xl mb-2"
              >
                Eligibility Criteria
              </Typography>
              <Typography
                variant="h5"
                as="h5"
                className="text-[#8B1D1D] font-bold text-base md:text-lg mb-6"
              >
                To apply for Car Loan Balance Transfer & Top-Up, you must meet:
              </Typography>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Age", desc: "21 to 65 years" },
                  { title: "Employment", desc: "Salaried / Self-employed" },
                  { title: "Credit Score", desc: "650+ (700+ preferred)" },
                  { title: "Existing Loan", desc: "Minimum 6–12 EMIs paid" },
                  { title: "Income Stability", desc: "Regular income source" },
                  { title: "Vehicle Ownership", desc: "Car should be financed and registered" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="shrink-0 w-6 h-6 bg-[#8B1D1D] text-white rounded-full flex items-center justify-center text-[12px]">
                      ✓
                    </span>
                    <p className="text-slate-700 text-sm md:text-base">
                      <span className="font-bold">{item.title}:</span> {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              <div>
                <Typography
                  variant="h3"
                  as="h3"
                  className="text-[#1e293b] font-black text-2xl md:text-3xl mb-6"
                >
                  Documents Required
                </Typography>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* KYC & Photos */}
                  <div className="space-y-4">
                    <Typography className="text-[#8B1D1D] font-black text-sm uppercase tracking-widest">
                      KYC & Photos
                    </Typography>
                    <ul className="space-y-3">
                      {["PAN Card", "Aadhaar Card / Address Proof", "Passport-size photographs"].map((li, i) => (
                        <li key={i} className="flex items-center gap-2 text-slate-600 text-sm md:text-base">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-400" /> {li}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Income Proof */}
                  <div className="space-y-4">
                    <Typography className="text-[#8B1D1D] font-black text-sm uppercase tracking-widest">
                      Income Proof
                    </Typography>
                    <ul className="space-y-3">
                      <li className="text-slate-600 text-sm md:text-base">
                        <span className="font-bold">Salaried:</span> Salary slips (last 3 months)
                      </li>
                      <li className="text-slate-600 text-sm md:text-base">
                        <span className="font-bold">Self-employed:</span> ITR (last 2–3 years)
                      </li>
                    </ul>
                  </div>

                  {/* Financial Documents */}
                  <div className="space-y-4">
                    <Typography className="text-[#8B1D1D] font-black text-sm uppercase tracking-widest">
                      Financial Documents
                    </Typography>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2 text-slate-600 text-sm md:text-base">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400" /> Bank Statements (last 6 months)
                      </li>
                    </ul>
                  </div>

                  {/* Vehicle Documents */}
                  <div className="space-y-4">
                    <Typography className="text-[#8B1D1D] font-black text-sm uppercase tracking-widest">
                      Loan & Vehicle Documents
                    </Typography>
                    <ul className="space-y-3">
                      {["Existing Loan Statement", "RC (Registration Certificate)", "Insurance papers", "Invoice (if required)"].map((li, i) => (
                        <li key={i} className="flex items-center gap-2 text-slate-600 text-sm md:text-base">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-400" /> {li}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}