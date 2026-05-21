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
  TrendingUp,
  ShieldCheck,
  Zap,
  Wallet,
  Calculator,
  Rocket,
  CheckCircle2,
} from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

interface FAQItem {
  q: string;
  a: string;
}

export const Blog43 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number): void =>
    setActiveFaq(activeFaq === index ? null : index);

  const faqs: FAQItem[] = [
    {
      q: "Q1: Financial Freedom ka asli matlab kya hai?",
      a: "Iska matlab ye nahi ki aapka kaam band ho jaye, balki ye hai ki aapke paas itna 'Passive Income' ho jo aapke saare kharche cover kar le, taaki aap 'majboori' mein nahi balki 'pasand' se kaam karein.",
    },
    {
      q: "Q2: Kya ₹50,000 ki salary wala insaan 40 se pehle free ho sakta hai?",
      a: "Ji haan, agar aap jaldi shuru karein aur 'Step-up SIP' ka use karein. Focus 'income' se zyada 'savings rate' aur 'compounding' par hona chahiye.",
    },
    {
      q: "Q3: Pehle ghar kharidna chahiye ya invest karna chahiye?",
      a: "Financial freedom ke liye 'Equity' (Stocks/MFs) assets zyada tezi se grow karte hain. Agar aap rent par reh kar apna capital invest karte hain, toh aap goal ke paas jaldi pahuchenge.",
    },
    {
      q: "Q4: Emergency fund aur Insurance kitna zaroori hai?",
      a: "Ye aapka foundation hai. Bina Health aur Term Insurance ke, ek medical emergency aapki barson ki mehnat (investments) ko minto mein khatam kar sakti hai.",
    },
  ];

  const roadmapSteps = [
    {
      step: "01",
      title: "Calculate Your FIRE Number",
      desc: "Apne annual kharche ka 25x se 30x amount target karein (Financial Independence, Retire Early).",
      icon: <Calculator className="text-blue-500" />,
    },
    {
      step: "02",
      title: "Kill Toxic Debt",
      desc: "High-interest credit cards aur personal loans ko pehle khatam karein taaki cashflow free ho.",
      icon: <ShieldCheck className="text-red-500" />,
    },
    {
      step: "03",
      title: "Aggressive Savings Rate",
      desc: "Apni income ka kam se kam 40-50% invest karne ki koshish karein.",
      icon: <Wallet className="text-green-500" />,
    },
    {
      step: "04",
      title: "Master Asset Allocation",
      desc: "Index funds, Mid-caps aur Thoda Gold—diversify karein taaki risk manage ho sake.",
      icon: <TrendingUp className="text-purple-500" />,
    },
    {
      step: "05",
      title: "Build Passive Income",
      desc: "Real estate (REITs), dividends ya digital assets se side income shuru karein.",
      icon: <Zap className="text-yellow-500" />,
    },
    {
      step: "06",
      title: "Review & Rebalance",
      desc: "Har 6 mahine mein apne portfolio ko check karein aur goals ke hisaab se adjust karein.",
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
            title="Step-by-Step Guide to Financial Freedom Before 40"
            category="WEALTH STRATEGY"
            author="Sumit Mishra"
            date="May 20, 2026"
            image="/images/blog/blog-43.jpg"
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
                  src="/images/blog/blog-43.jpg"
                  alt="A person standing on top of a mountain of coins looking at a golden sunrise, representing financial freedom."
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
                  The Roadmap to Freedom: Retire Rich, Retire Early
                </Typography>

                <div className="flex gap-4 text-gray-400 mb-8 pb-4 border-b overflow-x-auto no-scrollbar">
                  <div className="flex items-center gap-2 shrink-0">
                    <Clock size={16} />
                    <Typography variant="b2" as="span" className="text-gray-400">May 19, 2026</Typography>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Target size={16} />
                    <Typography variant="b2" as="span" className="text-gray-400">Wealth Strategy</Typography>
                  </div>
                </div>

                <Typography
                  variant="s1"
                  className="text-gray-600 mb-10 block "
                >
                  Financial freedom ka matlab kaam band karna nahi, balki
                  &quot;No&quot; kehne ki taqat hona hai. 40 ki umar tak free
                  hona koi luck nahi, balki ek calculated math hai.
                </Typography>

                <section className="space-y-12">
                  {/* Actionable Roadmap Grid */}
                  <div className="space-y-6">
                    <Typography
                      variant="h3"
                      className="text-gray-900 uppercase my-0"
                    >
                      The 6-Step Freedom Roadmap
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

                  {/* Compounding Chart Visual */}
                  <div className="my-10 text-center">
                    <Typography
                      variant="caption"
                      className="text-gray-400 mt-2 block"
                    >
                      Savings rate is more important than investment returns in
                      the early stages.
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
                      Money King Strategy: Unlock Your Surplus
                    </Typography>
                    <Typography
                      variant="b1"
                      className="text-gray-300 relative z-10"
                    >
                      Financial freedom mein sabse bada rasta &quot;Interest
                      Payment&quot; hai. Apne saare credit cards aur small EMIs
                      ko <strong className="text-white">Money King &quot;One EMI&quot;</strong>{" "}
                      solution se merge karein. Isse bacha hua 20-30% interest
                      har mahine aapki &quot;Freedom SIP&quot; mein jayega, jo
                      aapko goal tak 4 saal pehle pahuncha sakta hai.
                    </Typography>
                  </div>

                  {/* 4% Rule Explanation */}
                  <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 flex flex-col md:flex-row gap-6 items-center">
                    <div className="bg-[#1e3a8a] p-4 rounded-2xl text-white shrink-0 shadow-lg">
                      <CheckCircle2 size={32} />
                    </div>
                    <div>
                      <Typography
                        variant="h4"
                        className="text-blue-900 uppercase mb-2 my-0"
                      >
                        The 4% Safe Withdrawal Rule
                      </Typography>
                      <Typography
                        variant="b1"
                        className="text-gray-700"
                      >
                        Jab aapka corpus aapke annual kharche ka 25 guna ho
                        jaye, toh aap har saal uska 4% nikaal sakte hain.
                        History batati hai ki aapka paisa kabhi khatam nahi hoga
                        kyunki baaki 96% invest reh kar grow karta rahega.
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