import * as React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import { CharacterDetailsRenderData } from "../types";
import { ErrorState } from "../../../shared/ui/components/organisms";
import { keyExtractor } from "../../../shared/utils";

import { DetailsHeader } from "./DetailsHeader";
import { EpisodeCard } from "./EpisodeCard";
import { getColor, scaleHeight, scaleWidth } from "../../../shared/ui/theme";
import { DetailsSkeleton } from "./DetailsSkeleton";

interface CharacterDetailsProps {
  data: CharacterDetailsRenderData | null;
  isLoading: boolean;
  isError: boolean;
  onRefetch: () => void;
}

export const CharacterDetails: React.FC<CharacterDetailsProps> = ({ data, isLoading, isError, onRefetch }) => {
  if (isLoading) {
    return (
      <View style={[styles.container, styles.loaderContainer]}>
        <DetailsSkeleton />
      </View>
    );
  }

  if (!data || isError) {
    return <ErrorState onRefetch={onRefetch} />;
  }

  return (
    <FlatList
      contentContainerStyle={[styles.container, styles.contentContainer]}
      keyExtractor={keyExtractor}
      data={data.episodes}
      ListHeaderComponent={<DetailsHeader details={data} />}
      renderItem={({ item }) => <EpisodeCard episode={item} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: getColor("background"),
  },
  contentContainer: {
    paddingHorizontal: scaleWidth(20),
    paddingVertical: scaleHeight(10),
  },
  loaderContainer: {
    flex: 1,
  },
});
