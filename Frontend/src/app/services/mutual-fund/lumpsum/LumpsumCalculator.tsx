"use client";

import React, { useState } from "react";
import { 
  Calculator, 
  Wallet, 
  TrendingUp, 
  Calendar, 
  ArrowRight 
} from "lucide-react";
import { Typography } from "@/app/components/ui/Typography";

const LumpsumCalculator = () => {
  const [initialInvestment, setInitialInvestment] = useState<number>(100000);
  const [expectedReturn, setExpectedReturn] = useState<number>(12);
  const [timePeriod, setTimePeriod] = useState<number>(10);

  // Lumpsum Formula: FV = P * (1 + r)^n
  // P = Principal, r = annual interest rate, n = number of years
  const r = expectedReturn / 100;
  const n = timePeriod;
  const totalValue = initialInvestment * Math.pow(1 + r, n);
  
  const results = {
    invested: Math.round(initialInvestment),
    gain: Math.round(totalValue - initialInvestment),
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
    <section className="w-full py-0 md:py-15 px-4 font-lexend">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl shadow-blue-900/5 border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Side: Inputs */}
            <div className="lg:col-span-7 p-6 md:p-10 lg:p-12 space-y-8">
              <header className="mb-4">
                <div className="flex items-center gap-2.5 mb-1">
                   <div className="p-2 bg-indigo-50 rounded-lg">
                    <Calculator className="w-5 h-5 text-indigo-600" />
                   </div>
                   <Typography variant="h4" className="m-0 text-slate-900 font-bold tracking-tight">Lumpsum Estimator</Typography>
                </div>
                <Typography variant="b3" className="text-slate-400 ml-1">
                  Project your one-time investment growth
                </Typography>
              </header>

              <div className="space-y-10">
                {/* Total Investment */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                       <Wallet className="w-4 h-4 text-indigo-600" />
                       <Typography variant="caption" className="font-bold uppercase tracking-widest text-slate-400 m-0">
                         Initial Investment
                       </Typography>
                    </div>
                    <Typography variant="s1" className="m-0 text-indigo-600 font-black text-lg">
                      {formatCurrency(initialInvestment)}
                    </Typography>
                  </div>
                  <input 
                    type="range" min="5000" max="1000000" step="5000"
                    value={initialInvestment}
                    onChange={(e) => setInitialInvestment(Number(e.target.value))}
                    className={`${sliderClass} accent-indigo-600 text-indigo-600`}
                  />
                </div>

                {/* Returns */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                       <TrendingUp className="w-4 h-4 text-emerald-600" />
                       <Typography variant="caption" className="font-bold uppercase tracking-widest text-slate-400 m-0">
                         Expected Return (p.a)
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
                         Tenure
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
            <div className="lg:col-span-5 bg-[#00305a] p-8 md:p-10 lg:p-12 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
              
              <div className="relative z-10">
                <Typography variant="caption" className="font-bold uppercase tracking-widest text-blue-200/50 mb-10 block">
                  Projected Maturity
                </Typography>
                
                <div className="space-y-8">
                  <div className="border-b border-white/10 pb-4">
                    <Typography variant="caption" className="font-bold uppercase text-blue-300 mb-1 block">
                      Total Invested
                    </Typography>
                    <Typography variant="s1" className="m-0 text-white font-bold text-xl">
                      {formatCurrency(results.invested)}
                    </Typography>
                  </div>

                  <div className="border-b border-white/10 pb-4">
                    <Typography variant="caption" className="font-bold uppercase text-blue-300 mb-1 block">
                      Wealth Gained
                    </Typography>
                    <Typography variant="s1" className="m-0 text-emerald-400 font-bold text-xl">
                      +{formatCurrency(results.gain)}
                    </Typography>
                  </div>

                  <div className="pt-4">
                    <Typography variant="caption" className="font-bold uppercase text-blue-300 mb-1 block">
                      Estimated Returns
                    </Typography>
                    <Typography variant="h3" className="m-0 text-white font-black text-3xl md:text-4xl tracking-tight">
                      {formatCurrency(results.total)}
                    </Typography>
                  </div>
                </div>
              </div>

              <button className="mt-12 group bg-white text-[#00305a] p-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-blue-50 transition-all shadow-xl active:scale-95">
                <span className="text-[#00305a] font-black uppercase tracking-wider text-sm">
                  Invest Now
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

export default LumpsumCalculator;