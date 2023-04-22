import * as React from "react";
import { ActivityIndicator, StyleProp, StyleSheet, View, ViewStyle } from "react-native";

import { TColorKeys, getColor, scaleHeight } from "../../theme";
import { AnimatedPressable, Typography } from "../atoms";

interface ButtonProps {
  /**
   * set up background color
   * default value -> `accent`
   */
  color?: TColorKeys;
  disabled?: boolean;
  loading?: boolean;
  /**
   * prop for override base styles
   */
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

/**
 * Simple Button for reuse in app
 */
export const Button: React.FC<ButtonProps> = ({ disabled, color = "accent", loading, style, children, onPress }) => {
  const isStringChildren = typeof children === "string";
  const shouldBeDisabled = disabled || loading;

  const styles = React.useMemo(() => {
    return getStyles(color);
  }, [color]);

  return (
    <AnimatedPressable
      onPress={onPress}
      disabled={shouldBeDisabled}
      style={[styles.container, style, shouldBeDisabled && styles.disabled]}>
      {isStringChildren ? (
        <Typography color="background" variant="bodyLarge">
          {children}
        </Typography>
      ) : (
        children
      )}

      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" />
        </View>
      ) : null}
    </AnimatedPressable>
  );
};

const getStyles = (color: TColorKeys) => {
  return StyleSheet.create({
    container: {
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: scaleHeight(10),
      backgroundColor: getColor(color),
      borderRadius: 16,
    },
    disabled: {
      opacity: 0.5,
    },
    loaderContainer: {
      right: 0,
      left: 0,
      top: 0,
      bottom: 0,
      position: "absolute",
      justifyContent: "center",
      alignItems: "center",
    },
  });
};
