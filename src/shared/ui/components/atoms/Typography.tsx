import * as React from "react";
import { StyleSheet, Text, TextProps } from "react-native";

import { ColorVariant, FontVariant, getColor, getFontSize, getFontWeight } from "../../theme";

interface TypographyProps extends TextProps {
  /**
   * variant for set up `fontWeight` and `fontSize`
   * default value -> `bodyLarge`
   */
  variant?: FontVariant;
  /**
   * key of color
   * default value -> `content`
   */
  color?: ColorVariant;
}

/**
 * Wrapper on default Text component from React Native.
 */
export const Typography: React.FC<TypographyProps> = ({
  variant = "bodyLarge",
  color = "content",
  style,
  children,
  ...rest
}) => {
  const styles = React.useMemo(() => {
    return getStyles(variant, color);
  }, [variant, color]);

  return (
    <Text style={[styles.textStyle, style]} {...rest}>
      {children}
    </Text>
  );
};

const getStyles = (variant: FontVariant, color: ColorVariant) => {
  return StyleSheet.create({
    textStyle: {
      fontSize: getFontSize(variant),
      fontWeight: getFontWeight(variant),
      color: getColor(color),
    },
  });
};
