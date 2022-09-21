/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        primary: {
          light: "#FFFFFF",
          DEFAULT: "#031424",
          dark: "#303030",
        },
        secondary: {
          light: "#FF4E53",
          DEFAULT: "#EF262C",
        },
      },
    },
  },
  plugins: [],
};
