import React from "react";
import { View, StyleSheet } from "react-native";

function SectionContentWrappr({ children, actions }) {
  return (
    <View style={styles.container}>
      <View style={styles.infoSection}>{children}</View>

      <View style={styles.actionBox}>{actions}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  infoSection: {
    flex: 3,
  },
  actionBox: {
    flex: 1,
    position:"relative",
    top:"-10%",
    

  

  },
  container: {
    flexDirection: "row",
  },
});

export default SectionContentWrappr;
