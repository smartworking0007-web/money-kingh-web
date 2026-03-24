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

// --- HYDRATION FIX (NO CASCADING RENDERS) ---
const emptySubscribe = () => () => {};
function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
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

const SliderRow = ({ label, value, setValue, min, max, step = 1, prefix = "", suffix = "" }: SliderRowProps) => (
  <div className="flex flex-col gap-3 mb-6">
    {label && <Typography variant="s1" className="text-[#1e2e5c] font-semibold">{label}</Typography>}
    <div className="flex flex-col sm:flex-row items-center gap-4">
      <div className="w-full sm:flex-1 relative h-6 flex items-center">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#586ca0]"
        />
      </div>
      <div className="w-full sm:w-40 shrink-0 flex items-center bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 shadow-sm">
        {prefix && <Typography variant="b2" className="text-gray-400 font-medium mr-1.5">{prefix}</Typography>}
        <input
          type="number"
          value={value === 0 ? "" : value}
          onChange={(e) => setValue(e.target.value === "" ? 0 : Number(e.target.value))}
          className="w-full bg-transparent outline-none text-gray-800 font-bold text-base text-right"
        />
        {suffix && <Typography variant="b2" className="text-gray-400 font-medium ml-1">{suffix}</Typography>}
      </div>
    </div>
  </div>
);

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [loanTerm, setLoanTerm] = useState(60);
  const [interestRate, setInterestRate] = useState(10.5);
  const [frequency, setFrequency] = useState("Monthly");
  const [activeTab, setActiveTab] = useState("chart");
  
  // Modern Client Check (Fixes the cascading render error)
  const isClient = useIsClient();

  const { chartData, periodicPayment, totalInterest, totalRepayment } = useMemo(() => {
    const data: ChartDataPoint[] = [];
    let balance = loanAmount;
    const frequencyMap: Record<string, number> = { Weekly: 52, Fortnightly: 26, Monthly: 12, Quarterly: 4, Yearly: 1 };
    const ppy = frequencyMap[frequency] || 12;
    const totalPeriods = Math.round((loanTerm / 12) * ppy);
    const periodicRate = (interestRate / 100) / ppy;

    const pmt = totalPeriods > 0 && periodicRate > 0
        ? (loanAmount * periodicRate * Math.pow(1 + periodicRate, totalPeriods)) / (Math.pow(1 + periodicRate, totalPeriods) - 1)
        : loanAmount / (totalPeriods || 1);

    let accumulatedInterest = 0;
    for (let i = 1; i <= totalPeriods; i++) {
      const interestPmt = balance * periodicRate;
      const principalPmt = pmt - interestPmt;
      balance -= principalPmt;
      accumulatedInterest += interestPmt;
      data.push({ period: i, principalPaid: principalPmt, interestPaid: interestPmt, balance: Math.max(0, balance), cumulativeInterest: accumulatedInterest });
    }
    return { chartData: data, periodicPayment: pmt, totalInterest: accumulatedInterest, totalRepayment: loanAmount + accumulatedInterest };
  }, [loanAmount, loanTerm, interestRate, frequency]);

  // Server-safe render
  if (!isClient) {
    return <div className="w-full py-12 min-h-[800px] bg-slate-50/50" />;
  }

  return (
    <section className="w-full py-12 px-4 bg-slate-50/50 flex justify-center">
      <div className="w-full max-w-6xl bg-white rounded-4xl overflow-hidden shadow-2xl border border-slate-100">
        <div className="bg-[#1e2e5c] py-10 text-center px-4">
          <Typography variant="h3" className="text-white font-bold uppercase tracking-tight">Loan Amortization Calculator</Typography>
        </div>

        <div className="p-6 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-4">
            <SliderRow label="Loan Amount" value={loanAmount} setValue={setLoanAmount} min={100000} max={10000000} prefix="₹" />
            <SliderRow label="Loan Term (Months)" value={loanTerm} setValue={setLoanTerm} min={12} max={360} suffix="mo" />
            
            <div className="flex flex-col gap-3 mb-8">
              <Typography variant="s1" className="text-[#1e2e5c] font-semibold">Repayment Frequency</Typography>
              <select value={frequency} onChange={(e) => setFrequency(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-bold text-lg outline-none cursor-pointer">
                <option value="Weekly">Weekly</option>
                <option value="Fortnightly">Fortnightly</option>
                <option value="Monthly">Monthly</option>
                <option value="Quarterly">Quarterly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>

            <SliderRow label="Interest Rate" value={interestRate} setValue={setInterestRate} min={8} max={24} step={0.1} suffix="%" />

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                <Typography variant="s2" className="text-[#1e2e5c]/70 font-bold uppercase text-[10px] tracking-widest">{frequency} Payment</Typography>
                <Typography variant="h4" className="text-[#1e2e5c] font-bold">₹{Math.round(periodicPayment).toLocaleString()}</Typography>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <Typography variant="s2" className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Total Interest</Typography>
                <Typography variant="h4" className="text-slate-800 font-bold">₹{Math.round(totalInterest).toLocaleString()}</Typography>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col">
            <div className="flex p-1 bg-slate-100 rounded-xl w-fit mb-8 self-center lg:self-start border border-slate-200">
              <button onClick={() => setActiveTab("chart")} className={`px-8 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === "chart" ? "bg-white text-[#1e2e5c] shadow-md" : "text-slate-500"}`}>Visualization</button>
              <button onClick={() => setActiveTab("table")} className={`px-8 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === "table" ? "bg-white text-[#1e2e5c] shadow-md" : "text-slate-500"}`}>Table View</button>
            </div>

            <div className="w-full min-h-[450px] aspect-video relative bg-white rounded-2xl border border-slate-100 shadow-inner overflow-hidden">
              {activeTab === "chart" ? (
                <ResponsiveContainer width="99%" height="99%">
                  <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2} />
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="colorInt" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#1e2e5c" stopOpacity={0.2} />
                        <stop offset="95%" stopColor="#1e2e5c" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="period" hide={true} />
                    <YAxis axisLine={false} tickLine={false} tickFormatter={(val) => `₹${(val / 100000).toFixed(0)}L`} tick={{ fill: "#94a3b8", fontSize: 12 }} />
                    <Tooltip formatter={(val: number | undefined) => [val ? `₹${Math.round(val).toLocaleString()}` : "₹0", ""]} />
                    <Legend verticalAlign="top" height={40} />
                    <Area type="monotone" dataKey="balance" stroke="#3b82f6" strokeWidth={3} fill="url(#colorBalance)" name="Remaining Balance" />
                    <Area type="monotone" dataKey="cumulativeInterest" stroke="#1e2e5c" strokeWidth={3} fill="url(#colorInt)" name="Cumulative Interest" />
                  </AreaChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-[450px] overflow-y-auto grow scrollbar-thin scrollbar-thumb-slate-200">
                  <table className="w-full text-left border-collapse">
                    <thead className="sticky top-0 bg-slate-50 shadow-sm uppercase text-[10px] font-bold text-slate-400">
                      <tr><th className="p-4 border-b border-slate-100">Period</th><th className="p-4 border-b border-slate-100">Principal</th><th className="p-4 border-b border-slate-100">Interest</th><th className="p-4 border-b border-slate-100 text-right">Balance</th></tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {chartData.slice(0, 100).map((row) => (
                        <tr key={row.period} className="hover:bg-blue-50/40 transition-colors">
                          <td className="p-4 text-slate-400 font-bold">#{row.period}</td>
                          <td className="p-4 font-semibold text-slate-700">₹{Math.round(row.principalPaid).toLocaleString()}</td>
                          <td className="p-4 font-semibold text-slate-700">₹{Math.round(row.interestPaid).toLocaleString()}</td>
                          <td className="p-4 font-bold text-[#1e2e5c] text-right">₹{Math.round(row.balance).toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-slate-50 border-t border-slate-100 p-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-8">
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#3b82f6]"></div><Typography variant="b2">Principal: <b>₹{loanAmount.toLocaleString()}</b></Typography></div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#1e2e5c]"></div><Typography variant="b2">Interest: <b>₹{Math.round(totalInterest).toLocaleString()}</b></Typography></div>
          </div>
          <Typography variant="s1">Total Amount Payable: <span className="font-bold ml-2 text-2xl text-blue-600">₹{Math.round(totalRepayment).toLocaleString()}</span></Typography>
        </div>
      </div>
    </section>
  );
};

export default LoanCalculator;