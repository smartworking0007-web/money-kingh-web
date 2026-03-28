import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Font family configuration
      fontFamily: {
        // 'sans' ko override karke Inter set kiya (DigiSME look ke liye)
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        // Lexend ko alag se use karne ke liye
        lexend: ["var(--font-lexend)", "sans-serif"],
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