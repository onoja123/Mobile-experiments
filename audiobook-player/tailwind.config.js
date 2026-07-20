/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        canvas: "#F2F2F6",
        ink: "#17171B",
        inkSoft: "#3A3A3C",
        sub: "#97979E",
        subStrong: "#6E6E73",
        faint: "#BFBFC6",
        accent: "#0A84FF",
      },
    },
  },
  plugins: [],
};
