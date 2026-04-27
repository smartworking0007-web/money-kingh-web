"use client";
import { Typography } from "@/app/components/ui/Typography";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Wallet,
  Building2,
  FileSearch,
  PieChart,
  UserCheck,
} from "lucide-react";

const LAPLoanConsiderations = () => {
  const considerations = [
    {
      title: "Check Your Eligibility",
      desc: "Assess your income, age, and repayment capacity to understand the maximum loan amount you can comfortably avail.",
      icon: <UserCheck className="w-6 h-6" />,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Maintain a Good CIBIL Score",
      desc: "A score of 750+ increases your chances of quick approval and helps you negotiate much lower interest rates.",
      icon: <ShieldCheck className="w-6 h-6" />,
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      title: "Keep Documents Ready",
      desc: "Ensure property titles, municipal approvals, and income proofs are up to date for seamless and faster processing.",
      icon: <FileSearch className="w-6 h-6" />,
      color: "bg-purple-50 text-purple-600",
    },
    {
      title: "Understand All Charges",
      desc: "Beyond interest, consider processing fees, legal valuation charges, and stamp duty to calculate the true cost of the loan.",
      icon: <Wallet className="w-6 h-6" />,
      color: "bg-amber-50 text-amber-600",
    },
    {
      title: "Property Valuation",
      desc: "Lenders offer 60-75% of the market value. Ensure your property is in a bank-approved location for maximum funding.",
      icon: <Building2 className="w-6 h-6" />,
      color: "bg-cyan-50 text-cyan-600",
    },
    {
      title: "Evaluate Repayment Tenure",
      desc: "Choose a tenure that balances your EMI burden and total interest outflow based on your future cash flow.",
      icon: <PieChart className="w-6 h-6" />,
      color: "bg-red-50 text-red-600",
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
    <section className="w-full bg-[#F8FAFC] py-16 md:py-24 px-6 font-lexend">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 md:mb-16">
          <Typography
            variant="h4"
            as="h3"
            className="text-xl md:text-xl font-black text-slate-900 leading-tight mb-4 mt-0!"
          >
            Things to Consider Before Applying for a LAP Loan
          </Typography>

          <Typography
            variant="s2"
            as="h5"
            className="text-slate-500 text-base md:text-lg leading-relaxed max-w-4xl mt-0! font-normal"
          >
            A Loan Against Property (LAP) is a smart way to unlock the value of your property for personal or business needs. However, it is important to evaluate key factors before applying to ensure smooth approval and better loan terms.
          </Typography>
        </div>

        {/* Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {considerations.map((reason, index) => (
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
                <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                  {reason.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LAPLoanConsiderations;