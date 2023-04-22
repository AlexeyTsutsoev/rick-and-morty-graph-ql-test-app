import * as React from "react";
import { Image, StyleSheet, View } from "react-native";

import { CharacterDetailsRenderData } from "../types";
import { Typography } from "../../../shared/ui/components/atoms";
import { getColor, scaleHeight, scaleWidth } from "../../../shared/ui/theme";

interface DetailsHeaderProps {
  details: CharacterDetailsRenderData;
}

const detailsArray: (keyof CharacterDetailsRenderData)[] = ["gender", "species"];

export const DetailsHeader: React.FC<DetailsHeaderProps> = ({ details }) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Image style={styles.image} source={{ uri: details.image }} />

        <Typography variant="headingLarge">{details.name}</Typography>
      </View>

      {detailsArray.map(detail => {
        return (
          <View style={styles.rowContainer} key={detail}>
            <Typography color="secondary">{detail}: </Typography>

            <Typography>{details[detail]}</Typography>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: scaleHeight(10),
    borderBottomColor: getColor("accent"),
    borderBottomWidth: 1,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: scaleHeight(10),
  },
  image: {
    width: scaleHeight(80),
    height: scaleHeight(80),

    borderRadius: 50,

    marginRight: scaleWidth(20),
  },
});
