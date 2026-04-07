"use client";
import { Typography } from "@/app/components/ui/Typography";
import { motion } from "framer-motion";
import {
  ShieldAlert,
  Wallet,
  Building2,
  Search,
  BriefcaseBusiness,
} from "lucide-react";

const HomeLoanRejection = () => {
  const reasons = [
    {
      title: "Low Credit Score",
      desc: "Lenders prefer a score of 700+. A low score reflects poor credit history and increases risk perception.",
      icon: <ShieldAlert className="w-6 h-6" />,
      color: "bg-red-50 text-red-600",
    },
    {
      title: "Repayment Capacity",
      desc: "If your existing EMIs exceed 50% of your take-home pay, lenders worry about your ability to survive.",
      icon: <Wallet className="w-6 h-6" />,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Property Legalities",
      desc: "Issues with titles, missing municipal approvals, or non-approved layouts lead to instant rejection.",
      icon: <Building2 className="w-6 h-6" />,
      color: "bg-amber-50 text-amber-600",
    },
    {
      title: "Multiple Enquiries",
      desc: "Applying at 5 banks at once? It makes you look 'credit hungry' and negatively impacts your CIBIL.",
      icon: <Search className="w-6 h-6" />,
      color: "bg-purple-50 text-purple-600",
    },
    {
      title: "Employment Stability",
      desc: "Frequent job changes or working in 'blacklisted' industries can make banks hesitant to lend.",
      icon: <BriefcaseBusiness className="w-6 h-6" />,
      color: "bg-emerald-50 text-emerald-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="w-full bg-[#F8FAFC] py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 md:mb-16">
          {/* Heading - Pehli line mein */}
          <Typography
            variant="h3"
            className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-4"
          >
            Main Reasons for Home Loan Rejection in India
          </Typography>

          {/* Paragraph - Theek niche aur 2 lines mein constrained */}
          <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-3xl lg:line-clamp-2">
            Understanding common reasons for home loan rejection helps you
            improve eligibility and increase your chances of approval. At Money
            King Financial, we guide you to avoid these mistakes and secure your
            loan faster.
          </p>
        </div>
        {/* Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div
                  className={`w-14 h-14 rounded-2xl ${reason.color} flex items-center justify-center mb-6 transition-transform duration-300`}
                >
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">{reason.desc}</p>
              </div>
            </motion.div>
          ))}

          {/* Special "Check Eligibility" Card */}
          <motion.div>
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Building2 size={120} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeLoanRejection;
