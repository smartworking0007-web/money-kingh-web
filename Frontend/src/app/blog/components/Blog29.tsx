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
  Briefcase,
  Layers,
  MapPin,
  CheckCircle2,
  AlertOctagon,
  Percent,
} from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

interface FAQItem {
  q: string;
  a: string;
}

export const Blog29 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number): void =>
    setActiveFaq(activeFaq === index ? null : index);

  const faqs: FAQItem[] = [
    {
      q: "Q1. What is the Composition Scheme?",
      a: "It is a simplified scheme for small businesses (turnover up to ₹1.5 Crore). You pay a flat, lower tax rate and file one quarterly return. However, you cannot claim Input Tax Credit under this scheme.",
    },
    {
      q: "Q2. Is GST registration permanent?",
      a: "Yes, unless it is surrendered by the taxpayer or cancelled by the GST authority due to non-compliance or the closure of business operations.",
    },
    {
      q: "Q3. Do I need to file a return if I had zero sales this month?",
      a: "Yes. You must file a 'Nil Return' even if there were no business transactions. Failure to do so results in daily late fees and penalties.",
    },
    {
      q: "Q4. Can I register for GST voluntarily even if my turnover is low?",
      a: "Absolutely. Many small businesses register voluntarily to claim Input Tax Credit on their purchases and to appear more professional to larger corporate clients.",
    },
    {
      q: "Q5. How long does the registration process take?",
      a: "Typically, once all digital documents are submitted correctly, the GST officer approves the application within 3 to 7 working days.",
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
            title="The Definitive Guide to GST: Everything Indian Business Owners Need to Know"
            category="BUSINESS"
            author="Sumit Mishra"
            date="May 12, 2026"
            image="/images/blog/blog-29.jpeg"
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

            <div className="bg-white rounded-xl overflow-hidden border-gray-100">
              <div className="relative h-[250px] sm:h-[300px] md:h-[500px] w-full">
                <Image
                  src="/images/blog/blog-29.jpeg"
                  alt="Everything is depend on gst according to business"
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
                  GST 2026: The Badge of Business Transparency
                </Typography>

                <div className="flex gap-4 text-gray-400 mb-8 pb-4 border-b overflow-x-auto no-scrollbar">
                  <div className="flex items-center gap-2 shrink-0">
                    <Clock size={16} />
                    <Typography variant="b2">May 12, 2026</Typography>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Folder size={16} />
                    <Typography variant="b2">Business</Typography>
                  </div>
                </div>

                <Typography
                  variant="s2"
                  className="text-gray-600 mb-10 font-medium leading-relaxed block "
                >
                  Since 2017, GST has changed the DNA of Indian business. For an
                  entrepreneur, it is not just a tax—it is a tool for better
                  credit and smoother logistics.
                </Typography>

                <section className="space-y-12">
                  {/* Types of GST Section */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 text-center">
                      <Layers
                        className="text-blue-600 mx-auto mb-3"
                        size={28}
                      />
                      <Typography
                        variant="s1"
                        className="font-bold mb-2 block text-blue-900"
                      >
                        CGST
                      </Typography>
                      <Typography variant="caption" className="text-gray-600">
                        Central GST for transactions within a single state.
                      </Typography>
                    </div>
                    <div className="p-6 bg-green-50 rounded-2xl border border-green-100 text-center">
                      <Briefcase
                        className="text-green-600 mx-auto mb-3"
                        size={28}
                      />
                      <Typography
                        variant="s1"
                        className="font-bold mb-2 block text-green-900"
                      >
                        SGST
                      </Typography>
                      <Typography variant="caption" className="text-gray-600">
                        State GST collected by the respective State Government.
                      </Typography>
                    </div>
                    <div className="p-6 bg-purple-50 rounded-2xl border border-purple-100 text-center">
                      <MapPin
                        className="text-purple-600 mx-auto mb-3"
                        size={28}
                      />
                      <Typography
                        variant="s1"
                        className="font-bold mb-2 block text-purple-900"
                      >
                        IGST
                      </Typography>
                      <Typography variant="caption" className="text-gray-600">
                        Integrated GST for inter-state deals and imports.
                      </Typography>
                    </div>
                  </div>

                  {/* Tax Slabs Table */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <Percent className="text-[#1e3a8a]" />
                      <Typography
                        variant="h5"
                        className="font-bold text-gray-900 uppercase"
                      >
                        GST Tax Brackets (Slabs)
                      </Typography>
                    </div>
                    <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-md">
                      <table className="w-full text-left border-collapse bg-white">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="p-4 border-b font-bold text-gray-900">
                              Slab Rate
                            </th>
                            <th className="p-4 border-b font-bold text-[#1e3a8a]">
                              Category Example
                            </th>
                          </tr>
                        </thead>
                        <tbody className="text-sm">
                          <tr>
                            <td className="p-4 border-b font-bold">0% (Nil)</td>
                            <td className="p-4 border-b">
                              Fresh vegetables, milk, salt.
                            </td>
                          </tr>
                          <tr>
                            <td className="p-4 border-b font-bold">5%</td>
                            <td className="p-4 border-b">
                              Sugar, spices, life-saving drugs.
                            </td>
                          </tr>
                          <tr>
                            <td className="p-4 border-b font-bold">12%</td>
                            <td className="p-4 border-b">
                              Processed food, butter, cell phones.
                            </td>
                          </tr>
                          <tr className="bg-blue-50/30">
                            <td className="p-4 border-b font-bold">18%</td>
                            <td className="p-4 border-b font-medium text-blue-700">
                              Most Services & Capital Goods (Common).
                            </td>
                          </tr>
                          <tr>
                            <td className="p-4 border-b font-bold">28%</td>
                            <td className="p-4 border-b">
                              Cars, tobacco, luxury items.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Registration Checklist */}
                  <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[40px] relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <FileText size={150} />
                    </div>
                    <Typography
                      variant="h5"
                      className="text-blue-400 mb-8 font-bold uppercase text-center"
                    >
                      Registration Digital Checklist
                    </Typography>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                      {[
                        {
                          title: "Proof of Identity",
                          desc: "PAN Card and Aadhaar Omitted for security.",
                        },
                        {
                          title: "Business Proof",
                          desc: "Incorporation certificate or Partnership deed.",
                        },
                        {
                          title: "Place of Business",
                          desc: "Utility bills or registered rent agreement.",
                        },
                        {
                          title: "Bank Evidence",
                          desc: "Cancelled cheque or bank statement copy.",
                        },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="flex gap-4 items-start bg-white/5 p-4 rounded-xl"
                        >
                          <CheckCircle2
                            className="text-green-400 shrink-0"
                            size={20}
                          />
                          <div>
                            <Typography
                              variant="s2"
                              className="text-white font-bold"
                            >
                              {item.title}
                            </Typography>
                            <Typography
                              variant="caption"
                              className="text-gray-400"
                            >
                              {item.desc}
                            </Typography>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Non-Compliance Warning */}
                  <div className="p-8 bg-red-50 rounded-3xl border border-red-100 flex flex-col md:flex-row items-center gap-8">
                    <AlertOctagon className="text-red-600 shrink-0" size={48} />
                    <div>
                      <Typography
                        variant="h5"
                        className="text-red-900 font-bold mb-2 uppercase"
                      >
                        Consequences of Non-Compliance
                      </Typography>
                      <Typography
                        variant="b1"
                        className="text-gray-700 leading-relaxed"
                      >
                        Ignoring GST can lead to <strong>18% interest</strong>{" "}
                        on late payments and a minimum penalty of ₹10,000. More
                        importantly, large corporate clients will refuse to work
                        with you as they cannot claim{" "}
                        <strong>Input Tax Credit (ITC)</strong> on your
                        invoices.
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
