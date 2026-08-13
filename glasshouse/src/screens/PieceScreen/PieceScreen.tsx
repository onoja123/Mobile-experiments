import { GlassContainer, GlassView } from "expo-glass-effect";
import * as Haptics from "expo-haptics";
import { Image } from "expo-image";
import {
  Link,
  Redirect,
  router,
  Stack,
  useLocalSearchParams,
} from "expo-router";
import { useState } from "react";
import {
  Share,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import GlassIconButton from "@/components/GlassIconButton";
import { ARTWORKS } from "@/data/artworks";
import { getGlassFallbackStyle } from "@/helpers/getGlassFallbackStyle";
import { colors, spacing } from "@/theme";

export default function PieceScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const window = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const [liked, setLiked] = useState(false);
  const artwork = ARTWORKS.find((piece) => piece.id === id);

  if (!artwork) {
    return <Redirect href="/" />;
  }

  // Sizes are known up front, so the zoom lands on the final frame.
  const scale = Math.min(
    window.width / artwork.width,
    window.height / artwork.height,
  );
  const fitted = {
    width: artwork.width * scale,
    height: artwork.height * scale,
  };

  const toggleLike = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setLiked((current) => !current);
  };

  const sharePiece = () => {
    Share.share({ message: `${artwork.title} — ${artwork.artist}` });
  };

  return (
    <View style={styles.container}>
      {/* The zoom transition and a navigation bar fight over the same animation. */}
      <Stack.Screen options={{ headerShown: false }} />

      <Link.AppleZoomTarget>
        <View style={fitted}>
          <Image source={artwork.uri} style={styles.image} contentFit="cover" />
        </View>
      </Link.AppleZoomTarget>

      <View style={[styles.close, { top: insets.top + 6 }]}>
        <GlassIconButton icon="xmark" onPress={() => router.back()} />
      </View>

      <View style={[styles.dock, { bottom: insets.bottom + 16 }]}>
        <GlassContainer spacing={12} style={styles.dockRow}>
          <GlassView style={[styles.infoBar, getGlassFallbackStyle()]}>
            <Text style={styles.title} numberOfLines={1}>
              {artwork.title}
            </Text>
            <Text style={styles.byline} numberOfLines={1}>
              {artwork.artist} · {artwork.year}
            </Text>
          </GlassView>
          <GlassIconButton
            icon={liked ? "heart.fill" : "heart"}
            tint={liked ? "#FF5D73" : colors.ink}
            onPress={toggleLike}
          />
          <GlassIconButton icon="square.and.arrow.up" onPress={sharePiece} />
        </GlassContainer>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.canvas,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  close: {
    position: "absolute",
    right: spacing.screen,
  },
  dock: {
    position: "absolute",
    left: spacing.screen,
    right: spacing.screen,
  },
  dockRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  infoBar: {
    flex: 1,
    borderRadius: 22,
    paddingHorizontal: 16,
    paddingVertical: 11,
    overflow: "hidden",
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.ink,
  },
  byline: {
    marginTop: 2,
    fontSize: 12,
    color: colors.muted,
  },
});
