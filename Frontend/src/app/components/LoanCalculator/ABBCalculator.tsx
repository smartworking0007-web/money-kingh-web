

"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, RotateCcw } from "lucide-react";
import { Typography } from "@/app/components/ui/Typography";

interface MonthData {
  d5: string;
  d15: string;
  d25: string;
  d30: string;
}

export const ABBCalculator: React.FC = () => {
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
    <section
      className="w-full max-w-5xl mx-auto px-4 pt-2 pb-12"
      aria-label="Average Bank Balance Calculator"
    >
      {/* Header Badge */}
      <div className="flex justify-center mb-3">
        <span className="bg-[#e0f2fe] text-[#0284c7] font-semibold px-4 py-1.5 rounded-full tracking-wider uppercase text-xs">
          Bank Statement Tool
        </span>
      </div>

      {/* Main SEO Heading & Subtitle */}
      {/* Heading aur Subtitle ke liye wrapper div */}
      <div className="mb-10">
        <Typography
          variant="h2"
          as="h1"
          className="text-center text-slate-900 mb-2 font-bold"
        >
          Average Bank Balance (ABB) Calculator
        </Typography>
        <Typography variant="b1" as="p" className="text-center text-slate-500">
          Enter balances on the 5th, 15th, 25th &amp; 30th of each month
        </Typography>
      </div>

      {/* Period Selector Control */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-xs">
        <Typography
          variant="b2"
          as="span"
          className="font-medium text-slate-600 !my-0"
        >
          Select statement period
        </Typography>
        <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-2xl border border-slate-200">
          <button
            type="button"
            onClick={() => {
              setPeriod(6);
              setOpenMonth(null);
            }}
            className={`px-6 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
              period === 6
                ? "bg-[#00a8e8] text-white shadow-md"
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
            className={`px-6 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
              period === 12
                ? "bg-[#00a8e8] text-white shadow-md"
                : "text-slate-600 hover:text-slate-900 bg-transparent"
            }`}
          >
            12 Months
          </button>
        </div>
      </div>

      {/* Months Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {activeMonths.map((month) => {
          const isOpen = openMonth === month;
          const filled = isMonthFilled(month);
          const monthAvg = Math.round(calculateMonthAvg(month));

          return (
            <div
              key={month}
              className={`bg-white rounded-2xl border transition-all duration-300 shadow-xs overflow-hidden ${
                isOpen
                  ? "border-[#00a8e8] ring-2 ring-[#00a8e8]/10"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              {/* Accordion Header */}
              <div
                role="button"
                tabIndex={0}
                onClick={() => setOpenMonth(isOpen ? null : month)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ")
                    setOpenMonth(isOpen ? null : month);
                }}
                className="p-5 flex items-center justify-between cursor-pointer select-none"
              >
                <div>
                  <Typography
                    variant="s1"
                    as="h3"
                    className="font-bold text-slate-800 !my-0"
                  >
                    {month}
                  </Typography>
                  <Typography
                    variant="b3"
                    as="p"
                    className="text-slate-400 mt-0.5 !my-0"
                  >
                    {filled
                      ? `Avg: ₹${monthAvg.toLocaleString("en-IN")}`
                      : "Not filled"}
                  </Typography>
                </div>
                <div className="text-slate-400">
                  {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
              </div>

              {/* Accordion Expanded Inputs */}
              {isOpen && (
                <div className="px-5 pb-5 pt-1 grid grid-cols-2 gap-3 border-t border-slate-100 bg-slate-50/50 animate-in fade-in duration-200">
                  {(["d5", "d15", "d25", "d30"] as const).map((field) => {
                    const dayLabel =
                      field === "d5"
                        ? "5TH"
                        : field === "d15"
                          ? "15TH"
                          : field === "d25"
                            ? "25TH"
                            : "30TH";
                    return (
                      <div key={field}>
                        <label
                          htmlFor={`${month}-${field}`}
                          className="block font-bold text-slate-400 uppercase tracking-wider mb-1 text-[10px]"
                        >
                          {month.substring(0, 3).toUpperCase()} {dayLabel}
                        </label>
                        <div className="relative flex items-center">
                          <span className="absolute left-3 text-slate-400 text-sm">
                            ₹
                          </span>
                          <input
                            id={`${month}-${field}`}
                            type="number"
                            min="0"
                            value={balances[month][field]}
                            onChange={(e) =>
                              handleInputChange(month, field, e.target.value)
                            }
                            placeholder="0"
                            className="w-full bg-white border border-slate-200 rounded-xl py-2 pl-7 pr-3 text-sm focus:outline-none focus:border-[#00a8e8] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
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

      {/* Bottom Summary Bar */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
        {/* Months Filled */}
        <div className="text-center md:text-left">
          <span className="block font-bold text-slate-400 uppercase tracking-wider mb-1 text-xs text-slate-400">
            Months Filled
          </span>
          <div className="text-3xl font-extrabold text-slate-900">
            {filledMonthsCount}
            <span className="text-slate-400 font-normal text-xl">
              /{period}
            </span>
          </div>
        </div>

        {/* Formula Display */}
        <div className="text-center">
          <span className="block font-bold text-slate-400 uppercase tracking-wider mb-1 text-xs text-slate-400">
            Formula
          </span>
          <Typography
            variant="b3"
            as="p"
            className="text-slate-600 font-medium !my-0"
          >
            Avg(5th, 15th, 25th, 30th) per month
            <br />
            then ÷ {period} months
          </Typography>
        </div>

        {/* Your ABB & Badge */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div>
            <span className="block font-bold text-slate-400 uppercase tracking-wider text-right mb-1 text-xs text-slate-400">
              Your ABB
            </span>
            <div className="text-3xl md:text-4xl font-extrabold text-slate-900">
              ₹{totalABB.toLocaleString("en-IN")}
            </div>
          </div>
          <span
            className={`font-semibold px-4 py-1.5 rounded-full text-xs ${status.color}`}
          >
            {status.label}
          </span>
        </div>
      </div>

      {/* Reset Button */}
      <div className="flex justify-end mt-6">
        <button
          type="button"
          onClick={handleReset}
          className="flex items-center gap-2 px-6 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition font-semibold text-sm cursor-pointer"
        >
          <RotateCcw size={16} /> Reset All
        </button>
      </div>
    </section>
  );
};

export default ABBCalculator;