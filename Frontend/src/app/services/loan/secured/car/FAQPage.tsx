"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Typography } from "@/app/components/ui/Typography";

const faqs = [
  {
    q: "1. What is a Gold Loan?",
    a: "A Gold Loan is a secured loan where eligible gold jewellery or other accepted gold assets are pledged with a lender as security against the borrowed amount. The loan amount depends on factors such as gold purity, net weight, valuation, applicable LTV limits and lender policy.",
  },
  {
    q: "2. What is the Gold Loan interest rate?",
    a: "Gold Loan interest rates vary depending on the lender, loan amount, tenure, gold valuation, repayment method and applicant profile. Money King offers access to competitive Gold Loan options through its lending partners, with the final interest rate determined by the respective lender.",
  },
  {
    q: "3. How much loan can I get against gold?",
    a: "The loan amount depends primarily on the purity and net weight of the eligible gold, its assessed value and the applicable Loan-to-Value (LTV) ratio. The final sanctioned amount is subject to the lending partner's eligibility criteria and applicable regulatory requirements.",
  },
  {
    q: "4. What is the LTV for a Gold Loan?",
    a: "LTV, or Loan-to-Value ratio, represents the maximum loan amount in relation to the eligible value of the pledged gold. The applicable LTV depends on the type of lender, loan purpose and prevailing regulatory requirements; for certain regulated gold-loan categories, RBI guidance provides a 75% LTV limit.",
  },
  {
    q: "5. What documents are required for a Gold Loan?",
    a: "Generally, applicants need valid KYC documents such as PAN, Aadhaar or another accepted identity/address proof. The gold jewellery or eligible gold asset also needs to be presented for purity, weight and valuation assessment. Additional documents may be required depending on the lender and loan product.",
  },
  {
    q: "6. Who is eligible for a Gold Loan?",
    a: "Eligibility generally depends on the applicant's age, KYC status, ownership or right to pledge the gold, type and purity of the gold and the lender's credit policy. Specific age, gold purity and documentation requirements may vary between lending partners.",
  },
  {
    q: "7. Is income proof required for a Gold Loan?",
    a: "Some Gold Loan products may have limited income-proof requirements because the loan is secured against pledged gold. However, KYC and other lender-specific requirements still apply, and additional documentation may be requested depending on the loan product and applicant profile.",
  },
  {
    q: "8. Is CIBIL score required for a Gold Loan?",
    a: "CIBIL score requirements vary by lender and Gold Loan product. Since the loan is secured against gold, some lenders may place less emphasis on credit history than they would for an unsecured loan, but the lender may still consider the applicant's credit profile while determining eligibility and loan terms.",
  },
  {
    q: "9. Can I get a Gold Loan against gold jewellery?",
    a: "Yes, eligible gold jewellery can generally be pledged as security for a Gold Loan, subject to the lender's accepted gold type, purity, ownership and valuation requirements. The lender assesses the eligible gold content before determining the loan amount. RBI guidance also provides for proper assaying and valuation of pledged gold jewellery.",
  },
  {
    q: "10. What is the maximum Gold Loan tenure?",
    a: "Gold Loan tenure depends on the lending partner, loan product and repayment option selected. Short-term and longer-tenure options may be available, but the maximum tenure is determined by the respective lender's policy and applicable regulations.",
  },
  {
    q: "11. Can I repay a Gold Loan through EMI?",
    a: "Yes, some Gold Loan products offer EMI-based repayment options. Depending on the lender, other repayment structures such as bullet repayment or interest-payment options may also be available. The applicable repayment method should be confirmed with the lending partner before taking the loan.",
  },
  {
    q: "12. What happens if I don't repay my Gold Loan?",
    a: "If the borrower fails to repay the outstanding amount according to the loan agreement, the lender may follow its applicable notice and recovery process. If the dues remain unpaid, the pledged gold may ultimately be auctioned according to the lender's terms and applicable regulations, after following the required process and notices.",
  },
  {
    q: "13. Can I get my pledged gold back before the loan tenure ends?",
    a: "Yes, pledged gold can generally be released after the outstanding loan amount and applicable interest or charges have been paid according to the lender's terms. The exact release process and any applicable charges depend on the lending partner and the repayment arrangement.",
  },
  {
    q: "14. How is the Gold Loan amount calculated?",
    a: "The Gold Loan amount is generally calculated based on the eligible gold's purity, net weight, applicable gold valuation and the permitted LTV ratio. The intrinsic value of the eligible gold is considered for valuation, while the final sanctioned amount is subject to the lender's policy and applicable regulatory requirements.",
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