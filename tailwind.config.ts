
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
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
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
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
        neon: {
          blue: "#1EAEDB",
          magenta: "#D946EF",
          cyan: "#22D3EE",
        },
        dark: "#121212",
        darker: "#0A0A0A",
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
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "glow": {
          "0%, 100%": { filter: "drop-shadow(0 0 5px currentColor)" },
          "50%": { filter: "drop-shadow(0 0 15px currentColor)" },
        },
        "typing": {
          "from": { width: "0" },
          "to": { width: "100%" },
        },
        "blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "pulse": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.05)" },
        },
        "scale-up": {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "fade-in-left": {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "fade-in-right": {
          "0%": { transform: "translateX(20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "charge-up": {
          "0%": { width: "0%" },
          "100%": { width: "var(--final-width)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-fast": "float 4s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite",
        "typing": "typing 3.5s steps(40, end)",
        "blink": "blink 0.7s step-end infinite",
        "pulse": "pulse 2s ease-in-out infinite",
        "scale-up": "scale-up 0.5s ease-out forwards",
        "fade-in-left": "fade-in-left 0.7s ease-out forwards",
        "fade-in-right": "fade-in-right 0.7s ease-out forwards",
        "charge-up": "charge-up 1s ease-out forwards",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "cyber-grid": "linear-gradient(rgba(16, 16, 28, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 16, 28, 0.5) 1px, transparent 1px)",
      },
      boxShadow: {
        "neon-blue": "0 0 5px #1EAEDB, 0 0 20px rgba(30, 174, 219, 0.5)",
        "neon-magenta": "0 0 5px #D946EF, 0 0 20px rgba(217, 70, 239, 0.5)",
        "neon-cyan": "0 0 5px #22D3EE, 0 0 20px rgba(34, 211, 238, 0.5)",
        "glass": "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
