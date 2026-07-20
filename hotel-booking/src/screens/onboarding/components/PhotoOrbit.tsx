import { View } from 'react-native';
import { Image } from 'expo-image';
import Animated, { ZoomIn } from 'react-native-reanimated';

import { IMAGE_TRANSITION_MS } from '@/constants/animation';
import { ONBOARDING_CENTER_PHOTO, ONBOARDING_ORBIT_PHOTOS } from '@/data/onboardingPhotos';
import { shadows } from '@/theme';

import {
  CENTER_ENTER_DELAY_MS,
  CENTER_PHOTO_SIZE,
  CENTER_SPRING_DAMPING,
  HALO_SIZE,
  ORBIT_ENTER_DELAY_MS,
  ORBIT_ENTER_STAGGER_MS,
  ORBIT_RING_SIZE,
  ORBIT_SLOTS,
  ORBIT_SPRING_DAMPING,
  PHOTO_RADIUS_RATIO,
} from '../onboarding.constants';

export function PhotoOrbit() {
  return (
    <View style={{ width: ORBIT_RING_SIZE, height: ORBIT_RING_SIZE }}>
      <View
        className="absolute rounded-full bg-white"
        style={[
          {
            width: HALO_SIZE,
            height: HALO_SIZE,
            left: (ORBIT_RING_SIZE - HALO_SIZE) / 2,
            top: (ORBIT_RING_SIZE - HALO_SIZE) / 2,
          },
          shadows.halo,
        ]}
      />

      {ORBIT_SLOTS.map((slot, index) => {
        const angleRad = (slot.angle * Math.PI) / 180;
        const left = ORBIT_RING_SIZE / 2 + Math.cos(angleRad) * slot.radius - slot.size / 2;
        const top = ORBIT_RING_SIZE / 2 + Math.sin(angleRad) * slot.radius - slot.size / 2;
        return (
          <Animated.View
            key={ONBOARDING_ORBIT_PHOTOS[index]}
            entering={ZoomIn.delay(ORBIT_ENTER_DELAY_MS + index * ORBIT_ENTER_STAGGER_MS)
              .springify()
              .damping(ORBIT_SPRING_DAMPING)}
            className="absolute overflow-hidden"
            style={{
              left,
              top,
              width: slot.size,
              height: slot.size,
              borderRadius: slot.size * PHOTO_RADIUS_RATIO,
            }}
          >
            <Image
              source={ONBOARDING_ORBIT_PHOTOS[index]}
              style={{ flex: 1 }}
              transition={IMAGE_TRANSITION_MS}
            />
          </Animated.View>
        );
      })}

      <Animated.View
        entering={ZoomIn.delay(CENTER_ENTER_DELAY_MS).springify().damping(CENTER_SPRING_DAMPING)}
        className="absolute overflow-hidden rounded-[30px]"
        style={[
          {
            width: CENTER_PHOTO_SIZE,
            height: CENTER_PHOTO_SIZE,
            left: (ORBIT_RING_SIZE - CENTER_PHOTO_SIZE) / 2,
            top: (ORBIT_RING_SIZE - CENTER_PHOTO_SIZE) / 2,
          },
          shadows.featuredPhoto,
        ]}
      >
        <Image source={ONBOARDING_CENTER_PHOTO} style={{ flex: 1 }} transition={IMAGE_TRANSITION_MS} />
      </Animated.View>
    </View>
  );
}
