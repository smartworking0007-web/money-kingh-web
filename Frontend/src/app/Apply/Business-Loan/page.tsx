import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import {
  CheckCircle2,
  Clock,
  ShieldCheck,
  Zap,
  TrendingUp,
  BadgeCheck,
  Building2,
  PieChart,
} from "lucide-react";

// --- TYPES DEFINED TO FIX ESLINT ERRORS ---
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

const BusinessLoanView = () => {
  return (
    <div className="bg-white selection:bg-blue-100 font-sans text-left">
      {/* --- HERO SECTION --- */}
      <section className="relative bg-[#001f3f] text-white py-16 lg:py-24 overflow-hidden">
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 -skew-x-12 translate-x-32" />

        <div className="max-w-[1300px] mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10 text-left">
          <div className="lg:w-3/5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 mb-6">
              <BadgeCheck className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-200">
                RBI Regulated Partners
              </span>
            </div>
            <Typography
              variant="h1"
              className="text-white mb-6 leading-[1.1] lg:text-6xl font-extrabold italic"
            >
              Empower Your Business <br /> With{" "}
              <span className="text-blue-400">Money King</span>
            </Typography>
            <Typography
              variant="s1"
              className="text-blue-100/80 mb-10 max-w-xl text-lg lg:text-xl"
            >
              Get customized business loans up to ₹1 Crore. Quick approvals,
              zero collateral, and the trust of Money King Financial Services.
            </Typography>

            <div className="flex flex-wrap gap-5 items-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-bold transition-all transform hover:scale-105 shadow-xl shadow-blue-600/30">
              <a href="/contact">APPLY FOR LOAN</a>
                
              </button>
              <div className="flex flex-col">
                <span className="text-blue-200 text-sm font-semibold">
                  Interest starts from
                </span>
                <span className="text-white font-bold text-xl">
                  10.5%* p.a.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS RIBBON --- */}
      <div className="max-w-[1300px] mx-auto px-6 -mt-10 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100 border border-gray-50">
          <StatItem label="Max Funding" value="₹1 Cr+" />
          <StatItem label="Repayment" value="Up to 5 Yrs" />
          <StatItem label="Turnaround" value="48 Hours" />
          <StatItem label="Process" value="100% Digital" />
        </div>
      </div>

      {/* --- WHY BUSINESS LOAN? --- */}
      <section className="max-w-[1300px] mx-auto px-6 py-24 text-left">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full z-0" />
              <Typography
                variant="h2"
                className="text-[#001f3f] font-bold relative z-10 mb-6"
              >
                Why Modern Businesses Choose Money King?
              </Typography>
            </div>
            <Typography
              variant="b1"
              className="text-gray-600 mb-8 leading-relaxed"
            >
              In today&apos;s fast-paced economy, Money King Financial Services
              understands that timing is everything. We eliminate the
              bureaucratic hurdles of traditional banking to provide you with
              King-Sized opportunities.
            </Typography>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <BenefitItem
                icon={<Zap className="text-blue-600" />}
                text="Instant Approval"
              />
              <BenefitItem
                icon={<TrendingUp className="text-blue-600" />}
                text="Business Scaling"
              />
              <BenefitItem
                icon={<ShieldCheck className="text-blue-600" />}
                text="No Hidden Charges"
              />
              <BenefitItem
                icon={<PieChart className="text-blue-600" />}
                text="Flexible EMIs"
              />
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="space-y-4 mt-8">
              <FeatureCard
                icon={<Building2 />}
                title="Corporate Growth"
                color="bg-blue-50"
              />
              <FeatureCard
                icon={<Clock />}
                title="Quick Disbursement"
                color="bg-green-50"
              />
            </div>
            <div className="space-y-4">
              <FeatureCard
                icon={<ShieldCheck />}
                title="Safe & Secure"
                color="bg-yellow-50"
              />
              <FeatureCard
                icon={<Zap />}
                title="Minimal Docs"
                color="bg-purple-50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- ELIGIBILITY SECTION --- */}
      <section className="bg-slate-50 py-20 px-6 text-left">
        <div className="max-w-[1300px] mx-auto">
          <Typography
            variant="h2"
            className="text-center text-[#001f3f] mb-16 font-bold"
          >
            Standard Eligibility Criteria
          </Typography>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-black">
              <Typography
                variant="h4"
                className="mb-8 font-bold flex items-center gap-2"
              >
                <CheckCircle2 className="text-blue-600" /> Basic Requirements
              </Typography>
              <div className="space-y-6">
                <RequirementRow label="Applicant Age" value="21 - 65 Years" />
                <RequirementRow label="Business Vintage" value="Min. 3 Years" />
                <RequirementRow label="Annual Turnover" value="₹40 Lakhs+" />
                <RequirementRow
                  label="Profitability"
                  value="Last 2 Years Profit"
                />
              </div>
            </div>
            <div className="bg-[#001f3f] p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-10 translate-x-10" />
              <Typography variant="h4" className="mb-8 font-bold text-white">
                Documentation Needed
              </Typography>
              <ul className="space-y-4">
                {[
                  "Aadhar & PAN Card",
                  "Last 6 Months Bank Statement",
                  "GST Registration Certificate",
                  "ITR of Last 2 Years",
                  "Business Proof (Electricity/Rent)",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-blue-100">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 text-center px-6">
        <Typography variant="h2" className="text-[#001f3f] font-bold mb-6">
          Ready to Rule Your Industry?
        </Typography>
        <Typography
          variant="s1"
          className="text-gray-500 mb-10 max-w-2xl mx-auto"
        >
          Join thousands of entrepreneurs who secured their future with Money
          King Financial Services.
        </Typography>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-2xl font-bold text-lg transition-all shadow-2xl">
         
           <a href="/contact"> APPLY NOW - IT&apos;S FREE</a>
        </button>
      </section>
    </div>
  );
};

/* --- HELPER COMPONENTS WITH TYPES --- */

const StatItem = ({ label, value }: StatItemProps) => (
  <div className="p-6 text-center">
    <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
      {label}
    </span>
    <span className="text-[#001f3f] font-bold text-xl">{value}</span>
  </div>
);

const BenefitItem = ({ icon, text }: BenefitItemProps) => (
  <div className="flex items-center gap-3 text-left">
    {icon}
    <span className="text-gray-700 font-semibold">{text}</span>
  </div>
);

const FeatureCard = ({ icon, title, color }: FeatureCardProps) => (
  <div
    className={`${color} p-8 rounded-3xl flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-all`}
  >
    <div className="mb-4 text-[#001f3f]">{icon}</div>
    <Typography
      variant="caption"
      className="font-bold text-[#001f3f] uppercase tracking-tighter"
    >
      {title}
    </Typography>
  </div>
);

const RequirementRow = ({ label, value }: RequirementRowProps) => (
  <div className="flex justify-between items-center border-b border-gray-50 pb-4 last:border-0">
    <span className="text-gray-500 font-medium">{label}</span>
    <span className="text-[#001f3f] font-bold">{value}</span>
  </div>
);

export default BusinessLoanView;