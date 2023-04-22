import * as React from "react";
import { useCharacterListQuery } from "../../../entities/character-list/useCharacterListQuery";
import { mapCharactersDataToUI } from "../lib/mapCharactersToUI";
import { CharacterRenderData } from "../types";

export const useCharacterList = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [characters, setCharacters] = React.useState<CharacterRenderData[]>([]);

  const { data, loading, error, refetch } = useCharacterListQuery({ name: searchValue, page: currentPage });

  React.useEffect(() => {
    if (!data) {
      return;
    }

    const result = mapCharactersDataToUI(data);

    if (!result) {
      return;
    }

    setCharacters(prev => [...prev, ...result]);
  }, [data]);

  const onChangeSearch = React.useCallback(
    (text: string) => {
      setCharacters([]);
      setCurrentPage(1);
      setSearchValue(text.trim());
    },
    [setCharacters, setSearchValue, setCurrentPage],
  );

  const onIncreasePage = React.useCallback(() => {
    if (loading) {
      return;
    }

    if (!data?.characters?.info?.pages) {
      return;
    }

    if (data.characters.info.pages === currentPage) {
      return;
    }

    setCurrentPage(prev => ++prev);
  }, [setCurrentPage, currentPage, data, loading]);

  return {
    characters,
    onIncreasePage,
    onChangeSearch,
    error,
    refetch,
    loading,
    searchValue,
  };
};
