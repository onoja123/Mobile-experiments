export const fontFamilies = {
  serif: "Amiri_400Regular",
  serifItalic: "Amiri_400Regular_Italic",
  serifBold: "Amiri_700Bold",
  sans: "Jost_400Regular",
  sansMedium: "Jost_500Medium",
} as const;

export const typography = {
  cardTitle: { fontFamily: fontFamilies.serifBold, fontSize: 22, lineHeight: 34 },
  cardDescription: { fontFamily: fontFamilies.sans, fontSize: 11.5, lineHeight: 15.5 },
  chatHeaderLabel: { fontFamily: fontFamilies.sans, fontSize: 11.5 },
  bubbleText: { fontFamily: fontFamilies.sans, fontSize: 13.5, lineHeight: 19 },
  composerInput: { fontFamily: fontFamilies.sans, fontSize: 13.5 },
  typingLabel: { fontFamily: fontFamilies.sans, fontSize: 13 },
} as const;
