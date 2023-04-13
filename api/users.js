import apiEngine from "./apiEngine";
import client from "./client";

const login = (email, password) => client.post("/login/", { email, password });

const registerAccount = (email, password) =>
  client.post("/create-account/", { email, password });

const registerProfile = (profileValues, userId) =>
  client.post("/create-profile/", profileValues, {
    params: { patient_id: userId },
  });


  const getProfileApiSauce = (patient_id ) => client.get("/get-profile/", { patient_id: patient_id })

const getProfile = ({ patient_id }) => apiEngine.get("/get-profile/", { patient_id: patient_id });

export { login, registerAccount, registerProfile, getProfile,getProfileApiSauce };
