import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useGet } from "../api/apiFunctions";
import medicationdApi from "../api/medicationdApi";
import useAuth from "../auth/useAuth";
import PrescriptionItem from "../components/medications/PrescriptionItem";

import Screen from "./Screen";

function PrescriptionsScreen(props) {
  const { user } = useAuth();
  const { data, isLoading, isError, error } = useGet(
    ["prescriptions"],
    medicationdApi.getPrescriptions,
    {
      patient_id: user,
    }
  );

  return (
    <Screen style={styles.screen} dismissKeyboard={false}>
      <FlatList
        inverted={true}
        data={data}
        renderItem={({ item }) => <PrescriptionItem prescription={item} />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 5,
  },
});

export default PrescriptionsScreen;
