import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Hotel } from '@/interfaces';
import { palette } from '@/theme';

type PropertyFactsProps = {
  hotel: Hotel;
};

type PropertyFact = {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
};

export function PropertyFacts({ hotel }: PropertyFactsProps) {
  const facts: PropertyFact[] = [
    { icon: 'scan-outline', label: `${hotel.sqm} m²` },
    { icon: 'person-outline', label: `${hotel.capacity} guests` },
    { icon: 'water-outline', label: `${hotel.baths} bath` },
    { icon: 'bed-outline', label: `${hotel.beds} beds` },
  ];

  return (
    <>
      <Text className="mt-6 font-jakarta-semibold text-[15px] text-ink">Property details</Text>
      <View className="mt-3 flex-row flex-wrap gap-2">
        {facts.map((fact) => (
          <View
            key={fact.label}
            className="h-9 flex-row items-center gap-1.5 rounded-full border border-line px-3"
          >
            <Ionicons name={fact.icon} size={14} color={palette.muted} />
            <Text className="font-jakarta-medium text-[12px] text-ink">{fact.label}</Text>
          </View>
        ))}
      </View>
    </>
  );
}
