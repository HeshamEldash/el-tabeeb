import { StyleSheet, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import SectionsScreen from "./screens/SectionsScreen.js";
import StartScreen from "./screens/StartScreen.js";
import MedicationsScreen from "./screens/MedicationsScreen.js";
import ProfileScreen from "./screens/ProfileScreen.js";
import WelcomeScreen from "./screens/WelcomeScreen.js";
import AppTextInput from "./components/AppTextInput.js";
import Screen from "./screens/Screen.js";
import LoginScreen from "./screens/LoginScreen.js";
import RegistrationScreen from "./screens/RegistrationScreen.js";
import ProfileRegistrationScreen from "./screens/ProfileRegistrationScreen.js";
import AppPicker from "./components/AppPicker.js";
import AppDatePicker from "./components/AppDatePicker.js";
import { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigator from "./navigation/AuthNavigator.js";
import navigationTheme from "./navigation/navigationTheme.js";
import AppNavigator from "./navigation/AppNavigator.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme} >

      {/* <AuthNavigator/> */}
      <AppNavigator/>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  screen: {
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    backgroundColor: "white",
    width: 300,
    height: 70,
  },
});
