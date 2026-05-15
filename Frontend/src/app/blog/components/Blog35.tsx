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
  Scale,
  FileSearch,
  Database,
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

export const Blog35 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number): void =>
    setActiveFaq(activeFaq === index ? null : index);

  const faqs: FAQItem[] = [
    {
      q: "Q1: How does AI auditing benefit me as an individual client?",
      a: "It provides an extra layer of safety. Because AI audits 100% of the data, the risk of the company making a financial error with your policy or investment is significantly reduced. It ensures financial health and total transparency.",
    },
    {
      q: "Q2: Is AI-driven auditing more expensive?",
      a: "On the contrary, while the initial investment is high, it reduces long-term costs by preventing errors, detecting fraud early, and automating manual tasks, allowing for more competitive solutions for clients.",
    },
    {
      q: "Q3: Can AI handle complex insurance claims better than humans?",
      a: "AI excels at processing data and checking for technical errors. However, complex claims involving unique human circumstances still require the empathy and professional judgment of our human experts.",
    },
    {
      q: "Q4: How does AI handle my data privacy during an audit?",
      a: "Data security is the top priority. AI auditing tools are built with advanced encryption and 'privacy-by-design' principles. They process data in secure environments, often safer than manual handling.",
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
            date="May 16, 2026"
            image="/images/blog/blog-35.jpeg"
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
                  src="/images/blog/blog-35.jpeg"
                  alt="Professional individuals working with advanced digital interfaces and AI financial data."
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="px-5 py-8 md:px-12 md:py-14 text-justify">
                <Typography variant="h5" className="text-[#1e3a8a] mb-4 font-bold leading-tight uppercase">
                  AI in Auditing: Reshaping Financial Integrity
                </Typography>

                <div className="flex gap-4 text-gray-400 mb-8 pb-4 border-b overflow-x-auto no-scrollbar">
                  <div className="flex items-center gap-2 shrink-0">
                    <Clock size={16} />
                    <Typography variant="b2">May 16, 2026</Typography>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Folder size={16} />
                    <Typography variant="b2">Fintech</Typography>
                  </div>
                </div>

                <Typography variant="s2" className="text-gray-600 mb-10 font-medium leading-relaxed block ">
                  In an era of rapid digital transformation, AI is moving insurance auditing from selective sampling to comprehensive 100% data oversight.
                </Typography>

                <section className="space-y-12">
                  {/* Core Evolution Section */}
                  <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-100 flex flex-col md:flex-row gap-6 items-center">
                    <div className="bg-blue-600 p-4 rounded-2xl text-white shrink-0">
                      <Database size={32} />
                    </div>
                    <div>
                      <Typography variant="h5" className="font-bold text-slate-900 uppercase mb-2">The Sampling Evolution</Typography>
                      <Typography variant="b1" className="text-gray-700 leading-relaxed">
                        Traditional auditing checked a small percentage of transactions. AI analyzes <strong>100% of the data</strong>, ensuring every policy, claim, and transaction is accounted for with zero oversight.
                      </Typography>
                    </div>
                  </div>

                  {/* Core Pillars Grid */}
                  <div className="space-y-6">
                    <Typography variant="h5" className="font-bold text-gray-900 uppercase">Strategic AI Pillars</Typography>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-6 border border-gray-100 rounded-2xl shadow-sm">
                        <Zap className="text-orange-500 mb-3" size={24} />
                        <Typography variant="s1" className="font-bold mb-2 block uppercase">High-Velocity Extraction</Typography>
                        <Typography variant="b2" className="text-gray-600 leading-relaxed">NLP reads unstructured PDFs and images to verify figures against ledgers automatically, eliminating manual entry errors.</Typography>
                      </div>
                      <div className="p-6 border border-gray-100 rounded-2xl shadow-sm">
                        <FileSearch className="text-blue-500 mb-3" size={24} />
                        <Typography variant="s1" className="font-bold mb-2 block uppercase">IBNR Precision</Typography>
                        <Typography variant="b2" className="text-gray-600 leading-relaxed">Algorithms analyze decades of patterns to predict future liabilities (Incurred But Not Reported) with mathematical accuracy.</Typography>
                      </div>
                      <div className="p-6 border border-gray-100 rounded-2xl shadow-sm">
                        <ShieldCheck className="text-red-500 mb-3" size={24} />
                        <Typography variant="s1" className="font-bold mb-2 block uppercase">Fraud Watchdog</Typography>
                        <Typography variant="b2" className="text-gray-600 leading-relaxed">Anomaly detection flags suspicious document alterations and unusual claim frequencies in real-time, 24/7.</Typography>
                      </div>
                      <div className="p-6 border border-gray-100 rounded-2xl shadow-sm">
                        <Scale className="text-green-500 mb-3" size={24} />
                        <Typography variant="s1" className="font-bold mb-2 block uppercase">Continuous Compliance</Typography>
                        <Typography variant="b2" className="text-gray-600 leading-relaxed">Systems are programmed with the latest regulatory frameworks to ensure internal processes always follow legal boundaries.</Typography>
                      </div>
                    </div>
                  </div>

                  {/* Human-in-the-Loop Section */}
                  <div className="bg-blue-900 text-white p-8 md:p-12 rounded-[40px] relative overflow-hidden shadow-xl">
                    <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                      <UserCheck size={60} className="text-blue-300 shrink-0" />
                      <div>
                        <Typography variant="h5" className="text-white mb-4 font-bold uppercase">The Human-in-the-Loop Model</Typography>
                        <Typography variant="b1" className="text-blue-100 leading-relaxed">
                          AI provides the precision, but our consultants provide the wisdom. This partnership ensures contextual understanding, ethical oversight, and strategic advice for your best financial future.
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