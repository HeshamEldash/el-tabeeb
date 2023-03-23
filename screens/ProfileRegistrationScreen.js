import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import AppForm from "../components/forms/Appform";
import AppFormField from "../components/forms/AppFormField";
import Screen from "./Screen";
import FormDatePicker from "../components/forms/FormDatePicker";
import SubmitButton from "../components/forms/SubmitButton";

import FormPicker from "../components/forms/FormPicker";

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required().label("First Name"),
  middle_names: Yup.string().label("Middle Names"),
  last_name: Yup.string().required().label("Last Name"),
  date_of_birth: Yup.date().required().label("Date Of Birth"),
  gender: Yup.string().required().label("Gender"),
  telephoneNumber: Yup.string().required().label("Telephone Number"),
});

const gender = [
  { value: "M", name: "Male" },
  { value: "F", name: "Female" },
];

function ProfileRegistrationScreen() {
  return (
    <Screen style={styles.screen}>
      <AppForm
        initialValues={{
          first_name: "",
          middle_names: "",
          last_name: "",
          date_of_birth: "",
          gender: "",
          telephoneNumber: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="first_name"
          icon="account"
          placeholder="First Name"
        />
        <AppFormField
          name="middle_names"
          icon="account"
          placeholder="Middle Names"
        />
        <AppFormField name="last_name" icon="account" placeholder="Last Name" />

        <FormPicker
          items={gender}
          icon="gender-male-female"
          name="gender"
          placeholder="Gender"
        />

        <FormDatePicker name="date_of_birth" />

        <SubmitButton title={"Register"} style={styles.button} />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 15,
  },
});

export default ProfileRegistrationScreen;
