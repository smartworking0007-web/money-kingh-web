"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Clock,
  Folder,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Cpu,
  Leaf,
  Globe,
  Merge,
  PieChart,
  Coins,
  LineChart,
  ShieldCheck,
  TrendingUp,
  Zap,
} from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

interface FAQItem {
  q: string;
  a: string;
}

export const Blog38 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number): void =>
    setActiveFaq(activeFaq === index ? null : index);

  const faqs: FAQItem[] = [
    {
      q: "Q1: Kya 2026 mein Mutual Funds mein invest karna safe hai?",
      a: "Ji haan, Mutual Funds SEBI regulated hote hain aur long-term wealth creation ka sabse parikshit (tested) tareeka hain. Bas apne risk appetite ke hisaab se sahi category chunein.",
    },
    {
      q: "Q2: Debt Consolidation kaise meri investment mein madad karta hai?",
      a: "Jab aap high-interest loans ko merge karke ek 'One EMI' banate hain, toh interest burden kam hota hai. Wo bacha hua paisa jab aap SIP mein lagate hain, toh wo wealth multiply karta hai.",
    },
    {
      q: "Q3: Minimum kitne rupaye se investment shuru ki ja sakti hai?",
      a: "Aap sirf ₹500 mahina ki SIP se shuru kar sakte hain. Shuruat karna zaroori hai, amount chahe chota hi kyu na ho.",
    },
    {
      q: "Q4: AI investing ka kya matlab hai?",
      a: "Iska matlab un tools ka use karna hai jo data analyze karke batate hain ki kab portfolio rebalance karna hai, jisse human emotions decision ke beech nahi aate.",
    },
  ];

  const strategies = [
    {
      icon: <Cpu className="text-blue-500" />,
      title: "AI-Powered Rebalancing",
      desc: "Real-time algorithms se apne portfolio ko adjust karein.",
    },
    {
      icon: <Leaf className="text-green-500" />,
      title: "Focus on ESG & Green Energy",
      desc: "Future-proof stocks jaise Solar aur EV infrastructure mein invest karein.",
    },
    {
      icon: <Globe className="text-purple-500" />,
      title: "Global ETFs",
      desc: "Sirf Indian market nahi, US Tech aur Emerging Markets mein diversification payein.",
    },
    {
      icon: <Merge className="text-orange-500" />,
      title: "One EMI Surplus",
      desc: "Debt consolidate karke bache huye interest ko SIP mein convert karein.",
    },
    {
      icon: <PieChart className="text-indigo-500" />,
      title: "Multi-Asset Funds",
      desc: "Equity, Debt, aur Gold ka sahi mishran ek hi fund mein.",
    },
    {
      icon: <Coins className="text-yellow-600" />,
      title: "Digital Gold & Silver",
      desc: "SGBs aur ETFs ke zariye price appreciation aur extra interest payein.",
    },
    {
      icon: <LineChart className="text-emerald-500" />,
      title: "Index Fund Dominance",
      desc: "Low-cost Index funds se market growth ka pura fayda uthayein.",
    },
    {
      icon: <ShieldCheck className="text-cyan-500" />,
      title: "High-Yield Emergency Fund",
      desc: "6 mahine ka backup safe aur high-interest modern FDs mein rakhein.",
    },
    {
      icon: <Zap className="text-red-500" />,
      title: "Step-Up SIP",
      desc: "Har saal apni income ke saath SIP amount ko 10% badhayein.",
    },
    {
      icon: <TrendingUp className="text-blue-700" />,
      title: "Insurance as a Base",
      desc: "Term aur Health insurance se apne investments ko protect karein.",
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
            title="Top 10 Smart Investment Strategies for 2026: The Future of Wealth"
            category="INVESTMENT"
            author="Sumit Mishra"
            date="May 15, 2026"
            image="/images/blog/blog-38.jpg"
          />
        </div>
      ) : (
        <div className="fixed inset-0 z-40 bg-white overflow-y-auto pt-20 md:pt-28 no-scrollbar animate-in fade-in duration-300 text-left">
          <div className="relative max-w-5xl mx-auto pb-20 px-4 md:px-6 text-left">
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
                  src="/images/blog/blog-38.jpg"
                  alt="Digital dashboard showing diversified investment portfolio with AI insights"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="px-5 py-8 md:px-12 md:py-14">
                <Typography
                  variant="h5"
                  className="text-[#1e3a8a] mb-4 font-bold leading-tight uppercase"
                >
                  Wealth Creation 2026: 10 Smart Strategies
                </Typography>

                <div className="flex gap-4 text-gray-400 mb-8 pb-4 border-b">
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <Typography variant="b2">May 15, 2026</Typography>
                  </div>
                  <div className="flex items-center gap-2">
                    <Folder size={16} />
                    <Typography variant="b2">Investment</Typography>
                  </div>
                </div>

                <Typography
                  variant="s2"
                  className="text-gray-600 mb-10 font-medium leading-relaxed block italic"
                >
                  2026 mein sirf paisa bachana kaafi nahi hai; technology aur
                  sustainability ka sahi istemal karke wealth multiply karna
                  asli strategy hai.
                </Typography>

                <section className="space-y-12 text-left">
                  {/* Top 10 Strategies Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {strategies.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-all"
                      >
                        <div className="flex items-center gap-4 mb-3">
                          <div className="p-2 bg-white rounded-lg shadow-sm">
                            {item.icon}
                          </div>
                          <Typography
                            variant="s1"
                            className="font-bold uppercase tracking-tight"
                          >
                            {idx + 1}. {item.title}
                          </Typography>
                        </div>
                        <Typography
                          variant="b2"
                          className="text-gray-600 ml-12"
                        >
                          {item.desc}
                        </Typography>
                      </div>
                    ))}
                  </div>

                  {/* FAQ Section */}
                  <div className="pt-10 border-t border-gray-100">
                    <Typography
                      variant="h5"
                      className="text-[#1e3a8a] mb-8 font-bold uppercase underline decoration-blue-200 underline-offset-8"
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
                              className="font-bold text-gray-900 leading-tight"
                            >
                              {faq.q}
                            </Typography>
                            {activeFaq === index ? (
                              <ChevronUp size={20} className="text-[#1e3a8a]" />
                            ) : (
                              <ChevronDown
                                size={20}
                                className="text-gray-400"
                              />
                            )}
                          </button>
                          {activeFaq === index && (
                            <div className="p-5 bg-white border-t border-gray-100 animate-in slide-in-from-top-2 duration-300">
                              <Typography
                                variant="b1"
                                className="text-gray-600 leading-relaxed text-left"
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
