import React from 'react';
import { View } from 'react-native';

export default function PresenceDot({ size }: { size: number }) {
  return (
    <View
      className="absolute bottom-0.5 right-0.5 rounded-full border-2 border-cream bg-online"
      style={{ width: size, height: size }}
    />
  );
}
