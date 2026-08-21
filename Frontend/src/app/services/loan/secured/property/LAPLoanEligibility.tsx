"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import {
  User,
  History,
  Wallet,
  Star,
  Home,
  Briefcase,
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
    {
      criteria: "Applicant",
      requirement: "Salaried / Self-employed / Business Owner",
      icon: User,
    },
    {
      criteria: "Age",
      requirement: "Usually 21+",
      icon: History,
    },
    {
      criteria: "Income",
      requirement: "Stable and verifiable income",
      icon: Wallet,
    },
    {
      criteria: "CIBIL Score",
      requirement: "Higher score improves approval chances",
      icon: Star,
    },
    {
      criteria: "Property",
      requirement: "Residential / Commercial, subject to lender policy",
      icon: Home,
    },
    {
      criteria: "Employment/Business",
      requirement: "Stable employment or business history",
      icon: Briefcase,
    },
    {
      criteria: "Existing EMIs",
      requirement: "Repayment capacity considered",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="w-full bg-[#f8fafc] py-10 md:py-16 px-5 md:px-12 font-lexend mt-0!">
      <div className="max-w-7xl mx-auto">
        {/* --- HEADER --- */}
        <div className="mb-8 md:mb-12 text-center">
          <Typography
            variant="h4"
            as="h3"
            className="text-[#1e293b] font-bold text-[24px] md:text-[36px] mb-2 mt-0! tracking-tight"
          >
            Eligibility Criteria of a LAP Loan
          </Typography>

          <Typography
            variant="b1"
            as="h5"
            className="text-gray-500 text-[14px] md:text-lg font-normal mt-0! leading-relaxed"
          >
            The eligibility criteria that must be fulfilled by the Loan Against
            Property applicant:
          </Typography>
        </div>

        {/* --- RESPONSIVE GRID (CENTERED) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 justify-center">
          {eligibilityData.map((item, index) => {
            const IconComponent = item.icon;

            return (
              <div
                key={index}
                className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-xs flex flex-col items-center text-center justify-center gap-3 md:gap-4 min-h-auto md:min-h-[180px] hover:shadow-md transition-shadow duration-300"
              >
                {/* ICON & TITLE */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 shrink-0">
                  <div className="p-2 bg-cyan-50/50 rounded-lg shrink-0 flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-[#00C4D8]" />
                  </div>
                  <Typography
                    variant="h5"
                    as="h4"
                    className="text-[#0f172a] font-bold text-base md:text-[18px] mt-0! mb-0! leading-tight text-center"
                  >
                    {item.criteria}
                  </Typography>
                </div>

                {/* REQUIREMENT */}
                <p className="text-gray-500 text-[13px] md:text-[15px] leading-relaxed font-medium text-center">
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