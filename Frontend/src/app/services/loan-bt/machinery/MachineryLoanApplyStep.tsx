"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";
import { 
  Smartphone, 
  UserCircle, 
  BarChart, 
  ShieldCheck, 
  Headphones, 
  Banknote,
  CheckCircle2,
  LucideProps // Added for strict typing
} from "lucide-react";

// Define the steps data
const applySteps = [
  {
    id: 1,
    title: "Apply Online",
    icon: <Smartphone />,
    heading: "Start Your Application",
    desc: "Click on the “Apply Now” button available on the website to begin your machinery loan journey.",
    details: ["Easy online access", "Available 24/7", "Secure application link"],
    color: "bg-[#8B1D1D]"
  },
  {
    id: 2,
    title: "OTP Verification",
    icon: <ShieldCheck />,
    heading: "Verify Your Identity",
    desc: "Enter your 10-digit mobile number and verify it securely using an OTP sent to your phone.",
    details: ["Instant verification", "Secure and private", "Mobile linked process"],
    color: "bg-slate-800"
  },
  {
    id: 3,
    title: "Basic Details",
    icon: <UserCircle />,
    heading: "Tell Us About Yourself",
    desc: "Fill in the application form with your basic details such as Full Name, PAN Number, Date of Birth, and PIN Code.",
    details: ["PAN linked assessment", "Age eligibility check", "Location mapping"],
    color: "bg-emerald-700"
  },
  {
    id: 4,
    title: "Loan Selection",
    icon: <BarChart />,
    heading: "Configure Your Loan",
    desc: "Enter the loan amount required and select your preferred repayment tenure, then click on “Proceed”.",
    details: ["Customizable tenure", "Amount based on machinery", "Transparent calculations"],
    color: "bg-indigo-700"
  },
  {
    id: 5,
    title: "KYC & Support",
    icon: <Headphones />,
    heading: "KYC & Verification",
    desc: "Complete your KYC verification. Our representative will contact you and guide you through the next steps.",
    details: ["Digital KYC", "Personal guidance", "Document pickup support"],
    color: "bg-orange-600"
  },
  {
    id: 6,
    title: "Disbursal",
    icon: <Banknote />,
    heading: "Direct Bank Transfer",
    desc: "Upon successful verification, the loan amount (including top-up) will be disbursed to your bank account.",
    details: ["Fastest disbursal", "BT settlement", "Instant top-up access"],
    color: "bg-[#8B1D1D]"
  }
];

export default function MachineryLoanApplyStep() {
  const [activeTab, setActiveTab] = useState(0);
  const current = applySteps[activeTab];

  return (
    <section className="w-full bg-white py-0 md:py-0 px-4 md:px-6 font-lexend overflow-hidden relative z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-10 md:mb-14">
          <Typography variant="h3" as="h3" className="text-2xl md:text-4xl font-black text-slate-900 mb-3 mt-0">
            How to Apply for Machinery Loan Balance Transfer & Top-Up
          </Typography>
          <Typography variant="h5" as="h5" className="text-slate-500 text-sm md:text-lg font-medium mt-0">
            Step-by-Step Application Process
          </Typography>
          <div className="w-24 h-1 bg-[#8B1D1D] mx-auto mt-4 rounded-full" />
        </div>

        {/* --- TABS --- */}
        <div className="flex border-b border-slate-100 overflow-x-auto no-scrollbar mb-10 md:mb-16 justify-start md:justify-center">
          {applySteps.map((step, idx) => (
            <button
              key={step.id}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-6 py-4 text-xs md:text-sm font-bold whitespace-nowrap border-b-2 transition-all duration-300 ${
                activeTab === idx 
                ? "border-[#8B1D1D] text-[#8B1D1D] bg-red-50/50" 
                : "border-transparent text-slate-400 hover:text-slate-800"
              }`}
            >
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] ${activeTab === idx ? "bg-[#8B1D1D] text-white" : "bg-slate-100 text-slate-500"}`}>
                {step.id}
              </span>
              {step.title}
            </button>
          ))}
        </div>

        {/* --- CONTENT AREA --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-slate-50/50 p-6 md:p-12 rounded-[40px] border border-slate-100">
          
          {/* Left Side Info */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="inline-block px-4 py-1 bg-red-100 text-[#8B1D1D] rounded-full text-[10px] font-bold uppercase tracking-widest">
              Step {current.id} of {applySteps.length}
            </div>
            <Typography variant="h4" className="text-2xl md:text-4xl font-black text-slate-900 mt-2">
              {current.heading}
            </Typography>
            <Typography className="text-slate-500 text-sm md:text-lg leading-relaxed">
              {current.desc}
            </Typography>

            <div className="space-y-3">
              {current.details.map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span className="text-slate-700 font-bold text-sm md:text-base">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Visual Card */}
          <div className={`relative rounded-[2.5rem] p-1 transition-all duration-700 ${current.color} order-1 lg:order-2 shadow-2xl`}>
             <div className="bg-white rounded-[2.3rem] p-8 md:p-12 text-center h-full">
                <div className="flex justify-center mb-8">
                  <div className="p-6 bg-slate-50 rounded-3xl text-[#8B1D1D]">
                    {/* Fixed ESLint Error: Using LucideProps instead of any */}
                    {React.cloneElement(current.icon as React.ReactElement<LucideProps>, { 
                      size: 48, 
                      className: "w-12 h-12 md:w-16 md:h-16" 
                    })}
                  </div>
                </div>
                <h4 className="text-xl md:text-2xl font-black text-slate-900 mb-2">Process Step {current.id}</h4>
                <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-6">Machinery Refinance</p>
                
                <div className="flex justify-center gap-2">
                   {applySteps.map((_, i) => (
                     <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === activeTab ? "w-8 bg-[#8B1D1D]" : "w-2 bg-slate-200"}`} />
                   ))}
                </div>
                
                <button className="w-full mt-8 py-4 bg-[#1e293b] text-white rounded-2xl font-bold hover:bg-black transition-all shadow-lg active:scale-95">
                  Continue Application
                </button>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}