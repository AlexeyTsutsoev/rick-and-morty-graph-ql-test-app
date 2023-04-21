/**
 * Palette
 */
export type TColors = {
  content: string;
  background: string;
  negative: string;
  accent: string;
  secondary: string;
  tertiary: string;
};

/**
 * keys for provide for mappers
 */
export type TColorKeys = keyof TColors;

/**
 * possible variants of text
 */
export type TFontVariant = "headingLarge" | "headingSmall" | "bodyLarge" | "bodySmall";

/**
 * React Native StyleSheet doesn't provide type for fontWeight.
 * We have to write our own.
 */
export type TFontWeight =
  | "normal"
  | "bold"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | undefined;
