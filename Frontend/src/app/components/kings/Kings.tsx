import React from 'react';
import Image from 'next/image';    
import { Typography } from '../ui/Typography';

export default function MoneyKingSection() {
  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* LEFT SIDE: Image Section */}
          <div className="flex-1 relative w-full">
            {/* Background Shape */}
            <div className="absolute -z-10 top-0 left-0 w-full h-full bg-linear-to-tr from-blue-50 to-indigo-50 rounded-[100px] opacity-70 transform -translate-x-10 translate-y-10"></div>
            
            <div className="relative z-10 flex justify-center">
              <Image
                src="/images/your.jpeg" 
                alt="Money King Financial Services"
                width={600}
                height={500}
                className="rounded-3xl object-cover shadow-2xl"
                priority
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 right-10  p-2  hidden sm:block  ">
                 <div className="w-16 h-16 rounded-xl overflow-hidden">
                    <Image 
                      src="/images/small-avatar.jpeg" 
                      alt="Money King Support" 
                      width={64} 
                      height={64} 
                      className="object-cover"
                    />
                 </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Text Content */}
          <div className="flex-1 space-y-8 text-left">
            <div className="space-y-5">
              <Typography variant="h1" as="h2" className="text-[#1e266e] mb-0">
                Money King <br />
                Financial Services Pvt. Ltd.
              </Typography>
              <div className="space-y-4">
                <Typography variant="s1" as="p" className="text-gray-800 font-semibold">
                  We work with India&apos;s top banks & NBFCs!
                </Typography>
                <Typography variant="b1" className="text-gray-600 mt-2">
                  Our vision is to provide premium, hassle-free financial services 
                  that <span className="text-[#1e266e] font-bold">empower your future.</span>
                </Typography>
              </div>
            </div>

            {/* Vision Points */}
            <div className="space-y-6">
              {/* Point 1 */}
              <div className="flex items-start gap-4 group">
                <div className="mt-1 shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <Typography variant="h5" as="h4" className="mt-0 mb-1 text-gray-900">
                    2016 Startup
                  </Typography>
                  <Typography variant="b2" className="text-gray-500">
                    Preparing to set a new benchmark in the financial industry.
                  </Typography>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex items-start gap-4 group">
                <div className="mt-1 shrink-0 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <Typography variant="h5" as="h4" className="mt-0 mb-1 text-gray-900">
                    Latest Technology
                  </Typography>
                  <Typography variant="b2" className="text-gray-500">
                    Integrating tech for fastest loan processing and lowest-cost solutions.
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}