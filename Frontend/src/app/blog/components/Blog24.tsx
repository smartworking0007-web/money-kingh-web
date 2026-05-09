"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Clock,
  Folder,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Zap,
  ShieldCheck,
  AlertOctagon,
  CalendarDays,
  TrendingUp,
  CreditCard,
} from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

interface FAQItem {
  q: string;
  a: string;
}

export const Blog24 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number): void =>
    setActiveFaq(activeFaq === index ? null : index);

  const faqs: FAQItem[] = [
    {
      q: "Q1: Does the interest-free period apply if I have an outstanding balance?",
      a: "No. If you carry over even a small balance from the previous month, the interest-free benefit is revoked for all new purchases until the full balance is cleared. This is a common trap!",
    },
    {
      q: "Q2: If I pay 99% of my bill, do I only pay interest on the remaining 1%?",
      a: "No. Most banks charge interest on the entire original balance from the date of purchase if the total amount is not cleared by the due date. Always pay the full 100%.",
    },
    {
      q: "Q3: Can I change my billing cycle date?",
      a: "Yes, most banks allow you to change your billing cycle once or twice a year. Aligning this with your salary date is a smart move for maintaining liquidity.",
    },
    {
      q: "Q4: Does international spending have a grace period?",
      a: "Yes, the grace period applies, but be mindful of the 'Forex Markup Fee' (usually 2-3.5%) which is a direct cost even if the interest is zero.",
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
            title="Mastering the Interest-Free Period: A Professional Guide to Credit Card Optimization"
            category="FINANCE"
            author="Sumit Mishra"
            date="May 09, 2026"
            image="/images/blog/blog-24.jpeg"
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
                  src="/images/blog/blog-24.jpeg"
                  alt="Professional infographic layout for a financial blog regarding credit card debt-free strategies"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="px-5 py-8 md:px-12 md:py-14 text-justify">
                <Typography variant="h5" className="text-[#1e3a8a] mb-4 font-bold leading-tight uppercase">
                  Credit Card Optimization: Leveraging Bank Capital at 0% Cost
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
                  A credit card is a strategic financing instrument. When managed with precision, the &quot;Interest-Free Period&quot; allows you to leverage bank funds to boost your monthly cash flow.
                </Typography>

                <section className="space-y-12">
                  {/* Strategic Comparison Table */}
                  <div className="space-y-6">
                    <Typography variant="h5" className="font-bold text-gray-900 uppercase">Professional vs. Average Strategy</Typography>
                    <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-md">
                      <table className="w-full text-left border-collapse bg-white">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="p-4 border-b font-bold text-gray-900">Feature</th>
                            <th className="p-4 border-b font-bold text-red-500">Average User</th>
                            <th className="p-4 border-b font-bold text-green-600">The Professional</th>
                          </tr>
                        </thead>
                        <tbody className="text-sm">
                          <tr>
                            <td className="p-4 border-b font-bold italic">Transaction Timing</td>
                            <td className="p-4 border-b">Spends randomly.</td>
                            <td className="p-4 border-b font-medium text-green-700">Buys day after statement date.</td>
                          </tr>
                          <tr>
                            <td className="p-4 border-b font-bold italic">Payment Method</td>
                            <td className="p-4 border-b">Pays &quot;Minimum Due&quot;.</td>
                            <td className="p-4 border-b font-medium text-green-700">Always pays &quot;Total Due&quot;.</td>
                          </tr>
                          <tr>
                            <td className="p-4 border-b font-bold italic">Credit Window</td>
                            <td className="p-4 border-b">15-20 days.</td>
                            <td className="p-4 border-b font-medium text-green-700">Maximized up to 50 days.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* 50-Day Mechanics */}
                  <div className="bg-[#1e3a8a] text-white p-8 md:p-12 rounded-[40px] relative overflow-hidden shadow-xl">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <div className="shrink-0 p-4 bg-white/10 rounded-2xl">
                        <CalendarDays className="text-blue-300" size={48} />
                      </div>
                      <div>
                        <Typography variant="h5" className="text-white mb-4 font-bold uppercase">The Mechanics of the 50-Day Window</Typography>
                        <Typography variant="b1" className="text-blue-100 leading-relaxed mb-4">
                          The cycle consists of a 30-day billing period + 20-day grace period. To maximize this, use the <strong>&quot;First-Day Advantage&quot;</strong>: Make big purchases right after your statement is generated.
                        </Typography>
                        <div className="p-3 bg-white/10 rounded-lg border border-white/20 text-sm italic">
                          Pro-Tip: If statement date is the 10th, buying on the 11th gives you the longest possible interest-free float.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Risk Matrix */}
                  <div className="space-y-6">
                    <Typography variant="h5" className="font-bold text-gray-900 uppercase">Financial Impact of Mismanagement</Typography>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-6 bg-red-50 rounded-2xl border border-red-100 flex gap-4">
                        <AlertOctagon className="text-red-600 shrink-0" />
                        <div>
                          <Typography variant="s2" className="font-bold text-red-900">Late Payments</Typography>
                          <Typography variant="caption" className="text-red-700">₹500 - ₹1300 late fee + Severe drop in CIBIL score.</Typography>
                        </div>
                      </div>
                      <div className="p-6 bg-orange-50 rounded-2xl border border-orange-100 flex gap-4">
                        <TrendingUp className="text-orange-600 shrink-0" />
                        <div>
                          <Typography variant="s2" className="font-bold text-orange-900">Minimum Only</Typography>
                          <Typography variant="caption" className="text-orange-700">3.5% monthly interest. Compound interest creates a debt trap.</Typography>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Checklist */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="text-green-600" size={28} />
                      <Typography variant="h5" className="font-bold uppercase text-gray-900">Actionable Checklist</Typography>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-5 bg-gray-50 rounded-2xl flex gap-4 items-start">
                         <Zap className="text-blue-600 shrink-0" size={20} />
                         <Typography variant="b2"><strong>Auto-Pay:</strong> Set bank to automatically deduct &quot;Total Amount Due&quot;.</Typography>
                      </div>
                      <div className="p-5 bg-gray-50 rounded-2xl flex gap-4 items-start">
                         <CreditCard className="text-red-600 shrink-0" size={20} />
                         <Typography variant="b2"><strong>Zero-Cash Rule:</strong> Never use a card at an ATM. Interest starts instantly.</Typography>
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