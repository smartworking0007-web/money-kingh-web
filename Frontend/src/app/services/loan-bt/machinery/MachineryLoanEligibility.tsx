"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import { CheckCircle2, FileText, UserCheck, Briefcase } from "lucide-react";

export default function MachineryLoanEligibility() {
  const eligibility = [
    { label: "Nationality", value: "Indian Resident" },
    {
      label: "Age Limit",
      value: "Min: 21–24 yrs | Max: Up to 65–70 yrs (at maturity)",
    },
    {
      label: "Business Type",
      value: "Proprietorship / Partnership / LLP / Pvt Ltd",
    },
    { label: "Business Vintage", value: "Minimum 2–3 Years" },
    { label: "Credit Score", value: "650+ (700+ preferred for better rates)" },
    {
      label: "Repayment Track",
      value: "Good EMI history with no major defaults",
    },
    {
      label: "Income Stability",
      value: "Consistent business turnover and profitability",
    },
  ];

  const docCategories = [
    {
      title: "KYC Documents",
      icon: <UserCheck className="w-5 h-5 text-[#8B1D1D]" />,
      list: [
        "PAN Card (Individual & Business)",
        "Aadhaar / Passport / Voter ID",
        "Recent passport-size photograph",
      ],
    },
    {
      title: "Business & Address Proof",
      icon: <Briefcase className="w-5 h-5 text-[#8B1D1D]" />,
      list: [
        "GST Registration Certificate",
        "Udyam Registration / MSME Certificate",
        "Shop & Establishment License",
        "Partnership Deed / Incorporation Cert.",
      ],
    },
    {
      title: "Financial Documents",
      icon: <FileText className="w-5 h-5 text-[#8B1D1D]" />,
      list: [
        "Bank Statements (6–12 months)",
        "ITR (last 2–3 years)",
        "P&L Statement & Balance Sheet",
        "GST Returns",
      ],
    },
    {
      title: "Machinery & Loan Docs",
      icon: <CheckCircle2 className="w-5 h-5 text-[#8B1D1D]" />,
      list: [
        "Current Loan Statement & Sanction Letter",
        "EMI Repayment Track Record",
        "Machinery Invoice / Purchase Bill",
        "Valuation Report (if required)",
      ],
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-5 md:px-12 py-16 font-lexend bg-white">
      {/* --- HEADER --- */}
      <div className="text-center mb-12">
        <Typography
          variant="h4"
          as="h4"
          className="text-[#1e293b] font-black text-2xl md:text-4xl mb-4"
        >
          Eligibility & Documents Required
        </Typography>
        <Typography
          variant="s2"
          as="h5"
          className="text-slate-500 font-medium text-sm md:text-lg max-w-4xl mx-auto leading-relaxed"
        >
          To apply for Machinery Loan Balance Transfer (BT) / Refinance &
          Top-Up, you need to meet basic eligibility criteria and submit
          essential documents for smooth processing.
        </Typography>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* --- ELIGIBILITY CARD --- */}
        <div className="bg-slate-50 rounded-32px p-6 md:p-10 border border-slate-100 shadow-xl shadow-slate-100/50">
          <Typography
            variant="h5"
            className="text-[#1e293b] font-black mb-8 flex items-center gap-3 text-xl md:text-2xl"
          >
            <span className="w-2 h-8 bg-[#8B1D1D] rounded-full inline-block" />
            Eligibility Criteria
          </Typography>
          <div className="space-y-4">
            {eligibility.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row md:items-center justify-between py-3 border-b border-slate-200/60 last:border-0 gap-1 md:gap-4"
              >
                <span className="text-[#8B1D1D] font-bold text-xs md:text-sm uppercase tracking-wider">
                  {item.label}
                </span>
                <span className="text-slate-700 font-semibold text-sm md:text-base md:text-right">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[10px] md:text-xs text-slate-400 font-medium leading-relaxed">
            *Higher age limit may be considered at loan maturity as per lender
            policies.
          </p>
        </div>

        {/* --- DOCUMENTS GRID --- */}
        <div className="space-y-6">
          <Typography
            variant="h5"
            className="text-[#1e293b] font-black mb-4 flex items-center gap-3 text-xl md:text-2xl"
          >
            <span className="w-2 h-8 bg-slate-300 rounded-full inline-block" />
            Required Documents
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {docCategories.map((cat, idx) => (
              <div
                key={idx}
                className="p-5 border border-red-50 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-red-50 rounded-lg">{cat.icon}</div>
                  <span className="font-bold text-slate-800 text-sm md:text-base leading-tight">
                    {cat.title}
                  </span>
                </div>
                <ul className="space-y-2">
                  {cat.list.map((li, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-slate-500 text-[11px] md:text-xs leading-snug"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-red-200 mt-1 shrink-0" />
                      {li}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
