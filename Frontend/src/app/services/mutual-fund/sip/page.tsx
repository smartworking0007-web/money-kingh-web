"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  CheckCircle2, 
  Calculator, 
  TrendingUp, 
  PiggyBank, 
  Calendar, 
  ArrowRight, 
} from "lucide-react";
import { Typography } from "@/app/components/ui/Typography";
import WhyChoose from "@/app/components/Choose/WhyChoose";
import MutualPartners from "@/app/components/MutualPartners/MutualPartners";

// --- Feature Card Sub-component ---
const FeatureCard = ({ title, desc }: { title: string; desc: string }) => (
  <div className="group p-4 rounded-xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300">
    <div className="flex items-center gap-2 mb-1">
      <div className="bg-green-100 p-1 rounded-full shrink-0">
        <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
      </div>
      <Typography variant="s2" as="span" className="m-0 text-slate-900 text-sm font-bold">
        {title}
      </Typography>
    </div>
    <Typography variant="b3" className="text-slate-500 leading-snug m-0">
      {desc}
    </Typography>
  </div>
);

export default function SIPPage() {
  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(10000);
  const [expectedReturn, setExpectedReturn] = useState<number>(12);
  const [timePeriod, setTimePeriod] = useState<number>(15);

  // --- Calculation Logic (Derived State for Performance) ---
  const r = expectedReturn / 100 / 12; // Monthly rate
  const n = timePeriod * 12; // Total months
  const totalValue = monthlyInvestment * (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
  const totalInvested = monthlyInvestment * n;
  
  const results = {
    invested: Math.round(totalInvested),
    gain: Math.round(totalValue - totalInvested),
    total: Math.round(totalValue),
  };

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);

  const sliderClass = `w-full h-1.5 bg-slate-100 rounded-full appearance-none cursor-pointer 
    [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 
    [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white 
    [&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-current 
    [&::-webkit-slider-thumb]:shadow-md hover:[&::-webkit-slider-thumb]:scale-110 
    [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:duration-200`;

  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      {/* Hero Section */}
      <section className="relative pt-12 pb-24 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
             

              <Typography variant="h3" className="px-5 h-full flex items-center group">
                Build Wealth Automatically
              </Typography>

              <Typography variant="b1" className="text-slate-500 max-w-lg mb-8">
                Systematic Investment Plan (SIP) is the smartest way to navigate market volatility while harnessing the power of compounding.
              </Typography>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <FeatureCard title="Start Small" desc="Kickstart your journey with just ₹500/month." />
                <FeatureCard title="Rupee Cost Averaging" desc="Lower your purchase cost automatically." />
                <FeatureCard title="Ultimate Flexibility" desc="Modify, pause, or stop anytime." />
                <FeatureCard title="Wealth Creation" desc="Turn savings into a massive corpus." />
              </div>
            </div>

            {/* Right: Cover Image Card */}
            <div className="lg:col-span-5 relative group">
              <div className="relative rounded-[2rem] overflow-hidden shadow-xl border-[8px] border-white h-[450px]">
                <Image
                  src="/images/mutual/M.jpg" // Aapki image path
                  alt="SIP Wealth Growth"
                  fill
                  className="object-cover" // Image ko container mein "cover" karne ke liye
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#004687]/40 via-transparent to-transparent"></div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SIP CALCULATOR --- */}
      <section className="max-w-5xl mx-auto px-6 -mt-16 mb-20 relative z-30">
        <div className="bg-white rounded-[2rem] shadow-lg border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            <div className="lg:col-span-7 p-8 lg:p-12 space-y-8">
              <header>
                <div className="flex items-center gap-2.5 mb-1">
                   <Calculator className="w-6 h-6 text-blue-600" />
                   <Typography variant="h4" className="m-0 text-slate-900 tracking-tight">SIP Estimator</Typography>
                </div>
                <Typography variant="b3" className="text-slate-400">
                  Simulate your wealth growth over time
                </Typography>
              </header>

              <div className="space-y-10">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                       <PiggyBank className="w-3.5 h-3.5 text-blue-600" />
                       <Typography variant="caption" className="font-bold uppercase tracking-widest text-slate-400 m-0">
                         Monthly Savings
                       </Typography>
                    </div>
                    <Typography variant="s1" className="m-0 text-blue-600 font-bold">
                      {formatCurrency(monthlyInvestment)}
                    </Typography>
                  </div>
                  <input 
                    type="range" min="500" max="100000" step="500"
                    value={monthlyInvestment}
                    onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                    className={`${sliderClass} accent-blue-600 text-blue-600`}
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                       <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                       <Typography variant="caption" className="font-bold uppercase tracking-widest text-slate-400 m-0">
                         Returns (p.a)
                       </Typography>
                    </div>
                    <Typography variant="s1" className="m-0 text-emerald-600 font-bold">
                      {expectedReturn}%
                    </Typography>
                  </div>
                  <input 
                    type="range" min="1" max="30" step="0.5"
                    value={expectedReturn}
                    onChange={(e) => setExpectedReturn(Number(e.target.value))}
                    className={`${sliderClass} accent-emerald-500 text-emerald-500`}
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                       <Calendar className="w-3.5 h-3.5 text-purple-600" />
                       <Typography variant="caption" className="font-bold uppercase tracking-widest text-slate-400 m-0">
                         Period
                       </Typography>
                    </div>
                    <Typography variant="s1" className="m-0 text-purple-600 font-bold">
                      {timePeriod} Years
                    </Typography>
                  </div>
                  <input 
                    type="range" min="1" max="40" step="1"
                    value={timePeriod}
                    onChange={(e) => setTimePeriod(Number(e.target.value))}
                    className={`${sliderClass} accent-purple-500 text-purple-500`}
                  />
                </div>
              </div>
            </div>

            {/* Result Panel */}
            <div className="lg:col-span-5 bg-[#004687] p-8 lg:p-12 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -mr-24 -mt-24"></div>
              
              <div className="relative z-10">
                <Typography variant="caption" className="font-bold uppercase tracking-widest text-blue-200/60 mb-8 block">
                  Growth Summary
                </Typography>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-end border-b border-white/10 pb-4">
                    <div>
                      <Typography variant="caption" className="font-bold uppercase text-blue-300 mb-1 block">
                        Invested
                      </Typography>
                      <Typography variant="s1" className="m-0 text-white font-bold">
                        {formatCurrency(results.invested)}
                      </Typography>
                    </div>
                  </div>

                  <div className="flex justify-between items-end border-b border-white/10 pb-4">
                    <div>
                      <Typography variant="caption" className="font-bold uppercase text-blue-300 mb-1 block">
                        Gain
                      </Typography>
                      <Typography variant="s1" className="m-0 text-emerald-400 font-bold">
                        +{formatCurrency(results.gain)}
                      </Typography>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Typography variant="caption" className="font-bold uppercase text-blue-300 mb-1 block">
                      Future Value
                    </Typography>
                    <Typography variant="h3" className="m-0 text-white font-black tracking-tight drop-shadow-md">
                      {formatCurrency(results.total)}
                    </Typography>
                  </div>
                </div>
              </div>

              <button className="mt-8 group bg-white text-[#004687] p-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-blue-50 transition-all shadow-md active:scale-95">
                <Typography variant="b2" as="span" className="m-0 text-[#004687] font-bold">
                  Start My SIP
                </Typography>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>
      </section>
      <MutualPartners/>
      <WhyChoose />
    </main>
  );
}