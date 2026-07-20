const colors = {
  background: "#F2F1F6",
  surface: "#FFFFFF",
  ink: {
    DEFAULT: "#41444E",
    secondary: "#6C7383",
    muted: "#A9AEBC",
    faint: "#C6CAD4",
  },
  bubble: {
    from: "#484C55",
    to: "#7A808B",
  },
  code: {
    bg: "#262A38",
    header: "#70757F",
    text: "#E8E9ED",
    keyword: "#6D9EF7",
    class: "#E0697A",
    string: "#8FC98A",
    number: "#6D9EF7",
  },
};

const theme = {
  colors,
  fontFamily: {
    sans: ["Manrope_400Regular"],
    "sans-medium": ["Manrope_500Medium"],
    "sans-semibold": ["Manrope_600SemiBold"],
    "sans-bold": ["Manrope_700Bold"],
  },
  borderRadius: {
    input: "16px",
    card: "12px",
    pill: "999px",
  },
};

module.exports = { theme, colors };
