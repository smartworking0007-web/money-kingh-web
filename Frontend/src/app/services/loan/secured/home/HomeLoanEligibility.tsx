"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import {
  User,
  Wallet,
  Briefcase,
  Star,
  Landmark,
  FileCheck,
  Percent,
  Users,
  type LucideIcon,
} from "lucide-react";

interface EligibilityFactor {
  factor: string;
  consideration: string;
  icon: LucideIcon;
}

const HomeLoanEligibility = () => {
  const eligibilityData: EligibilityFactor[] = [
    {
      factor: "Age",
      consideration: "Lender-specific age limits",
      icon: User,
    },
    {
      factor: "Income",
      consideration: "Monthly/annual income and stability",
      icon: Wallet,
    },
    {
      factor: "Employment",
      consideration: "Job/business continuity",
      icon: Briefcase,
    },
    {
      factor: "Credit Profile",
      consideration: "Credit history and repayment behaviour",
      icon: Star,
    },
    {
      factor: "Existing EMIs",
      consideration: "Current financial obligations",
      icon: Landmark,
    },
    {
      factor: "Property",
      consideration: "Value, title and legal status",
      icon: FileCheck,
    },
    {
      factor: "Loan-to-Value",
      consideration: "Depends on lender and applicable rules",
      icon: Percent,
    },
    {
      factor: "Applicant Type",
      consideration: "Salaried/self-employed/NRI, subject to lender",
      icon: Users,
    },
  ];

  return (
    <section className="w-full bg-[#f8fafc] py-10 md:py-16 px-5 md:px-12 font-lexend mt-0!">
      <div className="max-w-7xl mx-auto">
        {/* --- HEADER --- */}
        <div className="mb-10 md:mb-14 text-center max-w-4xl mx-auto">
          {/* H3 - Meta Title */}
          <Typography
            variant="h3"
            as="h3"
            className="text-[#1e293b] font-bold text-[24px] md:text-[36px] mb-3 mt-0! tracking-tight"
          >
            Home Loan Eligibility in India
          </Typography>

          {/* H4 - Intro Description */}
          <Typography
            variant="s1"
            as="h4"
            className="text-gray-600 text-[14px] md:text-lg font-normal mt-0! leading-relaxed"
          >
            Home loan eligibility varies by lender and applicant profile. Banks
            and NBFCs may consider age, income, employment or business
            stability, credit history, existing obligations, property value and
            other factors.
          </Typography>
        </div>

        {/* --- RESPONSIVE CARD GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {eligibilityData.map((item, index) => {
            const IconComponent = item.icon;

            return (
              <div
                key={index}
                className="bg-white p-6 md:p-7 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-[#00C4D8]/30 transition-all duration-300 flex flex-col items-center justify-center text-center group"
              >
                {/* ICON */}
                <div className="w-12 h-12 mb-4 bg-cyan-50 text-[#00C4D8] group-hover:bg-[#00C4D8] group-hover:text-white rounded-2xl flex items-center justify-center shrink-0 transition-colors duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* FACTOR TITLE */}
                <Typography
                  variant="h5"
                  as="h5"
                  className="text-[#0f172a] font-bold text-[17px] md:text-[19px] mb-2 mt-0! leading-snug"
                >
                  {item.factor}
                </Typography>

                {/* CONSIDERATION DETAILS */}
                <p className="text-gray-500 text-[13px] md:text-[14px] leading-relaxed font-normal m-0 max-w-[220px]">
                  {item.consideration}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeLoanEligibility;