"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import {
  CheckCircle2,
  User,
  Wallet,
  Star,
  Briefcase,
  FileText,
  Globe,
  Landmark,
  type LucideIcon,
} from "lucide-react";

interface EligibilityItem {
  criteria: string;
  requirement: string;
  icon: LucideIcon;
}

const HomeLoanEligibility = () => {
  const eligibilityData: EligibilityItem[] = [
    { criteria: "Age criteria", requirement: "18–21 years (min) to 70–75 years (max) at loan maturity.", icon: User },
    { criteria: "Income requirement", requirement: "Salaried: ₹25,000/mo. Self-employed: ₹30,000/mo (approx).", icon: Wallet },
    { criteria: "Credit score", requirement: "730 or above is preferred for better interest rates.", icon: Star },
    { criteria: "Employment type", requirement: "Eligible for both salaried and self-employed individuals.", icon: Briefcase },
    { criteria: "Existing EMIs", requirement: "Lenders prefer a DTI ratio below 50–55%.", icon: Landmark },
    { criteria: "Property documents", requirement: "Proper documentation ensures faster approval.", icon: FileText },
    { criteria: "Eligible applicants", requirement: "Indian residents, NRIs, and PIOs are eligible.", icon: Globe },
    { criteria: "Loan amount", requirement: "Up to 90% of the property value can be sanctioned.", icon: CheckCircle2 },
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
            Eligibility Criteria of a Home Loan
          </Typography>

          <Typography
            variant="h5"
            as="h5"
            className="text-gray-500 text-[14px] md:text-lg font-normal mt-0! leading-relaxed"
          >
            The eligibility criteria that must be fulfilled by the home loan applicant:
          </Typography>
        </div>

        {/* --- RESPONSIVE GRID --- */}
        {/* Mobile: 1 column, Tablet: 2 columns, Desktop: 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {eligibilityData.map((item, index) => {
            const IconComponent = item.icon;

            return (
              <div
                key={index}
                className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-xs flex flex-col gap-3 md:gap-4 min-h-auto md:min-h-[180px]"
              >
                {/* ICON & TITLE SIDE-BY-SIDE */}
                <div className="flex items-center gap-3 shrink-0">
                  <div className="p-2 bg-cyan-50/50 rounded-lg shrink-0 flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-[#00C4D8]" />
                  </div>
                  <Typography
                    variant="h5"
                    as="h4"
                    // mt-0!, mb-0! aur leading-none alignment fix karne ke liye
                    className="text-[#0f172a] font-bold text-base md:text-[18px] mt-0! mb-0! leading-none flex items-center"
                  >
                    {item.criteria}
                  </Typography>
                </div>

                {/* REQUIREMENT (Niche wala text) */}
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

export default HomeLoanEligibility;