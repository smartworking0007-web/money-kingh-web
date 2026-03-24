"use client";
import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";
import { Plus, Minus } from "lucide-react";
const faqs = [
  {
    q: "What is the minimum CIBIL score required for a Personal Loan?",
    a: "Generally, a CIBIL score of 750 or above is considered ideal for securing the best interest rates. However, at Money King Financial, we work with partners who can process loan applications even with a score of 650+.",
  },
  {
    q: "Can I get a Personal Loan without any security or guarantee?",
    a: "Yes, a Personal Loan is an 'Unsecured Loan.' This means you do not need to pledge or mortgage any assets like property or gold to avail the funds.",
  },
  {
    q: "How long does it take to get a Personal Loan through Money King?",
    a: "Our system can check your eligibility in just 5 minutes. Once approved, the funds are typically transferred to your account within 24 to 48 working hours.",
  },
  {
    q: "What are the current interest rates for Personal Loans?",
    a: "In 2026, interest rates generally vary between 10.50% and 24% per annum. The final rate offered depends specifically on your individual credit profile and documentation.",
  },
  {
    q: "Can I close my Personal Loan before the tenure ends (Pre-closure)?",
    a: "Yes, this is known as 'Foreclosure.' Depending on the lender, foreclosure charges can range from 0% to 4% of the outstanding principal amount.",
  },
  {
    q: "What should I do if my loan application gets rejected?",
    a: "Don't worry. Our expert team will analyze your CIBIL report and provide a roadmap on how to improve your profile to get an approval in the next 3 to 6 months.",
  },
  {
    q: "Does Money King Financial charge any advance fees?",
    a: "No. Money King never asks for advance cash or upfront payments. All legitimate processing fees are deducted directly from the disbursed loan amount. Please stay alert and beware of frauds.",
  },
];

const LoanFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <Typography
          variant="h3"
          className="text-[#002e5b] font-bold mb-10 text-center"
        >
          Frequently Asked Questions (FAQs)
        </Typography>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-slate-200 pb-4">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center py-4 text-left hover:text-blue-600 transition-colors"
              >
                <span className="font-semibold text-slate-800 md:text-lg">
                  {faq.q}
                </span>
                {openIndex === i ? (
                  <Minus className="w-5 h-5" />
                ) : (
                  <Plus className="w-5 h-5" />
                )}
              </button>
              {openIndex === i && (
                <div className="pb-4">
                  <Typography
                    variant="b1"
                    className="text-slate-500 leading-relaxed"
                  >
                    {faq.a}
                  </Typography>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoanFAQ;
