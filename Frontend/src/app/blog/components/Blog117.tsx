"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Clock, ArrowLeft, HelpCircle, ChevronDown, ChevronUp, RotateCcw } from "lucide-react";
import { BlogCard1 } from "./BlogCard1";
import { ShareSection } from "./ShareSection";
import { Typography } from "@/app/components/ui/Typography";

interface MonthData {
  d5: string;
  d15: string;
  d25: string;
  d30: string;
}

export const Blog117: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [period, setPeriod] = useState<6 | 12>(6);
  const [openMonth, setOpenMonth] = useState<string | null>("June");

  const months6 = ["January", "February", "March", "April", "May", "June"];
  const months12 = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const activeMonths = period === 6 ? months6 : months12;

  const [balances, setBalances] = useState<Record<string, MonthData>>(() => {
    const initial: Record<string, MonthData> = {};
    [...months6, ...months12].forEach((m) => {
      initial[m] = { d5: "", d15: "", d25: "", d30: "" };
    });
    return initial;
  });

  const handleInputChange = (
    month: string,
    field: keyof MonthData,
    value: string,
  ) => {
    if (value !== "" && Number(value) < 0) return;
    setBalances((prev) => ({
      ...prev,
      [month]: {
        ...prev[month],
        [field]: value,
      },
    }));
  };

  const isMonthFilled = (month: string) => {
    const data = balances[month];
    return (
      data &&
      (data.d5 !== "" || data.d15 !== "" || data.d25 !== "" || data.d30 !== "")
    );
  };

  const calculateMonthAvg = (month: string) => {
    const data = balances[month];
    if (!data) return 0;
    const v5 = parseFloat(data.d5) || 0;
    const v15 = parseFloat(data.d15) || 0;
    const v25 = parseFloat(data.d25) || 0;
    const v30 = parseFloat(data.d30) || 0;
    return (v5 + v15 + v25 + v30) / 4;
  };

  const filledMonthsCount = activeMonths.filter((m) => isMonthFilled(m)).length;

  const totalABB = (() => {
    let sum = 0;
    activeMonths.forEach((m) => {
      sum += calculateMonthAvg(m);
    });
    return activeMonths.length > 0 ? Math.round(sum / activeMonths.length) : 0;
  })();

  const handleReset = () => {
    const resetData: Record<string, MonthData> = {};
    [...months6, ...months12].forEach((m) => {
      resetData[m] = { d5: "", d15: "", d25: "", d30: "" };
    });
    setBalances(resetData);
    setOpenMonth(null);
  };

  const getProfileStatus = (abb: number) => {
    if (abb === 0)
      return {
        label: "Weak Banking Profile",
        color: "bg-[#e0f2fe] text-[#0284c7]",
      };
    if (abb < 25000)
      return {
        label: "Average Banking Profile",
        color: "bg-amber-50 text-amber-600",
      };
    return {
      label: "Strong Banking Profile",
      color: "bg-emerald-50 text-emerald-600",
    };
  };

  const status = getProfileStatus(totalABB);

  return (
    <div className="w-full flex justify-center">
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-full flex justify-center px-4"
        >
          <BlogCard1
            title="₹500 SIP Investment Guide: How to Start Small & Build Big Wealth in 2026"
            category="MUTUAL FUND"
            author="Kishan Baranwal"
            date="October 6, 2026"
            image="/images/blog/Blog-117.jpeg"
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
                    src="/images/blog/Blog-117.jpeg"
                    alt="500 sip investment guide"
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
                    href="https://moneykingfinancial.com/services/mutual-fund/sip"
                    className="text-[#1e3a8a] hover:underline"
                  >
                    ₹500 SIP Investment Guide 2026
                  </NextLink>
                  : How to Start Small &amp; Build Big Wealth
                </Typography>

                <div className="flex items-center gap-2 text-gray-400 mb-8 border-b pb-4">
                  <Clock size={16} />
                  <Typography variant="b2">October 6, 2026</Typography>
                  <span className="mx-2">•</span>
                  <Typography variant="b2">By Kishan Baranwal</Typography>
                </div>

                {/* Blog Article Body */}
                <article className="prose max-w-none text-gray-600 text-justify space-y-6">
                  {/* Featured Snippet Box */}
                  <div className="bg-slate-50 border-l-4 border-[#1e3a8a] p-4 rounded-r-lg">
                    <p className="text-gray-700 italic m-0">
                      Starting a Systematic Investment Plan (SIP) with as little as ₹500 per month is one of the most accessible entry points into the Indian mutual fund ecosystem. Micro-SIPs allow investors to build regular financial discipline, mitigate market volatility through rupee cost averaging, and generate compounding long-term returns.
                    </p>
                  </div>

                  <p>
                    Many individuals believe that creating substantial wealth through equity markets requires large capital upfront. However, the Indian financial ecosystem allows you to begin your investment journey with as little as ₹500 per month through a Systematic Investment Plan (SIP) in mutual funds.
                  </p>

                  <p>
                    Starting a micro-SIP helps young professionals, first-time investors, and salaried employees build financial discipline, beat inflation, and capitalize on the power of compounding without straining their monthly budgets.
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Key Highlights of Starting a ₹500 SIP
                  </h2>

                  <div className="overflow-x-auto my-4">
                    <table className="w-full border-collapse border border-gray-200 text-left text-sm">
                      <thead className="bg-slate-100 text-gray-800">
                        <tr>
                          <th className="border border-gray-200 p-3">Feature</th>
                          <th className="border border-gray-200 p-3">Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">Minimum Monthly Amount</td>
                          <td className="border border-gray-200 p-3">₹500 per month</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">Asset Class Options</td>
                          <td className="border border-gray-200 p-3">Large Cap, Flexi Cap, Index Funds, ELSS (Tax Saving)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">Lock-in Period</td>
                          <td className="border border-gray-200 p-3">Nil (except 3 years for ELSS Tax-Saving Funds)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">Compounding Benefit</td>
                          <td className="border border-gray-200 p-3">High long-term potential via rupee-cost averaging</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    The Power of Compounding: What ₹500/Month Can Grow Into
                  </h2>
                  <p>
                    Starting early is far more critical than starting big. Here is a projection of how a ₹500 monthly investment grows at an expected average annual return of 12% across different investment horizons:
                  </p>

                  <div className="overflow-x-auto my-4">
                    <table className="w-full border-collapse border border-gray-200 text-left text-sm">
                      <thead className="bg-slate-100 text-gray-800">
                        <tr>
                          <th className="border border-gray-200 p-3">Investment Horizon</th>
                          <th className="border border-gray-200 p-3">Total Invested (₹)</th>
                          <th className="border border-gray-200 p-3">Estimated Returns (₹)</th>
                          <th className="border border-gray-200 p-3">Total Wealth (₹)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">5 Years</td>
                          <td className="border border-gray-200 p-3">₹30,000</td>
                          <td className="border border-gray-200 p-3">₹11,243</td>
                          <td className="border border-gray-200 p-3 font-bold">₹41,243</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">10 Years</td>
                          <td className="border border-gray-200 p-3">₹60,000</td>
                          <td className="border border-gray-200 p-3">₹56,169</td>
                          <td className="border border-gray-200 p-3 font-bold">₹1,16,169</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">15 Years</td>
                          <td className="border border-gray-200 p-3">₹90,000</td>
                          <td className="border border-gray-200 p-3">₹1,59,788</td>
                          <td className="border border-gray-200 p-3 font-bold">₹2,49,788</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">20 Years</td>
                          <td className="border border-gray-200 p-3">₹1,20,000</td>
                          <td className="border border-gray-200 p-3">₹3,79,574</td>
                          <td className="border border-gray-200 p-3 font-bold">₹4,99,574</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">25 Years</td>
                          <td className="border border-gray-200 p-3">₹1,50,000</td>
                          <td className="border border-gray-200 p-3">₹8,48,819</td>
                          <td className="border border-gray-200 p-3 font-bold">₹9,98,819</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 pt-4">
                    Why Start a ₹500 SIP Today?
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Rupee Cost Averaging:</strong> When market prices drop, your ₹500 buys more units. When markets rise, asset values grow smoothly over time.
                    </li>
                    <li>
                      <strong>Zero Financial Strain:</strong> Investing ₹500 monthly translates to less than ₹17 per day—making it ideal for students and beginners.
                    </li>
                    <li>
                      <strong>Step-Up Option:</strong> You can increase your SIP contribution annually as your income grows to fast-track financial goals.
                    </li>
                  </ul>

                  {/* Calculator Integration Section */}
                  <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200 my-10">
                    <div className="text-center mb-8">
                      <span className="bg-[#e0f2fe] text-[#0284c7] font-semibold px-4 py-1.5 rounded-full tracking-wider uppercase text-xs inline-block mb-3">
                        Interactive Tool
                      </span>
                      <Typography variant="h3" as="h3" className="text-2xl font-bold text-slate-900 mb-2">
                        Average Bank Balance (ABB) Calculator
                      </Typography>
                      <p className="text-sm text-slate-500">
                        Enter balances on the 5th, 15th, 25th &amp; 30th of each month
                      </p>
                    </div>

                    {/* Period Selector Control */}
                    <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4 bg-white p-4 rounded-xl border border-slate-200">
                      <span className="font-medium text-sm text-slate-600">Select statement period</span>
                      <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl">
                        <button
                          type="button"
                          onClick={() => {
                            setPeriod(6);
                            setOpenMonth(null);
                          }}
                          className={`px-5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                            period === 6
                              ? "bg-[#1e3a8a] text-white shadow-xs"
                              : "text-slate-600 hover:text-slate-900 bg-transparent"
                          }`}
                        >
                          6 Months
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setPeriod(12);
                            setOpenMonth(null);
                          }}
                          className={`px-5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                            period === 12
                              ? "bg-[#1e3a8a] text-white shadow-xs"
                              : "text-slate-600 hover:text-slate-900 bg-transparent"
                          }`}
                        >
                          12 Months
                        </button>
                      </div>
                    </div>

                    {/* Months Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                      {activeMonths.map((month) => {
                        const isOpen = openMonth === month;
                        const filled = isMonthFilled(month);
                        const monthAvg = Math.round(calculateMonthAvg(month));

                        return (
                          <div
                            key={month}
                            className={`bg-white rounded-xl border transition-all overflow-hidden ${
                              isOpen ? "border-[#1e3a8a] ring-1 ring-[#1e3a8a]/20" : "border-slate-200"
                            }`}
                          >
                            <div
                              role="button"
                              tabIndex={0}
                              onClick={() => setOpenMonth(isOpen ? null : month)}
                              onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ")
                                  setOpenMonth(isOpen ? null : month);
                              }}
                              className="p-4 flex items-center justify-between cursor-pointer select-none"
                            >
                              <div>
                                <h4 className="font-bold text-slate-800 text-sm m-0">{month}</h4>
                                <p className="text-xs text-slate-400 mt-0.5 m-0">
                                  {filled ? `Avg: ₹${monthAvg.toLocaleString("en-IN")}` : "Not filled"}
                                </p>
                              </div>
                              <div className="text-slate-400">
                                {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                              </div>
                            </div>

                            {isOpen && (
                              <div className="px-4 pb-4 pt-1 grid grid-cols-2 gap-2 border-t border-slate-100 bg-slate-50">
                                {(["d5", "d15", "d25", "d30"] as const).map((field) => {
                                  const dayLabel = field === "d5" ? "5TH" : field === "d15" ? "15TH" : field === "d25" ? "25TH" : "30TH";
                                  return (
                                    <div key={field}>
                                      <label htmlFor={`blog117-${month}-${field}`} className="block font-bold text-slate-400 uppercase tracking-wider mb-1 text-[9px]">
                                        {month.substring(0, 3).toUpperCase()} {dayLabel}
                                      </label>
                                      <div className="relative flex items-center">
                                        <span className="absolute left-2.5 text-slate-400 text-xs">₹</span>
                                        <input
                                          id={`blog117-${month}-${field}`}
                                          type="number"
                                          min="0"
                                          value={balances[month][field]}
                                          onChange={(e) => handleInputChange(month, field, e.target.value)}
                                          placeholder="0"
                                          className="w-full bg-white border border-slate-200 rounded-lg py-1.5 pl-6 pr-2 text-xs focus:outline-none focus:border-[#1e3a8a] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                        />
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Summary Bar */}
                    <div className="bg-white rounded-2xl border border-slate-200 p-5 flex flex-col md:flex-row items-center justify-between gap-4">
                      <div className="text-center md:text-left">
                        <span className="block font-bold text-slate-400 uppercase tracking-wider text-[10px] mb-1">Months Filled</span>
                        <div className="text-2xl font-extrabold text-slate-900">
                          {filledMonthsCount}<span className="text-slate-400 font-normal text-base">/{period}</span>
                        </div>
                      </div>
                      <div className="text-center">
                        <span className="block font-bold text-slate-400 uppercase tracking-wider text-[10px] mb-1">Formula</span>
                        <p className="text-xs text-slate-600 font-medium m-0">Avg(5th, 15th, 25th, 30th) ÷ {period} mos</p>
                      </div>
                      <div className="flex flex-col items-center md:items-end gap-2">
                        <div>
                          <span className="block font-bold text-slate-400 uppercase tracking-wider text-[10px] text-right mb-1">Your ABB</span>
                          <div className="text-2xl md:text-3xl font-extrabold text-slate-900">
                            ₹{totalABB.toLocaleString("en-IN")}
                          </div>
                        </div>
                        <span className={`font-semibold px-3 py-1 rounded-full text-[11px] ${status.color}`}>
                          {status.label}
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-end mt-4">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-white transition font-semibold text-xs cursor-pointer"
                      >
                        <RotateCcw size={14} /> Reset All
                      </button>
                    </div>
                  </div>

                  {/* FAQ Section */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h2 className="text-[#1e3a8a] text-xl font-bold mb-4 flex items-center gap-2">
                      <HelpCircle size={20} /> Frequently Asked Questions (FAQ)
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <strong>Q1: Can I stop or pause my ₹500 SIP at any time?</strong>
                        <br />
                        Yes. SIPs are completely flexible. You can pause, modify, or stop your SIP without incurring penalties or cancellation fees.
                      </li>
                      <li>
                        <strong>Q2: Are there any tax benefits on a ₹500 SIP?</strong>
                        <br />
                        If you choose an ELSS (Equity Linked Savings Scheme) mutual fund, your investments qualify for tax deductions up to ₹1.5 Lakh per financial year under Section 80C of the Income Tax Act.
                      </li>
                      <li>
                        <strong>Q3: What happens if I miss a monthly SIP installment due to low bank balance?</strong>
                        <br />
                        The fund house will not charge a penalty, but your bank might levy ECS/NACH mandate bounce charges. Ensure sufficient balance before the scheduled date.
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
                    Start Your Wealth Creation Journey Today
                  </Typography>
                  <Typography variant="b2" className="text-gray-300 mb-6 block">
                    Begin your micro-SIP investments securely with{" "}
                    <NextLink
                      href="https://moneykingfinancial.com/services/mutual-fund/sip"
                      className="text-blue-400 hover:underline"
                    >
                      Money King Financial Services
                    </NextLink>{" "}
                    now.
                  </Typography>

                  <div className="flex flex-wrap gap-4 mt-2">
                    <NextLink
                      href="https://moneykingfinancial.com/services/mutual-fund/sip"
                      className="inline-block bg-blue-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-700 transition"
                    >
                      Explore SIP Plans
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

export default Blog117;