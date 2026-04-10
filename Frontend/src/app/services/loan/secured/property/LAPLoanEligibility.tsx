"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import {
  CheckCircle2,
  User,
  Wallet,
  Star,
  Briefcase,
  Home,
  History,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

interface EligibilityItem {
  criteria: string;
  requirement: string;
  icon: LucideIcon;
}

const LAPLoanEligibility = () => {
  const eligibilityData: EligibilityItem[] = [
    { criteria: "Applicant Type", requirement: "Salaried Individuals, Self-Employed Professionals, and Business Owners.", icon: User },
    { criteria: "Age Limit", requirement: "21 years (min) up to 60–65 years at the time of loan maturity.", icon: History },
    { criteria: "Income Requirement", requirement: "A stable and regular income source is required (varies by lender).", icon: Wallet },
    { criteria: "CIBIL Score", requirement: "A score of 700 – 750+ is preferred for faster approval.", icon: Star },
    { criteria: "Property Ownership", requirement: "Ownership of Residential, Commercial, or Industrial property is required.", icon: Home },
    { criteria: "Employment Stability", requirement: "Salaried: 1–2 years stability. Self-employed: 2–3 years in business.", icon: Briefcase },
    { criteria: "Existing Obligations", requirement: "A low EMI/NMI ratio is preferred for better loan eligibility.", icon: TrendingUp },
    { criteria: "Loan-to-Value (LTV)", requirement: "Lenders usually offer 60–75% of the market value of the property.", icon: CheckCircle2 },
  ];

  return (
    <section className="w-full bg-[#f8fafc] py-10 md:py-16 px-5 md:px-12 font-lexend mt-0!">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="mb-8 md:mb-12 text-left">
          <Typography
            variant="h3"
            as="h3"
            className="text-[#1e293b] font-bold text-[24px] md:text-[36px] mb-2 mt-0! tracking-tight"
          >
            Eligibility Criteria of a LAP Loan
          </Typography>

          <Typography
            variant="h5"
            as="h5"
            className="text-gray-500 text-[14px] md:text-lg font-normal mt-0! leading-relaxed"
          >
            The eligibility criteria that must be fulfilled by the Loan Against Property applicant:
          </Typography>
        </div>

        {/* --- RESPONSIVE GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {eligibilityData.map((item, index) => {
            const IconComponent = item.icon;

            return (
              <div
                key={index}
                className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-xs flex flex-col gap-3 md:gap-4 min-h-auto md:min-h-[180px] hover:shadow-md transition-shadow duration-300"
              >
                {/* ICON & TITLE */}
                <div className="flex items-center gap-3 shrink-0">
                  <div className="p-2 bg-cyan-50/50 rounded-lg shrink-0 flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-[#00C4D8]" />
                  </div>
                  <Typography
                    variant="h5"
                    as="h4"
                    className="text-[#0f172a] font-bold text-base md:text-[18px] mt-0! mb-0! leading-tight flex items-center"
                  >
                    {item.criteria}
                  </Typography>
                </div>

                {/* REQUIREMENT */}
                <p className="text-gray-500 text-[13px] md:text-[15px] leading-relaxed font-medium">
                  {item.requirement}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LAPLoanEligibility;