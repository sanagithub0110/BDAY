import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          glow: "hsl(var(--secondary-glow))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        elegant: ['Playfair Display', 'serif'],
        body: ['Montserrat', 'sans-serif'],
        handwritten: ['Dancing Script', 'cursive'],
      },
      boxShadow: {
        'glow-soft-blue': 'var(--glow-soft-blue)',
        'glow-soft-red': 'var(--glow-soft-red)',
        'glow-ambient': 'var(--glow-ambient)',
      },
      backgroundImage: {
        'soft-gradient': 'var(--soft-gradient)',
        'warm-gradient': 'var(--warm-gradient)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "soft-glow": {
          '0%, 100%': {
            boxShadow: '0 0 20px hsl(var(--primary-glow) / 0.2), 0 0 40px hsl(var(--primary-glow) / 0.1)',
          },
          '50%': {
            boxShadow: '0 0 30px hsl(var(--primary-glow) / 0.3), 0 0 60px hsl(var(--primary-glow) / 0.15)',
          },
        },
        "shimmer": {
          '0%': { opacity: '0.5', transform: 'translateX(-100%)' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0.5', transform: 'translateX(100%)' },
        },
        "float": {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        "fade-in": {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        "gentle-zoom": {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        "particles": {
          '0%': { opacity: '0', transform: 'translateY(0) translateX(0)' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'translateY(-100px) translateX(20px)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "soft-glow": "soft-glow 3s ease-in-out infinite",
        "shimmer": "shimmer 3s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "fade-in": "fade-in 1s ease-out forwards",
        "gentle-zoom": "gentle-zoom 0.8s ease-out forwards",
        "particles": "particles 3s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
