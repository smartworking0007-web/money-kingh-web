"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Clock,
  Folder,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  ShieldAlert,
  Lock,
  Smartphone,
  AlertTriangle,
  WifiOff,
} from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

interface FAQItem {
  q: string;
  a: string;
}

export const Blog18 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number): void =>
    setActiveFaq(activeFaq === index ? null : index);

  const faqs: FAQItem[] = [
    {
      q: "Q: Is it safer to use a Credit Card or a Debit Card online?",
      a: "Credit Cards are safer! Most have 'Zero Liability' policies. If someone steals your credit card money, it’s the bank’s money that’s gone while you dispute it. With a debit card, it's your actual bank balance that disappears instantly!",
    },
    {
      q: "Q: Can a scammer steal my info just by being near me?",
      a: "With 'Contactless' cards, it's technically possible but extremely rare. You can buy an RFID-blocking wallet or sleeve to stay 100% safe from 'skimming'.",
    },
    {
      q: "Q: I clicked a link but didn't enter my info. Am I safe?",
      a: "Likely yes, but it's best to run a malware scan on your phone or PC just in case a 'stealth' file was downloaded in the background.",
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
            title="Credit Card Protection: How to Stay Safe from Phishing & Fraud"
            category="SECURITY"
            author="Sumit Mishra"
            date="May 07, 2026"
            image="/images/blog/blog-18.jpeg"
          />
        </div>
      ) : (
        <div className="fixed inset-0 z-40 bg-white overflow-y-auto pt-20 md:pt-28 no-scrollbar animate-in fade-in duration-300 text-left">
          <div className="relative max-w-5xl mx-auto pb-20 px-4 md:px-6">
            <div className="mb-6">
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center pt-3 text-gray-500 hover:text-[#1e3a8a] transition-colors font-bold uppercase text-[10px] cursor-pointer tracking-widest"
              >
                <ArrowLeft size={14} /> Back to Blogs
              </button>
            </div>

            <div className="bg-white rounded-xl overflow-hidden border-gray-100 ">
              <div className="relative h-[250px] sm:h-[300px] md:h-[500px] w-full">
                <Image
                  src="/images/blog/blog-18.jpeg"
                  alt="A close-up of a person's hand using a smartphone to freeze a credit card via a banking app for security"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="px-5 py-8 md:px-12 md:py-14 text-justify">
                <Typography variant="h5" className="text-[#1e3a8a] mb-4 font-bold leading-tight uppercase">
                  Credit Card Protection: Lockdown Your Data
                </Typography>

                <div className="flex gap-4 text-gray-400 mb-8 pb-4 border-b overflow-x-auto no-scrollbar">
                  <div className="flex items-center gap-2 shrink-0">
                    <Clock size={16} />
                    <Typography variant="b2">May 07, 2026</Typography>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Folder size={16} />
                    <Typography variant="b2">Security</Typography>
                  </div>
                </div>

                <Typography variant="s2" className="text-gray-600 mb-10 font-medium leading-relaxed block">
                  In a world where we tap, swipe, and click to pay, your credit card is the key to your financial life. Don’t let hackers treat it like an open buffet.
                </Typography>

                <section className="space-y-12">
                  {/* Phishing Section */}
                  <div className="bg-red-50 p-6 md:p-8 rounded-3xl border border-red-100">
                    <div className="flex items-center gap-4 mb-6">
                      <ShieldAlert className="text-red-600" size={32} />
                      <Typography variant="h5" className="font-bold text-red-900 uppercase">1. Spotting the &quot;Phish&quot;</Typography>
                    </div>
                    <ul className="space-y-4">
                      <li className="flex gap-3">
                        <AlertTriangle className="text-red-500 shrink-0" size={20} />
                        <Typography variant="b1"><strong>The Urgent SMS:</strong> Banks never create panic via text like &quot;Verify now or be blocked!&quot;</Typography>
                      </li>
                      <li className="flex gap-3">
                        <AlertTriangle className="text-red-500 shrink-0" size={20} />
                        <Typography variant="b1"><strong>The Dodgy Link:</strong> Hover over links. If it says bit.ly/secure-bank instead of yourbank.com, it&apos;s a trap.</Typography>
                      </li>
                    </ul>
                  </div>

                  {/* Vault Strategy */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 border border-gray-100 rounded-2xl shadow-sm flex flex-col items-center text-center">
                      <Lock className="text-blue-600 mb-3" size={32} />
                      <Typography variant="h5" className="font-bold mb-2">HTTPS Only</Typography>
                      <Typography variant="b2">Always look for the padlock icon in the browser address bar before paying.</Typography>
                    </div>
                    <div className="p-6 border border-gray-100 rounded-2xl shadow-sm flex flex-col items-center text-center">
                      <WifiOff className="text-orange-600 mb-3" size={32} />
                      <Typography variant="h5" className="font-bold mb-2">No Public Wi-Fi</Typography>
                      <Typography variant="b2">Hackers can &quot;sniff&quot; public air. Use mobile data for banking transactions.</Typography>
                    </div>
                  </div>

                  {/* Golden Rule - High Visibility */}
                  <div className="bg-gray-900 text-white p-8 md:p-12 rounded-[40px] text-center border-4 border-yellow-400">
                    <Typography variant="h5" className="text-yellow-400 mb-4 font-black uppercase tracking-tighter">
                      The Golden Rule of OTP
                    </Typography>
                    <Typography variant="b1" className="text-white leading-relaxed">
                      Your OTP is like your house key. No bank employee, police officer, or customer care agent will <strong>EVER</strong> ask for it. If someone asks for your OTP, they are a scammer. Period.
                    </Typography>
                  </div>

                  {/* Smart Tech Settings */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <Smartphone className="text-[#1e3a8a]" size={28} />
                      <Typography variant="h5" className="font-bold uppercase text-gray-900">3. Smart Tech Settings</Typography>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="bg-gray-50 p-4 rounded-xl text-center">
                        <Typography variant="s2" className="font-bold text-[#1e3a8a]">Real-Time Alerts</Typography>
                        <Typography variant="caption" className="block mt-1">Ping for every $1 spent</Typography>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-xl text-center">
                        <Typography variant="s2" className="font-bold text-[#1e3a8a]">Daily Limits</Typography>
                        <Typography variant="caption" className="block mt-1">Set max spend in app</Typography>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-xl text-center">
                        <Typography variant="s2" className="font-bold text-[#1e3a8a]">Virtual Cards</Typography>
                        <Typography variant="caption" className="block mt-1">Temporary card numbers</Typography>
                      </div>
                    </div>
                  </div>

                  {/* FAQ Section */}
                  <div className="pt-10 border-t border-gray-100">
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
                              <Typography variant="b1" className="text-gray-600 leading-relaxed">{faq.a}</Typography>
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