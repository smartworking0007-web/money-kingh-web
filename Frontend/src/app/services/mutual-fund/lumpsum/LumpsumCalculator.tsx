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
  // Numeric states for calculation
  const [initialInvestment, setInitialInvestment] = useState<number>(100000);
  const [expectedReturn, setExpectedReturn] = useState<number>(12);
  const [timePeriod, setTimePeriod] = useState<number>(10);

  // String states for smooth user input (avoids mobile number keyboard glitches)
  const [investmentInput, setInvestmentInput] = useState<string>("100000");
  const [returnInput, setReturnInput] = useState<string>("12");
  const [periodInput, setPeriodInput] = useState<string>("10");

  // Lumpsum Compound Formula: FV = P * (1 + r)^n
  const r = (expectedReturn || 0) / 100;
  const n = timePeriod || 0;
  const totalValue = (initialInvestment || 0) * Math.pow(1 + r, n);
  
  const results = {
    invested: Math.round(initialInvestment || 0),
    gain: Math.round(totalValue - (initialInvestment || 0)),
    total: Math.round(totalValue),
  };

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);

  // Handlers for investment
  const handleInvestmentChange = (valStr: string) => {
    setInvestmentInput(valStr);
    const num = Number(valStr);
    if (!isNaN(num)) {
      setInitialInvestment(num);
    }
  };

  const handleInvestmentBlur = () => {
    let num = Number(investmentInput);
    if (isNaN(num) || num < 5000) num = 5000;
    if (num > 100000000) num = 100000000;
    setInitialInvestment(num);
    setInvestmentInput(num.toString());
  };

  // Handlers for returns
  const handleReturnChange = (valStr: string) => {
    setReturnInput(valStr);
    const num = Number(valStr);
    if (!isNaN(num)) {
      setExpectedReturn(num);
    }
  };

  const handleReturnBlur = () => {
    let num = Number(returnInput);
    if (isNaN(num) || num < 1) num = 1;
    if (num > 30) num = 30;
    setExpectedReturn(num);
    setReturnInput(num.toString());
  };

  // Handlers for tenure
  const handlePeriodChange = (valStr: string) => {
    setPeriodInput(valStr);
    const num = Number(valStr);
    if (!isNaN(num)) {
      setTimePeriod(num);
    }
  };

  const handlePeriodBlur = () => {
    let num = Number(periodInput);
    if (isNaN(num) || num < 1) num = 1;
    if (num > 40) num = 40;
    setTimePeriod(num);
    setPeriodInput(num.toString());
  };

  const sliderClass = `w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer 
    [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 
    [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white 
    [&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-current 
    [&::-webkit-slider-thumb]:shadow-md hover:[&::-webkit-slider-thumb]:scale-110 
    [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:duration-200`;

  return (
    <section className="w-full py-4 md:py-12 px-3 sm:px-6 font-lexend">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl shadow-blue-900/5 border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Side: Inputs */}
            <div className="lg:col-span-7 p-6 sm:p-8 md:p-10 lg:p-12 space-y-8">
              <header className="mb-4">
                <div className="flex items-center gap-2.5 mb-1">
                  <div className="p-2 bg-indigo-50 rounded-lg">
                    <Calculator className="w-5 h-5 text-indigo-600" />
                  </div>
                  <Typography variant="h4" className="m-0 text-slate-900 font-bold tracking-tight text-xl sm:text-2xl">
                    Lumpsum Estimator
                  </Typography>
                </div>
                <Typography variant="b3" className="text-slate-400 ml-1 text-sm">
                  Project your one-time investment growth
                </Typography>
              </header>

              <div className="space-y-8">
                {/* Total Investment */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center gap-2 sm:gap-4">
                    <div className="flex items-center gap-2">
                      <Wallet className="w-4 h-4 text-indigo-600 shrink-0" />
                      <Typography variant="caption" className="font-bold uppercase tracking-wider text-slate-400 m-0 text-xs sm:text-sm">
                        Initial Investment
                      </Typography>
                    </div>

                    {/* Direct Numeric Input */}
                    <div className="flex items-center bg-indigo-50/80 border border-indigo-200 rounded-xl px-3 py-1.5 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:bg-white transition-all">
                      <span className="text-indigo-600 font-bold text-base mr-1">₹</span>
                      <input
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        value={investmentInput}
                        onChange={(e) => handleInvestmentChange(e.target.value)}
                        onBlur={handleInvestmentBlur}
                        className="w-24 sm:w-32 bg-transparent text-right font-black text-indigo-600 text-base sm:text-lg outline-none"
                        placeholder="100000"
                      />
                    </div>
                  </div>

                  <input 
                    type="range" 
                    min="5000" 
                    max="10000000" 
                    step="5000"
                    value={initialInvestment > 10000000 ? 10000000 : initialInvestment}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setInitialInvestment(val);
                      setInvestmentInput(val.toString());
                    }}
                    className={`${sliderClass} accent-indigo-600 text-indigo-600`}
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 font-medium px-0.5">
                    <span>₹5,000</span>
                    <span>₹1,00,00,000+</span>
                  </div>
                </div>

                {/* Returns */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center gap-2 sm:gap-4">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0" />
                      <Typography variant="caption" className="font-bold uppercase tracking-wider text-slate-400 m-0 text-xs sm:text-sm">
                        Expected Return (p.a)
                      </Typography>
                    </div>

                    {/* Direct Numeric Input */}
                    <div className="flex items-center bg-emerald-50/80 border border-emerald-200 rounded-xl px-3 py-1.5 focus-within:ring-2 focus-within:ring-emerald-500 focus-within:bg-white transition-all">
                      <input 
                        type="text"
                        inputMode="decimal"
                        value={returnInput}
                        onChange={(e) => handleReturnChange(e.target.value)}
                        onBlur={handleReturnBlur}
                        className="w-16 bg-transparent text-right font-black text-emerald-600 text-base sm:text-lg outline-none"
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
                    value={expectedReturn > 30 ? 30 : expectedReturn}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setExpectedReturn(val);
                      setReturnInput(val.toString());
                    }}
                    className={`${sliderClass} accent-emerald-500 text-emerald-500`}
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 font-medium px-0.5">
                    <span>1%</span>
                    <span>30%</span>
                  </div>
                </div>

                {/* Tenure */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center gap-2 sm:gap-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-purple-600 shrink-0" />
                      <Typography variant="caption" className="font-bold uppercase tracking-wider text-slate-400 m-0 text-xs sm:text-sm">
                        Tenure
                      </Typography>
                    </div>

                    {/* Direct Numeric Input */}
                    <div className="flex items-center bg-purple-50/80 border border-purple-200 rounded-xl px-3 py-1.5 focus-within:ring-2 focus-within:ring-purple-500 focus-within:bg-white transition-all">
                      <input 
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        value={periodInput}
                        onChange={(e) => handlePeriodChange(e.target.value)}
                        onBlur={handlePeriodBlur}
                        className="w-14 bg-transparent text-right font-black text-purple-600 text-base sm:text-lg outline-none"
                        placeholder="10"
                      />
                      <span className="text-purple-600 font-bold text-xs sm:text-sm ml-1">Yrs</span>
                    </div>
                  </div>

                  <input 
                    type="range" 
                    min="1" 
                    max="40" 
                    step="1"
                    value={timePeriod > 40 ? 40 : timePeriod}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setTimePeriod(val);
                      setPeriodInput(val.toString());
                    }}
                    className={`${sliderClass} accent-purple-500 text-purple-500`}
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 font-medium px-0.5">
                    <span>1 Yr</span>
                    <span>40 Yrs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Results */}
            <div className="lg:col-span-5 bg-[#00305a] p-6 sm:p-8 md:p-10 lg:p-12 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 pointer-events-none" />
              
              <div className="relative z-10">
                <Typography variant="caption" className="font-bold uppercase tracking-widest text-blue-200/60 mb-6 sm:mb-8 block">
                  Projected Maturity
                </Typography>
                
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4 flex justify-between items-center sm:block">
                    <Typography variant="caption" className="font-bold uppercase text-blue-200/80 mb-1 block">
                      Total Invested
                    </Typography>
                    <Typography variant="s1" className="m-0 text-white font-bold text-lg sm:text-xl">
                      {formatCurrency(results.invested)}
                    </Typography>
                  </div>

                  <div className="border-b border-white/10 pb-4 flex justify-between items-center sm:block">
                    <Typography variant="caption" className="font-bold uppercase text-blue-200/80 mb-1 block">
                      Wealth Gained
                    </Typography>
                    <Typography variant="s1" className="m-0 text-emerald-400 font-bold text-lg sm:text-xl">
                      +{formatCurrency(results.gain)}
                    </Typography>
                  </div>

                  <div className="pt-2">
                    <Typography variant="caption" className="font-bold uppercase text-blue-200/80 mb-1 block">
                      Estimated Returns
                    </Typography>
                    <Typography variant="h3" className="m-0 text-white font-black text-2xl sm:text-3xl md:text-4xl tracking-tight drop-shadow-md">
                      {formatCurrency(results.total)}
                    </Typography>
                  </div>
                </div>
              </div>

              <button className="mt-8 group w-full bg-white text-[#00305a] p-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-blue-50 transition-all shadow-xl active:scale-95 cursor-pointer">
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