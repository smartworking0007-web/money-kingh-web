"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Clock,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  TrendingUp,
  ShieldCheck,
  CreditCard,
  Zap,
  Briefcase,
  Target,
} from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

interface FAQItem {
  q: string;
  a: string;
}

export const Blog40 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number): void =>
    setActiveFaq(activeFaq === index ? null : index);

  const faqs: FAQItem[] = [
    {
      q: "Q1: Kya career ke shuruat mein hi Credit Card lena sahi hai?",
      a: "Ji haan, agar aap ise responsibly use karein. Ek credit card se aapka 'Credit Score' banna shuru hota hai, jo baad mein Home Loan ya Car Loan lete waqt bahut kaam aata hai. Bas bill hamesha full pay karein.",
    },
    {
      q: "Q2: Income ka kitna percentage invest karna chahiye?",
      a: "Ek ideal rule '50-30-20' hai. 50% needs, 30% wants, aur kam se kam 20% savings/investments. Career ke shuruat mein ise 30% tak le jane ki koshish karein.",
    },
    {
      q: "Q3: Pehle Debt khatam karein ya Investment shuru karein?",
      a: "Agar debt high-interest hai (jaise Credit Card ya Personal Loan), toh pehle usey khatam karein. Agar low-interest hai (jaise Student Loan), toh aap investment aur repayment dono saath mein chala sakte hain.",
    },
    {
      q: "Q4: Emergency fund kitna bada hona chahiye?",
      a: "Kam se kam aapke 6 mahine ke kharche (rent, food, EMI) ke barabar. Ye paisa liquid hona chahiye taaki zaroorat padne par turant nikaala ja sake.",
    },
  ];

  const mistakes = [
    {
      title: "Lifestyle Inflation",
      desc: "Salary badhte hi kharche badha lena (jaise naya iPhone ya car) sabse badi galti hai.",
      icon: <TrendingUp className="text-red-500" />,
    },
    {
      title: "No Emergency Fund",
      desc: "Medical emergency ya job loss ke liye backup na hona aapko karz ke jaal mein fasa sakta hai.",
      icon: <AlertTriangle className="text-orange-500" />,
    },
    {
      title: "Delaying Investments",
      desc: "Ye sochna ki 'abhi toh umar padi hai' aapko compounding ka fayda lene se rokta hai.",
      icon: <Clock className="text-blue-500" />,
    },
    {
      title: "Mixing Insurance & Investment",
      desc: "Traditional insurance plans lena jo sirf 4-5% return dete hain, wealth creation ke liye galat hai.",
      icon: <ShieldCheck className="text-green-500" />,
    },
    {
      title: "Credit Card Overuse",
      desc: "Credit card ko 'free money' samajhna aur sirf minimum due pay karna debt trap ki shuruat hai.",
      icon: <CreditCard className="text-purple-500" />,
    },
    {
      title: "Ignoring Health Insurance",
      desc: "Sirf company ke insurance par depend rehna risky hai. Ek personal health cover hona zaroori hai.",
      icon: <Zap className="text-yellow-600" />,
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
            title="7 Critical Personal Finance Mistakes Young Professionals Should Avoid"
            category="CAREER & FINANCE"
            author="Sumit Mishra"
            date="May 15, 2026"
            image="/images/blog/blog-40.jpg"
          />
        </div>
      ) : (
        <div className="fixed inset-0 z-40 bg-white overflow-y-auto pt-20 md:pt-28 no-scrollbar animate-in fade-in duration-300 text-left">
          <div className="relative max-w-5xl mx-auto pb-20 px-4 md:px-6">
            <div className="mb-6">
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center pt-3 text-gray-500 hover:text-[#1e3a8a] transition-colors font-bold uppercase text-[10px] cursor-pointer tracking-widest text-left"
              >
                <ArrowLeft size={14} /> Back to Blogs
              </button>
            </div>

            <div className="bg-white rounded-xl overflow-hidden border-gray-100 shadow-sm">
              <div className="relative h-[250px] sm:h-[300px] md:h-[500px] w-full">
                <Image
                  src="/images/blog/blog-40.jpg"
                  alt="A professional young person looking stressed over bills, contrasted with a calm person using a financial app."
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="px-5 py-8 md:px-12 md:py-14 text-justify">
                <Typography
                  variant="h5"
                  className="text-[#1e3a8a] mb-4 font-bold leading-tight uppercase text-left"
                >
                  Young Professionals: Stop Making These Costly Mistakes
                </Typography>

                <div className="flex gap-4 text-gray-400 mb-8 pb-4 border-b overflow-x-auto no-scrollbar">
                  <div className="flex items-center gap-2 shrink-0">
                    <Clock size={16} />
                    <Typography variant="b2">May 15, 2026</Typography>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Briefcase size={16} />
                    <Typography variant="b2">Career & Finance</Typography>
                  </div>
                </div>

                <Typography
                  variant="s2"
                  className="text-gray-600 mb-10 font-medium leading-relaxed block "
                >
                  Career ke shuruat ke pehle 5 saal decide karte hain ki aap 40
                  ki umar mein financial free honge ya nahi. Galtiyan sab karte
                  hain, lekin samajhdaari unhe pehchanne mein hai.
                </Typography>

                <section className="space-y-12">
                  {/* Mistakes Grid */}
                  <div className="space-y-6 text-left">
                    <Typography
                      variant="h5"
                      className="font-bold text-gray-900 uppercase"
                    >
                      The Top 6 Wealth Killers
                    </Typography>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {mistakes.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-6 bg-white border border-gray-100 rounded-3xl shadow-sm hover:border-red-100 transition-all"
                        >
                          <div className="flex items-center gap-4 mb-3">
                            <div className="p-3 bg-gray-50 rounded-2xl">
                              {item.icon}
                            </div>
                            <Typography
                              variant="s1"
                              className="font-bold uppercase tracking-tight"
                            >
                              {item.title}
                            </Typography>
                          </div>
                          <Typography
                            variant="b2"
                            className="text-gray-500 leading-relaxed ml-[60px]"
                          >
                            {item.desc}
                          </Typography>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Financial Goal Setting Image */}
                  <div className="my-10 text-center">
                    <Typography
                      variant="caption"
                      className="text-gray-400 mt-2 block "
                    >
                      A robust financial pyramid starts with protection first.
                    </Typography>
                  </div>

                  {/* Money King Strategy Banner */}
                  <div className="bg-[#1e3a8a] text-white p-8 md:p-12 rounded-[40px] relative overflow-hidden shadow-2xl">
                    <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                      <Target size={60} className="text-blue-300 shrink-0" />
                      <div className="text-left">
                        <Typography
                          variant="h5"
                          className="text-white mb-4 font-bold uppercase"
                        >
                          Money King Strategy: Fix Your Debt Early
                        </Typography>
                        <Typography
                          variant="b1"
                          className="text-blue-100 leading-relaxed"
                        >
                          Multiple small debts (EMI for laptop, phone, bike)
                          aapka cashflow block karte hain. Inhe{" "}
                          <strong>Money King &quot;One EMI&quot;</strong>{" "}
                          solution se merge karein. Isse aapka ek hi payment
                          rahega aur monthly surplus badhega jo aap investment
                          mein laga sakte hain.
                        </Typography>
                      </div>
                    </div>
                  </div>

                  {/* FAQ Section */}
                  <div className="pt-10 border-t border-gray-100 text-left">
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
