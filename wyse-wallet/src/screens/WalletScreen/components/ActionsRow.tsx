import { View } from 'react-native';

import ActionButton from './ActionButton';

export default function ActionsRow() {
  return (
    <View className="mt-2 flex-row gap-3 px-5">
      <ActionButton label="Transfer" icon="arrow-up-right" />
      <ActionButton label="Top Up" icon="plus" />
      <ActionButton label="Convert" icon="swap" />
    </View>
  );
}
