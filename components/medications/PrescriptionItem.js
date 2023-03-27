import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

import colors from "../../config/colors";
import AppText from "../AppText";
import LabeledContainer from "../LabeledContainer";
import appDateTime from "../../utility/appDateTime";

function PrescriptionItem({ prescription}) {
    const navigation = useNavigation();
const handlePress = ()=>{
    navigation.navigate("Prescription", prescription)
}


  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <LabeledContainer label={"Date Created"}>
          <AppText>
            {appDateTime.toDate(new Date(prescription.date_created))}
          </AppText>
        </LabeledContainer>
        <LabeledContainer label={"Prescriber Name"}>
          <AppText>{prescription?.prescriber_name}</AppText>
        </LabeledContainer>
        <LabeledContainer label={"Clinic Name"}>
          <AppText>{prescription?.provider_name}</AppText>
        </LabeledContainer>

        <LabeledContainer label={"Medications"}>
          {prescription.medications.map((medication) => {
            return <AppText key={medication.id}>{medication?.name},</AppText>;
          })}
        </LabeledContainer>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingVertical: 11,
    borderRadius: 20,
  },
});

export default PrescriptionItem;
