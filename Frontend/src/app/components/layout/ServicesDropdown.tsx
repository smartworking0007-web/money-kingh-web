"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { services, ServiceItem, SubItem, ChildItem } from "@/data/ServicesDataDrowpdown";
import {
  ChevronDown,
  Home,
  Car,
  Landmark,
  Briefcase,
  ShieldCheck,
  PieChart,
  Coins,
  UserCircle,
  GraduationCap,
  HeartPulse,
  Sparkles,
} from "lucide-react";

const IconComponent = ({ name }: { name?: string }) => {
  const icons: Record<string, React.ReactNode> = {
    home: <Home size={18} />, // Size badhaya
    car: <Car size={18} />,
    bank: <Landmark size={18} />,
    business: <Briefcase size={18} />,
    shield: <ShieldCheck size={18} />,
    chart: <PieChart size={18} />,
    coins: <Coins size={18} />,
    user: <UserCircle size={18} />,
    education: <GraduationCap size={18} />,
    health: <HeartPulse size={18} />,
  };
  return icons[name?.toLowerCase() || "sparkles"] || <Sparkles size={18} />;
};

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

  return (
    <div
      className="flex items-center h-full"
      ref={containerRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        className={`relative z-50 flex items-center px-4 py-2 transition-all font-bold text-[17px] ${ // 15px se 17px kiya
          isOpen ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
        }`}
      >
        <span>Services</span>
        <ChevronDown
          className={`ml-1 w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div
          className="fixed left-1/2 -translate-x-1/2 w-[95vw] max-w-6xl z-50 transition-all duration-300"
          style={{ top: "75px" }}
        >
          <div className="bg-white border border-slate-100 shadow-2xl rounded-2xl overflow-hidden">
            <div className="p-6 lg:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 items-start max-h-[80vh] overflow-y-auto">
              {services.map((service: ServiceItem, index: number) => (
                <div key={index} className="flex flex-col space-y-4 mb-4">
                  {/* Title size 10px se 13px kiya aur tracking badhayi */}
                  <h3 className="text-slate-900 font-black text-[13px] uppercase tracking-widest border-b-2 border-slate-100 pb-2">
                    {service.title}
                  </h3>

                  <ul className="space-y-4">
                    {service.subItems?.map((sub: SubItem, i: number) => (
                      <li key={i} className="flex flex-col">
                        <div className="flex items-start group">
                          {/* Icon container thoda bada kiya */}
                          <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center mr-3 border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                            <IconComponent name={sub.icon} />
                          </div>
                          <div className="flex flex-col overflow-hidden">
                            {/* Sub-item link 12px se 15px kiya */}
                            <Link
                              href={sub.href || "#"}
                              onClick={() => setIsOpen(false)}
                              className="text-[15px] font-bold text-slate-700 hover:text-blue-600 leading-snug"
                            >
                              {sub.title}
                            </Link>

                            {sub.children && (
                              <div className="mt-2 flex flex-col space-y-1.5 pl-2 border-l-2 border-slate-100 ml-1">
                                {sub.children.map((child: ChildItem, j: number) => (
                                  <Link
                                    key={j}
                                    href={child.href}
                                    onClick={() => setIsOpen(false)}
                                    /* Child links 11px se 13px kiya */
                                    className="text-[13px] text-slate-500 hover:text-blue-600 py-0.5 pl-2"
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
              ))}
            </div> 
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesDropdown;