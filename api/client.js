import { create } from "apisauce";
import authStorage from "../auth/storage";
const apiClient = create({
  baseURL: "http://192.168.100.19:8001/app-api/patient",
  headers: {
    "Content-type": "application/json",
  },
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
  request.headers["Authorization"] = "Bearer " + JSON.parse(authToken).access;
});

export default apiClient;
