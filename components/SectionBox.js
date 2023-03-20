import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import Button from "./Button";

function SectionBox({ buttonText, buttonAction,description, title, style }) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.infoSection}>
        <AppText style={styles.subtitle}>{title}</AppText>
        <AppText>{description}</AppText>
      </View>

      <View style={styles.actionSection}>
        <Button title={buttonText} onPress={buttonAction}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.white,
    height: 110,
    width: 360,
    borderRadius: 20,
    padding: 15,
    marginBottom:20,
  },
  subtitle: {
    fontWeight: "800",
    fontSize: 20,
    marginBottom: 5,
    textTransform:"capitalize"
    
  },
  infoSection: {
    flex: 3,
    paddingEnd: 5,
    overflow: "hidden",
  },
  actionSection: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
});

export default SectionBox;
