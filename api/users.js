import client from "./client";

const login = (email, password) => client.post("/login/", { email, password });

const registerAccount = (email, password) => client.post("/create-account/", { email, password });

const registerProfile = (profileValues, userId) => client.post("/create-profile/", profileValues, {params: { patient_id: userId } });

export { login, registerAccount, registerProfile};
