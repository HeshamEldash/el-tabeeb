import React, { useState } from "react";
import {StyleSheet } from "react-native";


import MedicationList from "../components/medications/MedicationList";
import Screen from "./Screen";
import AppText from "../components/AppText";
import Button from "../components/Button";
import MedicationAddScreen from "./MedicationAddScreen";

function RegularMedicationsScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Screen style={styles.screen} dismissKeyboard={false}>
      <AppText style={styles.title}>Repeat Medications</AppText>
      <Button
        style={styles.button}
        title="Add"
        onPress={() => setModalVisible(true)}
      />

      <MedicationList />

      <MedicationAddScreen
        isVisible={modalVisible}
        setIsVisible={setModalVisible}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 60,
    position: "absolute",
    right: "5%",
    top: "-1%",
  },
  screen: {
    paddingHorizontal: 10,
  },
  title: {
    fontWeight: "800",
    fontSize: 20,
    marginBottom: 25,
    textTransform: "capitalize",
  },
});

export default RegularMedicationsScreen;
