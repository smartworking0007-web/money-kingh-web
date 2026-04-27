"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";
import Link from "next/link";
import {
  TrendingUp,
  Home,
  ReceiptIndianRupee,
  ShieldCheck,
  Briefcase,
  ScrollText,
  GraduationCap,
  Wallet,
  AlertTriangle,
  CheckCircle2,
  LucideProps,
} from "lucide-react";

const planningTypes = [
  {
    id: "investment",
    tabTitle: "Investment",
    icon: <TrendingUp />,
    heading: "Investment Planning",
    subheading:
      "Focuses on growing your wealth through smart investment options.",
    points: [
      "Mutual Funds & Stocks",
      "SIPs & Bonds",
      "Risk-based diversification",
    ],
    example: "Maximizes returns based on your appetite",
    color: "bg-[#8B1D1D]",
  },
  {
    id: "retirement",
    tabTitle: "Retirement",
    icon: <Home />,
    heading: "Retirement Planning",
    subheading: "Ensures a steady income even after you stop working.",
    points: [
      "Pension Plans",
      "Provident Funds (PPF)",
      "Annuities & Long-term assets",
    ],
    example: "Build a corpus for your golden years",
    color: "bg-slate-800",
  },
  {
    id: "tax",
    tabTitle: "Tax",
    icon: <ReceiptIndianRupee />,
    heading: "Tax Planning",
    subheading: "Reduce your tax liability legally using exemptions.",
    points: [
      "ELSS & Tax-saving FD",
      "80C & 80D Deductions",
      "PPF & Insurance benefits",
    ],
    example: "Legally minimize your tax outgo",
    color: "bg-emerald-700",
  },
  {
    id: "insurance",
    tabTitle: "Insurance",
    icon: <ShieldCheck />,
    heading: "Insurance Planning",
    subheading: "Protects you and your family against financial risks.",
    points: [
      "Term Life Insurance",
      "Comprehensive Health Cover",
      "General Asset Insurance",
    ],
    example: "Safety net for unexpected events",
    color: "bg-indigo-700",
  },
  {
    id: "wealth",
    tabTitle: "Wealth",
    icon: <Briefcase />,
    heading: "Wealth Management",
    subheading: "Comprehensive service to grow and preserve your assets.",
    points: [
      "Estate Planning",
      "Portfolio Rebalancing",
      "HNW Individual strategies",
    ],
  },
  {
    id: "estate",
    tabTitle: "Estate",
    icon: <ScrollText />,
    heading: "Estate Planning",
    subheading: "Ensures assets are distributed according to your wishes.",
    points: [
      "Wills & Trusts",
      "Succession Planning",
      "Legal smooth transition",
    ],
    example: "Avoid legal complications later",
    color: "bg-purple-700",
  },
  {
    id: "child",
    tabTitle: "Child Education",
    icon: <GraduationCap />,
    heading: "Child Education Planning",
    subheading: "Save and invest for your child's future education.",
    points: [
      "Higher Education Corpus",
      "Marriage Planning",
      "Early compounding benefits",
    ],
    example: "Ready for your child's major events",
    color: "bg-blue-700",
  },
  {
    id: "budget",
    tabTitle: "Budgeting",
    icon: <Wallet />,
    heading: "Budgeting & Cash Flow",
    subheading: "Foundation of a strong financial plan.",
    points: [
      "Income & Expense tracking",
      "Savings management",
      "Debt avoidance",
    ],
    example: "Track every rupee you earn",
    color: "bg-rose-700",
  },
  {
    id: "risk",
    tabTitle: "Risk Management",
    icon: <AlertTriangle />,
    heading: "Risk Management Planning",
    subheading: "Prepare strategies to minimize potential financial risks.",
    points: [
      "Emergency Funds",
      "Portfolio Diversification",
      "Risk identification",
    ],
    example: "Minimize impact of market volatility",
    color: "bg-[#8B1D1D]",
  },
];

