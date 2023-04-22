import * as React from "react";
import { StyleSheet, View } from "react-native";

import { EpisodeRenderData } from "../types";
import { Typography } from "../../../shared/ui/components/atoms";
import { getColor, scaleHeight, scaleWidth } from "../../../shared/ui/theme";

interface EpisodeCardProps {
  episode: EpisodeRenderData;
}

export const EpisodeCard: React.FC<EpisodeCardProps> = ({ episode }) => {
  return (
    <View style={styles.container}>
      <Typography>{episode.name}</Typography>

      <Typography variant="bodySmall">air date: {episode.date}</Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scaleWidth(10),
    paddingVertical: scaleHeight(5),

    borderWidth: 1,
    borderRadius: 6,
    borderColor: getColor("accent"),

    marginBottom: scaleHeight(5),
  },
});
