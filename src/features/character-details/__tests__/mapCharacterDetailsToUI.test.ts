import {
  INVALID_MOCK_CHARACTER_DETAILS,
  INVALID_MOCK_EPISODE,
  VALID_MOCK_CHARACTER_DETAILS,
  VALID_MOCK_CHARACTER_DETAILS_RENDER_DATA,
  VALID_MOCK_EPISODE,
  VALID_MOCK_EPISODE_RENDER_DATA,
} from "../__mocks__/mockCharacterDetails";
import { mapCharacterDetailsToUI, mapEpisodeToUI } from "../lib/mapCharacterDetailsToUI";

describe("Tests for ui mappers", () => {
  it("should return valid result", () => {
    expect(mapCharacterDetailsToUI(VALID_MOCK_CHARACTER_DETAILS)).toStrictEqual(
      VALID_MOCK_CHARACTER_DETAILS_RENDER_DATA,
    );
  });

  it("should be empty array", () => {
    expect(mapCharacterDetailsToUI(INVALID_MOCK_CHARACTER_DETAILS)).toBeNull();
  });

  it("should be equals", () => {
    expect(mapEpisodeToUI(VALID_MOCK_EPISODE)).toStrictEqual(VALID_MOCK_EPISODE_RENDER_DATA);
  });

  it("should be null", () => {
    expect(mapEpisodeToUI(INVALID_MOCK_EPISODE)).toBeNull();
  });
});
