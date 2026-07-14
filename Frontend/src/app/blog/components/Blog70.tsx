"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog70 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="Student Life Insurance: Why Young Adults Need Financial Protection in 2026"
            category="INSURANCE"
            author="Sumit Mishra"
            date="July 13, 2026"
            image="/images/blog/blog-70.png"
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
                  src="/images/blog/blog-70.png"
                  alt="A young professional confidently looking at a digital life Insurance"
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
                  Student Life Insurance: Why Young Adults Need Financial
                  Protection in 2026
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">July 13, 2026</Typography>
                </div>

                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  <p>
                    For many students,{" "}
                    <NextLink
                      href="/services/insurance/lic"
                      className="text-red-600 font-semibold hover:underline"
                    >
                      life insurance
                    </NextLink>{" "}
                    feels like a distant concern—a topic reserved for
                    middle-aged parents. However, this perception overlooks the
                    profound strategic advantage of securing financial
                    protection early. In 2026, as education costs rise,{" "}
                    <NextLink
                      href="/services/insurance/lic"
                      className="text-red-600 font-semibold hover:underline"
                    >
                      student life insurance
                    </NextLink>{" "}
                    is emerging as a vital tool for building a stable
                    foundation.
                  </p>

                  <h2>What is Student Life Insurance?</h2>
                  <p>
                    Student{" "}
                    <NextLink
                      href="/services/insurance/lic"
                      className="text-red-600 font-semibold hover:underline"
                    >
                      life insurance
                    </NextLink>{" "}
                    is essentially a standard policy—often a Term Insurance
                    Plan—tailored for young adults. It acts as a safeguard
                    against unforeseen liabilities, such as education loans, and
                    serves as a long-term investment in financial discipline.
                  </p>

                  <h2>Why Should Students Consider Life Insurance?</h2>
                  <p>
                    It may seem premature, but here is why you should look into{" "}
                    <NextLink
                      href="/services/insurance/lic"
                      className="text-red-600 font-semibold hover:underline"
                    >
                      life insurance plans
                    </NextLink>{" "}
                    during your college years:
                  </p>
                  <ol className="space-y-4">
                    <li>
                      <strong>Managing Education Loans:</strong> A{" "}
                      <NextLink
                        href="/services/insurance/lic"
                        className="text-red-600 font-semibold hover:underline"
                      >
                        life insurance policy
                      </NextLink>{" "}
                      ensures that if an unforeseen event occurs, loan debts are
                      cleared, protecting your family’s financial future.
                    </li>
                    <li>
                      <strong>Locking in Lower Premiums:</strong> Insurance is
                      priced based on age. Purchasing{" "}
                      <NextLink
                        href="/services/insurance/lic"
                        className="text-red-600 font-semibold hover:underline"
                      >
                        life insurance
                      </NextLink>{" "}
                      at 22 locks in a rate significantly lower than what you
                      would pay later in life.
                    </li>
                    <li>
                      <strong>Guaranteed Insurability:</strong> By buying{" "}
                      <NextLink
                        href="/services/insurance/lic"
                        className="text-red-600 font-semibold hover:underline"
                      >
                        insurance
                      </NextLink>{" "}
                      early, you ensure your coverage is locked in regardless of
                      future health changes.
                    </li>
                    <li>
                      <strong>Financial Discipline:</strong> Paying a regular
                      premium for your{" "}
                      <NextLink
                        href="/services/insurance/lic"
                        className="text-red-600 font-semibold hover:underline"
                      >
                        life insurance
                      </NextLink>{" "}
                      plan cultivates essential financial habits.
                    </li>
                  </ol>

                  <h2>Types of Life Insurance Policies</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border p-2">Plan Type</th>
                          <th className="border p-2">Purpose</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-2">Term Insurance</td>
                          <td className="border p-2">
                            Pure protection via{" "}
                            <NextLink
                              href="/services/insurance/lic"
                              className="text-red-600 hover:underline"
                            >
                              life insurance
                            </NextLink>
                          </td>
                        </tr>
                        <tr>
                          <td className="border p-2">Endowment Plan</td>
                          <td className="border p-2">
                            Savings +{" "}
                            <NextLink
                              href="/services/insurance/lic"
                              className="text-red-600 hover:underline"
                            >
                              Insurance protection
                            </NextLink>
                          </td>
                        </tr>
                        <tr>
                          <td className="border p-2">Money-Back</td>
                          <td className="border p-2">
                            Structured{" "}
                            <NextLink
                              href="/services/insurance/lic"
                              className="text-red-600 hover:underline"
                            >
                              insurance payouts
                            </NextLink>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>
                          Q: Is a medical check-up required for students?
                        </strong>
                        <br />
                        Often, young individuals find{" "}
                        <NextLink
                          href="/services/insurance/lic"
                          className="text-red-600 hover:underline"
                        >
                          life insurance coverage
                        </NextLink>{" "}
                        with minimal medical documentation.
                      </li>
                      <li>
                        <strong>
                          Q: What if I can t afford a high premium?
                        </strong>
                        <br />
                        You don t need a high cover initially. Start with a
                        modest{" "}
                        <NextLink
                          href="/services/insurance/lic"
                          className="text-red-600 hover:underline"
                        >
                          life insurance
                        </NextLink>{" "}
                        sum assured and upgrade later.
                      </li>
                    </ul>
                  </div>
                </article>

                <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[40px] mt-10">
                  <Typography
                    variant="h5"
                    className="text-blue-400 uppercase mb-3"
                  >
                    Secure Your Future Today
                  </Typography>
                  <Typography variant="b2" className="text-gray-300 mb-6 block">
                    A small investment today provides a lifetime of security.
                    Explore our range of
                    <NextLink
                      href="/services/insurance/lic"
                      className="text-red-400 font-bold hover:underline mx-1"
                    >
                      LIC life insurance plans
                    </NextLink>
                    and protect your earning potential.
                  </Typography>

                  <NextLink
                    href="/services/insurance/lic"
                    className="inline-block bg-red-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-red-700 transition"
                  >
                    Explore LIC Plans
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
