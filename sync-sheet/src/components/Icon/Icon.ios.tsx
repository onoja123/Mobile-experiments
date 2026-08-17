import { SymbolView, type SFSymbol } from 'expo-symbols';

import type { IconProps } from './Icon.types';

export default function Icon({ name, size, color }: IconProps) {
  return <SymbolView name={name as SFSymbol} size={size} tintColor={color} />;
}
