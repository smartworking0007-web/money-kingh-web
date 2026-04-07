"use client";
import Link from "next/link";
import Image from "next/image";
import { Typography } from "../ui/Typography";
import { servicesData } from "@/data/servicesData";

const ServiceGrid = () => {
  return (
    <section className="w-full bg-[#0b1c44] py-8 px-4 sm:px-6 lg:px-16">
      {/* --- HEADER SECTION --- */}
      <div className="max-w-5xl mx-auto text-center mb-6">
        <Typography variant="h2" className="text-white mb-4">
          Apply Today Achieve Tomorrow
        </Typography>
        <Typography variant="b1" className="text-gray-300 max-w-2xl mx-auto">
          &quot;Quick approvals, flexible options, and loans that work for your goals.&quot;
        </Typography>
      </div>

      {/* --- GRID SECTION --- */}
      {/* Responsive Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
      <div className="max-w-7xl mx-auto grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {servicesData.map((service) => (
          <Link 
            key={service.id} 
            href={service.href} 
            className="group block h-full"
          >
            {/* CARD CONTAINER */}
            <div className="bg-white rounded-md overflow-hidden h-full flex flex-col">
              {/* IMAGE WRAPPER */}
              <div className="relative w-full aspect-video overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              {/* TITLE WRAPPER */}
              <div className="p-4 flex items-center justify-center">
                <Typography 
                    variant="h5" 
                    className="text-[#0b1c44] font-bold group-hover:text-blue-600 transition-colors text-center"
                >
                  {service.title}
                </Typography>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServiceGrid;