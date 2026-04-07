"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@/app/components/ui/Typography";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const HomeLoanTips = () => {
  const tips = [
    {
      title: "Credit Score",
      desc: "Pay bills on time, avoid defaults, and keep credit utilization low.",
    },
    {
      title: "Increase Income",
      desc: "Higher income boosts repayment capacity and loan eligibility.",
    },
    {
      title: "Debt-to-Income",
      desc: "Reduce your DTI ratio by clearing credit cards and other liabilities.",
    },
    {
      title: "Higher Down Payment",
      desc: "More down payment reduces loan amount and lender's risk.",
    },
    {
      title: "Longer Tenure",
      desc: "Lower EMIs improve eligibility, though total interest will be higher.",
    },
    {
      title: "Lower LTV Ratio",
      desc: "Borrow a smaller percentage of property value to improve chances.",
    },
    {
      title: "Employment History",
      desc: "Lenders prefer applicants with a steady job or business history.",
    },
    {
      title: "Repay Existing Loans",
      desc: "Paying off current loans lowers DTI and enhances eligibility.",
    },
    {
      title: "EMI to Income Ratio",
      desc: "Keep total EMIs below 50–55% of your take-home income.",
    },
    {
      title: "Avoid Multiple Enquiries",
      desc: "Don't apply at many places at once to protect your CIBIL score.",
    },
    {
      title: "Property Legal Status",
      desc: "Choose a property with a clear title and all municipal approvals.",
    },
    {
      title: "Strong Documentation",
      desc: "Provide clear salary slips, ITR, and financial statements.",
    },
  ];

  return (
    <section className="w-full bg-[#fcfdfe] py-10 md:py-24 px-4 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section - Mobile centered, Desktop left */}
        <div className="mb-10 md:mb-16 text-center lg:text-left">
          <Typography
            variant="h3"
            className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-4 leading-tight"
          >
            Tips to Improve Chances of Availing a Home Loan
          </Typography>
          <p className="text-slate-500 text-base md:text-lg max-w-3xl mx-auto lg:mx-0 leading-relaxed">
            Some of the tips that can be followed to improve the chances of
            availing a home loan are mentioned below:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Left Side - Image (Mobile: Top, Desktop: Sticky Left) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 order-1 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl"
            >
              <Image
                src="/images/loanpage/13-home.jpeg"
                alt="brown home with keys"
                width={600}
                height={400}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>

          {/* Right Side - Tips Grid (Mobile: 1 column, Tablet: 2 columns) */}
          <div className="lg:col-span-7 order-2 lg:order-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
              {tips.map((tip, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03, duration: 0.4 }}
                  key={index}
                  className="p-5 bg-white rounded-xl md:rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm md:text-base mb-1 group-hover:text-blue-600 transition-colors">
                        {tip.title}
                      </h4>
                      <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                        {tip.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeLoanTips;
