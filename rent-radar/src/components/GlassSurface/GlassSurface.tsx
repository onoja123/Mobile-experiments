import { useColorScheme, View } from 'react-native';
import { BlurView } from 'expo-blur';
import { GlassView, isLiquidGlassAvailable } from 'expo-glass-effect';
import Animated from 'react-native-reanimated';

import { GlassSurfaceProps } from './GlassSurface.types';

const AnimatedGlassView = Animated.createAnimatedComponent(GlassView);
const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

const GLASS_TINTS = {
  light: 'rgba(255,255,255,0.7)',
  dark: 'rgba(16,16,18,0.8)',
} as const;

export default function GlassSurface({ tint, style, children }: GlassSurfaceProps) {
  const scheme = useColorScheme();
  const resolvedTint = tint ?? (scheme === 'dark' ? 'dark' : 'light');

  if (isLiquidGlassAvailable()) {
    return (
      <AnimatedGlassView
        style={style}
        glassEffectStyle="regular"
        tintColor={GLASS_TINTS[resolvedTint]}
        isInteractive
      >
        {children}
      </AnimatedGlassView>
    );
  }
  return (
    <AnimatedBlurView intensity={50} tint={resolvedTint} style={style}>
      <View className={resolvedTint === 'dark' ? 'flex-1 bg-black/60' : 'flex-1 bg-white/60'}>
        {children}
      </View>
    </AnimatedBlurView>
  );
}
