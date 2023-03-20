import React from "react";
import { View, StyleSheet } from "react-native";

import AppText from "../components/AppText";
import Section from "../components/Section";
import Screen from "./Screen";

function ProfileScreen(props) {
  return (
    <Screen style={styles.screen}>
      <AppText style={styles.title}> Personal profile</AppText>

      <Section title={"email"}>
        <AppText>admin@admin.com</AppText>
      </Section>

      <Section title={"personal details"}>

      {/* <View style={}>
        <AppText>admin@admin.com</AppText>
        <AppText>admin@admin.com</AppText>
      </View> */}

      </Section>


    </Screen>
  );
}

const styles = StyleSheet.create({
  title:{
    fontSize:20,
    fontWeight:800,
    marginBottom:20,
  },

  screen: {
    alignItems: "center",
  },
});

export default ProfileScreen;
