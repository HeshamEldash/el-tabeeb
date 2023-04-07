import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function AppModal({ children, isVisible,setIsVisible, title, ...otherProps }) {
  return (
    <Modal
      visible={isVisible}
      transparent={true}
      onRequestClose={() => setIsVisible(!isVisible)}
      animationType="fade"
      {...otherProps}
    >
      <View style={styles.modal}></View>
      <View style={styles.modalContent}>
        <AppText style={styles.modalTitle}>{title}</AppText>
        {children}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: colors.light,
    opacity: 0.7,
    flex: 1,
  },
  modalContent: {
    position: "absolute",
    bottom: 20,
    width: "95%",
    backgroundColor: colors.white,
    alignItems: "center",
    alignSelf: "center",
    minHeight: 400,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.lightGrey,
    paddingHorizontal: 10,
  },
  modalTitle: {
    fontWeight: "800",
    fontSize: 20,
    marginBottom: 25,
    textTransform: "capitalize",
    margin: 10,
  },
});

export default AppModal;
