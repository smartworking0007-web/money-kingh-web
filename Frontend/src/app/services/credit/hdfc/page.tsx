"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, CreditCard, Plane, Utensils,  ShieldCheck, Gift } from "lucide-react";
import { Typography } from "@/app/components/ui/Typography";
import WhyChoose from "@/app/components/Choose/WhyChoose";
import FinancialPartners from "@/app/components/FinancialPartners/FinancialPartners";

export default function HDFCCreditCardPage() {
  const data = {
    title: "HDFC Bank Credit Cards",
    description: "Elevate your lifestyle with cards designed for the elite. From global lounge access to industry-leading reward rates, experience the gold standard of banking.",
    highlights: [
      { label: "Travel", icon: <Plane className="w-5 h-5" />, color: "bg-blue-100 text-blue-700" },
      { label: "Dining", icon: <Utensils className="w-5 h-5" />, color: "bg-orange-100 text-orange-700" },
      { label: "Rewards", icon: <Gift className="w-5 h-5" />, color: "bg-purple-100 text-purple-700" },
      { label: "Security", icon: <ShieldCheck className="w-5 h-5" />, color: "bg-green-100 text-green-700" },
    ],
    features: [
      "Up to 5% cashback on Millennia & shopping",
      "Complimentary Domestic & Int'l Lounge Access",
      "Reward points never expire (Infinia/Regalia)",
      "Fuel surcharge waiver across India",
      "Zero liability on lost card protection",
      "Instant EMI conversion via SmartPay",
    ],
    
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Premium Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24">
        {/* Modern Geometric Background */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -skew-x-12 translate-x-20 -z-10 hidden lg:block" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Content Area */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center">
               
               
              </div>

              <div className="space-y-4">
                <Typography variant="h1" className="text-slate-900 text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
                  Carry <span className="text-[#004687]">Prestige</span> <br /> In Your Pocket.
                </Typography>
                <Typography variant="b1" className="text-slate-600 text-lg max-w-xl leading-relaxed">
                  {data.description}
                </Typography>
              </div>

              {/* Lifestyle Chips */}
              <div className="flex flex-wrap gap-4">
                {data.highlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-slate-100 shadow-sm transition-hover hover:shadow-md cursor-default">
                    <span className={`p-1.5 rounded-lg ${item.color}`}>{item.icon}</span>
                    <span className="font-semibold text-slate-700 text-sm">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Unique Bento Feature Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 pt-4">
                {data.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center group-hover:bg-green-500 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-green-600 group-hover:text-white" />
                    </div>
                    <Typography variant="s2" className="text-slate-700 font-medium">
                      {feature}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: The "Floating Stack" Visual */}
            <div className="lg:col-span-5 relative h-[500px] flex items-center justify-center">
              {/* Back Card Decorative */}
              <div className="absolute w-72 h-44 bg-slate-200 rounded-xl rotate-[-15deg] translate-y-[-40px] translate-x-[-20px] blur-[1px] opacity-50" />
              
              {/* Main Image Container */}
              <div className="relative w-full aspect-[4/5] max-w-[400px] z-10 group">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#004687] to-blue-400 rounded-[2.5rem] rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-2xl" />
                <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden border-4 border-white shadow-xl rotate-[-3deg] group-hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="/images/credit/hdfc.jpg"
                    alt="HDFC Credit Card Portfolio"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Floating Label */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-lg">
                    <p className="text-[#004687] font-black text-xs uppercase tracking-tighter">Instant Approval</p>
                  </div>
                </div>
              </div>

              {/* Trust Badge overlay */}
              <div className="absolute bottom-10 -left-4 z-20 bg-white p-4 rounded-2xl shadow-2xl border border-slate-100 flex items-center gap-3 animate-bounce-slow">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                  <CreditCard className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-slate-400 font-bold">Total Users</p>
                  <p className="text-sm font-black text-slate-800">2M+ Cards Issued</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Partners */}
      <div className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-8">Official Distribution Partner</p>
          <FinancialPartners />
        </div>
      </div>

      {/* Main Content Sections */}
      <section className="space-y-24 py-24">
        <WhyChoose />
        
        {/* Unik Calculator Callout */}
        <div className="max-w-5xl mx-auto px-6">
            <div className="bg-[#004687] rounded-[3rem] p-12 relative overflow-hidden text-center text-white">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                <Typography variant="h2" className="text-white mb-4">Plan Your Spendings</Typography>
                <p className="text-blue-100 mb-8 max-w-md mx-auto">Calculate your monthly interest and potential rewards points before you apply.</p>
                <div className="bg-white rounded-[2rem] p-4 md:p-8 text-slate-900 shadow-2xl">
                    <Typography variant="s1" className="mb-6 block text-[#004687]">Loan & EMI Estimator</Typography>
                    <div className="grayscale-[0.8] hover:grayscale-0 transition-all">
                       {/* This wraps your existing calculator component in a "premium" container */}
                       <WhyChoose /> 
                    </div>
                </div>
            </div>
        </div>
      </section>
    </main>
  );
}