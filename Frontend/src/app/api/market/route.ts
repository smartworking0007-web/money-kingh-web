// import { NextResponse } from "next/server";

// const SYMBOLS = [
//   { label: "SENSEX", symbol: "BSE:SENSEX" },
//   { label: "NIFTY 50", symbol: "NSE:NIFTY50" },
//   { label: "NIFTY BANK", symbol: "NSE:BANKNIFTY" },
//   { label: "GOLD", symbol: "XAU/USD" },
//   { label: "SILVER", symbol: "XAG/USD" },
// ]; 

// export async function GET() {
//   try {
//     const results = await Promise.all(
//       SYMBOLS.map(async (item) => {
//         const res = await fetch(
//           `https://api.twelvedata.com/quote?symbol=${item.symbol}&apikey=${process.env.TWELVEDATA_API_KEY}`
//         );

//         const data = await res.json();

//         return {
//           symbol: item.symbol,
//           regularMarketPrice: parseFloat(data.close || 0),
//           regularMarketChange: parseFloat(data.change || 0),
//           regularMarketChangePercent: parseFloat(data.percent_change || 0),
//         };
//       })
//     );

//     return NextResponse.json(results);
//   } catch (error) {
//     return NextResponse.json(
//       { error: "Twelve Data API Error" },
//       { status: 500 }
//     );
//   }
// }