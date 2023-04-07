import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import * as Yup from "yup";

import AppText from "../components/AppText";
import colors from "../config/colors";
import AppForm from "../components/forms/Appform";
import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/forms/SubmitButton";
import { usePost } from "../api/apiFunctions";
import medicationdApi from "../api/medicationdApi";
import useAuth from "../auth/useAuth";
import ErrorMessage from "../components/forms/ErrorMessage";
import AppModal from "../components/AppModal";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Medication Name"),
  dose: Yup.string().required().label("Medication Dose"),
});

function MedicationAddScreen({ isVisible, setIsVisible }) {
  const { profileData } = useAuth();

  const { mutate, isError, isSuccess, status, isLoading } = usePost(
    medicationdApi.addRegularMedication,
    ["patient-regular-medications"],
    profileData?.id
  );

  const handleSubmit = (values) => {
    mutate(values);
    isSuccess && setIsVisible(false);
  };

  return (
    <AppModal
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      title={"Repeat Medications"}
    >
      <ErrorMessage error={"Sorry, an error occured"} visible={isError} />

      <AppForm
        initialValues={{
          name: "",
          dose: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormField name="name" placeholder="Medication Name" />

        <AppFormField name="dose" placeholder="Medication Dose" />

        <SubmitButton title={"Add"} />
      </AppForm>
    </AppModal>
  );
}

const styles = StyleSheet.create({});

export default MedicationAddScreen;
