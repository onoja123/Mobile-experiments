import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useBookmarkBoard } from '@/hooks/useBookmarkBoard';

import { BookmarkColumn } from './components/BookmarkColumn';

export function HomeScreen() {
  const { columns, restoring, snapshots, removeCard, saveSnapshot } = useBookmarkBoard();

  return (
    <SafeAreaView edges={['top']} className="flex-1 bg-canvas">
      <View className="flex-1 flex-row gap-4 px-5 pt-4">
        {columns.map((cards, column) => (
          <BookmarkColumn
            key={column}
            cards={cards}
            restoring={restoring}
            snapshots={snapshots}
            onRemove={removeCard}
            onSnapshot={saveSnapshot}
          />
        ))}
      </View>
    </SafeAreaView>
  );
}
