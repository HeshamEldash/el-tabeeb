import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import AppText from "../components/AppText";
import SectionBox from "../components/SectionBox";
import colors from "../config/colors";
import Screen from "./Screen";



function SectionsScreen({navigation}) {
  const SECTIONS = [
    {
      title: "Personal Profile",
      description: "View your personal profile",
      buttonText: "Go",
      buttonAction: () => navigation.navigate("MedicalProfileScreen"),
    },
    {
      title: "Medications",
      description: "View your medications",
      buttonText: "Go",
      buttonAction: () => navigation.navigate("Medications"),
    },
    {
      title: "Prescriptions",
      description: "View your prescriptions",
      buttonText: "Go",
      buttonAction: () => console.log("Prescriptions"),
    },
    {
      title: "Documents",
      description: "Upload your health documents",
      buttonText: "Go",
      buttonAction: () => console.log("documents"),
    },
  ];
  return (
    <Screen style={styles.screen}>
      <AppText style={styles.title}>Your health record</AppText>
      <FlatList
        data={SECTIONS}
        renderItem={({ item }) => (
          <SectionBox
            title={item.title}
            description={item.description}
            buttonText={item.buttonText}
            buttonAction={item.buttonAction}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.lightGrey,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop:20,
    marginBottom: 30,
  },
});

export default SectionsScreen;
