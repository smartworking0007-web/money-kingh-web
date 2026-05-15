"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Clock,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Wallet,
  TrendingUp,
  Laptop,
  Home,
  Building2,
  PieChart,
  Lightbulb,
  Zap,
} from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

interface FAQItem {
  q: string;
  a: string;
}

export const Blog39 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number): void =>
    setActiveFaq(activeFaq === index ? null : index);

  const faqs: FAQItem[] = [
    {
      q: "Q1: Kya job ke saath multiple income sources banana legal hai?",
      a: "Zyadatar private jobs mein 'Moonlighting' (dusri job) par pabandi hoti hai, lekin passive investments (Stocks, Rental, Dividends) par koi rok nahi hoti. Hamesha apne employment contract ko check karein.",
    },
    {
      q: "Q2: Kam risk mein extra income kaise shuru karein?",
      a: "Dividend paying stocks aur high-yield Debt Mutual Funds sabse kam risk wale passive income sources hain. Iske alawa, aap apni kisi skill ko freelance platforms par sell kar sakte hain.",
    },
    {
      q: "Q3: Rental income ke liye kitna paisa chahiye?",
      a: "Physical property ke liye bada capital chahiye, lekin REITs (Real Estate Investment Trusts) ke zariye aap sirf ₹500-1000 se real estate rental income shuru kar sakte hain.",
    },
    {
      q: "Q4: Passive income aur Active income mein kya farak hai?",
      a: "Active income mein aap apna 'samay' bechte hain (jaise Job). Passive income mein aapka 'paisa' ya 'assets' aapke liye kaam karte hain, chahe aap so rahe hon.",
    },
  ];

  const incomeStreams = [
    { icon: <TrendingUp className="text-green-600" />, title: "Dividend Investing", desc: "Aisi companies chunein jo har saal apne profit ka hissa (Dividends) shareholders ko deti hain." },
    { icon: <Building2 className="text-blue-600" />, title: "REITs (Digital Rental)", desc: "Bina property kharide commercial real estate se monthly rental income payein." },
    { icon: <Laptop className="text-purple-600" />, title: "Skill-Based Freelancing", desc: "Content writing, coding, ya design skills ko global clients ko sell karein." },
    { icon: <PieChart className="text-orange-600" />, title: "Mutual Fund SWP", desc: "Systematic Withdrawal Plan ke zariye apne corpus se har mahine 'salary' generate karein." },
    { icon: <Home className="text-emerald-600" />, title: "P2P Lending", desc: "Verified platforms par logon ko loan dekar bank FD se zyada interest earn karein." },
    { icon: <Zap className="text-yellow-600" />, title: "Affiliate Marketing", desc: "Digital products ya gadgets recommend karke commission earn karein." },
  ];

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div onClick={() => setIsOpen(true)} className="cursor-pointer w-full flex justify-center px-4">
          <BlogCard1
            title="How to Build Multiple Income Sources in India: A 2026 Strategy"
            category="WEALTH MANAGEMENT"
            author="Sumit Mishra"
            date="May 16, 2026"
            image="/images/blog/blog-39.jpg"
          />
        </div>
      ) : (
        <div className="fixed inset-0 z-40 bg-white overflow-y-auto pt-20 md:pt-28 no-scrollbar animate-in fade-in duration-300 text-left">
          <div className="relative max-w-5xl mx-auto pb-20 px-4 md:px-6">
            <div className="mb-6">
              <button onClick={() => setIsOpen(false)} className="flex items-center pt-3 text-gray-500 hover:text-[#1e3a8a] transition-colors font-bold uppercase text-[10px] cursor-pointer tracking-widest">
                <ArrowLeft size={14} /> Back to Blogs
              </button>
            </div>

            <div className="bg-white rounded-xl overflow-hidden border-gray-100 shadow-sm">
              <div className="relative h-[250px] sm:h-[300px] md:h-[500px] w-full">
                <Image
                  src="/images/blog/blog-39.jpg"
                  alt="A professional visual representing multiple income streams like dividends, real estate, and digital business"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="px-5 py-8 md:px-12 md:py-14 text-justify">
                <Typography variant="h5" className="text-[#1e3a8a] mb-4 font-bold leading-tight uppercase">
                  Income Diversification: One Salary is Never Enough
                </Typography>

                <div className="flex gap-4 text-gray-400 mb-8 pb-4 border-b overflow-x-auto no-scrollbar">
                  <div className="flex items-center gap-2 shrink-0">
                    <Clock size={16} />
                    <Typography variant="b2">May 16, 2026</Typography>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Wallet size={16} />
                    <Typography variant="b2">Wealth Management</Typography>
                  </div>
                </div>

                <Typography variant="s2" className="text-gray-600 mb-10 font-medium leading-relaxed block ">
                  Warren Buffett ne kaha tha, &quot;Agar aap so rahe hain aur aapka paisa nahi badh raha, toh aapko marte dam tak kaam karna padega.&quot; India mein extra income ke naye raaste ab sabke liye khule hain.
                </Typography>

                <section className="space-y-12">
                  {/* The Income Funnel Section */}
                  <div className="bg-blue-50 p-6 md:p-8 rounded-3xl border border-blue-100 flex flex-col md:flex-row gap-6 items-center">
                    <div className="bg-blue-600 p-4 rounded-2xl text-white shrink-0 shadow-lg">
                      <Lightbulb size={32} />
                    </div>
                    <div>
                      <Typography variant="h5" className="font-bold text-blue-900 uppercase mb-2 text-left">The Rule of 3</Typography>
                      <Typography variant="b1" className="text-gray-700 leading-relaxed text-left">
                        Aapke paas kam se kam 3 tarah ki income honi chahiye: 1. Active (Job), 2. Portfolio (Investment returns), aur 3. Passive (Bina mehnat ke aane wala paisa).
                      </Typography>
                    </div>
                  </div>

                  {/* 6 Streams Grid */}
                  <div className="space-y-6 text-left">
                    <Typography variant="h5" className="font-bold text-gray-900 uppercase">Top Income Streams in India</Typography>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {incomeStreams.map((stream, idx) => (
                        <div key={idx} className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all">
                          <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-4 border border-gray-100">
                            {stream.icon}
                          </div>
                          <Typography variant="s1" className="font-bold mb-2 block">{stream.title}</Typography>
                          <Typography variant="caption" className="text-gray-500 leading-relaxed">{stream.desc}</Typography>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* The Surplus Strategy Banner */}
                  <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[40px] relative overflow-hidden shadow-xl">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                       <Zap size={150} />
                    </div>
                    <Typography variant="h5" className="text-blue-400 mb-6 font-bold uppercase relative z-10 text-left">Money King Tip: The One EMI Surplus</Typography>
                    <Typography variant="b1" className="text-gray-300 leading-relaxed relative z-10 text-left">
                      Apne multiple small loans ko <strong>Money King &quot;One EMI&quot;</strong> solution se merge karein. Jo monthly interest aap bachayenge, usse direct dividend-paying stocks mein invest karein. Aapka purana debt khatam hoga aur naya income source shuru hoga!
                    </Typography>
                  </div>

                  {/* FAQ Section */}
                  <div className="pt-10 border-t border-gray-100 text-left">
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
                              <Typography variant="b1" className="text-gray-600 leading-relaxed text-left">{faq.a}</Typography>
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