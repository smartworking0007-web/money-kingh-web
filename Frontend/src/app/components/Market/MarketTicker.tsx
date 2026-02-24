// "use client";
// import React, { useEffect, useRef } from "react";

// export default function MarketTicker() {
//   const container = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!container.current) return;
//     container.current.innerHTML = "";
//     const script = document.createElement("script");
//     script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
//     script.type = "text/javascript";
//     script.async = true;
//     script.innerHTML = JSON.stringify({
//       symbols: [
//         { description: "SENSEX", proName: "BSE:SENSEX" },
//         { description: "NIFTY 50", proName: "NSE:NIFTY" },
//         { description: "NIFTY BANK", proName: "NSE:BANKNIFTY" },
//         { description: "MIDCAP 100", proName: "NSE:NIFTY_MID_SELECT" },
//       ],
//       showSymbolLogo: false,
//       colorTheme: "light",
//       isTransparent: false,
//       displayMode: "adaptive",
//       locale: "en",
//     });
//     container.current.appendChild(script);
//   }, []);

//   return (
//     <div className="w-full bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
//       <div ref={container} className="tradingview-widget-container">
//         <div className="tradingview-widget-container__widget"></div>
//       </div>
//     </div>
//   );
// }