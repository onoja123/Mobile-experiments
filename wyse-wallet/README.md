# Wyse Wallet

Crypto wallet with a fixed lime balance card, an NFT gallery, and a bottom nav that compacts as you scroll. Assets has an animated allocation bar and sparkline rows that expand for 24h stats; History has filter chips and rows that open into transaction detail. Tapping a gallery piece pushes a detail screen. Artwork is hand-drawn SVG.

Liquid glass on the balance card and the tab bar (`expo-native-compact-tabs`) on iOS 26, with solid fallbacks everywhere else.

```
npm install
npx expo run:ios      # or: npx expo run:android
```

This one needs a dev build, not Expo Go — the tab bar ships native code. Xcode 26.0 can't compile Expo SDK 57's `expo-modules-jsi` (Swift `weak let`); `patches/` fixes it and `postinstall` reapplies it.
