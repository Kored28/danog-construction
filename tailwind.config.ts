import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		backgroundImage: {
			'hero-one': "url('/slider/heroslider/slider-1.jpg')",
			'hero-two': "url('/slider/heroslider/slider-2.jpg')",
			'hero-three': "url('/slider/heroslider/slider-3.jpg')",
			'services-card': "url('/map.png')",
			'structure': "url('/d-slide-6.jpg')",
			'pro-slider1': "url('/slider/projects/project-1.jpg')",
			'pro-slider2': "url('/slider/projects/project-2.jpg')",
			'pro-slider3': "url('/slider/projects/project-3.jpg')",
			'pro-slider4': "url('/slider/projects/project-4.jpg')",
			'pro-slider5': "url('/slider/projects/project-5.jpg')",
			'pro-slider6': "url('/slider/projects/project-6.jpg')",
			'dots': "url('/bg-dots.png')",
			'about-hero': "url('/page-header.jpg')",
			'our-team1': "url('/Worker-1.jpg')",
			'our-team2': "url('/Worker-2.jpg')",
			'our-team3': "url('/Worker-3.jpg')",
			'our-team4': "url('/Worker-4.jpg')",
			'count-down': "url('/counter-bg.jpg')",
		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
