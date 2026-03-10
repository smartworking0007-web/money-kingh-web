// src/components/about/MissionVision.tsx
import React from 'react';

const MissionVision: React.FC = () => {
  return (
    <section className="w-full relative overflow-hidden">
      {/* Hero Image Section */}
      <div 
        className="relative w-full h-[400px] md:h-[400px] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/MissionVision/1.jpeg')`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="max-w-5xl px-4">
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-light leading-tight m-0 drop-shadow-lg">
            Helping Indians Achieve Their Dreams...<br />
            That s The MONEY KING Dream.
          </h2>
          <p className="text-lg md:text-xl text-gray-100 opacity-95 max-w-2xl mx-auto mt-6 leading-relaxed">
            Let our expertise open new financial doors. A financial push to plan, invest and prosper!
          </p>
        </div>
      </div>

      {/* Mission & Vision Grid Section */}
      <div className="bg-[#f0f7ff] py-20 w-full border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 md:divide-x-2 md:divide-blue-300">
          
          <div className="flex flex-col items-center text-center px-10 py-10 md:py-0">
            <h3 className="text-3xl font-bold text-[#0056b3] mb-6 uppercase tracking-wider">
              Mission
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed max-w-sm m-0">
               Bridge financial gaps in Clients with fast-approval, customized financial solutions – empowering businesses and individuals to expand and achieve lasting success.
            </p>
          </div>

          <div className="flex flex-col items-center text-center px-10 py-10 md:py-0">
            <h3 className="text-3xl font-bold text-[#0056b3] mb-6 uppercase tracking-wider">
              Vision
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed max-w-sm m-0">
              Our vision is to lead the financial services industry in India by becoming the go-to provider of fast, flexible, and sustainable growth – empowering millions of businesses and individuals to thrive, innovate, and build lasting wealth.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;