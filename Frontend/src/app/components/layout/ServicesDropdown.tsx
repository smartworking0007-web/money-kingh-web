"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Lexend } from "next/font/google";
import { services, ServiceItem } from "@/data/ServicesDataDrowpdown";
import {
  ChevronDown,
  Home,
  UserCircle,
  PieChart,
  IndianRupee, // Dollar ki jagah Rupee import kiya
  Landmark,
  ShieldCheck,
  HeartPulse,
  Sparkles,
} from "lucide-react";

const lexend = Lexend({ subsets: ["latin"] });

const IconComponent = ({ name }: { name?: string }) => {
  const icons: Record<string, React.ReactNode> = {
    home: <Home size={16} />,
    user: <UserCircle size={16} />,
    chart: <PieChart size={16} />,
    coins: <IndianRupee size={16} />, // Yahan CircleDollarSign ko IndianRupee se badal diya
    bank: <Landmark size={16} />,
    shield: <ShieldCheck size={16} />,
    health: <HeartPulse size={16} />,
  };
  return icons[name?.toLowerCase() || ""] || <Sparkles size={16} />;
};

const ServiceBlock: React.FC<{
  service: ServiceItem;
  setIsOpen: (val: boolean) => void;
}> = ({ service, setIsOpen }) => (
  <div className="flex flex-col space-y-4">
    <h3 className="text-slate-400 font-bold text-[10px] uppercase tracking-wider border-b border-slate-100 pb-1.5">
      {service.title}
    </h3>
    <ul className="space-y-4">
      {service.subItems?.map((sub, i) => (
        <li key={i} className="flex flex-col">
          <div className="flex items-start group">
            <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center mr-3 border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0 text-slate-600">
              <IconComponent name={sub.icon} />
            </div>
            <div className="flex flex-col pt-0.5">
              {sub.href ? (
                <Link
                  href={sub.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[14px] font-bold text-slate-800 leading-tight hover:text-blue-600 transition-colors"
                >
                  {sub.title}
                </Link>
              ) : (
                <span className="text-[14px] font-bold text-slate-800 leading-tight">
                  {sub.title}
                </span>
              )}

              {sub.children && (
                <div className="mt-2 flex flex-col space-y-1.5 pl-3 border-l border-slate-200">
                  {sub.children.map((child, j) => (
                    <Link
                      key={j}
                      href={child.href}
                      onClick={() => setIsOpen(false)}
                      className="text-[12px] text-slate-500 hover:text-blue-600 transition-colors font-medium block w-full"
                    >
                      {child.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

const ServicesDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const loanService = services.find((s) => s.title === "Loan");
  const insuranceService = services.find((s) => s.title === "Insurance");
  const btService = services.find((s) => s.title.includes("BT"));
  const mfService = services.find((s) => s.title === "Mutual Fund");
  const stocksService = services.find((s) => s.title === "Stocks");
  const ccService = services.find((s) => s.title === "Credit Card");

  return (
    <div
      className={`${lexend.className} flex items-center h-full relative`}
      ref={containerRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        className={`flex items-center px-4 py-2 transition-all font-semibold text-[15px] ${
          isOpen ? "text-blue-600" : "text-slate-700"
        }`}
      >
        <span>Services</span>
        <ChevronDown
          className={`ml-1 w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div
          className="fixed left-0 right-0 mx-auto w-[95vw] md:w-full max-w-6xl z-50 shadow-2xl"
          style={{ top: "70px" }}
        >
          <div className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-8 items-start">
              {/* Column 1: Loan */}
              {loanService && <ServiceBlock service={loanService} setIsOpen={setIsOpen} />}
              
              {/* Column 2: Loan (BT n Top Up) */}
              {btService && <ServiceBlock service={btService} setIsOpen={setIsOpen} />}
              
              {/* Column 3: Insurance */}
              {insuranceService && <ServiceBlock service={insuranceService} setIsOpen={setIsOpen} />}
              
              {/* Column 4: Investment & Others */}
              <div className="flex flex-col space-y-10">
                {mfService && <ServiceBlock service={mfService} setIsOpen={setIsOpen} />}
                {stocksService && <ServiceBlock service={stocksService} setIsOpen={setIsOpen} />}
                {ccService && <ServiceBlock service={ccService} setIsOpen={setIsOpen} />}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesDropdown;