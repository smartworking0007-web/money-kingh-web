// "use client";
// import React, { useState, useEffect, useCallback, useRef } from "react";

// interface MarketData {
//   name: string;
//   price: number;
//   changePercent: number;
// }

// // ESLint 'any' error hatane ke liye naya interface
// interface APIResult {
//   symbol: string;
//   regularMarketPrice?: number;
//   regularMarketChangePercent?: number;
// }

// const SYMBOLS_MAP = [
//   { label: "SENSEX", sym: "^BSESN" },
//   { label: "NIFTY 50", sym: "^NSEI" },
//   { label: "NIFTY BANK", sym: "^NSEBANK" },
//   { label: "GOLD", sym: "GC=F" },
//   { label: "SILVER", sym: "SI=F" }
// ];

// export default function MarketTicker() {
//   const [marketData, setMarketData] = useState<MarketData[]>([]);
//   const isFetching = useRef(false);

//   const fetchData = useCallback(async () => {
//     if (isFetching.current) return;

//     isFetching.current = true;
    
//     try {
//       const res = await fetch("/api/market");
//       if (!res.ok) throw new Error("API call failed");
      
//       const results = await res.json();

//       if (Array.isArray(results) && results.length > 0) {
//         const formatted = SYMBOLS_MAP.map(s => {
//           // Yahan 'any' ki jagah 'APIResult' use kiya hai
//           const match = results.find((r: APIResult) => r.symbol === s.sym);
//           return {
//             name: s.label,
//             price: match?.regularMarketPrice || 0,
//             changePercent: match?.regularMarketChangePercent || 0
//           };
//         });
//         setMarketData(formatted);
//       }
//     } catch (err) {
//       console.error("Ticker fetch error:", err);
//     } finally {
//       isFetching.current = false;
//     }
//   }, []);

//   useEffect(() => {
//     const timer = setTimeout(fetchData, 1000);
//     const interval = setInterval(fetchData, 60000);
    
//     return () => {
//       clearTimeout(timer);
//       clearInterval(interval);
//     };
//   }, [fetchData]);

//   if (marketData.length === 0) {
//     return (
//       <div className="h-[40px] bg-white border-b flex items-center px-4 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
//         Connecting to Money King Live Market...
//       </div>
//     );
//   }

//   return (
//     <div className="w-full bg-white py-2 overflow-hidden border-b flex items-center h-[40px] sticky top-0 z-50 shadow-sm">
//       <div className="flex animate-marquee whitespace-nowrap">
//         {[...marketData, ...marketData].map((item, idx) => (
//           <div key={idx} className="flex items-center gap-3 px-8 border-r border-gray-100 last:border-0">
//             <span className="text-[10px] font-bold text-gray-400 uppercase">{item.name}</span>
//             <span className="text-[13px] font-mono font-bold text-black">
//               {item.price > 0 ? item.price.toLocaleString("en-IN") : "---"}
//             </span>
//             <span className={`text-[10px] font-bold ${item.changePercent >= 0 ? "text-green-600" : "text-red-600"}`}>
//               {item.changePercent >= 0 ? "▲" : "▼"} {Math.abs(item.changePercent).toFixed(2)}%
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// } 