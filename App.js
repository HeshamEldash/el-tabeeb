import { StyleSheet, TextInput } from "react-native";
import SectionsScreen from "./screens/SectionsScreen.js";
import StartScreen from "./screens/StartScreen.js";
import MedicationsScreen from "./screens/MedicationsScreen.js";
import ProfileScreen from "./screens/ProfileScreen.js";
import WelcomeScreen from "./screens/WelcomeScreen.js";
import AppTextInput from "./components/AppTextInput.js";
import Screen from "./screens/Screen.js";
import LoginScreen from "./screens/LoginScreen.js";
import RegistrationScreen from "./screens/RegistrationScreen.js";
import ProfileRegistrationScreen from "./screens/ProfileRegistrationScreen.js";
import AppPicker from "./components/AppPicker.js";
import AppDatePicker from "./components/AppDatePicker.js";
import { useState } from "react";

const gender = [
  { value: "M", name: "Male" },
  { value: "F", name: "Female" },
];
export default function App() {
  const [selectedGender, setSelectedGender] = useState();
  return (
    // <WelcomeScreen/>
    // <LoginScreen/>
    // <RegistrationScreen/>

    // <AppTextInput

    // />
    <Screen style={styles.screen}>
      <AppPicker
        items={gender}
        selectedItem={selectedGender}
        setSelectedItem={setSelectedGender}
      />
      <AppDatePicker />
    </Screen>
  );
}

{
  /* <ProfileRegistrationScreen/>  */
}
const styles = StyleSheet.create({
  screen: {
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    backgroundColor: "white",
    width: 300,
    height: 70,
  },
});
