/**
 * Palette
 */
export type Palette = {
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
export type ColorVariant = keyof Palette;

/**
 * possible variants of text
 */
export type FontVariant = "headingLarge" | "headingSmall" | "bodyLarge" | "bodySmall";

/**
 * React Native StyleSheet doesn't provide type for fontWeight.
 * We have to write our own.
 */
export type FontWeight =
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
