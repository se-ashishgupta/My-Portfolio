/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_color: "#07a8ad",
        secondary_color: "#16181f",
        gray_color: "#9ca3af",
        text_color1: "#858585",

      },
    },
  },
  plugins: [],
};
