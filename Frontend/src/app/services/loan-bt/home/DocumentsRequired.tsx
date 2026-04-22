"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import { CheckCircle2, FileText, Info } from "lucide-react";

// Table Data based on your image
const documentCategories = [
  {
    category: "Mandatory Document",
    salaried: "PAN Card",
    selfEmployedInd: "PAN Card",
    selfEmployedNonInd: "PAN Card",
  },
  {
    category: "KYC Documents",
    salaried: "Voter ID / Aadhaar / Passport / Driving License",
    selfEmployedInd:
      "Voter ID / Aadhaar / Passport / Driving License and Udyam Registration Certificate",
    selfEmployedNonInd:
      "Voter ID / Aadhaar / Passport / Driving License of beneficial owner and Udyam Registration Certificate",
  },
  {
    category: "Proof of Income",
    salaried:
      "Salary slip of last 3 months and Bank statement of last 6 months",
    selfEmployedInd:
      "P&L, Balance Sheet, ITR, and Bank statement of last 6 months",
    selfEmployedNonInd:
      "P&L, Balance Sheet, ITR and Bank statement of last 6 months",
  },
  {
    category: "Vintage Proof",
    salaried: "Appointment Letter / Salary Slips having date of joining",
    selfEmployedInd:
      "Udyam Registration Certificate / ITR / Shop and Establishment Certificate / GST certificate",
    selfEmployedNonInd:
      "Udyam Registration Certificate / ITR / Shop and Establishment Certificate / GST certificate",
  },
  {
    category: "Property-related Documents",
    salaried: "Title Deed, Allotment Letter, and Property Tax receipts",
    selfEmployedInd: "Title Deed, Allotment Letter, and Property Tax receipts",
    selfEmployedNonInd:
      "Title Deed, Allotment Letter, and Property Tax receipts",
  },
];

export default function DocumentsRequired() {
  return (
    <section className="py-16 px-4 md:px-12 bg-white max-w-7xl mx-auto">
      {/* --- SEO Headers (Meta Titles) --- */}
      <div className="mb-10">
        <Typography
          variant="h3"
          as="h3"
          className="text-slate-800 font-bold mb-4"
        >
          Switch to Save for Money King HL Advantage
        </Typography>
        <p className="text-gray-600 max-w-4xl text-sm md:text-base leading-relaxed">
          With Money King HL, enjoy the advantage of digital processes, better
          service, and easy top-up funding whenever you need it. However,
          applying without the necessary documents can lead to delays and result
          in the loss of your application fee. Before you begin, make sure you
          have:
        </p>
      </div>

      <div className="flex items-center gap-3 mb-8">
        <div className="bg-red-50 p-2 rounded-lg">
          <FileText className="w-6 h-6 text-red-700" />
        </div>
        <Typography variant="h3" as="h3" className="text-red-900 font-bold">
          Documents Required
        </Typography>
      </div>

      {/* --- Responsive Table Wrapper --- */}
      <div className="overflow-hidden border border-red-100 rounded-2xl shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-linear-to-r from-red-800 to-red-950 text-white">
                <th className="p-6 font-bold text-xs uppercase tracking-widest border-r border-red-700/30 w-[20%]">
                  Document Category
                </th>
                <th className="p-6 font-bold text-xs uppercase tracking-widest border-r border-red-700/30">
                  Salaried
                </th>
                <th className="p-6 font-bold text-xs uppercase tracking-widest border-r border-red-700/30">
                  Self-Employed Individuals
                </th>
                <th className="p-6 font-bold text-xs uppercase tracking-widest">
                  Self-Employed Non-Individuals
                </th>
              </tr>
            </thead>
            <tbody className="text-[13px]">
              {documentCategories.map((item, idx) => (
                <tr
                  key={idx}
                  className={`transition-colors hover:bg-red-50/40 ${idx % 2 === 0 ? "bg-white" : "bg-red-50/10"}`}
                >
                  {/* Category Name Column */}
                  <td className="p-5 font-bold text-red-900 border-r border-red-100 bg-red-50/30 align-top">
                    {item.category}
                  </td>

                  {/* Salaried Column */}
                  <td className="p-5 text-slate-700 border-r border-red-50 leading-relaxed align-top">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span>{item.salaried}</span>
                    </div>
                  </td>

                  {/* Self-Employed Individuals Column */}
                  <td className="p-5 text-slate-700 border-r border-red-50 leading-relaxed align-top">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span>{item.selfEmployedInd}</span>
                    </div>
                  </td>

                  {/* Self-Employed Non-Individuals Column */}
                  <td className="p-5 text-slate-700 leading-relaxed align-top">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span>{item.selfEmployedNonInd}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* --- Mobile Interaction Hint --- */}
      <div className="mt-5 flex items-center justify-center gap-2 md:hidden text-slate-400 text-xs font-medium bg-slate-50 py-3 rounded-xl border border-dashed border-slate-200">
        <Info className="w-4 h-4 text-blue-500" />
        Swipe left/right to see full details
      </div>
    </section>
  );
}
