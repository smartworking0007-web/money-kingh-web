import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import {
  CheckCircle2,
  Clock,
  ShieldCheck,
  Zap,
  TrendingUp,
  BadgeCheck,
  FileSpreadsheet,
  Wallet,
} from "lucide-react";

// --- TYPES FOR INDUSTRY STANDARDS ---
interface StatItemProps {
  label: string;
  value: string;
}

interface BenefitItemProps {
  icon: React.ReactNode;
  text: string;
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  color: string;
}

interface RequirementRowProps {
  label: string;
  value: string;
}

const BillDiscountingView = () => {
  return (
    <div className="bg-white selection:bg-blue-100 font-sans text-left">
      {/* --- HERO SECTION --- */}
      <section className="relative bg-[#001f3f] text-white py-16 lg:py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 -skew-x-12 translate-x-32" />

        <div className="max-w-[1300px] mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          <div className="lg:w-3/5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 mb-6">
              <BadgeCheck className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-200">
                Supply Chain Finance Experts
              </span>
            </div>
            <Typography
              variant="h1"
              className="text-white mb-6 leading-[1.1] lg:text-6xl font-extrabold italic"
            >
              Convert Invoices to Cash <br /> With <span className="text-blue-400">Money King</span>
            </Typography>
            <Typography
              variant="s1"
              className="text-blue-100/80 mb-10 max-w-xl text-lg lg:text-xl"
            >
              Don&apos;t wait 90 days for your payments. Get up to 90% of your invoice value 
              upfront with Money King Financial Services and keep your business moving.
            </Typography>

            <div className="flex flex-wrap gap-5 items-center text-left">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-bold transition-all transform hover:scale-105 shadow-xl shadow-blue-600/30">
              <a href="/contact"> DISCOUNT YOUR BILLS</a>
              </button>
              <div className="flex flex-col">
                <span className="text-blue-200 text-sm font-semibold italic">
                  Discounting Rates from
                </span>
                <span className="text-white font-bold text-xl italic">
                  0.8% - 1.5% Per Month*
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS RIBBON --- */}
      <div className="max-w-[1300px] mx-auto px-6 -mt-10 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100 border border-gray-50">
          <StatItem label="Advance Value" value="Up to 90%" />
          <StatItem label="Processing Time" value="24-48 Hours" />
          <StatItem label="Credit Limit" value="₹10 Cr+" />
          <StatItem label="Collateral" value="None Required" />
        </div>
      </div>

      {/* --- HOW IT WORKS --- */}
      <section className="max-w-[1300px] mx-auto px-6 py-24 text-left">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <Typography variant="h2" className="text-[#001f3f] font-bold mb-6 italic">
              Empower Your Cash Flow
            </Typography>
            <Typography variant="b1" className="text-gray-600 mb-8 leading-relaxed">
              Bill discounting is the most efficient way to unlock capital tied up in unpaid invoices. 
              Money King Financial Services provides a digital platform where your bills become 
              your biggest financial strength.
            </Typography>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <BenefitItem icon={<Zap className="text-blue-600" />} text="Instant Liquidity" />
              <BenefitItem icon={<TrendingUp className="text-blue-600" />} text="Better Working Capital" />
              <BenefitItem icon={<ShieldCheck className="text-blue-600" />} text="Non-Recourse Options" />
              <BenefitItem icon={<Wallet className="text-blue-600" />} text="Flexible Credit Lines" />
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="space-y-4 mt-8">
              <FeatureCard icon={<FileSpreadsheet />} title="Digital Invoicing" color="bg-blue-50" />
              <FeatureCard icon={<Clock />} title="Zero Waiting" color="bg-green-50" />
            </div>
            <div className="space-y-4">
              <FeatureCard icon={<ShieldCheck />} title="Safe Transfers" color="bg-yellow-50" />
              <FeatureCard icon={<Zap />} title="Real-time Alerts" color="bg-purple-50" />
            </div>
          </div>
        </div>
      </section>

      {/* --- ELIGIBILITY --- */}
      <section className="bg-slate-50 py-20 px-6 text-left">
        <div className="max-w-[1300px] mx-auto grid lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-black">
            <Typography variant="h4" className="mb-8 font-bold flex items-center gap-2">
              <CheckCircle2 className="text-blue-600" /> Eligibility Criteria
            </Typography>
            <div className="space-y-6">
              <RequirementRow label="Business Status" value="Min. 2 Years in Ops" />
              <RequirementRow label="Customer Profile" value="Blue-chip / Multi-national" />
              <RequirementRow label="Invoice Tenure" value="30 - 120 Days" />
              <RequirementRow label="Min. Invoice Value" value="₹1 Lakh per Bill" />
            </div>
          </div>
          <div className="bg-[#001f3f] p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
            <Typography variant="h4" className="mb-8 font-bold text-white">Documentation Required</Typography>
            <ul className="space-y-4">
              {["Copy of Invoices", "Proof of Delivery (LR/GR)", "Purchase Order (PO)", "Company GST Returns", "Customer Acceptance Letter"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-blue-100">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

/* --- HELPER COMPONENTS --- */
const StatItem = ({ label, value }: StatItemProps) => (
  <div className="p-6 text-center">
    <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{label}</span>
    <span className="text-[#001f3f] font-bold text-xl">{value}</span>
  </div>
);

const BenefitItem = ({ icon, text }: BenefitItemProps) => (
  <div className="flex items-center gap-3 text-left">
    {icon}<span className="text-gray-700 font-semibold">{text}</span>
  </div>
);

const FeatureCard = ({ icon, title, color }: FeatureCardProps) => (
  <div className={`${color} p-8 rounded-3xl flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-all`}>
    <div className="mb-4 text-[#001f3f]">{icon}</div>
    <Typography variant="caption" className="font-bold text-[#001f3f] uppercase tracking-tighter">{title}</Typography>
  </div>
);

const RequirementRow = ({ label, value }: RequirementRowProps) => (
  <div className="flex justify-between items-center border-b border-gray-50 pb-4 last:border-0">
    <span className="text-gray-500 font-medium">{label}</span>
    <span className="text-[#001f3f] font-bold">{value}</span>
  </div>
);

export default BillDiscountingView;