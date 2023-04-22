import { Episode } from "../../services/network/__generated__/graphql";

export interface CharacterDetailsRenderData {
  name: string;
  image: string;
  species: string;
  gender: string;
  episodes: EpisodeRenderData[];
}

export interface EpisodeRenderData {
  id: string;
  name: string;
  date: string;
}

export type EpisodeMapperArg = Pick<Episode, "air_date" | "id" | "name"> | null;
