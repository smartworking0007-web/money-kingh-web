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

export const Blog11 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) =>
    setActiveFaq(activeFaq === index ? null : index);

  const faqs = [
    {
      q: "Q1. Does Critical Illness cover COVID-19 or viral fevers?",
      a: "No. These are handled by your standard Health Insurance. CI cover is specifically for life-threatening diseases like Cancer, Paralysis, or Major Organ Failure.",
    },
    {
      q: "Q2. Can I claim both Health Insurance and CI cover for the same surgery?",
      a: "Yes. You can use your Health Insurance to pay the hospital bill and simultaneously receive the lumpsum from your Critical Illness policy based on the diagnosis report.",
    },
    {
      q: "Q3. Is there a waiting period for Critical Illness?",
      a: "Yes. Most policies have a 90-day initial waiting period from the start of the policy, meaning you cannot claim for a diagnosis made within the first 3 months.",
    },
    {
      q: "Q4. What is the 'Survival Period' in CI insurance?",
      a: "Most CI plans require the policyholder to survive for a specific period (usually 28–30 days) after the diagnosis to be eligible for the lumpsum payout.",
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
            title="Health Insurance vs. Critical Illness Cover: Do you really need both?"
            category="INSURANCE"
            author="Sumit Mishra"
            date="May 05, 2026"
            image="/images/blog/blog-11.jpeg"
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
                  src="/images/blog/blog-11.jpeg"
                  alt="Medical-professional-explaining-insurance-options-on-a-tablet-clean-desk"
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
                  Health Insurance vs. Critical Illness Cover: Do you really need both?
                </Typography>

                <div className="flex gap-4 text-gray-400 mb-6 pb-4 border-b overflow-x-auto no-scrollbar">
                  <div className="flex items-center gap-2 shrink-0">
                    <Clock size={16} />
                    <Typography variant="b2">May 05, 2026</Typography>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Folder size={16} />
                    <Typography variant="b2">Insurance</Typography>
                  </div>
                </div>

                <Typography
                  variant="s2"
                  className="text-gray-600 mb-10 font-medium leading-relaxed"
                >
                  When planning your financial safety net, a health policy is essential, but it often leaves a massive &quot;income gap&quot; during major illnesses. Discover why having both might be your smartest move in 2026.
                </Typography>

                <section className="space-y-10">
                  <div>
                    <Typography variant="h5" className="text-[#1e3a8a] mb-4 font-bold uppercase">
                      The Fundamental Difference: &quot;Indemnity&quot; vs. &quot;Fixed Benefit&quot;
                    </Typography>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-5 bg-blue-50 rounded-lg border border-blue-100">
                        <Typography variant="s1" className="font-bold mb-2">Health Insurance (Indemnity)</Typography>
                        <Typography variant="b2" className="text-gray-700">A reimbursement model that pays the hospital for actual expenses incurred during stay.</Typography>
                      </div>
                      <div className="p-5 bg-gray-50 rounded-lg border border-gray-100">
                        <Typography variant="s1" className="font-bold mb-2">Critical Illness (Fixed Benefit)</Typography>
                        <Typography variant="b2" className="text-gray-700">A lumpsum model that pays the entire sum insured on diagnosis, regardless of hospital bills.</Typography>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Typography variant="h5" className="text-[#1e3a8a] mb-4 font-bold uppercase">
                      Why Health Insurance Alone Isn&apos;t Enough
                    </Typography>
                    <Typography variant="b1" className="text-gray-700 leading-relaxed mb-4">
                      Major illnesses come with &quot;Recovery Costs&quot; that standard plans don&apos;t cover:
                    </Typography>
                    <ul className="space-y-3">
                      <li className="flex gap-2"><ChevronRight className="text-blue-600 shrink-0" size={18}/><Typography variant="b1"><strong>Loss of Income:</strong> Recovery can take months without working capacity.</Typography></li>
                      <li className="flex gap-2"><ChevronRight className="text-blue-600 shrink-0" size={18}/><Typography variant="b1"><strong>Lifestyle Adjustments:</strong> Costs of caregivers or home modifications.</Typography></li>
                      <li className="flex gap-2"><ChevronRight className="text-blue-600 shrink-0" size={18}/><Typography variant="b1"><strong>Out-of-Pocket:</strong> Post-discharge medications and specialized diets.</Typography></li>
                    </ul>
                  </div>

                  {/* Comparison Table */}
                  <div className="overflow-x-auto rounded-lg border border-gray-200">
                    <table className="w-full text-left border-collapse">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="p-4 border-b font-bold text-gray-900">Feature</th>
                          <th className="p-4 border-b font-bold text-gray-900">Health Insurance</th>
                          <th className="p-4 border-b font-bold text-gray-900">Critical Illness</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-4 border-b text-gray-700 font-medium">Payout Basis</td>
                          <td className="p-4 border-b text-gray-600 text-sm">Actual hospital bills</td>
                          <td className="p-4 border-b text-gray-600 text-sm">Diagnosis of illness</td>
                        </tr>
                        <tr>
                          <td className="p-4 border-b text-gray-700 font-medium">Usage</td>
                          <td className="p-4 border-b text-gray-600 text-sm">Multiple times</td>
                          <td className="p-4 border-b text-gray-600 text-sm">Usually once</td>
                        </tr>
                        <tr>
                          <td className="p-4 border-b text-gray-700 font-medium">Survival Period</td>
                          <td className="p-4 border-b text-gray-600 text-sm">None</td>
                          <td className="p-4 border-b text-gray-600 text-sm">15–30 Days required</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-[#1e3a8a] text-white p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 my-14 shadow-2xl">
                    <div className="text-center md:text-left">
                      <Typography variant="h5" className="text-white mb-2 font-bold uppercase">Protect Your Income</Typography>
                      <Typography variant="b2" className="text-blue-100 opacity-80">Don&apos;t let a medical emergency drain your life savings.</Typography>
                    </div>
                    <Link href="/contact" className="w-full md:w-auto">
                      <Button size="lg" className="bg-white text-[#1e3a8a] hover:bg-gray-100 px-12 py-6 w-full font-bold text-lg shadow-lg">Apply Now</Button>
                    </Link>
                  </div>

                  <div className="pt-10 border-t border-gray-100">
                    <Typography variant="h5" className="text-[#1e3a8a] mb-8 font-bold uppercase underline decoration-blue-200 underline-offset-8">
                      Frequently Asked Questions
                    </Typography>
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