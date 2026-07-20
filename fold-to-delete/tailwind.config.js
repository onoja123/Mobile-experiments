/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        canvas: "#FBFBFD",
        ink: "#3E4354",
        sub: "#B6BAC5",
        accent: "#5D5FEF",
        search: "#EFEFF4",
        searchText: "#A9ADBB",
        zoneText: "#E4728A",
        toast: "#2F3555",
        bin: "#E4596E",
      },
    },
  },
  plugins: [],
};
