import axios from "axios";

// eslint-disable-next-line import/prefer-default-export
export const ApiCall = axios.create({
  // baseURL: "http://localhost:8080",
  baseURL: "https://bubbl.cards",
  // baseURL: "https://devapi.bubbl.cards",
});
