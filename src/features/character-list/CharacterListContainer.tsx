import * as React from "react";
import { View, StyleSheet } from "react-native";

import { getColor, scaleHeight, scaleWidth } from "../../shared/ui/theme";
import { Input } from "../../shared/ui/components/atoms";
import { CardPressFunc } from "./types";
import { CharacterList } from "./ui/CharacterList";
import { useCharacterList } from "./hooks/useCharacterList";

interface CharacterListProps {
  onCardPress: CardPressFunc;
}

export const CharacterListContainer: React.FC<CharacterListProps> = ({ onCardPress }) => {
  const { characters, onIncreasePage, onChangeSearch, error, refetch, loading, searchValue } = useCharacterList();

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <Input value={searchValue} onChangeText={onChangeSearch} title="Search Character" placeholder="Enter name" />
      </View>

      <CharacterList
        onCardPress={onCardPress}
        data={characters}
        increasePage={onIncreasePage}
        isLoading={loading}
        isError={Boolean(error)}
        onRefetch={refetch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: getColor("background"),
    paddingHorizontal: scaleWidth(10),
    flex: 1,
  },
  input: {
    marginBottom: scaleHeight(20),
  },
});
