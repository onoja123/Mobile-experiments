# coverdeck

![coverdeck demo](demo.gif)

Cover Flow, rebuilt. Flick through the deck and the covers tilt away in 3D with their reflections underneath, while the whole background takes on the colour of whatever album you land on. Tap a cover off to the side and it springs to the middle; the transport buttons drive the same spring.

The covers and the background colour run off one scroll value, so the colour slides along with your finger instead of snapping once you let go. Browse and Library compact the tab bar as you scroll down them.

Expo 57, Reanimated, Gesture Handler, expo-image, and [expo-native-compact-tabs](https://github.com/Kellytomi/expo-native-compact-tabs) for the bar — real Liquid Glass on iOS 26.

Dev build only, since the tab bar ships native code. Carries the expo-modules-jsi patch for Xcode 26.0.x via patch-package.

## Run

```
npm install
npx expo run:ios      # or: npx expo run:android
```

Covers load from Unsplash, so it needs a network connection.
