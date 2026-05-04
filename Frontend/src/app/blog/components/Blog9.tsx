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
} from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";
import { Button } from "@/app/components/ui/Button";

export const Blog9 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) =>
    setActiveFaq(activeFaq === index ? null : index);

  const faqs = [
    {
      q: "Q1. Do I need a registered company to get a business credit card?",
      a: "Most banks require you to be a Sole Proprietor, Partner, or Director. You will typically need to show business registration (like GST or MSME certificate) and ITR of the business.",
    },
    {
      q: "Q2. Can I get a business card if my startup is new?",
      a: "If the business is new, banks may offer a card based on your personal credit score and income, but the card will still be in the company's name to help start its credit journey.",
    },
    {
      q: "Q3. Are business credit card rewards different?",
      a: "Yes. Instead of movie tickets, you often earn higher rewards on 'Business Categories' such as Google/Meta Ads, cloud hosting services (AWS/Azure), and corporate travel.",
    },
    {
      q: "Q4. What is 'Corporate Liability'?",
      a: "This means the company is responsible for the debt. However, for many small businesses, banks may still require a 'Personal Guarantee' from the owner.",
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
            title="Credit Card for Small Business: Why Entrepreneurs Should Keep Personal and Business Expenses Separate"
            category="BUSINESS FINANCE"
            author="Sumit Mishra"
            date="May 04, 2026"
            image="/images/blog/blog-9.jpeg"
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
                  src="/images/blog/blog-9.jpeg"
                  alt="Comparison-table-for-business-and-personal-credit-card-features"
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
                  Credit Card for Small Business: Why Entrepreneurs Should Keep Personal and Business Expenses Separate
                </Typography>

                <div className="flex gap-4 text-gray-400 mb-6 pb-4 border-b overflow-x-auto no-scrollbar">
                  <div className="flex items-center gap-2 shrink-0">
                    <Clock size={16} />
                    <Typography variant="b2">May 04, 2026</Typography>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Folder size={16} />
                    <Typography variant="b2">Business Finance</Typography>
                  </div>
                </div>

                <Typography
                  variant="s2"
                  className="text-gray-600 mb-10 font-medium leading-relaxed"
                >
                  Mixing personal and business finances is a &quot;financial trap&quot; that can hinder your growth. Discover why keeping these expenses separate is vital for your success.
                </Typography>

                <section className="space-y-10">
                  <div className="space-y-6">
                    <div>
                      <Typography variant="h5" className="text-[#1e3a8a] mb-2 font-bold uppercase">1. Building a Business Credit History</Typography>
                      <Typography variant="b1" className="text-gray-700">A strong business credit score makes it much easier to secure high-value Business Expansion Loans or Unsecured Business Loans at lower interest rates in the future.</Typography>
                    </div>
                    <div>
                      <Typography variant="h5" className="text-[#1e3a8a] mb-2 font-bold uppercase">2. Simplified Tax Compliance & Accounting</Typography>
                      <Typography variant="b1" className="text-gray-700">Separate cards ensure that 100% of the transactions on your business statement are tax-deductible expenses, making audits much smoother.</Typography>
                    </div>
                    <div>
                      <Typography variant="h5" className="text-[#1e3a8a] mb-2 font-bold uppercase">3. Higher Credit Limits</Typography>
                      <Typography variant="b1" className="text-gray-700">Business cards provide the liquidity you need for bulk purchases without &quot;maxing out&quot; your personal credit and hurting your personal score.</Typography>
                    </div>
                    <div>
                      <Typography variant="h5" className="text-[#1e3a8a] mb-2 font-bold uppercase">4. Protecting Your Personal Credit Score</Typography>
                      <Typography variant="b1" className="text-gray-700">High business expenses on your personal card can cause your score to plummet. Business cards shift that liability away from your personal report.</Typography>
                    </div>
                  </div>

                  {/* Comparison Table */}
                  <div>
                    <Typography variant="h5" className="text-[#1e3a8a] mb-6 font-bold uppercase">Business vs. Personal Credit Cards: At a Glance</Typography>
                    <div className="overflow-x-auto rounded-lg border border-gray-200">
                      <table className="w-full text-left border-collapse">
                        <thead className="bg-blue-50">
                          <tr>
                            <th className="p-4 border-b font-bold text-gray-900">Feature</th>
                            <th className="p-4 border-b font-bold text-gray-900">Personal Card</th>
                            <th className="p-4 border-b font-bold text-gray-900">Business Card</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="hover:bg-gray-50">
                            <td className="p-4 border-b text-gray-700 font-medium">Primary Goal</td>
                            <td className="p-4 border-b text-gray-600 text-sm">Personal lifestyle</td>
                            <td className="p-4 border-b text-gray-600 text-sm">Business growth</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="p-4 border-b text-gray-700 font-medium">Credit Limit</td>
                            <td className="p-4 border-b text-gray-600 text-sm">Based on income</td>
                            <td className="p-4 border-b text-gray-600 text-sm">Based on turnover</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="p-4 border-b text-gray-700 font-medium">Reporting</td>
                            <td className="p-4 border-b text-gray-600 text-sm">CIBIL</td>
                            <td className="p-4 border-b text-gray-600 text-sm">Business Bureaus</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="p-4 border-b text-gray-700 font-medium">Rewards</td>
                            <td className="p-4 border-b text-gray-600 text-sm">Movies & Dining</td>
                            <td className="p-4 border-b text-gray-600 text-sm">SaaS & Ads</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="bg-[#1e3a8a] text-white p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 my-14 shadow-2xl">
                    <div className="text-center md:text-left">
                      <Typography variant="h5" className="text-white mb-2 font-bold uppercase">Empower Your Venture</Typography>
                      <Typography variant="b2" className="text-blue-100 opacity-80">Separate your finances and build your company&apos;s credit today.</Typography>
                    </div>
                    <Link href="/contact" className="w-full md:w-auto">
                      <Button size="lg" className="bg-white text-[#1e3a8a] hover:bg-gray-100 px-12 py-6 w-full font-bold text-lg shadow-lg">Apply Now</Button>
                    </Link>
                  </div>

                  {/* FAQ Section */}
                  <div className="pt-10 border-t border-gray-100">
                    <Typography variant="h5" className="text-[#1e3a8a] mb-8 font-bold uppercase underline decoration-blue-200 underline-offset-8">Frequently Asked Questions</Typography>
                    <div className="space-y-4">
                      {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-100 rounded-lg overflow-hidden shadow-sm">
                          <button onClick={() => toggleFaq(index)} className="w-full flex items-center justify-between p-4 md:p-5 text-left bg-gray-50 hover:bg-white transition-colors">
                            <Typography variant="s2" className="font-bold text-gray-900 leading-tight">{faq.q}</Typography>
                            {activeFaq === index ? <ChevronUp size={20} className="text-[#1e3a8a]" /> : <ChevronDown size={20} className="text-gray-400" />}
                          </button>
                          {activeFaq === index && (
                            <div className="p-5 bg-white border-t border-gray-100 animate-in slide-in-from-top-2 duration-300">
                              <Typography variant="b1" className="text-gray-600">{faq.a}</Typography>
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
                  <Button variant="ghost" onClick={() => setIsOpen(false)} className="text-gray-400 cursor-pointer hover:text-[#1e3a8a]">← Back to Article List</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};