import React from "react";
import { StyleSheet } from "react-native";
import MedicationList from "../components/medications/MedicationList";
import SectionBox from "../components/SectionBox";

import Screen from "./Screen";

function MedicationsScreen({ navigation }) {
  return (
    <Screen style={styles.screen} dismissKeyboard={false}>
      {/* <MedicationList/> */}

      <SectionBox
        title={"Regular Medications"}
        description={"View Your Regular Medications"}
        buttonText={"Go"}
        buttonAction={() => navigation.navigate("Regular Medications")}
      />

      <SectionBox
        title={"Prescriptions"}
        description={"View YourPrescriptions"}
        buttonText={"Go"}
        buttonAction={() => navigation.navigate("Prescriptions")}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    alignItems:"center"
  },
});

export default MedicationsScreen;
