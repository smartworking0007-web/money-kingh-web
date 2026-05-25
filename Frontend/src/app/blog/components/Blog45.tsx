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
  FileCheck,
  Smartphone,
  AlertTriangle,
} from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

interface FAQItem {
  q: string;
  a: string;
}

export const Blog45 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number): void =>
    setActiveFaq(activeFaq === index ? null : index);

  const faqs: FAQItem[] = [
    {
      q: "Q1: Instant Business Loan kitni der mein approve aur disburse hota hai?",
      a: "Fintech platforms aur digital lenders par documents verify hote hi approval minto mein mil jata hai, aur loan amount 24 to 48 hours ke andar aapke bank account mein credit (disburse) ho jata hai.",
    },
    {
      q: "Q2: Kya Instant Loan ke liye physical verification zaroori hai?",
      a: "Ji nahi, zyadatar top digital providers poora process 100% paperless aur online rakhte hain. E-KYC aur digital bank authentication ke zariye bina kisi physical document verification ke kaam ho jata hai.",
    },
    {
      q: "Q3: Instant Business Loan lene ke liye kya criteria hota hai?",
      a: "Aapke business ka operational runtime kam se kam 1 saal hona chahiye, monthly digital sales ya clean bank account statement active hona chahiye, aur CIBIL score preferrably 700 se upar hona chahiye.",
    },
    {
      q: "Q4: Instant Loans par fees traditional loans se zyada hoti hain?",
      a: "Kyunki isme convenience aur instant disbursement milti hai, isliye iska interest rate traditional bank loans ke muqable thoda premium (14% - 28%) ho sakta hai, sath hi 2-3% processing fee hoti hai.",
    },
  ];

  const roadmapSteps = [
    {
      step: "01",
      title: "Digital KYC Setup",
      desc: "Apna Aadhaar card, PAN card aur active mobile number ready rakhein jo bank se linked ho.",
      icon: <Smartphone className="text-blue-500" />,
    },
    {
      step: "02",
      title: "Fetch Net Banking Logs",
      desc: "Pichle 6 mahine ka bank statement download karke rakhein ya net banking credentials se directly link karein.",
      icon: <FileCheck className="text-red-500" />,
    },
    {
      step: "03",
      title: "Check Pre-Approved Offers",
      desc: "Apne bank portal ya corporate account mein login karke check karein ki koi active pre-approved offer toh nahi hai.",
      icon: <CheckCircle2 className="text-green-500" />,
    },
    {
      step: "04",
      title: "Review Repayment Tenure",
      desc: "Apne monthly collections ke basis par 12 se 36 months tak ka suitable flexi-tenure select karein.",
      icon: <Calculator className="text-purple-500" />,
    },
    {
      step: "05",
      title: "E-Mandate Setup",
      desc: "Auto-debit setup karne ke liye Net Banking ya Debit Card ke throug e-NACH/e-mandate verify karein.",
      icon: <Zap className="text-yellow-500" />,
    },
    {
      step: "06",
      title: "Instant Capital Credit",
      desc: "Digital signature (E-Sign) complete karte hi funds directly aapke registered current account mein transfer ho jayenge.",
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
            title="Instant Business Loans in India: Fast Cash for Emergency Capital"
            category="FINANCIAL AGILITY"
            author="Sumit Mishra"
            date="May 21, 2026"
            image="/images/blog/blog-45.jpeg"
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
                  src="/images/blog/blog-45.jpeg"
                  alt="A business owner processing a fast online business loan setup using a laptop and phone, with graphical overlays of speed and capital growth."
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
                  Instant Business Loans: Quick Emergency Funding Guide
                </Typography>

                <div className="flex gap-4 text-gray-400 mb-8 pb-4 border-b overflow-x-auto no-scrollbar">
                  <div className="flex items-center gap-2 shrink-0">
                    <Clock size={16} />
                    <Typography variant="b2" as="span" className="text-gray-400">May 20, 2026</Typography>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Target size={16} />
                    <Typography variant="b2" as="span" className="text-gray-400">Financial Agility</Typography>
                  </div>
                </div>

                <Typography
                  variant="s1"
                  className="text-gray-600 mb-10 block"
                >
                  Kai baar bade supply orders complete karne, inventory restock karne ya unexpected commercial expenses ko manage karne ke liye turant fund ki zaroorat hoti hai. Aise samay traditional bank process ka wait karna opportunity ko miss karne jaisa hai. Fintech aur Digital Instant Business Loans isi problem ka 100% online solution hain.
                </Typography>

                <section className="space-y-12">
                  {/* Actionable Roadmap Grid */}
                  <div className="space-y-6">
                    <Typography
                      variant="h3"
                      className="text-gray-900 uppercase my-0"
                    >
                      The 6-Step Instant Disbursement Pipeline
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

                  {/* Context Note */}
                  <div className="my-10 text-center">
                    <Typography
                      variant="caption"
                      className="text-gray-400 mt-2 block"
                    >
                      Instant credit products scale on current banking turnover history rather than historical multi-year tax reports.
                    </Typography>
                  </div>

                  {/* The Money King Instant Bridge */}
                  <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[40px] relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <Rocket size={150} />
                    </div>
                    <Typography
                      variant="h4"
                      className="text-blue-400 mb-6 uppercase relative z-10 mt-0"
                    >
                      Money King Advantage: Lightning Fast Business Capital
                    </Typography>
                    <Typography
                      variant="b1"
                      className="text-gray-300 relative z-10"
                    >
                      Bina kisi verification delays ke immediate funds recover karein. <strong className="text-white">Money King Digital Fast-Track Loans</strong> aapko seedhe access dete hain customizable automated credit evaluation se. Yeh tool aapki immediate cash requirement ko bina paperwork delays ke handle karta hai aur real-time processing bypasses provide karta hai jo standard channels ke comparison mein aapko capital approval rate bohot sharp deta hai.
                    </Typography>
                  </div>

                  {/* Smart Rule Explanation */}
                  <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 flex flex-col md:flex-row gap-6 items-center">
                    <div className="bg-[#1e3a8a] p-4 rounded-2xl text-white shrink-0 shadow-lg">
                      <AlertTriangle size={32} />
                    </div>
                    <div>
                      <Typography
                        variant="h4"
                        className="text-blue-900 uppercase mb-2 my-0"
                      >
                        The Golden Rule of Instant Capital
                      </Typography>
                      <Typography
                        variant="b1"
                        className="text-gray-700"
                      >
                        Instant Business Loans tabhi lein jab aapka money turnaround clear ho. Yeh high-speed short-term bridging funds hote hain, isliye inko kisi heavy capital purchase mein lagane ke bajaye running supply nodes, sudden orders complete karne ya transient gaps ko manage karne ke liye hi upyog mein lana chahiye.
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