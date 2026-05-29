"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Clock,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Target,
  ShieldCheck,
  TrendingUp,
  LineChart,
  HelpCircle,
} from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

interface FAQItem {
  q: string;
  a: string;
}

export const Blog47 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number): void =>
    setActiveFaq(activeFaq === index ? null : index);

  const faqs: FAQItem[] = [
    {
      q: "Q1. Mutual Funds mein low CIBIL score ke sath invest kiya ja sakta hai?",
      a: "Ji haan, Mutual Fund investments ke liye CIBIL score mandatory nahi hota hai. Agar aapka score kam bhi hai, toh bhi aap e-KYC complete karke investment shuru kar sakte hain.",
    },
    {
      q: "Q2. Wealth building ke liye minimum kitne amount se shuruwat ki ja sakti hai?",
      a: "Aap micro-investing ke zariye sirf ₹100 ya ₹500 ki monthly SIP (Strategic Investment Plan) se apni wealth building journey ki shuruwat kar sakte hain.",
    },
    {
      q: "Q3. Portfolio diversification ka sabse bada fayda kya hai?",
      a: "Diversification aapke risk ko control karta hai. Agar market ke kisi ek sector mein down-fall aata hai, toh doosre stable sectors aapke overall capital loss ko protect karte hain.",
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
            author="Sumit Mishra" 
            category="WEALTH ACCELERATION" 
            date="May 29, 2026" 
            image="/images/blog/blog-47.jpeg" 
            title="The Art of Wealth Building: Smart Habits for Long-Term Growth"
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
                <Typography as="span" className="font-bold uppercase text-inherit" variant="caption">
                  Back to Blogs
                </Typography>
              </button>
            </div>

            <div className="bg-white rounded-xl overflow-hidden border-gray-100 shadow-sm">
              <div className="relative h-[250px] sm:h-[300px] md:h-[500px] w-full">
                <Image 
                  alt="A secure digital growth dashboard tracking financial wealth acceleration tools and strategic portfolios" 
                  className="object-cover" 
                  fill 
                  priority 
                  src="/images/blog/blog-47.jpeg"
                />
              </div>

              <div className="px-5 py-8 md:px-12 md:py-14 text-justify">
                <Typography className="text-[#1e3a8a] uppercase mt-0 text-2xl sm:text-3xl md:text-4xl" variant="h4">
                  The Art of Wealth Building: Smart Habits for Long-Term Growth
                </Typography>

                <div className="flex gap-4 text-gray-400 mb-8 pb-4 border-b overflow-x-auto no-scrollbar">
                  <div className="flex items-center gap-2 shrink-0">
                    <Clock size={16} />
                    <Typography as="span" className="text-gray-400" variant="b2">May 29, 2026</Typography>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Target size={16} />
                    <Typography as="span" className="text-gray-400" variant="b2">Wealth Acceleration</Typography>
                  </div>
                </div>

                <div className="bg-blue-50/60 border border-blue-100 rounded-2xl p-6 mb-10">
                  <Typography className="text-[#1e3a8a] uppercase font-medium block mb-2 my-0" variant="h5">
                    What is the Core Formula for Wealth Generation?
                  </Typography>
                  <Typography className="text-gray-600 block" variant="b1">
                    Wealth building ek over-night event nahi hai, balki yeh ek systematic aur discipline-driven process hai. Long-term compounding, calculated risk diversification, aur automated investments ka regular discipline hi aapke ordinary capital ko an-beatable financial freedom mein convert karta hai.
                  </Typography>
                </div>

                <section className="space-y-12">
                  {/* Section 1 */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <LineChart className="text-blue-600 shrink-0" size={24} />
                      <Typography className="text-gray-900 uppercase my-0 text-xl sm:text-2xl" variant="h5">
                        1. The Compounding Engine: Start Before You Feel Ready
                      </Typography>
                    </div>
                    <Typography className="text-gray-600 block" variant="b1">
                      Financial ecosystems mein timing se zyada important aapka &quot;time in the market&quot; hota hai. Compounding ka real magic tabhi visible hota hai jab aap apne investment yield ko continuously reinvest hone ka proper environment aur clear time window dete hain. Small regular contributions eventually massive corpus form kar lete hain.
                    </Typography>
                  </div>

                  {/* Section 2 */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="text-green-600 shrink-0" size={24} />
                      <Typography className="text-gray-900 uppercase my-0 text-xl sm:text-2xl" variant="h5">
                        2. Strategic Portfolio Diversification
                      </Typography>
                    </div>
                    <Typography className="text-gray-600 block" variant="b1">
                      Apne saare financial eggs ko ek hi basket mein rakhna capital security ke point of view se sabase dangerous step hai. Asset allocation framework ko use karke equities, debt instruments, mutual funds aur alternate defensive gold assets ke beech assets divide karein taki market corrections ke time stability bani rahe.
                    </Typography>
                  </div>

                  {/* Section 3 Table */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="text-purple-600 shrink-0" size={24} />
                      <Typography className="text-gray-900 uppercase my-0 text-xl sm:text-2xl" variant="h5">
                        3. Asset Allocation and Volatility Matrix
                      </Typography>
                    </div>
                    
                    <div className="overflow-x-auto border border-gray-100 rounded-xl shadow-sm">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-slate-900 text-white">
                            <th className="p-4 font-bold text-sm uppercase">Asset Category</th>
                            <th className="p-4 font-bold text-sm uppercase">Risk Profile</th>
                            <th className="p-4 font-bold text-sm uppercase">Primary Growth Role</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 bg-white">
                          <tr className="hover:bg-slate-50/50">
                            <td className="p-4 text-gray-900 font-semibold">Direct Equities &amp; Smallcaps</td>
                            <td className="p-4 text-red-600 font-medium">High Volatility</td>
                            <td className="p-4 text-gray-600">Aggressive Alpha Generation</td>
                          </tr>
                          <tr className="hover:bg-slate-50/50">
                            <td className="p-4 text-gray-900 font-semibold">Diversified Mutual Funds</td>
                            <td className="p-4 text-amber-600 font-medium">Moderate Risk</td>
                            <td className="p-4 text-gray-600">Consistent Wealth Compounding</td>
                          </tr>
                          <tr className="hover:bg-slate-50/50">
                            <td className="p-4 text-gray-900 font-semibold">Liquid Fixed Income &amp; Gold</td>
                            <td className="p-4 text-green-600 font-medium">Low Volatility</td>
                            <td className="p-4 text-gray-600">Portfolio Capital Protection</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Section 4 Dark Banner */}
                  <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[40px] relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                      <LineChart size={200} />
                    </div>
                    <div className="max-w-2xl relative z-10">
                      <Typography className="text-blue-400 mb-4 uppercase tracking-wide my-0" variant="h5">
                        The Money King Capital Advisory Advantage
                      </Typography>
                      <Typography className="text-gray-300" variant="b1">
                        Money King Financial Services Pvt. Ltd. ke exclusive algorithmic valuation trackers aur expert dynamic guidance ke sath aap apne active capital allocation rules ko custom-tailored financial frameworks ke throug operate kar sakte hain. Hum aapko single execution platform access provide karte hain jo market volatility cycles ko handle karne mein aapki monitoring speed ko standard solutions ke comparison mein sharper benchmark scaling speed deta hai.
                      </Typography>
                    </div>
                  </div>

                  {/* FAQ Section */}
                  <div className="pt-10 border-t border-gray-100">
                    <div className="flex items-center gap-2 mb-8">
                      <HelpCircle className="text-[#1e3a8a]" size={22} />
                      <Typography className="text-[#1e3a8a] uppercase underline decoration-blue-200 underline-offset-8 my-0" variant="h4">
                        Frequently Asked Questions
                      </Typography>
                    </div>
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
                            <Typography className="font-bold text-gray-900" variant="s2">
                              {faq.q}
                            </Typography>
                            {activeFaq === index ? (
                              <ChevronUp className="text-[#1e3a8a] shrink-0 ml-4" size={20} />
                            ) : (
                              <ChevronDown className="text-gray-400 shrink-0 ml-4" size={20} />
                            )}
                          </button>
                          {activeFaq === index && (
                            <div className="p-5 bg-white border-t border-gray-100 animate-in slide-in-from-top-2 duration-300">
                              <Typography className="text-gray-600" variant="b1">
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
                    <Typography as="span" className="font-bold uppercase tracking-widest text-inherit" variant="caption">
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