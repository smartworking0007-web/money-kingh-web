"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog73 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="Used Car vs. New Car: Which Option Is Truly Better for Your Wallet?"
            category="AUTOMOBILE"
            author="Sumit Mishra"
            date="July 21, 2026"
            image="/images/blog/blog-73.png"
          />
        </div>
      ) : (
        <div className="fixed inset-0 z-40 bg-white overflow-y-auto pt-20 md:pt-28 no-scrollbar animate-in fade-in duration-300 text-left">
          <div className="relative max-w-5xl mx-auto pb-20 px-4 md:px-6">
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center mb-6 text-gray-500 hover:text-[#1e3a8a] gap-1"
            >
              <ArrowLeft size={14} />
              <Typography variant="caption" className="font-bold uppercase">
                Back to Blogs
              </Typography>
            </button>

            <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
              <div className="relative h-[300px] md:h-[500px] w-full">
                <Image
                  src="/images/blog/blog-73.png"
                  alt="A prospective car buyer comparing options at a modern dealership"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="px-5 py-8 md:px-12 md:py-14">
                <Typography
                  variant="h5"
                  className="text-[#1e3a8a] uppercase text-2xl md:text-4xl mb-4"
                >
                  Used Car vs. New Car: Which Option Is Truly Better for Your
                  Wallet?
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">July 21, 2026</Typography>
                </div>

                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  <p>
                    <strong>
                      Introduction: The Great Automotive Crossroads
                    </strong>
                  </p>
                  <p>
                    Buying a
                    <NextLink
                      href="/services/loan/secured/car"
                      className="text-red-600 font-bold hover:underline"
                    >
                      {" "}
                      car{" "}
                    </NextLink>
                    is one of the most significant financial milestones in an
                    individual s life. Whether you need a daily commuter for
                    office travel or a spacious vehicle for family road trips,
                    the perennial dilemma remains: Should you buy a brand-new
                    <NextLink
                      href="/services/loan/secured/car"
                      className="text-red-600 font-bold hover:underline"
                    >
                      {" "}
                      new car{" "}
                    </NextLink>
                    straight off the showroom floor, or invest in a pre-owned
                    <NextLink
                      href="/services/loan/secured/car"
                      className="text-red-600 font-bold hover:underline"
                    >
                      {" "}
                      used car{" "}
                    </NextLink>
                    that offers more metal for your money?
                  </p>

                  <p>
                    Both choices come with distinct financial, emotional, and
                    practical trade-offs. To make an informed decision, let’s
                    dissect the core aspects of both options, from upfront
                    pricing to hidden long-term costs.
                  </p>

                  <h2>1. The Financial Reality: Upfront Costs & Taxes</h2>
                  <p>
                    When comparing a
                    <NextLink
                      href="/services/loan/secured/car"
                      className="text-red-600 font-bold hover:underline"
                    >
                      {" "}
                      used car{" "}
                    </NextLink>
                    and a
                    <NextLink
                      href="/services/loan/secured/car"
                      className="text-red-600 font-bold hover:underline"
                    >
                      {" "}
                      new car{" "}
                    </NextLink>
                    , the initial layout sets the tone for your budget.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>New Car Upfront Costs:</strong> Beyond the
                      showroom sticker price, new models attract higher
                      registration fees, road taxes, and steep municipal
                      charges. Furthermore, comprehensive insurance premiums are
                      calculated based on the invoice value of the vehicle,
                      making first-year insurance significantly heavier on the
                      pocket.
                    </li>
                    <li>
                      <strong>Used Car Upfront Costs:</strong> Pre-owned
                      vehicles are inherently cheaper. You save substantially on
                      the initial purchase price. Additionally, since
                      registration and lifetime road taxes were paid by the
                      original owner, your out-of-pocket expenses at purchase
                      are minimal—typically restricted to a name-transfer fee.
                    </li>
                  </ul>

                  <h2>2. The Depreciation Trap: Where Money Goes to Die</h2>
                  <p>Depreciation is the silent killer of automotive value.</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>The New Car Hit:</strong> The moment a brand-new
                      <NextLink
                        href="/services/loan/secured/car"
                        className="text-red-600 font-bold hover:underline"
                      >
                        {" "}
                        car{" "}
                      </NextLink>
                      is driven out of the dealership gates, it sheds roughly 8%
                      to 10% of its value instantly. Over the first two to three
                      years, it can lose up to 30% to 40% of its initial value.
                    </li>
                    <li>
                      <strong>The Used Car Advantage:</strong> A pre-owned
                      vehicle has already taken the massive depreciation hit
                      during its first few years. Consequently, its value drops
                      at a much slower, more stable rate.
                    </li>
                  </ul>

                  <h2>3. Financing and Loan Dynamics</h2>
                  <p>
                    How you fund your vehicle choice matters immensely to your
                    monthly cash flow. Whether you opt for a traditional
                    <NextLink
                      href="/services/loan/secured/car"
                      className="text-red-600 font-bold hover:underline"
                    >
                      {" "}
                      car loan{" "}
                    </NextLink>
                    for a
                    <NextLink
                      href="/services/loan/secured/car"
                      className="text-red-600 font-bold hover:underline"
                    >
                      {" "}
                      new car{" "}
                    </NextLink>
                    or a specialized pre-owned
                    <NextLink
                      href="/services/loan/secured/car"
                      className="text-red-600 font-bold hover:underline"
                    >
                      {" "}
                      car loan{" "}
                    </NextLink>
                    , understanding the rates is critical.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>New Car Loans:</strong> Banks view brand-new
                      vehicles as lower-risk collateral, generally featuring
                      lower interest rates and longer repayment tenures (up to 7
                      years).
                    </li>
                    <li>
                      <strong>Used Car Loans:</strong> These carry slightly
                      higher interest rates due to the perceived risk associated
                      with aging assets, with tenures typically restricted to a
                      maximum of 5 years.
                    </li>
                  </ul>

                  <h2>4. Maintenance, Reliability, and Peace of Mind</h2>
                  <p>
                    This is where the psychological aspect of ownership comes
                    into play.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>New Cars:</strong> Offer absolute peace of mind
                      backed by comprehensive manufacturer warranties covering
                      engine, electrical, and mechanical components.
                    </li>
                    <li>
                      <strong>Used Cars:</strong> Unless you buy a Certified
                      Pre-Owned (CPO) vehicle, pre-owned models carry a higher
                      risk of unexpected mechanical failures, potentially
                      driving up your annual maintenance budget.
                    </li>
                  </ul>

                  <h2>5. Technology, Safety, and Features</h2>
                  <p>
                    Tech enthusiasts prefer a
                    <NextLink
                      href="/services/loan/secured/car"
                      className="text-red-600 font-bold hover:underline"
                    >
                      {" "}
                      new car{" "}
                    </NextLink>
                    for advanced driver-assistance systems (ADAS) and top-tier
                    safety certifications, whereas buying a
                    <NextLink
                      href="/services/loan/secured/car"
                      className="text-red-600 font-bold hover:underline"
                    >
                      {" "}
                      used car{" "}
                    </NextLink>
                    allows you to purchase a higher segment vehicle for the
                    price of an entry-level hatchback.
                  </p>

                  <h2>Summary Comparison Matrix</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border p-2">Feature</th>
                          <th className="border p-2">New Car</th>
                          <th className="border p-2">Used Car</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-2">Initial Purchase Price</td>
                          <td className="border p-2">High</td>
                          <td className="border p-2">Low</td>
                        </tr>
                        <tr>
                          <td className="border p-2">Depreciation Rate</td>
                          <td className="border p-2">
                            Rapid in the first 3 years
                          </td>
                          <td className="border p-2">Slow and steady</td>
                        </tr>
                        <tr>
                          <td className="border p-2">Interest Rates (Loans)</td>
                          <td className="border p-2">Lower</td>
                          <td className="border p-2">Slightly Higher</td>
                        </tr>
                        <tr>
                          <td className="border p-2">Insurance Cost</td>
                          <td className="border p-2">Higher</td>
                          <td className="border p-2">Economical</td>
                        </tr>
                        <tr>
                          <td className="border p-2">Maintenance & Warranty</td>
                          <td className="border p-2">
                            Low initial maintenance
                          </td>
                          <td className="border p-2">Potential repair costs</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> FAQ Section
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>
                          Q: Is insurance cheaper for a used car than a new car?
                        </strong>
                        <br />
                        A: Yes. Because insurance premiums are calculated using
                        the Insured Declared Value (IDV), older vehicles command
                        lower IDVs and cheaper annual premiums.
                      </li>
                      <li>
                        <strong>Q: How old of a used car should I buy?</strong>
                        <br />
                        A: A vehicle that is 3 to 5 years old is generally
                        considered the sweet spot, having shed its aggressive
                        initial depreciation while retaining strong functional
                        life.
                      </li>
                      <li>
                        <strong>
                          Q: Are Certified Pre-Owned (CPO) cars safer than
                          private-party used cars?
                        </strong>
                        <br />
                        A: Absolutely. CPO cars undergo rigorous multi-point
                        mechanical inspections by authorized dealers and usually
                        come with a limited corporate warranty.
                      </li>
                    </ul>
                  </div>
                </article>

                <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[40px] mt-10">
                  <Typography
                    variant="h5"
                    className="text-blue-400 uppercase mb-3"
                  >
                    Ready to Finance Your Next Vehicle?
                  </Typography>
                  <Typography variant="b2" className="text-gray-300 mb-6 block">
                    Whether you are purchasing a brand-new showroom model or a
                    reliable pre-owned vehicle, explore our competitive
                    <NextLink
                      href="/services/loan/secured/car"
                      className="text-red-400 font-bold hover:underline mx-1"
                    >
                      car loan options
                    </NextLink>
                    to secure the best interest rates and flexible repayment
                    tenures today.
                  </Typography>

                  <NextLink
                    href="/services/loan/secured/car"
                    className="inline-block bg-red-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-red-700 transition"
                  >
                    Explore Car Loans
                  </NextLink>
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
