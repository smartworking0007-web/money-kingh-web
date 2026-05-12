"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Clock,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  ShieldAlert,
  Lock,
  Smartphone,
  UserX,
  AlertTriangle,
  CheckCircle2,
  PhoneOff,
} from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

interface FAQItem {
  q: string;
  a: string;
}

export const Blog30 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number): void =>
    setActiveFaq(activeFaq === index ? null : index);

  const faqs: FAQItem[] = [
    {
      q: "Q1. Can a fraudster withdraw money with just my phone number?",
      a: "No. A phone number alone isn't enough. They usually need your bank details OR your OTP to gain access to your funds. This is why keeping the OTP private is critical.",
    },
    {
      q: "Q2. Is it safe to share an OTP if the caller sounds professional?",
      a: "No. Fraudsters often use professional scripts and may even have some of your basic details to sound legitimate. Regardless of how professional they sound, never share your OTP.",
    },
    {
      q: "Q3. Why do I receive OTPs when I am not doing any transaction?",
      a: "This means someone is trying to log into your account. If you get an 'unsolicited' OTP, it is a red flag. Change your passwords immediately and do not forward that SMS to anyone.",
    },
    {
      q: "Q4. Can I share an OTP with a 'Channel Partner' or Agent?",
      a: "No. Even if an agent is helping you with a loan application, they do not need your OTP. You should always enter the OTP yourself on the official website or app.",
    },
    {
      q: "Q5. Does Money King Financial use OTPs for login?",
      a: "Yes, we use OTPs to ensure that only you can access your account. We send it so you can use it personally, not so you can tell it to someone else.",
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
            title="Digital Safety First: Why You Should Never Share Your OTP (Even With Us)"
            category="SECURITY"
            author="Sumit Mishra"
            date="May 12, 2026"
            image="/images/blog/blog-30.jpeg"
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
                  src="/images/blog/blog-30.jpeg"
                  alt="secure-digital-banking-otp-protection"
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
                  Protecting Your Digital Key: The OTP Safety Guide
                </Typography>

                <div className="flex gap-4 text-gray-400 mb-8 pb-4 border-b overflow-x-auto no-scrollbar">
                  <div className="flex items-center gap-2 shrink-0">
                    <Clock size={16} />
                    <Typography variant="b2">May 12, 2026</Typography>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <ShieldAlert size={16} />
                    <Typography variant="b2">Security</Typography>
                  </div>
                </div>

                <Typography
                  variant="s2"
                  className="text-gray-600 mb-10 font-medium leading-relaxed block "
                >
                  In digital banking, your OTP is the final barrier between your
                  money and a criminal. The strongest lock is useless if you
                  hand over the key.
                </Typography>

                <section className="space-y-12">
                  {/* Power of OTP Section */}
                  <div className="bg-blue-50 p-6 md:p-8 rounded-3xl border border-blue-100 flex flex-col md:flex-row gap-6 items-center">
                    <div className="bg-blue-600 p-4 rounded-2xl text-white shrink-0">
                      <Lock size={32} />
                    </div>
                    <div>
                      <Typography
                        variant="h5"
                        className="font-bold text-blue-900 uppercase mb-2"
                      >
                        The Power of 2FA
                      </Typography>
                      <Typography
                        variant="b1"
                        className="text-gray-700 leading-relaxed"
                      >
                        Even if a fraudster knows your password, bank details,
                        or PAN, they cannot complete a transaction without that
                        4 or 6-digit code. It acts as your{" "}
                        <strong>Second Factor of Authentication.</strong>
                      </Typography>
                    </div>
                  </div>

                  {/* Scammer Tactics Grid */}
                  <div className="space-y-6">
                    <Typography
                      variant="h5"
                      className="font-bold text-gray-900 uppercase"
                    >
                      Common Scammer Tactics
                    </Typography>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="p-6 border border-gray-100 rounded-2xl shadow-sm">
                        <Smartphone className="text-red-500 mb-3" size={24} />
                        <Typography
                          variant="s2"
                          className="font-bold mb-2 block uppercase"
                        >
                          The KYC Trap
                        </Typography>
                        <Typography variant="caption" className="text-gray-500">
                          Threats that your account will be blocked unless you
                          &quot;verify&quot; via OTP.
                        </Typography>
                      </div>
                      <div className="p-6 border border-gray-100 rounded-2xl shadow-sm">
                        <AlertTriangle
                          className="text-orange-500 mb-3"
                          size={24}
                        />
                        <Typography
                          variant="s2"
                          className="font-bold mb-2 block uppercase"
                        >
                          Loan Scams
                        </Typography>
                        <Typography variant="caption" className="text-gray-500">
                          Asking for an OTP to &quot;process fees&quot; for a
                          pre-approved loan.
                        </Typography>
                      </div>
                      <div className="p-6 border border-gray-100 rounded-2xl shadow-sm">
                        <UserX className="text-purple-500 mb-3" size={24} />
                        <Typography
                          variant="s2"
                          className="font-bold mb-2 block uppercase"
                        >
                          Reward Tricks
                        </Typography>
                        <Typography variant="caption" className="text-gray-500">
                          Claiming you won a prize that requires a code to be
                          redeemed.
                        </Typography>
                      </div>
                    </div>
                  </div>

                  {/* The Golden Rule */}
                  <div className="bg-red-600 text-white p-8 md:p-12 rounded-[40px] relative overflow-hidden shadow-xl">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <PhoneOff size={60} className="text-red-200 shrink-0" />
                      <div>
                        <Typography
                          variant="h5"
                          className="text-white mb-4 font-bold uppercase"
                        >
                          The Money King Safety Protocol
                        </Typography>
                        <Typography
                          variant="b1"
                          className="text-red-50 leading-relaxed"
                        >
                          <strong>Money King Financial</strong> or any
                          legitimate Bank will <strong>NEVER</strong> ask for
                          your OTP, CVV, or PIN over a phone call, SMS, or
                          Email. If someone asks, hang up immediately.
                        </Typography>
                      </div>
                    </div>
                  </div>

                  {/* Emergency Steps */}
                  <div className="space-y-6">
                    <Typography
                      variant="h5"
                      className="font-bold text-gray-900 uppercase"
                    >
                      Accidentally Shared an OTP?
                    </Typography>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-5 bg-gray-50 rounded-2xl flex gap-4">
                        <div className="text-blue-600 shrink-0">
                          <CheckCircle2 />
                        </div>
                        <Typography variant="b2">
                          <strong>Freeze Accounts:</strong> Use your banking app
                          to block all cards immediately.
                        </Typography>
                      </div>
                      <div className="p-5 bg-gray-50 rounded-2xl flex gap-4">
                        <div className="text-blue-600 shrink-0">
                          <CheckCircle2 />
                        </div>
                        <Typography variant="b2">
                          <strong>Report:</strong> Call the national helpline{" "}
                          <strong>1930</strong> or visit official cybercrime
                          portals.
                        </Typography>
                      </div>
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
