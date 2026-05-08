"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Clock,
  Folder,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  FileText,
  Percent,
  UserCheck,
  Zap,
} from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

interface FAQItem {
  q: string;
  a: string;
}

export const Blog17 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number): void =>
    setActiveFaq(activeFaq === index ? null : index);

  const faqs: FAQItem[] = [
    {
      q: "Q: How fast will I get the money?",
      a: "In the digital age, if your docs are clean, you can see the cash in your account within 24 to 48 hours. Some 'Instant Loans' for pre-approved customers take only minutes!",
    },
    {
      q: "Q: Can I use the money for anything?",
      a: "Pretty much! Personal loans are 'unsecured', meaning the bank doesn't track if you bought a sofa or a MacBook. Just ensure you have a repayment plan!",
    },
    {
      q: "Q: Will a personal loan help my credit score?",
      a: "Absolutely. If you pay your EMIs on time, every time, your credit score will skyrocket. It's one of the best ways to build a strong financial history.",
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
            title="The Ultimate Checklist for First-Time Personal Loan Applicants"
            category="PERSONAL LOAN"
            author="Sumit Mishra"
            date="May 07, 2026"
            image="/images/blog/blog-17.jpeg"
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

            <div className="bg-white rounded-xl overflow-hidden border-gray-100">
              <div className="relative h-[250px] sm:h-[300px] md:h-[500px] w-full">
                <Image
                  src="/images/blog/blog-17.jpeg"
                  alt="Excited young professional holding a smartphone showing a successful personal loan approval notification"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="px-5 py-8 md:px-12 md:py-14 text-justify">
                <Typography variant="h5" className="text-[#1e3a8a] mb-4 font-bold leading-tight uppercase">
                  Personal Loan Checklist: Don&apos;t Just Apply—Get Approved
                </Typography>

                <div className="flex gap-4 text-gray-400 mb-8 pb-4 border-b overflow-x-auto no-scrollbar">
                  <div className="flex items-center gap-2 shrink-0">
                    <Clock size={16} />
                    <Typography variant="b2">May 07, 2026</Typography>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Folder size={16} />
                    <Typography variant="b2">Personal Loan</Typography>
                  </div>
                </div>

                <Typography variant="s2" className="text-gray-600 mb-10 font-medium leading-relaxed block">
                  Whether it’s for that dream wedding, a home makeover, or clearing out old debt, a Personal Loan is the fuel for your next big move. Let&apos;s make sure your profile is &quot;bank-ready.&quot;
                </Typography>

                <section className="space-y-12">
                  <Typography variant="h5" className="text-[#1e3a8a] font-bold uppercase border-l-4 border-blue-600 pl-4">
                    Think of this as your Pre-Flight Inspection
                  </Typography>

                  {/* Checklist Items */}
                  <div className="space-y-10">
                    <div className="flex gap-4 md:gap-6">
                      <UserCheck className="text-blue-600 shrink-0" size={32} />
                      <div>
                        <Typography variant="h5" className="font-bold text-gray-900 mb-2">1. Know Your &quot;Credit Power&quot;</Typography>
                        <Typography variant="b1" className="text-gray-700">
                          Aim for a score of <strong>750+</strong>. If your score is low, wait 3–6 months and pay off small bills first. High scores = Low interest rates.
                        </Typography>
                      </div>
                    </div>

                    <div className="flex gap-4 md:gap-6">
                      <Percent className="text-orange-600 shrink-0" size={32} />
                      <div>
                        <Typography variant="h5" className="font-bold text-gray-900 mb-2">2. Master the &quot;Debt-to-Income&quot; Ratio</Typography>
                        <Typography variant="b1" className="text-gray-700">
                          Your total monthly EMI payments should not exceed <strong>40%</strong> of your take-home pay. Lenders want to see you aren&apos;t suffocating in debt.
                        </Typography>
                      </div>
                    </div>

                    <div className="flex gap-4 md:gap-6">
                      <FileText className="text-purple-600 shrink-0" size={32} />
                      <div>
                        <Typography variant="h5" className="font-bold text-gray-900 mb-2">3. The &quot;Paperwork Power-Pack&quot;</Typography>
                        <Typography variant="b1" className="text-gray-700 mb-4">Have these ready-to-upload:</Typography>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
                          <li className="flex items-center gap-2">• Last 3 months&apos; salary slips</li>
                          <li className="flex items-center gap-2">• Form 16 / Tax returns</li>
                          <li className="flex items-center gap-2">• 6 months bank statements</li>
                          <li className="flex items-center gap-2">• Passport / National ID</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Comparison Table */}
                  <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-md">
                    <table className="w-full text-left border-collapse bg-white">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="p-4 border-b font-bold text-gray-900">Feature</th>
                          <th className="p-4 border-b font-bold text-green-600 text-center">The &quot;Approval&quot; Zone</th>
                          <th className="p-4 border-b font-bold text-red-600 text-center">The &quot;Rejection&quot; Zone</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        <tr>
                          <td className="p-4 border-b font-bold text-gray-700">Credit Score</td>
                          <td className="p-4 border-b text-center text-green-700">750 or Higher</td>
                          <td className="p-4 border-b text-center text-red-700">Below 600</td>
                        </tr>
                        <tr>
                          <td className="p-4 border-b font-bold text-gray-700">Job Stability</td>
                          <td className="p-4 border-b text-center text-green-700">2+ Years Service</td>
                          <td className="p-4 border-b text-center text-red-700">Frequent Job Hopping</td>
                        </tr>
                        <tr>
                          <td className="p-4 border-b font-bold text-gray-700">Documents</td>
                          <td className="p-4 border-b text-center text-green-700">Clear & Digital</td>
                          <td className="p-4 border-b text-center text-red-700">Blurry/Missing</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Pro Tip Box */}
                  <div className="bg-blue-900 text-white p-8 rounded-3xl flex items-start gap-6">
                    <Zap className="text-yellow-400 shrink-0" size={32} />
                    <div>
                      <Typography variant="h5" className="text-white font-bold mb-2">Pro-Tip for First-Timers</Typography>
                      <Typography variant="b1" className="text-blue-100">
                        Avoid &quot;Multiple Dating&quot;: Don&apos;t apply to 5 banks at once. Each application triggers a &quot;Hard Inquiry&quot;, which can temporarily bruise your credit score. Apply to your top choice first!
                      </Typography>
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