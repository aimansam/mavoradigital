/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#181512",
        paper: "#fbf7ef",
        mist: "#f0e8dc",
        moss: "#31433b",
        fern: "#6f765f",
        ember: "#a77a35",
        clay: "#b18a5c",
        line: "#ded1bf"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Poppins", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        ui: ["Plus Jakarta Sans", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 50px rgba(24, 21, 18, 0.14)"
      }
    }
  },
  plugins: []
};