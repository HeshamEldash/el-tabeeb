import { StyleSheet, TextInput } from "react-native";
import SectionsScreen from "./screens/SectionsScreen.js";
import StartScreen from "./screens/StartScreen.js";
import MedicationsScreen from "./screens/MedicationsScreen.js";
import ProfileScreen from "./screens/ProfileScreen.js";
import WelcomeScreen from "./screens/WelcomeScreen.js";
import AppTextInput from "./components/AppTextInput.js";
import Screen from "./screens/Screen.js";
import LoginScreen from "./screens/LoginScreen.js";

export default function App() {
  return (
      // <WelcomeScreen/>
      <LoginScreen/>


    // <AppTextInput

    // />
    // <Screen style={styles.screen}>
    //   <TextInput
    //     // placeholder="hellooo"
    //     style={styles.text}
    //   />
    //   <AppTextInput
    //     width={200}
    //   />
    // </Screen>
  );
}

const styles = StyleSheet.create({
  screen:{
    backgroundColor:"red",
    justifyContent:"center",
    alignItems:"center",
  },
  text:{
    backgroundColor:"white",
    width:300,
    height:70,
  }
})
