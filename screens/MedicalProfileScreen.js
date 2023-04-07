import React from "react";
import { View, StyleSheet } from "react-native";
import Screen from "./Screen";
import Section from "../components/Section";
import LabeledContainer from "../components/LabeledContainer";
import AppText from "../components/AppText";
import Button from "../components/Button";
import SectionContentWrappr from "../components/SectionContentWrappr";

function MedicalProfileScreen(props) {
  return (
    <Screen style={styles.screen}>
      <Section title={"Weight"} isLoading={false}>
        <SectionContentWrappr actions={<Button title={"Add"} />}>
          <LabeledContainer label={"latest Weight"}>
            <AppText>69</AppText>
            <AppText> Kg</AppText>
          </LabeledContainer>
          <LabeledContainer label={"Date Recorded"}>
            <AppText> 10/10/2010</AppText>
          </LabeledContainer>
        </SectionContentWrappr>
      </Section>

      <Section title={"Height"} isLoading={false}>
        <SectionContentWrappr actions={<Button title={"Add"} />}>
          <LabeledContainer label={"Height"}>
            <AppText>169</AppText>
            <AppText>cm</AppText>
          </LabeledContainer>
        </SectionContentWrappr>
      </Section>

      <Section title={"Blood Pressure"} isLoading={false}>

        <SectionContentWrappr actions={
            <>
        <Button title={"Add"} /> 
        <Button title={"Add"} />
        </>
        }>
        <LabeledContainer label={"Blood Pressure"}>
          <AppText>169</AppText>
          <AppText>/</AppText>
          <AppText>89</AppText>
        </LabeledContainer>
        

        <LabeledContainer label={"Time Recorded"}>
          <AppText> 10/10/2010</AppText>
        </LabeledContainer>
        </SectionContentWrappr>
      </Section>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
  },
  infoSection: {
    flex: 3,
  },
  actionBox: {
    flex: 1,
  },
  container: {
    flexDirection: "row",
  },
});

export default MedicalProfileScreen;
