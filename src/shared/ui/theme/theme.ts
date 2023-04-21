import { RFValue } from "react-native-responsive-fontsize";

import { COLORS, DEVICE_HEIGHT, DEVICE_WIDTH, LAYOUT_HEIGHT, LAYOUT_WIDTH } from "./constants";
import { TColorKeys, TFontVariant, TFontWeight } from "./types";

/**
 * Get scalable width
 * @param size number
 * @returns scaled width
 */
export const scaleWidth = (size: number) => Math.floor((DEVICE_WIDTH / LAYOUT_WIDTH) * size);

/**
 * Get scalable height
 * @param size number
 * @returns scaled height
 */
export const scaleHeight = (size: number) => Math.floor((DEVICE_HEIGHT / LAYOUT_HEIGHT) * size);

/**
 * get scalable font size
 * @param size pixel
 * @returns scaled fontSize
 */
export const scaleFont = (size: number) => {
  return RFValue(size, LAYOUT_HEIGHT);
};

/**
 * @param key of palette object
 * @returns valid color for render
 */
export const getColor = (key: TColorKeys) => {
  return COLORS[key];
};

/**
 * func provide weight by passed variant
 * @param variant of texts
 * @returns weight for set to `fontWeight` field in StyleSheet.create
 */
export const getFontWeight = (variant: TFontVariant): TFontWeight => {
  switch (variant) {
    case "headingLarge":
      return "800";
    case "headingSmall":
    case "bodyLarge":
      return "600";
    case "bodySmall":
      return "400";
  }
};

/**
 * func provide font size by passed variant
 * @param variant of texts
 * @returns size for set to `fontSize` field in StyleSheet.create
 */
export const getFontSize = (variant: TFontVariant): number => {
  switch (variant) {
    case "headingLarge":
      return scaleFont(24);
    case "headingSmall":
      return scaleFont(22);
    case "bodyLarge":
      return scaleFont(18);
    case "bodySmall":
      return scaleFont(14);
  }
};
