# meltdeck

A viscous project carousel, after [Viscose-carousel](https://github.com/Yousuf-developer/Viscose-carousel)
but rebuilt for the phone.

There are no cards. One full-screen SkSL fragment shader renders the whole
wheel as a signed distance field — cards fuse when they meet, pull into
threads when they part, and snap right before rest. Your finger is a force:
pressing softens the surface, dragging turns the wheel.

Tap the front card and it doesn't navigate — it melts open into the detail
view, and melts back shut. The index screen spins the wheel to whatever you
pick. Titles morph with the same soften-then-threshold trick, done with a
blur + color-matrix layer in Skia.

Skia + Reanimated + gesture-handler, runs in Expo Go.

```
npm install
npx expo start
```
