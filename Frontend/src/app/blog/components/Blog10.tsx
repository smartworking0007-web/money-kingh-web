"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Folder,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  ChevronRight,
} from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";
import { Button } from "@/app/components/ui/Button";

export const Blog10 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) =>
    setActiveFaq(activeFaq === index ? null : index);

  const faqs = [
    {
      q: "Q1. Does a car loan require more paperwork than a personal loan?",
      a: "Yes. A car loan requires the vehicle's proforma invoice, insurance copy, and RC tracking. A personal loan usually only requires your KYC and income proof.",
    },
    {
      q: "Q2. Can I pay off my car loan early?",
      a: "Yes, but most banks charge a Foreclosure Penalty (usually 2%–5%). Always check the fine print before signing.",
    },
    {
      q: "Q3. Will a car loan impact my CIBIL score differently?",
      a: "Both affect your score. However, a car loan is a 'Secured Loan,' which helps balance your Credit Mix, potentially helping your score more than an 'Unsecured' personal loan.",
    },
    {
      q: "Q4. Can I get a car loan for an Electric Vehicle (EV) at lower rates?",
      a: "Many banks now offer 'Green Car Loans' with a 0.50% discount on interest rates to encourage EV adoption in 2026.",
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
            title="Car Loan vs. Personal Loan: Which is the Smarter Way to Finance Your Dream Ride?"
            category="CAR LOAN"
            author="Sumit Mishra"
            date="May 05, 2026"
            image="/images/blog/blog-10.jpeg"
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
                  src="/images/blog/blog-10.jpeg"
                  alt="get your dream car with low emi"
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
                  Car Loan vs. Personal Loan: Which is the Smarter Way to
                  Finance Your Dream Ride?
                </Typography>

                <div className="flex gap-4 text-gray-400 mb-6 pb-4 border-b overflow-x-auto no-scrollbar">
                  <div className="flex items-center gap-2 shrink-0">
                    <Clock size={16} />
                    <Typography variant="b2">May 05, 2026</Typography>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Folder size={16} />
                    <Typography variant="b2">Car Loan</Typography>
                  </div>
                </div>

                <Typography
                  variant="s2"
                  className="text-gray-600 mb-10 font-medium leading-relaxed"
                >
                  Buying a car is a significant commitment. While most buyers
                  default to a standard car loan, savvy investors are
                  considering personal loans for flexibility. Let&apos;s find
                  your smarter choice.
                </Typography>

                <section className="space-y-10">
                  <div>
                    <Typography
                      variant="h5"
                      className="text-[#1e3a8a] mb-4 font-bold uppercase"
                    >
                      Understanding the Core Difference
                    </Typography>
                    <Typography
                      variant="b1"
                      className="text-gray-700 leading-relaxed mb-4"
                    >
                      The fundamental difference lies in collateral. A{" "}
                      <strong>Car Loan</strong> is secured and hypothecated to
                      the vehicle, while a <strong>Personal Loan</strong> is
                      unsecured and based on your creditworthiness.
                    </Typography>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
                      <Typography
                        variant="s1"
                        className="font-bold mb-2 text-blue-800"
                      >
                        Car Loans: The Economical Choice
                      </Typography>
                      <Typography variant="b2" className="text-gray-600">
                        Lower interest rates (8.5% - 11%) because the bank has
                        the security of the vehicle.
                      </Typography>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                      <Typography
                        variant="s1"
                        className="font-bold mb-2 text-gray-800"
                      >
                        Personal Loans: The Flexible Choice
                      </Typography>
                      <Typography variant="b2" className="text-gray-600">
                        Higher rates (11.5% - 18%) but offers 100% on-road
                        funding and instant ownership.
                      </Typography>
                    </div>
                  </div>

                  {/* Comparison Table */}
                  <div>
                    <Typography
                      variant="h5"
                      className="text-[#1e3a8a] mb-6 font-bold uppercase"
                    >
                      Head-to-Head Comparison
                    </Typography>
                    <div className="overflow-x-auto rounded-lg border border-gray-200">
                      <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="p-4 border-b font-bold text-gray-900">
                              Feature
                            </th>
                            <th className="p-4 border-b font-bold text-gray-900">
                              Car Loan
                            </th>
                            <th className="p-4 border-b font-bold text-gray-900">
                              Personal Loan
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="p-4 border-b text-gray-700 font-medium">
                              Interest Rate
                            </td>
                            <td className="p-4 border-b text-green-600 font-bold">
                              8.5% - 11%
                            </td>
                            <td className="p-4 border-b text-red-600">
                              11.5% - 18%
                            </td>
                          </tr>
                          <tr>
                            <td className="p-4 border-b text-gray-700 font-medium">
                              RC Status
                            </td>
                            <td className="p-4 border-b text-gray-600 text-sm">
                              Hypothecated
                            </td>
                            <td className="p-4 border-b text-gray-600 text-sm">
                              100% Personal
                            </td>
                          </tr>
                          <tr>
                            <td className="p-4 border-b text-gray-700 font-medium">
                              Down Payment
                            </td>
                            <td className="p-4 border-b text-gray-600 text-sm">
                              10% - 20% Required
                            </td>
                            <td className="p-4 border-b text-gray-600 text-sm">
                              Zero Possible
                            </td>
                          </tr>
                          <tr>
                            <td className="p-4 border-b text-gray-700 font-medium">
                              Approval Speed
                            </td>
                            <td className="p-4 border-b text-gray-600 text-sm">
                              Moderate
                            </td>
                            <td className="p-4 border-b text-gray-600 text-sm">
                              Instant
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <Typography
                      variant="h5"
                      className="text-[#1e3a8a] font-bold uppercase"
                    >
                      When to Choose What?
                    </Typography>
                    <div className="space-y-4">
                      <div className="flex gap-3 items-start">
                        <ChevronRight
                          className="text-blue-600 shrink-0 mt-1"
                          size={18}
                        />
                        <Typography variant="b1">
                          Choose a <strong>Car Loan</strong> if you are
                          budget-conscious and plan to keep the vehicle for 5+
                          years.
                        </Typography>
                      </div>
                      <div className="flex gap-3 items-start">
                        <ChevronRight
                          className="text-blue-600 shrink-0 mt-1"
                          size={18}
                        />
                        <Typography variant="b1">
                          Choose a <strong>Personal Loan</strong> if you want
                          zero down payment, absolute ownership from Day 1, or
                          are buying a used car.
                        </Typography>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#1e3a8a] text-white p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 my-14 shadow-2xl">
                    <div className="text-center md:text-left">
                      <Typography
                        variant="h5"
                        className="text-white mb-2 font-bold uppercase"
                      >
                        Drive Your Dream Today
                      </Typography>
                      <Typography
                        variant="b2"
                        className="text-blue-100 opacity-80"
                      >
                        Compare the best lending partners with Money King
                        Financial.
                      </Typography>
                    </div>
                    <Link href="/contact" className="w-full md:w-auto">
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
                      className="text-[#1e3a8a] mb-8 font-bold uppercase underline decoration-blue-200 underline-offset-8"
                    >
                      Frequently Asked Questions
                    </Typography>
                    <div className="space-y-4">
                      {faqs.map((faq, index) => (
                        <div
                          key={index}
                          className="border border-gray-100 rounded-lg overflow-hidden shadow-sm"
                        >
                          <button
                            onClick={() => toggleFaq(index)}
                            className="w-full flex items-center justify-between p-4 md:p-5 text-left bg-gray-50 hover:bg-white transition-colors"
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

                <div className="mt-10">
                  <ShareSection />
                </div>
                <div className="mt-8 flex justify-center border-t pt-5">
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
