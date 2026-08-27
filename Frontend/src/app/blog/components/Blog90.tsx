"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog90: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="Raksha Bandhan 2026: The Ultimate Guide to Gifting Financial Independence to Your Sister"
            category="FINANCIAL PLANNING"
            author="Sumit Mishra"
            date="August 27, 2026"
            image="/images/blog/blog-90.jpeg"
          />
        </div>
      ) : (
        <div className="fixed inset-0 z-40 bg-white overflow-y-auto pt-20 md:pt-28 no-scrollbar animate-in fade-in duration-300 text-left">
          <div className="relative max-w-5xl mx-auto pb-20 px-4 md:px-6">
            {/* Back Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center mb-6 text-gray-500 hover:text-[#1e3a8a] transition-colors gap-1"
            >
              <ArrowLeft size={14} />
              <Typography variant="caption" className="font-bold uppercase">
                Back to Blogs
              </Typography>
            </button>

            {/* Main Blog Container */}
            <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
              <div className="relative h-[300px] md:h-[500px] w-full">
                <Image
                  src="/images/blog/blog-90.jpeg"
                  alt="rakshabandhan sepical"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="px-5 py-8 md:px-12 md:py-14">
                <Typography
                  variant="h5"
                  className="text-[#1e3a8a] uppercase text-2xl md:text-4xl mb-4 font-bold"
                >
                  Raksha Bandhan 2026: The Ultimate Guide to Gifting Financial Independence to Your Sister
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">August 27, 2026</Typography>
                </div>

                {/* Blog Article Body */}
                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  <p>
                    Gifting cash or clothes on Raksha Bandhan is traditional, but gifting financial
                    independence creates lifelong security for your sibling. Instead of short-term
                    material gifts, initiating a{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/mutual-fund/sip"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Systematic Investment Plan (SIP)
                    </NextLink>
                    , gifting Digital Gold, setting up a comprehensive{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/insurance/general"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      health insurance
                    </NextLink>{" "}
                    cover, or creating a dedicated investment portfolio helps your sister build
                    long-term wealth, manage inflation, and achieve complete financial self-reliance
                    over time.
                  </p>

                  <p>
                    Raksha Bandhan is a celebration of protection, love, and lifelong support.
                    Traditionally, brothers express their affection through cash envelopes, gadgets,
                    or designer wear. While these gifts bring immediate joy, their value depreciates
                    over time.
                  </p>

                  <p>
                    This year, elevate the promise of &quot;protection&quot; by securing your
                    sister’s financial future. In a world driven by economic changes and inflation,
                    giving your sibling tools for long-term financial independence is the most
                    powerful gift you can offer.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Top Financial Gift Ideas for Raksha Bandhan
                  </h2>

                  <h3 className="text-lg font-bold text-gray-800 pt-2">
                    1. Initiate a Systematic Investment Plan (SIP)
                  </h3>
                  <p>
                    Instead of a single cash gift, start a monthly Equity Mutual Fund{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/mutual-fund/sip"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      SIP
                    </NextLink>{" "}
                    in your sister&apos;s name or assist her in setting one up:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Power of Compounding:</strong> A modest monthly investment of ₹1,000
                      to ₹2,000 started early can compound into a substantial fund for her higher
                      education, business goals, or travel plans.
                    </li>
                    <li>
                      <strong>Habit of Savings:</strong> It instills financial discipline and
                      encourages regular, automated wealth accumulation.
                    </li>
                  </ul>

                  <h3 className="text-lg font-bold text-gray-800 pt-2">
                    2. Gift Digital Gold or Sovereign Gold Bonds (SGB)
                  </h3>
                  <p>
                    Physical jewelry involves heavy making charges and storage security risks. Modern
                    gold investments offer the ultimate combination of safety and high returns:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Digital Gold:</strong> Allows you to buy pure 24K gold online for as
                      little as ₹100, which can be accumulated over time.
                    </li>
                    <li>
                      <strong>Gold ETFs &amp; Funds:</strong> Highly liquid options that track
                      real-time gold prices without physical storage issues.
                    </li>
                  </ul>

                  <h3 className="text-lg font-bold text-gray-800 pt-2">
                    3. Secure Her Health with a Dedicated Insurance Plan
                  </h3>
                  <p>
                    True protection means safeguarding your sister against medical emergencies:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Independent Health Insurance:</strong> Medical expenses rise faster
                      than general inflation. A dedicated{" "}
                      <NextLink
                        href="https://moneykingfinancial.com/services/insurance/general"
                        className="text-blue-600 font-semibold hover:underline"
                      >
                        health insurance policy
                      </NextLink>{" "}
                      ensures her personal savings remain untouched during a health crisis.
                    </li>
                    <li>
                      <strong>Critical Illness Cover:</strong> Adding a critical illness rider
                      provides an extra safety net, giving her complete peace of mind.
                    </li>
                  </ul>

                  <h3 className="text-lg font-bold text-gray-800 pt-2">
                    4. Create a Fixed Deposit (FD) or High-Yield Savings Portfolio
                  </h3>
                  <p>
                    If your sister has low risk tolerance and prefers guaranteed returns:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Target-Based FD:</strong> Create a fixed deposit aligned with her
                      short-term goals (such as purchasing a laptop or enrolling in a professional
                      certification course).
                    </li>
                    <li>
                      <strong>Tax-Saving Instruments:</strong> Explore tax-efficient options like
                      ELSS funds or sovereign-backed instruments for steady capital preservation.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Quick Comparison: Traditional Gifts vs. Financial Gifts
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-gray-100 text-left">
                          <th className="border p-2">Parameter</th>
                          <th className="border p-2">Traditional Gifts (Cash / Clothes)</th>
                          <th className="border p-2">
                            Financial Gifts (
                            <NextLink
                              href="https://moneykingfinancial.com/services/mutual-fund/sip"
                              className="text-blue-600 font-semibold hover:underline"
                            >
                              SIP
                            </NextLink>{" "}
                            / Gold /{" "}
                            <NextLink
                              href="https://moneykingfinancial.com/services/insurance/general"
                              className="text-blue-600 font-semibold hover:underline"
                            >
                              Insurance
                            </NextLink>
                            )
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-2 font-bold">Value Over Time</td>
                          <td className="border p-2">Depreciates or gets spent quickly</td>
                          <td className="border p-2 font-semibold text-green-600">
                            Appreciates via market compounding
                          </td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Primary Impact</td>
                          <td className="border p-2">Instant temporary pleasure</td>
                          <td className="border p-2 font-semibold text-green-600">
                            Long-term financial security &amp; freedom
                          </td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Protection Level</td>
                          <td className="border p-2">Minimal</td>
                          <td className="border p-2 font-semibold text-green-600">
                            High (Guards against medical &amp; economic crises)
                          </td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-bold">Financial Learning</td>
                          <td className="border p-2">Zero money management impact</td>
                          <td className="border p-2 font-semibold text-green-600">
                            Teaches investing, budgeting, and planning
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* FAQ Section */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions (FAQ)
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>
                          Q: Can I open a mutual fund{" "}
                          <NextLink
                            href="https://moneykingfinancial.com/services/mutual-fund/sip"
                            className="text-blue-600 hover:underline"
                          >
                            SIP
                          </NextLink>{" "}
                          directly in my sister&apos;s name?
                        </strong>
                        <br />
                        A: Yes. However, due to regulatory compliance, the mutual fund folio must be
                        registered under her KYC profile. You can assist her in completing the setup
                        and fund the monthly SIP contributions directly.
                      </li>
                      <li>
                        <strong>Q: Why is Digital Gold better than buying gold jewelry on Rakhi?</strong>
                        <br />
                        A: Digital Gold eliminates manufacturing/making charges (8% to 25%), avoids
                        storage risks, and provides 100% purity with micro-investment flexibility
                        starting from ₹100.
                      </li>
                      <li>
                        <strong>Q: Which financial gift is best for a college-going sister?</strong>
                        <br />
                        A: A combination of a Flexible Equity{" "}
                        <NextLink
                          href="https://moneykingfinancial.com/services/mutual-fund/sip"
                          className="text-blue-600 hover:underline"
                        >
                          SIP
                        </NextLink>{" "}
                        for future aspirations and a dedicated{" "}
                        <NextLink
                          href="https://moneykingfinancial.com/services/insurance/general"
                          className="text-blue-600 hover:underline"
                        >
                          health cover
                        </NextLink>{" "}
                        provides the ideal foundation for early financial independence. Explore our{" "}
                        <NextLink
                          href="https://moneykingfinancial.com/"
                          className="text-blue-600 font-bold hover:underline"
                        >
                          financial portal
                        </NextLink>{" "}
                        for customized investment and insurance options.
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
                    Gift the Promise of Lifelong Financial Security!
                  </Typography>
                  <Typography variant="b2" className="text-gray-300 mb-6 block">
                    Make this Raksha Bandhan truly meaningful by setting up personalized{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/mutual-fund/sip"
                      className="text-blue-400 hover:underline"
                    >
                      SIP plans
                    </NextLink>
                    , high-yield investments, and comprehensive health protection for your sibling.
                  </Typography>

                  <div className="flex flex-wrap gap-4">
                    <NextLink
                      href="https://moneykingfinancial.com/services/mutual-fund/sip"
                      className="inline-block bg-red-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-red-700 transition"
                    >
                      Start a Gift SIP
                    </NextLink>
                    <NextLink
                      href="https://moneykingfinancial.com/services/insurance/general"
                      className="inline-block bg-blue-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-700 transition"
                    >
                      Explore Health Protection
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