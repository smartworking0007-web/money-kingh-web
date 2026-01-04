"use client";
import React, { useState } from "react";
import Image from "next/image";
import { 
  CheckCircle2, 
  Calculator, 
  TrendingUp, 
  PiggyBank, 
  Calendar,  
} from "lucide-react";
import { Typography } from "@/app/components/ui/Typography";
import WhyChoose from "@/app/components/Choose/WhyChoose";
import MutualPartners from "@/app/components/MutualPartners/MutualPartners";

// --- Sub Components ---
const FeatureCard = ({ title, desc }: { title: string; desc: string }) => (
  <div className="group p-5 rounded-2xl bg-white border border-slate-100 hover:shadow-lg transition-all duration-300">
    <div className="flex items-center gap-3 mb-2">
      <div className="bg-blue-600 rounded-lg p-1.5">
        <CheckCircle2 className="w-4 h-4 text-white" />
      </div>
      <Typography variant="s2" className="m-0 text-slate-900 font-bold">
        {title}
      </Typography>
    </div>
    <Typography variant="b3" className="text-slate-500 leading-relaxed m-0">
      {desc}
    </Typography>
  </div>
);

export default function SIPPage() {
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

  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 lg:pb-32 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            
            {/* Content Left */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="">
                
                
              </div>

              <Typography variant="h3" className="px-5 h-full flex items-center group">
                Build Wealth Automatically.
              </Typography>

              <Typography variant="b1" className="text-slate-500 text-lg max-w-lg">
                lumsum is a disciplined way of investing where you invest a fixed amount regularly, harnessing the power of compounding.
              </Typography>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FeatureCard title="Start Small" desc="Kickstart with just ₹500/month." />
                <FeatureCard title="Rupee Averaging" desc="Lower your costs automatically." />
                <FeatureCard title="Flexibility" desc="Pause or stop anytime you want." />
                <FeatureCard title="Compounding" desc="Watch your small savings grow." />
              </div>
            </div>

            {/* Image Right - FIXED SIZE & SHADOW */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xl rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] border-[12px] border-white bg-slate-50">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/mutual/lumsum.png"
                    alt="Lumpsum vs SIP Guide"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- CALCULATOR SECTION --- */}
      <section className="max-w-6xl mx-auto px-6 -mt-12 mb-24 relative z-30">
        <div className="bg-white rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Inputs */}
            <div className="lg:col-span-7 p-8 lg:p-14 space-y-12">
              <div className="flex items-center gap-4">
                <div className="bg-blue-600 p-3 rounded-2xl shadow-lg">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <div>
                  <Typography variant="h4" className="m-0 font-bold text-slate-900">lumsum Calculator</Typography>
                  <p className="text-slate-400 text-sm">Estimate your wealth growth</p>
                </div>
              </div>

              <div className="space-y-10">
                {[
                  { label: "Monthly Investment", icon: PiggyBank, val: monthlyInvestment, set: setMonthlyInvestment, min: 500, max: 100000, step: 500, color: "accent-blue-600", display: formatCurrency },
                  { label: "Expected Returns (%)", icon: TrendingUp, val: expectedReturn, set: setExpectedReturn, min: 1, max: 30, step: 0.5, color: "accent-emerald-500", display: (v: number) => `${v}%` },
                  { label: "Time Period (Years)", icon: Calendar, val: timePeriod, set: setTimePeriod, min: 1, max: 40, step: 1, color: "accent-purple-600", display: (v: number) => `${v} Years` }
                ].map((item, i) => (
                  <div key={i} className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <item.icon className="w-4 h-4 text-slate-400" />
                        <span className="text-xs font-bold uppercase text-slate-400 tracking-widest">{item.label}</span>
                      </div>
                      <span className="text-lg font-bold text-slate-900">{item.display(item.val)}</span>
                    </div>
                    <input 
                      type="range" min={item.min} max={item.max} step={item.step}
                      value={item.val}
                      onChange={(e) => item.set(Number(e.target.value))}
                      className={`w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer ${item.color}`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Result Panel */}
            <div className="lg:col-span-5 bg-[#003366] p-10 lg:p-14 text-white flex flex-col justify-between">
              <div className="space-y-8">
                <p className="text-blue-200/50 text-xs font-bold uppercase tracking-widest">Investment Summary</p>
                <div className="space-y-6">
                  <div className="flex justify-between border-b border-white/10 pb-4">
                    <span className="text-slate-400">Total Invested</span>
                    <span className="font-bold text-lg">{formatCurrency(results.invested)}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-4">
                    <span className="text-slate-400">Wealth Gain</span>
                    <span className="font-bold text-emerald-400 text-lg">+{formatCurrency(results.gain)}</span>
                  </div>
                  <div className="pt-4">
                    <span className="text-blue-300 text-xs font-bold block mb-1 uppercase">Total Value</span>
                    <Typography variant="h2" className="text-5xl font-black text-white m-0 tracking-tight">
                      {formatCurrency(results.total)}
                    </Typography>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </section>

      <MutualPartners/>
      <WhyChoose />
    </main>
  );
}