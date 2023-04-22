import * as React from "react";
import { FlatList, StyleSheet } from "react-native";

import { CharacterRenderData, CardPressFunc } from "../types";
import { ErrorState } from "../../../shared/ui/components/organisms";
import { CharacterCard } from "./CharacterCard";
import { scaleHeight } from "../../../shared/ui/theme";
import { CharactersSkeleton } from "./CharactersSkeleton";

interface CharacterListProps {
  data: CharacterRenderData[];
  isLoading: boolean;
  isError: boolean;
  increasePage: () => void;
  onRefetch: () => void;
  onCardPress: CardPressFunc;
}

export const CharacterList: React.FC<CharacterListProps> = ({
  data,
  isLoading,
  isError,
  onCardPress,
  increasePage,
  onRefetch,
}) => {
  if (!data.length && isLoading) {
    return <CharactersSkeleton />;
  }

  if (isError) {
    return <ErrorState onRefetch={onRefetch} />;
  }

  return (
    <FlatList
      data={data}
      keyExtractor={({ id }) => id}
      contentContainerStyle={styles.contentContainer}
      renderItem={({ item }) => <CharacterCard character={item} onPress={onCardPress} />}
      showsVerticalScrollIndicator={false}
      onEndReached={increasePage}
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: scaleHeight(20),
  },
});
