/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "./src/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        cream: "#F7F3E8",
        sand: "#F1EBD6",
        khaki: "#D9CFA3",
        ink: "#33312A",
        fade: "#A8A493",
        periwinkle: "#BCC4FF",
        mint: "#CFF2E9",
        blossom: "#FFBBF4",
      },
      fontFamily: {
        amiri: ["Amiri_400Regular"],
        "amiri-bold": ["Amiri_700Bold"],
        "amiri-italic": ["Amiri_400Regular_Italic"],
        jost: ["Jost_400Regular"],
        "jost-medium": ["Jost_500Medium"],
      },
    },
  },
  plugins: [],
};
