/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { nunito: "Nunito" },
    },

    colors: {
      gray: { 100: "#808080", 200: "#323232", 300: "#212121", 400: "#141414" },
      indigo: {
        100: "#210099",
        300: "#130057",
        500: "#100036",
        800: "#030011",
      },
      
      white: "#fff",
      cyan: "#14ffec",
      red: "#d6436e",
      green: "#25da72",
      transparent: "#00000000",
    },
    fontSize: {
      sm: "14px",
      md: "18px",
      lg: "24px",
      xl: "32px",
      base: "16px",
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
