"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import {
  ArrowDownCircle,
  ArrowUpCircle,
  Droplets,
  MonitorDot,
  ShieldCheck,
  Cpu,
  LucideIcon,
} from "lucide-react";

interface FeatureItem {
  title: string;
  desc: string;
  icon: LucideIcon;
  bg: string;
  iconColor: string;
}

const features: FeatureItem[] = [
  {
    title: "Efficient Receivables",
    desc: "Collect payments faster using UPI and gateways. Automated systems reduce delays.",
    icon: ArrowDownCircle,
    bg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    title: "Smart Payables",
    desc: "Handle vendor payments and salaries efficiently with bulk processing and automation.",
    icon: ArrowUpCircle,
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    title: "Liquidity Management",
    desc: "Maintain optimal cash balance for smooth operations while investing surplus wisely.",
    icon: Droplets,
    bg: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    title: "Real-Time Monitoring",
    desc: "Track transactions in real-time with advanced dashboards for better financial control.",
    icon: MonitorDot,
    bg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    title: "Fraud & Risk",
    desc: "Secure systems with encryption and detection tools protect against financial risks.",
    icon: ShieldCheck,
    bg: "bg-red-50",
    iconColor: "text-[#8B1D1D]",
  },
  {
    title: "Digital Integration",
    desc: "Easily integrate with ERP, accounting software, and modern digital banking tools.",
    icon: Cpu,
    bg: "bg-slate-50",
    iconColor: "text-slate-600",
  },
];

export default function BankingManagementFeatures() {
  return (
    <section className="w-full bg-white py-5 md:py-5 px-4 md:px-6 font-lexend relative z-20">
      <div className="max-w-6xl mx-auto">
        {/* --- HEADER --- */}
        <div className="text-center mb-10 md:mb-14">
          <Typography
            variant="h4"
            as="h4"
            className="text-2xl md:text-4xl font-black text-slate-900 mb-3 mt-0"
          >
            Key Features of Banking
          </Typography>
          
        </div>

        {/* --- FEATURES GRID (Compact Mode) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group p-5 md:p-6 bg-white border border-slate-100 rounded-2rem hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon Container (Smaller) */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:rotate-6 ${feature.bg} ${feature.iconColor}`}
                >
                  <Icon size={24} />
                </div>

                {/* Text Content */}
                <div className="space-y-2">
                  <Typography
                    variant="h5"
                    className="text-base md:text-lg font-bold text-slate-900 mt-0 leading-tight"
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="b1"
                    className="text-slate-500 text-xs md:text-sm leading-relaxed mt-0"
                  >
                    {feature.desc}
                  </Typography>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
