import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./navigation/navigationTheme.js";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import AuthContext from "./auth/context";
import AppNavigator from "./navigation/AppNavigator.js";
import AppLoader from "./components/AppLoader.js";
import AuthNavigator from "./navigation/AuthNavigator.js";
import Button from "./components/Button.js";
import MedicalProfileScreen from "./screens/MedicalProfileScreen.js";

const queryClient = new QueryClient();

export default function App() {

  // return <MedicalProfileScreen/>

  return (
          <QueryClientProvider client={queryClient}>
    <AppLoader>
      {(user, setUser, isRegistering, setIsRegistering, profileId) => (
        <AuthContext.Provider value={{ user, setUser, isRegistering, setIsRegistering, profileId }}>
            <NavigationContainer theme={navigationTheme}>
              {user && !isRegistering ? <AppNavigator /> : <AuthNavigator />}
            </NavigationContainer>
        </AuthContext.Provider>
      )}
    </AppLoader>
          </QueryClientProvider>
  );
}
const styles = StyleSheet.create({
  mainConatiner: {
    height: "100%",
  },
  screen: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    backgroundColor: "white",
    width: 300,
    height: 70,
  },
});
