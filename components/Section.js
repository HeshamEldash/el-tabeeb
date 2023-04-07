import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import SectionLoader from "./SectionLoader";
function Section({ title, children,description, style , isLoading}) {
  return (
    
    isLoading ? <SectionLoader/> :
    <View style={[styles.container, style]}>
      <View style={styles.infoSection}>
        <AppText style={styles.subtitle}>{title}</AppText>
        <AppText>{description}</AppText>
      </View>
      <View>
        {children}
      </View>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: colors.white,
    width: 360,
    borderRadius: 20,
    padding: 15,
    marginBottom: 20,
  },
  subtitle: {
    fontWeight: "800",
    fontSize: 17,
    marginBottom: 0,
    textTransform:"capitalize"
    
  },
  infoSection: {
    paddingEnd: 5,
    overflow: "hidden",
  },

});

export default Section;
