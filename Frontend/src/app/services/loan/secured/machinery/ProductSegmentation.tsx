"use client";

import React from "react";
import { Typography } from "@/app/components/ui/Typography";
import { motion } from "framer-motion";
import { 
  Settings, 
  Box, 
  Layers, 
  Shirt, 
  Trees, 
  Printer, 
  Stethoscope, 
  Factory, 
  Briefcase 
} from "lucide-react";

export default function ProductSegmentation() {
  const segments = [
    { title: "Engineering & Industrial Machinery", icon: <Settings className="w-8 h-8 text-orange-500" /> },
    { title: "Food Packaging Machines", icon: <Box className="w-8 h-8 text-yellow-600" /> },
    { title: "Plastic Processing Machinery", icon: <Layers className="w-8 h-8 text-blue-400" /> },
    { title: "Textile & Garment Machinery", icon: <Shirt className="w-8 h-8 text-blue-500" /> },
    { title: "Woodworking Machinery & Equipment", icon: <Trees className="w-8 h-8 text-green-600" /> },
    { title: "Printing & Packaging Machinery", icon: <Printer className="w-8 h-8 text-orange-600" /> },
    { title: "Pharmaceutical Manufacturing & Packaging", icon: <Factory className="w-8 h-8 text-cyan-500" /> },
    { title: "Medical & Healthcare Equipment", icon: <Stethoscope className="w-8 h-8 text-blue-600" /> },
    { title: "Other Industrial & Specialized Machinery", icon: <Briefcase className="w-8 h-8 text-slate-500" /> },
  ];

  return (
    <section className="bg-white py-12 md:py-20 px-4 md:px-10 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* --- HEADER --- */}
        <div className="mb-12 md:mb-16">
          <Typography
            variant="h3"
            as="h2"
            className="text-[#1e293b] font-bold text-2xl md:text-4xl lg:text-5xl mb-4 mt-0 tracking-tight"
          >
            Product Segmentation for Machinery Finance
          </Typography>
          <Typography
            variant="b1"
            className="text-slate-500 max-w-2xl mx-auto leading-relaxed text-sm md:text-base mt-0"
          >
            Money King Financial offers machinery finance solutions to manufacturers across key industrial segments.
          </Typography>
        </div>

        {/* --- GRID --- 
            Mobile: 2 columns
            Tablet: 3 columns
            Desktop: 5 columns
        */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6 justify-center">
          {segments.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="bg-red-50/30 p-4 md:p-8 rounded-2xl flex flex-col items-center justify-center min-h-[140px] md:min-h-[200px] border border-transparent hover:border-red-100 hover:bg-red-50/50 transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-4 md:mb-6 transform transition-transform duration-300 hover:scale-110">
                {item.icon}
              </div>

              {/* Title */}
              <Typography
                variant="b1"
                className="text-slate-700 font-bold text-[11px] sm:text-xs md:text-sm leading-tight mt-0 px-1"
              >
                {item.title}
              </Typography>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}