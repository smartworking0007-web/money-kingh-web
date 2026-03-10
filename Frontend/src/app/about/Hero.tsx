"use client";

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Typography } from '../components/ui/Typography';

interface CardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

const PhilosophyCard = ({ title, subtitle, description, icon, index, isActive, onClick }: CardProps) => {
  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      x: index === 0 ? -100 : index === 2 ? 100 : 0, 
      y: index === 1 ? -100 : 0 
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
      onClick={onClick}
      // Logics: isActive ? White Styles : Blue Styles
      className={`flex flex-col items-center p-8 rounded-2xl shadow-xl cursor-pointer transition-all duration-500 border-2 ${
        isActive 
          ? 'bg-white border-white scale-105 z-10' 
          : 'bg-[#0052a5] border-transparent hover:border-blue-300'
      }`}
    >
      {/* Icon Circle: Changes to Yellow when active, White when blue */}
      <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 border-2 transition-colors duration-500 ${
        isActive ? 'bg-[#ffc845] border-[#ffc845]' : 'bg-white border-white'
      }`}>
        <span className="text-3xl">{icon}</span>
      </div>

      <Typography 
        variant="h4" 
        as="h3" 
        className={`uppercase tracking-tighter mb-2 mt-0 transition-colors duration-500 ${
            isActive ? 'text-[#0052a5]' : 'text-white'
        }`}
      >
        {title}
      </Typography>

      <Typography 
        variant="s1" 
        className={`text-center mb-4 mt-0 transition-colors duration-500 ${
            isActive ? 'text-slate-800' : 'text-blue-100'
        }`}
      >
        {subtitle}
      </Typography>

      <Typography 
        variant="b2" 
        className={`text-center leading-relaxed mt-0 mb-0 transition-colors duration-500 ${
            isActive ? 'text-gray-500' : 'text-blue-50/80'
        }`}
      >
        {description}
      </Typography>
    </motion.div>
  );
};

const Philosophy = () => {
  // Start with null so all are Blue at first
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const data = [
    {
      title: "plan",
      subtitle: "Transparency & Integrity",
      description: "We believe in complete honesty. No hidden charges, no confusing terms — only clear, straightforward loan solutions so you always know exactly what you're getting.",
      icon: "📝",
    },
    {
      title: "invest",
      subtitle: "Empowerment & Growth",
      description: "We don’t just provide funds; we empower businesses and individuals to expand, thrive, and achieve long-term financial success.",
      icon: "📈",
    },
    {
      title: "prosper",
      subtitle: "Speed & Efficiency",
      description: "Time is money. That’s why we offer fast approval loans — most applications processed in 3–7 days (often faster) with minimal documentation and quick disbursal.",
      icon: "💰",
    }
  ];

  const handleCardClick = (index: number) => {
    // If you click the same card, it turns back to blue. 
    // If you click a different card, that one turns white.
    setActiveIndex(prevIndex => prevIndex === index ? null : index);
  };

  return (
    <section className="w-full py-24 bg-[#edf6ff] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <Typography 
            variant="h2" 
            as="h2" 
            className="text-[#0052a5] uppercase tracking-[0.2em] mb-8"
          >
            Our Philosophy
          </Typography>
          
          <div className="max-w-3xl mx-auto">
            <Typography variant="b2" className="mb-2">
              At Money King Financial Services Pvt Ltd, our core values define everything we do. Since 2016, we have built a reputation in Delhi as a trusted loan provider by staying true to these principles: 
            </Typography>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {data.map((item, index) => (
            <PhilosophyCard 
              key={index} 
              index={index}
              {...item} 
              isActive={activeIndex === index}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;