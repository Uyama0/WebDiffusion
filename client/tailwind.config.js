/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        golos: ["Golos Text", "sans-serif"],
      },
      borderRadius: {
        "base-border-radius": "12px",
      },
      margin: {
        "base-margin": "12px",
      },
      padding: {
        "base-padding": "12px",
      },
    },
  },
  plugins: [],
};