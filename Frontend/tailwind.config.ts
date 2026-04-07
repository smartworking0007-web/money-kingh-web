import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Font family configuration
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"], // Default Professional
        lexend: ["var(--font-lexend)", "sans-serif"], // Friendly & Modern (Current)
        manrope: ["var(--font-manrope)", "sans-serif"], // Corporate & Sharp
        plusJakarta: ["var(--font-plus-jakarta)", "sans-serif"], // Super Clean (Fintech Style)
        outfit: ["var(--font-outfit)", "sans-serif"], // Geometric & Premium
        urbanist: ["var(--font-urbanist)", "sans-serif"], // High-end Fashion/Tech look
      },
      animation: {
        marquee: 'marquee 50s linear infinite', 
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;