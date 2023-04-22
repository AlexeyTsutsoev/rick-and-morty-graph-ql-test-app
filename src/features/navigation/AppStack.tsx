import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AppStackParamsList } from "./types";
import { CharacterListScreen } from "./screens/CharacterListScreen";
import { CharacterDetailsScreen } from "./screens/CharacterDetailsScreen";

const Stack = createStackNavigator<AppStackParamsList>();

export const AppStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="CharacterList">
      <Stack.Screen name="CharacterList" component={CharacterListScreen} />
      <Stack.Screen name="CharacterDetails" component={CharacterDetailsScreen} />
    </Stack.Navigator>
  );
};
