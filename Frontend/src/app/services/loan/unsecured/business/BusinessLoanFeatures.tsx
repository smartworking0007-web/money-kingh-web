"use client";
import React from "react";
import { Typography } from "@/app/components/ui/Typography";

const featuresData = [
  {
    id: "01",
    title: "Instant Approval & Fast Disbursement",
    desc: "Get quick approval within 24–48 hours and receive funds in your account within 1–2 working days. Our process is designed to meet urgent business funding needs efficiently.",
  },
  {
    id: "02",
    title: "100% Unsecured Loan – No Collateral Required",
    desc: "We offer unsecured business loans without any collateral. You can secure funding based on your business performance and credit profile without risking your assets.",
  },
  {
    id: "03",
    title: "Competitive Interest Rates",
    desc: "Interest rates start from 9.99% p.a. (subject to profile). Our affordable financing options help you manage costs and grow your business sustainably.",
  },
  {
    id: "04",
    title: "Minimal Documentation & Digital Process",
    desc: "Apply with basic documents like PAN, Aadhaar, bank statements, and ITR. Our process is simple, fast, and completely digital.",
  },
  {
    id: "05",
    title: "High Loan Amount & Flexible Tenure",
    desc: "Get funding from ₹2 Lakh up to ₹1 Crore with flexible repayment options ranging from 12 to 60 months based on your business needs.",
  },
  {
    id: "06",
    title: "Multiple Usage Flexibility",
    desc: "Use the loan for working capital, machinery purchase, inventory, marketing, or business expansion without any restrictions.",
  },
  {
    id: "07",
    title: "No Prepayment Charges (After Lock-in)",
    desc: "You can repay your loan early after the lock-in period without heavy penalties, helping you save on interest costs.",
  },
  {
    id: "08",
    title: "Trusted MSME Partner Since 2016",
    desc: "We have been supporting businesses across Delhi NCR and PAN India with transparent processes, no hidden charges, and dedicated customer support.",
  },
];

const BusinessLoanFeatures = () => {
  return (
    <section className="py-16 bg-[#f8fbff]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <Typography
            variant="h2"
            as="h2"
            className="text-[#002e5b] font-bold mb-4"
          >
            Business Loan Features & Benefits
          </Typography>
          <Typography variant="b1" className="text-slate-600 max-w-3xl mx-auto">
            Quick business loans are the commonly preferred approach to
            fulfilling monetary requirements. The reason can be attributed as
            follows:
          </Typography>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-slate-100 flex gap-6 hover:shadow-md transition-shadow duration-300"
            >
              {/* Number Circle */}
              <div className="shrink-0">
                <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xl">
                    {feature.id}
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-2">
                <Typography
                  variant="h5"
                  as="h3"
                  className="text-[#002e5b] font-bold leading-tight"
                >
                  {feature.title}
                </Typography>
                <Typography variant="b2" className="text-slate-500 leading-relaxed">
                  {feature.desc}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessLoanFeatures;