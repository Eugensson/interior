import type { Config } from "tailwindcss";
import Animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-dm_serif_display)",
      secondary: "var(--font-jost)",
    },
    backgroundImage: {
      hero: "url('/images/hero/bg.jpg')",
      article: "url('/images/banner_1.jpg')",
      projects: "url('/images/banner_2.jpg')",
      pricing: "url('/images/banner_3.jpg')",
      project: "url('/images/banner_4.jpg')",
      services: "url('/images/banner_5.jpg')",
      service: "url('/images/banner_6.jpg')",
      blog: "url('/images/banner_7.jpg')",
      team: "url('/images/banner_8.jpg')",
      employee: "url('/images/banner_9.jpg')",
      contact: "url('/images/banner_10.jpg')",
      faq: "url('/images/banner_11.jpg')",
      about: "url('/images/banner_15.jpg')",
      grid: "url('/images/grid.png')",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#292f36",
          hover: "#343e4a",
        },
        secondary: "#4d5053",
        accent: {
          DEFAULT: "#cda274",
          secondary: "#f4f0ec",
          hover: "#b88c5d",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [Animate],
} satisfies Config;
