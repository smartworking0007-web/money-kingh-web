"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Clock,
  Folder,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  HeartPulse, 
  Activity,
} from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";
import { Button } from "@/app/components/ui/Button";

// Interface for FAQ items to avoid 'any' type errors
interface FAQItem {
  q: string;
  a: string;
}

export const Blog13 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number): void =>
    setActiveFaq(activeFaq === index ? null : index);

  const faqs: FAQItem[] = [
    {
      q: "Q1: Will my base policy continue if I claim the Critical Illness Rider?",
      a: "In 'Accelerated' riders, the claim amount is deducted from the base sum assured. However, if it is an 'Additional' rider, your base cover remains intact even after the CI claim is paid. Check your policy type!",
    },
    {
      q: "Q2: Does the CI Rider cover all diseases?",
      a: "No. It covers a specific list (usually 10 to 60 major illnesses) like Stroke, Cancer, or Organ Failure. Always read the list of 'Covered Illnesses' in the policy document.",
    },
    {
      q: "Q3: Is there a waiting period?",
      a: "Yes. Critical Illness riders usually have a 90-day waiting period from the start of the policy and a 'survival period' (usually 30 days) after diagnosis before the payout is made.",
    },
    {
      q: "Q4: Can I add these riders to an existing Endowment or ULIP plan?",
      a: "Yes, most modern plans allow you to add these riders to enhance your protection. Check with your insurance provider for compatibility.",
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
            title="Understanding Riders: How to add Critical Illness and Accidental Death benefits."
            category="INSURANCE"
            author="Sumit Mishra"
            date="May 06, 2026"
            image="/images/blog/blog-13.jpeg"
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

            <div className="bg-white rounded-xl overflow-hidden border-gray-100 shadow-sm">
              <div className="relative h-[250px] sm:h-[300px] md:h-[500px] w-full">
                <Image
                  src="/images/blog/blog-13.jpeg"
                  alt="Conceptual illustration showing a life insurance shield with extra icons for medical health and accident protection representing riders"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="px-5 py-8 md:px-12 md:py-14 text-justify">
                <Typography variant="h5" className="text-[#1e3a8a] mb-4 font-bold leading-tight uppercase">
                  Understanding Riders: Total Family Security
                </Typography>

                <div className="flex gap-4 text-gray-400 mb-8 pb-4 border-b overflow-x-auto no-scrollbar">
                  <div className="flex items-center gap-2 shrink-0">
                    <Clock size={16} />
                    <Typography variant="b2">May 06, 2026</Typography>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Folder size={16} />
                    <Typography variant="b2">Insurance</Typography>
                  </div>
                </div>

                <section className="space-y-12">
                  {/* CI Rider Section */}
                  <div className="bg-orange-50/50 p-6 md:p-8 rounded-3xl border border-orange-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-orange-500 p-3 rounded-2xl text-white">
                        <HeartPulse size={24} />
                      </div>
                      <Typography variant="h5" className="font-bold text-orange-900">
                        1. Critical Illness (CI) Rider
                      </Typography>
                    </div>
                    <Typography variant="b1" className="text-gray-700 leading-relaxed mb-4">
                      Standard life insurance only pays out when you are gone. The CI Rider acts as an <strong>&quot;Income Protector&quot;</strong>. If you are diagnosed with a major illness like Cancer or Heart Attack, the insurer pays a lump sum immediately.
                    </Typography>
                    <div className="bg-white/60 p-4 rounded-xl  text-orange-800 text-sm">
                      Benefit: Prevents dipping into savings like your child&apos;s education fund to pay medical bills.
                    </div>
                  </div>

                  {/* ADB Rider Section */}
                  <div className="bg-blue-50/50 p-6 md:p-8 rounded-3xl border border-blue-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-blue-600 p-3 rounded-2xl text-white">
                        <Activity size={24} />
                      </div>
                      <Typography variant="h5" className="font-bold text-blue-900">
                        2. Accidental Death Benefit (ADB) Rider
                      </Typography>
                    </div>
                    <Typography variant="b1" className="text-gray-700 leading-relaxed mb-4">
                      Known as <strong>&quot;Double Security&quot;</strong>. If the policyholder passes away due to an accident, the nominee receives an additional amount over the basic Sum Assured.
                    </Typography>
                    <div className="border-l-4 border-blue-600 pl-4 py-2 bg-white/40">
                      <Typography variant="b2" className="font-bold">
                        The Math: ₹1 Crore Base + ₹50 Lakh ADB = ₹1.5 Crore total family payout.
                      </Typography>
                    </div>
                  </div>

                  {/* Comparison Table */}
                  <div className="space-y-6">
                    <Typography variant="h5" className="text-[#1e3a8a] font-bold uppercase tracking-wide">
                      Why Add Riders Instead of New Policies?
                    </Typography>
                    <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
                      <table className="w-full text-left border-collapse bg-white">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="p-4 md:p-5 border-b font-bold text-gray-900">Feature</th>
                            <th className="p-4 md:p-5 border-b font-bold text-blue-600">Adding a Rider</th>
                            <th className="p-4 md:p-5 border-b font-bold text-gray-600">Separate Policy</th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-700">
                          <tr>
                            <td className="p-4 md:p-5 border-b font-medium">Cost</td>
                            <td className="p-4 md:p-5 border-b text-green-600 font-bold">Very Affordable</td>
                            <td className="p-4 md:p-5 border-b">Expensive</td>
                          </tr>
                          <tr>
                            <td className="p-4 md:p-5 border-b font-medium">Management</td>
                            <td className="p-4 md:p-5 border-b">One Premium Date</td>
                            <td className="p-4 md:p-5 border-b">Multiple to Track</td>
                          </tr>
                          <tr>
                            <td className="p-4 md:p-5 border-b font-medium">Tax Benefits</td>
                            <td className="p-4 md:p-5 border-b text-blue-600">Eligible (80C/80D)</td>
                            <td className="p-4 md:p-5 border-b text-blue-600">Eligible (80C/80D)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* CTA Section */}
                  <div className="bg-[#1e3a8a] text-white p-8 md:p-12 rounded-3xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                      <Typography variant="h5" className="text-white mb-2 font-bold uppercase">Ready to Upgrade?</Typography>
                      <Typography variant="b2" className="text-blue-100">Add critical illness protection to your plan today.</Typography>
                    </div>
                    <Button size="lg" className="bg-white text-[#1e3a8a] hover:bg-gray-100 font-bold px-10">Get Expert Advice</Button>
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
                              <Typography variant="b1" className="text-gray-600">{faq.a}</Typography>
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