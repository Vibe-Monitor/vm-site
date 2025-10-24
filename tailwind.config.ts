import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
     "./src/components_old/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",

        "primary-accent": "var(--primary-accent)",
        "foreground-accent": "var(--foreground-accent)",
        "hero-background": "var(--hero-background)",
        "text-muted": "var(--text-muted)",

        // Contextual colors
        "analytical": "var(--color-analytical)",
        "integration": "var(--color-integration)",
        "tools": "var(--color-tools)",
        "linkedin": "var(--color-linkedin)",
        "cta": "var(--color-cta)",
      },
    },
  },
  plugins: [],
};
export default config;
