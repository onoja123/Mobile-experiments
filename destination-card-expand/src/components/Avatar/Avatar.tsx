import React from 'react';

import { Image } from 'expo-image';

import { AvatarProps } from './Avatar.types';

export default function Avatar({ uri, size }: AvatarProps) {
  return (
    <Image
      source={uri}
      style={{ width: size, height: size, borderRadius: size / 2 }}
    />
  );
}
