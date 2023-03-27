import React from "react";
import Constants from "expo-constants";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import colors from "../config/colors";

function Screen({ children, style, dismissKeyboard = true }) {
  const handleKeyboard = () => {
    if (!dismissKeyboard) return null;
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView style={[styles.screen, style]}>
      {dismissKeyboard ? (
        <TouchableWithoutFeedback onPress={handleKeyboard}>
          <View style={[styles.view, style]}>{children}</View>
        </TouchableWithoutFeedback>
      ) : (
        <View style={[styles.view, style]}>{children}</View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: colors.lightGrey,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
