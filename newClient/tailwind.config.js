/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideRight: {
          from: {
            transform: "translateX(-100%)",
            opacity: 0,
          },
          to: {
            transform: `translateX(0px)`,
            opacity: 1,
          },
        },
      },

      animation: {
        slideRight: `slideRight 1.5s  ease forwards`,
      },

      colors: {
        primary_color: "#07a8ad",
        secondary_color: "#16181f",
        gray_color: "#9ca3af",
        text_color1: "#9ca3af",
        pink_color: "#fdf2f8",
      },
    },
  },
  plugins: [],
};
