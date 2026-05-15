"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Clock,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Activity,
  AlertTriangle,
  Layers,
  TrendingDown,
  HelpCircle,
  PiggyBank,
  CheckCircle2,
} from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

interface FAQItem {
  q: string;
  a: string;
}

export const Blog36 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number): void =>
    setActiveFaq(activeFaq === index ? null : index);

  const faqs: FAQItem[] = [
    {
      q: "Q1: Emergency Fund mein kitna paisa hona chahiye?",
      a: "Ideal tarike se aapke kam se kam 6 mahine ke pure kharche (EMIs, rent, food, insurance premiums) ka paisa liquid cash ya safe savings account/FD mein hona chahiye. Agar business karte hain, toh ise 9-12 mahine tak badhayein.",
    },
    {
      q: "Q2: Kya main apna Emergency Fund Mutual Funds ya Stocks mein rakh sakta hoon?",
      a: "Nahi. Emergency fund ka maksad 'Return' kamana nahi, balki 'Capital Preservation' aur 'Instant Liquidity' hai. Agar market down hai aur aapko paise ki zaroorat pad gayi, toh aapko apna portfolio ghate (loss) mein bechna padega.",
    },
    {
      q: "Q3: Emergency asset allocate karne ke liye kaun si jagah best hai?",
      a: "Aap apne fund ko 3 hisson mein divide kar sakte hain: 20% instant cash ya high-yield savings account mein, 50% kisi bade commercial bank ki multi-option FD mein, aur baaki 30% Liquid/Arbitrage Mutual Funds mein.",
    },
    {
      q: "Q4: Credit Card limit ko Emergency Fund ki tarah use kiya ja sakta hai?",
      a: "Bilkul nahi. Credit card ek debt tool hai, income nahi. Emergency ke waqt card use karne se aap agle mahine ek aur bade financial trap (high interest) mein phans sakte hain.",
    },
  ];

  const frameworkSteps = [
    {
      idx: "01",
      title: "Isolate Fixed Expenses",
      desc: "Apne genuine mandatory costs ko filter karein. Isme lifestyle shopping nahi, sirf essential survival bills aur liabilities honi chahiye.",
      icon: <Layers className="text-blue-500" />,
    },
    {
      idx: "02",
      title: "Assess Income Stability",
      desc: "Single-income households aur freelancers ko double-income corporate employees ke muqable bada cash cushion maintain karna chahiye.",
      icon: <Activity className="text-red-500" />,
    },
    {
      idx: "03",
      title: "Build in Tiers",
      desc: "Pura paisa ek sath lock mat karein. Flexibility maintain karne ke liye use liquid cash, sweep-in FDs aur arbitrage funds mein split karein.",
      icon: <PiggyBank className="text-green-500" />,
    },
    {
      idx: "04",
      title: "Define an Emergency",
      desc: "Medical emergencies ya job loss asli sankat hain. Gadget upgrades ya vacation deals ke liye is fund ko touch karna strict rule-break hai.",
      icon: <AlertTriangle className="text-purple-500" />,
    },
    {
      idx: "05",
      title: "Automate the Overflow",
      desc: "Ek baar jab aapka target emergency corpus touch ho jaye, toh har mahine bacha hua overflow paisa equity market compounding mein direct route karein.",
      icon: <CheckCircle2 className="text-yellow-500" />,
    },
    {
      idx: "06",
      title: "Inflation Rebalancing",
      desc: "Har saal inflation ke sath aapka kharcha badhta hai. Isiliye apne emergency buffer ko saal mein ek baar review karke top-up zaroor karein.",
      icon: <TrendingDown className="text-cyan-500" />,
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
            title="The Emergency Fund Blueprint: Securing Assets Against Volatility"
            category="RISK MANAGEMENT"
            author="Sumit Mishra"
            date="May 16, 2026"
            image="/images/blog/blog-36.jpeg"
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
                  src="/images/blog/blog-36.jpeg"
                  alt="A secure umbrella protecting financial assets from dark storm clouds, symbolizing emergency fund protection."
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
                  The Emergency Fund Blueprint: Securing Assets Against Volatility
                </Typography>

                <div className="flex gap-4 text-gray-400 mb-8 pb-4 border-b overflow-x-auto no-scrollbar">
                  <div className="flex items-center gap-2 shrink-0">
                    <Clock size={16} />
                    <Typography variant="b2" as="span" className="text-gray-400">May 16, 2026</Typography>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <ShieldCheck size={16} />
                    <Typography variant="b2" as="span" className="text-gray-400">Risk Management</Typography>
                  </div>
                </div>

                <Typography
                  variant="s1"
                  className="text-gray-600 mb-10 block italic"
                >
                  Bina ek solid emergency buffer ke investing shuru karna, bina
                  parachute ke plane se koodne jaisa hai. Market fluctuations se
                  pehle aapko apni baseline financial life ko secure karna hoga.
                </Typography>

                <section className="space-y-12">
                  {/* Action Roadmap Grid */}
                  <div className="space-y-6">
                    <Typography
                      variant="h3"
                      className="text-gray-900 uppercase my-0"
                    >
                      6 Elements of an Unbreakable Emergency Fund
                    </Typography>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {frameworkSteps.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-6 bg-white border border-gray-100 rounded-2rem shadow-sm hover:border-blue-100 transition-all flex gap-5 group"
                        >
                          <div className="text-4xl font-black text-gray-100 group-hover:text-blue-50 transition-colors shrink-0 select-none">
                            {item.idx}
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

                  {/* Dark Value Focus Banner */}
                  <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[40px] relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <ShieldCheck size={150} />
                    </div>
                    <Typography
                      variant="h4"
                      className="text-blue-400 mb-6 uppercase relative z-10 mt-0"
                    >
                      Defending Your Long-Term Portfolio
                    </Typography>
                    <Typography
                      variant="b1"
                      className="text-gray-300 relative z-10"
                    >
                      Emergency fund aapke savings account ka balance badhane ke liye nahi hota—ye aapke active investments ka <strong className="text-white">bodyguard</strong> hai. Jab life mein koi kachha mod aata hai, toh ye liquid fund aage aakar shock absorb karta hai, taaki aapki long-term wealth compounding pipeline (SIPs, Stocks) bina kisi break ke chalti rahe.
                    </Typography>
                  </div>

                  {/* Operational Feature Card */}
                  <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 flex flex-col md:flex-row gap-6 items-center">
                    <div className="bg-[#1e3a8a] p-4 rounded-2xl text-white shrink-0 shadow-lg">
                      <HelpCircle size={32} />
                    </div>
                    <div>
                      <Typography
                        variant="h4"
                        className="text-blue-900 uppercase mb-2 my-0"
                      >
                        Debt Optimization is Defensive Wealth
                      </Typography>
                      <Typography
                        variant="b1"
                        className="text-gray-700"
                      >
                        Agar aapki income ka bada hissa bikhre hue high-interest short term loans mein ja raha hai, toh emergency fund build karna mushkil ho jata hai. Money King &quot;One EMI&quot; logic ke through aap apni multiple toxic interest pipelines ko clean karke surplus cash release kar sakte hain. Wahi surplus aapka security foundation jaldi khada karega.
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