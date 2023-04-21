import { getColor } from "../theme";
import { TColorKeys } from "../types";

describe("Tests for color scheme", () => {
  it.each([
    ["background", "#FFFFFF"],
    ["content", "#121212"],
    ["accent", "#05AFC8"],
    ["negative", "#BC0100"],
    ["secondary", "#d9d9d9"],
    ["tertiary", "#edebeb"],
  ])("should be equal for all pair", (input, output) => {
    expect(getColor(input as TColorKeys)).toBe(output);
  });
});
