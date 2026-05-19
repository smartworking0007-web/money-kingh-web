"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Clock,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Cpu,
  BrainCircuit,
  ShieldCheck,
  Zap,
  BarChart3,
  Bot,
  UserCheck,
  SearchCheck,
} from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

interface FAQItem {
  q: string;
  a: string;
}

export const Blog42 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number): void =>
    setActiveFaq(activeFaq === index ? null : index);

  const faqs: FAQItem[] = [
    {
      q: "Q1: Kya AI banking ko puri tarah replace kar dega?",
      a: "Nahi, AI banks ko replace nahi balki unhe 'Hyper-Efficient' banayega. Complex decisions aur empathy ke liye hamesha human expertise ki zaroorat rahegi, lekin routine tasks AI sambhaal lega.",
    },
    {
      q: "Q2: AI se banking frauds kaise kam hote hain?",
      a: "AI algorithms real-time mein lakho transactions ko scan karte hain. Agar koi transaction aapke normal behavior se match nahi karta (jaise kisi alag desh mein badi purchase), toh AI usey instantly block kar deta hai.",
    },
    {
      q: "Q3: AI-based Chatbots aur purane customer care mein kya farak hai?",
      a: "Purane systems rigid hote the. Aaj ke AI chatbots NLP (Natural Language Processing) ka use karte hain, jis se wo aapki problem ko insaano ki tarah samajh kar turant solution dete hain, bina wait kiye.",
    },
    {
      q: "Q4: Kya AI investments (Robo-advisors) safe hain?",
      a: "Robo-advisors data aur pure logic par kaam karte hain, jis se 'human emotion' ya dar khatam ho jata hai. Ye long-term wealth creation ke liye ek bahut hi disciplined aur safe approach hai.",
    },
  ];

  const aiImpacts = [
    {
      title: "Fraud Detection",
      desc: "AI models 24/7 transactions ko monitor karte hain aur anomalies ko turant flag karte hain.",
      icon: <ShieldCheck className="text-red-500" />,
    },
    {
      title: "Hyper-Personalization",
      desc: "Aapke spending habits ke hisaab se AI aapko wahi products suggest karta hai jo aapki financial health ke liye sahi hon.",
      icon: <UserCheck className="text-blue-500" />,
    },
    {
      title: "Automated Lending",
      desc: "Loan approvals ab mahino mein nahi, balki AI credit-scoring ki madad se kuch minutes mein ho jate hain.",
      icon: <Zap className="text-yellow-500" />,
    },
    {
      title: "Algo-Trading",
      desc: "Complex algorithms market trends ko analyze karke millisecond mein trades execute karte hain.",
      icon: <BarChart3 className="text-green-500" />,
    },
    {
      title: "Smart Chatbots",
      desc: "24/7 Virtual assistants jo aapke banking sawalo ka turant aur sahi jawab dete hain.",
      icon: <Bot className="text-purple-500" />,
    },
    {
      title: "Predictive Analytics",
      desc: "AI tools aapki future income aur inflation ko analyze karke aapka net worth forecast kar sakte hain.",
      icon: <SearchCheck className="text-cyan-500" />,
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
            title="How AI is Changing the Future of Banking and Finance: 2026 Edition"
            category="FINTECH & AI"
            author="Sumit Mishra"
            date="May 19, 2026"
            image="/images/blog/blog-42.jpg"
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
                  src="/images/blog/blog-42.jpg"
                  alt="A futuristic digital interface representing AI in banking with data nodes and neural networks."
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
                  The AI Revolution: Banking Reimagined
                </Typography>

                <div className="flex gap-4 text-gray-400 mb-8 pb-4 border-b overflow-x-auto no-scrollbar">
                  <div className="flex items-center gap-2 shrink-0">
                    <Clock size={16} />
                    <Typography variant="b2" as="span" className="text-gray-400">May 19, 2026</Typography>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Cpu size={16} />
                    <Typography variant="b2" as="span" className="text-gray-400">Fintech & AI</Typography>
                  </div>
                </div>

                <Typography
                  variant="s1"
                  className="text-gray-600 mb-10 block "
                >
                  Traditional banking manual processes ka samay ab peeche chhut
                  chuka hai. 2026 mein AI banking ko sirf fast hi nahi, balki
                  &quot;Intelligent&quot; aur &quot;Proactive&quot; bana raha
                  hai.
                </Typography>

                <section className="space-y-12">
                  {/* AI Transformation Banner */}
                  <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[40px] relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <BrainCircuit size={150} />
                    </div>
                    <Typography
                      variant="h4"
                      className="text-blue-400 mb-6 uppercase relative z-10 mt-0"
                    >
                      Intelligence is the New Capital
                    </Typography>
                    <Typography
                      variant="b1"
                      className="text-gray-300 relative z-10"
                    >
                      Aaj AI sirf data process nahi karta, balki financial
                      trends ko <strong className="text-white">predict</strong> karta hai. Ye aapke
                      spending patterns ko samajhta hai aur aapko real-time mein
                      fraud se bachata hai. Finance ab sirf ek service nahi,
                      balki ek smart personal assistant ban chuka hai.
                    </Typography>
                  </div>

                  {/* Impact Grid */}
                  <div className="space-y-6">
                    <Typography
                      variant="h3"
                      className="text-gray-900 uppercase my-0"
                    >
                      6 Ways AI is Redefining Finance
                    </Typography>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {aiImpacts.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-6 bg-white border border-gray-100 rounded-3xl shadow-sm hover:border-blue-100 transition-all group"
                        >
                          <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-4 border border-gray-100 group-hover:bg-[#1e3a8a] group-hover:text-white transition-all">
                            {item.icon}
                          </div>
                          <Typography
                            variant="s2"
                            className="font-bold mb-2 block text-gray-900"
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            variant="b3"
                            className="text-gray-500"
                          >
                            {item.desc}
                          </Typography>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Money King Strategy Banner */}
                  <div className="bg-blue-50 p-6 md:p-8 rounded-3xl border border-blue-100 flex flex-col md:flex-row gap-6 items-center">
                    <div className="bg-[#1e3a8a] p-4 rounded-2xl text-white shrink-0 shadow-lg">
                      <Zap size={32} />
                    </div>
                    <div>
                      <Typography
                        variant="h4"
                        className="text-blue-900 uppercase mb-2 my-0"
                      >
                        The AI-Powered &quot;One EMI&quot;
                      </Typography>
                      <Typography
                        variant="b1"
                        className="text-gray-700"
                      >
                        Money King mein hum AI-driven insights ka use karte hain
                        taaki aapke multiple loans ko optimize kiya ja sake.
                        Humara algorithm aapko batata hai ki kab debt
                        consolidation (One EMI) aapke interest burden ko sabse
                        zyada kam karega.
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