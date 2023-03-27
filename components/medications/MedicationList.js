import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { BulletList } from "react-content-loader/native";

import { useGet } from "../../api/apiFunctions";
import useAuth from "../../auth/useAuth";

import AppText from "../AppText";
import Medication from "./Medication";
import medicationdApi from "../../api/medicationdApi";

function MedicationList(props) {
  const { user } = useAuth();
  const { data, isLoading, isError, error } = useGet(
    ["regular-medications"],
    medicationdApi.getRegularMedications,
    { patient_id: user }
  );

  if (isLoading) return <BulletList />;

  return (
    <View style={styles.container}>
      <AppText style={styles.title}>Repeat Medications</AppText>
      {data.length === 0 ? (
        <AppText>You don't have any medications</AppText>
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => <Medication key={item} medication={item} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "95%",
  },

  title: {
    fontWeight: "800",
    fontSize: 20,
    marginBottom: 25,
    textTransform: "capitalize",
  },
});

export default MedicationList;
