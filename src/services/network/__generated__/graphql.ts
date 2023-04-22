/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export enum CacheControlScope {
  Private = "PRIVATE",
  Public = "PUBLIC",
}

export type Character = {
  __typename?: "Character";
  created?: Maybe<Scalars["String"]>;
  episode: Array<Maybe<Episode>>;
  gender?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  image?: Maybe<Scalars["String"]>;
  location?: Maybe<Location>;
  name?: Maybe<Scalars["String"]>;
  origin?: Maybe<Location>;
  species?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
};

export type Characters = {
  __typename?: "Characters";
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Character>>>;
};

export type Episode = {
  __typename?: "Episode";
  air_date?: Maybe<Scalars["String"]>;
  characters: Array<Maybe<Character>>;
  created?: Maybe<Scalars["String"]>;
  episode?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
};

export type Episodes = {
  __typename?: "Episodes";
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Episode>>>;
};

export type FilterCharacter = {
  gender?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  species?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
};

export type FilterEpisode = {
  episode?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type FilterLocation = {
  dimension?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
};

export type Info = {
  __typename?: "Info";
  count?: Maybe<Scalars["Int"]>;
  next?: Maybe<Scalars["Int"]>;
  pages?: Maybe<Scalars["Int"]>;
  prev?: Maybe<Scalars["Int"]>;
};

export type Location = {
  __typename?: "Location";
  created?: Maybe<Scalars["String"]>;
  dimension?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  residents: Array<Maybe<Character>>;
  type?: Maybe<Scalars["String"]>;
};

export type Locations = {
  __typename?: "Locations";
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Location>>>;
};

export type Query = {
  __typename?: "Query";
  character?: Maybe<Character>;
  characters?: Maybe<Characters>;
  charactersByIds?: Maybe<Array<Maybe<Character>>>;
  episode?: Maybe<Episode>;
  episodes?: Maybe<Episodes>;
  episodesByIds?: Maybe<Array<Maybe<Episode>>>;
  location?: Maybe<Location>;
  locations?: Maybe<Locations>;
  locationsByIds?: Maybe<Array<Maybe<Location>>>;
};

export type QueryCharacterArgs = {
  id: Scalars["ID"];
};

export type QueryCharactersArgs = {
  filter?: InputMaybe<FilterCharacter>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryCharactersByIdsArgs = {
  ids: Array<Scalars["ID"]>;
};

export type QueryEpisodeArgs = {
  id: Scalars["ID"];
};

export type QueryEpisodesArgs = {
  filter?: InputMaybe<FilterEpisode>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryEpisodesByIdsArgs = {
  ids: Array<Scalars["ID"]>;
};

export type QueryLocationArgs = {
  id: Scalars["ID"];
};

export type QueryLocationsArgs = {
  filter?: InputMaybe<FilterLocation>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryLocationsByIdsArgs = {
  ids: Array<Scalars["ID"]>;
};

export type GetCharacterByIdQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type GetCharacterByIdQuery = {
  __typename?: "Query";
  character?: {
    __typename?: "Character";
    name?: string | null;
    image?: string | null;
    species?: string | null;
    gender?: string | null;
    episode: Array<{
      __typename?: "Episode";
      id?: string | null;
      name?: string | null;
      air_date?: string | null;
    } | null>;
  } | null;
};

export type GetCharacterListQueryVariables = Exact<{
  page: Scalars["Int"];
  name?: InputMaybe<Scalars["String"]>;
}>;

export type GetCharacterListQuery = {
  __typename?: "Query";
  characters?: {
    __typename?: "Characters";
    results?: Array<{
      __typename?: "Character";
      id?: string | null;
      image?: string | null;
      name?: string | null;
    } | null> | null;
    info?: { __typename?: "Info"; count?: number | null; pages?: number | null } | null;
  } | null;
};

export const GetCharacterByIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetCharacterById" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "ID" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "character" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "image" } },
                { kind: "Field", name: { kind: "Name", value: "species" } },
                { kind: "Field", name: { kind: "Name", value: "gender" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "episode" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "air_date" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetCharacterByIdQuery, GetCharacterByIdQueryVariables>;
export const GetCharacterListDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetCharacterList" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "page" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "Int" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "name" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "characters" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "page" },
                value: { kind: "Variable", name: { kind: "Name", value: "page" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "name" },
                      value: { kind: "Variable", name: { kind: "Name", value: "name" } },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "results" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "image" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "info" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "count" } },
                      { kind: "Field", name: { kind: "Name", value: "pages" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetCharacterListQuery, GetCharacterListQueryVariables>;
