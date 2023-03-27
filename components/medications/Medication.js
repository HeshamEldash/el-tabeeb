import React, { useRef } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import colors from "../../config/colors";
import AppText from "../AppText";

function Medication({ medication }) {
  const swipeableRef = useRef();

  const renderRightActions = (progress, dragX) => {
    return (
      <TouchableOpacity
        style={[styles.actionsBox]}
        onPress={() => swipeableRef.current?.close()}
      >
        <View>
          <AppText>Delete</AppText>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions} ref={swipeableRef}>
        <View style={styles.container}>
          <View style={styles.detailBox}>
            <AppText style={styles.name}>{medication?.name}</AppText>
            <AppText style={styles.dose}>{medication?.dose}</AppText>
            <AppText style={styles.dose}>{medication?.date_created}</AppText>
          </View>
        </View>
    </Swipeable>
 </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  actionsBox: {
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.danger,
    borderRadius: 10,
    marginBottom: 5,
  },

  container: {
    flexDirection: "row",
    backgroundColor: colors.white,
    paddingVertical: 5,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginBottom: 5,
    marginRight: 10,
  },
  name: {
    fontWeight: "700",
    fontSize: 15,
    marginBottom: 5,
    textTransform: "capitalize",
  },
  dose: {
    fontSize: 15,
  },
  detailBox: {
    flex: 3,
  },
});

export default Medication;
