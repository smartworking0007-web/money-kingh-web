"use client";

import React, { useState } from "react";
import Link from "next/link"; // Link component ensure karein
import { Typography } from "@/app/components/ui/Typography";

// --- DATA --- (Pehle jaisa hi hai)
const insurancePlans = [
  { insurer: "HDFC Life Insurance", plan: "HDFC Life Click 2 Supreme", sum: "10,000 - No Limit" },
  { insurer: "ICICI Prudential Life", plan: "iProtect Smart Plus", sum: "50 Lacs - 20 Crores" },
  { insurer: "Tata AIA Life Insurance", plan: "Sampoorna Raksha Promise", sum: "25 Lacs - No limit" },
  { insurer: "SBI Life Insurance", plan: "eShield Next", sum: "50 Lacs - No limit" },
  { insurer: "Bajaj Allianz Life", plan: "Life eTouch II", sum: "50 Lacs - No limit" },
  { insurer: "Axis Max Life", plan: "Smart Term Plan Plus", sum: "25 Lacs - 20 Crores" },
];

const investmentPlans = [
  { name: "SBI Life Insurance", plan: "eWealth Plus", yr5: "15.7%", yr10: "12.3%" },
  { name: "HDFC Life Insurance", plan: "Click2Invest", yr5: "28.1%", yr10: "21%" },
  { name: "Axis Max Life", plan: "Online Savings Plan", yr5: "28.6%", yr10: "17.8%" },
  { name: "ICICI Prudential Life", plan: "EzyGrow - Wealth", yr5: "25.1%", yr10: "17.7%" },
  { name: "Tata AIA Life", plan: "Smart Fortune Plus", yr5: "27.3%", yr10: "17.9%" },
];

export default function LifeInsuranceTables() {
  const [activeTab, setActiveTab] = useState("insurance");

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-12 pt-0 -mt-6 md:-mt-12 pb-10 font-lexend">
      {/* --- HEADER --- */}
      <div className="text-center mb-6">
        <Typography variant="h4" as="h4" className="text-[#1e293b] font-black mb-3 text-2xl md:text-3xl mt-0">
          What are the <span className="text-black-600">Best Life Insurance in India 2026</span>
        </Typography>
        <Typography variant="s2" as="h5" className="text-gray-500 max-w-4xl mx-auto text-sm md:text-base leading-relaxed mt-0">
          Here is the list of best life insurance companies sorted in order of highest to lowest Sum Assured(SA). Choose the ideal life insurance company from HDFC, MAX, SBI etc and secure your family’s future:
        </Typography>
      </div>

      {/* --- TABS --- */}
      <div className="flex justify-center space-x-8 mb-6 border-b border-gray-200">
        <button
          onClick={() => setActiveTab("insurance")}
          className={`pb-2 font-bold transition-all text-sm md:text-base ${activeTab === "insurance" ? "text-blue-600 border-b-4 border-blue-600" : "text-gray-400 hover:text-gray-600"}`}
        >
          Top Life Insurance Plans
        </button>
        <button
          onClick={() => setActiveTab("investment")}
          className={`pb-2 font-bold transition-all text-sm md:text-base ${activeTab === "investment" ? "text-blue-600 border-b-4 border-blue-600" : "text-gray-400 hover:text-gray-600"}`}
        >
          Investment Plans
        </button>
      </div>

      {/* --- TABLES --- */}
      <div className="bg-[#f8faff] rounded-xl p-3 md:p-6 shadow-sm border border-blue-50">
        <div className="overflow-x-auto">
          {activeTab === "insurance" ? (
            <table className="w-full text-left border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
              <thead className="bg-[#2d3e50] text-white">
                <tr>
                  <th className="p-3 md:p-4 text-xs md:text-base whitespace-nowrap">Private Insurer</th>
                  <th className="p-3 md:p-4 text-xs md:text-base whitespace-nowrap">Term Plan</th>
                  <th className="p-3 md:p-4 text-xs md:text-base whitespace-nowrap">Sum Assured</th>
                  <th className="p-3 md:p-4 text-center whitespace-nowrap">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {insurancePlans.map((item, index) => (
                  <tr key={index} className="hover:bg-blue-50 transition-colors">
                    <td className="p-3 md:p-4 text-blue-600 font-medium text-xs md:text-base">{item.insurer}</td>
                    <td className="p-3 md:p-4 text-blue-500 text-xs md:text-base">{item.plan}</td>
                    <td className="p-3 md:p-4 text-gray-600 text-xs md:text-base">{item.sum}</td>
                    <td className="p-3 md:p-4 text-center">
                      {/* URL ko /contact kar diya hai */}
                      <Link 
                        href="http://application.dsacrm.com/e22787fa-e05f-4643-a0af-d4a5b98889ba/apply" 
                        className="inline-block bg-blue-600 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-md text-[10px] md:text-sm font-bold hover:bg-blue-700 transition-all"
                      >
                        Apply Now
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            /* Investment table ke liye bhi agar apply now button chahiye to yahan add kar sakte ho */
            <table className="w-full text-left border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
              <thead className="bg-[#2d3e50] text-white">
                <tr>
                  <th className="p-3 md:p-4 text-xs md:text-base">Insurer Name</th>
                  <th className="p-3 md:p-4 text-xs md:text-base">Investment Plans</th>
                  <th className="p-3 md:p-4 text-xs md:text-base">5 Yr Returns</th>
                  <th className="p-3 md:p-4 text-xs md:text-base">10 Yr Returns</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {investmentPlans.map((item, index) => (
                  <tr key={index} className="hover:bg-blue-50">
                    <td className="p-3 md:p-4 text-gray-700 font-medium text-xs md:text-base">{item.name}</td>
                    <td className="p-3 md:p-4 text-blue-500 text-xs md:text-base">{item.plan}</td>
                    <td className="p-3 md:p-4 text-gray-600 text-xs md:text-base">{item.yr5}</td>
                    <td className="p-3 md:p-4 text-gray-600 text-xs md:text-base">{item.yr10}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}