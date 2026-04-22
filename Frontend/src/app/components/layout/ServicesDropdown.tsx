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
  IndianRupee,
  Landmark,
  ShieldCheck,
  HeartPulse,
  Sparkles,
  CreditCard as CardIcon,
  X,
} from "lucide-react";

const lexend = Lexend({ subsets: ["latin"] });

const IconComponent = ({ name }: { name?: string }) => {
  const icons: Record<string, React.ReactNode> = {
    home: <Home size={14} />,
    user: <UserCircle size={14} />,
    chart: <PieChart size={14} />,
    coins: <IndianRupee size={14} />,
    bank: <Landmark size={14} />,
    shield: <ShieldCheck size={14} />,
    health: <HeartPulse size={14} />,
    card: <CardIcon size={14} />,
  };
  return icons[name?.toLowerCase() || ""] || <Sparkles size={14} />;
};

const ServiceBlock: React.FC<{
  service: ServiceItem;
  setIsOpen: (val: boolean) => void;
}> = ({ service, setIsOpen }) => (
  <div className="flex flex-col space-y-3 md:space-y-5">
    <h3 className="text-slate-400 font-bold text-[9px] md:text-[10px] uppercase tracking-wider border-b border-slate-100 pb-1 md:pb-2">
      {service.title}
    </h3>
    <ul className="space-y-4 md:space-y-6">
      {service.subItems?.map((sub, i) => (
        <li key={i} className="flex flex-col">
          <div className="flex items-start group">
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-slate-50 flex items-center justify-center mr-2 md:mr-3 border border-slate-100 shrink-0 text-slate-600">
              <IconComponent name={sub.icon} />
            </div>
            <div className="flex flex-col pt-0.5 w-full">
              {sub.href ? (
                <Link
                  href={sub.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[13px] md:text-[14px] font-bold text-slate-800 leading-tight hover:text-blue-600"
                >
                  {sub.title}
                </Link>
              ) : (
                <span className="text-[13px] md:text-[14px] font-bold text-slate-800 leading-tight">
                  {sub.title}
                </span>
              )}

              {sub.children && (
                <div className="mt-2 flex flex-col space-y-2 md:space-y-3 pl-3 border-l border-slate-200">
                  {sub.children.map((child, j) => (
                    <Link
                      key={j}
                      href={child.href}
                      onClick={() => setIsOpen(false)}
                      className="text-[11px] md:text-[12px] text-slate-500 hover:text-blue-600 font-medium block w-full py-0.5"
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
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpen]);

  const loanService = services.find((s) => s.title === "Loan");
  const insuranceService = services.find((s) => s.title === "Insurance");
  const btService = services.find((s) => s.title.includes("BT"));
  const otherServices = services.filter((s) =>
    ["Mutual Fund", "Stocks", "Card"].includes(s.title),
  );

  return (
    <div className={`${lexend.className} relative`} ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center px-4 py-2 font-semibold text-[15px] ${isOpen ? "text-blue-600" : "text-slate-700"}`}
      >
        <span>Services</span>
        <ChevronDown
          className={`ml-1 w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <>
          {/* Overlay for mobile to close */}
          <div
            className="fixed inset-0 bg-black/20 z-998 md:hidden"
            onClick={() => setIsOpen(false)}
          />

          <div className="fixed md:absolute left-1/2 -translate-x-1/2 md:translate-x-0 md:left-0 top-[60px] md:top-full w-[92vw] md:w-[850px] lg:w-[1000px] z-999 bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden">
            {/* Mobile Header */}
            <div className="flex md:hidden items-center justify-between p-4 border-b bg-slate-50">
              <span className="font-bold text-slate-700">All Services</span>
              <X
                className="w-5 h-5 text-slate-500"
                onClick={() => setIsOpen(false)}
              />
            </div>

            <div className="p-5 md:p-8 max-h-[75vh] md:max-h-none overflow-y-auto custom-scrollbar">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
                {loanService && (
                  <ServiceBlock service={loanService} setIsOpen={setIsOpen} />
                )}
                {btService && (
                  <ServiceBlock service={btService} setIsOpen={setIsOpen} />
                )}
                {insuranceService && (
                  <ServiceBlock
                    service={insuranceService}
                    setIsOpen={setIsOpen}
                  />
                )}

                <div className="flex flex-col space-y-8 md:space-y-12">
                  {otherServices.map((s, idx) => (
                    <ServiceBlock key={idx} service={s} setIsOpen={setIsOpen} />
                  ))}
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
