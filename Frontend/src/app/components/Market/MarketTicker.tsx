// "use client";
// import React, { useState, useEffect, useCallback } from "react";

// interface MarketData {
//   name: string;
//   price: number | string;
//   changePercent: number;
//   changePoints: number;
// }

// interface YahooItem {
//   symbol: string;
//   regularMarketPrice: number;
//   regularMarketChangePercent: number;
//   regularMarketChange: number;
// }

// const SYMBOLS = [
//   { label: "SENSEX", sym: "^BSESN" },
//   { label: "NIFTY 50", sym: "^NSEI" },
//   { label: "NIFTY BANK", sym: "^NSEBANK" },
//   { label: "GOLD", sym: "GC=F" },
//   { label: "SILVER", sym: "SI=F" }
// ];

// const TickerItems = ({ data }: { data: MarketData[] }) => (
//   <div className="flex gap-12 px-6 items-center">
//     {data.map((item, index) => (
//       <div key={index} className="flex items-center gap-3 whitespace-nowrap">
//         <span className="text-[11px] font-bold text-gray-500 uppercase tracking-tight">{item.name}</span>
//         <span className="text-[13px] font-mono font-bold text-black">
//           {typeof item.price === "number" ? item.price.toLocaleString('en-IN', { minimumFractionDigits: 2 }) : item.price}
//         </span>
//         <span className={`flex items-center text-[11px] font-bold ${item.changePercent >= 0 ? "text-green-600" : "text-red-600"}`}>
//           {item.changePercent >= 0 ? "▲" : "▼"} 
//           <span className="ml-1">{Math.abs(item.changePoints).toFixed(2)} ({item.changePercent >= 0 ? "+" : ""}{item.changePercent.toFixed(2)}%)</span>
//         </span>
//       </div>
//     ))}
//   </div>
// );

// export default function MarketTicker() {
//   const [data, setData] = useState<MarketData[]>([]);

//   const fetchData = useCallback(async () => {
//     try {
//       const response = await fetch("/api/market");
//       if (!response.ok) throw new Error('API unreachable');
      
//       const results: YahooItem[] = await response.json();

//       if (Array.isArray(results)) {
//         const formatted: MarketData[] = SYMBOLS.map(s => {
//           const apiMatch = results.find((r) => r.symbol === s.sym);
//           return {
//             name: s.label,
//             price: apiMatch?.regularMarketPrice ?? "---",
//             changePercent: apiMatch?.regularMarketChangePercent ?? 0,
//             changePoints: apiMatch?.regularMarketChange ?? 0
//           };
//         });
//         setData(formatted);
//       }
//     } catch (error) {
//       console.error("Market fetch error:", error);
//     }
//   }, []);

//   useEffect(() => {
//     let isMounted = true;
//     if (isMounted) fetchData();

//     const interval = setInterval(() => {
//       if (isMounted) fetchData();
//     }, 60000); 

//     return () => {
//       isMounted = false;
//       clearInterval(interval);
//     };
//   }, [fetchData]);

//   if (data.length === 0) return null;

//   return (
//     <div className="w-full bg-white text-black py-2.5 overflow-hidden border-b border-gray-200 sticky top-0 z-50 shadow-sm">
//       <div className="flex w-max animate-marquee">
//         <TickerItems data={data} />
//         <TickerItems data={data} />
//       </div>
//     </div>
//   );
// }