"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

// --- STEP 1: Saare 6 Fonts ko yahan import kiya gaya hai ---
import {
  // Inter,
  Lexend,
  // Plus_Jakarta_Sans,
  // Manrope,
  // Outfit,
  // Urbanist,
} from "next/font/google";

import { services, ServiceItem } from "@/data/ServicesDataDrowpdown";
import {
  ChevronDown,
  Home,
  UserCircle,
  PieChart,
  CircleDollarSign,
  Landmark,
  ShieldCheck,
  HeartPulse,
  X,
  Sparkles,
} from "lucide-react";

// --- STEP 2: Fonts ko initialize kiya gaya hai ---
// const inter = Inter({ subsets: ["latin"] });
const lexend = Lexend({ subsets: ["latin"] });
// const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
// const manrope = Manrope({ subsets: ["latin"] });
// const outfit = Outfit({ subsets: ["latin"] });
// const urbanist = Urbanist({ subsets: ["latin"] });

const IconComponent = ({ name }: { name?: string }) => {
  const icons: Record<string, React.ReactNode> = {
    home: <Home size={18} />,
    user: <UserCircle size={18} />,
    chart: <PieChart size={18} />,
    coins: <CircleDollarSign size={18} />,
    bank: <Landmark size={18} />,
    shield: <ShieldCheck size={18} />,
    health: <HeartPulse size={18} />,
  };
  return icons[name?.toLowerCase() || ""] || <Sparkles size={18} />;
};

const ServiceBlock: React.FC<{
  service: ServiceItem;
  setIsOpen: (val: boolean) => void;
}> = ({ service, setIsOpen }) => (
  <div className="flex flex-col space-y-5">
    <h3 className="text-slate-400 font-bold text-[11px] uppercase tracking-widest border-b border-slate-100 pb-2">
      {service.title}
    </h3>
    <ul className="space-y-5">
      {service.subItems?.map((sub, i) => (
        <li key={i} className="flex flex-col">
          <div className="flex items-start group">
            <div className="w-9 h-9 rounded-lg bg-slate-50 flex items-center justify-center mr-4 border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0 text-slate-600">
              <IconComponent name={sub.icon} />
            </div>
            <div className="flex flex-col pt-0.5">
              {sub.href ? (
                <Link
                  href={sub.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[15px] font-semibold text-slate-800 hover:text-blue-600 leading-none transition-colors"
                >
                  {sub.title}
                </Link>
              ) : (
                <span className="text-[15px] font-semibold text-slate-800">
                  {sub.title}
                </span>
              )}

              {sub.children && (
                <div className="mt-3 flex flex-col space-y-2 pl-3 border-l border-slate-200">
                  {sub.children.map((child, j) => (
                    <Link
                      key={j}
                      href={child.href}
                      onClick={() => setIsOpen(false)}
                      className="text-[13px] text-slate-500 hover:text-blue-600 transition-colors font-medium"
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
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const loanService = services.find((s) => s.title === "Loan");
  const insuranceService = services.find((s) => s.title === "Insurance");
  const mutualFundService = services.find((s) => s.title === "Mutual Fund");
  const stocksService = services.find((s) => s.title === "Stocks");
  const creditCardService = services.find((s) => s.title === "Credit Card");

  return (
    <div
      /* --- STEP 3: FONT CHANGE KARNE KE LIYE NICHE DEKHEIN ---
         Bas `${inter.className}` ko badal kar aap ye likh sakte hain:

         1. ${inter.className}         <- Inter (Professional)
         2. ${lexend.className}        <- Lexend (Friendly)
         3. ${plusJakarta.className}   <- Plus Jakarta (Modern Fintech)
         4. ${manrope.className}       <- Manrope (Clean & Sharp)
         5. ${outfit.className}        <- Outfit (Premium Geometric)
         6. ${urbanist.className}      <- Urbanist (Minimalist)
      */
      className={`   ${lexend.className}    flex items-center h-full relative`}
      ref={containerRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`relative z-50 flex items-center px-4 py-2 transition-all font-semibold text-[16px] tracking-tight ${
          isOpen ? "text-blue-600" : "text-slate-700 hover:text-blue-600"
        }`}
      >
        <span>Services</span>
        <ChevronDown
          className={`ml-1 w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-slate-900/20 backdrop-blur-[2px] z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
          <div
            className="fixed left-0 right-0 mx-auto md:mx-0 md:left-auto md:right-35 w-[95vw] md:w-full max-w-6xl z-50"
            style={{ top: "70px" }}
          >
            <div className="bg-white border border-slate-200 shadow-2xl rounded-2xl overflow-hidden flex flex-col max-h-[85vh] md:max-h-none">
              <div className="flex items-center justify-between p-4 border-b md:hidden bg-slate-50">
                <span className="font-bold text-slate-900">Services</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 text-slate-500"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-6 lg:p-10 overflow-y-auto scrollbar-hide">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-x-12 gap-y-10 items-start">
                  {loanService && (
                    <ServiceBlock service={loanService} setIsOpen={setIsOpen} />
                  )}
                  {insuranceService && (
                    <ServiceBlock
                      service={insuranceService}
                      setIsOpen={setIsOpen}
                    />
                  )}
                  {mutualFundService && (
                    <ServiceBlock
                      service={mutualFundService}
                      setIsOpen={setIsOpen}
                    />
                  )}
                  <div className="flex flex-col space-y-12">
                    {stocksService && (
                      <ServiceBlock
                        service={stocksService}
                        setIsOpen={setIsOpen}
                      />
                    )}
                    {creditCardService && (
                      <ServiceBlock
                        service={creditCardService}
                        setIsOpen={setIsOpen}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ServicesDropdown;
