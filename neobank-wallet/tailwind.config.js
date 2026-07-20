/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        canvas: "#F7F6F4",
        ink: "#111111",
        card: "#0B0B0B",
        muted: "#A6A6A6",
        faint: "#C4C4C4",
        hairline: "#EDECEA",
        credit: "#6BCB8B",
        sand: "#F5F1EB",
        xbox: "#107C10",
      },
    },
  },
  plugins: [],
};
