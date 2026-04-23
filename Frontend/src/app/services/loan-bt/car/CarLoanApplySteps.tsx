"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";
import Link from "next/link";
import {
  UserCheck,
  Search,
  FileEdit,
  UploadCloud,
  CheckCircle,
  Banknote,
  ArrowRight,
  LucideProps,
} from "lucide-react";

const applySteps = [
  {
    id: 1,
    title: "Eligibility",
    icon: <UserCheck />,
    heading: "Step 1: Check Eligibility",
    desc: "Review your credit score, income, and existing loan details to ensure you meet the lender's requirements.",
    points: [
      "CIBIL Score 650+",
      "Stable Monthly Income",
      "Existing Loan History",
    ],
    color: "bg-[#8B1D1D]",
  },
  {
    id: 2,
    title: "Compare",
    icon: <Search />,
    heading: "Step 2: Compare Lenders",
    desc: "Analyze various banks and NBFCs to choose a lender offering lower interest rates and better repayment terms.",
    points: [
      "Lowest Interest Rates",
      "Minimal Processing Fees",
      "Flexible Tenure Options",
    ],
    color: "bg-slate-800",
  },
  {
    id: 3,
    title: "Apply",
    icon: <FileEdit />,
    heading: "Step 3: Apply Online",
    desc: "Fill out the simple digital application form with your personal and loan requirements.",
    points: [
      "Quick Form Filling",
      "Instant OTP Verification",
      "100% Paperless Start",
    ],
    color: "bg-emerald-700",
  },
  {
    id: 4,
    title: "Documents",
    icon: <UploadCloud />,
    heading: "Step 4: Submit Documents",
    desc: "Provide necessary KYC, income proof, and vehicle documents for verification.",
    points: [
      "PAN & Aadhaar Card",
      "Salary Slips / ITR",
      "Vehicle RC & Insurance",
    ],
    color: "bg-indigo-700",
  },
  {
    id: 5,
    title: "Approval",
    icon: <CheckCircle />,
    heading: "Step 5: Approval & Transfer",
    desc: "Once verified, the loan is approved and the balance is transferred to the new lender.",
    points: [
      "Quick Verification",
      "Direct Bank Coordination",
      "Smooth Debt Transfer",
    ],
    color: "bg-orange-600",
  },
  {
    id: 6,
    title: "Disbursal",
    icon: <Banknote />,
    heading: "Step 6: Top-Up Disbursal",
    desc: "The additional top-up loan amount is credited directly to your bank account for your use.",
    points: [
      "Instant Fund Credit",
      "Use for any Purpose",
      "Single Combined EMI",
    ],
    color: "bg-[#8B1D1D]",
  },
];

export default function CarLoanApplySteps() {
  const [activeTab, setActiveTab] = useState(0);
  const current = applySteps[activeTab];

  return (
    <section className="w-full bg-white py-0 md:py-20 px-4 md:px-6 font-lexend overflow-hidden relative z-20">
      <div className="max-w-7xl mx-auto">
        {/* --- HEADER --- */}
        <div className="text-center mb-10 md:mb-14">
          <Typography
            variant="h3"
            as="h3"
            className="text-2xl md:text-5xl font-black text-slate-900 mb-3 mt-0"
          >
            How to Apply
          </Typography>
          <div className="w-20 h-1 bg-[#8B1D1D] mx-auto rounded-full" />
        </div>

        {/* --- TABS --- */}
        <div className="flex border-b border-slate-100 overflow-x-auto no-scrollbar mb-10 md:mb-16 justify-start md:justify-center">
          {applySteps.map((step, idx) => (
            <button
              key={step.id}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-6 py-4 text-xs md:text-sm font-bold whitespace-nowrap border-b-2 transition-all duration-300 ${
                activeTab === idx
                  ? "border-[#8B1D1D] text-[#8B1D1D] bg-red-50/50"
                  : "border-transparent text-slate-400 hover:text-slate-800"
              }`}
            >
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] ${activeTab === idx ? "bg-[#8B1D1D] text-white" : "bg-slate-100 text-slate-500"}`}
              >
                {step.id}
              </span>
              {step.title}
            </button>
          ))}
        </div>

        {/* --- CONTENT AREA --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Info */}
          <div className="space-y-6 order-2 lg:order-1 text-center lg:text-left">
            <Typography
              variant="h4"
              className="text-2xl md:text-4xl font-black text-slate-900 mt-0"
            >
              {current.heading}
            </Typography>
            <Typography className="text-slate-500 text-sm md:text-lg leading-relaxed mt-0">
              {current.desc}
            </Typography>

            <div className="space-y-3 flex flex-col items-center lg:items-start">
              {current.points.map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B1D1D]" />
                  <span className="text-slate-700 font-bold text-sm md:text-base">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex justify-center lg:justify-start">
              <Link
                href="http://application.dsacrm.com/e22787fa-e05f-4643-a0af-d4a5b98889ba/apply"
                className="flex items-center gap-2 text-[#8B1D1D] font-bold hover:gap-3 transition-all text-sm md:text-base"
              >
                Start Step {current.id} Now <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Right Side: Visual Card */}
          <div
            className={`relative rounded-[2.5rem] p-1 transition-all duration-700 ${current.color} order-1 lg:order-2 shadow-2xl`}
          >
            <div className="bg-white rounded-[2.3rem] p-8 md:p-12 text-center h-full">
              <div className="flex justify-center mb-8">
                <div className="p-6 bg-slate-50 rounded-3xl text-[#8B1D1D]">
                  {React.cloneElement(
                    current.icon as React.ReactElement<LucideProps>,
                    {
                      size: 48,
                      className: "w-12 h-12 md:w-16 md:h-16",
                    },
                  )}
                </div>
              </div>
              <h4 className="text-xl md:text-2xl font-black text-slate-900 mb-2">
                Process Active
              </h4>
              <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-6">
                Car Loan BT & Top-Up
              </p>

              <div className="flex justify-center gap-2">
                {applySteps.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${i === activeTab ? "w-8 bg-[#8B1D1D]" : "w-2 bg-slate-200"}`}
                  />
                ))}
              </div>

              <Link href="/contact" className="block w-full">
                <button className="w-full mt-8 py-4 bg-[#1e293b] text-white rounded-2xl font-bold hover:bg-black transition-all shadow-lg active:scale-95 cursor-pointer">
                  Apply Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
