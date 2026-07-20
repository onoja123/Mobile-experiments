/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "./src/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        canvas: "#FBF9FA",
        ink: "#0A0A0A",
        subtle: "#A8A5AC",
      },
    },
  },
  plugins: [],
};
