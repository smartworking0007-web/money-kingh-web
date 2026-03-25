"use client";
import React from 'react';
import { Typography } from '@/app/components/ui/Typography';
import { CheckCircle2,  Lightbulb, Building2 } from "lucide-react";

const Eligibility = () => {
  const eligibilityData = [
    { label: "Age Limit", val: "21 to 65 years at loan maturity" },
    { label: "Business Vintage", val: "Minimum 1 to 5 years of operations" },
    { label: "Business Turnover", val: "₹15 Lakhs to more than ₹250 Crore" },
    { label: "Credit Score", val: "650 or above (flexible for some lenders)" },
    { label: "Minimum Income", val: "₹1 Lakh p.a. for the applicant" },
    { label: "Eligible Entities", val: "Proprietorship, Partnership, Pvt Ltd, etc." },
  ];

  const documentSections = [
    {
      type: "Proprietorship",
      kyc: "PAN Card, Aadhaar Card, Proof of Ownership (Res/Office), 2 Photographs",
      financials: "Last 3yrs Audited ITR, P&L/Balance Sheet, 12m Bank Statement, 12m GST, MSME Certificate, Loan Obligation Sheet"
    },
    {
      type: "Partnership Firm",
      kyc: "Partners' PAN & Aadhaar, Firm PAN, Ownership Proof, Partnership Deed, 2 Photographs each",
      financials: "Last 3yrs Firm & Partners ITR (Audited), 12m GSTR 3B, 12m Bank Statement, MSME Certificate, Monthly Obligations"
    },
    {
      type: "Private/Public Ltd",
      kyc: "Co. PAN, MOA/AOA, Certificate of Incorporation, Director KYC, Shareholding List, Udhyam Reg.",
      financials: "Last 3yrs Co. & Directors ITR (Audited), P&L Schedules, 12m Bank Statement, 12m GSTR 3B, MSME Certificate"
    }
  ];

  const knowledgeItems = [
    { 
      t: "Tax Benefits", 
      d: "The interest paid on a business loan is a tax-deductible expense. Consult your CA to maximize savings." 
    },
    { 
      t: "Business Vintage Matters", 
      d: "Lenders prefer businesses with at least 2 years of stable operations for higher loan amounts." 
    },
    { 
      t: "GST & Banking Sync", 
      d: "Ensure your GST returns (GSTR 3B) match your bank statement credits for faster digital approval." 
    },
    { 
      t: "Collateral Options", 
      d: "While we specialize in unsecured loans, providing collateral can significantly lower your interest rates." 
    }
  ];

  return (
    <section className="py-12 md:py-24 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* --- SECTION 1: ELIGIBILITY --- */}
        <div className="mb-16 md:mb-20">
          <div className="text-center max-w-4xl mx-auto mb-10 md:mb-12">
            <Typography variant="h3" as="h3" className="text-[#002e5b] font-bold mb-4! mt-0! text-2xl md:text-3xl lg:text-4xl">
              Eligibility Criteria for Quick Business Loan – Money King Financial
            </Typography>
            <Typography variant="h4" as="h4" className="text-slate-600 m-0! text-lg md:text-xl font-medium mb-4">
               Eligibility Criteria for Business Loan
            </Typography>
            <Typography variant="b1" className="text-slate-500 m-0! text-sm md:text-base">
              Lenders usually set their business loan eligibility criteria based on the following key factors.
            </Typography>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {eligibilityData.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 md:p-5 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-blue-600 shrink-0" />
                <div>
                  <Typography variant="b2" className="text-slate-500 block text-[10px] md:text-xs uppercase tracking-wider font-bold m-0!">
                    {item.label}
                  </Typography>
                  <Typography variant="b1" className="text-slate-800 font-semibold m-0! text-sm md:text-base">
                    {item.val}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- SECTION 2: DOCUMENTS TABLE --- */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <Building2 className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
            <Typography variant="h3" as="h3" className="text-[#002e5b] font-bold m-0! text-xl md:text-2xl lg:text-3xl">
              Documents Required for Business Loan
            </Typography>
          </div>
          
          <div className="w-full overflow-x-auto rounded-2xl border border-slate-200 shadow-sm scrollbar-hide">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-[#002e5b] text-white">
                  <th className="p-4 md:p-6 font-semibold text-sm md:text-base">Entity Type</th>
                  <th className="p-4 md:p-6 font-semibold border-l border-white/10 text-sm md:text-base">KYC Documents</th>
                  <th className="p-4 md:p-6 font-semibold border-l border-white/10 text-sm md:text-base">Financial Documents</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {documentSections.map((row, i) => (
                  <tr key={i} className="hover:bg-blue-50/50 transition-colors">
                    <td className="p-4 md:p-6 font-bold text-[#002e5b] bg-slate-50/50 uppercase text-[10px] md:text-xs tracking-widest leading-tight">
                      {row.type}
                    </td>
                    <td className="p-4 md:p-6 text-slate-700 text-xs md:text-sm leading-relaxed border-l border-slate-100">
                      {row.kyc}
                    </td>
                    <td className="p-4 md:p-6 text-slate-700 text-xs md:text-sm leading-relaxed border-l border-slate-100">
                      {row.financials}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-slate-400 text-[10px] mt-3 md:hidden italic">
            Swipe left to view document details for Partnership & Companies →
          </p>
        </div>

        {/* --- SECTION 3: THINGS TO KNOW --- */}
        <div className="relative px-2">
          <div className="absolute inset-0 bg-blue-600 rounded-4xl -rotate-1 scale-[1.01] md:scale-[1.02] opacity-5"></div>
          <div className="relative bg-white border border-blue-100 p-6 md:p-12 rounded-4xl shadow-xl">
            <div className="flex items-center gap-3 mb-8 md:mb-10">
              <Lightbulb className="w-6 h-6 md:w-8 md:h-8 text-yellow-500" />
              <Typography variant="h3" as="h3" className="text-[#002e5b] font-bold m-0! text-xl md:text-2xl lg:text-3xl">
                Strategic Checklist Before Applying
              </Typography>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
              {knowledgeItems.map((item, i) => (
                <div key={i} className="group">
                  <Typography variant="h5" as="h5" className="text-[#002e5b] font-bold mb-2 md:mb-3 mt-0! group-hover:text-blue-600 transition-colors text-base md:text-lg">
                    {item.t}
                  </Typography>
                  <Typography variant="b2" className="text-slate-500 leading-relaxed m-0! text-xs md:text-sm">
                    {item.d}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eligibility;