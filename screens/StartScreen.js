import Lottieview from "lottie-react-native";

import React from "react";
import { StyleSheet } from "react-native";

import Screen from "./Screen";

function StartScreen(props) {
  return (
    <Screen>
      <Lottieview
        source={require("../assets/animations/done.json")}
        autoPlay
        loop={true}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default StartScreen;
