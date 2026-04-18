"use client";

import { Typography } from "@/app/components/ui/Typography";
import {
  Coins,
  CalendarClock,
  Percent,
  HandCoins,
  ShieldCheck,
} from "lucide-react";

export default function MachineryFeatures() {
  const features = [
    {
      title: "High Loan Amount",
      description:
        "Avail machinery loans up to ₹10 Crore, depending on your business profile, to support large-scale investments and expansion.",
      icon: <Coins className="w-6 h-6" />,
    },
    {
      title: "Flexible Repayment Tenure",
      description:
        "Choose repayment options ranging from 1 to 10 years, allowing you to manage EMIs comfortably based on your cash flow.",
      icon: <CalendarClock className="w-6 h-6" />,
    },
    {
      title: "Competitive Interest Rates",
      description:
        "Get machinery finance at attractive interest rates (subject to profile), helping you reduce overall borrowing costs.",
      icon: <Percent className="w-6 h-6" />,
    },
    {
      title: "Collateral-Free Options",
      description:
        "Access funding without additional collateral for eligible profiles, making it easier for MSMEs and growing businesses to secure loans.",
      icon: <HandCoins className="w-6 h-6" />,
    },
    {
      title: "Up to 100% Financing",
      description:
        "Get up to 100% financing on machinery cost, including installation, maintenance, and applicable taxes, reducing your upfront investment burden.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
  ];

  return (
    <section className="bg-white pt-8 pb-16 md:pb-24 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* --- HEADER --- */}
        <div className="text-center mb-10 md:mb-14">
          <Typography
            variant="h3"
            as="h2"
            className="font-bold mb-4 text-2xl sm:text-3xl md:text-[42px] leading-tight text-slate-900"
          >
            Features & Benefits of Machinery Loan in India
          </Typography>
          <p className="max-w-3xl mx-auto text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed">
            A machinery loan in India is designed to help businesses invest in
            advanced equipment without financial stress. At Money King
            Financial, we offer flexible machinery finance solutions tailored to
            your business needs.
          </p>
        </div>

        {/* --- FEATURES GRID --- */}
        {/* gap-y-8 for mobile, gap-y-12 for desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-8 md:gap-y-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4 sm:gap-6 group">
              {/* Icon Container */}
              <div className="shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-blue-100 bg-blue-50 flex items-center justify-center text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  {feature.icon}
                </div>
              </div>

              {/* Text Container with Left Border Accent */}
              {/* Added responsive padding-left */}
              <div className="pl-4 sm:pl-6 border-l border-gray-200">
                <Typography
                  variant="h5"
                  as="h3"
                  className="text-slate-800 font-bold mb-1.5 mt-0 tracking-tight text-lg sm:text-xl"
                >
                  {feature.title}
                </Typography>
                <p className="text-gray-500 leading-relaxed text-xs sm:text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
