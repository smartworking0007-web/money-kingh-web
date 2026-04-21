"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import {
  Inbox,
  Send,
  BarChart3,
  Waves,
  Globe2,
  LucideIcon,
} from "lucide-react";

interface ServiceType {
  title: string;
  desc: string;
  icon: LucideIcon;
  bg: string;
  iconColor: string;
}

const serviceTypes: ServiceType[] = [
  {
    title: "Collection Services",
    desc: "Faster inflow through digital and cheque collections for optimized cash speed.",
    icon: Inbox,
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    title: "Payment Services",
    desc: "Seamless vendor payments, payroll management, and bulk fund transfers.",
    icon: Send,
    bg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    title: "Treasury Management",
    desc: "Expert handling of investments and financial risks to protect your capital.",
    icon: BarChart3,
    bg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    title: "Liquidity Management",
    desc: "Maintain the perfect cash flow balance to ensure smooth daily operations.",
    icon: Waves,
    bg: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
  {
    title: "Trade Finance",
    desc: "Comprehensive support and financial instruments for import/export businesses.",
    icon: Globe2,
    bg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
];

export default function BankingServiceTypes() {
  return (
    <section className="w-full bg-slate-50/50 py-12 md:py-20 px-4 md:px-6 font-lexend relative z-20">
      <div className="max-w-6xl mx-auto">
        {/* --- HEADER --- */}
        <div className="text-center mb-10 md:mb-16">
          <Typography
            variant="h4"
            as="h4"
            className="text-2xl md:text-4xl font-black text-slate-900 mb-3 mt-0"
          >
            Types of Banking & Cash Management
          </Typography>
          
        </div>

        {/* --- SERVICES GRID --- */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {serviceTypes.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="group w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] p-5 md:p-6 bg-white border border-slate-100 rounded-2rem hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
              >
                {/* Icon Container */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 ${service.bg} ${service.iconColor}`}
                >
                  <Icon size={24} />
                </div>

                {/* Text Content */}
                <div className="space-y-2">
                  <Typography
                    variant="h5"
                    className="text-base md:text-lg font-bold text-slate-900 mt-0 leading-tight"
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="b1"
                    className="text-slate-500 text-xs md:text-sm leading-relaxed mt-0"
                  >
                    {service.desc}
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
