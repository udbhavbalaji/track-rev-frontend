/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        titleFont: ["Formula1", "Display-Bold"],
        wideFont: ["Formula1", "Display-Wide"],
        regularFont: ["Formula1", "Display-Regular"],
      },
      colors: {
        redBull: "#3671C6",
        mclaren: "#F58020",
        mercedes: "#6CD3BF",
        ferrari: "#F91536",
        aston: "#358C75",
        alpine: "#2293D1",
        williams: "#37BEDD",
        haas: "#B6BABD",
        sauber: "#52E252",
        rb: "#5E8FAA",
      },
    },
  },
  plugins: [],
};
