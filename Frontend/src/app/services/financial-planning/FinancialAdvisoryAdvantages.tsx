"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import {
  Target,
  ShieldAlert,
  ReceiptIndianRupee,
  BarChart4,
  LayoutDashboard,
  Gem,
  UserCheck,
  Compass,
} from "lucide-react";

export default function FinancialAdvisoryAdvantages() {
  const advantageCategories = [
    {
      title: "Personalized Strategies",
      icon: <UserCheck className="w-5 h-5 md:w-6 md:h-6" />,
      items: ["Tailored advice aligned with your unique goals."],
      bg: "bg-[#fff5f5]",
      iconColor: "text-[#8B1D1D]",
    },
    {
      title: "Goal Achievement",
      icon: <Target className="w-5 h-5 md:w-6 md:h-6" />,
      items: ["Plan for homes, education, or retirement."],
      bg: "bg-gradient-to-br from-[#8B1D1D] to-[#5a1212]",
      itemsColor: "text-white/90",
      titleColor: "text-white",
      iconBg: "bg-white",
      iconColor: "text-[#8B1D1D]",
    },
    {
      title: "Risk Management",
      icon: <ShieldAlert className="w-5 h-5 md:w-6 md:h-6" />,
      items: ["Identify and mitigate potential financial risks."],
      bg: "bg-[#f0fdfa]",
      iconColor: "text-teal-600",
    },
    {
      title: "Tax Efficiency",
      icon: <ReceiptIndianRupee className="w-5 h-5 md:w-6 md:h-6" />,
      items: ["Optimize liabilities through strategic planning."],
      bg: "bg-[#f5f3ff]",
      iconColor: "text-purple-600",
    },
    {
      title: "Investment Optimization",
      icon: <BarChart4 className="w-5 h-5 md:w-6 md:h-6" />,
      items: ["Diversified portfolios for better returns."],
      bg: "bg-[#fffbeb]",
      iconColor: "text-amber-600",
    },
    {
      title: "Comprehensive Planning",
      icon: <LayoutDashboard className="w-5 h-5 md:w-6 md:h-6" />,
      items: ["Estate, insurance, and debt management."],
      bg: "bg-[#eff6ff]",
      iconColor: "text-blue-600",
    },
    {
      title: "Peace of Mind",
      icon: <Gem className="w-5 h-5 md:w-6 md:h-6" />,
      items: ["Confidence in a clear, actionable plan."],
      bg: "bg-[#fdf2f8]",
      iconColor: "text-pink-600",
    },
    {
      title: "Professional Guidance",
      icon: <Compass className="w-5 h-5 md:w-6 md:h-6" />,
      items: ["Ongoing support from seasoned consultants."],
      bg: "bg-[#f8fafc]",
      iconColor: "text-slate-600",
    },
  ];

  return (
    /* Overlap fix karne ke liye negative margin hata diya hai aur padding adjust ki hai */
    <section className="w-full bg-white py-16 md:py-24 px-4 md:px-6 font-lexend relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12 md:mb-16">
          <div className="space-y-4">
            <Typography
              variant="h4"
              as="h4"
              className="text-[#1e293b] font-black text-3xl md:text-5xl mt-0 leading-tight"
            >
              Advantages of Engaging in Financial Advisory Services
            </Typography>
           
          </div>

          <div className="max-w-md">
            <Typography
              variant="b1"
              className="text-slate-500 text-sm md:text-lg leading-relaxed mt-0"
            >
              Engaging in financial advisory services with Money King Financial
              offers numerous advantages to secure your wealth and future goals.
            </Typography>
          </div>
        </div>

        {/* --- ADVANTAGES GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantageCategories.map((cat, idx) => (
            <div
              key={idx}
              className={`relative p-6 md:p-8 rounded-32px flex flex-col justify-between min-h-[200px] md:min-h-240px transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-slate-100 group ${cat.bg}`}
            >
              {/* Icon Circle */}
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-8 shadow-sm transition-transform duration-500 group-hover:scale-110 ${cat.iconBg || "bg-white"} ${cat.iconColor}`}
              >
                {cat.icon}
              </div>

              {/* Content */}
              <div className="space-y-3">
                <Typography
                  variant="h5"
                  className={`text-lg md:text-xl font-bold leading-tight mt-0 ${cat.titleColor || "text-slate-900"}`}
                >
                  {cat.title}
                </Typography>

                <ul className="space-y-1">
                  {cat.items.map((item, i) => (
                    <li
                      key={i}
                      className={`text-xs md:text-sm font-medium leading-relaxed ${cat.itemsColor || "text-slate-500"}`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
