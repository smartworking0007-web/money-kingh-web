"use client";
import { useState, useMemo, useSyncExternalStore } from "react";
import { Typography } from "../ui/Typography";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// --- HYDRATION FIX ---
const emptySubscribe = () => () => {};
function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

// --- TYPES ---
interface ChartDataPoint {
  period: number;
  principalPaid: number;
  interestPaid: number;
  balance: number;
  cumulativeInterest: number;
}

interface SliderRowProps {
  label?: string;
  value: number;
  setValue: (val: number) => void;
  min: number;
  max: number;
  step?: number;
  prefix?: string;
  suffix?: string;
}

// --- MODERN SLIDER COMPONENT ---
const SliderRow = ({
  label,
  value,
  setValue,
  min,
  max,
  step = 1,
  prefix = "",
  suffix = "",
}: SliderRowProps) => (
  <div className="flex flex-col gap-2 mb-4">
    <div className="flex justify-between items-center">
      {label && (
        <Typography
          variant="s1"
          className="text-slate-700 font-semibold text-[13px]"
        >
          {label}
        </Typography>
      )}
      <div className="flex items-center bg-slate-100/50 border border-slate-200 rounded-md px-2 py-1 shadow-sm">
        {prefix && (
          <span className="text-slate-400 text-[11px] mr-1">{prefix}</span>
        )}
        <input
          type="number"
          value={value === 0 ? "" : value}
          onChange={(e) =>
            setValue(e.target.value === "" ? 0 : Number(e.target.value))
          }
          className="w-20 bg-transparent outline-none text-[#1e2e5c] font-bold text-[13px] text-right"
        />
        {suffix && (
          <span className="text-slate-400 text-[11px] ml-1">{suffix}</span>
        )}
      </div>
    </div>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => setValue(Number(e.target.value))}
      className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1e2e5c] transition-all hover:accent-[#3b82f6]"
    />
  </div>
);

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [loanTerm, setLoanTerm] = useState(60);
  const [interestRate, setInterestRate] = useState(10.5);
  const [frequency, setFrequency] = useState("Monthly");
  const [activeTab, setActiveTab] = useState("chart");

  const isClient = useIsClient();

  const { chartData, periodicPayment, totalInterest, totalRepayment } =
    useMemo(() => {
      const data: ChartDataPoint[] = [];
      let balance = loanAmount;
      const ppy =
        ({ Weekly: 52, Fortnightly: 26, Monthly: 12, Quarterly: 4, Yearly: 1 } as Record<string, number>)[
          frequency
        ] || 12;
      const totalPeriods = Math.round((loanTerm / 12) * ppy);
      const periodicRate = interestRate / 100 / ppy;

      const pmt =
        totalPeriods > 0 && periodicRate > 0
          ? (loanAmount *
              periodicRate *
              Math.pow(1 + periodicRate, totalPeriods)) /
            (Math.pow(1 + periodicRate, totalPeriods) - 1)
          : loanAmount / (totalPeriods || 1);

      let accumulatedInterest = 0;
      for (let i = 1; i <= totalPeriods; i++) {
        const interestPmt = balance * periodicRate;
        const principalPmt = pmt - interestPmt;
        balance -= principalPmt;
        accumulatedInterest += interestPmt;
        data.push({
          period: i,
          principalPaid: principalPmt,
          interestPaid: interestPmt,
          balance: Math.max(0, balance),
          cumulativeInterest: accumulatedInterest,
        });
      }
      return {
        chartData: data,
        periodicPayment: pmt,
        totalInterest: accumulatedInterest,
        totalRepayment: loanAmount + accumulatedInterest,
      };
    }, [loanAmount, loanTerm, interestRate, frequency]);

  if (!isClient) return null;

  return (
    <section className="w-full pt-4 pb-12 px-4 flex justify-center mt-[-140px] relative z-20">
      <div className="w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100">
        <div className="bg-[rgb(4,43,162)] py-0 h-auto text-center relative overflow-hidden flex items-center justify-center">
          <div className="absolute top-0 right-0 w-10 h-10 bg-white/5 rounded-full -mr-5 -mt-5" />
          <Typography
            variant="h3"
            className="text-white uppercase text-[10px] md:text-xs tracking-[0.2em] z-10 relative leading-none py-1"
          >
            Loan Amortization Calculator
          </Typography>
        </div>

        <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 flex flex-col justify-start space-y-6">
            <div className="bg-slate-50/50 p-6 rounded-2xl border border-slate-100">
              <SliderRow
                label="Loan Amount"
                value={loanAmount}
                setValue={setLoanAmount}
                min={100000}
                max={10000000}
                prefix="₹"
              />
              <SliderRow
                label="Loan Term"
                value={loanTerm}
                setValue={setLoanTerm}
                min={12}
                max={360}
                suffix="mo"
              />

              <div className="flex flex-col gap-2 mb-6">
                <Typography
                  variant="s1"
                  className="text-slate-700 font-semibold text-[13px]"
                >
                  Repayment Frequency
                </Typography>
                <div className="relative">
                  <select
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                    className="w-full appearance-none bg-white border border-slate-200 rounded-lg px-4 py-2.5 font-bold text-sm text-[#1e2e5c] outline-none cursor-pointer focus:ring-2 focus:ring-[#1e2e5c]/10"
                  >
                    {["Weekly", "Fortnightly", "Monthly", "Quarterly", "Yearly"].map((f) => (
                      <option key={f} value={f}>
                        {f}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    ▼
                  </div>
                </div>
              </div>

              <SliderRow
                label="Interest Rate"
                value={interestRate}
                setValue={setInterestRate}
                min={8}
                max={24}
                step={0.1}
                suffix="%"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl border-2 border-blue-50 bg-blue-50/30 flex flex-col items-center">
                <p className="text-[#1e2e5c]/60 font-bold uppercase text-[10px] tracking-widest mb-1">
                  {frequency} EMI
                </p>
                <p className="text-[#1e2e5c] font-black text-xl">
                  ₹{Math.round(periodicPayment).toLocaleString()}
                </p>
              </div>
              <div className="p-4 rounded-2xl border-2 border-slate-50 bg-slate-50/50 flex flex-col items-center">
                <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest mb-1">
                  Interest Cost
                </p>
                <p className="text-slate-700 font-black text-xl">
                  ₹{Math.round(totalInterest).toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="inline-flex p-1 bg-slate-100 rounded-xl">
                <button
                  onClick={() => setActiveTab("chart")}
                  className={`px-6 py-2 rounded-lg text-xs font-bold transition-all ${
                    activeTab === "chart" ? "bg-white text-[#1e2e5c] shadow-sm" : "text-slate-500 hover:text-slate-700"
                  }`}
                >
                  Visualization
                </button>
                <button
                  onClick={() => setActiveTab("table")}
                  className={`px-6 py-2 rounded-lg text-xs font-bold transition-all ${
                    activeTab === "table" ? "bg-white text-[#1e2e5c] shadow-sm" : "text-slate-500 hover:text-slate-700"
                  }`}
                >
                  Schedule
                </button>
              </div>
            </div>

            <div className="w-full h-80 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden p-2">
              {activeTab === "chart" ? (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={chartData}
                    margin={{ top: 20, right: 10, left: -10, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2} />
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="colorInterest" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#1e2e5c" stopOpacity={0.1} />
                        <stop offset="95%" stopColor="#1e2e5c" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="period" hide />
                    <YAxis
                      tick={{ fill: "#94a3b8", fontSize: 10 }}
                      tickFormatter={(v) => `₹${(v / 100000).toFixed(0)}L`}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip
                      contentStyle={{
                        borderRadius: "12px",
                        border: "none",
                        boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
                      }}
                      // FINAL FIX: No 'any', satisfies both TypeScript and ESLint
                      formatter={(v: number | string | (string | number)[] | undefined) => [
                        `₹${Math.round(Number(v) || 0).toLocaleString()}`, 
                        ""
                      ]}
                    />
                    <Legend
                      verticalAlign="top"
                      iconType="circle"
                      wrapperStyle={{
                        paddingBottom: "20px",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="balance"
                      stroke="#3b82f6"
                      fill="url(#colorBalance)"
                      name="Remaining Balance"
                      strokeWidth={3}
                    />
                    <Area
                      type="monotone"
                      dataKey="cumulativeInterest"
                      stroke="#1e2e5c"
                      fill="url(#colorInterest)"
                      name="Cumulative Interest"
                      strokeWidth={3}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full overflow-y-auto text-xs scrollbar-thin scrollbar-thumb-slate-200">
                  <table className="w-full text-left">
                    <thead className="sticky top-0 bg-white/95 backdrop-blur-sm z-10 font-bold text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-100">
                      <tr>
                        <th className="px-4 py-3">Period</th>
                        <th className="px-4 py-3">Principal</th>
                        <th className="px-4 py-3">Interest</th>
                        <th className="px-4 py-3 text-right">Balance</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {chartData.map((row) => (
                        <tr key={row.period} className="hover:bg-slate-50/80 transition-colors">
                          <td className="px-4 py-3 text-slate-400 font-medium">#{row.period}</td>
                          <td className="px-4 py-3 text-slate-700">
                            ₹{Math.round(row.principalPaid).toLocaleString()}
                          </td>
                          <td className="px-4 py-3 text-slate-700">
                            ₹{Math.round(row.interestPaid).toLocaleString()}
                          </td>
                          <td className="px-4 py-3 text-right font-bold text-[#1e2e5c]">
                            ₹{Math.round(row.balance).toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-slate-50/80 border-t border-slate-100 px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-8">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
              <span className="text-[13px] text-slate-500 font-medium">
                Loan: <b className="text-slate-800">₹{loanAmount.toLocaleString()}</b>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#1e2e5c] shadow-[0_0_10px_rgba(30,46,92,0.3)]" />
              <span className="text-[13px] text-slate-500 font-medium">
                Total Interest:{" "}
                <b className="text-slate-800">₹{Math.round(totalInterest).toLocaleString()}</b>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-slate-400 font-bold uppercase text-[11px] tracking-widest">
              Total Payable
            </span>
            <Typography variant="s1" className="text-2xl font-black text-blue-600">
              ₹{Math.round(totalRepayment).toLocaleString()}
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanCalculator;