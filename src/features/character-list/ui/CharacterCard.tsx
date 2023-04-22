import * as React from "react";
import { Image, StyleSheet } from "react-native";
import { AnimatedPressable, Typography } from "../../../shared/ui/components/atoms";
import { getColor, scaleHeight, scaleWidth } from "../../../shared/ui/theme";
import { CharacterRenderData, CardPressFunc } from "../types";

interface CharacterCardProps {
  character: CharacterRenderData;
  onPress: CardPressFunc;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ character, onPress }) => {
  const pressHandler = React.useCallback(() => {
    onPress(character.id);
  }, [character.id, onPress]);
  return (
    <AnimatedPressable style={styles.container} onPress={pressHandler}>
      <Image style={styles.image} source={{ uri: character.image }} />

      <Typography variant="headingSmall">{character.name}</Typography>
    </AnimatedPressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",

    paddingHorizontal: scaleWidth(20),
    paddingVertical: scaleHeight(10),

    backgroundColor: getColor("background"),

    borderColor: getColor("accent"),
    borderWidth: 2,
    borderRadius: 4,
    marginBottom: scaleHeight(10),
  },

  image: {
    width: scaleHeight(36),
    height: scaleHeight(36),

    borderRadius: 50,

    marginRight: scaleWidth(12),
  },
});
