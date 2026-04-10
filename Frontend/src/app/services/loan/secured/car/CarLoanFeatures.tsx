"use client";

import { CheckCircle2, ChevronRight } from "lucide-react";
import { Typography } from "@/app/components/ui/Typography";

export default function CarLoanFeaturesV3() {
  const data = {
    metaTitle: "Features & Benefits of Car Loans in India",
    metaDesc:
      "Car loans in India are designed to make vehicle ownership simple, affordable, and accessible. Whether you are buying a new or used car, these loans come with flexible terms and customer-friendly benefits.",
    features: [
      {
        title: "Easy Car Ownership",
        desc: "Purchase your dream vehicle without paying the full amount upfront, making ownership financially manageable.",
      },
      {
        title: "Up to 100% Financing",
        desc: "Many lenders offer up to 100% financing on the on-road price, reducing or even eliminating the need for a down payment.",
      },
      {
        title: "High Loan Amount Eligibility",
        desc: "Depending on your income and credit profile, you can avail high-value car loans, giving you the flexibility to choose from a wide range of vehicles.",
      },
      {
        title: "Secured Loan Facility",
        desc: "Car loans are typically secured loans, where the vehicle itself acts as collateral, helping you get lower interest rates.",
      },
      {
        title: "Quick & Hassle-Free Approval",
        desc: "With minimal documentation and fast processing, car loans are easier to obtain compared to many other loan types.",
      },
    ],
    benefits: [
      "Flexible Eligibility Criteria for various credit scores.",
      "Fixed Interest Rate Options for stable EMIs.",
      "Credit Score-Based Interest Rates for lower costs.",
      "Finance for New & Used Cars available.",
    ],
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 font-lexend">
      {/* 1. Meta Section - Minimalist approach */}
      <div className="max-w-3xl mb-16">
        <Typography
          variant="h3"
          as="h3"
          className="text-[#004687] font-bold mb-4"
        >
          {data.metaTitle}
        </Typography>
        <Typography
          variant="s2"
          as="p"
          className="text-gray-600 font-normal leading-relaxed"
        >
          {data.metaDesc}
        </Typography>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* 2. Main Features - Vertical List Style (Professional) */}
        <div className="lg:col-span-8 space-y-8">
          <Typography
            variant="h5"
            className="text-gray-900 font-bold mb-8 border-b pb-4"
          >
            Key Features
          </Typography>

          <div className="grid grid-cols-1 gap-6">
            {data.features.map((item, index) => (
              <div
                key={index}
                className="flex gap-5 p-6 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100"
              >
                <div className="mt-1">
                  <div className="bg-[#004687] rounded-full p-1">
                    <ChevronRight className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div>
                  <Typography
                    variant="s1"
                    className="text-gray-900 font-bold mb-2"
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="b2" className="text-gray-600">
                    {item.desc}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Sidebar Benefits - Right side box */}
        <div className="lg:col-span-4 sticky top-24">
          <div className="bg-[#004687] rounded-2xl p-8 text-white shadow-xl shadow-blue-100">
            <Typography
              variant="h5"
              className="text-white font-bold mb-8 border-b border-white/20 pb-4"
            >
              Why it Benefits You
            </Typography>

            <ul className="space-y-6">
              {data.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                  <Typography variant="s2" className="text-blue-50 font-medium">
                    {benefit}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
