import { Pressable, Text, View } from 'react-native';

import QuickActionIcon from './QuickActionIcon';
import { QuickAction } from './QuickActions.types';

const ACTIONS: QuickAction[] = ['Top up', 'Send', 'Earn'];

export default function QuickActions() {
  return (
    <View className="flex-row rounded-2xl border border-mist">
      {ACTIONS.map((action, index) => (
        <Pressable
          key={action}
          className={`flex-1 p-3.5 active:opacity-60 ${index > 0 ? 'border-l border-mist' : ''}`}
        >
          <QuickActionIcon action={action} />
          <Text className="mt-2.5 text-[13px] font-semi text-ink">{action}</Text>
        </Pressable>
      ))}
    </View>
  );
}
