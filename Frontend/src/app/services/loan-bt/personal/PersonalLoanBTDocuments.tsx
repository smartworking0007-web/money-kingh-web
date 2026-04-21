"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import {
  FileText,
  User,
  Wallet,
  Landmark,
  History,
  Briefcase,
  ShieldCheck,
} from "lucide-react";

export default function PersonalLoanBTDocuments() {
  const salariedDocs = [
    { icon: <User size={16} />, title: "PAN Card" },
    { icon: <ShieldCheck size={16} />, title: "Aadhaar Card / Address Proof" },
    { icon: <Wallet size={16} />, title: "Salary Slips (last 3 months)" },
    { icon: <Landmark size={16} />, title: "Bank Statement (last 6 months)" },
    { icon: <History size={16} />, title: "Existing Loan Statement" },
  ];

  const selfEmployedDocs = [
    { icon: <User size={16} />, title: "PAN Card" },
    { icon: <ShieldCheck size={16} />, title: "Aadhaar Card" },
    { icon: <Briefcase size={16} />, title: "Business Proof" },
    { icon: <FileText size={16} />, title: "ITR (last 2 years)" },
    { icon: <Landmark size={16} />, title: "Bank Statement (last 6 months)" },
    { icon: <History size={16} />, title: "Existing Loan Details" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-12 py-10 bg-white font-lexend -mt-15 md:-mt-10 relative z-10">
      {/* --- HEADER --- */}
      <div className="text-center mb-10">
        <Typography
          variant="h4"
          as="h3"
          className="text-[#1e293b] font-black text-xl md:text-3xl mb-3 mt-0"
        >
          Documents Required for PL BT & Top-up
        </Typography>
        <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full" />
      </div>

      {/* --- DOCUMENTS CARDS --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* For Salaried Individuals */}
        <div className="bg-white border border-slate-100 rounded-32px p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-600 p-2 rounded-xl text-white">
              <User size={20} />
            </div>
            <Typography variant="h5" className="font-bold text-slate-800 m-0">
              For Salaried Individuals
            </Typography>
          </div>

          <div className="space-y-4">
            {salariedDocs.map((doc, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 py-2 border-b border-slate-50 last:border-0"
              >
                <div className="text-blue-600 shrink-0">{doc.icon}</div>
                <span className="text-slate-600 font-medium text-sm md:text-base">
                  {doc.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* For Self-Employed */}
        <div className="bg-slate-50 border border-slate-100 rounded-32px p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-600 p-2 rounded-xl text-white">
              <Briefcase size={20} />
            </div>
            <Typography variant="h5" className="font-bold text-slate-800 m-0">
              For Self-Employed
            </Typography>
          </div>

          <div className="space-y-4">
            {selfEmployedDocs.map((doc, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 py-2 border-b border-white last:border-0"
              >
                <div className="text-blue-600 shrink-0">{doc.icon}</div>
                <span className="text-slate-600 font-medium text-sm md:text-base">
                  {doc.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
