import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "hero-one": "url('/slider/heroslider/slider-1.jpg')",
        "hero-two": "url('/slider/heroslider/slider-2.jpg')",
        "hero-three": "url('/slider/heroslider/slider-3.jpg')",
        "services-card": "url('/map.png')",
        "structure": "url('/d-slide-6.jpg')",
        "pro-slider1": "url('/slider/projects/project-1.jpg')",
        "pro-slider2": "url('/slider/projects/project-2.jpg')",
        "pro-slider3": "url('/slider/projects/project-3.jpg')",
        "pro-slider4": "url('/slider/projects/project-4.jpg')",
        "pro-slider5": "url('/slider/projects/project-5.jpg')",
        "pro-slider6": "url('/slider/projects/project-6.jpg')",
        "dots": "url('/bg-dots.png')",
        "about-hero": "url('/page-header.jpg')",
        "our-team1": "url('/Worker-1.jpg')",
        "our-team2": "url('/Worker-2.jpg')",
        "our-team3": "url('/Worker-3.jpg')",
        "our-team4": "url('/Worker-4.jpg')",
        "count-down": "url('/counter-bg.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
