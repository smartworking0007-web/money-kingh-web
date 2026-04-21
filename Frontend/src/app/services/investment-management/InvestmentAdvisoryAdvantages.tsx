"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import {
  LineChart,
  UserCheck,
  ShieldCheck,
  Target,
  PieChart,
  Clock,
  Activity,
  ReceiptIndianRupee,
  LucideIcon, // Type import karein
} from "lucide-react";

// Interface define karein taaki TS ko pata chale icon kya hai
interface AdvantageItem {
  title: string;
  desc: string;
  icon: LucideIcon; // Yahan LucideIcon use karein
  color: string;
  bg: string;
}

const advantages: AdvantageItem[] = [
  {
    title: "Expert Financial Guidance",
    desc: "In-depth market knowledge and professional insights to help you make informed decisions and avoid costly mistakes.",
    icon: LineChart, // Component direct pass karein, <LineChart /> nahi
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Personalized Strategy",
    desc: "Customized plans tailored specifically to your needs, whether it’s wealth creation, retirement, or tax saving.",
    icon: UserCheck,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    title: "Better Risk Management",
    desc: "Assessing and managing risks by diversifying your portfolio across equity, debt, and mutual funds.",
    icon: ShieldCheck,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    title: "Goal-Based Planning",
    desc: "Achieve life goals like buying a home, funding education, or retirement through structured strategies.",
    icon: Target,
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
  {
    title: "Portfolio Diversification",
    desc: "Minimizing risk and maximizing returns by spreading investments across multiple financial instruments.",
    icon: PieChart,
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    title: "Time-Saving & Convenience",
    desc: "We handle research and monitoring, allowing you to focus on your personal and professional life.",
    icon: Clock,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    title: "Monitoring & Rebalancing",
    desc: "Continuous tracking and necessary adjustments to keep your investments aligned with market changes.",
    icon: Activity,
    color: "text-cyan-600",
    bg: "bg-cyan-50",
  },
  {
    title: "Tax Efficiency",
    desc: "Choosing tax-saving instruments that reduce your tax burden while maximizing your final returns.",
    icon: ReceiptIndianRupee,
    color: "text-[#8B1D1D]",
    bg: "bg-red-50",
  },
];

export default function InvestmentAdvisoryAdvantages() {
  return (
    <section className="w-full bg-white py-12 md:py-20 px-4 md:px-6 font-lexend relative z-20">
      <div className="max-w-7xl mx-auto">
        {/* --- HEADER --- */}
        <div className="text-center mb-12 md:mb-20">
          <Typography
            variant="h3"
            as="h3"
            className="text-2xl md:text-5xl font-black text-slate-900 mb-4 mt-0"
          >
            Key Advantages of Investment Advisory Services
          </Typography>
          <p className="max-w-3xl mx-auto text-slate-500 text-sm md:text-lg leading-relaxed">
            Investment advisory services in India offer expert guidance to make
            smarter financial decisions and achieve long-term wealth creation.
          </p>
        </div>

        {/* --- ADVANTAGES GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {advantages.map((item, idx) => {
            const Icon = item.icon; // Icon ko as a Component treat karein
            return (
              <div
                key={idx}
                className="group p-6 md:p-8 bg-white border border-slate-100 rounded-2rem hover:shadow-2xl hover:shadow-red-900/5 hover:-translate-y-2 transition-all duration-300"
              >
                {/* Icon Container */}
                <div
                  className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:rotate-12 ${item.bg} ${item.color}`}
                >
                  <Icon size={28} />{" "}
                  {/* Ab size prop bina kisi error ke chalega */}
                </div>

                {/* Text Content */}
                <div className="space-y-3">
                  <Typography
                    variant="h5"
                    className="text-lg md:text-xl font-bold text-slate-900 mt-0 leading-tight"
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="b1"
                    className="text-slate-500 text-xs md:text-sm leading-relaxed mt-0"
                  >
                    {item.desc}
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
