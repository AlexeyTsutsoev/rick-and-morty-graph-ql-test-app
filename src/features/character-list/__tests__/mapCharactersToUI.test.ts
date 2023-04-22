import {
  INVALID_MOCK_CHARACTER,
  INVALID_MOCK_CHARACTER_RESPONSE,
  VALID_MOCK_CHARACTER,
  VALID_MOCK_CHARACTER_RESPONSE,
  VALID_MOCK_RENDER_DATA,
} from "../__mocks__/mockCharacterListData";
import { mapCharacterToUI, mapCharactersDataToUI } from "../lib/mapCharactersToUI";

describe("Tests for ui mappers", () => {
  it("should return valid result", () => {
    expect(mapCharactersDataToUI(VALID_MOCK_CHARACTER_RESPONSE)).toStrictEqual(VALID_MOCK_RENDER_DATA);
  });

  it("should be empty array", () => {
    expect(mapCharactersDataToUI(INVALID_MOCK_CHARACTER_RESPONSE)).toStrictEqual([]);
  });

  it("sholud be equals", () => {
    expect(mapCharacterToUI(VALID_MOCK_CHARACTER)).toStrictEqual(VALID_MOCK_CHARACTER);
  });

  it("should be null", () => {
    expect(mapCharacterToUI(INVALID_MOCK_CHARACTER)).toBeNull();
  });
});
