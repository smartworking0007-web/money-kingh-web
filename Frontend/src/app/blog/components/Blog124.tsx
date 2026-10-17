"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog124: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="Become Our Partner: Start Your Financial DSA Business & Earn High Commissions"
            category="DSA PROGRAM"
            author="Kishan Baranwal"
            date="October 17, 2026"
            image="/images/blog/Blog-124.jpeg"
          />
        </div>
      ) : (
        <div className="fixed inset-0 z-40 bg-white overflow-y-auto pt-20 md:pt-28 no-scrollbar animate-in fade-in duration-300 text-left">
          <div className="relative max-w-5xl mx-auto pb-20 px-4 md:px-6">
            
            {/* Back Button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsOpen(false);
              }}
              className="flex items-center mb-6 text-gray-500 hover:text-[#1e3a8a] transition-colors gap-1 cursor-pointer"
            >
              <ArrowLeft size={14} />
              <Typography variant="caption" className="font-bold uppercase">
                Back to Blogs
              </Typography>
            </button>

            {/* Main Blog Container */}
            <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
              {/* Professional Image Preview Section */}
              <div className="w-full flex justify-center bg-slate-50 py-4 px-4 border-b border-gray-100">
                <div className="relative w-full max-w-3xl aspect-[16/9] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/images/blog/Blog-124.jpeg"
                    alt="DSA partner"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="px-5 py-8 md:px-12 md:py-14">
                <Typography
                  variant="h5"
                  className="text-[#1e3a8a] uppercase text-2xl md:text-4xl mb-4 font-bold"
                >
                  <NextLink
                    href="https://moneykingfinancial.com/partner"
                    className="text-[#1e3a8a] hover:underline"
                  >
                    Become Our Partner
                  </NextLink>
                  : Start Your Financial DSA Business &amp; Earn High Commissions
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">October 17, 2026</Typography>
                  <span className="mx-2">•</span>
                  <Typography variant="b2">By Kishan Baranwal</Typography>
                </div>

                {/* Blog Article Body */}
                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  {/* Featured Snippet Box */}
                  <div className="bg-slate-50 border-l-4 border-[#1e3a8a] p-4 rounded-r-lg">
                    <p className="text-gray-700 italic m-0">
                      Joining a Direct Selling Agent (DSA) or Channel Partner program with a recognized financial services platform allows individuals, chartered accountants, and business consultants to earn attractive commissions by referring clients for personal loans, business loans, machinery financing, and credit cards with zero upfront capital investment.
                    </p>
                  </div>

                  <p>
                    The Indian financial services sector is expanding rapidly, creating unprecedented opportunities for ambitious professionals, field consultants, and entrepreneurs. If you are looking to build a high-income business with zero capital risk, deciding to{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/partner"
                      className="text-[#1e3a8a] font-semibold hover:underline"
                    >
                      become financial DSA partner
                    </NextLink>{" "}
                    or Channel Partner is one of the most lucrative paths available today.
                  </p>

                  <p>
                    By partnering with an established financial distribution network, you can bridge the gap between borrowers seeking capital and leading banks/NBFCs offering competitive loan rates.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Why Join the Money King Financial Partner Program?
                  </h2>
                  <p>
                    Becoming a financial partner gives you access to a wide spectrum of credit and loan products under one roof. Here is why field professionals and advisors prefer our <strong>financial channel partner program</strong>:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Zero Capital Investment:</strong> Start your zero investment financial business without any inventory cost, office setup expense, or franchise fees.
                    </li>
                    <li>
                      <strong>Diverse Credit Products Distribution:</strong> Offer your clients access to Personal Loans, Business Loans, Home Loans, Machinery Financing, and Credit Cards.
                    </li>
                    <li>
                      <strong>Industry-Leading Payouts:</strong> Benefit from the transparent and competitive <strong>Money King financial DSA payout</strong> structure on every successfully disbursed loan.
                    </li>
                    <li>
                      <strong>End-to-End Operational Support:</strong> Our dedicated backend team handles documentation, bank follow-ups, and processing, allowing you to focus entirely on client relationships.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Who Can Become Our Channel Partner?
                  </h2>
                  <p>
                    Our partner network welcomes individuals and professionals looking to <strong>earn money as financial advisor</strong> or loan referral partner:
                  </p>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>
                      <strong>Financial Advisors &amp; Insurance Agents:</strong> Expand your product lineup beyond insurance or mutual funds to fulfill client loan requirements.
                    </li>
                    <li>
                      <strong>Chartered Accountants (CAs) &amp; Tax Consultants:</strong> Help your SME and corporate clients secure working capital or machinery loans smoothly.
                    </li>
                    <li>
                      <strong>Real Estate Agents &amp; Builders:</strong> Offer immediate home loan assistance to your property buyers.
                    </li>
                    <li>
                      <strong>Freelancers &amp; Field Executives:</strong> Learn <strong>how to become loan agent India</strong> and leverage your local network to generate loan leads and build a steady monthly income stream.
                    </li>
                  </ol>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Simple 3-Step Onboarding Process
                  </h2>
                  <p>
                    Completing your <strong>loan DSA partner registration</strong> is quick and hassle-free:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Step 1: Partner Registration:</strong> Fill out the partner application form with your basic identity and business details.
                    </li>
                    <li>
                      <strong>Step 2: Document Verification:</strong> Submit standard KYC documents (PAN Card, identity proofs, Bank Details) for registration.
                    </li>
                    <li>
                      <strong>Step 3: Start Referring &amp; Earning:</strong> Receive your unique partner ID, begin submitting client loan leads, and track payouts transparently.
                    </li>
                  </ul>

                  {/* FAQ Section */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions (FAQ)
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>Q1: Is prior financial experience required to become a DSA partner?</strong>
                        <br />
                        No formal degree is mandatory. Basic market understanding, strong communication skills, and a good local network are sufficient to start. Our team provides complete guidance on product features and lead submission.
                      </li>
                      <li>
                        <strong>Q2: How and when are partner payouts processed?</strong>
                        <br />
                        Payouts are calculated transparently based on successful loan disbursements and credited directly to your registered bank account on a structured monthly billing cycle based on our business loan commission structure.
                      </li>
                      <li>
                        <strong>Q3: Can I work as a loan referral partner part-time?</strong>
                        <br />
                        Yes. You can work as a full-time loan distributor or operate on a flexible part-time referral model alongside your existing job or business.
                      </li>
                    </ul>
                  </div>
                </article>

                {/* Call To Action Banner */}
                <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[40px] mt-10">
                  <Typography
                    variant="h5"
                    className="text-blue-400 uppercase mb-3 font-bold"
                  >
                    Start Your DSA Partner Journey Today
                  </Typography>
                  <Typography variant="b2" className="text-gray-300 mb-6 block">
                    Join hands with{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/partner"
                      className="text-blue-400 hover:underline"
                    >
                      Money King Financial Services
                    </NextLink>{" "}
                    and start earning high commissions with zero investment.
                  </Typography>

                  <div className="flex flex-wrap gap-4 mt-2">
                    <NextLink
                      href="https://moneykingfinancial.com/partner"
                      className="inline-block bg-blue-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-700 transition"
                    >
                      Register As Partner Now
                    </NextLink>
                  </div>
                </div>

                <div className="mt-14">
                  <ShareSection />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog124;