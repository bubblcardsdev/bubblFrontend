import axios from "axios";

import { removeAccessToken } from "./local-storage";

// live EC2
// const BASE_URL = "https://bubbl.cards/api";
// development
http://devapii.bubbl.cards/
const BASE_URL = "http://devapii.bubbl.cards/api";
// const BASE_URL = "http://localhost:8001/api";
const axiosInstance = axios.create({ baseURL: BASE_URL });

axiosInstance.interceptors.response.use(
  (response) => response,

  (error) => {
    if (error?.response?.status === 401) {
      // handle refresh token as needed
      removeAccessToken();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
