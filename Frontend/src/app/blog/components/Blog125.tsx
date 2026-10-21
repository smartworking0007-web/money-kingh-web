"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog125: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="Credit Card Online Application Guide 2026: Step-by-Step Process & Instant Approval Tips"
            category="CREDIT CARD"
            author="Kishan Baranwal"
            date="October 21, 2026"
            image="/images/blog/Blog-125.jpeg"
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
                    src="/images/blog/Blog-125.jpeg"
                    alt="credit cards apply"
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
                    href="https://moneykingfinancial.com/services/credit/hdfc"
                    className="text-[#1e3a8a] hover:underline"
                  >
                    Credit Card Online Application Guide 2026
                  </NextLink>
                  : Step-by-Step Process &amp; Instant Approval Tips
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">October 21, 2026</Typography>
                  <span className="mx-2">•</span>
                  <Typography variant="b2">By Kishan Baranwal</Typography>
                </div>

                {/* Blog Article Body */}
                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  {/* Featured Snippet Box */}
                  <div className="bg-slate-50 border-l-4 border-[#1e3a8a] p-4 rounded-r-lg">
                    <p className="text-gray-700 italic m-0">
                      Applying for a Credit Card Online allows individuals to access instant credit limits, earn rewards, and build a strong CIBIL score. Lenders evaluate an applicant&apos;s age, monthly income, employment status, and credit history before approving the application. Submitting accurate digital KYC documents and maintaining a credit score above 750 significantly increases your chances of instant approval.
                    </p>
                  </div>

                  <p>
                    A credit card is one of the most versatile financial tools available today. From earning reward points and cashback on daily expenses to accessing complimentary airport lounges and interest-free emergency credit, a credit card offers immense value when managed responsibly.
                  </p>

                  <p>
                    With modern digital onboarding, deciding to{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/credit/hdfc"
                      className="text-[#1e3a8a] font-semibold hover:underline"
                    >
                      apply for credit card online
                    </NextLink>{" "}
                    has become fast and paperless. However, understanding the eligibility criteria, required documentation, and approval factors ensures a smooth application experience without unnecessary rejections.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Key Highlights of Credit Card Application
                  </h2>

                  <div className="overflow-x-auto my-4">
                    <table className="w-full border-collapse border border-gray-200 text-left text-sm">
                      <thead className="bg-slate-100 text-gray-800">
                        <tr>
                          <th className="border border-gray-200 p-3">Feature / Factor</th>
                          <th className="border border-gray-200 p-3">Details &amp; Industry Benchmark</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">Minimum CIBIL Score</td>
                          <td className="border border-gray-200 p-3">750+ recommended for instant credit card approval</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">Minimum Income Requirement</td>
                          <td className="border border-gray-200 p-3">₹15,000 – ₹25,000 per month (Salaried or Self-Employed)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">Minimum Age Limit</td>
                          <td className="border border-gray-200 p-3">21 Years (18 Years for Add-on or FD-backed cards)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">Onboarding Method</td>
                          <td className="border border-gray-200 p-3">Paperless Video KYC &amp; Digital KYC verification</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Key Benefits of Having a Credit Card
                  </h2>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>
                      <strong>Building &amp; Improving CIBIL Score:</strong> Regular card usage and timely bill payments create a positive credit history, making future loan approvals easier.
                    </li>
                    <li>
                      <strong>Rewards, Cashback &amp; Discounts:</strong> Earn rewards and cashback points, fuel surcharge waivers, and exclusive shopping discounts across leading partner platforms.
                    </li>
                    <li>
                      <strong>Interest-Free Credit Period:</strong> Enjoy an interest-free payment window of up to 45–50 days on eligible purchases.
                    </li>
                    <li>
                      <strong>Emergency Liquidity:</strong> Access instant funds during medical or unplanned financial emergencies.
                    </li>
                  </ol>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Eligibility Criteria to Apply for a Credit Card
                  </h2>
                  <p>
                    Check your <strong>best credit card eligibility</strong> before submitting your request:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Age Limit:</strong> Primary applicant must be between 21 and 60 years of age.
                    </li>
                    <li>
                      <strong>Employment Status:</strong> Salaried employee in a registered firm or a self-employed business owner / professional.
                    </li>
                    <li>
                      <strong>Income Proof:</strong> Meets the minimum income requirement starting at ₹15,000 net per month (varies based on the premium card tier).
                    </li>
                    <li>
                      <strong>Credit Score:</strong> A clean credit track record with a strong <strong>CIBIL score for credit card</strong> approval and no recent defaults.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Essential Documents Required
                  </h2>
                  <p>
                    Keep the following <strong>documents required for credit card</strong> application ready:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Identity Proof:</strong> PAN Card (Mandatory), Aadhaar Card, Passport, or Driving License.
                    </li>
                    <li>
                      <strong>Address Proof:</strong> Aadhaar Card, Utility Bills (Electricity/Gas under 3 months), or Passport.
                    </li>
                    <li>
                      <strong>Income Proof (Salaried):</strong> Last 3 months payslips and last 6 months bank account statements.
                    </li>
                    <li>
                      <strong>Income Proof (Self-Employed):</strong> Last 2 years filed ITR with Computation of Income Sheet and primary bank statements.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Step-by-Step Online Application Process
                  </h2>
                  <p>
                    Follow these simple steps on <strong>how to apply for credit card online</strong>:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Step 1: Choose the Right Card Category:</strong> Select a card aligned with your spending habits (Fuel, Rewards, Cashback, Travel, or Shopping, including lifetime free credit card options).
                    </li>
                    <li>
                      <strong>Step 2: Check Eligibility &amp; Fill Form:</strong> Visit the official bank or card portal, enter basic personal, employment, and contact details.
                    </li>
                    <li>
                      <strong>Step 3: Upload Documents &amp; Complete Video KYC:</strong> Upload income proofs and complete instant Aadhaar/PAN Video KYC with a verification officer.
                    </li>
                    <li>
                      <strong>Step 4: Card Dispatch:</strong> Upon verification and credit limit calculation, the physical credit card is dispatched to your registered address within 3–7 business days.
                    </li>
                  </ul>

                  {/* FAQ Section */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions (FAQ)
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>Q1: Can I get a credit card without a CIBIL score or prior credit history?</strong>
                        <br />
                        Yes. First-time applicants can start with a <strong>Fixed Deposit (FD) backed credit card</strong>. These cards do not require prior credit history or strict income verification and help build your CIBIL score from scratch.
                      </li>
                      <li>
                        <strong>Q2: Does applying for multiple credit cards at once hurt my CIBIL score?</strong>
                        <br />
                        Yes. Applying for multiple credit cards simultaneously leads to multiple &quot;Hard Inquiries&quot; on your credit report, which can temporarily lower your CIBIL score and signal credit hunger to lenders.
                      </li>
                      <li>
                        <strong>Q3: What is a Lifetime Free (LTF) credit card?</strong>
                        <br />
                        A Lifetime Free credit card does not charge any Joining Fee or Annual Renewal Fee throughout the tenure of the card.
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
                    Apply For Your Credit Card Today
                  </Typography>
                  <Typography variant="b2" className="text-gray-300 mb-6 block">
                    Check your eligibility and apply online with{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/credit/hdfc"
                      className="text-blue-400 hover:underline"
                    >
                      Money King Financial Services
                    </NextLink>{" "}
                    now.
                  </Typography>

                  <div className="flex flex-wrap gap-4 mt-2">
                    <NextLink
                      href="https://moneykingfinancial.com/services/credit/hdfc"
                      className="inline-block bg-blue-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-700 transition"
                    >
                      Apply Online Now
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

export default Blog125;