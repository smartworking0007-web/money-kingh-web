"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Clock,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Target,
  TrendingUp,
  AlertOctagon,
  CheckCircle2,
  PieChart,
  Calendar,
  XCircle,
  FileText,
  Activity,
  ShieldCheck,
  HelpCircle,
} from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

interface FAQItem {
  q: string;
  a: string;
}

export const Blog48 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number): void =>
    setActiveFaq(activeFaq === index ? null : index);

  const faqs: FAQItem[] = [
    {
      q: "Q1. How long does it take to improve a CIBIL score?",
      a: "It typically takes about 30 to 90 days for updates to reflect in your CIBIL score. Banks and lenders report your repayment data to credit bureaus once a month, after which the report is refreshed.",
    },
    {
      q: "Q2. Does closing a loan increase your CIBIL score?",
      a: "Yes, absolutely. When you pay off an active loan in full and properly close it, your overall debt burden is reduced. This has a highly positive impact and boosts your credit profile over the long term.",
    },
    {
      q: "Q3. What is the minimum CIBIL score required for a personal loan?",
      a: "A CIBIL score of 750 or above is considered ideal for a personal loan and ensures fast approval. While some lenders may approve loans at a score of 700+, the interest rates offered might be slightly premium.",
    },
    {
      q: "Q4. Can I get a loan with a low CIBIL score?",
      a: "Securing a standard unsecured personal loan is difficult with a low CIBIL score. However, you can opt for secured lending options (such as a gold loan or a loan against a fixed deposit) or apply alongside a creditworthy co-applicant.",
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
            title="How to Improve Your CIBIL Score Quickly: Complete Guide 2026"
            category="CREDIT HEALTH"
            author="Kishan Baranwal"
            date="June 01, 2026"
            image="/images/blog/blog-48.png"
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
                <Typography
                  variant="caption"
                  as="span"
                  className="font-bold uppercase text-inherit"
                >
                  Back to Blogs
                </Typography>
              </button>
            </div>

            <div className="bg-white rounded-xl overflow-hidden border-gray-100 shadow-sm">
              <div className="relative h-[250px] sm:h-[300px] md:h-[500px] w-full">
                <Image
                  src="/images/blog/blog-48.png"
                  alt="A professional analyzing financial credit dashboard representing CIBIL score monitoring and improvement strategies"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="px-5 py-8 md:px-12 md:py-14 text-justify">
                <Typography
                  variant="h5"
                  className="text-[#1e3a8a] uppercase mt-0 text-2xl sm:text-3xl md:text-4xl"
                >
                  How to Improve Your CIBIL Score Quickly: Complete Guide 2026
                </Typography>

                <div className="flex gap-4 text-gray-400 mb-8 pb-4 border-b overflow-x-auto no-scrollbar">
                  <div className="flex items-center gap-2 shrink-0">
                    <Clock size={16} />
                    <Typography
                      variant="b2"
                      as="span"
                      className="text-gray-400"
                    >
                      June 01, 2026
                    </Typography>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Target size={16} />
                    <Typography
                      variant="b2"
                      as="span"
                      className="text-gray-400"
                    >
                      Credit Health
                    </Typography>
                  </div>
                </div>

                <div className="bg-blue-50/60 border border-blue-100 rounded-2xl p-6 mb-10">
                  <Typography
                    variant="h5"
                    className="text-[#1e3a8a] uppercase font-medium block mb-2 my-0"
                  >
                    Fast Track Your Credit Score Enhancement
                  </Typography>
                  <Typography variant="b2" className="text-gray-600 block">
                    Are your loan applications getting rejected repeatedly? A
                    poor credit history could be the primary reason. If you want
                    seamless financial agility in 2026, managing your credit
                    matrix must be your top priority. Let’s dive into how you
                    can optimize your CIBIL score without any delay.
                  </Typography>
                </div>

                <section className="space-y-12">
                  {/* Section 1 */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <TrendingUp
                        className="text-blue-600 shrink-0"
                        size={24}
                      />
                      <Typography
                        variant="h5"
                        className="text-gray-900 uppercase my-0 text-xl sm:text-2xl"
                      >
                        What is a CIBIL Score?
                      </Typography>
                    </div>
                    <Typography variant="b2" className="text-gray-600 block">
                      A CIBIL score is a 3-digit numeric summary of your past
                      credit behavior, repayment history, and overall financial
                      accountability. Generated by TransUnion CIBIL, this score
                      ranges between 300 and 900. For banks and fintech
                      platforms, it serves as the ultimate initial indicator of
                      your financial trustworthiness.
                    </Typography>
                  </div>

                  {/* Section 2 */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle2
                        className="text-green-600 shrink-0"
                        size={24}
                      />
                      <Typography
                        variant="h5"
                        className="text-gray-900 uppercase my-0 text-xl sm:text-2xl"
                      >
                        What is a Good CIBIL Score?
                      </Typography>
                    </div>
                    <Typography variant="b2" className="text-gray-600 block">
                      While any score above 700 is generally considered stable,
                      hitting a threshold of **750+** is crucial if you want
                      access to premium financial products and the lowest
                      possible interest rates. A high score enables smooth
                      access to home loans, business financing, and top-tier
                      credit cards without institutional bottlenecks.
                    </Typography>
                  </div>

                  {/* Section 3 */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <AlertOctagon
                        className="text-red-600 shrink-0"
                        size={24}
                      />
                      <Typography
                        variant="h5"
                        className="text-gray-900 uppercase my-0 text-xl sm:text-2xl"
                      >
                        Common Reasons for a Low CIBIL Score
                      </Typography>
                    </div>
                    <Typography variant="b2" className="text-gray-600 block">
                      A credit score does not drop without a cause. Certain
                      recurrent habits consistently damage your credit profile:
                    </Typography>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>
                        <strong>Late Payments:</strong> Missing deadlines on
                        credit card bills or active loan EMIs.
                      </li>
                      <li>
                        <strong>High Credit Utilization:</strong> Regularly
                        spending more than 30% of your available credit limit.
                      </li>
                      <li>
                        <strong>Multiple Enquiries:</strong> Applying for
                        multiple loans or credit cards simultaneously within a
                        short period (generating hard inquiries).
                      </li>
                      <li>
                        <strong>Negative Report Remnants:</strong> Possessing a
                        &apos;Settled&apos; or &apos;Written Off&apos; status on
                        historical accounts.
                      </li>
                    </ul>
                  </div>

                  {/* Section 4 Grid */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle2
                        className="text-cyan-600 shrink-0"
                        size={24}
                      />
                      <Typography
                        variant="h5"
                        className="text-gray-900 uppercase my-0 text-xl sm:text-2xl"
                      >
                        7 Effective Ways to Improve Your CIBIL Score
                      </Typography>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600 pt-2">
                      <div className="p-4 border border-gray-100 rounded-xl bg-slate-50/50">
                        <Typography
                          variant="s2"
                          className="font-bold text-gray-900 block mb-1"
                        >
                          1. Enable Autopay Systems
                        </Typography>
                        <Typography
                          variant="caption"
                          className="text-gray-500 block"
                        >
                          Automate your fixed EMIs and credit billings to ensure
                          no critical deadlines are accidentally missed.
                        </Typography>
                      </div>
                      <div className="p-4 border border-gray-100 rounded-xl bg-slate-50/50">
                        <Typography
                          variant="s2"
                          className="font-bold text-gray-900 block mb-1"
                        >
                          2. Restrict Your Utilization Ratio
                        </Typography>
                        <Typography
                          variant="caption"
                          className="text-gray-500 block"
                        >
                          Keep your monthly expenditure within 30% of your
                          aggregate available credit limits.
                        </Typography>
                      </div>
                      <div className="p-4 border border-gray-100 rounded-xl bg-slate-50/50">
                        <Typography
                          variant="s2"
                          className="font-bold text-gray-900 block mb-1"
                        >
                          3. Maintain a Balanced Credit Mix
                        </Typography>
                        <Typography
                          variant="caption"
                          className="text-gray-500 block"
                        >
                          Build a healthy combination of secured options
                          (gold/home loans) and unsecured components (credit
                          cards).
                        </Typography>
                      </div>
                      <div className="p-4 border border-gray-100 rounded-xl bg-slate-50/50">
                        <Typography
                          variant="s2"
                          className="font-bold text-gray-900 block mb-1"
                        >
                          4. Keep Vintage Accounts Open
                        </Typography>
                        <Typography
                          variant="caption"
                          className="text-gray-500 block"
                        >
                          Avoid closing your oldest active credit lines, as a
                          longer credit history positively reinforces your score
                          calculations.
                        </Typography>
                      </div>
                      <div className="p-4 border border-gray-100 rounded-xl bg-slate-50/50">
                        <Typography
                          variant="s2"
                          className="font-bold text-gray-900 block mb-1"
                        >
                          5. Rectify Credit Report Errors
                        </Typography>
                        <Typography
                          variant="caption"
                          className="text-gray-500 block"
                        >
                          Regularly audit your report to check for incorrect
                          entries, delayed bank postings, or unauthorized
                          listings.
                        </Typography>
                      </div>
                      <div className="p-4 border border-gray-100 rounded-xl bg-slate-50/50">
                        <Typography
                          variant="s2"
                          className="font-bold text-gray-900 block mb-1"
                        >
                          6. Monitor Co-signed Accounts
                        </Typography>
                        <Typography
                          variant="caption"
                          className="text-gray-500 block"
                        >
                          If you guarantee a loan for someone else, track its
                          performance; their defaults directly jeopardize your
                          profile.
                        </Typography>
                      </div>
                      <div className="p-4 border border-gray-100 rounded-xl bg-slate-50/50 sm:col-span-2">
                        <Typography
                          variant="s2"
                          className="font-bold text-gray-900 block mb-1"
                        >
                          7. Refrain from Frequent Hard Inquiries
                        </Typography>
                        <Typography
                          variant="caption"
                          className="text-gray-500 block"
                        >
                          Stop applying across multiple digital lending channels
                          concurrently, as it flags you as a risky,
                          credit-hungry consumer.
                        </Typography>
                      </div>
                    </div>
                  </div>

                  {/* Section 5 */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <PieChart
                        className="text-purple-600 shrink-0"
                        size={24}
                      />
                      <Typography
                        variant="h5"
                        className="text-gray-900 uppercase my-0 text-xl sm:text-2xl"
                      >
                        The Impact of Credit Card Utilization
                      </Typography>
                    </div>
                    <Typography variant="b2" className="text-gray-600 block">
                      Your Credit Utilization Ratio (CUR) significantly dictates
                      your final eligibility score. For instance, maxing out
                      your card limits signals fiscal stress to credit bureaus
                      even if you settle the balances on time. Requesting an
                      extension of your total credit limit while maintaining low
                      aggregate spending is a smart tactic.
                    </Typography>
                  </div>

                  {/* Section 6 */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Calendar className="text-amber-600 shrink-0" size={24} />
                      <Typography
                        variant="h5"
                        className="text-gray-900 uppercase my-0 text-xl sm:text-2xl"
                      >
                        Why Paying EMIs on Time is Crucial
                      </Typography>
                    </div>
                    <Typography variant="b2" className="text-gray-600 block">
                      Your repayment track record constitutes the largest single
                      component (roughly 35%) of your score logic. A single
                      overlooked installment can unravel months of disciplined
                      credit score gains. Relying on clearing schedules through
                      automated bank instructions is the safest practice.
                    </Typography>
                  </div>

                  {/* Section 7 Comparison Table */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <XCircle className="text-rose-600 shrink-0" size={24} />
                      <Typography
                        variant="h5"
                        className="text-gray-900 uppercase my-0 text-xl sm:text-2xl"
                      >
                        Loan Settlement vs. Loan Closure
                      </Typography>
                    </div>
                    <Typography variant="b2" className="text-gray-600 block">
                      Many consumers compromise their financial viability by
                      choosing short-sighted settlement offers. Understanding
                      the fundamental distinction between these terms is
                      crucial:
                    </Typography>

                    <div className="overflow-x-auto border border-gray-100 rounded-xl shadow-sm">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-slate-900 text-white">
                            <th className="p-4 font-bold text-sm uppercase">
                              Parameters
                            </th>
                            <th className="p-4 font-bold text-sm uppercase">
                              Loan Closure
                            </th>
                            <th className="p-4 font-bold text-sm uppercase">
                              Loan Settlement
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 bg-white">
                          <tr className="hover:bg-slate-50/50">
                            <td className="p-4 text-gray-900 font-semibold">
                              Payment Status
                            </td>
                            <td className="p-4 text-green-600 font-medium">
                              100% of Due Capital Paid Systematically
                            </td>
                            <td className="p-4 text-red-600 font-medium">
                              Lender Agrees to Waive Off Part of Dues
                            </td>
                          </tr>
                          <tr className="hover:bg-slate-50/50">
                            <td className="p-4 text-gray-900 font-semibold">
                              CIBIL Report Impact
                            </td>
                            <td className="p-4 text-gray-600">
                              Updated as &apos;Closed&apos; (Clean Record)
                            </td>
                            <td className="p-4 text-gray-600">
                              Marked as &apos;Settled&apos; (Negative Flag)
                            </td>
                          </tr>
                          <tr className="hover:bg-slate-50/50">
                            <td className="p-4 text-gray-900 font-semibold">
                              Future Borrowing Ease
                            </td>
                            <td className="p-4 text-gray-600">
                              Smooth, Fast, and Seamless Approvals
                            </td>
                            <td className="p-4 text-gray-600">
                              Extremely Difficult; Faces Repeated Rejections
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Section 8 */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <FileText
                        className="text-indigo-600 shrink-0"
                        size={24}
                      />
                      <Typography
                        variant="h5"
                        className="text-gray-900 uppercase my-0 text-xl sm:text-2xl"
                      >
                        How to Check Your Credit Report
                      </Typography>
                    </div>
                    <Typography variant="b1" className="text-gray-600 block">
                      You are legally entitled to access one free comprehensive
                      report annually through the official TransUnion CIBIL
                      portal. Alternatively, you can rely on verified banking
                      applications to monitor your monthly data trends and
                      tracking indexes securely.
                    </Typography>
                  </div>

                  {/* Section 9 */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Activity
                        className="text-orange-600 shrink-0"
                        size={24}
                      />
                      <Typography
                        variant="h5"
                        className="text-gray-900 uppercase my-0 text-xl sm:text-2xl"
                      >
                        How Long Does it Take for a Credit Score to Improve?
                      </Typography>
                    </div>
                    <Typography variant="b2" className="text-gray-600 block">
                      Credit recovery is a progressive process rather than an
                      instantaneous update. Once you regularize outstanding
                      debts and settle lingering errors, it typically requires a
                      **30 to 90-day** reporting cycles window for institutional
                      databases to refresh and log the growth trend.
                    </Typography>
                  </div>

                  {/* Section 10 Dark Banner */}
                  <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[40px] relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                      <ShieldCheck size={200} />
                    </div>
                    <div className="max-w-2xl relative z-10">
                      <div className="flex items-center gap-2 mb-3">
                        <ShieldCheck className="text-blue-400" size={20} />
                        <Typography
                          variant="h5"
                          className="text-blue-400 uppercase tracking-wide my-0"
                        >
                          Credit Improvement Guidance by Money King Financial
                          Services
                        </Typography>
                      </div>
                      <Typography variant="b2" className="text-gray-300">
                        At Money King Financial Services Pvt. Ltd., we go beyond
                        generic solutions to thoroughly diagnose your credit
                        profiles. Our wealth and personal credit advisory
                        frameworks provide you with deep analytical tracking,
                        optimal liability reorganization strategies, and a
                        structured recovery pipeline designed to accelerate
                        profile health faster than standard market channels.
                      </Typography>
                    </div>
                  </div>

                  {/* FAQ Section */}
                  <div className="pt-10 border-t border-gray-100">
                    <div className="flex items-center gap-2 mb-8">
                      <HelpCircle className="text-[#1e3a8a]" size={22} />
                      <Typography
                        variant="h5"
                        className="text-[#1e3a8a] uppercase underline decoration-blue-200 underline-offset-8 my-0"
                      >
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
                            <Typography
                              variant="s2"
                              className="font-bold text-gray-900"
                            >
                              {faq.q}
                            </Typography>
                            {activeFaq === index ? (
                              <ChevronUp
                                size={20}
                                className="text-[#1e3a8a] shrink-0 ml-4"
                              />
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
                                variant="b2"
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
                    <Typography
                      variant="caption"
                      as="span"
                      className="font-bold uppercase tracking-widest text-inherit"
                    >
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
