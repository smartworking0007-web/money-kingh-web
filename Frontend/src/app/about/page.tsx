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
    <main className="w-full min-h-screen bg-white overflow-x-hidden">
      <MissionVision />

      <div className="w-full flex flex-col">
        {/* Company Intro Wrapper */}
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <CompanyIntro />
        </div>

        <AboutServiceGrid />
        <Hero />
        <AboutTestimonialCard />
        <div className="w-full">
          <FinancialPartners />
        </div>

        {/* Baki sections */}
        <ServiceGrid />
        <div className="mt-12 md:mt-24 mb-16 md:mb-32">
          <WhyChoose />
        </div>
      </div>
    </main>
  );
}
