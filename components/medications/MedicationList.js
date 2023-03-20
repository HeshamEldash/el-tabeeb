import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import AppText from "../AppText";
import Medication from "./Medication";

const MEDICATIONS = [
  {
    name: "Bisoprolol",
    dose: "1 tablet 3 times a day",
  },
  {
    name: "Bisoprolol",
    dose: "1 tablet 3 times a day",
  },
  {
    name: "Bisoprolol",
    dose: "1 tablet 3 times a day",
  },
  {
    name: "Bisoprolol",
    dose: "1 tablet 3 times a day",
  },
];

function MedicationList(props) {
  return (
    <View style={styles.container}>
      <AppText style={styles.title}>Repeat Medications</AppText>
      <FlatList
        data={MEDICATIONS}
        renderItem={({ item }) => (
          
          
          <Medication name={item.name} dose={item.dose} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontWeight: "800",
    fontSize: 20,
    marginBottom: 25,
    textTransform: "capitalize",
  },
});

export default MedicationList;
