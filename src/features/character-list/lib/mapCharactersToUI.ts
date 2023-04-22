import { GetCharacterListQuery } from "../../../services/network/__generated__/graphql";
import { CharacterMapperArg, CharacterRenderData } from "../types";

/**
 * function prepare row data to render in UI part
 * return null if some data is broken
 * @param data from query
 * @returns valid data for render
 */
export const mapCharactersDataToUI = (data: GetCharacterListQuery): CharacterRenderData[] | null => {
  if (!data.characters) {
    return null;
  }

  const { results } = data.characters;

  if (!results) {
    return null;
  }

  return results.reduce<CharacterRenderData[]>((acc, current) => {
    const character = mapCharacterToUI(current);
    if (character) {
      return [...acc, character];
    }
    return acc;
  }, []);
};

/**
 * function prepare row `Character` data to render in UI part
 * return null if some data is broken
 * @param data character from query
 * @returns valid data for render
 */
export const mapCharacterToUI = (character: CharacterMapperArg): CharacterRenderData | null => {
  if (!character) {
    return null;
  }

  const { id, name, image } = character;

  if (!id || !name || !image) {
    return null;
  }

  return {
    id,
    name,
    image,
  };
};
