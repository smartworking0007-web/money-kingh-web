"use client";

import React, { useState } from "react";
import { Typography } from "@/app/components/ui/Typography";
import { Plus, Minus } from "lucide-react";

// Typescript safety ke liye interface
interface InsuranceItem {
  id: string;
  category: string;
  title: string;
  desc: string;
  tags: string[];
}

const insuranceTypes: InsuranceItem[] = [
  {
    id: "001",
    category: "General",
    title: "Health Insurance",
    desc: "Health insurance covers medical expenses such as hospitalization, surgeries, treatments, and pre/post-hospitalization costs.",
    tags: ["Medical", "Cashless", "Tax Save"],
  },
  {
    id: "002",
    category: "Motor",
    title: "Motor Insurance",
    desc: "Motor insurance provides coverage for cars, bikes, and commercial vehicles against accidents, theft, and third-party liabilities.",
    tags: ["Car", "Bike", "Mandatory"],
  },
  {
    id: "003",
    category: "Travel",
    title: "Travel Insurance",
    desc: "Travel insurance protects you from risks such as trip cancellations, lost baggage, and medical emergencies abroad.",
    tags: ["Flight", "Baggage", "International"],
  },
  {
    id: "004",
    category: "Home",
    title: "Home Insurance",
    desc: "Home insurance covers your house and belongings against risks like fire, theft, floods, and natural calamities.",
    tags: ["Property", "Theft", "Safety"],
  },
  {
    id: "005",
    category: "Commercial",
    title: "Commercial Insurance",
    desc: "Designed for businesses to protect against financial losses due to property damage and operational disruptions.",
    tags: ["Business", "Liability", "Assets"],
  },
];

export default function GeneralInsuranceTypes() {
  const [openId, setOpenId] = useState<string | null>("001");

  const handleTabClick = (category: string) => {
    const selected = insuranceTypes.find((item) => item.category === category);
    if (selected) {
      setOpenId(selected.id);
    }
  };

  return (
    // mt-0 aur pt-0 section level par
    <section className="w-full bg-white pt-0 pb-10 md:pb-16 px-4 md:px-10 font-lexend mt-0">
      <div className="max-w-5xl mx-auto mt-0 pt-0">
        
        {/* --- HEADER SECTION --- */}
        {/* pt-0 ensure karta hai ki header ekdum top se start ho */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pt-0 -mt-20 mb-6 md:mb-10 gap-4">
          <div className="max-w-xl pt-0 mt-0">
            {/* Chota tag jo line ke upar hai */}
            <div className="inline-block px-2 py-0.5 mb-1 bg-blue-50 text-blue-600 rounded-full text-[9px] font-bold uppercase tracking-widest mt-0">
              ✦ FAQ
            </div>
            <Typography
              variant="h3"
              as="h1"
              className="text-2xl md:text-4xl font-black text-[#1e293b] leading-tight mt-0 pt-0"
            >
              Types of General Insurance
            </Typography>
          </div>

          {/* --- TABS --- */}
          <div className="hidden md:flex flex-wrap gap-2 mt-0">
            {insuranceTypes.map((item) => (
              <button
                key={item.category}
                onClick={() => handleTabClick(item.category)}
                className={`px-4 py-1.5 rounded-full text-[11px] font-bold transition-all border
                ${
                  openId === item.id
                    ? "bg-leaner-to-r from-cyan-400 to-purple-400 text-white border-transparent shadow-sm"
                    : "bg-gray-50 text-gray-500 border-gray-100 hover:bg-gray-100"
                }`}
              >
                {item.category}
              </button>
            ))}
          </div>
        </div>

        {/* --- ACCORDION LIST --- */}
        <div className="border-t border-gray-100">
          {insuranceTypes.map((item) => (
            <div
              key={item.id}
              className="border-b border-gray-100 transition-all duration-500 overflow-hidden"
            >
              <button
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className="w-full flex items-center justify-between py-4 md:py-5 text-left focus:outline-none group"
              >
                <div className="flex items-center space-x-4 md:space-x-8">
                  <span className="text-gray-300 font-bold text-[10px] md:text-xs tracking-widest">
                    ({item.id})
                  </span>
                  <Typography
                    variant="h5"
                    className={`text-base md:text-xl font-bold transition-colors duration-300 mt-0
                    ${
                      openId === item.id
                        ? "text-blue-600"
                        : "text-[#1e293b] group-hover:text-blue-500"
                    }`}
                  >
                    {item.title}
                  </Typography>
                </div>
                <div
                  className={`p-1.5 rounded-full border transition-all duration-300 
                  ${
                    openId === item.id
                      ? "bg-blue-50 border-blue-100 rotate-180"
                      : "bg-gray-50 border-gray-100"
                  }`}
                >
                  {openId === item.id ? (
                    <Minus className="w-3.5 h-3.5 text-blue-600" />
                  ) : (
                    <Plus className="w-3.5 h-3.5 text-gray-400" />
                  )}
                </div>
              </button>

              <div
                className={`transition-all duration-500 ease-in-out ${
                  openId === item.id ? "max-h-[300px] opacity-100 mb-6" : "max-h-0 opacity-0"
                }`}
              >
                <div className="flex flex-col md:flex-row gap-4 md:pl-20 pr-4">
                  <div className="flex-1">
                    <Typography
                      variant="b1"
                      className="text-gray-500 text-[12px] md:text-sm leading-relaxed mt-0"
                    >
                      {item.desc}
                    </Typography>

                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-gray-50 border border-gray-50 rounded-full text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-wide"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}