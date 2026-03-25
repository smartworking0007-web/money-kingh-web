"use client";
import { Typography } from '@/app/components/ui/Typography';
import { 
  Landmark, 
  Zap, 
  ShieldCheck, 
  Users, 
  CheckCircle,
  Clock,
  Briefcase,
} from "lucide-react";

const GovtLoanSchemes = () => {
  const mudraCategories = [
    { name: "Shishu", limit: "Up to ₹50,000", desc: "Small loans for startups and nano-units." },
    { name: "Kishore", limit: "₹50,000 to ₹5 Lakh", desc: "For mid-stage business scaling." },
    { name: "Tarun", limit: "₹5 Lakh to ₹10 Lakh", desc: "For established units expanding further." },
    { name: "Tarun Plus", limit: "₹10 Lakh to ₹20 Lakh", desc: "For successful Tarun loan repayers." },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* --- MAIN HEADER --- */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Typography variant="h3" as="h3" className="text-[#002e5b] font-bold mb-6 mt-0!">
            Government Loan Schemes for Small Businesses (MSMEs)
          </Typography>
          <Typography variant="b1" className="text-slate-600 leading-relaxed">
            Small businesses can avail business loans under various government schemes to start or expand 
            their businesses and provide employment to others. Some of the most important government 
            loan schemes are discussed below:
          </Typography>
        </div>

        <div className="space-y-10">
          
          {/* 1. PMMY (Pradhan Mantri Mudra Yojana) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="lg:w-1/3">
                <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Landmark className="text-orange-600 w-8 h-8" />
                </div>
                <Typography variant="h4" as="h4" className="text-[#002e5b] font-bold mb-4">PMMY (Pradhan Mantri Mudra Yojana)</Typography>
                <Typography variant="b2" className="text-slate-500 leading-relaxed mb-6">
                  The government enables non-corporate, non-farming, small and micro enterprises to grow 
                  through designated banks, NBFCs, and MFIs.
                </Typography>
                <div className="p-4 bg-orange-50 rounded-xl border border-orange-100">
                   <Typography variant="caption" className="text-orange-800 font-bold">No Collateral Required</Typography>
                </div>
              </div>
              <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {mudraCategories.map((cat, i) => (
                  <div key={i} className="group border border-slate-100 bg-slate-50/50 p-6 rounded-2xl hover:bg-orange-600 transition-all duration-300">
                    <Typography variant="h5" className="text-orange-700 font-bold mb-1 group-hover:text-orange-100">{cat.name}</Typography>
                    <Typography variant="s2" className="text-slate-900 font-black mb-2 text-xl group-hover:text-white">{cat.limit}</Typography>
                    <Typography variant="caption" className="text-slate-500 group-hover:text-orange-200">{cat.desc}</Typography>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2. PSB 59 & CGTMSE GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* PSB 59 */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200">
              <div className="flex items-center gap-4 mb-6">
                <Clock className="text-blue-600 w-8 h-8" />
                <Typography variant="h5" className="text-[#002e5b] font-bold">PSB Loans in 59 Minutes</Typography>
              </div>
              <Typography variant="b2" className="text-slate-600 mb-6 leading-relaxed">
                A SIDBI-backed digital lending platform for MSMEs. Get in-principle approval up to <strong>₹5 Crore</strong> 
                through an automated process for working capital or term loans.
              </Typography>
              <div className="space-y-3 mb-6">
                {['GST-registered businesses', 'Minimal documentation', 'End-to-end digital journey'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-500">
                    <CheckCircle className="w-4 h-4 text-blue-500" /> {item}
                  </div>
                ))}
              </div>
            </div>

            {/* CGTMSE */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200">
              <div className="flex items-center gap-4 mb-6">
                <ShieldCheck className="text-emerald-600 w-8 h-8" />
                <Typography variant="h5" className="text-[#002e5b] font-bold">CGTMSE Scheme</Typography>
              </div>
              <Typography variant="b2" className="text-slate-600 mb-6 leading-relaxed">
                Offers collateral-free credit guarantees to MSEs. The trust covers <strong>75% to 85%</strong> 
                of the credit risk, allowing banks to lend without traditional security.
              </Typography>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-bold rounded-full uppercase">Service Sector Units</span>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-bold rounded-full uppercase">Manufacturing Units</span>
              </div>
            </div>
          </div>

          {/* 3. SMILE & PMEGP */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* SMILE */}
            <div className="bg-slate-900 text-white p-8 md:p-10 rounded-3xl">
              <Typography variant="h5" className="text-white font-bold mb-4">SMILE (SIDBI Make in India Fund)</Typography>
              <Typography variant="b2" className="text-slate-400 mb-6 leading-relaxed">
                Soft loans for expansion and modernization. Benefit from longer repayment periods, 
                lower interest costs, and moratorium periods to improve project viability.
              </Typography>
              <div className="flex items-center justify-between border-t border-slate-800 pt-6">
                 <div>
                    <Typography variant="caption" className="text-slate-500 block">Maximum Loan</Typography>
                    <Typography variant="s2" className="text-white font-bold">₹25 Lakh & Above</Typography>
                 </div>
                 <Briefcase className="w-10 h-10 text-slate-700" />
              </div>
            </div>

            {/* PMEGP */}
            <div className="bg-blue-600 text-white p-8 md:p-10 rounded-3xl">
              <Typography variant="h5" className="text-white font-bold mb-4">PMEGP (Employment Generation)</Typography>
              <Typography variant="b2" className="text-blue-100 mb-6 leading-relaxed">
                Credit-linked subsidy programme (15% to 35%) for manufacturing or service micro-enterprises. 
                Available to Indian citizens above 18 years.
              </Typography>
              <ul className="space-y-2 text-sm text-blue-50">
                <li className="flex items-center gap-2">● Minimum Class 8 education required</li>
                <li className="flex items-center gap-2">● Online application via PMEGP portal</li>
                <li className="flex items-center gap-2">● Scrutiny by District Level Task Force</li>
              </ul>
            </div>
          </div>

          {/* 4. STAND-UP INDIA (Special Focus) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border-2 border-dashed border-blue-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <Users size={120} className="text-blue-600" />
            </div>
            <div className="max-w-3xl relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="text-yellow-500 w-8 h-8 fill-yellow-500" />
                <Typography variant="h4" className="text-[#002e5b] font-black">Stand-Up India</Typography>
              </div>
              <Typography variant="b1" className="text-slate-600 mb-8 leading-relaxed">
                Exclusively for <strong>SC/ST and Women entrepreneurs</strong> setting up first-time 
                greenfield enterprises. Loans ranging from <strong>₹10 Lakh to ₹1 Crore</strong> 
                across manufacturing, services, or trading sectors.
              </Typography>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle className="text-blue-600 w-5 h-5" />
                  </div>
                  <Typography variant="b2" className="text-slate-500 text-sm">
                    At least 51% stake must be held by SC/ST or Women.
                  </Typography>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle className="text-blue-600 w-5 h-5" />
                  </div>
                  <Typography variant="b2" className="text-slate-500 text-sm">
                    Assistance through SIDBI s Stand-Up Connect centres.
                  </Typography>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GovtLoanSchemes;