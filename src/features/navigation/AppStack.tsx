import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { CharacterDetails } from "../character-details/CharacterDetails";
import { AppStackParamsList } from "./types";
import { CharacterListScreen } from "./screens/CharacterListScreen";

const Stack = createStackNavigator<AppStackParamsList>();

export const AppStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="CharacterList">
      <Stack.Screen name="CharacterList" component={CharacterListScreen} />
      <Stack.Screen name="CharacterDetails" component={CharacterDetails} />
    </Stack.Navigator>
  );
};
