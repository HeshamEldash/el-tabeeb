import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import ProfileRegistrationScreen from "../screens/ProfileRegistrationScreen";

import { StyleSheet } from "react-native";
import colors from "../config/colors";
import { screenOptions } from "./navigationTheme";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator
    screenOptions={screenOptions}
  >
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegistrationScreen} />
    <Stack.Screen
      name="ProfileRegistration"
      component={ProfileRegistrationScreen}
      options={{ title: "Profile Details" }}
    />
  </Stack.Navigator>
);

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: colors.lightGrey,
  },
});

export default AuthNavigator;
