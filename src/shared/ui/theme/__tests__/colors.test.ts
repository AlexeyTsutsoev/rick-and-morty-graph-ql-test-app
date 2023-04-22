import { getColor } from "../theme";
import { ColorVariant } from "../types";

describe("Tests for color scheme", () => {
  it.each([
    ["background", "#FFFFFF"],
    ["content", "#121212"],
    ["accent", "#05AFC8"],
    ["negative", "#BC0100"],
    ["secondary", "#b5b5b5"],
    ["tertiary", "#e3e1e1"],
  ])("should be equal for all pair", (input, output) => {
    expect(getColor(input as ColorVariant)).toBe(output);
  });
});
