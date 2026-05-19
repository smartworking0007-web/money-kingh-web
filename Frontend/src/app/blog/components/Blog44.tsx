"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Clock,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Target,
  Milestone,
  Zap,
  Calculator,
  Rocket,
  CheckCircle2,
  Building2,
  FileText,
  Percent,
} from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

interface FAQItem {
  q: string;
  a: string;
}

export const Blog44 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number): void =>
    setActiveFaq(activeFaq === index ? null : index);

  const faqs: FAQItem[] = [
    {
      q: "Q1: Business Loan ke liye minimum vintage (purana) kitna hona chahiye?",
      a: "Zyadatar banks aur NBFCs kam se kam 2 se 3 saal ka active business registration (GST/ITR ke sath) mangte hain. Agar business naya hai, toh startup-specific schemes check karni chahiye.",
    },
    {
      q: "Q2: Unsecured Business Loan ke liye kya koi collateral dena padta hai?",
      a: "Ji nahi, Unsecured Business Loan ke liye aapko koi property ya asset girvi rakhne ki zaroorat nahi hoti. Ye poori tarah aapke business turnover aur credit score par depend karta hai.",
    },
    {
      q: "Q3: Business Loan par interest rates kitne hote hain?",
      a: "Interest rates generic taur par 11% se lekar 24% per annum tak vary karte hain. Ye aapki financial profile, CIBIL score aur business stability par nirbhar karta hai.",
    },
    {
      q: "Q4: Kya kam Credit Score par bhi loan mil sakta hai?",
      a: "750+ score best maana jata hai. Agar score thoda kam hai, toh aapko interest rate zyada mil sakta hai, ya fir aapko Kisi co-applicant ko add karna pad sakta hai.",
    },
  ];

  const roadmapSteps = [
    {
      step: "01",
      title: "Fix Credit Score (CIBIL)",
      desc: "Apne personal aur business CIBIL score ko 750+ banayein taaki loan approval mein aasani ho.",
      icon: <CheckCircle2 className="text-blue-500" />,
    },
    {
      step: "02",
      title: "Organize Financials",
      desc: "Pichle 2-3 saal ke ITR, Balance Sheet aur pichle 6 mahine ka Bank Statement ready rakhein.",
      icon: <FileText className="text-red-500" />,
    },
    {
      step: "03",
      title: "Choose Loan Type",
      desc: "Decide karein ki aapko short-term Working Capital chahiye ya long-term Expansion Loan.",
      icon: <Building2 className="text-green-500" />,
    },
    {
      step: "04",
      title: "Compare ROI & Fees",
      desc: "Alag-alag banks ke Interest Rates aur Processing Fees ko deeply evaluate karein.",
      icon: <Percent className="text-purple-500" />,
    },
    {
      step: "05",
      title: "Apply Smartly",
      desc: "Ek sath kai banks mein apply na karein, isse CIBIL par negative impact padta hai.",
      icon: <Zap className="text-yellow-500" />,
    },
    {
      step: "06",
      title: "Utilization Plan",
      desc: "Loan amount milne ke baad use core business growth ya high-ROI tasks mein hi use karein.",
      icon: <Milestone className="text-cyan-500" />,
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
            title="Complete Guide to Business Loans in India: Fuel Your Growth"
            category="BUSINESS GROWTH"
            author="Sumit Mishra"
            date="May 19, 2026"
            image="/images/blog/blog-44.jpeg"
          />
        </div>
      ) : (
        <div className="fixed inset-0 z-40 bg-white overflow-y-auto pt-20 md:pt-28 no-scrollbar animate-in fade-in duration-300 text-left">
          <div className="relative max-w-5xl mx-auto pb-20 px-4 md:px-6">
            <div className="mb-6">
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center pt-3 text-gray-500 hover:text-[#1e3a8a] transition-colors cursor-pointer tracking-widest gap-1"
              >
                <ArrowLeft size={14} />
                <Typography variant="caption" as="span" className="font-bold uppercase text-inherit">
                  Back to Blogs
                </Typography>
              </button>
            </div>

            <div className="bg-white rounded-xl overflow-hidden border-gray-100 shadow-sm">
              <div className="relative h-[250px] sm:h-[300px] md:h-[500px] w-full">
                <Image
                  src="/images/blog/blog-44.jpg"
                  alt="A modern office setup with growth charts and a handshake representing successful business funding in India."
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="px-5 py-8 md:px-12 md:py-14 text-justify">
                <Typography
                  variant="h2"
                  className="text-[#1e3a8a] uppercase mt-0"
                >
                  Business Loan Blueprint: Scale Your Enterprise Wisely
                </Typography>

                <div className="flex gap-4 text-gray-400 mb-8 pb-4 border-b overflow-x-auto no-scrollbar">
                  <div className="flex items-center gap-2 shrink-0">
                    <Clock size={16} />
                    <Typography variant="b2" as="span" className="text-gray-400">May 19, 2026</Typography>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Target size={16} />
                    <Typography variant="b2" as="span" className="text-gray-400">Business Growth</Typography>
                  </div>
                </div>

                <Typography
                  variant="s1"
                  className="text-gray-600 mb-10 block"
                >
                  Har business ka ek hi mantra hota hai — Expansion. Lekin sahi time par sahi capital na milna growth ko rok deta hai. India mein Business Loan lena koi mushkil kaam nahi hai, agar aapka strategy aur math clear ho.
                </Typography>

                <section className="space-y-12">
                  {/* Actionable Roadmap Grid */}
                  <div className="space-y-6">
                    <Typography
                      variant="h3"
                      className="text-gray-900 uppercase my-0"
                    >
                      The 6-Step Funding Checklist
                    </Typography>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {roadmapSteps.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-6 bg-white border border-gray-100 rounded-2rem shadow-sm hover:border-blue-100 transition-all flex gap-5 group"
                        >
                          <div className="text-4xl font-black text-gray-100 group-hover:text-blue-50 transition-colors shrink-0 select-none">
                            {item.step}
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              {item.icon}
                              <Typography
                                variant="s2"
                                className="font-bold uppercase tracking-tight text-gray-900"
                              >
                                {item.title}
                              </Typography>
                            </div>
                            <Typography
                              variant="caption"
                              className="text-gray-500 block mt-1"
                            >
                              {item.desc}
                            </Typography>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Compounding Chart Visual / Context Note */}
                  <div className="my-10 text-center">
                    <Typography
                      variant="caption"
                      className="text-gray-400 mt-2 block"
                    >
                      Proper documentation and structure matter more than turnover when seeking optimal loan rates.
                    </Typography>
                  </div>

                  {/* The Money King One-EMI Bridge */}
                  <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[40px] relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <Rocket size={150} />
                    </div>
                    <Typography
                      variant="h4"
                      className="text-blue-400 mb-6 uppercase relative z-10 mt-0"
                    >
                      Money King Advantage: Seamless Business Capital
                    </Typography>
                    <Typography
                      variant="b1"
                      className="text-gray-300 relative z-10"
                    >
                      Multiple dynamic small loans ya over-draft accounts aapke monthly operational cashflow ko block kar dete hain. <strong className="text-white">Money King Business Funding</strong> Solution se aap apne sabhi financial liabilities ko ek single smooth commercial structure mein merge kar sakte hain. Isse aapka net EMI outflow kam hoga aur company expansion ke liye daily working capital hamesha liquidity mein bana rahega.
                    </Typography>
                  </div>

                  {/* Smart Rule Explanation */}
                  <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 flex flex-col md:flex-row gap-6 items-center">
                    <div className="bg-[#1e3a8a] p-4 rounded-2xl text-white shrink-0 shadow-lg">
                      <Calculator size={32} />
                    </div>
                    <div>
                      <Typography
                        variant="h4"
                        className="text-blue-900 uppercase mb-2 my-0"
                      >
                        The FOIR Safety Benchmark
                      </Typography>
                      <Typography
                        variant="b1"
                        className="text-gray-700"
                      >
                        Banks loan dete waqt Fixed Obligation to Income Ratio (FOIR) check karte hain. Koshish karein ki aapke business ki saari monthly EMIs milkar aapke average monthly net profit ke 40-50% se zyada na ho, taaki bad patches mein bhi business par pressure na aaye.
                      </Typography>
                    </div>
                  </div>

                  {/* FAQ Section */}
                  <div className="pt-10 border-t border-gray-100">
                    <Typography
                      variant="h4"
                      className="text-[#1e3a8a] mb-8 uppercase underline decoration-blue-200 underline-offset-8 mt-0"
                    >
                      Frequently Asked Questions
                    </Typography>
                    <div className="space-y-4">
                      {faqs.map((faq, index) => (
                        <div
                          key={index}
                          className="border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:border-blue-200 transition-all"
                        >
                          <button
                            onClick={() => toggleFaq(index)}
                            className="w-full flex items-center justify-between p-5 text-left bg-gray-50/50 hover:bg-white transition-colors"
                          >
                            <Typography
                              variant="s2"
                              className="font-bold text-gray-900"
                            >
                              {faq.q}
                            </Typography>
                            {activeFaq === index ? (
                              <ChevronUp size={20} className="text-[#1e3a8a] shrink-0 ml-4" />
                            ) : (
                              <ChevronDown
                                size={20}
                                className="text-gray-400 shrink-0 ml-4"
                              />
                            )}
                          </button>
                          {activeFaq === index && (
                            <div className="p-5 bg-white border-t border-gray-100 animate-in slide-in-from-top-2 duration-300">
                              <Typography
                                variant="b1"
                                className="text-gray-600"
                              >
                                {faq.a}
                              </Typography>
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
                    className="text-gray-400 flex items-center gap-2 hover:text-[#1e3a8a] transition-all group"
                  >
                    <Typography variant="caption" as="span" className="font-bold uppercase tracking-widest text-inherit">
                      ← Back to Articles
                    </Typography>
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