"use client";
import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/app/lib/utils";

const faqs = [
  {
    q: "1. What is the minimum credit score required for a business loan in India?",
    a: "Most banks and NBFCs prefer a CIBIL score of 700 or above. While some fintech lenders may offer loans to applicants with a score of 650, a higher score ensures lower interest rates and faster approval.",
  },
  {
    q: "2. Can I get a business loan without collateral or security?",
    a: "Yes, you can avail of Unsecured Business Loans where no collateral is required. Additionally, government schemes like CGTMSE provide credit guarantees to lenders, allowing MSMEs to access collateral-free funding up to ₹5 Crores.",
  },
  {
    q: "3. What are the documents required for a business loan application?",
    a: "Common documents include: Identity & Address Proof (PAN Card, Aadhaar, Voter ID); Financial Proof (Last 6-12 months' bank statements, GST returns, and ITR for the last 2 years); Business Proof (Business registration certificate, Partnership deed, or MOA/AOA).",
  },
  {
    q: "4. How long does it take for a business loan to get approved?",
    a: "Digital lending platforms and fintechs can provide in-principle approval within 59 minutes. However, the full disbursement process for traditional banks usually takes 7 to 10 working days after document verification.",
  },
  {
    q: "5. Is the interest on a business loan tax-deductible?",
    a: "Yes, the interest paid on a business loan is considered a legitimate business expense. You can deduct this interest from your total revenue, which reduces your taxable income and helps in tax saving.",
  },
  {
    q: "6. What is the difference between a Term Loan and a Working Capital Loan?",
    a: "A Term Loan is a lump sum amount repaid over a fixed period (usually for expansion or machinery). A Working Capital Loan (like Overdraft or Cash Credit) is used to manage day-to-day operational costs like rent, salaries, and inventory.",
  },
  {
    q: "7. Can a new startup apply for a business loan?",
    a: "Yes, startups can apply through government schemes like PMEGP or Mudra Loans (Shishu category). For private bank loans, most lenders require a minimum business vintage (operation period) of 6 months to 2 years.",
  },
  {
    q: "8. How is the EMI for a business loan calculated?",
    a: "Business loan EMIs are calculated based on three factors: the Loan Amount, the Interest Rate, and the Tenure. You can use an online Business Loan EMI Calculator to find an affordable monthly installment.",
  },
  {
    q: "9. What are the common reasons for business loan rejection?",
    a: "The most common reasons include a low credit score, inconsistent cash flow, high existing debt-to-income ratio, incomplete documentation, or a lack of business vintage.",
  },
  {
    q: "10. Can I repay my business loan early (Foreclosure)?",
    a: "Yes, most lenders allow early repayment. However, some may charge a foreclosure fee (usually 2% to 5% of the principal) if you pay before the tenure ends. Always check the 'Prepayment' clause in your loan agreement.",
  },
];

const BusinessLoanFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        {/* Meta Heading Suggested */}
        <Typography
          variant="h3"
          as="h3"
          className="text-[#002e5b] font-bold mb-10 text-center"
        >
          Suggested FAQs
        </Typography>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={cn(
                "border-b border-slate-200 transition-all duration-300",
                openIndex === i ? "bg-slate-50/50" : "bg-transparent"
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-start gap-4 py-5 text-left group transition-all"
              >
                <span className={cn(
                  "font-bold text-slate-800 md:text-lg leading-tight transition-colors",
                  openIndex === i ? "text-blue-600" : "group-hover:text-blue-500"
                )}>
                  {faq.q}
                </span>
                <div className="mt-1 shrink-0">
                  {openIndex === i ? (
                    <Minus className="w-5 h-5 text-blue-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-slate-400" />
                  )}
                </div>
              </button>
              
              <div 
                className={cn(
                  "grid transition-all duration-300 ease-in-out",
                  openIndex === i ? "grid-rows-[1fr] opacity-100 mb-6" : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <Typography
                    variant="b1"
                    className="text-slate-600 leading-relaxed pr-6"
                  >
                    {faq.a}
                  </Typography>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessLoanFAQ;