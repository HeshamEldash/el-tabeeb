import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function LabeledContainer({ label, children, labelStyle}) {
  return (
    <View style={styles.container}>
      <AppText style={[styles.lablel, labelStyle]}>{label}: </AppText>

      <View style={styles.contentContainer}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  lablel: {
    fontWeight: 700,
    color: colors.medium,
  },
  container: {
    flexDirection: "row",
    alignItems:"center"
  },
  contentContainer: {
    flexDirection: "row",
  },
});

export default LabeledContainer;
