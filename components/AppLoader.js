import { useCallback, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import authStorage from "../auth/storage.js";
import { useGet } from "../api/apiFunctions.js";
import { getProfileApiSauce } from "../api/users.js";

SplashScreen.preventAutoHideAsync();

function AppLoader({ children }) {
  const [user, setUser] = useState();
  const [isRegistering, setIsRegistering] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [profileId, setProfileId]= useState()

  const restoreUser = async () => {
    const user = await authStorage.getUser(); 
    const profile_id = await authStorage.getPatinetProfileId()

    if (user) setUser(user)
    if (profile_id) setProfileId(profile_id)
    
  };

  useEffect(() => {
    async function prepare() {
      try {
        await restoreUser();
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      {children(user, setUser, isRegistering, setIsRegistering, profileId)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { height: "100%" },
});

export default AppLoader;
