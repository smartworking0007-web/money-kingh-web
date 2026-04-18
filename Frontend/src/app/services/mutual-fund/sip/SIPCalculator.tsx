"use client";

import React, { useState } from "react";
import { 
  Calculator, 
  PiggyBank, 
  TrendingUp, 
  Calendar, 
  ArrowRight 
} from "lucide-react";
import { Typography } from "@/app/components/ui/Typography";

const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(10000);
  const [expectedReturn, setExpectedReturn] = useState<number>(12);
  const [timePeriod, setTimePeriod] = useState<number>(15);

  const r = expectedReturn / 100 / 12;
  const n = timePeriod * 12;
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
    /* Wrapper Section to control width and center alignment */
    <section className="w-full py-0 md:py-15 px-4 font-lexend">
      <div className="max-w-5xl mx-auto">
        
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl shadow-blue-900/5 border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Side: Inputs */}
            <div className="lg:col-span-7 p-6 md:p-10 lg:p-12 space-y-8">
              <header className="mb-4">
                <div className="flex items-center gap-2.5 mb-1">
                   <div className="p-2 bg-blue-50 rounded-lg">
                    <Calculator className="w-5 h-5 text-blue-600" />
                   </div>
                   <Typography variant="h4" className="m-0 text-slate-900 font-bold tracking-tight">SIP Estimator</Typography>
                </div>
                <Typography variant="b3" className="text-slate-400 ml-1">
                  Simulate your wealth growth over time
                </Typography>
              </header>

              <div className="space-y-10">
                {/* Monthly Savings */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                       <PiggyBank className="w-4 h-4 text-blue-600" />
                       <Typography variant="caption" className="font-bold uppercase tracking-widest text-slate-400 m-0">
                         Monthly Savings
                       </Typography>
                    </div>
                    <Typography variant="s1" className="m-0 text-blue-600 font-black text-lg">
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

                {/* Returns */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                       <TrendingUp className="w-4 h-4 text-emerald-600" />
                       <Typography variant="caption" className="font-bold uppercase tracking-widest text-slate-400 m-0">
                         Returns (p.a)
                       </Typography>
                    </div>
                    <Typography variant="s1" className="m-0 text-emerald-600 font-black text-lg">
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

                {/* Period */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                       <Calendar className="w-4 h-4 text-purple-600" />
                       <Typography variant="caption" className="font-bold uppercase tracking-widest text-slate-400 m-0">
                         Period
                       </Typography>
                    </div>
                    <Typography variant="s1" className="m-0 text-purple-600 font-black text-lg">
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

            {/* Right Side: Results */}
            <div className="lg:col-span-5 bg-[#004687] p-8 md:p-10 lg:p-12 text-white flex flex-col justify-between relative overflow-hidden">
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-400/10 rounded-full -ml-16 -mb-16"></div>
              
              <div className="relative z-10">
                <Typography variant="caption" className="font-bold uppercase tracking-widest text-blue-200/50 mb-10 block">
                  Growth Summary
                </Typography>
                
                <div className="space-y-8">
                  <div className="border-b border-white/10 pb-4">
                    <Typography variant="caption" className="font-bold uppercase text-blue-300 mb-1 block">
                      Invested Amount
                    </Typography>
                    <Typography variant="s1" className="m-0 text-white font-bold text-xl">
                      {formatCurrency(results.invested)}
                    </Typography>
                  </div>

                  <div className="border-b border-white/10 pb-4">
                    <Typography variant="caption" className="font-bold uppercase text-blue-300 mb-1 block">
                      Estimated Gain
                    </Typography>
                    <Typography variant="s1" className="m-0 text-emerald-400 font-bold text-xl">
                      +{formatCurrency(results.gain)}
                    </Typography>
                  </div>

                  <div className="pt-4">
                    <Typography variant="caption" className="font-bold uppercase text-blue-300 mb-1 block">
                      Total Future Value
                    </Typography>
                    <Typography variant="h3" className="m-0 text-white font-black text-3xl md:text-4xl tracking-tight drop-shadow-md">
                      {formatCurrency(results.total)}
                    </Typography>
                  </div>
                </div>
              </div>

              <button className="mt-12 group bg-white text-[#004687] p-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-blue-50 transition-all shadow-xl active:scale-95">
                <span className="text-[#004687] font-black uppercase tracking-wider text-sm">
                  Start My SIP
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SIPCalculator;