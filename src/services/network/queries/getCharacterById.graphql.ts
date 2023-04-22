import { gql } from "@apollo/client";

const GET_CHARACTER_BY_ID = gql(`
  query GetCharacterById($id: ID!) {
    character(id: $id) {
      id,
      name,
      episode {
        id
        name
        air_date
      }
    }
  }
`);

export default GET_CHARACTER_BY_ID;
