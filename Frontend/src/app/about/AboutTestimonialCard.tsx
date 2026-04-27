"use client";
import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

const row1 = [
  { name: "Rahul Sharma", role: "Business Owner, Delhi", quote: "Money King Financial gave me a business loan in Delhi within just 4 days! Super fast approval.", image: "/images/Testimonial/1.jpeg" },
  { name: "Amar singh", role: "Freelancer, South Delhi", quote: "I needed urgent funds for my course fees. Amount disbursed in 48 hours! Great service.", image: "/images/Testimonial/2.jpeg" },
  { name: "Vikram Singh", role: "Startup Founder, Mumbai", quote: "Cash flow was tight. Money King provided working capital loans with quick processing.", image: "/images/Testimonial/3.jpeg" },
  { name: "Suresh Kapoor", role: "Professional, West Delhi", quote: "Excellent experience! Approval was lightning fast, and the entire process online.", image: "/images/Testimonial/4.png" }
];

const row2 = [
  { name: "Amit Patel", role: "Shop Owner, North Delhi", quote: "Took a loan for renovation. Valuation quick, and funds came in record time. Professional team.", image: "/images/Testimonial/5.jpeg" },
  { name: "Neha Gupta", role: "Homemaker", quote: "First time taking a loan. Money King made it so simple with polite staff guidance.", image: "/images/Testimonial/6.jpeg" },
  { name: "Sandeep Kumar", role: "SME Owner, Rohini", quote: "Best decision for my business expansion loan. Quick documentation and fast disbursal.", image: "/images/Testimonial/7.jpeg" },
  { name: "Rajesh", role: "Self-Employed, Noida", quote: "Urgent medical expense — got instant personal loan approval. Very cooperative team.", image: "/images/Testimonial/8.jpeg" }
];

const TestimonialItem = ({ item }: { item: typeof row1[0] }) => (
  <div className="shrink-0 w-[280px] md:w-[380px] bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col h-full mx-3 md:mx-4 transition-all hover:shadow-md hover:border-blue-100">
    <div className="mb-4">
      <svg width="20" height="20" viewBox="0 0 36 28" fill="none" className="opacity-20">
        <path d="M0 28V13.1026C0 9.15385 1.09687 5.80342 3.2906 3.05128C5.48433 0.299145 8.4359 -0.65812 12.1453 0.179487V6.16239C9.81197 6.16239 8.34615 6.94017 7.74786 8.49573C7.26923 9.69231 7.02991 11.0085 7.02991 12.4444H12.1453V28H0ZM21.5385 28V13.1026C21.5385 9.15385 22.6353 5.80342 24.8291 3.05128C27.0228 0.299145 29.9744 -0.65812 33.6838 0.179487V6.16239C31.3504 6.16239 29.8846 6.94017 29.2863 8.49573C28.8077 9.69231 28.5684 11.0085 28.5684 12.4444H33.6838V28H21.5385Z" fill="#2563EB"/>
      </svg>
    </div>

    {/* Italic hata diya gaya hai, font normal rakha hai */}
    <p className="text-slate-700 text-sm md:text-base font-semibold leading-relaxed mb-6 whitespace-normal">
      {item.quote}
    </p>

    <div className="flex items-center gap-3 border-t border-slate-50 pt-5 mt-auto">
      <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-full border border-slate-100 shrink-0">
        <Image src={item.image} alt={item.name} fill className="object-cover" />
      </div>
      <div className="flex flex-col min-w-0">
        <h4 className="font-bold text-slate-900 text-xs md:text-sm tracking-tight truncate">{item.name}</h4>
        <p className="text-blue-600 text-[10px] font-bold uppercase tracking-wider truncate">{item.role}</p>
      </div>
    </div>
  </div>
);

export const AboutTestimonialCard = () => {
  return (
    <section className="py-12 md:py-20 bg-[#F8FAFC] overflow-hidden font-lexend">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left { animation: scroll-left 50s linear infinite; }
        .animate-scroll-right { animation: scroll-right 50s linear infinite; }
        .animate-scroll-left:hover, .animate-scroll-right:hover { animation-play-state: paused; }
      `}} />

      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 bg-slate-950 text-white px-4 py-2 rounded-full text-[10px] md:text-xs font-bold mb-6 shadow-xl">
             <Star size={10} className="fill-blue-500 text-blue-500" />
             <span>Rated 4.8/5 by over 1 Lakh users</span>
          </div>
          <h2 className="text-2xl md:text-5xl font-black text-slate-900 max-w-3xl leading-tight">
            Loved by thousands of happy customers
          </h2>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:gap-8">
        <div className="flex w-full overflow-hidden">
          <div className="flex animate-scroll-left">
            {[...row1, ...row1, ...row1, ...row1].map((item, index) => (
              <TestimonialItem key={`r1-${index}`} item={item} />
            ))}
          </div>
        </div>

        <div className="flex w-full overflow-hidden">
          <div className="flex animate-scroll-right">
            {[...row2, ...row2, ...row2, ...row2].map((item, index) => (
              <TestimonialItem key={`r2-${index}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTestimonialCard;