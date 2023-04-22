import { useQuery } from "@apollo/client";
import { GetCharacterListQuery, GetCharacterListQueryVariables } from "../../services/network/__generated__/graphql";
import GET_CHARACTER_LIST from "../../services/network/queries/getCharacterList.graphql";

type Args = {
  name?: string;
  page: number;
};

export const useCharacterListQuery = ({ name, page }: Args) => {
  return useQuery<GetCharacterListQuery, GetCharacterListQueryVariables>(GET_CHARACTER_LIST, {
    variables: { name, page },
  });
};
