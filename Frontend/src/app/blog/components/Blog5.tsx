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

export const Blog5 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) =>
    setActiveFaq(activeFaq === index ? null : index);

  const faqs = [
    {
      q: "Q1. Can I get a loan if my salary is ₹15,000 per month?",
      a: "Yes. While major banks might hesitate, many Fintech Lenders and NBFCs specifically design products for this income group. At Money King Financial, we help you identify these specific lenders.",
    },
    {
      q: "Q2. Will applying to multiple banks help my chances?",
      a: "No. This is a common mistake. Every application is recorded as a 'Hard Inquiry.' If 5 banks see you applied to everyone at once, they think you are in a financial crisis, leading to instant rejection.",
    },
    {
      q: "Q3. How long does the approval take for low-income profiles?",
      a: "If your documentation is digital and clean, it can take anywhere from 2 hours to 48 hours.",
    },
    {
      q: "Q4. Does having a savings account in the same bank help?",
      a: "Absolutely. Lenders prefer 'Pre-approved' customers. If you have maintained a good balance in your savings account for a year, that bank is more likely to give you a loan regardless of a low salary.",
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
            title="The Ultimate 2026 Guide: How to Secure a Personal Loan with a Low Salary"
            category="PERSONAL LOAN"
            author="Sumit Mishra"
            date="May 02, 2026"
            image="/images/blog/blog-5.jpeg"
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
                  src="/images/blog/blog-5.jpeg"
                  alt="Low salary personal loan approval tips"
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
                  The Ultimate 2026 Guide: How to Secure a Personal Loan with a Low Salary
                </Typography>

                <div className="flex gap-4 text-gray-400 mb-6 pb-4 border-b overflow-x-auto no-scrollbar">
                  <div className="flex items-center gap-2 shrink-0">
                    <Clock size={16} />
                    <Typography variant="b2">May 02, 2026</Typography>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Folder size={16} />
                    <Typography variant="b2">Personal Loan</Typography>
                  </div>
                </div>

                <Typography
                  variant="s2"
                  className="text-gray-600 mb-10 font-medium leading-relaxed"
                >
                  Worried about loan rejection due to low income? This comprehensive guide reveals 7 secret hacks to get your personal loan approved with a modest salary.
                </Typography>

                <section className="space-y-10">
                  <div>
                    <Typography
                      variant="s1"
                      className="text-[#1e3a8a] mb-4 font-bold uppercase"
                    >
                      Introduction: Why Salary Isn&apos;t the Only Factor
                    </Typography>
                    <Typography variant="b1" className="text-gray-700 leading-relaxed">
                      Most people assume that if their salary slip doesn&apos;t show a massive figure, the bank’s door is closed. This is the biggest misconception in the lending world. In 2026, lenders will shift from &quot;Income-Based Lending&quot; to &quot;Data-Driven Lending.&quot; At Money King Financial, we have seen countless applicants with modest incomes get approved because they followed a specific roadmap.
                    </Typography>
                  </div>

                  <div className="space-y-8">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <Typography variant="s1" className="font-bold mb-2">1. Master the 40% Rule (Debt-to-Income Ratio)</Typography>
                      <Typography variant="b1" className="text-gray-700">
                        Lenders don&apos;t just look at what you earn; they look at what you keep. Keep your total debt obligations below 30-40% of your take-home pay. This breathing room in your bank statement is the #1 reason for approval.
                      </Typography>
                    </div>

                    <div>
                      <Typography variant="s1" className="font-bold mb-2">2. The CIBIL &quot;Force Multiplier&quot;</Typography>
                      <Typography variant="b1" className="text-gray-700">
                        When your income is on the lower side, your CIBIL Score acts as your reputation. A score of 780+ can often override a lower salary bracket, proving you are 100% reliable.
                      </Typography>
                    </div>

                    <div>
                      <Typography variant="s1" className="font-bold mb-2">3. Use the &quot;Joint-Income&quot; Hack</Typography>
                      <Typography variant="b1" className="text-gray-700">
                        Add a Co-applicant (spouse, father, or mother). The lender now sees two income sources, reducing the &quot;Default Risk&quot; significantly and helping you qualify for a higher amount.
                      </Typography>
                    </div>

                    <div>
                      <Typography variant="s1" className="font-bold mb-2">4. Strategic Loan Tenure Selection</Typography>
                      <Typography variant="b1" className="text-gray-700">
                        Choose a longer tenure (4-5 years). A lower EMI fits better into your monthly budget, making the bank more confident that you won&apos;t default.
                      </Typography>
                    </div>

                    <div>
                      <Typography variant="s1" className="font-bold mb-2">5. Focus on Employer Reputation</Typography>
                      <Typography variant="b1" className="text-gray-700">
                        Stability in a reputed company is often more valuable than a high salary in a struggling startup. Always use your official company email ID and provide your corporate ID.
                      </Typography>
                    </div>

                    <div>
                      <Typography variant="s1" className="font-bold mb-2">6. Avoid the &quot;Credit-Hungry&quot; Behavior</Typography>
                      <Typography variant="b1" className="text-gray-700">
                        Ek bar reject hone par turant doosri jagah apply na karein. Kam se kam 3 mahine ka gap rakhein aur apni profile improve karein taaki CIBIL score baar-baar hard inquiry se na gire.
                      </Typography>
                    </div>

                    <div>
                      <Typography variant="s1" className="font-bold mb-2">7. Digital Presence & Bank Relationship</Typography>
                      <Typography variant="b1" className="text-gray-700">
                        Maintain an &quot;Average Monthly Balance&quot; in your bank account. If the bank sees that your account never hits zero, you are categorized as a &quot;Safe Borrower.&quot;
                      </Typography>
                    </div>
                  </div>

                  <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100 text-left">
                    <Typography variant="s1" className="text-[#1e3a8a] mb-4 font-bold uppercase">Checklist: Documents to Keep Ready</Typography>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2"><ChevronRight size={16} className="text-blue-600"/><Typography variant="b1">Salary Slips: Last 3 to 6 months.</Typography></li>
                      <li className="flex items-center gap-2"><ChevronRight size={16} className="text-blue-600"/><Typography variant="b1">Bank Statements: Last 6 months (Clean records).</Typography></li>
                      <li className="flex items-center gap-2"><ChevronRight size={16} className="text-blue-600"/><Typography variant="b1">Form 16 / ITR: Last 2 years.</Typography></li>
                      <li className="flex items-center gap-2"><ChevronRight size={16} className="text-blue-600"/><Typography variant="b1">KYC: Updated Aadhaar and PAN.</Typography></li>
                    </ul>
                  </div>

                  <div className="bg-[#1e3a8a] text-white p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 my-14 shadow-2xl">
                    <div className="text-center md:text-left">
                      <Typography variant="h5" className="text-white mb-2 font-bold uppercase">Get Approved Faster</Typography>
                      <Typography variant="b2" className="text-blue-100 opacity-80">Stop worrying about your salary and start your application with Money King Financial.</Typography>
                    </div>
                    <Link href="/contact" className="w-full md:w-auto">
                      <Button size="lg" className="bg-white text-[#1e3a8a] hover:bg-gray-100 px-12 py-6 w-full font-bold text-lg shadow-lg">Apply Now</Button>
                    </Link>
                  </div>

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