import React from "react";
import { View, StyleSheet, Modal } from "react-native";

import AppText from "../components/AppText";
import colors from "../config/colors";
import AppForm from "../components/forms/Appform";
import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/forms/SubmitButton";


function MedicationAddScreen({ isVisible, setIsVisible }) {
  return (
    <Modal
      visible={isVisible}
      transparent={true}
      onRequestClose={() => setIsVisible(!isVisible)}
      animationType="fade"
    >
      <View style={styles.modal}></View>
      <View style={styles.modalContent}>
        <AppText style={styles.modalTitle}>Repeat Medications</AppText>

        <AppForm
          initialValues={{
            name: "",
            dose: "",
          }}
          onSubmit={(values) => console.log(values)}
        >
          <AppFormField name="name" placeholder="Medication Name" />

          <AppFormField name="dose" placeholder="Medication Dose" />

          <SubmitButton title={"Add"} style={styles.button} />
        </AppForm>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  button: {
    alignContent: "center",
  },
  modalTitle: {
    fontWeight: "800",
    fontSize: 20,
    marginBottom: 25,
    textTransform: "capitalize",
    margin: 10,
  },
  modal: {
    backgroundColor: colors.light,
    opacity: 0.7,
    flex: 1,
  },
  modalContent: {
    position: "absolute",
    bottom: 20,
    width: "95%",
    backgroundColor: colors.white,
    alignItems: "center",
    alignSelf: "center",
    minHeight: 400,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.lightGrey,
    paddingHorizontal: 10,
  },
});

export default MedicationAddScreen;
