import React from "react";
import { View, StyleSheet } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

import AppForm from "../components/forms/Appform";
import AppFormField from "../components/forms/AppFormField";
import Screen from "./Screen";
import AppDatePicker from "../components/AppDatePicker";

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
        <AppFormField
          name="last_name"
          icon="account"
          placeholder="Last Name"
        />

        <AppFormField
          name="gender"
          icon="gender-male-female"
          placeholder="Gender"
        />





        <AppDatePicker/>

      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {},
});

export default ProfileRegistrationScreen;
