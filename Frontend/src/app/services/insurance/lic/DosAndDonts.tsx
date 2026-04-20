"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";

const insuranceRules = [
  {
    do: {
      title: "Buy Early",
      desc: "Buying as early as possible ensures that you can buy the life insurance policy at the lowest premiums applicable for your profile and get the largest cover amount.",
    },
    dont: {
      title: "Don't Provide False Details",
      desc: "Providing false information or leaving out important details in the application form can result in policy cancellations or insurer rejections of claims.",
    },
  },
  {
    do: {
      title: "Carefully Read the Policy Documents",
      desc: "Carefully reading the policy documents helps you avoid confusion about what the plan covers and make informed decisions accordingly.",
    },
    dont: {
      title: "Don't Miss Premium Payments",
      desc: "Missing premium payments on time can cause a life insurance policy to lapse, resulting in the end of coverage.",
    },
  },
  {
    do: {
      title: "Choose Suitable Riders",
      desc: "Adding the available riders can enhance the base cover of the life insurance policy at nominal premiums.",
    },
    dont: {
      title: "Don't Delay Policy Purchase",
      desc: "Delaying the purchase of your life insurance policy can increase premiums and decrease the amount of coverage offered.",
    },
  },
  {
    do: {
      title: "Compare Available Plans",
      desc: "Comparing the available life insurance plans online will ensure that you buy the right policy for your needs.",
    },
    dont: {
      title: "Don't Under-insure",
      desc: "Not opting for the right sum assured will lead to your family receiving a death benefit that doesn't cover their financial needs in your absence.",
    },
  },
];

export default function DosAndDonts() {
  return (
    <section className="w-full bg-white py-12 md:py-20 px-4 md:px-10 font-lexend">
      <div className="max-w-7xl mx-auto">
        {/* --- HEADER --- */}
        <div className="text-center mb-10">
          <Typography
            variant="h5"
            as="h5"
            className="text-2xl md:text-xl font-black text-[#1e293b] mt-0"
          >
            <span className="text-blue-600">Do s and Don ts</span> of Life Insurance Policy
          </Typography>
        </div>

        {/* --- TABLE CONTAINER --- */}
        <div className="overflow-x-auto rounded-md border border-gray-200 shadow-sm">
          <table className="w-full text-left border-collapse min-w-[600px]">
            {/* Table Header */}
            <thead>
              <tr className="bg-[#2d3e50]">
                <th className="p-4 md:p-6 border-r border-slate-600">
                  <Typography variant="h5" className="text-white font-bold text-sm md:text-base mt-0">
                    Do s of Life Insurance Plans
                  </Typography>
                </th>
                <th className="p-4 md:p-6">
                  <Typography variant="h5" className="text-white font-bold text-sm md:text-base mt-0">
                    Don ts of Life Insurance Plans
                  </Typography>
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-gray-100">
              {insuranceRules.map((rule, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  {/* DO Section */}
                  <td className="p-4 md:p-6 border-r border-gray-100 align-top w-1/2">
                    <Typography variant="h5" className="text-slate-800 font-black text-sm md:text-[15px] mb-2 mt-0">
                      {rule.do.title}:
                    </Typography>
                    <Typography variant="b1" className="text-gray-500 text-xs md:text-[13px] leading-relaxed mt-0">
                      {rule.do.desc}
                    </Typography>
                  </td>

                  {/* DONT Section */}
                  <td className="p-4 md:p-6 align-top w-1/2">
                    <Typography variant="h5" className="text-slate-800 font-black text-sm md:text-[15px] mb-2 mt-0">
                      {rule.dont.title}:
                    </Typography>
                    <Typography variant="b1" className="text-gray-500 text-xs md:text-[13px] leading-relaxed mt-0">
                      {rule.dont.desc}
                    </Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}