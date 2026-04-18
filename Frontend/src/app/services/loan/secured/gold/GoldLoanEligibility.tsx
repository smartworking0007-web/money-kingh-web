"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";

export default function GoldLoanEligibility() {
  const [activeTab, setActiveTab] = useState<"eligibility" | "documentation">(
    "eligibility",
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 bg-white font-lexend">
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
                variant="h3"
                as="h3"
                className="text-[#1e293b] font-bold text-2xl md:text-3xl mb-4"
              >
                Eligibility Criteria for gold loan in India
              </Typography>
              <p className="text-slate-500 mb-8 leading-relaxed">
                Your gold loan eligibility is defined by simple checks. Fulfil
                these to get your loan approved quickly:
              </p>

              <ul className="space-y-4">
                {[
                  {
                    title: "Residency",
                    desc: "Applicant must be an Indian resident.",
                  },
                  {
                    title: "Age Criteria",
                    desc: "Applicant must be aged between 18 to 70 years.",
                  },
                  {
                    title: "Ownership of Gold",
                    desc: "Possession of physical gold jewellery or coins (18–24 karat purity).",
                  },
                  {
                    title: "Income",
                    desc: "No strict income requirement or high CIBIL score needed.",
                  },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1 shrink-0 w-5 h-5 bg-teal-500 text-white rounded-full flex items-center justify-center text-[10px]">
                      ✓
                    </span>
                    <p className="text-slate-700">
                      <span className="font-bold">{item.title}:</span>{" "}
                      {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="space-y-6">
              <Typography
                variant="h3"
                as="h3"
                className="text-[#1e293b] font-bold text-2xl md:text-3xl mb-4"
              >
                Documents Required for gold loan in India
              </Typography>
              <p className="text-slate-500 mb-8 leading-relaxed">
                Keep these documents ready for a seamless and paperless
                onboarding process:
              </p>

              <ul className="space-y-4">
                {[
                  {
                    title: "Identity Proof",
                    desc: "Valid documents like PAN Card, Voter ID, or Passport (Note: [Aadhaar Redacted]).",
                  },
                  {
                    title: "Address Proof",
                    desc: "Utility bills, Rent agreement, or any government-issued address proof.",
                  },
                  {
                    title: "Photographs",
                    desc: "Two recent passport-size photographs of the applicant.",
                  },
                  {
                    title: "Asset for Valuation",
                    desc: "The physical gold jewellery intended for pledging.",
                  },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1 shrink-0 w-5 h-5 bg-teal-500 text-white rounded-full flex items-center justify-center text-[10px]">
                      ✓
                    </span>
                    <p className="text-slate-700">
                      <span className="font-bold">{item.title}:</span>{" "}
                      {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
