"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";
import {
  Search,
  BarChart4,
  ShieldQuestion,
  Zap,
  Activity,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

const steps = [
  {
    id: 1,
    label: "Step 1",
    title: "Risk Identification",
    desc: "We meticulously identify potential financial risks that could impact your business stability or growth trajectory.",
    icon: <Search className="w-5 h-5" />,
    tag: "Discovery Phase",
    status: "Analyzing",
  },
  {
    id: 2,
    label: "Step 2",
    title: "Risk Assessment",
    desc: "Our experts analyze each identified risk based on its potential impact and probability to prioritize effectively.",
    icon: <BarChart4 className="w-5 h-5" />,
    tag: "Impact Analysis",
    status: "Evaluating",
  },
  {
    id: 3,
    label: "Step 3",
    title: "Strategy Development",
    desc: "We create customized, data-driven solutions and mitigation plans tailored specifically to reduce your business risks.",
    icon: <ShieldQuestion className="w-5 h-5" />,
    tag: "Planning Phase",
    status: "Designing",
  },
  {
    id: 4,
    label: "Step 4",
    title: "Implementation",
    desc: "We deploy advanced tools and robust financial systems to ensure secure and seamless business operations.",
    icon: <Zap className="w-5 h-5" />,
    tag: "Action Phase",
    status: "Deploying",
  },
  {
    id: 5,
    label: "Step 5",
    title: "Monitoring",
    desc: "Continuous real-time tracking and comprehensive reporting to ensure ongoing safety and performance.",
    icon: <Activity className="w-5 h-5" />,
    tag: "Maintenance",
    status: "Live Tracking",
  },
];

export default function RiskManagementProcess() {
  const [activeStep, setActiveStep] = useState(steps[0]);

  return (
    <section className="w-full bg-white py-12 md:py-20 px-4 md:px-10 font-lexend overflow-hidden relative z-20">
      <div className="max-w-6xl mx-auto">
        {/* --- HEADER --- */}
        <div className="text-center mb-12">
          <Typography
            variant="h4"
            as="h4"
            className="text-2xl md:text-5xl font-black text-slate-900 mb-4 mt-0"
          >
            Our Risk Management Process
          </Typography>
          <div className="h-1.5 w-20 bg-[#8B1D1D] mx-auto rounded-full" />
        </div>

        {/* --- STEP TABS (Mobile & Desktop) --- */}
        <div className="flex justify-start md:justify-center border-b border-gray-100 mb-12 overflow-x-auto no-scrollbar gap-2 md:gap-0">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(step)}
              className={`flex items-center space-x-2 px-6 py-4 transition-all duration-300 border-b-2 font-bold text-xs md:text-sm whitespace-nowrap
                ${activeStep.id === step.id ? "border-[#8B1D1D] text-[#8B1D1D] bg-red-50/30" : "border-transparent text-gray-400 hover:text-gray-600"}`}
            >
              <span
                className={`flex items-center justify-center w-6 h-6 rounded-full text-[10px] ${activeStep.id === step.id ? "bg-[#8B1D1D] text-white" : "bg-gray-100"}`}
              >
                {step.id}
              </span>
              <span>{step.label}</span>
            </button>
          ))}
        </div>

        {/* --- CONTENT AREA --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-slate-50/50 rounded-[2.5rem] p-6 md:p-12 border border-slate-100 shadow-sm">
          {/* Left: Info */}
          <div className="space-y-6">
            <Typography
              variant="h4"
              className="text-2xl md:text-4xl font-black text-slate-900 mb-4 mt-0"
            >
              {activeStep.title}
            </Typography>
            <Typography
              variant="b1"
              className="text-gray-500 text-sm md:text-lg leading-relaxed mb-8 mt-0"
            >
              {activeStep.desc}
            </Typography>

            <div className="flex flex-wrap gap-3">
              {["Secure Audit", "Real-time Alerts", "Expert Support"].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center space-x-2 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span className="text-xs font-bold text-slate-700">
                      {item}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Right: Interactive Status Card */}
          <div className="relative bg-[#1e293b] rounded-2rem p-8 md:p-12 min-h-[300px] flex items-center justify-center overflow-hidden group">
            {/* Background Decorative Icon */}
            <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
              <ShieldCheck className="w-64 h-64 text-white" />
            </div>

            {/* Floating Card */}
            <div className="relative z-10 bg-white rounded-2xl p-6 shadow-2xl w-full max-w-[300px] transform transition-transform group-hover:scale-105">
              <div className="flex justify-between items-start mb-6 border-b border-slate-50 pb-4">
                <div>
                  <p className="text-[9px] text-gray-400 uppercase font-black tracking-widest mb-1">
                    Process Status
                  </p>
                  <Typography
                    variant="h4"
                    className="text-xl font-black text-[#8B1D1D] mt-0 uppercase tracking-tight"
                  >
                    {activeStep.status}
                  </Typography>
                </div>
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-[#8B1D1D] shadow-inner">
                  {activeStep.icon}
                </div>
                <div>
                  <p className="text-xs font-black text-slate-900 tracking-tight">
                    {activeStep.title}
                  </p>
                  <p className="text-[10px] text-gray-500 font-medium">
                    Phase: {activeStep.tag}
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#8B1D1D] h-full transition-all duration-700"
                    style={{ width: `${activeStep.id * 20}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-[9px] font-bold text-slate-400">
                  <span>PROGRESS</span>
                  <span>{activeStep.id * 20}%</span>
                </div>
              </div>

              <button className="w-full py-3 bg-slate-900 text-white rounded-xl text-[10px] font-bold hover:bg-black transition-all shadow-lg active:scale-95">
                View Full Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
