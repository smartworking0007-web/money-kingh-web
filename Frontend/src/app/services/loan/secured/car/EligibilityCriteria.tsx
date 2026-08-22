"use client";

import { motion } from "framer-motion";
import { 
  UserCheck, 
  Wallet, 
  Briefcase, 
  ShieldCheck, 
  Building2, 
  CreditCard, 
  Car 
} from "lucide-react";
import { Typography } from "@/app/components/ui/Typography";

const EligibilityCriteria = () => {
  const criteriaList = [
    {
      title: "Age",
      desc: "Usually 18+; lender-specific upper limit",
      icon: <UserCheck className="w-6 h-6" />,
      color: "text-blue-600 bg-blue-50",
    },
    {
      title: "Income",
      desc: "Stable and verifiable income",
      icon: <Wallet className="w-6 h-6" />,
      color: "text-emerald-600 bg-emerald-50",
    },
    {
      title: "Employment",
      desc: "Salaried or self-employed",
      icon: <Briefcase className="w-6 h-6" />,
      color: "text-purple-600 bg-purple-50",
    },
    {
      title: "Credit Score",
      desc: "Higher score can improve eligibility",
      icon: <ShieldCheck className="w-6 h-6" />,
      color: "text-amber-600 bg-amber-50",
    },
    {
      title: "Work/Business Stability",
      desc: "Lender-specific",
      icon: <Building2 className="w-6 h-6" />,
      color: "text-indigo-600 bg-indigo-50",
    },
    {
      title: "Existing EMIs",
      desc: "Considered while assessing repayment capacity",
      icon: <CreditCard className="w-6 h-6" />,
      color: "text-rose-600 bg-rose-50",
    },
    {
      title: "Vehicle",
      desc: "New/used vehicle subject to lender policy",
      icon: <Car className="w-6 h-6" />,
      color: "text-teal-600 bg-teal-50",
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Header Section --- */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h3"
              as="h1"
              className="text-[#004687] font-bold text-3xl md:text-4xl mb-6 leading-tight"
            >
              Eligibility Criteria to available a Car Loan
            </Typography>

            <Typography
              variant="h5"
              as="h2"
              className="text-gray-600 font-medium leading-relaxed"
            >
              The Car Loan Eligibility Criteria can be different for different banks. 
              The common criteria are as follows:
            </Typography>
          </motion.div>
        </div>

        {/* --- Criteria Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {criteriaList.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between"
            >
              <div>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${item.color} group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                
                <Typography variant="s1" className="text-gray-900 font-bold mb-3">
                  {item.title}
                </Typography>
                
                <Typography variant="b3" className="text-gray-500 leading-relaxed">
                  {item.desc}
                </Typography>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EligibilityCriteria;