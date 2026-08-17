import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import BottomDock from '@/components/BottomDock';
import BrowseScreen from '@/screens/BrowseScreen';
import DeckScreen from '@/screens/DeckScreen';
import LibraryScreen from '@/screens/LibraryScreen';
import { colors } from '@/theme';

export default function App() {
  const [tab, setTab] = useState(0);

  return (
    <GestureHandlerRootView style={styles.root}>
      <SafeAreaProvider>
        <View style={styles.root}>
          <View style={[styles.screen, tab !== 0 && styles.hidden]}>
            <DeckScreen />
          </View>
          <View style={[styles.screen, tab !== 1 && styles.hidden]}>
            <BrowseScreen />
          </View>
          <View style={[styles.screen, tab !== 2 && styles.hidden]}>
            <LibraryScreen />
          </View>
          <BottomDock selected={tab} onSelect={setTab} />
        </View>
        <StatusBar style="dark" />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
  },
  screen: {
    ...StyleSheet.absoluteFill,
    position: 'absolute',
  },
  hidden: {
    display: 'none',
  },
});
