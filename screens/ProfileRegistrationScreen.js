import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import AppForm from "../components/forms/Appform";
import AppFormField from "../components/forms/AppFormField";
import Screen from "./Screen";
import FormDatePicker from "../components/forms/FormDatePicker";
import SubmitButton from "../components/forms/SubmitButton";

import FormPicker from "../components/forms/FormPicker";
import { registerProfile } from "../api/users";
import appDateTime from "../utility/appDateTime";
import AuthContext from "../auth/context";

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required().label("First Name"),
  middle_names: Yup.string().label("Middle Names"),
  last_name: Yup.string().required().label("Last Name"),
  date_of_birth: Yup.date().required().label("Date Of Birth"),
  gender: Yup.string().required().label("Gender"),
  telephone_number: Yup.string().required().label("Telephone Number"),
});

const gender = [
  { value: "MALE", name: "Male" },
  { value: "FEMALE", name: "Female" },
];

function ProfileRegistrationScreen() {
  const { user, setIsRegistering } = useContext(AuthContext);
  const handleSubmit = async (values) => {

    values.date_of_birth = appDateTime.toDate(values.date_of_birth);

    const result = await registerProfile(values, user);


    if (result.ok) {
      setIsRegistering(false);
      navigation.navigate("Home");
    } else {
      console.log("error");
    }

  };
  return (
    <Screen style={styles.screen}>
      <AppForm
        initialValues={{
          first_name: "",
          middle_names: "",
          last_name: "",
          date_of_birth: "",
          gender: "",
          telephone_number: "",
        }}
        onSubmit={handleSubmit}
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
        <AppFormField
          name="telephone_number"
          icon="phone-log"
          placeholder="Telephone Number"
        />

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
