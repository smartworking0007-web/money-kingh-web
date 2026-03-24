"use client";
import React, { useState } from 'react';
import { Typography } from '@/app/components/ui/Typography';
import { cn } from "@/app/lib/utils";
import { CheckCircle2, Zap, ShieldCheck, Search, ListFilter, X } from 'lucide-react';
import { db } from "@/lib/firebase"; 
import { collection, addDoc } from "firebase/firestore";

interface BankItem {
  id: number;
  name: string;
  logo: string;
  logoLabel: string;
  maxLoanVal: number;
  interestRateVal: number;
  maxLoanStr: string;
  interestRateStr: string;
  tenure: string;
  fee: string;
  tags: string[];
}

const LoanOffers: React.FC = () => {
  const [banks, setBanks] = useState<BankItem[]>([
    {
      id: 1,
      name: "HDFC Bank",
      logo: "bg-red-600",
      logoLabel: "HDFC",
      maxLoanVal: 25,
      interestRateVal: 9.99,
      maxLoanStr: "Upto ₹25L",
      interestRateStr: "9.99% - 12.5%",
      tenure: "1-5 Years",
      fee: "₹ 6,500",
      tags: ["10 Second Disbursal*", "100% Digital Process*", "Quick Disbursal"]
    },
    {
      id: 2,
      name: "ICICI Bank",
      logo: "bg-orange-600",
      logoLabel: "ICICI",
      maxLoanVal: 20,
      interestRateVal: 11.0,
      maxLoanStr: "Upto ₹20L",
      interestRateStr: "11% - 13%",
      tenure: "1-5 Years",
      fee: "Upto 2%",
      tags: ["100% Digital Process*", "Quick Disbursal"]
    },
    {
      id: 3,
      name: "Axis Bank",
      logo: "bg-[#811946]",
      logoLabel: "AXIS",
      maxLoanVal: 40,
      interestRateVal: 10.49,
      maxLoanStr: "Upto ₹40L",
      interestRateStr: "10.49% - 17.15%",
      tenure: "Upto 6 Years",
      fee: "Upto 2%",
      tags: ["Low Processing fee"]
    }
  ]);

  const [activeSort, setActiveSort] = useState("Lowest Interest Rate");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBank, setSelectedBank] = useState("");

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    course: "Personal Loan",
    message: "",
    consent: true,
  });
  const [loading, setLoading] = useState(false);

  const handleApplyNow = (bankName: string) => {
    setSelectedBank(bankName);
    setFormData(prev => ({ ...prev, message: `Applying for Personal Loan from ${bankName}` }));
    setIsModalOpen(true);
  };

  const handleSort = (label: string) => {
    setActiveSort(label);
    const sortedData = [...banks];
    if (label === "Lowest Interest Rate") sortedData.sort((a, b) => a.interestRateVal - b.interestRateVal);
    else if (label === "Max Loan Amount") sortedData.sort((a, b) => b.maxLoanVal - a.maxLoanVal);
    else if (label === "Min Loan Amount") sortedData.sort((a, b) => a.maxLoanVal - b.maxLoanVal);
    setBanks(sortedData);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) { alert("Please accept the consent."); return; }
    setLoading(true);
    try {
      await addDoc(collection(db, "contact_forms"), {
        ...formData,
        createdAt: new Date().toISOString(),
      });
      alert(`Thank you for applying for ${selectedBank}! Our team will call you.`);
      setIsModalOpen(false);
    } catch (error) {
      console.error(error);
      alert("Error submitting form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col lg:flex-row gap-6 items-start relative">
      
      {/* LEFT CONTENT */}
      <div className="flex-1 w-full">
        <Typography variant="h3" as="h1" className="mb-6! mt-0! font-bold text-slate-800">Find Best Personal Loan Offers</Typography>

        <div className="flex items-center gap-3 mb-8 overflow-x-auto no-scrollbar pb-2 px-1">
          <div className="flex items-center gap-2 shrink-0 mr-2">
             <ListFilter size={16} className="text-slate-400" />
             <Typography variant="b2" className="m-0! font-medium text-slate-600">Sort by:</Typography>
          </div>
          {["Lowest Interest Rate", "Max Loan Amount", "Min Loan Amount"].map((label) => (
            <button key={label} onClick={() => handleSort(label)}
              className={cn("px-4 py-1.5 border rounded-md text-xs font-bold shrink-0 uppercase tracking-tight transition-all",
                activeSort === label ? "border-blue-600 text-blue-600 bg-blue-50/50" : "border-slate-200 text-slate-500 bg-white")}>
              {label}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {banks.map((bank) => (
            <div key={bank.id} className="border border-slate-200 rounded-xl p-5 md:p-7 bg-white shadow-xs hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className={cn("w-10 h-10 rounded flex items-center justify-center text-[10px] font-bold text-white uppercase shrink-0", bank.logo)}>{bank.logoLabel}</div>
                  <Typography variant="h5" className="m-0! font-bold text-slate-800 uppercase tracking-tight">{bank.name}</Typography>
                </div>
                <div className="flex flex-wrap gap-2 md:justify-end">
                  {bank.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-500 text-[9px] rounded-full border border-slate-100 font-bold uppercase tracking-tighter">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-end">
                <GridItem label="Max Loan Amt." value={bank.maxLoanStr} />
                <GridItem label="Rate of Interest" value={bank.interestRateStr} />
                <GridItem label="Tenure upto" value={bank.tenure} />
                <GridItem label="Processing Fee" value={bank.fee} />
                <div className="col-span-2 md:col-span-1">
                  <button 
                    onClick={() => handleApplyNow(bank.name)}
                    className="w-full bg-blue-600 text-white py-3 rounded-md font-bold text-sm hover:bg-blue-700 shadow-lg shadow-blue-100 uppercase tracking-wide">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDEBAR */}
      <div className="w-full lg:w-[320px] shrink-0 lg:sticky lg:top-10">
        <div className="bg-[#f5f8ff] rounded-2xl p-6 border border-blue-50 shadow-sm">
          <Typography variant="s1" className="text-center mb-8 font-black text-slate-800 uppercase">Why Choose Money King?</Typography>
          <div className="space-y-4">
            {[{ title: "Compare Best Offer", icon: <Search size={20} className="text-orange-500" />, color: "bg-orange-100/50" },
              { title: "Instant Disbursals", icon: <Zap size={20} className="text-blue-500" />, color: "bg-blue-100/50" },
              { title: "Chances of Approval", icon: <CheckCircle2 size={20} className="text-gray-500" />, color: "bg-gray-100/50" },
              { title: "Digital Process", icon: <ShieldCheck size={20} className="text-orange-400" />, color: "bg-orange-100/30" }].map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-white/70 p-4 rounded-xl shadow-xs border border-white/50">
                <div className={cn("p-2 rounded-lg shrink-0", item.color)}>{item.icon}</div>
                <Typography variant="b2" className="m-0! font-bold text-slate-700 text-[12px] uppercase">{item.title}</Typography>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- CONTACT FORM MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl relative overflow-hidden animate-in fade-in zoom-in duration-300">
            <button onClick={() => setIsModalOpen(false)} className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"><X size={24} /></button>
            <div className="p-8">
              <Typography variant="h4" className="text-[#002e5b] font-bold m-0! mb-2">Apply for {selectedBank}</Typography>
              <Typography variant="b2" className="text-slate-500 m-0! mb-6">Fill your details and our counselor will call you.</Typography>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" placeholder="Full Name" required className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500" 
                  value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})} />
                <input type="tel" placeholder="Phone Number" required className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                <input type="email" placeholder="Email Address" required className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                
                <div className="flex items-start gap-2 text-[10px] text-gray-500 bg-gray-50 p-3 rounded-lg border">
                  <input type="checkbox" checked={formData.consent} onChange={e => setFormData({...formData, consent: e.target.checked})} className="mt-1" />
                  <label>I consent to receive calls/WhatsApp from Money King Financial Services and agree to the Privacy Policy.</label>
                </div>

                <button type="submit" disabled={loading} className="w-full py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition shadow-lg">
                  {loading ? "Submitting..." : `Submit Application for ${selectedBank}`}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const GridItem = ({ label, value }: { label: string; value: string }) => (
  <div className="space-y-1">
    <Typography variant="caption" className="m-0! text-slate-400 text-[10px] font-bold uppercase tracking-widest">{label}</Typography>
    <Typography variant="s2" className="m-0! font-black text-slate-800 text-[15px] md:text-[17px] tracking-tight">{value}</Typography>
  </div>
);

export default LoanOffers;