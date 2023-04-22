import { GetCharacterListQuery } from "../../../services/network/__generated__/graphql";
import { CharacterRenderData } from "../types";

export const VALID_MOCK_CHARACTER_RESPONSE: GetCharacterListQuery = {
  characters: {
    info: {
      count: 826,
      pages: 42,
    },
    results: [
      {
        name: "Rick Sanchez",
        id: "1",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      },
      {
        name: "Morty Smith",
        id: "2",
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      },
    ],
  },
};

export const INVALID_MOCK_CHARACTER_RESPONSE: GetCharacterListQuery = {
  characters: {
    results: [
      {
        id: "1",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      },
      {
        name: "Morty Smith",
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      },
    ],
  },
};

export const INVALID_MOCK_CHARACTER = {
  name: "Morty Smith",
  image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
};

export const VALID_MOCK_CHARACTER = {
  name: "Morty Smith",
  id: "2",
  image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
};

export const VALID_MOCK_RENDER_DATA: CharacterRenderData[] = [
  {
    name: "Rick Sanchez",
    id: "1",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  },
  {
    name: "Morty Smith",
    id: "2",
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  },
];
