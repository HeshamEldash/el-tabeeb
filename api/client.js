import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.1.188:8000/app-api/patient",
});

export default apiClient;
