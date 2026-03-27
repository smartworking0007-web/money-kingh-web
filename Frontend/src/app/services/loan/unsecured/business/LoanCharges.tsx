"use client";
import React from 'react';
import { Typography } from '@/app/components/ui/Typography';
import { CheckCircle2, Info,  Sparkles, TrendingUp } from "lucide-react";

const LoanCharges = () => {
  const charges = [
    { name: "Loan Processing Fees", charge: "0.5% to 4% of loan amount" },
    { name: "Prepayment / Foreclosure", charge: "Floating: Nil | Fixed: 2% - 5% on principal" },
    { name: "Loan Cancellation", charge: "Usually around ₹3,000" },
    { name: "Stamp Duty Charges", charge: "As per actual state laws" },
    { name: "Legal & Documentation", charge: "As per actuals" },
    { name: "Penal Charges (Late Payment)", charge: "Usually @ 2% per month; 24% p.a." },
  ];

  const expertTips = [
    { t: "CIBIL Maintenance", d: "Keep your score above 750 for the lowest interest rates." },
    { t: "Report Accuracy", d: "Correct inaccuracies in your credit report to avoid rejection." },
    { t: "Market Comparison", d: "Always compare 3+ lenders before signing a deal." },
    { t: "Smart Application", d: "Apply where you already have a banking relationship for faster approval." },
    { t: "Limit Enquiries", d: "Avoid multiple applications in a short window to protect your score." },
    { t: "Stable Profile", d: "Ensure at least 6 months of continuous employment before applying." },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50/30 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* --- HEADER SECTION --- */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <Typography variant="h3" as="h2" className="text-[#002e5b] font-extrabold mb-4! mt-0! text-3xl md:text-4xl">
            Processing Fees & Other Charges
          </Typography>
          <Typography variant="b1" className="text-slate-500 m-0! leading-relaxed">
            No hidden surprises. We believe in complete transparency so you can plan your financial journey with total peace of mind.
          </Typography>
        </div>

        {/* --- CHARGES TABLE --- */}
        <div className="mb-24">
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-xl bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-[#002e5b] border-b border-slate-200">
                    <th className="p-6 font-bold text-sm uppercase tracking-widest">Particulars</th>
                    <th className="p-6 font-bold text-sm uppercase tracking-widest border-l border-slate-200">Broad Range of Charges</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {charges.map((item, i) => (
                    <tr key={i} className="hover:bg-blue-50/20 transition-colors group/row">
                      <td className="p-6 font-bold text-[#002e5b] w-full md:w-1/3 transition-colors">
                        {item.name}
                      </td>
                      <td className="p-6 text-slate-600 font-medium">
                        {item.charge}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Footer Note */}
            <div className="bg-blue-50/50 p-5 flex items-start gap-3 border-t border-blue-100">
              <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <Typography variant="b2" className="text-blue-800 m-0! leading-relaxed">
                <span className="font-bold">Note:</span> Other nominal fees like documentation, verification, and NOC certificate 
                charges may apply as per lender policies.
              </Typography>
            </div>
          </div>
        </div>

        {/* --- REDESIGNED EXPERT TIPS SECTION --- */}
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-blue-600 font-bold mb-3 uppercase tracking-widest text-xs">
                <Sparkles className="w-4 h-4" />
                <span>Expert Advice</span>
              </div>
              <Typography variant="h3" as="h3" className="text-[#002e5b] font-bold m-0! text-2xl md:text-3xl">
                How to Get the Best Personal Loan Offer?
              </Typography>
            </div>
            <div className="hidden md:block">
               <TrendingUp className="w-12 h-12 text-blue-100" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertTips.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                   <CheckCircle2 className="w-5 h-5 text-blue-600 group-hover:text-white" />
                </div>
                <Typography variant="b2" className="text-[#002e5b] font-bold mb-2 m-0! text-lg">
                  {item.t}
                </Typography>
                <Typography variant="b2" className="text-slate-500 m-0! leading-relaxed">
                  {item.d}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanCharges;