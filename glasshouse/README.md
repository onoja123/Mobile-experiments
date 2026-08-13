# Glasshouse

Art gallery concept built around two iOS-native tricks: Expo Router's zoom
transition (`Link.AppleZoom`) and liquid glass (`expo-glass-effect`). A masonry
grid of pieces, each with a glass title chip; tap one and the image flies into
a full-screen view with a glass dock — swipe down to rewind the zoom.

Only the plain image rides the zoom. Putting glass inside the transition clone
makes the interactive dismissal stutter, so the chips stay behind on the grid.

Zoom needs iOS 18+, glass needs iOS 26. Below that you get a normal push and
translucent fills.

```
npm install
npx expo start
```
