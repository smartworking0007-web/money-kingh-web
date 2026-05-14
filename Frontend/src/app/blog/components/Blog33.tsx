"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Clock,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Plane,
  CreditCard,
  Globe,
  Banknote,
  Smartphone,
  Lock,
} from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

interface FAQItem {
  q: string;
  a: string;
}

export const Blog33 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number): void =>
    setActiveFaq(activeFaq === index ? null : index);

  const faqs: FAQItem[] = [
    {
      q: "1. Is it better to use a credit card or a debit card while traveling?",
      a: "Credit cards generally offer superior fraud protection and are safer for large purchases or hotel deposits. Debit cards are most efficient when used at ATMs to withdraw local cash.",
    },
    {
      q: "2. What should I do if my card is lost or stolen while I'm away?",
      a: "Immediately use your bank’s mobile app to 'lock' or 'freeze' the card. Then, call your bank’s international customer service line to report the theft and request an emergency replacement.",
    },
    {
      q: "3. How much cash should I carry?",
      a: "Carry enough for approximately one day’s worth of basic expenses (taxis, meals). Relying primarily on cards is significantly safer than carrying large amounts of cash.",
    },
    {
      q: "4. Should I use a prepaid travel card?",
      a: "Prepaid cards can help with budgeting, but they often lack the robust fraud protections and wide acceptance rates of a standard international credit card.",
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
            title="Smart Travel Tips for Financial Convenience and Security"
            category="TRAVEL FINANCE"
            author="Sumit Mishra"
            date="May 14, 2026"
            image="/images/blog/blog-33.jpeg"
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

            <div className="bg-white rounded-xl overflow-hidden border-gray-100 shadow-sm">
              <div className="relative h-[250px] sm:h-[300px] md:h-[500px] w-full">
                <Image
                  src="/images/blog/blog-33.jpeg"
                  alt="Traveler prepared for a trip with travel documents and a secure credit card."
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="px-5 py-8 md:px-12 md:py-14 text-justify">
                <Typography
                  variant="h5"
                  className="text-[#1e3a8a] mb-4 font-bold leading-tight uppercase"
                >
                  Travel Safe: The Ultimate Financial Prep Guide
                </Typography>

                <div className="flex gap-4 text-gray-400 mb-8 pb-4 border-b overflow-x-auto no-scrollbar">
                  <div className="flex items-center gap-2 shrink-0">
                    <Clock size={16} />
                    <Typography variant="b2">May 14, 2026</Typography>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Plane size={16} />
                    <Typography variant="b2">Travel Finance</Typography>
                  </div>
                </div>

                <Typography
                  variant="s2"
                  className="text-gray-600 mb-10 font-medium leading-relaxed block "
                >
                  Traveling should be about making memories, not worrying about
                  your money. Preparing your finances in advance is the key to a
                  stress-free global trip.
                </Typography>

                <section className="space-y-12">
                  {/* Bank Notification & Payment Forms Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6 bg-blue-50 rounded-3xl border border-blue-100">
                      <Globe className="text-blue-600 mb-4" size={28} />
                      <Typography
                        variant="h5"
                        className="font-bold uppercase mb-3"
                      >
                        1. Notify Your Bank
                      </Typography>
                      <Typography
                        variant="b2"
                        className="text-gray-600 leading-relaxed"
                      >
                        Share your travel dates to prevent blocked transactions
                        and ensure your bank has your current number for
                        suspicious activity alerts.
                      </Typography>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                      <CreditCard className="text-slate-600 mb-4" size={28} />
                      <Typography
                        variant="h5"
                        className="font-bold uppercase mb-3"
                      >
                        2. Multiple Payment Forms
                      </Typography>
                      <Typography
                        variant="b2"
                        className="text-gray-600 leading-relaxed"
                      >
                        Mix your credit card, backup debit card, and local
                        currency. Keep them in separate places, like your hotel
                        safe.
                      </Typography>
                    </div>
                  </div>

                  {/* International Fees & Digital Security Banner */}
                  <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[40px] shadow-xl relative overflow-hidden">
                    <div className="relative z-10 space-y-6">
                      <div className="flex items-start gap-4">
                        <Smartphone
                          className="text-blue-400 shrink-0"
                          size={24}
                        />
                        <div>
                          <Typography
                            variant="s1"
                            className="font-bold uppercase"
                          >
                            3. Foreign Transaction Fees
                          </Typography>
                          <Typography
                            variant="caption"
                            className="text-gray-400"
                          >
                            Choose cards with &quot;No Foreign Transaction
                            Fees&quot; and always pay in the{" "}
                            <strong>local currency</strong> for a better rate.
                          </Typography>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 border-t border-white/10 pt-6">
                        <Lock className="text-orange-400 shrink-0" size={24} />
                        <div>
                          <Typography
                            variant="s1"
                            className="font-bold uppercase"
                          >
                            4. Prioritize Digital Security
                          </Typography>
                          <Typography
                            variant="caption"
                            className="text-gray-400"
                          >
                            Use a VPN on public Wi-Fi and enable real-time
                            alerts on your banking app to monitor spending
                            instantly.
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Local Currency Tip */}
                  <div className="p-8 bg-green-50 rounded-3xl border border-green-100 flex flex-col md:flex-row items-center gap-8">
                    <Banknote className="text-green-600 shrink-0" size={48} />
                    <div>
                      <Typography
                        variant="h5"
                        className="text-green-900 font-bold mb-2 uppercase"
                      >
                        5. Get Currency Early
                      </Typography>
                      <Typography
                        variant="b1"
                        className="text-gray-700 leading-relaxed text-left"
                      >
                        Avoid airport exchange booths—they have the worst rates.
                        Order some local cash from your bank a week early for
                        initial expenses like taxis.
                      </Typography>
                    </div>
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
                                className="text-gray-600 leading-relaxed"
                              >
                                {faq.a}
                              </Typography>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Conclusion Image */}
                  <div className="rounded-3xl overflow-hidden border border-gray-100 relative h-[250px] md:h-[400px]">
                    <Image
                      src="/images/blog/blog-33-footer.jpeg"
                      alt="Organized travel wallet showing smart money management for a vacation."
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 gradient-to-t from-black/60 to-transparent flex items-end p-8">
                      <Typography
                        variant="h5"
                        className="text-white font-bold uppercase"
                      >
                        Smart planning ensures a smooth journey.
                      </Typography>
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
