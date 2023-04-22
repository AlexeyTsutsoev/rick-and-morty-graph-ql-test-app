import * as React from "react";

import { CharacterDetailsScreenStackProps } from "../types";
import { CharacterDetailsContainer } from "../../character-details/CharacterDetailsContainer";

export const CharacterDetailsScreen: React.FC<CharacterDetailsScreenStackProps> = ({ route }) => {
  return <CharacterDetailsContainer characterId={route.params.id} />;
};
