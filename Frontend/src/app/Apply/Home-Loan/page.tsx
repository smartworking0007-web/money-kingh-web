import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import {
  CheckCircle2,
  Clock,
  ShieldCheck,
  Zap,
  TrendingUp,
  BadgeCheck,
  Home,
  MapPin,
} from "lucide-react";

// --- TYPES DEFINED FOR INDUSTRY STANDARDS ---
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

const HomeLoanView = () => {
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
                Authorized Financial Partner
              </span>
            </div>
            <Typography
              variant="h1"
              className="text-white mb-6 leading-[1.1] lg:text-6xl font-extrabold italic"
            >
              Build Your Dream Home <br /> With{" "}
              <span className="text-blue-400">Money King</span>
            </Typography>
            <Typography
              variant="s1"
              className="text-blue-100/80 mb-10 max-w-xl text-lg lg:text-xl"
            >
              Get flexible home loans up to ₹5 Crores with attractive interest rates, 
              longer tenures, and the expert guidance of Money King Financial Services.
            </Typography>

            <div className="flex flex-wrap gap-5 items-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-bold transition-all transform hover:scale-105 shadow-xl shadow-blue-600/30">
               <a href="/contact">APPLY FOR HOME LOAN</a>
                
              </button>
              <div className="flex flex-col">
                <span className="text-blue-200 text-sm font-semibold">
                  Interest starts from
                </span>
                <span className="text-white font-bold text-xl">
                  8.40%* p.a.
                </span>
              </div>
            </div>
          </div>  
        </div>
      </section>

      {/* --- STATS RIBBON --- */}
      <div className="max-w-[1300px] mx-auto px-6 -mt-10 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100 border border-gray-50">
          <StatItem label="Max Amount" value="₹5 Crore+" />
          <StatItem label="Loan Tenure" value="Up to 30 Yrs" />
          <StatItem label="Processing" value="Fast Track" />
          <StatItem label="Balance Transfer" value="Available" />
        </div>
      </div>

      {/* --- WHY HOME LOAN? --- */}
      <section className="max-w-[1300px] mx-auto px-6 py-24 text-left">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full z-0" />
              <Typography
                variant="h2"
                className="text-[#001f3f] font-bold relative z-10 mb-6"
              >
                The Money King Advantage for Home Buyers
              </Typography>
            </div>
            <Typography
              variant="b1"
              className="text-gray-600 mb-8 leading-relaxed"
            >
              Buying a home is the biggest investment of your life. At Money King Financial 
              Services, we ensure the process is seamless with lowest processing fees, 
              transparent documentation, and doorstep service.
            </Typography>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <BenefitItem
                icon={<Zap className="text-blue-600" />}
                text="Digital Sanction"
              />
              <BenefitItem
                icon={<TrendingUp className="text-blue-600" />}
                text="Low EMI Options"
              />
              <BenefitItem
                icon={<ShieldCheck className="text-blue-600" />}
                text="Legal & Tech Help"
              />
              <BenefitItem
                icon={<Home className="text-blue-600" />}
                text="Top-up Facility"
              />
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="space-y-4 mt-8">
              <FeatureCard
                icon={<Home />}
                title="Property Search"
                color="bg-blue-50"
              />
              <FeatureCard
                icon={<Clock />}
                title="Quick Payout"
                color="bg-green-50"
              />
            </div>
            <div className="space-y-4">
              <FeatureCard
                icon={<ShieldCheck />}
                title="Secure Documentation"
                color="bg-yellow-50"
              />
              <FeatureCard
                icon={<MapPin />}
                title="Pan India Reach"
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
            Home Loan Eligibility & Documents
          </Typography>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-black">
              <Typography
                variant="h4"
                className="mb-8 font-bold flex items-center gap-2"
              >
                <CheckCircle2 className="text-blue-600" /> Eligibility Criteria
              </Typography>
              <div className="space-y-6">
                <RequirementRow label="Minimum Age" value="21 Years" />
                <RequirementRow label="Maximum Age" value="65 Years (at maturity)" />
                <RequirementRow label="Income Source" value="Salaried / Self-Employed" />
                <RequirementRow
                  label="CIBIL Score"
                  value="700 or Above Preferred"
                />
              </div>
            </div>
            <div className="bg-[#001f3f] p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-10 translate-x-10" />
              <Typography variant="h4" className="mb-8 font-bold text-white">
                Checklist of Documents
              </Typography>
              <ul className="space-y-4">
                {[
                  "KYC: Aadhar, PAN Card & Voter ID",
                  "Last 6 Months Bank Statements",
                  "Salary Slips (3 months) / Business ITR",
                  "Property Chain Documents",
                  "Approved Building Plan",
                  "Latest Property Tax Receipts",
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
          Ready to Step Into Your New Home?
        </Typography>
        <Typography
          variant="s1"
          className="text-gray-500 mb-10 max-w-2xl mx-auto"
        >
          Partner with Money King Financial Services and turn your home ownership 
          dreams into reality today.
        </Typography>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-2xl font-bold text-lg transition-all shadow-2xl">
          
           <a href="/contact">APPLY NOW - NO CONSULTATION FEE</a>
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

export default HomeLoanView;