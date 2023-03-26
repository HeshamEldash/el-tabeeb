import React from "react";
import { View, StyleSheet } from "react-native";
import ContentLoader, { Rect } from "react-content-loader/native";
import colors from "../config/colors";

function SectionLoader({style, ...props}) {
  return (
    <View style={[styles.container, style]}>
      <ContentLoader
        speed={2}
        width={355}
        height={124}
        viewBox="0 0 355 124"
        backgroundColor="#c7c7c7"
        foregroundColor="#dedede"
        {...props}
      >
        <Rect x="0" y="8" rx="3" ry="3" width="88" height="10" />
        <Rect x="1" y="34" rx="3" ry="3" width="200" height="10" />
        <Rect x="1" y="50" rx="3" ry="3" width="200" height="10" />
        <Rect x="1" y="66" rx="3" ry="3" width="200" height="10" />
      </ContentLoader>
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
});

export default SectionLoader;
