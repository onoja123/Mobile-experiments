import type { Ionicons } from '@expo/vector-icons';

export interface MenuRowProps {
  icon: keyof (typeof Ionicons)['glyphMap'];
  label: string;
}
