"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Clock,
  Folder,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Zap,
  BarChart3,
  SearchCheck,
  BrainCircuit,
  Eye,
} from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

interface FAQItem {
  q: string;
  a: string;
}

export const Blog34 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number): void =>
    setActiveFaq(activeFaq === index ? null : index);

  const faqs: FAQItem[] = [
    {
      q: "Q1: How does AI auditing benefit me as an individual client?",
      a: "It provides an extra layer of safety. Because AI audits 100% of the data (not just samples), the risk of financial errors with your policy or investment is significantly reduced. It ensures the company you trust remains healthy and transparent.",
    },
    {
      q: "Q2: Is AI-driven auditing more expensive?",
      a: "Actually, it's the opposite. While the initial setup is high, it reduces long-term costs by preventing massive errors and detecting fraud early. This efficiency allows us to provide more competitive solutions to our clients.",
    },
    {
      q: "Q3: Can AI handle complex insurance claims better than humans?",
      a: "AI is superior at processing initial data and checking for missing documents. However, complex claims involving unique human circumstances still require the empathy and professional judgment of our human team.",
    },
    {
      q: "Q4: How does AI handle my data privacy during an audit?",
      a: "Data security is our top priority. AI auditing tools use advanced encryption and 'privacy-by-design' principles. They often prove more secure than manual handling because they limit the number of people viewing sensitive info.",
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
            title="The Future of Financial Integrity: Leveraging AI in Insurance Auditing"
            category="FINTECH"
            author="Sumit Mishra"
            date="May 15, 2026"
            image="/images/blog/blog-34.jpeg"
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
                  src="/images/blog/blog-34.jpeg"
                  alt="Professional people working with high-quality digital interfaces and AI data."
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="px-5 py-8 md:px-12 md:py-14 text-justify">
                <Typography variant="h5" className="text-[#1e3a8a] mb-4 font-bold leading-tight uppercase">
                  AI in Insurance Auditing: High-Precision Oversight
                </Typography>

                <div className="flex gap-4 text-gray-400 mb-8 pb-4 border-b overflow-x-auto no-scrollbar">
                  <div className="flex items-center gap-2 shrink-0">
                    <Clock size={16} />
                    <Typography variant="b2">May 15, 2026</Typography>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Folder size={16} />
                    <Typography variant="b2">Fintech</Typography>
                  </div>
                </div>

                <Typography variant="s2" className="text-gray-600 mb-10 font-medium leading-relaxed block italic">
                  Staying ahead means embracing technology that enhances security. AI-driven auditing provides a level of transparency and speed that traditional methods simply cannot match.
                </Typography>

                <section className="space-y-12">
                  {/* Evolution Section */}
                  <div className="bg-blue-50 p-6 md:p-8 rounded-3xl border border-blue-100 flex flex-col md:flex-row gap-6 items-center">
                    <div className="bg-blue-600 p-4 rounded-2xl text-white shrink-0">
                      <BarChart3 size={32} />
                    </div>
                    <div>
                      <Typography variant="h5" className="font-bold text-blue-900 uppercase mb-2">Beyond Selective Checking</Typography>
                      <Typography variant="b1" className="text-gray-700 leading-relaxed">
                        For decades, auditing relied on sampling. Today, AI analyzed <strong>100% of the data</strong>, ensuring every policy and transaction is accounted for without human oversight risks.
                      </Typography>
                    </div>
                  </div>

                  {/* Core Pillars Grid */}
                  <div className="space-y-6">
                    <Typography variant="h5" className="font-bold text-gray-900 uppercase">Core Pillars of AI Auditing</Typography>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-6 border border-gray-100 rounded-2xl shadow-sm">
                        <Zap className="text-orange-500 mb-3" size={24} />
                        <Typography variant="s1" className="font-bold mb-2 block uppercase">High-Velocity Extraction</Typography>
                        <Typography variant="b2" className="text-gray-600">NLP reads unstructured PDFs/images to verify figures against ledgers instantly, eliminating manual entry errors.</Typography>
                      </div>
                      <div className="p-6 border border-gray-100 rounded-2xl shadow-sm">
                        <SearchCheck className="text-blue-500 mb-3" size={24} />
                        <Typography variant="s1" className="font-bold mb-2 block uppercase">IBNR Precision</Typography>
                        <Typography variant="b2" className="text-gray-600">Machine learning analyzes decades of claim patterns to predict future liabilities (Technical Provisions) with high accuracy.</Typography>
                      </div>
                      <div className="p-6 border border-gray-100 rounded-2xl shadow-sm">
                        <Eye className="text-red-500 mb-3" size={24} />
                        <Typography variant="s1" className="font-bold mb-2 block uppercase">Fraud Watchdog</Typography>
                        <Typography variant="b2" className="text-gray-600">AI acts as a 24/7 guardian, flagging subtle anomalies and suspicious document alterations in real-time.</Typography>
                      </div>
                      <div className="p-6 border border-gray-100 rounded-2xl shadow-sm">
                        <ShieldCheck className="text-green-500 mb-3" size={24} />
                        <Typography variant="s1" className="font-bold mb-2 block uppercase">Continuous Compliance</Typography>
                        <Typography variant="b2" className="text-gray-600">Automated systems audit internal processes against the latest RBI and IRDAI frameworks to ensure legal safety.</Typography>
                      </div>
                    </div>
                  </div>

                  {/* Human Centric Banner */}
                  <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[40px] relative overflow-hidden shadow-xl">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                       <BrainCircuit size={80} className="text-blue-400 shrink-0" />
                       <div>
                        <Typography variant="h5" className="text-white mb-4 font-bold uppercase">Human-in-the-Loop Model</Typography>
                        <Typography variant="b1" className="text-gray-300 leading-relaxed">
                          AI finds the discrepancy, but our experts understand the <strong>&quot;why&quot;</strong>. At Money King, technology provides the data, but our consultants provide the wisdom for your best financial choices.
                        </Typography>
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