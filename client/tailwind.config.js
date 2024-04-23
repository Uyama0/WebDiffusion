/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        golos: ["Golos Text", "sans-serif"],
      },
      borderRadius: {
        "base-border-radius": "16px",
      },
      margin: {
        "base-margin": "20px",
      },
      padding: {
        "base-padding": "20px",
      },
    },
  },
  plugins: [],
};
