import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        padding: "2rem",
      },
      fontSize: {
        "5xl": "3.052rem",
      },
      colors: {
        mycolor: "#C8AAAA",
        mycolor2: "#C4D9FF",
        mycolor3: "#A31D1D",
        mycolor4: "#FFD65A",
      },
    },
  },
  plugins: [],
} satisfies Config;
