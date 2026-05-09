"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Clock,
  Folder,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  BadgePercent,
  CalendarDays,
  Wallet,
  TrendingDown,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

interface FAQItem {
  q: string;
  a: string;
}

export const Blog23 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number): void =>
    setActiveFaq(activeFaq === index ? null : index);

  const faqs: FAQItem[] = [
    {
      q: "Q1: Can I use the 20/4/10 rule for luxury vehicles?",
      a: "Absolutely. In fact, it is even more critical for luxury cars because their depreciation rates are much steeper—often losing up to 50% of their value in just 3 years.",
    },
    {
      q: "Q2: What if I can afford a 30% down payment?",
      a: "If your current investments are earning less than your loan interest rate, pay the higher down payment. It reduces your debt burden and total interest outflow immediately.",
    },
    {
      q: "Q3: Does the 10% include fuel and maintenance?",
      a: "Yes. A common mistake is only counting the EMI. The 10% cap must include EMI, fuel, insurance, and routine maintenance to truly protect your monthly cash flow.",
    },
    {
      q: "Q4: Should I opt for Zero-Depreciation insurance?",
      a: "For the first 3-5 years, Zero-Dep insurance is highly recommended. It prevents massive out-of-pocket expenses during claims, even if it slightly increases your monthly budget.",
    },
  ];

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="The 20/4/10 Rule: The Professional Formula for Stress-Free Car Ownership"
            category="FINANCE"
            author="Sumit Mishra"
            date="May 09, 2026"
            image="/images/blog/blog-23.jpeg"
          />
        </div>
      ) : (
        <div className="fixed inset-0 z-40 bg-white overflow-y-auto pt-20 md:pt-28 no-scrollbar animate-in fade-in duration-300 text-left">
          <div className="relative max-w-5xl mx-auto pb-20 px-4 md:px-6">
            <div className="mb-6">
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center pt-3 text-gray-500 hover:text-[#1e3a8a] transition-colors font-bold uppercase text-[10px] cursor-pointer tracking-widest"
              >
                <ArrowLeft size={14} /> Back to Blogs
              </button>
            </div>

            <div className="bg-white rounded-xl overflow-hidden border-gray-100 ">
              <div className="relative h-[250px] sm:h-[300px] md:h-[500px] w-full">
                <Image
                  src="/images/blog/blog-23.jpeg"
                  alt="Summary graphic of the 20/4/10 rule as a golden formula for financial discipline in vehicle purchase"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="px-5 py-8 md:px-12 md:py-14 text-justify">
                <Typography variant="h5" className="text-[#1e3a8a] mb-4 font-bold leading-tight uppercase">
                  The 20/4/10 Rule: Buying a Car the Smart Way
                </Typography>

                <div className="flex gap-4 text-gray-400 mb-8 pb-4 border-b overflow-x-auto no-scrollbar">
                  <div className="flex items-center gap-2 shrink-0">
                    <Clock size={16} />
                    <Typography variant="b2">May 09, 2026</Typography>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Folder size={16} />
                    <Typography variant="b2">Finance</Typography>
                  </div>
                </div>

                <Typography variant="s2" className="text-gray-600 mb-10 font-medium leading-relaxed block">
                  A vehicle is often the second-largest financial commitment. To avoid the &quot;long-tenure trap&quot; and maintain liquidity, experts recommend the <strong>20/4/10 Rule</strong>.
                </Typography>

                <section className="space-y-12">
                  {/* Rule Breakdown Table */}
                  <div className="space-y-6">
                    <Typography variant="h5" className="font-bold text-gray-900 uppercase">1. Breakdown of the 20/4/10 Formula</Typography>
                    
                    <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
                      <table className="w-full text-left border-collapse bg-white">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="p-4 border-b font-bold text-gray-900 italic">Component</th>
                            <th className="p-4 border-b font-bold text-[#1e3a8a]">Requirement</th>
                            <th className="p-4 border-b font-bold text-gray-600">Strategic Objective</th>
                          </tr>
                        </thead>
                        <tbody className="text-sm">
                          <tr>
                            <td className="p-4 border-b font-bold flex items-center gap-2"><BadgePercent size={16}/> 20% Down Payment</td>
                            <td className="p-4 border-b">Pay 20% upfront</td>
                            <td className="p-4 border-b">Avoid &quot;negative equity&quot; if resale value drops.</td>
                          </tr>
                          <tr>
                            <td className="p-4 border-b font-bold flex items-center gap-2"><CalendarDays size={16}/> 4-Year Tenure</td>
                            <td className="p-4 border-b">Max 48 months</td>
                            <td className="p-4 border-b">Minimizes interest and aligns with depreciation.</td>
                          </tr>
                          <tr>
                            <td className="p-4 border-b font-bold flex items-center gap-2"><Wallet size={16}/> 10% Monthly Income</td>
                            <td className="p-4 border-b">EMI + Fuel + Ins.</td>
                            <td className="p-4 border-b">Protects cash flow for investments.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Wealth Killer Section */}
                  <div className="bg-red-50 p-6 md:p-8 rounded-3xl border border-red-100">
                    <div className="flex items-center gap-4 mb-4">
                      <AlertTriangle className="text-red-600" size={32} />
                      <Typography variant="h5" className="font-bold text-red-900 uppercase">The 7-Year &quot;Wealth Killer&quot;</Typography>
                    </div>
                    <Typography variant="b1" className="text-gray-700 leading-relaxed mb-4">
                      Banks often lure you with 84-month loans to keep EMIs low. However, cars lose <strong>30-40% value</strong> in the first 3 years. With a 7-year loan, you might owe the bank more than the car is worth.
                    </Typography>
                  </div>

                  {/* Comparison Matrix */}
                  <div className="space-y-6">
                    <Typography variant="h5" className="font-bold text-gray-900 uppercase">4-Year vs. 7-Year Loan Impact</Typography>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                        <Typography variant="s1" className="text-blue-700 font-bold mb-4 block">4-Year Loan (Professional)</Typography>
                        <ul className="space-y-2 text-sm">
                          <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-600"/> Optimized interest outflow.</li>
                          <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-600"/> Debt-free while car is in its prime.</li>
                          <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-600"/> High equity for future upgrades.</li>
                        </ul>
                      </div>
                      <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                        <Typography variant="s1" className="text-gray-600 font-bold mb-4 block">7-Year Loan (Common Mistake)</Typography>
                        <ul className="space-y-2 text-sm text-gray-500">
                          <li>• Extremely high total interest (often double).</li>
                          <li>• Remaining in debt for most of car&apos;s life.</li>
                          <li>• Negative equity at time of resale.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Checklist Section */}
                  <div className="bg-[#1e3a8a] text-white p-8 md:p-12 rounded-[40px] shadow-xl">
                    <Typography variant="h5" className="text-white mb-6 font-bold uppercase flex items-center gap-3">
                      <TrendingDown className="text-blue-300" /> Actionable Checklist
                    </Typography>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Typography variant="s2" className="text-blue-200">Factor &quot;True Cost&quot;</Typography>
                        <Typography variant="caption" className="text-blue-50/70">Include insurance hikes and service costs (~1-2% value).</Typography>
                      </div>
                      <div className="space-y-2">
                        <Typography variant="s2" className="text-blue-200">The &quot;Used&quot; Alternative</Typography>
                        <Typography variant="caption" className="text-blue-50/70">Consider a 2-year-old car to avoid the initial 30% depreciation hit.</Typography>
                      </div>
                    </div>
                  </div>

                  {/* FAQ Section */}
                  <div className="pt-10 border-t border-gray-100">
                    <Typography variant="h5" className="text-[#1e3a8a] mb-8 font-bold uppercase underline decoration-blue-200 underline-offset-8">
                      Frequently Asked Questions
                    </Typography>
                    <div className="space-y-4">
                      {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:border-blue-200 transition-all">
                          <button 
                            onClick={() => toggleFaq(index)} 
                            className="w-full flex items-center justify-between p-5 text-left bg-gray-50/50 hover:bg-white transition-colors"
                          >
                            <Typography variant="s2" className="font-bold text-gray-900 leading-tight">{faq.q}</Typography>
                            {activeFaq === index ? <ChevronUp size={20} className="text-[#1e3a8a]" /> : <ChevronDown size={20} className="text-gray-400" />}
                          </button>
                          {activeFaq === index && (
                            <div className="p-5 bg-white border-t border-gray-100 animate-in slide-in-from-top-2 duration-300">
                              <Typography variant="b1" className="text-gray-600 leading-relaxed">{faq.a}</Typography>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <div className="mt-14">
                  <ShareSection />
                </div>
                <div className="mt-10 flex justify-center border-t pt-8">
                  <button 
                    onClick={() => setIsOpen(false)} 
                    className="text-gray-400 flex items-center gap-2 hover:text-[#1e3a8a] font-bold uppercase text-[10px] tracking-widest transition-all"
                  >
                    ← Back to Articles
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};