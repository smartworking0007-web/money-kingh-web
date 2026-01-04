"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
// File ka naam apne folder ke hisaab se check karlein
import { services } from "@/data/ServicesDataDrowpdown"; 
import { ChevronDown, ChevronRight,} from "lucide-react"; 
import { Typography } from "../ui/Typography"; 

const ServicesDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [activeThirdMenu, setActiveThirdMenu] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const closeAll = () => {
    setIsOpen(false);
    setActiveSubMenu(null);
    setActiveThirdMenu(null);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        closeAll();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  // Handlers for Desktop Hover
  const handleMouseEnter = () => {
    if (window.innerWidth >= 1024) setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) closeAll();
  };

  return (
    <div 
      className="relative w-full lg:w-auto h-full flex items-center" 
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* TRIGGER BUTTON */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between w-full lg:w-auto px-5 py-4 lg:py-2 lg:px-4   group ${
          isOpen 
            ? " " 
            : "text-gray-700"
        }`}
      >
        <div className="flex items-center gap-2">

          <Typography variant="s2" className="">Services</Typography>
        </div>
        <ChevronDown className={`w-5 h-5 lg:w-4 lg:h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : "text-gray-400"}`} />
      </button>

      {/* DROPDOWN CONTAINER */}
      {isOpen && (
        <div 
          className="absolute top-full left-0 w-full lg:w-[260px] z-[999] pt-2 overflow-visible"
        >
          {/* Menu Box */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-2xl p-2 space-y-1">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="relative"
                onMouseEnter={() => window.innerWidth >= 1024 && setActiveSubMenu(service.title)}
              >
                <button
                  onClick={(e) => {
                    if (window.innerWidth < 1024) {
                      e.stopPropagation();
                      setActiveSubMenu(activeSubMenu === service.title ? null : service.title);
                    }
                  }}
                  className={`flex items-center justify-between w-full px-4 py-3 rounded-xl transition-colors ${
                    activeSubMenu === service.title 
                      ? "bg-blue-50 text-blue-700 font-bold" 
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <span className="text-base">{service.title}</span>
                  {service.subItems && <ChevronRight className="w-4 h-4 text-gray-300" />}
                </button>

                {/* Submenu Level 2 */}
                {activeSubMenu === service.title && service.subItems && (
                  <div className="lg:absolute lg:top-[-8px] lg:left-full lg:pl-2 w-full lg:w-[240px]">
                    <div className="bg-white lg:border border-gray-100 lg:rounded-2xl lg:shadow-2xl p-2 space-y-1 mt-1 lg:mt-0 ml-4 lg:ml-0 border-l-2 border-blue-100">
                      {service.subItems.map((sub, i) => (
                        <div 
                          key={i} 
                          className="relative"
                          onMouseEnter={() => window.innerWidth >= 1024 && setActiveThirdMenu(sub.title)}
                        >
                          {sub.children ? (
                            <button
                              onClick={(e) => {
                                if (window.innerWidth < 1024) {
                                  e.stopPropagation();
                                  setActiveThirdMenu(activeThirdMenu === sub.title ? null : sub.title);
                                }
                              }}
                              className={`flex items-center justify-between w-full px-4 py-2.5 rounded-xl transition-colors ${
                                activeThirdMenu === sub.title ? "bg-gray-100 text-blue-700 font-bold" : "text-gray-600 hover:bg-gray-50"
                              }`}
                            >
                              <span className="text-[15px]">{sub.title}</span>
                              <ChevronRight className="w-4 h-4 text-gray-300" />
                            </button>
                          ) : (
                            <Link 
                              href={sub.href || "#"} 
                              onClick={closeAll}
                              className="block px-4 py-2.5 rounded-xl text-gray-600 hover:bg-blue-50 hover:text-blue-700 text-[15px]"
                            >
                              {sub.title}
                            </Link>
                          )}

                          {/* Level 3 Children */}
                          {activeThirdMenu === sub.title && sub.children && (
                            <div className="lg:absolute lg:top-[-8px] lg:left-full lg:pl-2 w-full lg:w-[220px]">
                              <div className="bg-white lg:border border-gray-100 lg:rounded-2xl lg:shadow-2xl p-2 space-y-1 mt-1 lg:mt-0 ml-4 lg:ml-0 border-l-2 border-blue-200">
                                {sub.children.map((child, j) => (
                                  <Link 
                                    key={j} 
                                    href={child.href} 
                                    onClick={closeAll}
                                    className="block px-4 py-2 rounded-xl text-[14px] text-gray-500 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                                  >
                                    {child.title}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesDropdown;