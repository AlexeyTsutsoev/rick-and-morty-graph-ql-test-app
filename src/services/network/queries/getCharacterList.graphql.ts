import { gql } from "@apollo/client";

const GET_CHARACTER_LIST = gql(`
  query GetCharacterList($page: Int!, $name: String) {
    characters(page: $page, filter: { name: $name }) {
      results {
        id,
        image,
        name
      }
      info {
        count
        pages
      }
    }
  }
`);

export default GET_CHARACTER_LIST;
