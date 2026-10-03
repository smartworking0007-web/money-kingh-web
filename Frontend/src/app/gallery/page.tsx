// import React from "react";
// import { Typography } from "@/app/components/ui/Typography";

// export const metadata = {
//   title: "Money King Gallery - Award Winning Moments & Creators",
//   description: "Explore a collection where art and design merge to shape what's next. Discover our visual journey and company events.",
// };

// export default function GalleryPage() {
//   // Symmetrical size sequence: Ends par bade, center ki taraf chhote (Arc / Wave shape)
//   const slidingImages = [
//     { 
//       id: 1, 
//       src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop", 
//       alt: "Mountain landscape view",
//       size: "w-[320px] h-[420px] sm:w-[380px] sm:h-[480px]" // Left End (Bada)
//     },
//     { 
//       id: 2, 
//       src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", 
//       alt: "Scenic lake and nature view",
//       size: "w-[260px] h-[340px] sm:w-[300px] sm:h-[380px]" // Medium
//     },
//     { 
//       id: 3, 
//       src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop", 
//       alt: "Starry night mountain view",
//       size: "w-[210px] h-[280px] sm:w-[240px] sm:h-[310px]" // Small
//     },
//     { 
//       id: 4, 
//       src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop", 
//       alt: "Forest nature view",
//       size: "w-[170px] h-[220px] sm:w-[190px] sm:h-[250px]" // Center (Sabse Chhota)
//     },
//     { 
//       id: 5, 
//       src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop", 
//       alt: "Beautiful beach view",
//       size: "w-[210px] h-[280px] sm:w-[240px] sm:h-[310px]" // Small
//     },
//     { 
//       id: 6, 
//       src: "https://images.unsplash.com/photo-1511497584788-876761142212?q=80&w=800&auto=format&fit=crop", 
//       alt: "Green woods and sunlight",
//       size: "w-[260px] h-[340px] sm:w-[300px] sm:h-[380px]" // Medium
//     },
//     { 
//       id: 7, 
//       src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop", 
//       alt: "Mountain landscape view right",
//       size: "w-[320px] h-[420px] sm:w-[380px] sm:h-[480px]" // Right End (Bada)
//     }
//   ];

//   return (
//     <main className="min-h-screen bg-white overflow-hidden">
//       {/* Smooth Marquee Animation Style */}
//       <style dangerouslySetInnerHTML={{__html: `
//         @keyframes smoothMarquee {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         .animate-smooth-marquee {
//           display: flex;
//           width: max-content;
//           animation: smoothMarquee 45s linear infinite;
//           align-items: flex-end;
//         }
//         .animate-smooth-marquee:hover {
//           animation-play-state: paused;
//         }
//       `}} />

//       {/* Hero Section */}
//       <section className="relative pt-24 pb-20 flex flex-col items-center justify-center text-center">
        
//         <div className="mb-4">
//           <Typography
//             variant="caption"
//             className="text-gray-500 font-medium tracking-wide text-sm uppercase"
//           >
//             Today&apos;s Pick
//           </Typography>
//         </div>

//         <h1 className="max-w-5xl text-4xl sm:text-6xl lg:text-7xl font-extrabold text-black tracking-tight uppercase leading-[1.1] mb-6 px-4">
//           Award Winning <br /> Creators
//         </h1>

//         <p className="max-w-xl text-gray-600 text-base sm:text-lg mb-8 px-4 leading-relaxed">
//           Explore a collection <span className="text-gray-400">where art and design merge to shape what&apos;s next.</span>{" "}
//           <strong className="font-semibold text-black">This gallery isn&apos;t just about visuals.</strong>
//         </p>

//         <div className="mb-16">
//           <a
//             href="/contact"
//             className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-sm font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
//           >
//             Start for Free
//           </a>
//         </div>

//         {/* Dynamic Curved Carousel */}
//         <div className="w-full overflow-hidden relative py-12">
//           <div className="animate-smooth-marquee space-x-6">
//             {[...slidingImages, ...slidingImages].map((item, index) => (
//               <div
//                 key={`${item.id}-${index}`}
//                 className={`relative ${item.size} rounded-[36px] overflow-hidden shadow-2xl shrink-0 bg-gray-100 group cursor-pointer transition-all duration-500 hover:scale-105`}
//               >
//                 <img
//                   src={item.src}
//                   alt={item.alt}
//                   className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />
//               </div>
//             ))}
//           </div>
//         </div>

//       </section>
//     </main>
//   );
// }


import React from "react";
import { Typography } from "@/app/components/ui/Typography";

export const metadata = {
  title: "Money King Gallery - Award Winning Moments & Creators",
  description: "Explore a collection where art and design merge to shape what's next. Discover our visual journey and company events.",
};

