"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Folder, ArrowLeft, ChevronDown, ChevronUp, ChevronRight } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";
import { Button } from "@/app/components/ui/Button";

export const Blog3 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) =>
    setActiveFaq(activeFaq === index ? null : index);

  const faqs = [
    {
      q: "Q1. Is there a maintenance fee for a Demat account?",
      a: "Most providers charge an Annual Maintenance Charge (AMC). At Money King Financial, we help you find plans with the most transparent and competitive fee structures.",
    },
    {
      q: "Q2. Can I transfer shares from one Demat account to another?",
      a: "Yes, shares can be transferred via an Off-Market Transfer or through the EASIEST portal provided by CDSL/NSDL.",
    },
    {
      q: "Q3. Is a Demat account safe?",
      a: "Absolutely. Your holdings are kept with national depositories (NSDL/CDSL) and regulated by SEBI, making it one of the safest ways to hold assets in India.",
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
            title="Beyond Savings: The 2026 Strategy to Build Your Digital Portfolio"
            category="DEMAT ACCOUNT"
            author="Sumit Mishra"
            date="April 30, 2026"
            image="/images/blog/blog-3.jpeg"
          />
        </div>
      ) : (
        <div className="fixed inset-0 z-40 bg-white overflow-y-auto pt-20 md:pt-28 no-scrollbar animate-in fade-in duration-300">
          <div className="relative max-w-5xl mx-auto pb-20 px-4 md:px-6">
            <div className="mb-6 text-left">
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center pt-3 text-gray-500 hover:text-[#1e3a8a] transition-colors font-bold uppercase  cursor-pointer tracking-widest"
              >
                <ArrowLeft size={14} /> Back to Blogs
              </button>
            </div>

            <div className="bg-white rounded-xl overflow-hidden border-gray-100">
              <div className="relative h-[250px] sm:h-[300px] md:h-[500px] w-full">
                <Image
                  src="/images/blog/blog-3.jpeg"
                  alt="Open demat account with zero charges"
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
                  Beyond Savings: The 2026 Strategy to Build Your Digital Portfolio
                </Typography>

                <div className="flex gap-4 text-gray-400 mb-6 pb-4 border-b">
                  <div className="flex items-center gap-2 shrink-0">
                    <Clock size={16} />
                    <Typography variant="b2">April 30, 2026</Typography>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Folder size={16} />
                    <Typography variant="b2">Demat Account</Typography>
                  </div>
                </div>

                <Typography
                  variant="s2"
                  className="text-gray-600 mb-10 font-medium leading-relaxed text-left"
                >
                  Your bank account is for expenses; your Demat account is for wealth. Master the art of digital investing in 2026 and see how Money King Financial turns your phone into a profit machine.
                </Typography>

                <section className="space-y-10">
                  <div>
                    <Typography
                      variant="h5"
                      className="text-[#1e3a8a] mb-4 font-bold uppercase text-left"
                    >
                      The Digital Vault: Why Your Wealth Needs a Demat Account
                    </Typography>
                    {/* Quotes fix: ' ki jagah &apos; use kiya hai */}
                    <Typography variant="b1" className="text-gray-700 leading-relaxed">
                      In 2026, keeping all your money in a savings account is like leaving your car in the garage&apos;it&apos;s safe, but it&apos;s not taking you anywhere. To truly scale your lifestyle, you need to own a piece of the economy. A Demat Account is your entry ticket to the world of Stocks, ETFs, and IPOs.
                    </Typography>
                  </div>

                  <div>
                    <Typography
                      variant="h5"
                      className="text-[#1e3a8a] mb-4 font-bold uppercase text-left"
                    >
                      5-Minute Setup: Your Launchpad to the Markets
                    </Typography>
                    <ul className="space-y-3 text-left">
                      <li className="flex items-start gap-2">
                        <ChevronRight size={18} className="text-blue-600 mt-1 shrink-0" />
                        <Typography variant="b1"><strong>PAN Card:</strong> Your identity in the financial world.</Typography>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight size={18} className="text-blue-600 mt-1 shrink-0" />
                        <Typography variant="b1"><strong>Aadhaar Card:</strong> Linked to your mobile for E-KYC.</Typography>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#1e3a8a] text-white p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 my-14 shadow-2xl">
                    <div className="text-center md:text-left">
                      <Typography variant="h5" className="text-white mb-2 font-bold uppercase">Ready to start investing?</Typography>
                      <Typography variant="b2" className="text-blue-100 opacity-80">Open your zero-charge demat account in 5 minutes.</Typography>
                    </div>
                    <Link href="https://moneykingfinancial.com/services/stock/mstock" className="w-full md:w-auto">
                      <Button
                        size="lg"
                        className="bg-white text-[#1e3a8a] hover:bg-gray-100 px-12 py-6 w-full font-bold text-lg shadow-lg"
                      >
                        Apply Now
                      </Button>
                    </Link>
                  </div>

                  <div className="pt-10 border-t border-gray-100">
                    <Typography
                      variant="h5"
                      className="text-[#1e3a8a] mb-8 font-bold uppercase underline decoration-blue-200 underline-offset-8 text-left"
                    >
                      FAQs
                    </Typography>
                    <div className="space-y-2">
                      {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-100 rounded-lg overflow-hidden shadow-sm">
                          <button
                            onClick={() => toggleFaq(index)}
                            className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-white transition-colors text-left"
                          >
                            <Typography variant="s2" className="font-bold text-gray-900 leading-tight">{faq.q}</Typography>
                            {activeFaq === index ? <ChevronUp size={20} className="text-[#1e3a8a]" /> : <ChevronDown size={20} className="text-gray-400" />}
                          </button>
                          {activeFaq === index && (
                            <div className="p-5 bg-white border-t border-gray-100 animate-in slide-in-from-top-2 duration-300 text-left">
                              <Typography variant="b1" className="text-gray-600">{faq.a}</Typography>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <div className="mt-10 text-left">
                  <ShareSection />
                </div>
                <div className="mt-0 flex justify-center border-t pt-5">
                  <Button
                    variant="ghost"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 cursor-pointer hover:text-[#1e3a8a]"
                  >
                    ← Back to Article List
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};