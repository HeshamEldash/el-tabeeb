import React from "react";
import { View, StyleSheet, Modal } from "react-native";

function AppModal({ children, ...otherProps }) {
  return <Modal style={styles.container} {...otherProps} >
  
  {children}</Modal>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"yellow"
  },
});

export default AppModal;
