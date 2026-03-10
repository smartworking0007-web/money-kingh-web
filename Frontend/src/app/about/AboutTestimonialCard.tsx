import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

const row1 = [
  {
    name: "Rahul Sharma",
    role: "Small Business Owner, Delhi",
    quote: "Money King Financial gave me a business loan in Delhi within just 4 days! Super fast approval, minimal paperwork, and no hidden charges.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
  },
  {
    name: "Priya Mehta",
    role: "Freelancer, South Delhi",
    quote: "I needed urgent funds for my course fees. Got a fast approval personal loan from Money King — amount disbursed in 48 hours!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
  },
  {
    name: "Vikram Singh",
    role: "Startup Founder, Mumbai",
    quote: "As a new entrepreneur, cash flow was tight. Money King provided working capital loans with quick processing and flexible EMI.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
  },
  {
    name: "Anjali Kapoor",
    role: "Salaried Professional, West Delhi",
    quote: "Excellent experience with personal loan! Approval was lightning fast, interest rates reasonable, and the entire process online.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop"
  }
];

const row2 = [
  {
    name: "Amit Patel",
    role: "Shop Owner, North Delhi",
    quote: "Took a loan against property for renovation. The team was professional, valuation quick, and funds came in record time.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
  },
  {
    name: "Neha Gupta",
    role: "Homemaker",
    quote: "First time taking a loan — was nervous. Money King made it so simple with fast personal loan approval and polite staff guidance.",
    image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=150&h=150&fit=crop"
  },
  {
    name: "Sandeep Kumar",
    role: "SME Owner, Rohini",
    quote: "Best decision was choosing Money King for my business expansion loan. Quick documentation check, fast disbursal, and really low pressure.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop"
  },
  {
    name: "Ritu Verma",
    role: "Self-Employed, Noida (NCR)",
    quote: "Urgent medical expense — got instant personal loan approval from Money King. No lengthy process, very cooperative team.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop"
  }
];

const TestimonialItem = ({ item }: { item: typeof row1[0] }) => (
  <div className="flex-shrink-0 w-[300px] md:w-[400px] bg-white p-6 md:p-10 rounded-[40px] border border-gray-100 shadow-sm flex flex-col h-full mx-3 md:mx-6 transition-all duration-300 hover:shadow-xl hover:border-blue-100">
    <div className="mb-6">
      {/* Box ke andar ka content wrap ho isliye whitespace-normal zaroori hai */}
      <svg width="20" height="24" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 28V13.1026C0 9.15385 1.09687 5.80342 3.2906 3.05128C5.48433 0.299145 8.4359 -0.65812 12.1453 0.179487V6.16239C9.81197 6.16239 8.34615 6.94017 7.74786 8.49573C7.26923 9.69231 7.02991 11.0085 7.02991 12.4444H12.1453V28H0ZM21.5385 28V13.1026C21.5385 9.15385 22.6353 5.80342 24.8291 3.05128C27.0228 0.299145 29.9744 -0.65812 33.6838 0.179487V6.16239C31.3504 6.16239 29.8846 6.94017 29.2863 8.49573C28.8077 9.69231 28.5684 11.0085 28.5684 12.4444H33.6838V28H21.5385Z" fill="#3B82F6"/>
      </svg>
    </div>

    {/* Yahan whitespace-normal lagane se word bahar nahi jayenge */}
    <p className="text-[#4B5563] text-base md:text-lg font-medium leading-relaxed mb-10 flex-grow whitespace-normal">
      {item.quote}
    </p>

    <div className="flex items-center gap-4 border-t border-gray-50 pt-8 mt-auto">
      <div className="relative w-12 h-12 md:w-14 md:h-14 overflow-hidden rounded-full border border-gray-100 flex-shrink-0">
        <Image src={item.image} alt={item.name} fill className="object-cover" />
      </div>
      <div className="flex flex-col min-w-0">
        <h4 className="font-bold text-[#111827] text-sm md:text-base tracking-tight truncate">{item.name}</h4>
        <p className="text-gray-400 text-[10px] md:text-xs font-semibold uppercase tracking-widest truncate">{item.role}</p>
      </div>
    </div>
  </div>
);

export const AboutTestimonialCard = () => {
  return (
    <section className="py-20 bg-[#FDFDFD] overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-70%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-70%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 60s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 60s linear infinite;
        }
        .animate-scroll-left:hover, .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 bg-black text-white px-5 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-bold mb-8 shadow-xl">
             <div className="bg-blue-600 rounded-full p-1 shadow-[0_0_10px_rgba(37,99,235,0.5)]">
               <Star size={12} className="fill-white text-white" />
             </div>
             <span>Rated 4.8/5 by over 1 Lakh users</span>
          </div>
          <h2 className="text-3xl md:text-6xl font-bold text-gray-900 max-w-4xl leading-tight tracking-tight">
            Words of praise from others about our presence.
          </h2>
        </div>
      </div>

      {/* Container mein whitespace-nowrap rahega animation ke liye */}
      <div className="flex flex-col gap-6 md:gap-10">
        {/* Row 1 */}
        <div className="flex w-full overflow-hidden">
          <div className="flex animate-scroll-left whitespace-nowrap">
            {[...row1, ...row1, ...row1].map((item, index) => (
              <TestimonialItem key={`r1-${index}`} item={item} />
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex w-full overflow-hidden">
          <div className="flex animate-scroll-right whitespace-nowrap">
            {[...row2, ...row2, ...row2].map((item, index) => (
              <TestimonialItem key={`r2-${index}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};