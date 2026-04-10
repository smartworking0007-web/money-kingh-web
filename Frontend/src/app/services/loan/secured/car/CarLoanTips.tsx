"use client";

import Image from "next/image";
import { Typography } from "@/app/components/ui/Typography";
import {
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Clock,
  Percent,
} from "lucide-react";

export default function CarLoanTips() {
  const components = [
    {
      title: "EMI",
      desc: "Fixed monthly payment",
      icon: <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Down Payment",
      desc: "Initial upfront amount",
      icon: <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />,
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      title: "Tenure",
      desc: "Repayment period",
      icon: <Clock className="w-5 h-5 md:w-6 md:h-6" />,
      color: "bg-purple-50 text-purple-600",
    },
    {
      title: "Interest Rate",
      desc: "Cost of borrowing",
      icon: <Percent className="w-5 h-5 md:w-6 md:h-6" />,
      color: "bg-amber-50 text-amber-600",
    },
    {
      title: "Principal",
      desc: "Actual loan amount",
      icon: <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" />,
      color: "bg-rose-50 text-rose-600",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-5 py-12 md:py-28 bg-white font-lexend rounded-[2.5rem] md:rounded-none shadow-xl md:shadow-none">
      {/* HERO SECTION */}
      <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
        
        {/* Right Image - Mobile par pehle dikhega isliye order set kiya hai */}
        <div className="relative order-1 lg:order-2">
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-2xl">
            <Image
              src="/images/Carloan/car2.jpeg"
              alt="Car Loan"
              width={700}
              height={520}
              className="object-cover w-full h-[250px] md:h-auto"
              priority
            />
            {/* Mobile Badge */}
            <div className="absolute bottom-4 left-4 right-4 md:right-auto bg-white/95 backdrop-blur-md px-4 py-2 md:px-6 md:py-3 rounded-xl shadow-lg border border-white/50">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <p className="text-[11px] md:text-sm font-bold text-gray-800">
                  Approved in 30 mins
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Left Content */}
        <div className="space-y-6 md:space-y-10 order-2 lg:order-1">
          <Typography
            variant="h4"
            className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight"
          >
            Master Your Car Loan <br className="hidden md:block" />
            and Save Big
          </Typography>

          <Typography variant="b1" className="text-base md:text-xl text-gray-600">
            Smart tips and strategies to get the best deal with lower EMIs.
          </Typography>

          <div className="space-y-4 md:space-y-6">
            {[
              "Maintain a credit score of 750+",
              "Compare multiple banks & NBFCs",
              "Shorter tenure = Less interest",
              "Secured loans have better rates",
            ].map((tip, index) => (
              <div key={index} className="flex gap-3 md:gap-4 items-center group">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg md:rounded-2xl bg-blue-50 shrink-0 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                </div>
                <Typography variant="b1" className="text-sm md:text-lg text-gray-700">
                  {tip}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* KEY COMPONENTS - Mobile par Scrollable ya Grid */}
      <div className="mt-20 md:mt-32">
        <div className="text-center mb-10 md:mb-16">
          <Typography variant="h3" className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
            Key Components
          </Typography>
        </div>

        {/* Mobile: 2 columns | Desktop: 5 columns */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {components.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50/50 border border-gray-100 p-5 md:p-8 rounded-2xl md:rounded-3xl transition-all"
            >
              <div className={`w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 ${item.color}`}>
                {item.icon}
              </div>

              <Typography variant="s1" className="text-base md:text-xl font-bold text-gray-900 mb-1 md:mb-3">
                {item.title}
              </Typography>

              <Typography variant="b3" className="text-[11px] md:text-sm text-gray-500 leading-tight">
                {item.desc}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}