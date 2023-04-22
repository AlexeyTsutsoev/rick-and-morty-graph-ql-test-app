import { GetCharacterByIdQuery } from "../../../services/network/__generated__/graphql";
import { CharacterDetailsRenderData, EpisodeMapperArg, EpisodeRenderData } from "../types";

/**
 * function prepare row data to render in UI part
 * return null if some data is broken
 * @param data from query
 * @returns valid data for render
 */
export const mapCharacterDetailsToUI = (data: GetCharacterByIdQuery): CharacterDetailsRenderData | null => {
  if (!data.character) {
    return null;
  }

  const { name, gender, image, species, episode } = data.character;

  if (!name || !gender || !image || !species || !episode) {
    return null;
  }

  return {
    name,
    gender,
    species,
    image,
    episodes: episode.reduce<EpisodeRenderData[]>((acc, current) => {
      const episode = mapEpisodeToUI(current);

      if (!episode) {
        return acc;
      }

      return [...acc, episode];
    }, []),
  };
};

/**
 * function prepare row `Episode` data to render in UI part
 * return null if some data is broken
 * @param data episode from query
 * @returns valid data for render
 */
export const mapEpisodeToUI = (episode: EpisodeMapperArg): EpisodeRenderData | null => {
  if (!episode) {
    return null;
  }

  const { id, name, air_date } = episode;

  if (!id || !name || !air_date) {
    return null;
  }

  return {
    id,
    name,
    date: air_date,
  };
};
