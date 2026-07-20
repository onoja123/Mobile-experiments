import React from 'react';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  inset: {
    paddingHorizontal: 20,
  },
});

type SectionLabelProps = {
  label: string;
  inset?: boolean;
};

export function SectionLabel({ label, inset = false }: SectionLabelProps) {
  return (
    <Text
      className="mb-2.5 mt-6 text-[13px] font-semibold text-subtle"
      style={inset ? styles.inset : undefined}
    >
      {label}
    </Text>
  );
}
