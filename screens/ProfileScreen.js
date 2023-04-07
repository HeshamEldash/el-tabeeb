import React from "react";
import { StyleSheet, View } from "react-native";

import { useGet } from "../api/apiFunctions";
import { getProfile } from "../api/users";
import useAuth from "../auth/useAuth";

import AppText from "../components/AppText";
import Button from "../components/Button";
import LabeledContainer from "../components/LabeledContainer";
import Section from "../components/Section";
import ErrorScreen from "./ErrorScreen";
import Screen from "./Screen";

function ProfileScreen() {
  const { user , logOut} = useAuth();

  const { data, isLoading, isError, error } = useGet(["profile"], getProfile, {
    patient_id: user,
  });

    if (isError) return  <ErrorScreen error={error}/>

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
        <View style={styles.buttonsContainer}>
         <Button style ={styles.button} title={"Logout"} onPress={()=>logOut()}/>

        </View>

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
  buttonsContainer:{
    marginTop:100,
    width:350,
    
  },

  button:{

    width:200,
    alignSelf:"flex-start"

    
  }
});

export default ProfileScreen;
