"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Typography } from "@/app/components/ui/Typography";

const faqs = [
  {
    q: "1. What is a Car Loan?",
    a: "A Car Loan is a secured loan where the vehicle itself or other accepted assets are pledged with a lender as security against the borrowed amount. The loan amount depends on factors such as car valuation, on-road price, applicable LTV limits and lender policy.",
  },
  {
    q: "2. What is the Car Loan interest rate?",
    a: "Car Loan interest rates vary depending on the lender, loan amount, tenure, car valuation, repayment method and applicant profile. Money King offers access to competitive Car Loan options through its lending partners, with the final interest rate determined by the respective lender.",
  },
  {
    q: "3. How much loan can I get against a car?",
    a: "The loan amount depends primarily on the model and market value of the car, its assessed valuation and the applicable Loan-to-Value (LTV) ratio. The final sanctioned amount is subject to the lending partner's eligibility criteria and applicable regulatory requirements.",
  },
  {
    q: "4. What is the LTV for a Car Loan?",
    a: "LTV, or Loan-to-Value ratio, represents the maximum loan amount in relation to the eligible value of the car. The applicable LTV depends on the type of lender, loan purpose and prevailing regulatory requirements; lenders typically finance up to 80% to 100% of the car's on-road or ex-showroom price.",
  },
  {
    q: "5. What documents are required for a Car Loan?",
    a: "Generally, applicants need valid KYC documents such as PAN, Aadhaar or another accepted identity/address proof, alongside income proof like salary slips, bank statements, or ITR. The car proforma invoice also needs to be presented for valuation and loan processing. Additional documents may be required depending on the lender and loan product.",
  },
  {
    q: "6. Who is eligible for a Car Loan?",
    a: "Eligibility generally depends on the applicant's age, KYC status, employment type (salaried or self-employed), income stability, and the lender's credit policy. Specific age, income, and documentation requirements may vary between lending partners.",
  },
  {
    q: "7. Is income proof required for a Car Loan?",
    a: "Yes, unlike some fully secured asset loans, Car Loans generally require proof of stable income—such as salary slips, Form 16, or Income Tax Returns (ITR)—to establish repayment capacity. KYC and other lender-specific requirements also apply.",
  },
  {
    q: "8. Is CIBIL score required for a Car Loan?",
    a: "CIBIL score requirements vary by lender and loan product. A good credit score (typically 750 or above) helps secure quick approval and lower interest rates, though some lenders may consider applicants with lower scores under specific terms or higher down payments.",
  },
  {
    q: "9. Can I get a Car Loan for a used car?",
    a: "Yes, eligible pre-owned or used cars can generally be financed through a Used Car Loan, subject to the lender's accepted car age, model, ownership, and valuation requirements. The lender assesses the vehicle condition before determining the loan amount.",
  },
  {
    q: "10. What is the maximum Car Loan tenure?",
    a: "Car Loan tenure depends on the lending partner, loan product, and whether the car is new or used. Tenures typically range from 1 year up to 7 years (12 to 84 months), with the maximum tenure determined by the respective lender's policy.",
  },
  {
    q: "11. Can I repay a Car Loan through EMI?",
    a: "Yes, Car Loans are primarily structured around monthly Equated Monthly Installments (EMIs). Depending on the lender, other repayment structures or prepayment options may also be available. The applicable repayment method should be confirmed with the lending partner.",
  },
  {
    q: "12. What happens if I don't repay my Car Loan?",
    a: "If the borrower fails to repay the outstanding EMIs according to the loan agreement, the lender may follow its applicable notice and recovery process. If dues remain unpaid, the lender holds hypothecation rights over the vehicle and may proceed with legal repossession and auction as per regulatory terms.",
  },
  {
    q: "13. Can I prepay or foreclose my Car Loan before tenure ends?",
    a: "Yes, a Car Loan can generally be prepaid or foreclosed after paying the outstanding loan amount and any applicable foreclosure charges according to the lender's terms. The exact foreclosure process and fees depend on the lending partner and loan agreement.",
  },
  {
    q: "14. How is the Car Loan amount calculated?",
    a: "The Car Loan amount is generally calculated based on the vehicle's ex-showroom or on-road price, applicable LTV ratio, applicant's monthly income, existing liabilities, and credit score. The final sanctioned amount is subject to the lender's credit policy and regulatory requirements.",
  },
];

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="w-full py-12 md:py-24 bg-gray-50/30 font-lexend">
      <div className="max-w-4xl mx-auto px-5 md:px-6">
        {/* --- Header --- */}
        <div className="text-center mb-12 md:mb-16">
          <Typography
            variant="h3"
            as="h3"
            className="text-[#004687] font-bold text-3xl md:text-5xl mb-4 tracking-tight"
          >
            Frequently Asked Questions About Gold Loans
          </Typography>
          <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">
            Everything you need to know about Gold Loans at Money King.
          </p>
        </div>

        {/* --- Accordion List --- */}
        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className={`border rounded-2xl md:rounded-2rem transition-all duration-300 ${activeIndex === idx
                  ? "bg-white border-blue-200 shadow-xl shadow-blue-900/5"
                  : "bg-white border-gray-100 hover:border-gray-200"
                }`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-5 md:p-8 text-left outline-none"
              >
                <span
                  className={`text-base md:text-lg font-bold transition-colors ${activeIndex === idx ? "text-[#004687]" : "text-gray-900"
                    }`}
                >
                  {faq.q}
                </span>
                <div
                  className={`shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all ${activeIndex === idx
                      ? "bg-blue-600 text-white rotate-0"
                      : "bg-gray-50 text-gray-400 rotate-90"
                    }`}
                >
                  {activeIndex === idx ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-6 md:px-8 md:pb-8 text-sm md:text-base text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQPage;