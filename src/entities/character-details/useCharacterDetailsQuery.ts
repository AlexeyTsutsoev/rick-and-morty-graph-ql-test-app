import { useQuery } from "@apollo/client";

import { GetCharacterByIdQuery, GetCharacterByIdQueryVariables } from "../../services/network/__generated__/graphql";
import GET_CHARACTER_BY_ID from "../../services/network/queries/getCharacterById.graphql";

type Args = {
  id: string;
};

export const useCharacterDetailsQuery = ({ id }: Args) => {
  return useQuery<GetCharacterByIdQuery, GetCharacterByIdQueryVariables>(GET_CHARACTER_BY_ID, { variables: { id } });
};
