import { useContext, useState } from "react";
import jwtDecode from "jwt-decode";

import AuthContext from "./context";
import { getProfile, login } from "../api/users";
import authStorage from "./storage";
import { useGet } from "../api/apiFunctions";

export default useAuth = () => {
  const { user, setUser, isRegistering, setIsRegistering } =
    useContext(AuthContext);
  const [loginFailed, setLoginFailed] = useState(false);

  const logIn = async (email, password) => {
    try {
      const results = await login(email, password);
      const authToken = results.data;

      const accessToken = authToken.access;

      const decoded = jwtDecode(accessToken);
      setUser(decoded.user_id);

      authStorage.storeToken(authToken);
    } catch (error) {
      setLoginFailed(true);
      console.log("error", error);
    }
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

  const { data:profileData, isLoading, isError, error } = useGet(["profile"], getProfile, {
    patient_id: user,
  });

  return { user, logIn, logOut, loginFailed, isRegistering, setIsRegistering, profileData };
};
