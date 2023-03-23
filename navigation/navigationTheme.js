import { DefaultTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";

import colors from "../config/colors";

export default {
  ...DefaultTheme,

  colors: {
    ...DefaultTheme.colors,
    primary: colors.green,
    background: colors.white,
  },
};

export const navigatorStyles = StyleSheet.create({
  headerStyle: {
    backgroundColor: colors.lightGrey,
  },
});

export const screenOptions = {
  headerStyle: navigatorStyles.headerStyle,
  headerShadowVisible: false,
};
