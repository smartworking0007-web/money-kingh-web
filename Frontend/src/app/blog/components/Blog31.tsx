"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Clock,
  Folder,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  FileText,
  Building2,
  Wallet,
  Users,
  CheckCircle2,
} from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";


interface FAQItem {
  q: string;
  a: string;
}

export const Blog31 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number): void =>
    setActiveFaq(activeFaq === index ? null : index);

  const faqs: FAQItem[] = [
    {
      q: "1. Why do I need so many original copies of the death certificate?",
      a: "Most financial institutions, like banks and insurance companies, require an original certified copy to process claims. Photocopies are often rejected to prevent fraud, so having 10–12 originals ensures you can handle multiple tasks simultaneously.",
    },
    {
      q: "2. How do I stop a deceased person’s Social Security payments?",
      a: "Notify the Social Security Administration (SSA) as soon as possible. While funeral directors often do this, confirming it yourself prevents overpayments that the government would later require you to pay back.",
    },
    {
      q: "3. What happens to a person’s debt after they pass away?",
      a: "Debts are typically paid out of the deceased person’s estate. It is important to notify lenders early and contact credit bureaus to place a 'deceased alert' on their report to prevent identity theft.",
    },
    {
      q: "4. Can I still use a joint bank account after my loved one dies?",
      a: "In many cases, yes, if held as 'Joint Tenants with Right of Survivorship'. However, notify the bank to update the account title and ensure uninterrupted access to funds for immediate expenses like funeral costs.",
    },
    {
      q: "5. Who can help me if there is no Will?",
      a: "If there is no Will, the estate is settled according to state 'intestacy' laws. It is highly recommended to consult an estate attorney to guide you through the legal probate process.",
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
            title="5 Crucial Financial Steps to Take After the Loss of a Loved One"
            category="PLANNING"
            author="Sumit Mishra"
            date="May 14, 2026"
            image="/images/blog/blog-31.jpeg"
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
                  src="/images/blog/blog-31.jpeg"
                  alt="Person planning finances calmly after the loss of a loved one with a notebook on a desk."
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="px-5 py-8 md:px-12 md:py-14 text-justify">
                <Typography variant="h5" className="text-[#1e3a8a] mb-4 font-bold leading-tight uppercase">
                  Navigating Financial Transition with Grace
                </Typography>

                <div className="flex gap-4 text-gray-400 mb-8 pb-4 border-b overflow-x-auto no-scrollbar">
                  <div className="flex items-center gap-2 shrink-0">
                    <Clock size={16} />
                    <Typography variant="b2">May 14, 2026</Typography>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Folder size={16} />
                    <Typography variant="b2">Planning</Typography>
                  </div>
                </div>

                <Typography variant="s2" className="text-gray-600 mb-10 font-medium leading-relaxed block ">
                  Amidst grief, practical financial matters require attention. Taking organized steps can alleviate stress during this difficult transition.
                </Typography>

                <section className="space-y-12">
                  {/* Step 1 & 2 Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                      <Users className="text-blue-600 mb-4" size={28} />
                      <Typography variant="h5" className="font-bold uppercase mb-3">1. Seek Professional Guidance</Typography>
                      <Typography variant="b2" className="text-gray-600">
                        Reach out to financial advisors, estate attorneys, and tax professionals to navigate legalities and account updates.
                      </Typography>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                      <FileText className="text-blue-600 mb-4" size={28} />
                      <Typography variant="h5" className="font-bold uppercase mb-3">2. Secure Death Certificates</Typography>
                      <Typography variant="b2" className="text-gray-600">
                        Obtain multiple certified copies. These are essential for closing accounts, filing claims, and transferring titles.
                      </Typography>
                    </div>
                  </div>

                  {/* Document Checklist */}
                  <div className="bg-[#1e3a8a] text-white p-8 md:p-12 rounded-[40px] shadow-xl">
                    <Typography variant="h5" className="text-white mb-6 font-bold uppercase flex items-center gap-3">
                      <CheckCircle2 className="text-blue-300" /> 3. Organize Important Documents
                    </Typography>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-blue-100">
                      <p>• Last Will and Testament / Trust</p>
                      <p>• Life Insurance Policies</p>
                      <p>• Bank and Investment Statements</p>
                      <p>• Property Deeds and Vehicle Titles</p>
                    </div>
                  </div>

                  {/* Notify Institutions */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 border-l-4 border-orange-400 pl-4">
                      <Building2 className="text-orange-500" />
                      <Typography variant="h5" className="font-bold text-gray-900 uppercase">4. Notify Institutions</Typography>
                    </div>
                    <Typography variant="b1" className="text-gray-700 leading-relaxed">
                      Inform the Social Security Administration, credit bureaus, and insurance companies to prevent fraud and initiate claims. Remember to cancel recurring subscriptions like Netflix or gym memberships.
                    </Typography>
                  </div>

                  {/* Liquidity Assessment */}
                  <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 flex flex-col md:flex-row items-center gap-8">
                     <Wallet className="text-blue-600 shrink-0" size={48} />
                     <div>
                        <Typography variant="h5" className="text-blue-900 font-bold mb-2 uppercase">5. Assess Immediate Liquidity</Typography>
                        <Typography variant="b1" className="text-gray-700 leading-relaxed">
                           Identify accessible funds for immediate funeral costs and expenses, as some accounts may be frozen during probate. Create a new long-term budget reflecting your current reality.
                        </Typography>
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