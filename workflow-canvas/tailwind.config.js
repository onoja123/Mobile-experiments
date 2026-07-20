/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        paper: "#F7F6F2",
        ink: "#1B1B1B",
        fog: "#9C9A94",
        chip: "#F3F2ED",
        pebble: "#E3E1DB",
        mist: "#F0EEE9",
        lavender: "#E9EBFB",
        blush: "#F8E4E9",
        sky: "#DEEAF4",
        mint: "#E1EEE1",
        periwinkle: "#E3E5FA",
        smoke: "#F1F1ED",
        frost: "#E7EFF2",
      },
      fontFamily: {
        "jost-light": "Jost_300Light",
        jost: "Jost_400Regular",
        "jost-medium": "Jost_500Medium",
        "jost-semibold": "Jost_600SemiBold",
        "jost-bold": "Jost_700Bold",
      },
    },
  },
  plugins: [],
};
