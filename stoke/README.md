# Stoke

Interval workout coach, dark with an ember accent. Pick a round from the peek carousel, and the session screen runs it like a teleprompter: the active exercise's name fills with color as its seconds elapse, effort bars pulse around the countdown (calm during rest, wild during work), and haptics tick each transition. Finishing wipes a radial tick gauge while the score digits roll up. Home tracks the daily goal as a burning fuse with a pulsing ember at the frontier; Progress has animated load bars and session history.

Motion language borrowed from [clarity](https://github.com/SchroederNathan/clarity) (MIT): the frontier fill, tick-fan gauge, staggered intro reveal behind a splash, and one-job spring tokens.

Liquid glass on the session controls and the tab bar (`expo-native-compact-tabs`) on iOS 26, with solid fallbacks everywhere else. Icons are Hugeicons.

```
npm install
npx expo run:ios      # or: npx expo run:android
```

This one needs a dev build, not Expo Go — the tab bar ships native code. Xcode 26.0 can't compile Expo SDK 57's `expo-modules-jsi` (Swift `weak let`); `patches/` fixes it and `postinstall` reapplies it.
