import React from "react";
import { View, StyleSheet, FlatList } from "react-native";


import AppText from "../components/AppText";
import LabeledContainer from "../components/LabeledContainer";
import appDateTime from "../utility/appDateTime";
import Screen from "./Screen";

function PrescriptionScreen({ route }) {
  const prescription = route.params;
  return (
    <Screen style={styles.screen}>
      <LabeledContainer label={"Prescriber Name"} labelStyle={styles.label}>
        <AppText style={styles.label}>{prescription?.prescriber_name}</AppText>
      </LabeledContainer>
      <LabeledContainer label={"Provider Name "} labelStyle={styles.label}>
        <AppText style={styles.label}>{prescription?.provider_name}</AppText>
      </LabeledContainer>

      <LabeledContainer
        label={"Date Of The Prescription"}
        labelStyle={styles.label}
      >
        <AppText style={styles.label}>
          {appDateTime.toDate(new Date(prescription.date_created))}
        </AppText>
      </LabeledContainer>
      <LabeledContainer
        labelStyle={styles.label}
        label={"Medications"}
      ></LabeledContainer>

      <FlatList
      style={styles.list}
        data={prescription?.medications}
        renderItem={({ item }) => (
          <View style={styles.medicationContainer}>
            <LabeledContainer label={"Medication Name"}>
              <AppText>{item.name}</AppText>
            </LabeledContainer>
            <LabeledContainer label={"Dose"}>
              <AppText>{item.dose}</AppText>
            </LabeledContainer>


            
          </View>
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 20,
  },
  list:{
    paddingHorizontal:15,
    marginTop:10,
  },
  medicationContainer:{
    marginBottom:10,
  }
});

export default PrescriptionScreen;
