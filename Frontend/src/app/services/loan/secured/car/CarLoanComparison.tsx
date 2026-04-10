"use client";

import { Typography } from "@/app/components/ui/Typography";

export default function CarLoanComparison() {
  const bankData = [
    { name: "State Bank of India", rate: "8.75% p.a. onwards", tenure: "Up to 7 years" },
    { name: "Indian Overseas Bank", rate: "7.55% p.a. onwards", tenure: "Up to 7 years" },
    { name: "IDFC First Bank", rate: "9.99% p.a. onwards", tenure: "Up to 10 years" },
    { name: "Canara Bank", rate: "7.45% p.a. onwards", tenure: "Up to 7 years" },
    { name: "HDFC Bank", rate: "9.00% p.a. onwards (Rack Interest)", tenure: "Up to 7 years" },
    { name: "IndusInd Bank", rate: "8.00% p.a. onwards", tenure: "Up to 5 years" },
    { name: "ICICI Bank", rate: "8.50% p.a. onwards", tenure: "Up to 7 years" },
    { name: "Union Bank of India", rate: "7.40% p.a. onwards", tenure: "Up to 7 years" },
    { name: "Bank of Maharashtra", rate: "7.45% p.a. onwards", tenure: "Up to 7 years" },
    { name: "Axis Bank", rate: "8.85% p.a. onwards", tenure: "Up to 7 years" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="mb-10 text-center lg:text-left">
        <Typography variant="h3" as="h2" className="text-[#004687] mb-4">
          Compare Car Loans in India 2026
        </Typography>
        <Typography variant="b1" className="text-gray-600">
          Here&apos;s a comparison of some of the best car loan schemes available in 2026, highlighting the starting interest rates and tenure:
        </Typography>
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#004687]">
              <th className="p-4 md:p-5 border-b border-white/10">
                <Typography variant="s2" className="text-white font-semibold">Name of the Bank</Typography>
              </th>
              <th className="p-4 md:p-5 border-b border-white/10">
                <Typography variant="s2" className="text-white font-semibold">Interest Rate (p.a.)</Typography>
              </th>
              <th className="p-4 md:p-5 border-b border-white/10">
                <Typography variant="s2" className="text-white font-semibold">Tenure</Typography>
              </th>
            </tr>
          </thead>
          <tbody>
            {bankData.map((bank, index) => (
              <tr 
                key={index} 
                className={`transition-colors hover:bg-gray-50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
              >
                <td className="p-4 md:p-5 border-b border-gray-100">
                  <Typography variant="b2" className="text-[#004687] font-medium hover:underline cursor-pointer">
                    {bank.name}
                  </Typography>
                </td>
                <td className="p-4 md:p-5 border-b border-gray-100">
                  <Typography variant="b2" className="text-gray-700">{bank.rate}</Typography>
                </td>
                <td className="p-4 md:p-5 border-b border-gray-100">
                  <Typography variant="b2" className="text-gray-700">{bank.tenure}</Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}