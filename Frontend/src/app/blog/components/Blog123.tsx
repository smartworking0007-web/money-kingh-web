"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog123: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="Comprehensive Health Insurance Guide 2026: Why You Need Medical Cover & How to Choose the Best Plan"
            category="HEALTH INSURANCE"
            author="Kishan Baranwal"
            date="October 15, 2026"
            image="/images/blog/Blog-123.jpeg"
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
                    src="/images/blog/Blog-123.jpeg"
                    alt="health insurance"
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
                    href="https://moneykingfinancial.com/services/insurance/health"
                    className="text-[#1e3a8a] hover:underline"
                  >
                    Comprehensive Health Insurance Guide 2026
                  </NextLink>
                  : Why You Need Medical Cover &amp; How to Choose the Best Plan
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">October 15, 2026</Typography>
                  <span className="mx-2">•</span>
                  <Typography variant="b2">By Kishan Baranwal</Typography>
                </div>

                {/* Blog Article Body */}
                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  {/* Featured Snippet Box */}
                  <div className="bg-slate-50 border-l-4 border-[#1e3a8a] p-4 rounded-r-lg">
                    <p className="text-gray-700 italic m-0">
                      A Comprehensive Health Insurance Policy provides financial protection against unforeseen medical emergencies by covering hospitalization, surgeries, doctor fees, and diagnostic costs. Investing in a robust health insurance plan ensures access to quality healthcare through cashless hospitalization networks while safeguarding personal savings from high medical inflation.
                    </p>
                  </div>

                  <p>
                    Healthcare costs in India are rising at a rapid pace. A sudden medical emergency or a planned hospitalization can create severe financial distress if you do not have adequate medical coverage. Relying solely on personal savings or company-provided group insurance is often risky, as job changes or retirement leave you vulnerable.
                  </p>

                  <p>
                    Purchasing a dedicated{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/insurance/health"
                      className="text-[#1e3a8a] font-semibold hover:underline"
                    >
                      comprehensive health insurance policy
                    </NextLink>{" "}
                    gives you complete peace of mind, ensuring that you and your family receive the best medical treatment without worrying about hospital bills.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Key Highlights of Health Insurance Coverage
                  </h2>

                  <div className="overflow-x-auto my-4">
                    <table className="w-full border-collapse border border-gray-200 text-left text-sm">
                      <thead className="bg-slate-100 text-gray-800">
                        <tr>
                          <th className="border border-gray-200 p-3">Feature / Aspect</th>
                          <th className="border border-gray-200 p-3">Coverage &amp; Industry Standard</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">In-Patient Hospitalization</td>
                          <td className="border border-gray-200 p-3">Covers room rent, ICU, nursing, and surgeon fees</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">Daycare Treatments</td>
                          <td className="border border-gray-200 p-3">Covers medical procedures that require less than 24 hours of hospitalization</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">Annual Health Check-ups</td>
                          <td className="border border-gray-200 p-3">Free preventive health check-ups offered by most insurers</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">Restoration Benefit</td>
                          <td className="border border-gray-200 p-3">Automatically reloads your sum insured if exhausted during the policy year</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Why Every Family Needs a Dedicated Health Insurance Plan
                  </h2>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>
                      <strong>Combating Healthcare Inflation:</strong> Medical inflation outpaces general inflation significantly. Having an <strong>individual and family health insurance</strong> plan ensures you can afford advanced medical technology and multi-specialty care.
                    </li>
                    <li>
                      <strong>Cashless Hospitalization Convenience:</strong> During emergencies, running around for cash is stressful. Enjoy <strong>cashless medical insurance benefits</strong> at network hospitals that allow direct settlement of medical bills between the insurer and the hospital desk.
                    </li>
                    <li>
                      <strong>Protection of Hard-Earned Savings:</strong> A single major medical procedure can wipe out years of savings. Insurance absorbs this financial shock completely.
                    </li>
                    <li>
                      <strong>Tax-Saving Advantages:</strong> Premiums paid towards medical insurance qualify for tax deductions under Section 80D of the Income Tax Act.
                    </li>
                  </ol>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Key Factors to Evaluate Before Purchasing a Policy
                  </h2>
                  <p>
                    Follow this <strong>health insurance coverage checklist</strong> when <strong>choosing the right health insurance plan</strong>:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Sum Insured Amount:</strong> Ensure your cover is adequate (at least ₹10 Lakhs to ₹20 Lakhs for a family) considering current medical treatment costs in metro cities.
                    </li>
                    <li>
                      <strong>Check for Room Rent Sub-Limits:</strong> Avoid policies that have strict capping on room rent, as it proportionally reduces other associated medical charges during claims.
                    </li>
                    <li>
                      <strong>Waiting Period Analysis:</strong> Understand the waiting periods for pre-existing diseases (PED) and specific illnesses like cataract or joint replacement.
                    </li>
                    <li>
                      <strong>No Claim Bonus (NCB) Structure:</strong> Look for plans that offer high cumulative bonus percentages for every claim-free year without increasing the premium drastically.
                    </li>
                  </ul>

                  {/* FAQ Section */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions (FAQ)
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>Q1: What is a family floater health insurance plan?</strong>
                        <br />
                        A family floater plan covers all eligible family members (self, spouse, and children) under a single, shared sum insured. It is usually more cost-effective than purchasing separate individual policies for each member.
                      </li>
                      <li>
                        <strong>Q2: Can I port my health insurance policy to another company?</strong>
                        <br />
                        Yes. Under IRDAI guidelines, you can switch your health insurance provider to another company without losing your accumulated benefits (like waiting period credits and No Claim Bonus) by applying for policy portability at least 45 days before renewal.
                      </li>
                      <li>
                        <strong>Q3: Are AYUSH treatments covered under standard health insurance?</strong>
                        <br />
                        Yes, many modern health insurance policies cover alternative treatments such as Ayurveda, Yoga, Unani, Siddha, and Homeopathy (AYUSH) up to specified sub-limits or the full sum insured.
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
                    Protect Your Health &amp; Family Today
                  </Typography>
                  <Typography variant="b2" className="text-gray-300 mb-6 block">
                    Explore top-rated health insurance policies with cashless benefits from{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/insurance/health"
                      className="text-blue-400 hover:underline"
                    >
                      Money King Financial Services
                    </NextLink>{" "}
                    now.
                  </Typography>

                  <div className="flex flex-wrap gap-4 mt-2">
                    <NextLink
                      href="https://moneykingfinancial.com/services/insurance/health"
                      className="inline-block bg-blue-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-700 transition"
                    >
                      Get Health Cover Now
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

export default Blog123;