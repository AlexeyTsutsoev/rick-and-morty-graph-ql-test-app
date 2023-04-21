import * as React from "react";
import { StyleSheet, Text, TextProps } from "react-native";

import { TColorKeys, TFontVariant, getColor, getFontSize, getFontWeight } from "../../theme";

interface TypographyProps extends TextProps {
  /**
   * variant for set up `fontWeight` and `fontSize`
   * default value -> `bodyLarge`
   */
  variant?: TFontVariant;
  /**
   * key of color
   * default value -> `content`
   */
  color?: TColorKeys;
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

const getStyles = (variant: TFontVariant, color: TColorKeys) => {
  return StyleSheet.create({
    textStyle: {
      fontSize: getFontSize(variant),
      fontWeight: getFontWeight(variant),
      color: getColor(color),
    },
  });
};
