// src/app/about/page.tsx
import React from "react";
import CompanyIntro from "../components/stats/CompanyIntro";
import ServiceGrid from "../components/Service/ServiceGrid";
import FinancialPartners from "../components/FinancialPartners/FinancialPartners";
import MissionVision from "./MissionVision";
import AboutServiceGrid from "./AboutServiceGrid";
import Hero from "./Hero";
import { AboutTestimonialCard } from "./AboutTestimonialCard";
import WhyChoose from "../components/Choose/WhyChoose";

export default function About() {
  return (
    <main className="w-full min-h-screen">
      <MissionVision />
      {/* Sections ke beech ka gap kam karne ke liye space-y ko control karein */}
      <div className="w-full flex flex-col">
        {/* Company Intro agar white background hai */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <CompanyIntro />
        </div>
        <AboutServiceGrid />
        <Hero />
        <AboutTestimonialCard />
        
        <div className="max-w-7xl mx-auto px-4 py-16">
          <FinancialPartners />
          
          
        </div>
        <ServiceGrid />   
        <WhyChoose />
      </div>
    </main>
  );
}
