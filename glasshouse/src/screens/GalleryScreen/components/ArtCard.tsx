import { GlassView } from "expo-glass-effect";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { getGlassFallbackStyle } from "@/helpers/getGlassFallbackStyle";
import { colors } from "@/theme";

import { ArtCardProps } from "./ArtCard.types";

export default function ArtCard({ artwork, width }: ArtCardProps) {
  const height = Math.round(width * (artwork.height / artwork.width));
  // Link.AppleZoom's native clone rejects an array of styles, so flatten.
  const image = StyleSheet.flatten([styles.image, { width, height }]);

  return (
    <Link
      href={{ pathname: "/piece/[id]", params: { id: artwork.id } }}
      asChild
    >
      <Pressable style={{ width }}>
        <View style={styles.frame}>
          {/* Only the plain image flies — glass inside the zoom clone makes the dismissal drag stutter. */}
          <Link.AppleZoom>
            <Image
              source={artwork.uri}
              style={image}
              contentFit="cover"
              transition={250}
            />
          </Link.AppleZoom>
          <GlassView
            tintColor={colors.scrim}
            style={[
              styles.chip,
              getGlassFallbackStyle() && styles.chipFallback,
            ]}
          >
            <Text style={styles.chipText} numberOfLines={1}>
              {artwork.title}
            </Text>
          </GlassView>
        </View>
        <Text style={styles.byline} numberOfLines={1}>
          {artwork.artist} · {artwork.year}
        </Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  frame: {
    borderRadius: 22,
  },
  image: {
    borderRadius: 22,
    backgroundColor: colors.cardFill,
  },
  chip: {
    position: "absolute",
    left: 10,
    bottom: 10,
    maxWidth: "80%",
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 7,
    overflow: "hidden",
  },
  chipFallback: {
    backgroundColor: colors.scrimSolid,
  },
  chipText: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.onScrim,
  },
  byline: {
    marginTop: 8,
    marginLeft: 4,
    fontSize: 12,
    color: colors.muted,
  },
});
