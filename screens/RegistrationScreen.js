import React from "react";
import { View, StyleSheet } from "react-native";
import * as Yup from "yup";

import AppForm from "../components/forms/Appform";
import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/forms/SubmitButton";
import Screen from "./Screen";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(8).label("Password"),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .label("Confirm Password"),
});

function RegistrationScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <AppForm
        initialValues={{
          email: "",
          password: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(values) => navigation.navigate("ProfileRegistration")}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="email"
          icon="email"
          keyboardType="email-address"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="confirmPassword"
          placeholder="confirm Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title={"Next"} style={styles.button} />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({

  screen: {
    paddingHorizontal: 15,
  },
});

export default RegistrationScreen;
