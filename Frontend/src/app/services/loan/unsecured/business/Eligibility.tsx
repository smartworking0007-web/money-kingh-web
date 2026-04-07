"use client";
import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import { CheckCircle2, Lightbulb, Building2 } from "lucide-react";

const Eligibility = () => {
  const eligibilityData = [
    { label: "Age Limit", val: "21 to 65 years at loan maturity" },
    { label: "Business Vintage", val: "A minimum of 1 to 3 years" },
    { label: "Annual Turnover", val: "₹15 Lakhs or more" },
    { label: "Credit Score", val: "CIBIL score of 650 or above" },
    { label: "Minimum Income", val: "Stable income & financial records" },
    { label: "Eligible Entities", val: "Proprietorship, LLP, Pvt Ltd" },
  ];

  const documentSections = [
    {
      type: "Proprietorship",
      kyc: "PAN Card, Aadhaar Card, Proof of Ownership (Res/Office), 2 Photographs",
      financials:
        "Last 3yrs Audited ITR, P&L/Balance Sheet, 12m Bank Statement, 12m GST, MSME Certificate, Loan Obligation Sheet",
    },
    {
      type: "Partnership Firm",
      kyc: "Partners' PAN & Aadhaar, Firm PAN, Ownership Proof, Partnership Deed, 2 Photographs each",
      financials:
        "Last 3yrs Firm & Partners ITR (Audited), 12m GSTR 3B, 12m Bank Statement, MSME Certificate, Monthly Obligations",
    },
    {
      type: "Private/Public Ltd",
      kyc: "Co. PAN, MOA/AOA, Certificate of Incorporation, Director KYC, Shareholding List, Udhyam Reg.",
      financials:
        "Last 3yrs Co. & Directors ITR (Audited), P&L Schedules, 12m Bank Statement, 12m GSTR 3B, MSME Certificate",
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* --- SECTION 1: ELIGIBILITY (Original Layout) --- */}
        <div className="mb-16 md:mb-20">
          <div className="text-center max-w-4xl mx-auto mb-10 md:mb-12">
            <Typography
              variant="h2"
              as="h2"
              className="text-[#125e97] font-bold mb-4! mt-0! text-2xl md:text-3xl lg:text-4xl text-center"
            >
              Business Loan Eligibility Criteria in India
            </Typography>
            <Typography
              variant="b1"
              className="text-slate-500 m-0! text-sm md:text-base text-center"
            >
              To apply for an unsecured business loan in India, applicants must
              meet certain eligibility criteria to evaluate repayment capacity
              and stability.
            </Typography>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {eligibilityData.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 md:p-5 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-blue-600 shrink-0" />
                <div>
                  <Typography
                    variant="b2"
                    className="text-slate-500 block text-[10px] md:text-xs uppercase tracking-wider font-bold m-0!"
                  >
                    {item.label}
                  </Typography>
                  <Typography
                    variant="b1"
                    className="text-slate-800 font-semibold m-0! text-sm md:text-base"
                  >
                    {item.val}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- SECTION 2: DOCUMENTS TABLE (Original Layout) --- */}
        <div className="mb-16 md:mb-20">
          <div className="flex flex-col items-center gap-3 mb-6 md:mb-8 text-center">
            <Building2 className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
            <Typography
              variant="h2"
              as="h2"
              className="text-[#0062c5] font-bold m-0! text-xl md:text-2xl lg:text-3xl text-center"
            >
              Documents Required for Business Loan in India
            </Typography>
          </div>

          <div className="w-full overflow-x-auto rounded-2xl border border-slate-200 shadow-sm scrollbar-hide">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-[#015ab2] text-white">
                  <th className="p-4 md:p-6 font-semibold text-sm md:text-base">
                    Entity Type
                  </th>
                  <th className="p-4 md:p-6 font-semibold border-l border-white/10 text-sm md:text-base">
                    KYC Documents
                  </th>
                  <th className="p-4 md:p-6 font-semibold border-l border-white/10 text-sm md:text-base">
                    Financial Documents
                  </th>
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
        </div>

        {/* --- SECTION 3: STRATEGIC CHECKLIST (Original Layout) --- */}
        <div className="relative px-2">
          <div className="absolute inset-0 bg-blue-600 rounded-4xl -rotate-1 scale-[1.01] md:scale-[1.02] opacity-5"></div>
          <div className="relative bg-white border border-blue-100 p-6 md:p-12 rounded-4xl shadow-xl">
            <div className="flex flex-col items-center gap-3 mb-8 md:mb-10 text-center">
              <Lightbulb className="w-6 h-6 md:w-8 md:h-8 text-yellow-500" />
              <Typography
                variant="h5"
                as="h5"
                className="text-[#064a8d] font-bold m-0! text-xl md:text-2xl lg:text-3xl text-center"
              >
                Business Loan Approval Tips & Checklist in India
              </Typography>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
              {[
                {
                  t: "Tax Benefits on Business Loan",
                  d: "The interest paid on a business loan is considered a tax-deductible expense. This helps reduce your overall tax liability and improves financial planning. Consult your CA to maximize benefits.",
                },
                {
                  t: "GST & Banking Alignment",
                  d: "Ensure your GST returns (GSTR-3B) match your bank statements. Proper financial records improve your chances of quick business loan approval.",
                },
                {
                  t: "Business Vintage Matters",
                  d: "Lenders prefer businesses with at least 1–2 years of stable operations. A longer business history increases your eligibility and loan amount.",
                },
                {
                  t: "Collateral Options",
                  d: "While unsecured business loans do not require collateral, offering assets can sometimes help secure lower interest rates and higher loan amounts.",
                },
              ].map((item, i) => (
                <div key={i} className="group">
                  <Typography
                    variant="h5"
                    as="h5"
                    className="text-[#002e5b] font-bold mb-2 md:mb-3 mt-0! transition-colors text-base md:text-lg"
                  >
                    {item.t}
                  </Typography>
                  <Typography
                    variant="b2"
                    className="text-slate-500 leading-relaxed m-0! text-xs md:text-sm"
                  >
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