export default function GalleryPage() {
  // 1. Carousel ke liye images
  const slidingImages = [
    { id: 1, src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop", alt: "Mountain view", size: "w-[320px] h-[420px] sm:w-[380px] sm:h-[480px]" },
    { id: 2, src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", alt: "Lake view", size: "w-[260px] h-[340px] sm:w-[300px] sm:h-[380px]" },
    { id: 3, src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop", alt: "Night view", size: "w-[210px] h-[280px] sm:w-[240px] sm:h-[310px]" },
    { id: 4, src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop", alt: "Forest view", size: "w-[170px] h-[220px] sm:w-[190px] sm:h-[250px]" },
    { id: 5, src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop", alt: "Beach view", size: "w-[210px] h-[280px] sm:w-[240px] sm:h-[310px]" },
    { id: 6, src: "https://images.unsplash.com/photo-1511497584788-876761142212?q=80&w=800&auto=format&fit=crop", alt: "Woods view", size: "w-[260px] h-[340px] sm:w-[300px] sm:h-[380px]" },
    { id: 7, src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop", alt: "Mountain right", size: "w-[320px] h-[420px] sm:w-[380px] sm:h-[480px]" }
  ];

  // 2. Niche wale Dribbble style section ke liye tour/gallery items (Aap yahan apna content dal sakte hain)
  const tourGalleries = [
    {
      id: 1,
      date: "2025. FEBRUARY",
      location: "/ Boston, MA",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
      span: "col-span-1 md:col-span-1"
    },
    {
      id: 2,
      date: "2025. MARCH",
      location: "/ Washington",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=800&auto=format&fit=crop",
      span: "col-span-1 md:col-span-2"
    },
    {
      id: 3,
      date: "2025. JANUARY",
      location: "/ Toronto, ON",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop",
      span: "col-span-1 md:col-span-1"
    }
  ];

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Smooth Marquee Animation Style */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes smoothMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-smooth-marquee {
          display: flex;
          width: max-content;
          animation: smoothMarquee 45s linear infinite;
          align-items: flex-end;
        }
        .animate-smooth-marquee:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* 1st Section: Hero & Carousel */}
      <section className="relative pt-24 pb-20 flex flex-col items-center justify-center text-center">
        <div className="mb-4">
          <Typography variant="caption" className="text-gray-500 font-medium tracking-wide text-sm uppercase">
            Today&apos;s Pick
          </Typography>
        </div>

        <h1 className="max-w-5xl text-4xl sm:text-6xl lg:text-7xl font-extrabold text-black tracking-tight uppercase leading-[1.1] mb-6 px-4">
          Award Winning <br /> Creators
        </h1>

        <p className="max-w-xl text-gray-600 text-base sm:text-lg mb-8 px-4 leading-relaxed">
          Explore a collection <span className="text-gray-400">where art and design merge to shape what&apos;s next.</span>{" "}
          <strong className="font-semibold text-black">This gallery isn&apos;t just about visuals.</strong>
        </p>

        <div className="mb-16">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-sm font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Start for Free
          </a>
        </div>

        {/* Dynamic Curved Carousel */}
        <div className="w-full overflow-hidden relative py-12">
          <div className="animate-smooth-marquee space-x-6">
            {[...slidingImages, ...slidingImages].map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className={`relative ${item.size} rounded-[36px] overflow-hidden shadow-2xl shrink-0 bg-gray-100 group cursor-pointer transition-all duration-500 hover:scale-105`}
              >
                <img src={item.src} alt={item.alt} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2nd Section: Dribbble Style Cinematic Gallery Concept (Carousel ke theek niche) */}
      <section className="bg-[#0b0b0b] text-white py-24 px-4 sm:px-8 lg:px-16 rounded-t-[40px] sm:rounded-t-[60px] relative">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-zinc-800 pb-8">
            <div>
              <span className="text-zinc-500 text-xs sm:text-sm uppercase tracking-widest block mb-2">Gallery & Highlights</span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif tracking-wide">
                The Stage Her <br /> Dominion
              </h2>
            </div>
            <div className="mt-6 md:mt-0 max-w-md">
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                This subpage concept captures raw power and presence—blending motion, music, and memory into a cinematic digital experience. Every scroll feels like a front-row seat[cite: 9].
              </p>
            </div>
          </div>

          {/* Featured Live/Video Player Card */}
          <div className="relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 mb-12 group">
            <div className="relative h-[350px] sm:h-[500px] lg:h-[600px] w-full">
              <img
                src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1600&auto=format&fit=crop"
                alt="Live Concert"
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              
              {/* Overlay Content */}
              <div className="absolute top-6 left-6 flex items-center space-x-2 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-xs font-semibold tracking-wider uppercase text-white">LIVE NOW / Jakarta, ID</span>[cite: 10]
              </div>

              <div className="absolute bottom-8 left-8 right-8 flex flex-col sm:flex-row justify-between items-start sm:items-end">
                <div>
                  <h3 className="text-2xl sm:text-4xl font-light text-white mb-2">NIKI is Live — Watch the Magic Unfold</h3>
                  <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
                    Catch real-time energy and emotion as artists command the stage with powerful performances[cite: 10].
                  </p>
                </div>
                <a
                  href="/contact"
                  className="mt-4 sm:mt-0 bg-white text-black font-medium px-6 py-3 rounded-full hover:bg-zinc-200 transition-colors text-sm"
                >
                  BOOK NOW
                </a>
              </div>
            </div>
          </div>

          {/* Grid Gallery Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tourGalleries.map((item) => (
              <div key={item.id} className={`relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 group h-[400px] ${item.span}`}>
                <img
                  src={item.image}
                  alt={item.date}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute top-6 left-6">
                  <span className="text-white font-medium text-sm tracking-wider block">{item.date}</span>[cite: 10, 11]
                  <span className="text-zinc-400 text-xs">{item.location}</span>[cite: 10, 11]
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}