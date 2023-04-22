import { StackScreenProps } from "@react-navigation/stack";

/**
 * Config for App Stack
 */
export type AppStackParamsList = {
  CharacterList: undefined;
  CharacterDetails: {
    id: string;
  };
};

/**
 * Props for CharacterList screen with types for navigation
 */
export type CharacterListScreenStackProps = StackScreenProps<AppStackParamsList, "CharacterList">;

/**
 * Props for CharacterDetails screen with types for navigation
 */
export type CharacterDetailsScreenStackProps = StackScreenProps<AppStackParamsList, "CharacterDetails">;
