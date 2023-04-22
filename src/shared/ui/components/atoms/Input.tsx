import * as React from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";

import { ColorVariant, getColor, getFontSize, getFontWeight, scaleHeight, scaleWidth } from "../../theme";

import { Typography } from "./Typography";

interface InputProps extends TextInputProps {
  /**
   * string for render on top of TextInput
   */
  title?: string;
  /**
   * overridden prop by `TextInputProps`
   * default value -> `secondary`
   */
  placeholderTextColor?: ColorVariant;
}

export const Input: React.FC<InputProps> = ({ title, placeholderTextColor = "secondary", ...rest }) => {
  return (
    <View style={styles.container}>
      <Typography variant="bodySmall" style={styles.title}>
        {title}
      </Typography>

      <View style={styles.textFieldContainer}>
        <TextInput placeholderTextColor={getColor(placeholderTextColor)} style={styles.text} {...rest} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  textFieldContainer: {
    width: "100%",

    backgroundColor: getColor("tertiary"),
    paddingHorizontal: scaleWidth(12),
    paddingVertical: scaleHeight(10),
    borderRadius: 10,
  },
  text: {
    color: getColor("content"),
    fontWeight: getFontWeight("bodyLarge"),
    fontSize: getFontSize("bodyLarge"),
  },
  title: {
    marginBottom: scaleHeight(5),
  },
});
