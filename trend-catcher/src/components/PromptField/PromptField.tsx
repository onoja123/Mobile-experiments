import { TextInput } from 'react-native';

import { colors } from '@/theme/colors';

export default function PromptField() {
  return (
    <TextInput
      className="mx-5 mt-4 rounded-2xl bg-mist px-5 py-3.5 text-sm text-ink"
      placeholder="Write something here..."
      placeholderTextColor={colors.smoke}
    />
  );
}
