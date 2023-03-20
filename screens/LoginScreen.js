import React from "react";
import {
  View,
  StyleSheet,
  Image,
} from "react-native";

import * as Yup from "yup";

import AppText from "../components/AppText";
import AppForm from "../components/forms/Appform";
import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/forms/SubmitButton";
import colors from "../config/colors";
import Screen from "./Screen";

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(8).label("Password"),
  });
  

function LoginScreen() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <AppText style={styles.loginText}>Login</AppText>
      </View>

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={() => console.log("login")}
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
        <SubmitButton title={"Login"} style={styles.button} />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 40,
    height: 50,
  },

  loginText: {
    alignSelf: "center",
    fontSize: 30,
    fontWeight: 600,
    color: colors.medium,
  },
  logo: {
    width: 200,
    height: 150,
    alignSelf: "center",
  },
  logoContainer: {
    alignSelf: "center",
    marginBottom: 40,
    marginTop: 40,
  },
  screen: {
    paddingHorizontal: 15,
  },
});

export default LoginScreen;
