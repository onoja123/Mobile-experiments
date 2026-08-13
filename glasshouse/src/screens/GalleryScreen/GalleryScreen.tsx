import { GlassContainer, GlassView } from "expo-glass-effect";
import * as Haptics from "expo-haptics";
import {
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import GlassIconButton from "@/components/GlassIconButton";
import { ARTWORKS } from "@/data/artworks";
import { getGlassFallbackStyle } from "@/helpers/getGlassFallbackStyle";
import { splitArtworksIntoColumns } from "@/helpers/splitArtworksIntoColumns";
import { colors, spacing } from "@/theme";

import ArtCard from "./components/ArtCard";

export default function GalleryScreen() {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const columnWidth = (width - spacing.screen * 2 - spacing.gutter) / 2;
  const [left, right] = splitArtworksIntoColumns(ARTWORKS, columnWidth);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={{
          paddingTop: insets.top + 72,
          paddingBottom: insets.bottom + 48,
          paddingHorizontal: spacing.screen,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.subtitle}>{ARTWORKS.length} pieces on view</Text>
        <View style={styles.columns}>
          {[left, right].map((column, index) => (
            <View key={index} style={styles.column}>
              {column.map((artwork) => (
                <ArtCard
                  key={artwork.id}
                  artwork={artwork}
                  width={columnWidth}
                />
              ))}
            </View>
          ))}
        </View>
      </ScrollView>

      <View
        pointerEvents="box-none"
        style={[styles.header, { top: insets.top + 6 }]}
      >
        <GlassContainer spacing={12} style={styles.headerRow}>
          <GlassView style={[styles.titlePill, getGlassFallbackStyle()]}>
            <Text style={styles.titleText}>Glasshouse</Text>
          </GlassView>
          <GlassIconButton
            icon="sparkles"
            onPress={() => Haptics.selectionAsync()}
          />
          <GlassIconButton
            icon="magnifyingglass"
            onPress={() => Haptics.selectionAsync()}
          />
        </GlassContainer>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.canvas,
  },
  scroll: {
    flex: 1,
  },
  subtitle: {
    marginBottom: 18,
    marginLeft: 4,
    fontSize: 14,
    color: colors.muted,
  },
  columns: {
    flexDirection: "row",
    gap: spacing.gutter,
  },
  column: {
    flex: 1,
    gap: spacing.gutter,
  },
  header: {
    position: "absolute",
    left: spacing.screen,
    right: spacing.screen,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  titlePill: {
    flex: 1,
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    paddingHorizontal: 18,
    overflow: "hidden",
  },
  titleText: {
    fontSize: 17,
    fontWeight: "700",
    letterSpacing: -0.3,
    color: colors.ink,
  },
});
