import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { BulletList } from "react-content-loader/native";

import { useGet } from "../../api/apiFunctions";
import useAuth from "../../auth/useAuth";

import AppText from "../AppText";
import Medication from "./Medication";
import medicationdApi from "../../api/medicationdApi";

function MedicationList(props) {
  const {profileId} = useAuth();

  const { data:prescribedRegularMeds, isLoading:isLoading, isError, error } = useGet(
    ["prescribed-regular-medications"],
    medicationdApi.getRegularMedications,
    { patient_id: profileId}
  );

  const { data:patientAddedMeds, isLoading:patientAddedMedsisLoading, isError:patientAddedMedsisLoadingisError, error:patientAddedMedsError } = useGet(
    ["patient-regular-medications"],
    medicationdApi.getPatientAddedMedication,
    { patient_id: profileId }
  );

  if (isLoading || patientAddedMedsisLoading) return <BulletList />;


  const data = [...prescribedRegularMeds, ...patientAddedMeds]


  return (
    <View style={styles.container}>
      {data?.length === 0 ? (
        <AppText>You don't have any medications</AppText>
      ) : (
        <View style={styles.list}>
          <FlatList
            // data={patientAddedMeds}
            data={data}
            renderItem={({ item }) => (
              <Medication key={item} medication={item} />
            )}
          />
        </View>
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
  list: {
    paddingVertical: 30,
    height: "95%",
  },
});

export default MedicationList;