export default function FinancialPlanningTypes() {
  const [activeTab, setActiveTab] = useState(0);
  const current = planningTypes[activeTab];

  return (
    <section className="w-full bg-white py-12 md:py-20 px-4 md:px-6 font-lexend overflow-hidden relative z-30 -mt-24 md:-mt-20 rounded-t-[40px] md:rounded-t-[80px] shadow-2xl">
      <div className="max-w-7xl mx-auto pt-8 md:pt-16">
        {/* --- HEADER --- */}
        <div className="text-center mb-8 md:mb-12">
          <Typography
            variant="h3"
            as="h3"
            className="text-2xl md:text-5xl font-black text-slate-900 mb-3"
          >
            Types of Financial Planning
          </Typography>
          <Typography
            variant="h5"
            as="h5"
            className="text-slate-500 text-sm md:text-lg max-w-4xl mx-auto leading-relaxed px-4"
          >
            Financial planning is not one-size-fits-all. Different types of
            planning help you manage various aspects of your financial life.
          </Typography>
        </div>

        {/* --- TABS SECTION (Bar hatane ke liye special CSS) --- */}
        <div className="relative mb-10 md:mb-16">
          <div
            className="flex border-b border-slate-100 overflow-x-auto justify-start md:justify-center px-2 
            [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {planningTypes.map((tab, idx) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-5 py-3 md:px-8 md:py-4 text-[11px] md:text-sm font-bold whitespace-nowrap border-b-2 transition-all duration-300 ${
                  activeTab === idx
                    ? "border-[#8B1D1D] text-[#8B1D1D] bg-red-50/50"
                    : "border-transparent text-slate-400 hover:text-slate-800"
                }`}
              >
                <span className="shrink-0">
                  {React.cloneElement(
                    tab.icon as React.ReactElement<LucideProps>,
                    { size: 16 },
                  )}
                </span>
                {tab.tabTitle}
              </button>
            ))}
          </div>
        </div>

        {/* --- CONTENT AREA --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-6 order-2 lg:order-1 text-center lg:text-left px-2">
            <div>
              <Typography
                variant="h4"
                className="text-2xl md:text-4xl font-black text-slate-900 mb-3"
              >
                {current.heading}
              </Typography>
              <Typography className="text-slate-500 text-sm md:text-lg leading-relaxed">
                {current.subheading}
              </Typography>
            </div>

            <div className="space-y-3 flex flex-col items-center lg:items-start">
              {current.points.map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="text-slate-700 font-bold text-xs md:text-base">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <div className="px-4 py-2 bg-slate-50 rounded-xl border border-slate-100 text-slate-600 font-bold text-[10px] md:text-sm italic">
                {current.example}
              </div>
            </div>
          </div>

          <div
            className={`relative rounded-2rem md:rounded-[2.5rem] p-1 transition-all duration-500 ${current.color} order-1 lg:order-2 shadow-2xl mx-auto w-full max-w-sm md:max-w-none`}
          >
            <div className="bg-white rounded-[1.8rem] md:rounded-[2.3rem] p-6 md:p-12 text-center h-full">
              <div className="flex justify-center mb-6 md:mb-8">
                <div className="p-5 md:p-6 bg-slate-50 rounded-2xl md:rounded-3xl text-[#8B1D1D]">
                  {React.cloneElement(
                    current.icon as React.ReactElement<LucideProps>,
                    {
                      size: 48,
                      className: "w-10 h-10 md:w-16 md:h-16",
                    },
                  )}
                </div>
              </div>
              <h4 className="text-lg md:text-2xl font-black text-slate-900 mb-1">
                Expert Advisory
              </h4>
              <p className="text-slate-400 font-bold text-[10px] md:text-xs uppercase tracking-widest mb-6">
                Money King Financial
              </p>

              <div className="flex justify-center gap-1.5 md:gap-2">
                {planningTypes.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 md:h-1.5 rounded-full transition-all duration-300 ${i === activeTab ? "w-6 md:w-8 bg-[#8B1D1D]" : "w-1.5 md:w-2 bg-slate-200"}`}
                  />
                ))}
              </div>

              <Link href="http://application.dsacrm.com/e22787fa-e05f-4643-a0af-d4a5b98889ba/apply" className="block w-full">
                <button className="w-full mt-6 md:mt-8 py-3.5 md:py-4 bg-[#1e293b] text-white rounded-xl md:rounded-2xl font-bold text-xs md:text-sm hover:bg-black transition-all shadow-lg active:scale-95">
                  Consult an Expert
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
