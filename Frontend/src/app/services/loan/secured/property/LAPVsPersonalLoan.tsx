"use client";

import React from "react";
import Link from "next/link";
import { Typography } from "@/app/components/ui/Typography";
import {
  ShieldCheck,
  Coins,
  Percent,
  CalendarDays,
  FileCheck2,
  AlertTriangle,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

interface ComparisonRow {
  feature: string;
  lap: string;
  personalLoan: string;
  icon: LucideIcon;
}

const comparisonData: ComparisonRow[] = [
  {
    feature: "Security",
    lap: "Property required",
    personalLoan: "Usually unsecured",
    icon: ShieldCheck,
  },
  {
    feature: "Loan Amount",
    lap: "Generally higher",
    personalLoan: "Generally lower",
    icon: Coins,
  },
  {
    feature: "Interest Rate",
    lap: "Usually lower than unsecured loans",
    personalLoan: "Usually higher",
    icon: Percent,
  },
  {
    feature: "Tenure",
    lap: "Generally longer",
    personalLoan: "Generally shorter",
    icon: CalendarDays,
  },
  {
    feature: "Processing",
    lap: "Property/legal verification required",
    personalLoan: "Usually simpler",
    icon: FileCheck2,
  },
  {
    feature: "Risk",
    lap: "Property is pledged",
    personalLoan: "No property collateral",
    icon: AlertTriangle,
  },
];

const LAPVsPersonalLoan = () => {
  return (
    <section className="w-full bg-[#f8fafc] py-10 md:py-16 px-5 md:px-12 font-lexend">
      <div className="max-w-7xl mx-auto">
        {/* --- HEADER --- */}
        <div className="mb-8 md:mb-12 text-center">
          <Typography
            variant="h4"
            as="h2"
            className="text-[#1e293b] font-bold text-[24px] md:text-[36px] mb-2 tracking-tight"
          >
            Loan Against Property vs{" "}
            <Link
              href="/services/loan/unsecured/personal"
            >
              Personal Loan
            </Link>
          </Typography>
          <Typography
            variant="b1"
            as="p"
            className="text-gray-500 text-[14px] md:text-lg font-normal leading-relaxed max-w-2xl mx-auto"
          >
            Compare key parameters to understand which financing option best aligns with your financial goals.
          </Typography>
        </div>

        {/* --- COMPARISON TABLE --- */}
        <div className="overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#1e293b] text-white">
                  <th className="py-4.5 px-5 md:px-8 text-sm md:text-base font-semibold tracking-wide w-[30%]">
                    Feature
                  </th>
                  <th className="py-4.5 px-5 md:px-8 text-sm md:text-base font-semibold tracking-wide w-[35%] border-l border-slate-700/50">
                    Loan Against Property
                  </th>
                  <th className="py-4.5 px-5 md:px-8 text-sm md:text-base font-semibold tracking-wide w-[35%] border-l border-slate-700/50">
                    <Link
                      href="/services/loan/unsecured/personal"
                      className="group inline-flex items-center gap-1.5 hover:text-[#00C4D8] transition-colors"
                    >
                      <span>Personal Loan</span>
                      <ArrowRight className="w-4 h-4 opacity-75 transition-transform group-hover:translate-x-1 group-hover:opacity-100" />
                    </Link>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparisonData.map((row, index) => {
                  const Icon = row.icon;
                  const isEven = index % 2 === 0;

                  return (
                    <tr
                      key={index}
                      className={`transition-colors duration-150 hover:bg-cyan-50/30 ${
                        isEven ? "bg-white" : "bg-slate-50/50"
                      }`}
                    >
                      {/* Feature Column */}
                      <td className="py-4 px-5 md:px-8 font-semibold text-[#0f172a] text-[14px] md:text-[15px]">
                        <div className="flex items-center gap-3">
                          <div className="p-1.5 bg-cyan-50 text-[#00C4D8] rounded-md shrink-0">
                            <Icon className="w-4 h-4" />
                          </div>
                          <span>{row.feature}</span>
                        </div>
                      </td>

                      {/* LAP Column */}
                      <td className="py-4 px-5 md:px-8 text-gray-700 text-[13px] md:text-[15px] font-medium border-l border-gray-100">
                        {row.lap}
                      </td>

                      {/* Personal Loan Column */}
                      <td className="py-4 px-5 md:px-8 text-gray-500 text-[13px] md:text-[15px] font-normal border-l border-gray-100">
                        {row.personalLoan}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LAPVsPersonalLoan;