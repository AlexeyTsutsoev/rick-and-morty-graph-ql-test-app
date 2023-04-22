import { getFontWeight } from "../theme";
import { FontVariant } from "../types";

describe("Tests for font weight fabric", () => {
  it.each([
    ["headingLarge", "800"],
    ["headingSmall", "600"],
    ["bodyLarge", "600"],
    ["bodySmall", "400"],
  ])("should be equal for all pair", (input, output) => {
    expect(getFontWeight(input as FontVariant)).toBe(output);
  });
});
