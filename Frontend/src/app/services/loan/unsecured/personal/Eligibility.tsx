"use client";
import React from 'react';
import { Typography } from '@/app/components/ui/Typography';

import { CheckCircle2, FileText, Lightbulb } from "lucide-react";

const Eligibility = () => {
  const eligibilityData = [
    { label: "Age Limit", val: "21 to 60 years at loan maturity" },
    { label: "Monthly Income", val: "₹20,000 (Non-NCR) / ₹25,000 (Delhi NCR)" },
    { label: "Stability", val: "1 year in current job, 2 years total exp." },
    { label: "Credit Score", val: "700 or above preferred for fast approval" },
    { label: "Residency", val: "Indian Citizen with valid address proof" },
    { label: "Profile Based", val: "Salary requirements vary by applicant profile" },
  ];

  const documentRows = [
    { 
      req: "Proof of Identity", 
      salaried: "Passport, Voter ID, Driving License, Aadhaar Card or PAN Card", 
      self: "Passport, Voter ID, Driving License, Aadhaar Card or PAN Card" 
    },
    { 
      req: "Proof of Residence", 
      salaried: "Aadhaar Card, Voter ID, Passport or Utility Bills", 
      self: "Aadhaar Card, Voter ID, Passport or Utility Bills" 
    },
    { 
      req: "Proof of Income", 
      salaried: "Salary Slips, Bank Statements, Form 16", 
      self: "Previous Years’ ITR, P&L Statement, Balance Sheet, Bank Statements" 
    }
  ];

  const knowledgeItems = [
    { 
      t: "Pre-approved Offers", 
      d: "Existing customers often get minimal documentation and lower rates with faster disbursal." 
    },
    { 
      t: "Credit Score Impact", 
      d: "750+ score is the gold standard. It unlocks lower interest rates and faster processing." 
    },
    { 
      t: "Tenure vs EMI", 
      d: "Longer tenure reduces EMI but increases total interest. Choose a balance that fits your monthly budget." 
    },
    { 
      t: "Prepayment Rules", 
      d: "Floating rate loans have zero penalty (RBI). Fixed rate loans might have minor foreclosure charges." 
    }
  ];

  return (
    <section className="py-12 md:py-24 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* --- SECTION 1: ELIGIBILITY --- */}
        <div className="mb-16 md:mb-20">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
            <Typography variant="h3" as="h3" className="text-[#002e5b] font-bold mb-4! mt-0! text-2xl md:text-3xl lg:text-4xl">
              Eligibility Criteria for Quick Personal Loan
            </Typography>
            <Typography variant="b1" className="text-slate-500 m-0! text-sm md:text-base">
              Money King Financial ensures a smooth process. Check if you meet these basic requirements to get started.
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
            <FileText className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
            <Typography variant="h3" as="h3" className="text-[#002e5b] font-bold m-0! text-xl md:text-2xl lg:text-3xl">
              Documents Required for Fast Approval
            </Typography>
          </div>
          
          <div className="w-full overflow-x-auto rounded-2xl border border-slate-200 shadow-sm scrollbar-hide">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-[#002e5b] text-white">
                  <th className="p-4 md:p-6 font-semibold text-sm md:text-base">Requirements</th>
                  <th className="p-4 md:p-6 font-semibold border-l border-white/10 text-sm md:text-base">Salaried Individuals</th>
                  <th className="p-4 md:p-6 font-semibold border-l border-white/10 text-sm md:text-base">Self-Employed</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {documentRows.map((row, i) => (
                  <tr key={i} className="hover:bg-blue-50/50 transition-colors">
                    <td className="p-4 md:p-6 font-bold text-[#002e5b] bg-slate-50/50 uppercase text-[10px] md:text-xs tracking-widest leading-tight">
                      {row.req}
                    </td>
                    <td className="p-4 md:p-6 text-slate-700 text-xs md:text-sm lg:text-base leading-relaxed border-l border-slate-100">
                      {row.salaried}
                    </td>
                    <td className="p-4 md:p-6 text-slate-700 text-xs md:text-sm lg:text-base leading-relaxed border-l border-slate-100">
                      {row.self}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-slate-400 text-[10px] mt-2 md:hidden italic">
            Swipe left to view full table →
          </p>
        </div>

        {/* --- SECTION 3: THINGS TO KNOW --- */}
        <div className="relative px-2">
          {/* Using canonical rounded-4xl instead of rounded-[2rem] */}
          <div className="absolute inset-0 bg-blue-600 rounded-4xl -rotate-1 scale-[1.01] md:scale-[1.02] opacity-5"></div>
          <div className="relative bg-white border border-blue-100 p-6 md:p-12 rounded-4xl shadow-xl">
            <div className="flex items-center gap-3 mb-8 md:mb-10">
              <Lightbulb className="w-6 h-6 md:w-8 md:h-8 text-yellow-500" />
              <Typography variant="h3" as="h3" className="text-[#002e5b] font-bold m-0! text-xl md:text-2xl lg:text-3xl">
                Things to Know Before Applying
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