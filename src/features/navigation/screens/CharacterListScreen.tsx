import * as React from "react";
import { CharacterListScreenStackProps } from "../types";
import { CharacterListContainer } from "../../character-list/CharacterListContainer";

/**
 * Navigation Wrapper for Character list.
 * For separating navigation and buisness logics
 */
export const CharacterListScreen: React.FC<CharacterListScreenStackProps> = ({ navigation }) => {
  const navigateToDetails = React.useCallback(
    (id: string) => {
      navigation.navigate("CharacterDetails", { id });
    },
    [navigation],
  );

  return <CharacterListContainer onCardPress={navigateToDetails} />;
};
