import { Dimensions } from "react-native";

import { TColors } from "./types";

const window = Dimensions.get("window");

/**
 * width by Dimensions
 */
export const DEVICE_WIDTH = window.width;

/**
 * height by Dimensions
 */
export const DEVICE_HEIGHT = window.height;

/**
 * standard figma width frame
 */
export const LAYOUT_WIDTH = 375;

/**
 * standard figma height frame
 */
export const LAYOUT_HEIGHT = 812;

/**
 * Base colors
 */
export const COLORS: TColors = {
  /**
   * main color for content
   */
  content: "#121212",
  /**
   * main background color
   */
  background: "#FFFFFF",
  /**
   * primary accent app color
   */
  accent: "#05AFC8",
  /**
   * for show failed actions
   */
  negative: "#BC0100",
  /**
   * color for render disabled bg
   */
  secondary: "#b5b5b5",
  /**
   * color for render disabled content
   */
  tertiary: "#e3e1e1",
};
