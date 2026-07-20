import { Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { Image } from 'expo-image';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
} from 'react-native-reanimated';

import { NightlyRate, PressableScale } from '@/components';
import { IMAGE_TRANSITION_MS } from '@/constants/animation';
import { Hotel } from '@/interfaces';
import { palette } from '@/theme';

const HEART_POP_SPRING = { damping: 10, stiffness: 400 };
const HEART_SETTLE_SPRING = { damping: 12, stiffness: 300 };

type HotelCardProps = {
  hotel: Hotel;
  favorite: boolean;
  onToggleFavorite: () => void;
  onPress: () => void;
};

export function HotelCard({ hotel, favorite, onToggleFavorite, onPress }: HotelCardProps) {
  const heartScale = useSharedValue(1);

  const heartStyle = useAnimatedStyle(() => ({
    transform: [{ scale: heartScale.value }],
  }));

  const pressFavorite = () => {
    heartScale.value = withSequence(
      withSpring(1.3, HEART_POP_SPRING),
      withSpring(1, HEART_SETTLE_SPRING),
    );
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onToggleFavorite();
  };

  return (
    <PressableScale scaleTo={0.97} className="w-[208px]" onPress={onPress}>
      <View className="h-[156px] overflow-hidden rounded-2xl">
        <Image source={hotel.image} style={{ flex: 1 }} transition={IMAGE_TRANSITION_MS} />
        <Pressable
          hitSlop={8}
          className="absolute right-2.5 top-2.5 h-9 w-9 items-center justify-center rounded-full bg-white"
          onPress={pressFavorite}
        >
          <Animated.View style={heartStyle}>
            <Ionicons
              name={favorite ? 'heart' : 'heart-outline'}
              size={17}
              color={favorite ? palette.coral : palette.ink}
            />
          </Animated.View>
        </Pressable>
      </View>

      <Text className="mt-2.5 font-jakarta-semibold text-[15px] text-ink" numberOfLines={1}>
        {hotel.name}
      </Text>
      <View className="mt-1 flex-row items-center gap-1">
        <Ionicons name="star" size={13} color={palette.star} />
        <Text className="font-jakarta-medium text-[13px] text-ink">
          {hotel.rating} <Text className="font-jakarta text-muted">({hotel.reviews} reviews)</Text>
        </Text>
      </View>
      <Text className="mt-1 font-jakarta text-[12px] text-muted">
        {hotel.city} · {hotel.distance}
      </Text>
      <View className="mt-2 flex-row gap-1.5">
        {hotel.perks.map((perk) => (
          <View key={perk} className="rounded-lg bg-chip px-2 py-1">
            <Text className="font-jakarta-medium text-[10px] text-ink/80">{perk}</Text>
          </View>
        ))}
      </View>
      <NightlyRate price={hotel.price} className="mt-2 text-[15px]" />
    </PressableScale>
  );
}
