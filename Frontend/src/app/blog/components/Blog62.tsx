"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Clock, ArrowLeft, HelpCircle } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

export const Blog62 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="A Gift Deed or a Will? How Senior Citizens Can Best Pass Property to Their Children"
            category="ESTATE PLANNING"
            author="Sumit Mishra"
            date="July 01, 2026"
            image="/images/blog/blog-62.jpeg"
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
                  src="/images/blog/blog-62.jpeg"
                  alt="A clean financial infographic comparing the process of surrendering life insurance policy in India"
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
                  A Gift Deed or a Will? How Senior Citizens Can Best Pass
                  Property to Their Children
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">July 01, 2026</Typography>
                </div>

                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  <p>
                    Choosing between a Gift Deed and a Will depends on whether
                    you want to transfer property immediately or upon your
                    passing. For many senior citizens, the property they have
                    spent a lifetime building is their most valuable asset.
                    Deciding how to pass this on is a critical financial and
                    emotional decision.
                  </p>

                  <h2>Understanding the Gift Deed: Immediate Transfer</h2>
                  <p>
                    A Gift Deed is a legal document where a property owner
                    voluntarily transfers ownership to another person without
                    any monetary consideration.
                  </p>
                  <ul>
                    <li>
                      <strong>Irrevocable:</strong> Once registered, you
                      generally cannot cancel it.
                    </li>
                    <li>
                      <strong>Immediate:</strong> The recipient becomes the
                      owner as soon as the deed is registered.
                    </li>
                    <li>
                      <strong>Cost:</strong> Requires stamp duty and
                      registration fees at the Sub-Registrar’s office.
                    </li>
                  </ul>

                  <h2>Understanding the Will: The Testamentary Path</h2>
                  <p>
                    A Will is a legal declaration of your intention which takes
                    effect only after your demise.
                  </p>
                  <ul>
                    <li>
                      <strong>Revocable:</strong> You can change or rewrite your
                      Will as many times as you like.
                    </li>
                    <li>
                      <strong>Delayed Effect:</strong> Ownership is transferred
                      only after you pass away.
                    </li>
                    <li>
                      <strong>Cost-Effective:</strong> It does not require stamp
                      duty payment during your lifetime.
                    </li>
                  </ul>

                  <h2>Comparative Analysis</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border p-2">Feature</th>
                          <th className="border p-2">Gift Deed</th>
                          <th className="border p-2">Will</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-2">Timing</td>
                          <td className="border p-2">Immediate</td>
                          <td className="border p-2">Upon death</td>
                        </tr>
                        <tr>
                          <td className="border p-2">Control</td>
                          <td className="border p-2">Lost immediately</td>
                          <td className="border p-2">Retained for life</td>
                        </tr>
                        <tr>
                          <td className="border p-2">Revocability</td>
                          <td className="border p-2">Irrevocable</td>
                          <td className="border p-2">Fully Revocable</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h2>Tax Implications</h2>
                  <p>
                    Under Section 56(2) of the Income Tax Act, property received
                    as a gift by a relative (including children) is tax-exempt.
                    However, the registration of a Gift Deed attracts stamp
                    duty. Conversely, property inherited via a Will does not
                    attract stamp duty or income tax at the time of transfer.
                  </p>

                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>Q: Can a Gift Deed be challenged?</strong>
                        <br />
                        It can be challenged in court if it was signed under
                        coercion, fraud, or if the donor was not of sound mind.
                      </li>
                      <li>
                        <strong>Q: Does a Will need to be registered?</strong>
                        <br />
                        Registration is not mandatory, but highly recommended as
                        a registered Will is significantly harder to challenge
                        in court.
                      </li>
                      <li>
                        <strong>Q: What if I have a spouse?</strong>
                        <br />
                        Ensure your Will clearly outlines your spouse s rights
                        to prevent future conflicts over the inheritance.
                      </li>
                    </ul>
                  </div>
                </article>

                <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[40px] mt-10">
                  <Typography
                    variant="h5"
                    className="text-blue-400 uppercase mb-3"
                  >
                    Secure Your Legacy
                  </Typography>
                  <Typography variant="b2" className="text-gray-300">
                    Planning your estate is the greatest gift you can leave your
                    family. Contact our legal experts today to draft a plan that
                    protects both you and your children.
                  </Typography>
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
