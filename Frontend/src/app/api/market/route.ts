// import { NextResponse } from 'next/server';

// export const dynamic = 'force-dynamic';

// export async function GET() {
//   // Yahoo Finance (YH Finance) API Key
//   const apiKey = "5d7c611f1msh315957e1094d7a0p1cdac0jsn22286a194c1c"; 
//   const symbols = "^BSESN,^NSEI,^NSEBANK,GC=F,SI=F";
  
//   // YH Finance ka exact endpoint jo aapne dashboard mein select kiya tha
//   const url = `https://yahoo-finance15.p.rapidapi.com/api/v1/markets/quote?ticker=${symbols}`;

//   try {
//     const response = await fetch(url, {
//       method: "GET",
//       headers: {
//         "x-rapidapi-key": apiKey,
//         "x-rapidapi-host": "yahoo-finance15.p.rapidapi.com"
//       },
//       cache: "no-store"
//     });

//     // Pehle check karein ki response JSON hai ya nahi
//     const contentType = response.headers.get("content-type");
//     if (!contentType || !contentType.includes("application/json")) {
//       console.error("API Error: Received non-JSON response");
//       return NextResponse.json([], { status: 500 });
//     }

//     const results = await response.json();
    
//     // Yahoo Finance data 'body' mein bhejta hai
//     const finalData = results.body || results || [];
//     return NextResponse.json(finalData);

//   } catch (error) {
//     console.error("Critical API Error:", error);
//     return NextResponse.json([], { status: 500 });
//   }
// }