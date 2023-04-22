import { GetCharacterByIdQuery } from "../../../services/network/__generated__/graphql";
import { CharacterDetailsRenderData, EpisodeRenderData } from "../types";

export const VALID_MOCK_CHARACTER_DETAILS: GetCharacterByIdQuery = {
  character: {
    name: "Morty Smith",
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    species: "Human",
    gender: "Male",
    episode: [
      {
        id: "1",
        name: "Pilot",
        air_date: "December 2, 2013",
      },
      {
        id: "2",
        name: "Lawnmower Dog",
        air_date: "December 9, 2013",
      },
    ],
  },
};

export const INVALID_MOCK_CHARACTER_DETAILS = {
  character: {
    name: "Morty Smith",
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    species: "Human",
    episode: [
      {
        id: "1",
        name: "Pilot",
        air_date: "December 2, 2013",
      },
      {
        name: "Lawnmower Dog",
        air_date: "December 9, 2013",
      },
    ],
  },
};

export const INVALID_MOCK_EPISODE = {
  name: "Lawnmower Dog",
  air_date: "December 9, 2013",
};

export const VALID_MOCK_EPISODE = {
  id: "1",
  name: "Pilot",
  air_date: "December 2, 2013",
};

export const VALID_MOCK_EPISODE_RENDER_DATA: EpisodeRenderData = {
  id: "1",
  name: "Pilot",
  date: "December 2, 2013",
};

export const VALID_MOCK_CHARACTER_DETAILS_RENDER_DATA: CharacterDetailsRenderData = {
  name: "Morty Smith",
  image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  species: "Human",
  gender: "Male",
  episodes: [
    {
      id: "1",
      name: "Pilot",
      date: "December 2, 2013",
    },
    {
      id: "2",
      name: "Lawnmower Dog",
      date: "December 9, 2013",
    },
  ],
};
