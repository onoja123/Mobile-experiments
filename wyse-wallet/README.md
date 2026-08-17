# Wyse Wallet

![Wyse Wallet demo](demo.gif)

Crypto wallet with a pinned lime balance card and an NFT gallery. Scroll and the bottom nav compacts — the labels drop away and every icon stays put. Assets has an allocation bar and sparkline rows that expand for 24h stats, History has filter chips and rows that open into detail, and tapping a piece in the gallery pushes through to the artwork. All of it is hand-drawn SVG.

Liquid glass on the balance card and the tab bar (`expo-native-compact-tabs`) on iOS 26, with solid fallbacks everywhere else.

```
npm install
npx expo run:ios      # or: npx expo run:android
```

This one needs a dev build, not Expo Go — the tab bar ships native code. Xcode 26.0 can't compile Expo SDK 57's `expo-modules-jsi` (Swift `weak let`); `patches/` fixes it and `postinstall` reapplies it.
