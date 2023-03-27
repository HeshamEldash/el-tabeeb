import React from "react";
import { BulletList } from "react-content-loader/native";
import {StyleSheet, FlatList } from "react-native";
import { useGet } from "../api/apiFunctions";
import medicationdApi from "../api/medicationdApi";
import useAuth from "../auth/useAuth";
import AppText from "../components/AppText";
import PrescriptionItem from "../components/medications/PrescriptionItem";

import Screen from "./Screen";

function PrescriptionsScreen() {
  const { user } = useAuth();
  const { data, isLoading, isError, error } = useGet(
    ["prescriptions"],
    medicationdApi.getPrescriptions,
    {
      patient_id: user,
    }
  );

  if (isLoading) return <BulletList />;
  

  
  return (
    <Screen style={styles.screen} dismissKeyboard={false}>
      {data.length === 0? <AppText>You don't have any prescriptions</AppText> :
      <FlatList
        inverted={true}
        data={data}
        renderItem={({ item }) => <PrescriptionItem prescription={item} />}
      />}
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 5,
  },
});

export default PrescriptionsScreen;
