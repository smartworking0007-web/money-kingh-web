"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";
import { 
  Briefcase, 
  Users, 
  Baby, 
  Home, 
  Globe, 
  CheckCircle2,
} from "lucide-react";

const categories = [
  { 
    id: "working", 
    label: "Working Individuals", 
    icon: <Briefcase className="w-4 h-4" />,
    title: "Working Individuals",
    desc: "People who have salaried jobs can buy life insurance plans at affordable premiums. This allows salaried individuals to ensure the financial safety of their dependents in the event of their unfortunate demise.",
    amount: "₹75,00,000",
    tag: "Salaried Plan"
  },
  { 
    id: "couples", 
    label: "Married Couples", 
    icon: <Users className="w-4 h-4" />,
    title: "Married Couples",
    desc: "People who are newly married or have a dependent spouse can buy life insurance plans for their spouse or a policy with joint cover to secure their spouse’s financial future.",
    amount: "₹1,50,00,000",
    tag: "Joint Cover"
  },
  { 
    id: "parents", 
    label: "Parents", 
    icon: <Baby className="w-4 h-4" />,
    title: "People with Kids",
    desc: "Parents can ensure that their kids will be able to fulfil their dreams and get higher education even in their absence with a death or maturity benefit payout.",
    amount: "₹50,00,000",
    tag: "Child Future"
  },
  { 
    id: "housewives", 
    label: "Housewives", 
    icon: <Home className="w-4 h-4" />,
    title: "Housewives",
    desc: "Now housewives can buy term insurance using their husband's income proof and ensure financial security. These plans offer a large life cover at affordable premiums.",
    amount: "₹25,00,000",
    tag: "Independent Cover"
  },
  { 
    id: "nris", 
    label: "NRIs", 
    icon: <Globe className="w-4 h-4" />,
    title: "NRIs & Foreign Nationals",
    desc: "Insurers provide life insurance for NRIs, PIOs, and OCIs to secure families in India via tele or video medicals.",
    amount: "₹2,00,00,000",
    tag: "Global Support"
  },
];

// MAINE NAAM CHANGE KAR DIYA HAI TAKI ERROR NA AAYE
export default function WhoCanBuy() {
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section className="w-full bg-white py-22 md:py-20 px-4 md:px-10 font-lexend overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-10">
          <Typography variant="h3" as="h1" className="text-2xl md:text-4xl font-black text-slate-900 mb-4 mt-0">
            Who Can Buy a Life Insurance Policy?
          </Typography>
          <Typography variant="b1" className="text-gray-500 max-w-4xl mx-auto text-sm md:text-base leading-relaxed mt-0">
            Individuals between 18 and 65 who are Indian citizens or NRIs with financial ability can buy policies. It s essential to disclose information truthfully during the application.
          </Typography>
        </div>

        {/* --- SMART TABS (Desktop) --- */}
        <div className="hidden md:flex justify-center border-b border-gray-100 mb-12 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat)}
              className={`flex items-center space-x-2 px-6 py-4 transition-all duration-300 border-b-2 font-medium text-sm whitespace-nowrap
                ${activeTab.id === cat.id ? "border-blue-600 text-blue-600 bg-blue-50/30" : "border-transparent text-gray-400 hover:text-gray-600"}`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* --- MOBILE CATEGORY SELECTOR --- */}
        <div className="md:hidden flex space-x-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat)}
              className={` shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all
                ${activeTab.id === cat.id ? "bg-blue-600 text-white shadow-lg" : "bg-gray-100 text-gray-500"}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* --- CONTENT AREA --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-[#fcfdfe] rounded-32px p-6 md:p-12 border border-slate-50 shadow-sm">
          
          {/* Left: Text */}
          <div>
            <Typography variant="h4" className="text-2xl md:text-3xl font-black text-slate-900 mb-6 mt-0">
              {activeTab.title}
            </Typography>
            <Typography variant="b1" className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 mt-0">
              {activeTab.desc}
            </Typography>
            
            <div className="flex flex-wrap gap-4 mb-8">
              {["Account Setup", "Tracking", "Smart Spend"].map((item) => (
                <div key={item} className="flex items-center space-x-2 bg-white px-3 py-1.5 rounded-lg border border-slate-100 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-xs font-bold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Floating Card (UI from Image) */}
          <div className="relative bg-[#b4aeae] rounded-24px p-6 md:p-12 min-h-[350px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <Globe className="w-full h-full scale-150" />
            </div>

            <div className="relative z-10 bg-white rounded-xl p-5 shadow-2xl w-full max-w-[280px]">
                <div className="flex justify-between items-start mb-4 border-b border-slate-50 pb-4">
                   <div>
                    <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest mb-1">Coverage Details</p>
                    <Typography variant="h4" className="text-2xl font-black text-slate-900 mt-0">-{activeTab.amount}</Typography>
                    <p className="text-[10px] text-gray-500">Life Cover • {activeTab.tag}</p>
                   </div>
                   <button className="text-gray-300">×</button>
                </div>

                <div className="flex items-center space-x-3 mb-6">
                   <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      {activeTab.icon}
                   </div>
                   <div>
                    <p className="text-xs font-bold text-slate-800">Policy Holder</p>
                    <p className="text-[10px] text-gray-400 uppercase">MK-8486214</p>
                   </div>
                </div>

                <div className="space-y-3 mb-6">
                    <div>
                        <p className="text-[9px] text-gray-400 uppercase font-bold">Payment Method</p>
                        <p className="text-[10px] text-slate-700 font-medium">Automatic Online Transfer</p>
                    </div>
                    <div>
                        <p className="text-[9px] text-gray-400 uppercase font-bold">Renewal Date</p>
                        <p className="text-[10px] text-slate-700 font-medium">Sep 28, 2026</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <button className="py-2 text-[10px] font-bold border border-slate-200 rounded-lg">Edit</button>
                    <button className="py-2 text-[10px] font-bold border border-slate-200 rounded-lg">Share</button>
                </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}