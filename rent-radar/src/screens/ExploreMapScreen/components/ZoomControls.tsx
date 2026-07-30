import { Pressable, Text, View } from 'react-native';

import { ZoomControlsProps } from './ZoomControls.types';

export default function ZoomControls({ onZoomIn, onZoomOut }: ZoomControlsProps) {
  return (
    <View className="rounded-xl bg-white shadow-md dark:bg-neutral-800" style={{ elevation: 6 }}>
      <Pressable className="h-10 w-10 items-center justify-center" onPress={onZoomIn}>
        <Text className="text-lg font-medium text-ink dark:text-white">+</Text>
      </Pressable>
      <Pressable className="h-10 w-10 items-center justify-center" onPress={onZoomOut}>
        <Text className="text-lg font-medium text-ink dark:text-white">−</Text>
      </Pressable>
    </View>
  );
}
