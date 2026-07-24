"use client";
import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import { cn } from "@/app/lib/utils";

const features = [
  {
    id: "01",
    title: "Structured Processing & Disbursal Support",
    desc: "Application evaluation timeline depends on partner lender policies and profile verification – standard processing support offered for personal loans in Delhi.",
  },
  {
    id: "02",
    title: "No Collateral or Guarantor Required",
    desc: "Enjoy 100% unsecured funding – no property, FD, or gold needed as security. Your income and credit profile are evaluated for an unsecured personal loan.",
  },
  {
    id: "03",
    title: "Competitive Interest Rates",
    desc: "Interest starts from 9.99% p.a. Subject to eligibility and lender evaluation. Flexible repayment keeps EMIs manageable for your budget.",
  },
  {
    id: "04",
    title: "Minimal Documentation",
    desc: "Essential documents needed: PAN, last 3–6 months bank statement, salary slips or ITR. Apply online with required digital documents. Subject to eligibility.",
  },
  {
    id: "05",
    title: "Flexible Loan Amount & Tenure",
    desc: "Borrow from ₹50,000 up to ₹25 lakh with repayment tenure from 12 to 60 months – choose what suits your budget and cash flow perfectly. Subject to eligibility.",
  },
  {
    id: "06",
    title: "Multiple End-Use Flexibility",
    desc: "Use the loan for genuine purposes: medical emergency, wedding, education, home renovation, travel, debt consolidation, or family functions as per lender terms.",
  },
  {
    id: "07",
    title: "Prepayment Terms (As per Lender Policy)",
    desc: "Options to pay off your loan as per the specific prepayment and lock-in guidelines of the respective lending partner.",
  },
  {
    id: "08",
    title: "Trusted & Reliable Support Since 2016",
    desc: "With years of experience serving Delhi NCR, Money King Financial provides transparent terms, structured guidance, and dedicated support – your partner for personal loan matching services.",
  },
];

const LoanFeatures = () => {
  return (
    <section className="py-12 md:py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Section with Compliant Wording */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <Typography
            variant="h3"
            as="h2"
            className="text-[#002e5b] font-bold mb-6 mt-0! leading-tight"
          >
            What is a Personal Loan?
          </Typography>

          <div className="space-y-6">
            <Typography
              variant="b1"
              className="text-slate-600 leading-relaxed md:text-lg"
            >
              A personal loan is an unsecured loan offered by partner banks and
              NBFCs for personal needs like emergencies, weddings, education,
              renovation, or debt consolidation — no collateral/guarantor
              needed. Subject to eligibility.
            </Typography>

            <Typography
              variant="b1"
              className="text-slate-500 leading-relaxed "
            >
              Money King Financial Services Pvt. Ltd. is a loan distribution
              platform (DSA) assisting individuals and businesses in connecting
              with regulated lending partners online or offline. We help
              streamline your loan application process with transparent guidance
              and dedicated support since 2016 in Delhi.
            </Typography>
          </div>
        </div>

        {/* Features Sub-heading */}
        <div className="mb-10 text-center">
          <Typography variant="h3" as="h3" className="text-[#005db9] font-bold">
            Personal Loan Features & Benefits
          </Typography>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {features.map((item) => (
            <div
              key={item.id}
              className={cn(
                "bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100",
                "flex flex-row items-start gap-4 md:gap-6",
                "hover:shadow-md md:hover:shadow-lg transition-all duration-300 group",
              )}
            >
              {/* Number Indicator */}
              <div className="shrink-0">
                <div
                  className={cn(
                    "w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100",
                    "md:group-hover:bg-blue-600 md:group-hover:border-blue-600 transition-colors duration-300",
                  )}
                >
                  <span className="text-blue-600 font-bold text-base md:text-lg md:group-hover:text-white">
                    {item.id}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-2">
                <Typography
                  variant="h5"
                  as="h3"
                  className="text-slate-900 font-bold m-0! leading-tight"
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="b2"
                  className="text-slate-500 m-0! leading-relaxed text-sm md:text-base"
                >
                  {item.desc}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoanFeatures;
