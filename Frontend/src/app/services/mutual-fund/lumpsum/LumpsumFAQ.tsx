"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";
import { ChevronDown } from "lucide-react";

const faqData = [
  { 
    q: "Is lump sum investment better than SIP?", 
    a: "It depends on market conditions and your financial situation. Lump sum can generate higher returns in rising markets, while SIP reduces timing risk through rupee cost averaging." 
  },
  { 
    q: "What is the minimum amount for lump sum investment?", 
    a: "There is no fixed limit. While some mutual funds allow starting with ₹5,000, others might have different minimum requirements based on the scheme." 
  },
  { 
    q: "Is lump sum investment risky?", 
    a: "Yes, it carries market timing risk since the entire amount is invested at once. If the market falls immediately after investing, your portfolio may see a temporary dip." 
  },
  { 
    q: "Can beginners choose lump sum investment?", 
    a: "Yes, but beginners should invest carefully. If you have a large surplus, you can invest it, but many beginners prefer SIP for its disciplined and lower-risk approach." 
  },
  { 
    q: "Where can I invest a lump sum amount?", 
    a: "You can invest in mutual funds, stocks, fixed deposits, or other financial instruments based on your risk profile and investment horizon." 
  },
];

export default function LumpsumFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    /* -mt-10 (mobile) aur -mt-20 (desktop) se section upar shift ho jayega */
    <section className="w-full bg-white py-10 md:py-16 px-4 font-lexend -mt-10 md:-mt-20 relative z-10">
      <div className="max-w-3xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-8">
          <Typography variant="h3" className="text-2xl md:text-4xl font-black text-slate-900 mt-0 mb-2">
            Lump Sum FAQs
          </Typography>
          <p className="text-slate-500 text-sm md:text-base font-medium">
            Clear your doubts before making a big move.
          </p>
        </div>

        {/* --- COMPACT ACCORDION --- */}
        <div className="space-y-3">
          {faqData.map((faq, idx) => (
            <div 
              key={idx} 
              className={`group rounded-2xl border transition-all duration-300 ${
                openIndex === idx 
                ? "border-[#004687] bg-slate-50/30 shadow-sm" 
                : "border-slate-100 bg-white hover:border-slate-200"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-4 md:p-5 text-left"
              >
                <span className={`font-bold text-sm md:text-base pr-4 transition-colors ${openIndex === idx ? "text-[#004687]" : "text-slate-700"}`}>
                  {faq.q}
                </span>
                <ChevronDown 
                  size={18} 
                  className={`shrink-0 transition-transform duration-300 ${openIndex === idx ? "rotate-180 text-[#004687]" : "text-slate-400"}`} 
                />
              </button>

              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-5 pb-5 text-[13px] md:text-sm text-slate-500 leading-relaxed border-t border-slate-100/50 pt-3">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}