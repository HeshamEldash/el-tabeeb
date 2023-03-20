import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function Button({ title, onPress, style, textStyle }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <AppText style={[styles.buttonText, textStyle]}>{title} </AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    paddingVertical:5,
    width: "100%",
    marginVertical: 10,
  },
  buttonText: {
    color:colors.white
  },
});

export default Button;
