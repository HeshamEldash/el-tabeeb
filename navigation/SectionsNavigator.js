import React from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MedicationsScreen from "../screens/MedicationsScreen";
import SectionsScreen from "../screens/SectionsScreen";

import colors from "../config/colors";
import { screenOptions } from "./navigationTheme";

const Stack = createNativeStackNavigator();

function SectionsNavigator() {
  return (
    <Stack.Navigator
      screenOptions={screenOptions}
    >
      <Stack.Screen
        name={"SectionsScreen"}
        component={SectionsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name={"Medications"} component={MedicationsScreen} />
    </Stack.Navigator>
  );
}


export default SectionsNavigator;
