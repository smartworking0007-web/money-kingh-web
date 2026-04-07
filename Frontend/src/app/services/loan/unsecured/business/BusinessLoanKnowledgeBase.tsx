"use client";
import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import { Info, Lightbulb, ArrowRightLeft, CheckCircle } from "lucide-react";

const BusinessLoanKnowledgeBase = () => {
  const proTips = [
    {
      title: "Maintain Stable Cash Flow",
      desc: "Maintain a score of 700+. High scores unlock lower interest rates and faster approvals.",
    },
    {
      title: "Stable Cash Flows",
      desc: "Demonstrate consistent inflows to build lender confidence in your repayment capacity.",
    },
    {
      title: "Correct Loan Amount",
      desc: "Borrow only what aligns with your business needs to avoid unnecessary financial strain.",
    },
    {
      title: "Multi-Lender Platform",
      desc: "Compare offers across multiple banks to find the most suitable rates and terms.",
    },
    {
      title: "Expert Assistance",
      desc: "Consult experts at Money King to understand complex documentation and eligibility.",
    },
  ];

  const comparisonData = [
    {
      feat: "Usage",
      personal: "Personal or Business needs",
      business: "Strictly for business activities",
    },
    {
      feat: "Collateral",
      personal: "Usually Unsecured",
      business: "Both Secured & Unsecured options",
    },
    {
      feat: "Structure",
      personal: "Standard Term Loan/EMI",
      business: "Term Loans, Overdraft, Cash Credit",
    },
    {
      feat: "Interest Rates",
      personal: "Generally higher",
      business: "Competitive (Lower for Govt. schemes)",
    },
    {
      feat: "Loan Amount",
      personal: "Limited (Upto ₹40-50L)",
      business: "High Scale (Upto ₹5 Crore+)",
    },
    {
      feat: "Tax Benefits",
      personal: "No tax benefits",
      business: "Tax-Deductible interest expense",
    },
    {
      feat: "Documentation",
      personal: "Minimal (KYC & Salary)",
      business: "Extensive (GST, ITR, Audit)",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* --- SECTION 1: WHAT TO KNOW --- */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Info className="w-8 h-8 text-blue-600" />
            <Typography
              variant="h3"
              as="h3"
              className="text-[#0058b0] font-bold m-0!"
            >
              What to Know Before Applying for a Business Loan
            </Typography>
          </div>

          <Typography
            variant="b2"
            className="text-slate-900 mb-10 leading-relaxed max-w-4x2"
          >
            Meta Description- Before applying for an unsecured business loan in India, it is important to understand key financial factors that affect approval, interest rates, and repayment capacity. This business loan guide helps you make informed decisions and improve your approval chances.

          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <KnowledgeCard
              title="Fixed vs. Floating Rates"
              desc=".Choose between fixed and floating interest rates based on your business cash flow. Fixed rates offer stability, while floating rates may vary with market conditions.
"
            />
            <KnowledgeCard
              title="Choosing the Right Lender"
              desc="A CIBIL score of 700+ improves your chances of business loan approval and helps secure lower interest rates.

"
            />
            <KnowledgeCard
              title="Power of Credit Score"
              desc="A score of 700+ is the 'Golden Ticket.' It unlocks lower interest rates, while poor ratings can lead to rejection."
            />
            <KnowledgeCard
              title="Total Cost of Borrowing"
              desc="Consider processing fees, prepayment charges, and hidden costs along with interest rates before choosing a loan.
"
            />
            <KnowledgeCard
              title="EMI Affordability"
              desc="Select a loan tenure that matches your repayment capacity. Longer tenure reduces EMI, while shorter tenure saves interest.
"
            />
          </div>
        </div>

        {/* --- SECTION 2: PRO TIPS --- */}
        <div className="mb-20 bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100">
          <div className="flex items-center gap-3 mb-10">
            <Lightbulb className="w-8 h-8 text-yellow-500" />
            <Typography
              variant="h3"
              as="h3"
              className="text-[#002e5b] font-bold m-0!"
            >
              Tips to Improve Business Loan Approval Chances in India 
            </Typography>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {proTips.map((tip, i) => (
              <div
                key={i}
                className="flex gap-4 items-start bg-white p-6 rounded-2xl shadow-sm"
              >
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                <div>
                  <Typography
                    variant="h5"
                    className="font-bold text-slate-800 mb-1"
                  >
                    {tip.title}
                  </Typography>
                  <Typography
                    variant="b2"
                    className="text-slate-500 text-sm leading-relaxed"
                  >
                    {tip.desc}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- SECTION 3: COMPARISON TABLE --- */}
        <div>
          <div className="flex items-center gap-3 mb-10 justify-center text-center">
            <ArrowRightLeft className="w-8 h-8 text-blue-600" />
            <Typography
              variant="h3"
              as="h3"
              className="text-[#002e5b] font-bold m-0!"
            >
              Personal Loan vs. Business Loan: Which is Right for You?
            </Typography>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xl">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-[#002e5b] text-white">
                  <th className="p-5 font-bold uppercase tracking-wider text-xs">
                    Feature
                  </th>
                  <th className="p-5 font-bold uppercase tracking-wider text-xs border-l border-white/10">
                    Personal Loan
                  </th>
                  <th className="p-5 font-bold uppercase tracking-wider text-xs border-l border-white/10 bg-blue-600">
                    Business Loan
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {comparisonData.map((row, i) => (
                  <tr key={i} className="hover:bg-blue-50/30 transition-colors">
                    <td className="p-5 font-bold text-slate-700 bg-slate-50/50 text-sm">
                      {row.feat}
                    </td>
                    <td className="p-5 text-slate-600 text-sm border-l border-slate-100">
                      {row.personal}
                    </td>
                    <td className="p-5 text-slate-900 font-medium text-sm border-l border-slate-100 bg-blue-50/20">
                      {row.business}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

const KnowledgeCard = ({ title, desc }: { title: string; desc: string }) => (
  <div className="p-6 border-b-2 border-transparent hover:border-blue-600 hover:bg-slate-50 transition-all group">
    <Typography
      variant="h5"
      as="h5"
      className="text-slate-900 font-bold mb-3 group-hover:text-blue-600"
    >
      {title}
    </Typography>
    <Typography variant="b2" className="text-slate-500 leading-relaxed">
      {desc}
    </Typography>
  </div>
);

export default BusinessLoanKnowledgeBase;
