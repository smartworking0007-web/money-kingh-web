"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Clock,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  TrendingUp,
  PieChart,
  Target,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Rocket,
} from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

interface FAQItem {
  q: string;
  a: string;
}

export const Blog41 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number): void =>
    setActiveFaq(activeFaq === index ? null : index);

  const faqs: FAQItem[] = [
    {
      q: "Q1: SIP shuru karne ke liye minimum kitna paisa chahiye?",
      a: "Aap mahine ke sirf ₹500 se apni SIP shuru kar sakte hain. Amount se zyada zaroori hai 'Consistency' aur jaldi shuru karna.",
    },
    {
      q: "Q2: Kya SIP mein mera paisa dub sakta hai?",
      a: "Mutual Funds market-linked hote hain, isliye short-term mein utaar-chadhao ho sakta hai. Lekin 5-10 saal ke long-term horizon mein risk kaafi kam ho jata hai aur compounding ka fayda milta hai.",
    },
    {
      q: "Q3: Direct Plan aur Regular Plan mein kya farak hai?",
      a: "Direct plans mein koi commission nahi hota, isliye aapka 'Expense Ratio' kam hota hai aur long-term mein aapko 1-1.5% zyada returns mil sakte hain.",
    },
    {
      q: "Q4: Best SIP fund kaise chunein?",
      a: "Beginners ko hamesha 'Index Funds' ya 'Large Cap Funds' se shuruat karni chahiye kyunki ye stable hote hain. Apne risk appetite ke hisaab se hi portfolio banayein.",
    },
  ];

  const tips = [
    { title: "Start Early", desc: "Jitni jaldi shuru karenge, compounding aapke paise ko utni hi tezi se badhayegi.", icon: <Rocket className="text-blue-500" /> },
    { title: "Avoid Market Timing", desc: "Market upar hai ya niche, iski chinta na karein. SIP ka maksad hi discipline hai.", icon: <Target className="text-orange-500" /> },
    { title: "Step-Up Regularly", desc: "Har saal apni income badhne ke saath SIP amount ko 10% badhane ki koshish karein.", icon: <Zap className="text-yellow-600" /> },
    { title: "Stay Invested", desc: "Market crash ke samay dar kar SIP band na karein; ye saste mein units kharidne ka waqt hota hai.", icon: <ShieldCheck className="text-green-500" /> },
  ];

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div onClick={() => setIsOpen(true)} className="cursor-pointer w-full flex justify-center px-4">
          <BlogCard1
            title="Best SIP Plans and Mutual Fund Tips for Beginners: Your Road to Wealth"
            category="MUTUAL FUNDS"
            author="Sumit Mishra"
            date="May 19, 2026"
            image="/images/blog/blog-41.jpg"
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
                  src="/images/blog/blog-41.jpg"
                  alt="A financial growth plant growing out of a stack of coins, symbolizing SIP investments."
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="px-5 py-8 md:px-12 md:py-14 text-justify">
                <Typography variant="h5" className="text-[#1e3a8a] mb-4 font-bold leading-tight uppercase text-left">
                  SIP for Beginners: How to Grow Your Wealth Professionally
                </Typography>

                <div className="flex gap-4 text-gray-400 mb-8 pb-4 border-b overflow-x-auto no-scrollbar">
                  <div className="flex items-center gap-2 shrink-0">
                    <Clock size={16} />
                    <Typography variant="b2">May 19, 2026</Typography>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <PieChart size={16} />
                    <Typography variant="b2">Mutual Funds</Typography>
                  </div>
                </div>

                <Typography variant="s2" className="text-gray-600 mb-10 font-medium leading-relaxed block ">
                  Wealth creation koi raato-raat hone wala chamatkar nahi hai, balki discipline ka result hai. SIP aapko market ke utaar-chadhao se bachakar compounding ka asali fayda deti hai.
                </Typography>

                <section className="space-y-12">
                  {/* The Power of SIP Section */}
                  <div className="bg-blue-50 p-6 md:p-8 rounded-3xl border border-blue-100 flex flex-col md:flex-row gap-6 items-center">
                    <div className="bg-[#1e3a8a] p-4 rounded-2xl text-white shrink-0 shadow-lg">
                      <TrendingUp size={32} />
                    </div>
                    <div>
                      <Typography variant="h5" className="font-bold text-blue-900 uppercase mb-2 text-left">Why SIP?</Typography>
                      <Typography variant="b1" className="text-gray-700 leading-relaxed text-left">
                        SIP (Systematic Investment Plan) aapko &quot;Rupee Cost Averaging&quot; ka fayda deti hai. Jab market niche hota hai, aapko zyada units milti hain, aur jab upar hota hai, toh aapki value badhti hai.
                      </Typography>
                    </div>
                  </div>

                  {/* Compounding Visual Mention */}
                  <div className="my-8">
                    
                  </div>

                  {/* Beginner Tips Grid */}
                  <div className="space-y-6 text-left">
                    <Typography variant="h5" className="font-bold text-gray-900 uppercase">4 Golden Rules for SIP Beginners</Typography>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {tips.map((item, idx) => (
                        <div key={idx} className="p-6 bg-white border border-gray-100 rounded-3xl shadow-sm hover:border-blue-100 transition-all">
                          <div className="flex items-center gap-4 mb-3">
                            <div className="p-3 bg-gray-50 rounded-2xl">{item.icon}</div>
                            <Typography variant="s1" className="font-bold uppercase tracking-tight">{item.title}</Typography>
                          </div>
                          <Typography variant="b2" className="text-gray-500 leading-relaxed ml-[60px]">{item.desc}</Typography>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Smart Allocation Strategy */}
                  <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[40px] relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                       <PieChart size={150} />
                    </div>
                    <Typography variant="h5" className="text-blue-400 mb-6 font-bold uppercase relative z-10 text-left">Money King Tip: The Ideal Portfolio</Typography>
                    <div className="space-y-4 relative z-10 text-left">
                      <div className="flex gap-3 items-start">
                        <CheckCircle2 className="text-green-400 mt-1 shrink-0" size={18} />
                        <Typography variant="b2"><strong>Conservative:</strong> 70% Large Cap / Index Funds + 30% Debt Funds.</Typography>
                      </div>
                      <div className="flex gap-3 items-start">
                        <CheckCircle2 className="text-green-400 mt-1 shrink-0" size={18} />
                        <Typography variant="b2"><strong>Aggressive:</strong> 50% Flexi Cap + 30% Mid Cap + 20% Small Cap.</Typography>
                      </div>
                    </div>
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