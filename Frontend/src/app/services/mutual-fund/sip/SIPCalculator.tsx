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
  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(5000);
  const [expectedReturn, setExpectedReturn] = useState<number>(12);
  const [timePeriod, setTimePeriod] = useState<number>(15);

  const r = (expectedReturn || 0) / 100 / 12;
  const n = (timePeriod || 0) * 12;
  const p = monthlyInvestment || 0;

  const totalValue = r > 0 ? p * (((Math.pow(1 + r, n) - 1) / r) * (1 + r)) : p * n;
  const totalInvested = p * n;
  
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
    <section className="w-full py-6 md:py-12 px-4 font-lexend">
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
                  <Typography variant="h4" className="m-0 text-slate-900 font-bold tracking-tight">
                    SIP Estimator
                  </Typography>
                </div>
                <Typography variant="b3" className="text-slate-400 ml-1">
                  Simulate your wealth growth over time
                </Typography>     
              </header>

              <div className="space-y-8">
                {/* Monthly Savings */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                      <PiggyBank className="w-4 h-4 text-blue-600 shrink-0" />
                      <Typography variant="caption" className="font-bold uppercase tracking-widest text-slate-400 m-0">
                        Monthly Savings
                      </Typography>
                    </div>

                    {/* Direct Type Input */}
                    <div className="flex items-center bg-blue-50/70 border border-blue-100 rounded-xl px-3 py-1.5 focus-within:ring-2 focus-within:ring-blue-600 transition-all">
                      <span className="text-blue-600 font-bold text-base mr-1">₹</span>
                      <input
                        type="number"
                        min="100"
                        max="1000000"
                        value={monthlyInvestment || ""}
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          setMonthlyInvestment(val > 1000000 ? 1000000 : val);
                        }}
                        className="w-24 md:w-28 bg-transparent text-right font-black text-blue-600 text-lg outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        placeholder="50000"
                      />
                    </div>
                  </div>

                  <input 
                    type="range" 
                    min="100" 
                    max="1000000" 
                    step="500"
                    value={monthlyInvestment}
                    onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                    className={`${sliderClass} accent-blue-600 text-blue-600`}
                  />
                </div>

                {/* Returns */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0" />
                      <Typography variant="caption" className="font-bold uppercase tracking-widest text-slate-400 m-0">
                        Returns (p.a)
                      </Typography>
                    </div>

                    {/* Direct Type Input */}
                    <div className="flex items-center bg-emerald-50/70 border border-emerald-100 rounded-xl px-3 py-1.5 focus-within:ring-2 focus-within:ring-emerald-500 transition-all">
                      <input
                        type="number"
                        step="0.1"
                        min="1"
                        max="30"
                        value={expectedReturn || ""}
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          setExpectedReturn(val > 30 ? 30 : val);
                        }}
                        className="w-16 bg-transparent text-right font-black text-emerald-600 text-lg outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        placeholder="12"
                      />
                      <span className="text-emerald-600 font-bold text-base ml-1">%</span>
                    </div>
                  </div>

                  <input 
                    type="range" 
                    min="1" 
                    max="30" 
                    step="0.5"
                    value={expectedReturn}
                    onChange={(e) => setExpectedReturn(Number(e.target.value))}
                    className={`${sliderClass} accent-emerald-500 text-emerald-500`}
                  />
                </div>

                {/* Period */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-purple-600 shrink-0" />
                      <Typography variant="caption" className="font-bold uppercase tracking-widest text-slate-400 m-0">
                        Period
                      </Typography>
                    </div>

                    {/* Direct Type Input */}
                    <div className="flex items-center bg-purple-50/70 border border-purple-100 rounded-xl px-3 py-1.5 focus-within:ring-2 focus-within:ring-purple-500 transition-all">
                      <input
                        type="number"
                        min="1"
                        max="40"
                        value={timePeriod || ""}
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          setTimePeriod(val > 40 ? 40 : val);
                        }}
                        className="w-14 bg-transparent text-right font-black text-purple-600 text-lg outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        placeholder="15"
                      />
                      <span className="text-purple-600 font-bold text-sm ml-1">Yrs</span>
                    </div>
                  </div>

                  <input 
                    type="range" 
                    min="1" 
                    max="40" 
                    step="1"
                    value={timePeriod}
                    onChange={(e) => setTimePeriod(Number(e.target.value))}
                    className={`${sliderClass} accent-purple-500 text-purple-500`}
                  />
                </div>
              </div>
            </div>

            {/* Right Side: Results */}
            <div className="lg:col-span-5 bg-[#004687] p-8 md:p-10 lg:p-12 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-400/10 rounded-full -ml-16 -mb-16"></div>
              
              <div className="relative z-10">
                <Typography variant="caption" className="font-bold uppercase tracking-widest text-blue-200/50 mb-8 block">
                  Growth Summary
                </Typography>
                
                <div className="space-y-6">
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

                  <div className="pt-2">
                    <Typography variant="caption" className="font-bold uppercase text-blue-300 mb-1 block">
                      Total Future Value
                    </Typography>
                    <Typography variant="h3" className="m-0 text-white font-black text-3xl md:text-4xl tracking-tight drop-shadow-md">
                      {formatCurrency(results.total)}
                    </Typography>
                  </div>
                </div>
              </div>

              <button className="mt-8 group bg-white text-[#004687] p-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-blue-50 transition-all shadow-xl active:scale-95 cursor-pointer">
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