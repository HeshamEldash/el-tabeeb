import React from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MedicationsScreen from "../screens/MedicationsScreen";
import SectionsScreen from "../screens/SectionsScreen";

import { screenOptions } from "./navigationTheme";
import MedicationList from "../components/medications/MedicationList";
import RegularMedicationsScreen from "../screens/RegularMedicationsScreen";
import PrescriptionsScreen from "../screens/PrescriptionsScreen";
import PrescriptionScreen from "../screens/PrescriptionScreen";

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
      <Stack.Screen name={"Regular Medications"} component={RegularMedicationsScreen} />
      <Stack.Screen name={"Prescriptions"} component={PrescriptionsScreen} />
      <Stack.Screen name={"Prescription"} component={PrescriptionScreen} />
    </Stack.Navigator>
  );
}


export default SectionsNavigator;
