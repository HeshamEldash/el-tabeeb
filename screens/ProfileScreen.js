import React from "react";
import { StyleSheet } from "react-native";


import { useGet } from "../api/apiFunctions";
import { getProfile } from "../api/users";
import useAuth from "../auth/useAuth";

import AppText from "../components/AppText";
import LabeledContainer from "../components/LabeledContainer";
import Section from "../components/Section";
import Screen from "./Screen";


function ProfileScreen(props) {
  const { user } = useAuth();

  const { data, isLoading, isError, error } = useGet(["profile"], getProfile, {
    patient_id: user,
  });

  return (
    <Screen style={styles.screen}>
      <AppText style={styles.title}> Personal profile</AppText>

      <Section title={"email"} isLoading={isLoading}>
        <AppText>{data?.account_email}</AppText>
      </Section>

      <Section title={"personal details"} isLoading={isLoading}>
        <LabeledContainer label={"Name"}>
          <AppText>{data?.first_name}</AppText>
          <AppText>{data?.middle_names}</AppText>
          <AppText>{data?.last_name}</AppText>
        </LabeledContainer>

        <LabeledContainer label={"Date of birth"}>
          <AppText>{data?.date_of_birth}</AppText>
        </LabeledContainer>

        <LabeledContainer label={"gender"}>
          <AppText>{data?.gender}</AppText>
        </LabeledContainer>

        {data?.telephone_numbers.map((number, index) => {
          return (
            <LabeledContainer
              key={number.id}
              label={`Telephone Number ${index + 1}`}
            >
              <AppText>{number.telephone_number}</AppText>
            </LabeledContainer>
          );
        })}
      </Section>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 800,
    marginBottom: 20,
  },

  screen: {
    alignItems: "center",
  },
});

export default ProfileScreen;
