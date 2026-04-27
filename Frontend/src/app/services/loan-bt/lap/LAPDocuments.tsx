"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";

export default function LAPDocuments() {
  const docData = [
    {
      category: "Mandatory Document",
      salaried: "PAN Card",
      selfEmployedInd: "PAN Card",
      selfEmployedNonInd: "PAN Card",
    },
    {
      category: "KYC Documents",
      salaried: "Voter ID / Aadhaar / Passport / Driving License",
      selfEmployedInd: "Voter ID / Aadhaar / Passport / Driving License and Udyam Registration Certificate",
      selfEmployedNonInd: "Voter ID / Aadhaar / Passport / Driving License of beneficial owner and Udyam Registration Certificate",
    },
    {
      category: "Proof of Income",
      salaried: "Salary slip of last 3 months and Bank statement of last 6 months",
      selfEmployedInd: "P&L, Balance Sheet, ITR, and Bank statement of last 6 months",
      selfEmployedNonInd: "P&L, Balance Sheet, ITR and Bank statement of last 6 months",
    },
    {
      category: "Vintage Proof",
      salaried: "Appointment Letter / Salary Slips having date of joining",
      selfEmployedInd: "Udyam Registration Certificate / ITR / Shop and Establishment Certificate / GST certificate",
      selfEmployedNonInd: "Udyam Registration Certificate / ITR / Shop and Establishment Certificate / GST certificate",
    },
    {
      category: "Property-related Documents",
      salaried: "Title Deed, Allotment Letter, and Property Tax receipts",
      selfEmployedInd: "Title Deed, Allotment Letter, and Property Tax receipts",
      selfEmployedNonInd: "Title Deed, Allotment Letter, and Property Tax receipts",
    },
  ];

  return (
    // -mt-10 aur pt-0 se web aur mobile dono pe ye aur upar chala jayega
    <div className="max-w-7xl mx-auto px-4 md:px-12 pt-0 pb-15 font-lexend bg-white relative z-20 -mt-10 md:-mt-35">
      
      {/* --- TOP SECTION --- */}
      <div className="mb-6 md:mb-10 text-center md:text-left">
        <Typography 
          variant="h4" 
          as="h4" 
          className="text-[#1e293b] font-black text-2xl md:text-[42px] mb-4 leading-tight pt-4 md:pt-6"
        >
          A Smart Way to Manage Your Loan
        </Typography>
        <p className="text-slate-500 text-sm md:text-lg leading-relaxed max-w-5xl mx-auto md:mx-0">
          With Money King LAP, you get the advantage of digital processes, better service, 
          and the option of top-up funding whenever you need it. However, applying without 
          the necessary documents can cost you time and your application fee. 
          Before you start applying, ensure you have:
        </p>
      </div>

      {/* --- DOCUMENTS HEADER --- */}
      <div className="mb-6">
        <Typography 
          variant="h4" 
          as="h4" 
          className="text-[#8B1D1D] font-bold text-xl md:text-[34px] mb-4"
        >
          Documents Required for LAP Loan (BT & Top Up)
        </Typography>
      </div>

      {/* --- TABLE CONTAINER --- */}
      <div className="overflow-x-auto border border-red-100 rounded-[20px] shadow-2xl shadow-red-50/50">
        <table className="w-full text-left border-collapse min-w-[850px] md:min-w-[1100px]">
          <thead>
            <tr className="bg-[#8B1D1D]">
              {/* No CSS conflict here: text-white removed from the first cell */}
              <th className="p-4 md:p-6 font-bold text-sm bg-[#fef2f2] text-[#1e293b] border-b border-red-100 rounded-tl-[20px]">
                Document Category
              </th>
              <th className="p-4 md:p-6 text-white font-bold text-sm border-l border-red-900/20">
                Salaried
              </th>
              <th className="p-4 md:p-6 text-white font-bold text-sm border-l border-red-900/20">
                Self-Employed Individuals
              </th>
              <th className="p-4 md:p-6 text-white font-bold text-sm border-l border-red-900/20 rounded-tr-[20px]">
                Self-Employed Non-Individuals
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-red-50">
            {docData.map((row, index) => (
              <tr key={index} className="hover:bg-red-50/40 transition-colors group">
                <td className="p-4 md:p-6 text-[#8B1D1D] font-bold text-xs md:text-sm bg-[#fff5f5] w-[20%] transition-colors group-hover:bg-red-100/30 leading-snug">
                  {row.category}
                </td>
                <td className="p-4 md:p-6 text-slate-600 text-xs md:text-sm leading-relaxed border-l border-red-50">
                  {row.salaried}
                </td>
                <td className="p-4 md:p-6 text-slate-600 text-xs md:text-sm leading-relaxed border-l border-red-50">
                  {row.selfEmployedInd}
                </td>
                <td className="p-4 md:p-6 text-slate-600 text-xs md:text-sm leading-relaxed border-l border-red-50">
                  {row.selfEmployedNonInd}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* --- FOOTER NOTE --- */}
      <div className="mt-8 p-4 bg-slate-50 rounded-xl inline-block border border-slate-100">
        <p className="text-slate-500 text-[11px] md:text-sm font-medium">
          Note: Additional documents may be requested based on specific profile requirements.
        </p>
      </div>
    </div>
  );
}