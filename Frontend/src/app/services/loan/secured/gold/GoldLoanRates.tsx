"use client";

import React from "react";
import Link from "next/link";
import { Typography } from "@/app/components/ui/Typography";
import { Button } from "@/app/components/ui/Button";

export default function GoldLoanRates() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10 bg-white">
      {/* Outer Container - Reduced padding from p-12 to p-8 */}
      <div className="relative overflow-hidden rounded-2xl bg-slate-50 shadow-sm p-6 md:p-8 border border-slate-100">
        {/* LIGHT RADIAL BACKGROUND EFFECT */}
        <div
          className="absolute inset-0 z-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 30%, #fff 0%, rgba(255,255,255,0) 60%)",
          }}
        ></div>

        <div className="relative z-10">
          {/* Header - Compact padding and margin */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-slate-200 pb-6">
            <div className="flex items-center gap-3">
              <div className="bg-[#004687]/10 p-3 rounded-xl">
                <span className="text-xl text-[#004687] font-bold">%</span>
              </div>
              <Typography
                variant="h4"
                as="h3"
                className="text-[#1e293b]! font-bold text-xl md:text-2xl mt-0!"
              >
                Interest Rate & Charges
              </Typography>
            </div>
            <Link href="/contact">
            
            </Link>
          </div>

          {/* Key Points Grid - Compact boxes with p-4 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Box 1 */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col items-start hover:shadow-md transition-shadow">
              <p className="text-[#004687] text-[10px] font-bold uppercase tracking-wider mb-1">
                Interest Rate
              </p>
              <p className="text-slate-900 text-2xl font-black leading-tight">
                9% – 14%
              </p>
              <p className="text-slate-500 text-[11px] mt-2 leading-tight">
                Based on gold purity & market value.
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col items-start hover:shadow-md transition-shadow">
              <p className="text-[#004687] text-[10px] font-bold uppercase tracking-wider mb-1">
                Processing Fee
              </p>
              <p className="text-slate-900 text-2xl font-black leading-tight">
                Up to 2%
              </p>
              <p className="text-slate-500 text-[11px] mt-2 leading-tight">
                Of the total loan amount approved.
              </p>
            </div>

            {/* Box 3 */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col items-start hover:shadow-md transition-shadow">
              <p className="text-[#004687] text-[10px] font-bold uppercase tracking-wider mb-1">
                Late Payment
              </p>
              <p className="text-slate-900 text-2xl font-black leading-tight">
                Nominal
              </p>
              <p className="text-slate-500 text-[11px] mt-2 leading-tight">
                Charges applicable on overdue EMIs.
              </p>
            </div>

            {/* Box 4 */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col items-start hover:shadow-md transition-shadow">
              <p className="text-[#004687] text-[10px] font-bold uppercase tracking-wider mb-1">
                Foreclosure
              </p>
              <p className="text-slate-900 text-2xl font-black leading-tight">
                Nil<span className="text-sm font-bold">/Min</span>
              </p>
              <p className="text-slate-500 text-[11px] mt-2 leading-tight">
                Subject to lender terms & conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
