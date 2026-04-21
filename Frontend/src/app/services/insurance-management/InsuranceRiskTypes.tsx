"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import {
  Heart,
  Stethoscope,
  ShieldAlert,
  Building2,
  Scale,
  Settings,
  LineChart,
  Target,
  FileSearch,
  LucideIcon,
} from "lucide-react";

interface ServiceItem {
  title: string;
  desc: string;
  icon: LucideIcon;
  color: string;
  bg: string;
}

const insuranceServices: ServiceItem[] = [
  {
    title: "Life Insurance",
    desc: "Financial security for your family in unforeseen events.",
    icon: Heart,
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
  {
    title: "Health Insurance",
    desc: "Covers medical expenses, hospitalization, and treatments.",
    icon: Stethoscope,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    title: "General Insurance",
    desc: "Motor, travel, and property insurance for asset protection.",
    icon: ShieldAlert,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Business Insurance",
    desc: "Protects against fire, theft, liability, and losses.",
    icon: Building2,
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    title: "Liability Insurance",
    desc: "Covers legal liabilities from damages or injuries.",
    icon: Scale,
    color: "text-slate-600",
    bg: "bg-slate-50",
  },
];

const riskServices: ServiceItem[] = [
  {
    title: "Operational Risk",
    desc: "Managing risks from internal processes and systems.",
    icon: Settings,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    title: "Financial Risk",
    desc: "Handling investments, cash flow, and market fluctuations.",
    icon: LineChart,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    title: "Strategic Risk",
    desc: "Planning for long-term uncertainties and competition.",
    icon: Target,
    color: "text-red-600",
    bg: "bg-red-50",
  },
  {
    title: "Compliance Risk",
    desc: "Ensuring adherence to laws and global regulations.",
    icon: FileSearch,
    color: "text-cyan-600",
    bg: "bg-cyan-50",
  },
];

export default function InsuranceRiskTypes() {
  return (
    <section className="w-full bg-slate-50/50 py-12 md:py-20 px-4 md:px-6 font-lexend relative z-20">
      <div className="max-w-6xl mx-auto">
        {/* --- INSURANCE SECTION --- */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <Typography
              variant="h4"
              as="h4"
              className="text-2xl md:text-4xl font-black text-slate-900 mb-3 mt-0"
            >
              Types of Insurance Services
            </Typography>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {insuranceServices.map((item, idx) => (
              <div
                key={idx}
                className="group w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] p-5 bg-white border border-slate-100 rounded-2rem hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${item.bg} ${item.color}`}
                >
                  <item.icon size={20} />
                </div>
                <Typography
                  variant="h5"
                  className="text-base md:text-lg font-bold text-slate-900 mb-2 mt-0"
                >
                  {item.title}
                </Typography>
                <Typography className="text-slate-500 text-xs md:text-sm leading-relaxed m-0 opacity-80">
                  {item.desc}
                </Typography>
              </div>
            ))}
          </div>
        </div>

        {/* --- RISK MANAGEMENT SECTION --- */}
        <div>
          <div className="text-center mb-10">
            <Typography
              variant="h5"
              as="h5"
              className="text-2xl md:text-4xl font-black text-slate-900 mb-3 mt-0"
            >
              Types of Risk Management Services
            </Typography>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {riskServices.map((item, idx) => (
              <div
                key={idx}
                className="group w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] p-5 bg-white border border-slate-100 rounded-2rem hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${item.bg} ${item.color}`}
                >
                  <item.icon size={20} />
                </div>
                <Typography
                  variant="h5"
                  className="text-base md:text-lg font-bold text-slate-900 mb-2 mt-0"
                >
                  {item.title}
                </Typography>
                <Typography className="text-slate-500 text-xs md:text-sm leading-relaxed m-0 opacity-80">
                  {item.desc}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
