import { Character } from "../../services/network/__generated__/graphql";

export interface CharacterRenderData {
  id: string;
  name: string;
  image: string;
}

export type CharacterMapperArg = Pick<Character, "id" | "image" | "name"> | null;

export type CardPressFunc = (id: string) => void;
