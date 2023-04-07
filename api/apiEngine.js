import axios from "axios";
import authStorage from "../auth/storage";

const BASEURL = "http://192.168.1.29:8001/app-api/patient";

const token = async () => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
  return JSON.parse(authToken).access;
};

const put = async (endPoint, headers, data, params) => {
  try {
    const response = await axios.put(
      `${BASEURL}${endPoint}`,
      {
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + token,
        },
      },
      params,
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const post = async (endPoint, data, params) => {
  try {
    const response = await axios.post(`${BASEURL}${endPoint}`, data, {
      params: params,
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + (await token()),
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

const del = async (endPoint, headers, params) => {
  try {
    const response = await axios.delete(
      `${BASEURL}${endPoint}`,
      {
        headers: {
          "Content-type": "application/json",
          ...headers,
        },
      },
      params
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const get = async (endPoint, params) => {
  try {
    const response = await axios.get(`${BASEURL}${endPoint}`, {
      params: params,
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + (await token()),
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default { post, put, del, get };
