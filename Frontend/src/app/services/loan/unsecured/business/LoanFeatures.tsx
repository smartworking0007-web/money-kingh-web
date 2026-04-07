"use client";
import React, { useState } from 'react';
import { Typography } from '@/app/components/ui/Typography';
import { cn } from "@/app/lib/utils";
import { Plus, Minus,  } from "lucide-react";
import FinancialPartners from "@/app/components/FinancialPartners/FinancialPartners";
import { AboutTestimonialCard } from "@/app/about/AboutTestimonialCard";

const BusinessLoanFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "1. What is the minimum credit score required for a business loan in India?",
      a: "Most banks and NBFCs prefer a CIBIL score of 700 or above. While some fintech lenders may offer loans to applicants with a score of 650, a higher score ensures lower interest rates and faster approval."
    },
    {
      q: "2. Can I get a business loan without collateral or security?",
      a: "Yes, you can avail of Unsecured Business Loans where no collateral is required. Additionally, government schemes like CGTMSE provide credit guarantees to lenders, allowing MSMEs to access collateral-free funding up to ₹5 Crores."
    },
    {
      q: "3. What are the documents required for a business loan application?",
      a: "Common documents include: Identity & Address Proof (PAN, Aadhaar), Financial Proof (Last 6-12 months' bank statements, GST returns, ITR for 2 years), and Business Proof (Registration certificate, Partnership deed, or MOA/AOA)."
    },
    {
      q: "4. How long does it take for a business loan to get approved?",
      a: "Digital lending platforms and fintechs can provide in-principle approval within 59 minutes. However, the full disbursement process for traditional banks usually takes 7 to 10 working days after document verification."
    },
    {
      q: "5. Is the interest on a business loan tax-deductible?",
      a: "Yes, the interest paid on a business loan is considered a legitimate business expense. You can deduct this interest from your total revenue, which reduces your taxable income and helps in tax saving."
    },
    {
      q: "6. What is the difference between a Term Loan and a Working Capital Loan?",
      a: "A Term Loan is a lump sum amount repaid over a fixed period (usually for expansion or machinery). A Working Capital Loan (like Overdraft or Cash Credit) is used to manage day-to-day operational costs like rent, salaries, and inventory."
    },
    {
      q: "7. Can a new startup apply for a business loan?",
      a: "Yes, startups can apply through government schemes like PMEGP or Mudra Loans (Shishu category). For private bank loans, most lenders require a minimum business vintage of 6 months to 2 years."
    },
    {
      q: "8. How is the EMI for a business loan calculated?",
      a: "Business loan EMIs are calculated based on three factors: the Loan Amount, the Interest Rate, and the Tenure. You can use an online Business Loan EMI Calculator to find an affordable monthly installment."
    },
    {
      q: "9. What are the common reasons for business loan rejection?",
      a: "Common reasons include a low credit score, inconsistent cash flow, high debt-to-income ratio, incomplete documentation, or lack of business vintage."
    },
    {
      q: "10. Can I repay my business loan early (Foreclosure)?",
      a: "Yes, most lenders allow early repayment. However, some may charge a foreclosure fee (usually 2% to 5% of the principal). Always check the 'Prepayment' clause in your loan agreement."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* --- TESTIMONIAL BAR --- */}
        <div className="mb-24">
           <AboutTestimonialCard />
        </div>

        {/* --- FINANCIAL PARTNERS --- */}
        <div className="mb-24">
          <div className="text-center mb-10">
            <Typography variant="h4" className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-4">Our Network</Typography>
            <Typography variant="h3" className="text-[#002e5b] font-bold">Strategic Financial Partners</Typography>
          </div>
          <FinancialPartners />
        </div>

        {/* --- FAQ SECTION --- */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Typography variant="h3" as="h3" className="text-[#002e5b] font-bold mb-4!">
              Suggested FAQs
            </Typography>
            <Typography variant="b1" className="text-slate-500">
              Clear your doubts about business funding with our frequently asked questions.
            </Typography>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={cn(
                  "border rounded-2xl transition-all duration-300",
                  openIndex === index ? "border-blue-200 bg-blue-50/30 shadow-sm" : "border-slate-100 bg-white"
                )}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                >
                  <Typography 
                    variant="h5" 
                    className={cn(
                      "font-bold pr-8 transition-colors text-base md:text-lg",
                      openIndex === index ? "text-blue-600" : "text-slate-800"
                    )}
                  >
                    {faq.q}
                  </Typography>
                  <div className="shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-blue-600" />
                    ) : (
                      <Plus className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-5 pb-6 md:px-6 md:pb-7 animate-in fade-in slide-in-from-top-2 duration-300">
                    <Typography variant="b1" className="text-slate-600 leading-relaxed">
                      {faq.a}
                    </Typography>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessLoanFAQ;