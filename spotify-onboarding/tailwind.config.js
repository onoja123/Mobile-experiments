/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        spotify: "#1ED760",
        ink: "#0D0D0D",
        muted: "#8E8E93",
        pill: {
          DEFAULT: "#F1F1F1",
          label: "#6F6F73",
        },
      },
      fontSize: {
        headline: ["34px", { lineHeight: "38px", letterSpacing: "-1px" }],
        "card-title": ["23px", { lineHeight: "25px", letterSpacing: "-0.5px" }],
        body: ["13px", { lineHeight: "19px" }],
        label: "13px",
        button: "15px",
        caption: "11px",
      },
      borderRadius: {
        card: "20px",
        "card-image": "14px",
      },
    },
  },
  plugins: [],
};
