import React from "react";
import { View, StyleSheet } from "react-native";
import {Picker} from '@react-native-picker/picker';

import AppForm from "../components/forms/Appform";
import AppFormField from "../components/forms/AppFormField";
import Screen from "./Screen";
import FormDatePicker from "../components/forms/FormDatePicker";
import SubmitButton from "../components/forms/SubmitButton";

function ProfileRegistrationScreen(props) {
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

        <AppFormField
          name="gender"
          icon="gender-male-female"
          placeholder="Gender"
        />

        <FormDatePicker name="date_of_birth" />



        <SubmitButton />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {},
});

export default ProfileRegistrationScreen;
