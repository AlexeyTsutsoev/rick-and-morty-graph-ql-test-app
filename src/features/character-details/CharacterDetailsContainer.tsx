import * as React from "react";

import { useCharacterDetailsQuery } from "../../entities/character-details/useCharacterDetailsQuery";
import { mapCharacterDetailsToUI } from "./lib/mapCharacterDetailsToUI";

import { CharacterDetails } from "./ui/CharacterDetails";

interface CharacterDetailsProps {
  characterId: string;
}

export const CharacterDetailsContainer: React.FC<CharacterDetailsProps> = ({ characterId }) => {
  const { data, loading, error, refetch } = useCharacterDetailsQuery({ id: characterId });

  const renderData = React.useMemo(() => {
    if (!data) {
      return null;
    }

    return mapCharacterDetailsToUI(data);
  }, [data]);

  return <CharacterDetails data={renderData} isError={Boolean(error)} isLoading={loading} onRefetch={refetch} />;
};
