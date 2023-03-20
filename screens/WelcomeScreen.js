import React from "react";
import { View, StyleSheet, Image } from "react-native";

import AppText from "../components/AppText";
import Button from "../components/Button";
import colors from "../config/colors";
import Screen from "./Screen";

function WelcomeScreen() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <AppText style={styles.tagline}>
          All Your Medical Records In One Place
        </AppText>
      </View>

      <View style={styles.buttonsContainer}>
   
        <Button
          style={[styles.button]}
          title={"Login"}
          onPress={() => console.log("login")}
        />
        <Button
          style={[styles.button, styles.registerButton]}
          title={"Register"}
          textStyle={{ color: colors.green }}
          onPress={() => console.log("register")}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    paddingVertical: 10,
  },
  buttonsContainer: {
    width: 350,
    position: "absolute",
    bottom: "10%",
  },
  logo: {
    width: 250,
    height: 200,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  registerButton: {
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: colors.green,
  },
  screen: {
    alignItems: "center",
  },
  tagline: {
    fontSize: 20,
    fontWeight: "700",
    paddingVertical: 20,
    color: colors.medium,
  },
});

export default WelcomeScreen;
