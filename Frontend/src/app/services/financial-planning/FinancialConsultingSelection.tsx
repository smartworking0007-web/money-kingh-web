"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import { CheckCircle2 } from "lucide-react";

export default function FinancialConsultingSelection() {
  return (
    <section className="w-full bg-white py-0 md:py-20 px-4 md:px-6 font-lexend relative z-20">
      <div className="max-w-7xl mx-auto">
        {/* --- MAIN CONTAINER --- */}
        <div className="bg-slate-50 rounded-[40px] md:rounded-[60px] p-8 md:p-16 border border-slate-100 shadow-sm overflow-hidden relative">
          {/* Subtle Decorative Background Element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-50/50 rounded-full blur-3xl -mr-32 -mt-32" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
            {/* Left Side: Meta Title (H3) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-100 text-[#8B1D1D] rounded-full text-[10px] font-bold uppercase tracking-widest">
                Expert Guidance
              </div>
              <Typography
                variant="h3"
                as="h3"
                className="text-[#1e293b] font-black text-2xl md:text-5xl leading-tight mt-0"
              >
                Choosing a Financial Consulting Services in India
              </Typography>
            </div>

            {/* Right Side: Paragraph & Trust Points */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-slate-600 leading-relaxed text-base md:text-xl font-medium mt-0">
                Selecting the right financial consultancy service provider in
                India is crucial for achieving your financial goals. Look for a
                certified financial planner with a proven track record and
                extensive experience in the financial industry.
              </p>

              <p className="text-slate-500 leading-relaxed text-sm md:text-lg">
                Ensure they offer personalized services tailored to your
                specific needs and objectives. Transparency, ethical practices,
                and a client-centric approach are essential qualities.
                Additionally, consider their expertise in areas such as
                investment, retirement, estate, and tax planning.{" "}
                <span className="font-bold text-[#8B1D1D]">
                  Money King Financial
                </span>{" "}
                exemplifies these qualities, offering comprehensive, expert
                financial planning services designed to secure your financial
                future. Trust us to guide you towards financial success.
              </p>

              {/* Quick Quality Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  "Certified Financial Planners",
                  "Personalized Strategies",
                  "Ethical & Transparent",
                  "Expert Wealth Planning",
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span className="text-slate-700 font-bold text-xs md:text-sm">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
